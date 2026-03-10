(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/components/AnalyticsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const analytics = [
    {
        label: "Generated Questions",
        key: "questions"
    },
    {
        label: "Quiz Score",
        key: "score"
    },
    {
        label: "Attention Score",
        key: "attention"
    }
];
function AnalyticsPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "7bfa935a3b7f6dbfd1eaa869acc90c39d484c1af08d364b12e59d6dd33c70d97") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7bfa935a3b7f6dbfd1eaa869acc90c39d484c1af08d364b12e59d6dd33c70d97";
    }
    const { questionCount, score, attentionScore, attentionState } = t0;
    const t1 = `${questionCount}`;
    const t2 = `${score}%`;
    const t3 = `${attentionScore}%`;
    let t4;
    if ($[1] !== t1 || $[2] !== t2 || $[3] !== t3) {
        t4 = {
            questions: t1,
            score: t2,
            attention: t3
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const values = t4;
    let t5;
    if ($[5] !== attentionState || $[6] !== values) {
        t5 = analytics.map({
            "AnalyticsPanel[analytics.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[1.75rem] border border-white/70 bg-white/75 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.07)] backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold uppercase tracking-[0.28em] text-slate-500",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/components/AnalyticsPanel.tsx",
                            lineNumber: 55,
                            columnNumber: 194
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-3xl font-semibold text-slate-950",
                            children: values[item.key]
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/components/AnalyticsPanel.tsx",
                            lineNumber: 55,
                            columnNumber: 290
                        }, this),
                        item.key === "attention" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-slate-500",
                            children: [
                                "State: ",
                                attentionState
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/components/AnalyticsPanel.tsx",
                            lineNumber: 55,
                            columnNumber: 399
                        }, this)
                    ]
                }, item.key, true, {
                    fileName: "[project]/frontend/src/app/components/AnalyticsPanel.tsx",
                    lineNumber: 55,
                    columnNumber: 50
                }, this)
        }["AnalyticsPanel[analytics.map()]"]);
        $[5] = attentionState;
        $[6] = values;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid gap-4 md:grid-cols-3",
            children: t5
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/AnalyticsPanel.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_c = AnalyticsPanel;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/QuizRunner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizRunner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function QuizRunner(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "0aa66364ff21b3fd0ac23ffc48f16017a15f8e9582bbaff6415cbe8cdc17faa5") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0aa66364ff21b3fd0ac23ffc48f16017a15f8e9582bbaff6415cbe8cdc17faa5";
    }
    const { questions, currentIndex, selectedAnswers, finished, onSelect, onNext, onRestart } = t0;
    if (questions.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-[2rem] border border-dashed border-slate-300 bg-white/60 p-8 text-center text-slate-500",
                children: "Generate a quiz to start answering."
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                lineNumber: 34,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== questions || $[3] !== selectedAnswers) {
        let t2;
        if ($[5] !== selectedAnswers) {
            t2 = ({
                "QuizRunner[questions.reduce()]": (count, question, index)=>selectedAnswers[index] === question.correctAnswer ? count + 1 : count
            })["QuizRunner[questions.reduce()]"];
            $[5] = selectedAnswers;
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        t1 = questions.reduce(t2, 0);
        $[2] = questions;
        $[3] = selectedAnswers;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const correctCount = t1;
    if (finished) {
        let t2;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600",
                children: "Results"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                lineNumber: 64,
                columnNumber: 12
            }, this);
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        let t3;
        if ($[8] !== correctCount || $[9] !== questions.length) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-2 text-2xl font-semibold text-slate-900",
                        children: [
                            "Score ",
                            correctCount,
                            "/",
                            questions.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                lineNumber: 71,
                columnNumber: 12
            }, this);
            $[8] = correctCount;
            $[9] = questions.length;
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        let t4;
        if ($[11] !== onRestart) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRestart,
                className: "rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800",
                children: "Retake"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, this);
            $[11] = onRestart;
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        let t5;
        if ($[13] !== t3 || $[14] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                lineNumber: 88,
                columnNumber: 12
            }, this);
            $[13] = t3;
            $[14] = t4;
            $[15] = t5;
        } else {
            t5 = $[15];
        }
        let t6;
        if ($[16] !== questions || $[17] !== selectedAnswers) {
            let t7;
            if ($[19] !== selectedAnswers) {
                t7 = ({
                    "QuizRunner[questions.map()]": (question_0, index_0)=>{
                        const userAnswer = selectedAnswers[index_0] || "No answer";
                        const isCorrect = userAnswer === question_0.correctAnswer;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[1.5rem] border border-slate-200 bg-white p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-slate-900",
                                    children: [
                                        index_0 + 1,
                                        ". ",
                                        question_0.question
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                                    lineNumber: 103,
                                    columnNumber: 133
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-2 text-sm ${isCorrect ? "text-emerald-700" : "text-rose-700"}`,
                                    children: [
                                        "Your answer: ",
                                        userAnswer
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                                    lineNumber: 103,
                                    columnNumber: 225
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-slate-700",
                                    children: [
                                        "Correct answer: ",
                                        question_0.correctAnswer
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                                    lineNumber: 103,
                                    columnNumber: 336
                                }, this),
                                question_0.explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600",
                                    children: question_0.explanation
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                                    lineNumber: 103,
                                    columnNumber: 452
                                }, this)
                            ]
                        }, `${question_0.question}-${index_0}`, true, {
                            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                            lineNumber: 103,
                            columnNumber: 20
                        }, this);
                    }
                })["QuizRunner[questions.map()]"];
                $[19] = selectedAnswers;
                $[20] = t7;
            } else {
                t7 = $[20];
            }
            t6 = questions.map(t7);
            $[16] = questions;
            $[17] = selectedAnswers;
            $[18] = t6;
        } else {
            t6 = $[18];
        }
        let t7;
        if ($[21] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: t6
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                lineNumber: 120,
                columnNumber: 12
            }, this);
            $[21] = t6;
            $[22] = t7;
        } else {
            t7 = $[22];
        }
        let t8;
        if ($[23] !== t5 || $[24] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-[2rem] border border-emerald-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
                children: [
                    t5,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                lineNumber: 128,
                columnNumber: 12
            }, this);
            $[23] = t5;
            $[24] = t7;
            $[25] = t8;
        } else {
            t8 = $[25];
        }
        return t8;
    }
    const activeQuestion = questions[currentIndex];
    const selected = selectedAnswers[currentIndex] ?? "";
    let t2;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold uppercase tracking-[0.3em] text-slate-500",
            children: "Quiz"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[26] = t2;
    } else {
        t2 = $[26];
    }
    const t3 = currentIndex + 1;
    let t4;
    if ($[27] !== questions.length || $[28] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-2xl font-semibold text-slate-900",
                    children: [
                        "Question ",
                        t3,
                        " of ",
                        questions.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                    lineNumber: 149,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[27] = questions.length;
        $[28] = t3;
        $[29] = t4;
    } else {
        t4 = $[29];
    }
    let t5;
    if ($[30] !== currentIndex || $[31] !== questions.length) {
        t5 = Math.round((currentIndex + 1) / questions.length * 100);
        $[30] = currentIndex;
        $[31] = questions.length;
        $[32] = t5;
    } else {
        t5 = $[32];
    }
    let t6;
    if ($[33] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900",
            children: [
                t5,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[33] = t5;
        $[34] = t6;
    } else {
        t6 = $[34];
    }
    let t7;
    if ($[35] !== t4 || $[36] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5 flex items-center justify-between",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[35] = t4;
        $[36] = t6;
        $[37] = t7;
    } else {
        t7 = $[37];
    }
    let t8;
    if ($[38] !== activeQuestion.question) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-5 text-lg font-medium text-slate-900",
            children: activeQuestion.question
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, this);
        $[38] = activeQuestion.question;
        $[39] = t8;
    } else {
        t8 = $[39];
    }
    let t9;
    if ($[40] !== activeQuestion.options || $[41] !== onSelect || $[42] !== selected) {
        let t10;
        if ($[44] !== onSelect || $[45] !== selected) {
            t10 = ({
                "QuizRunner[activeQuestion.options.map()]": (option)=>{
                    const isActive = selected === option;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "QuizRunner[activeQuestion.options.map() > <button>.onClick]": ()=>onSelect(option)
                        }["QuizRunner[activeQuestion.options.map() > <button>.onClick]"],
                        className: `w-full rounded-[1.25rem] border px-4 py-4 text-left text-sm transition ${isActive ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-800 hover:border-amber-400 hover:bg-amber-50"}`,
                        children: option
                    }, option, false, {
                        fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                        lineNumber: 197,
                        columnNumber: 18
                    }, this);
                }
            })["QuizRunner[activeQuestion.options.map()]"];
            $[44] = onSelect;
            $[45] = selected;
            $[46] = t10;
        } else {
            t10 = $[46];
        }
        t9 = activeQuestion.options.map(t10);
        $[40] = activeQuestion.options;
        $[41] = onSelect;
        $[42] = selected;
        $[43] = t9;
    } else {
        t9 = $[43];
    }
    let t10;
    if ($[47] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t9
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[47] = t9;
        $[48] = t10;
    } else {
        t10 = $[48];
    }
    let t11;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "max-w-md text-sm text-slate-500",
            children: "Explanations are shown after you finish all questions."
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[49] = t11;
    } else {
        t11 = $[49];
    }
    const t12 = !selected;
    const t13 = `rounded-full px-5 py-3 text-sm font-semibold transition ${selected ? "bg-slate-950 text-white hover:bg-slate-800" : "cursor-not-allowed bg-slate-200 text-slate-500"}`;
    const t14 = currentIndex === questions.length - 1 ? "Finish Quiz" : "Next Question";
    let t15;
    if ($[50] !== onNext || $[51] !== t12 || $[52] !== t13 || $[53] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex items-center justify-between",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onNext,
                    disabled: t12,
                    className: t13,
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
                    lineNumber: 236,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[50] = onNext;
        $[51] = t12;
        $[52] = t13;
        $[53] = t14;
        $[54] = t15;
    } else {
        t15 = $[54];
    }
    let t16;
    if ($[55] !== t10 || $[56] !== t15 || $[57] !== t7 || $[58] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
            children: [
                t7,
                t8,
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/QuizRunner.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[55] = t10;
        $[56] = t15;
        $[57] = t7;
        $[58] = t8;
        $[59] = t16;
    } else {
        t16 = $[59];
    }
    return t16;
}
_c = QuizRunner;
var _c;
__turbopack_context__.k.register(_c, "QuizRunner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/TextComposer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextComposer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function TextComposer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "cc2ffc71aeffda343fc6e2df5e74931dbf68c500295a4a248de7d8adcbef7fd0") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc2ffc71aeffda343fc6e2df5e74931dbf68c500295a4a248de7d8adcbef7fd0";
    }
    const { title, text, loading, onTitleChange, onTextChange, onGenerate } = t0;
    let t1;
    if ($[1] !== text || $[2] !== title) {
        t1 = title.trim().length > 0 && text.trim().length > 40;
        $[1] = text;
        $[2] = title;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const canGenerate = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-semibold uppercase tracking-[0.3em] text-slate-500",
                    children: "Study Input"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
                    lineNumber: 40,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-2xl font-semibold text-slate-900",
                    children: "Paste your material"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
                    lineNumber: 40,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== text) {
        t3 = text.trim().split(/\s+/).filter(Boolean);
        $[5] = text;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3.length) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5 flex items-center justify-between",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white",
                    children: [
                        t3.length,
                        " words"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
                    lineNumber: 55,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = t3.length;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== onTitleChange) {
        t5 = ({
            "TextComposer[<input>.onChange]": (event)=>onTitleChange(event.target.value)
        })["TextComposer[<input>.onChange]"];
        $[9] = onTitleChange;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5 || $[12] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: title,
            onChange: t5,
            placeholder: "Topic title",
            className: "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = title;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== onTextChange) {
        t7 = ({
            "TextComposer[<textarea>.onChange]": (event_0)=>onTextChange(event_0.target.value)
        })["TextComposer[<textarea>.onChange]"];
        $[14] = onTextChange;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7 || $[17] !== text) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: text,
            onChange: t7,
            rows: 12,
            placeholder: "Paste study notes, article, chapter summary, or lecture material here...",
            className: "w-full resize-none rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-amber-400"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = text;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500",
            children: "AI generates 5 MCQs, 4 options each, with the correct answer and explanation."
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = !canGenerate || loading;
    const t11 = `rounded-full px-5 py-3 text-sm font-semibold transition ${canGenerate && !loading ? "bg-slate-950 text-white hover:bg-slate-800" : "cursor-not-allowed bg-slate-200 text-slate-500"}`;
    const t12 = loading ? "Generating..." : "Generate Quiz";
    let t13;
    if ($[20] !== onGenerate || $[21] !== t10 || $[22] !== t11 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onGenerate,
                    disabled: t10,
                    className: t11,
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
                    lineNumber: 111,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[20] = onGenerate;
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t13 || $[26] !== t6 || $[27] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t6,
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t6;
        $[27] = t8;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t14 || $[30] !== t4) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_30px_80px_rgba(20,24,40,0.10)] backdrop-blur",
            children: [
                t4,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/TextComposer.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t4;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    return t15;
}
_c = TextComposer;
var _c;
__turbopack_context__.k.register(_c, "TextComposer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/WebcamAttention.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebcamAttention
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MODEL_URL = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
const WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm";
function WebcamAttention(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "50b476432603d39d8b3745e614c74e467763244b102ee70d87ebfd321916d30f") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "50b476432603d39d8b3745e614c74e467763244b102ee70d87ebfd321916d30f";
    }
    const { onChange } = t0;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const landmarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Initializing camera...");
    const [attentionScore, setAttentionScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    let t2;
    if ($[1] !== onChange) {
        t1 = ({
            "WebcamAttention[useEffect()]": ()=>{
                let mounted = true;
                let attentiveFrames = 0;
                let totalFrames = 0;
                const publish = {
                    "WebcamAttention[useEffect() > publish]": (state)=>{
                        const score = totalFrames === 0 ? 0 : Math.round(attentiveFrames / totalFrames * 100);
                        setAttentionScore(score);
                        onChange({
                            attentiveFrames,
                            totalFrames,
                            attentionScore: score,
                            state
                        });
                    }
                }["WebcamAttention[useEffect() > publish]"];
                const inferAttention = {
                    "WebcamAttention[useEffect() > inferAttention]": async ()=>{
                        if (!mounted || !videoRef.current || !landmarkerRef.current) {
                            return;
                        }
                        const video = videoRef.current;
                        if (video.readyState < 2) {
                            frameRef.current = requestAnimationFrame(inferAttention);
                            return;
                        }
                        const result = landmarkerRef.current.detectForVideo(video, performance.now());
                        totalFrames = totalFrames + 1;
                        totalFrames;
                        const face = result.faceLandmarks?.[0];
                        if (face) {
                            const nose = face[1];
                            const leftEye = face[33];
                            const rightEye = face[263];
                            const centered = nose.x > 0.35 && nose.x < 0.65 && nose.y > 0.2 && nose.y < 0.75 && Math.abs(leftEye.y - rightEye.y) < 0.08;
                            if (centered) {
                                attentiveFrames = attentiveFrames + 1;
                                attentiveFrames;
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
                    }
                }["WebcamAttention[useEffect() > inferAttention]"];
                const start = {
                    "WebcamAttention[useEffect() > start]": async ()=>{
                        try {
                            const stream = await navigator.mediaDevices.getUserMedia({
                                video: {
                                    facingMode: "user",
                                    width: 640,
                                    height: 480
                                },
                                audio: false
                            });
                            streamRef.current = stream;
                            if (!videoRef.current) {
                                return;
                            }
                            videoRef.current.srcObject = stream;
                            await videoRef.current.play();
                            const vision = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilesetResolver"].forVisionTasks(WASM_URL);
                            landmarkerRef.current = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarker"].createFromOptions(vision, {
                                baseOptions: {
                                    modelAssetPath: MODEL_URL
                                },
                                runningMode: "VIDEO",
                                numFaces: 1
                            });
                            setStatus("Tracking attention");
                            publish("ready");
                            frameRef.current = requestAnimationFrame(inferAttention);
                        } catch  {
                            setStatus("Camera unavailable");
                            publish("blocked");
                        }
                    }
                }["WebcamAttention[useEffect() > start]"];
                start();
                return ()=>{
                    mounted = false;
                    if (frameRef.current) {
                        cancelAnimationFrame(frameRef.current);
                    }
                    streamRef.current?.getTracks().forEach(_WebcamAttentionUseEffectAnonymousAnonymous);
                    landmarkerRef.current?.close();
                };
            }
        })["WebcamAttention[useEffect()]"];
        t2 = [
            onChange
        ];
        $[1] = onChange;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-semibold uppercase tracking-[0.28em] text-white/60",
                    children: "Webcam Focus"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
                    lineNumber: 145,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-2xl font-semibold",
                    children: "Attention Monitor"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
                    lineNumber: 145,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== attentionScore) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex items-center justify-between",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-white/10 px-4 py-2 text-sm font-semibold",
                    children: [
                        attentionScore,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
                    lineNumber: 152,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[5] = attentionScore;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-[1.5rem] border border-white/10 bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                muted: true,
                playsInline: true,
                className: "aspect-video w-full object-cover"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
                lineNumber: 160,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== status) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 rounded-[1.25rem] bg-white/10 px-4 py-3 text-sm text-white/80",
            children: status
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[8] = status;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-[2rem] border border-white/60 bg-slate-950 p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.15)]",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/WebcamAttention.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_s(WebcamAttention, "2LRM8bRZ1+a/3wqdLOhKFG2FUgs=");
_c = WebcamAttention;
function _WebcamAttentionUseEffectAnonymousAnonymous(track) {
    return track.stop();
}
var _c;
__turbopack_context__.k.register(_c, "WebcamAttention");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/QuizStudio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$AnalyticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/AnalyticsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$QuizRunner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/QuizRunner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$TextComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/TextComposer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$WebcamAttention$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/WebcamAttention.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:4000";
function QuizStudio() {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [attention, setAttention] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        attentiveFrames: 0,
        totalFrames: 0,
        attentionScore: 0,
        state: "idle"
    });
    const scorePercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuizStudio.useMemo[scorePercent]": ()=>{
            if (questions.length === 0) {
                return 0;
            }
            const correctCount = questions.reduce({
                "QuizStudio.useMemo[scorePercent].correctCount": (count, question, index)=>{
                    return answers[index] === question.correctAnswer ? count + 1 : count;
                }
            }["QuizStudio.useMemo[scorePercent].correctCount"], 0);
            return Math.round(correctCount / questions.length * 100);
        }
    }["QuizStudio.useMemo[scorePercent]"], [
        answers,
        questions
    ]);
    const handleGenerate = async ()=>{
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${API_BASE_URL}/api/article`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    text
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.error ?? "Failed to generate quiz.");
                return;
            }
            const nextQuestions = Array.isArray(data.questions) ? data.questions : [];
            if (nextQuestions.length !== 5) {
                setError("The AI did not return 5 complete questions. Try again with clearer material.");
                return;
            }
            setQuestions(nextQuestions);
            setAnswers(new Array(nextQuestions.length).fill(""));
            setCurrentIndex(0);
            setFinished(false);
        } catch  {
            setError("Could not reach the AI service.");
        } finally{
            setLoading(false);
        }
    };
    const handleSelect = (option)=>{
        setAnswers((prev)=>{
            const next = [
                ...prev
            ];
            next[currentIndex] = option;
            return next;
        });
    };
    const handleNext = ()=>{
        if (currentIndex === questions.length - 1) {
            setFinished(true);
            return;
        }
        setCurrentIndex((prev_0)=>prev_0 + 1);
    };
    const handleRestart = ()=>{
        setAnswers(new Array(questions.length).fill(""));
        setCurrentIndex(0);
        setFinished(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(252,211,77,0.26),_transparent_28%),linear-gradient(180deg,_#f7f4ec_0%,_#eef2ff_52%,_#f8fafc_100%)] px-6 py-10 text-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.35em] text-slate-500",
                                    children: "AI Quiz Generator"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-4 text-5xl font-semibold leading-tight text-slate-950",
                                    children: "Turn study material into an interactive quiz with focus tracking."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-xl text-lg text-slate-600",
                                    children: "Paste notes, generate 5 AI questions with explanations, answer them, and review your score alongside webcam-based attention analytics."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[1.75rem] border border-white/60 bg-white/70 px-6 py-5 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.28em] text-slate-500",
                                    children: "Stack"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-700",
                                    children: "Next.js App Router, TypeScript, TailwindCSS, OpenAI API, MediaPipe Face Landmarker"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$AnalyticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    questionCount: questions.length,
                    score: scorePercent,
                    attentionScore: attention.attentionScore,
                    attentionState: attention.state
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                    lineNumber: 123,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$TextComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: title,
                                    text: text,
                                    loading: loading,
                                    onTitleChange: setTitle,
                                    onTextChange: setText,
                                    onGenerate: handleGenerate
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$QuizRunner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    questions: questions,
                                    currentIndex: currentIndex,
                                    selectedAnswers: answers,
                                    finished: finished,
                                    onSelect: handleSelect,
                                    onNext: handleNext,
                                    onRestart: handleRestart
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$WebcamAttention$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onChange: setAttention
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-[0.28em] text-slate-500",
                                            children: "Attention Analytics"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[1.25rem] bg-slate-50 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Attentive Frames"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-2xl font-semibold text-slate-950",
                                                            children: attention.attentiveFrames
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[1.25rem] bg-slate-50 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Observed Frames"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-2xl font-semibold text-slate-950",
                                                            children: attention.totalFrames
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-sm leading-6 text-slate-600",
                                            children: "Attention score is estimated from face presence and whether your face landmarks stay centered toward the screen."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/components/QuizStudio.tsx",
        lineNumber: 96,
        columnNumber: 10
    }, this);
}
_s(QuizStudio, "X3Roryp8aXJIZME39qBWHiWsAKY=");
_c = QuizStudio;
var _c;
__turbopack_context__.k.register(_c, "QuizStudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_app_components_b60a982d._.js.map