"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function BackButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      // 尝试返回到之前的位置
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      if (scrollPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(scrollPosition));
        }, 100);
      }
    }
  };

  return (
    <Link
      href="/"
      className="inline-block bg-green-700 text-green-100 px-4 py-2 tech-border font-mono hover:bg-green-600 hover:tech-glow-sm transition-all"
      onClick={handleClick}
    >
      ← Back to Recipes
    </Link>
  );
}
