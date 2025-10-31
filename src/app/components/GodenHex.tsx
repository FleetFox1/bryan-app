"use client";

import { useEffect, useRef } from "react";

export default function GoldenHex() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Assert non-null once and lock the type
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
    if (!ctx) return;
    const c = ctx as CanvasRenderingContext2D;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const hexSize = 50;
    const golden = "#d4af37";

    function drawHex(x: number, y: number, size: number) {
      c.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const xi = x + size * Math.cos(angle);
        const yi = y + size * Math.sin(angle);
        c.lineTo(xi, yi);
      }
      c.closePath();
      c.strokeStyle = golden;
      c.lineWidth = 0.5;
      c.stroke();
    }

    const drawGrid = () => {
      c.clearRect(0, 0, width, height);
      const hexHeight = Math.sqrt(3) * hexSize;
      const hexWidth = 2 * hexSize;
      const vertDist = hexHeight * 0.75;
      // const horizDist = hexWidth * 0.5; // not used yet

      for (let y = 0; y < height + hexHeight; y += vertDist) {
        for (let x = 0; x < width + hexWidth; x += hexWidth) {
          drawHex(x + ((Math.floor(y / vertDist) % 2) * hexWidth) / 2, y, hexSize);
        }
      }
    };

    drawGrid();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawGrid();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-20"
    />
  );
}
