"use client";

import { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

type AttentionSnapshot = {
  attentiveFrames: number;
  totalFrames: number;
  attentionScore: number;
  state: string;
};

type WebcamAttentionProps = {
  onChange: (snapshot: AttentionSnapshot) => void;
};

const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
const WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm";

export default function WebcamAttention({ onChange }: WebcamAttentionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const landmarkerRef = useRef<FaceLandmarker | null>(null);
  const frameRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [status, setStatus] = useState("Initializing camera...");
  const [attentionScore, setAttentionScore] = useState(0);

  useEffect(() => {
    let mounted = true;
    let attentiveFrames = 0;
    let totalFrames = 0;

    const publish = (state: string) => {
      const score = totalFrames === 0 ? 0 : Math.round((attentiveFrames / totalFrames) * 100);
      setAttentionScore(score);
      onChange({ attentiveFrames, totalFrames, attentionScore: score, state });
    };

    const inferAttention = async () => {
      if (!mounted || !videoRef.current || !landmarkerRef.current) {
        return;
      }

      const video = videoRef.current;
      if (video.readyState < 2) {
        frameRef.current = requestAnimationFrame(inferAttention);
        return;
      }

      const result = landmarkerRef.current.detectForVideo(video, performance.now());
      totalFrames += 1;

      const face = result.faceLandmarks?.[0];
      if (face) {
        const nose = face[1];
        const leftEye = face[33];
        const rightEye = face[263];
        const centered =
          nose.x > 0.35 &&
          nose.x < 0.65 &&
          nose.y > 0.2 &&
          nose.y < 0.75 &&
          Math.abs(leftEye.y - rightEye.y) < 0.08;

        if (centered) {
          attentiveFrames += 1;
          setStatus("Looking at screen");
          publish("focused");
        } else {
          setStatus("Face detected, attention drifting");
          publish("drifting");
        }
      } else {
        setStatus("Face not detected");
        publish("missing");
      }

      frameRef.current = requestAnimationFrame(inferAttention);
    };

    const start = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: 640, height: 480 },
          audio: false,
        });
        streamRef.current = stream;

        if (!videoRef.current) {
          return;
        }

        videoRef.current.srcObject = stream;
        await videoRef.current.play();

        const vision = await FilesetResolver.forVisionTasks(WASM_URL);
        landmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: MODEL_URL,
          },
          runningMode: "VIDEO",
          numFaces: 1,
        });

        setStatus("Tracking attention");
        publish("ready");
        frameRef.current = requestAnimationFrame(inferAttention);
      } catch {
        setStatus("Camera unavailable");
        publish("blocked");
      }
    };

    void start();

    return () => {
      mounted = false;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      streamRef.current?.getTracks().forEach((track) => track.stop());
      landmarkerRef.current?.close();
    };
  }, [onChange]);

  return (
    <section className="rounded-[2rem] border border-white/60 bg-slate-950 p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.15)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Webcam Focus
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Attention Monitor</h2>
        </div>
        <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
          {attentionScore}%
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
        <video ref={videoRef} muted playsInline className="aspect-video w-full object-cover" />
      </div>

      <div className="mt-4 rounded-[1.25rem] bg-white/10 px-4 py-3 text-sm text-white/80">
        {status}
      </div>
    </section>
  );
}
