"use client";

import Link from "next/link";

interface RecipeLinkProps {
  href: string;
  children: React.ReactNode;
}

export function RecipeLink({ href, children }: RecipeLinkProps) {
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
