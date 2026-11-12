"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }
  return (
    <button type="button" className="kk-copy" onClick={copy} aria-label={`${label}: ${text}`}>
      <span aria-hidden="true">{copied ? "Copied" : label}</span>
      <span className="kk-sr" aria-live="polite">{copied ? "Copied to clipboard" : ""}</span>
    </button>
  );
}
