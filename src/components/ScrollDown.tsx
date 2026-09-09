"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollDown() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY <= 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="text-xs font-bold mb-1">Scroll down</span>
      <div aria-hidden="true">
        <ChevronDown className="animate-chevron-fade" size={20} />
        <ChevronDown
          className="animate-chevron-fade animation-delay-150 -mt-3"
          size={20}
        />
        <ChevronDown
          className="animate-chevron-fade animation-delay-300 -mt-3"
          size={20}
        />
      </div>
    </div>
  );
}
