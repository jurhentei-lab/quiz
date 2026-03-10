const HUGGING_FACE_URL = "https://router.huggingface.co/v1/chat/completions";
const MODEL = "Qwen/Qwen2.5-7B-Instruct";

const requestHuggingFaceCompletion = async (messages) => {
  const apiKey = process.env.HF_TOKEN;
  if (!apiKey) {
    throw new Error("Missing HF_TOKEN");
  }

  const response = await fetch(HUGGING_FACE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.2,
      response_format: { type: "json_object" },
      max_tokens: 1200,
      messages,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text.slice(0, 300) || "Hugging Face request failed");
  }

  return response.json();
};

module.exports = {
  requestHuggingFaceCompletion,
  MODEL,
};
