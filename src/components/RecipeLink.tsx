"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface RecipeLinkProps {
  href: string;
  children: React.ReactNode;
}

export function RecipeLink({ href, children }: RecipeLinkProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      // 保存当前滚动位置
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
