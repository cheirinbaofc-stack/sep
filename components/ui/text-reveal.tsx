'use client';

import { cn } from "@/lib/utils";
import { useState } from 'react';

interface TextRevealProps {
  word?: string;
  className?: string;
}

export default function TextReveal({ word = "Cinematic Reveal", className = "" }: TextRevealProps) {
  const [key, setKey] = useState(0);

  const replay = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className={cn(`text-reveal-container`, className)}>
      
      <div key={key} className="text-wrapper">
        <h1 className="title font-display" aria-label={word}>
          {word.split("").map((char, i) => (
            <span
              key={`${key}-${i}`}
              className="char"
              style={{
                "--index": i,
              } as React.CSSProperties}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      <button className="replay-button" onClick={replay}>
        <span className="btn-text">Replay Animation</span>
        <div className="btn-shine" />
      </button>

      <style jsx>{`
        .text-reveal-container {
          --bg-color: #0D0A0E;
          --text-color: #F5EEF0;
          --btn-bg: rgba(201,150,122,0.12);
          --btn-text: #F5EEF0;
          --btn-border: rgba(204,153,153,0.3);
          --btn-hover: rgba(201,150,122,0.2);
          --shine-color: rgba(242,201,201,0.2);
          --container-border: rgba(204,153,153,0.18);
        }

        .text-reveal-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background-color: var(--bg-color); 
          color: var(--text-color);
          border: 1px solid var(--container-border);
          border-radius: 12px;
          overflow: hidden;
          min-height: 300px;
          width: 100%;
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .text-wrapper {
          position: relative;
          z-index: 10;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          color: var(--text-color);
          transition: color 0.3s ease;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
        }

        .char {
          display: inline-block;
          opacity: 0;
          filter: blur(12px);
          transform: translateY(40%) scale(1.1) translateZ(0);
          animation: cinematic-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(0.04s * var(--index));
          will-change: transform, opacity, filter;
        }

        .replay-button {
          margin-top: 2.5rem;
          position: relative;
          padding: 0.75rem 1.5rem;
          background-color: var(--btn-bg);
          color: var(--btn-text);
          border: 1px solid var(--btn-border);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          overflow: hidden;
          z-index: 20;
        }

        .replay-button:hover {
          background-color: var(--btn-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .replay-button:active {
          transform: translateY(0);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            var(--shine-color),
            transparent
          );
          transform: skewX(-20deg);
          animation: shine 4s infinite;
          pointer-events: none;
        }

        @keyframes cinematic-reveal {
          0% {
            opacity: 0;
            filter: blur(12px);
            transform: translateY(40%) scale(1.1);
          }
          50% {
             opacity: 0.7;
             filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .char {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
