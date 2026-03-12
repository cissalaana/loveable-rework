import { useState, useRef, useCallback, useEffect } from "react";

const STICKERS = [
  { emoji: "⭐", x: 92, y: 15, size: 28, rotation: -12 },
  { emoji: "🐱", x: 5, y: 45, size: 32, rotation: 8 },
  { emoji: "✨", x: 88, y: 70, size: 24, rotation: 15 },
  { emoji: "🌸", x: 8, y: 80, size: 26, rotation: -6 },
  { emoji: "💖", x: 94, y: 42, size: 22, rotation: 10 },
  { emoji: "🦋", x: 3, y: 20, size: 28, rotation: -15 },
];

interface StickerState {
  x: number;
  y: number;
  dragging: boolean;
  rotation: number;
}

const DraggableStickers = () => {
  const [stickers, setStickers] = useState<StickerState[]>(() =>
    STICKERS.map((s) => ({
      x: (s.x / 100) * (typeof window !== "undefined" ? window.innerWidth : 1200),
      y: (s.y / 100) * (typeof window !== "undefined" ? window.innerHeight * 3 : 2400),
      dragging: false,
      rotation: s.rotation,
    }))
  );

  const dragInfo = useRef<{ idx: number; offsetX: number; offsetY: number } | null>(null);

  const onPointerDown = useCallback((idx: number, e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    dragInfo.current = {
      idx,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
    setStickers((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, dragging: true } : s))
    );
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragInfo.current) return;
    const { idx, offsetX, offsetY } = dragInfo.current;
    const newX = e.clientX - offsetX + window.scrollX;
    const newY = e.clientY - offsetY + window.scrollY;
    setStickers((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, x: newX, y: newY } : s))
    );
  }, []);

  const onPointerUp = useCallback(() => {
    if (!dragInfo.current) return;
    const idx = dragInfo.current.idx;
    dragInfo.current = null;
    setStickers((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, dragging: false } : s))
    );
  }, []);

  // Reposition on resize
  useEffect(() => {
    const reposition = () => {
      setStickers((prev) =>
        prev.map((s, i) => ({
          ...s,
          x: (STICKERS[i].x / 100) * window.innerWidth,
          y: (STICKERS[i].y / 100) * document.documentElement.scrollHeight,
        }))
      );
    };
    // Only reposition if user hasn't dragged
    reposition();
    window.addEventListener("resize", reposition);
    return () => window.removeEventListener("resize", reposition);
  }, []);

  return (
    <div
      className="hidden md:block"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 50 }}
    >
      {STICKERS.map((sticker, idx) => (
        <div
          key={idx}
          onPointerDown={(e) => onPointerDown(idx, e)}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          style={{
            position: "absolute",
            left: stickers[idx].x,
            top: stickers[idx].y,
            fontSize: sticker.size,
            cursor: stickers[idx].dragging ? "grabbing" : "grab",
            pointerEvents: "auto",
            userSelect: "none",
            transform: `rotate(${stickers[idx].rotation}deg) scale(${stickers[idx].dragging ? 1.25 : 1})`,
            transition: stickers[idx].dragging ? "none" : "transform 0.3s ease",
            opacity: 0.7,
            filter: stickers[idx].dragging ? "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" : "none",
            touchAction: "none",
          }}
        >
          {sticker.emoji}
        </div>
      ))}
    </div>
  );
};

export default DraggableStickers;
