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
      className="inline-block bg-gray-600 text-white px-4 py-2 border-2 border-gray-800 font-mono hover:bg-gray-700"
      onClick={handleClick}
    >
      ← Back to Recipes
    </Link>
  );
}
