"use client";

import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  label,
  repairTime,
  saved,
}: {
  beforeSrc: string;
  afterSrc: string;
  label: string;
  repairTime?: string;
  saved?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  return (
    <div className="space-y-4">
      <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
        {/* Label badge */}
        <div className="absolute left-4 top-4 z-20 rounded-full bg-brand-dark/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
          {label}
        </div>

        <div
          ref={containerRef}
          className="ba-slider relative aspect-[4/3] w-full"
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={(e) => isDragging.current && handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After image (full width, behind) */}
          <img
            src={afterSrc}
            alt="After repair"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={beforeSrc}
              alt="Before repair"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                width: containerRef.current
                  ? `${containerRef.current.offsetWidth}px`
                  : "100vw",
                maxWidth: "none",
              }}
              draggable={false}
            />
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 z-10 h-full w-0.5 -translate-x-1/2"
            style={{
              left: `${position}%`,
              boxShadow: "0 0 12px rgba(232,134,12,0.5)",
              backgroundColor: "#E8860C",
            }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-orange bg-brand-dark/90 shadow-lg backdrop-blur-sm">
              <svg
                className="h-6 w-6 text-brand-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <span className="absolute bottom-4 left-4 z-10 rounded-lg bg-red-600/80 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm">
            BEFORE
          </span>
          <span className="absolute bottom-4 right-4 z-10 rounded-lg bg-emerald-600/80 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm">
            AFTER
          </span>
        </div>
      </div>

      {/* Stats below slider */}
      {(repairTime || saved) && (
        <div className="flex justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
          {repairTime && (
            <div className="text-center">
              <p className="text-xs text-gray-500">Repair Time</p>
              <p className="font-semibold text-white">{repairTime}</p>
            </div>
          )}
          {saved && (
            <div className="text-center">
              <p className="text-xs text-gray-500">You Saved</p>
              <p className="font-semibold text-brand-orange">{saved}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
