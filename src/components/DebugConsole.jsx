import { useEffect, useState } from "react";

const logs = [
    'const caffeineLevel = "HIGH";',
    "const imposterSyndrome = true;",
    'const playlistMood = "lofi but existential";',
    'const currentBug = "Why isn’t CSS centering working 😭";',
    "",
    "function dreamJob() {",
    '  return "somewhere I can Google things in peace";',
    "}"
    ];

    const DebugConsole = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [visibleLines, setVisibleLines] = useState([]);

    useEffect(() => {
        if (currentLine < logs.length) {
        const timeout = setTimeout(() => {
            setVisibleLines((prev) => [...prev, logs[currentLine]]);
            setCurrentLine((prev) => prev + 1);
        }, 600);
        return () => clearTimeout(timeout);
        }
    }, [currentLine]);

    return (
        <div className="bg-black text-green-400 font-mono p-6 rounded-xl shadow-md mt-4">
        <div className="text-sm">
            {visibleLines.map((line, i) => (
            <div key={i}>{line}</div>
            ))}
            {currentLine < logs.length && <div className="animate-pulse">▌</div>}
        </div>
        </div>
    );
};

export default DebugConsole;
