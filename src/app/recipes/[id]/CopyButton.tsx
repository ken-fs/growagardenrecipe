"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  ingredients: string[];
}

export function CopyButton({ ingredients }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ingredientsText = ingredients.join(" + ");
    try {
      await navigator.clipboard.writeText(ingredientsText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-gray-600 text-white px-4 py-2 border-2 border-gray-800 font-mono text-sm hover:bg-gray-700 flex items-center gap-2"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
