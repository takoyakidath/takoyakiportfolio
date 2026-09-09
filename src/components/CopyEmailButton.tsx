"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <div className="copy-email">
      <button
        className="copy-button"
        type="button"
        onClick={copyEmail}
        aria-label={
          status === "copied"
            ? "メールアドレスをコピーしました"
            : "メールアドレスをコピー"
        }
      >
        {status === "copied" ? (
          <Check size={19} aria-hidden="true" />
        ) : (
          <Copy size={19} aria-hidden="true" />
        )}
      </button>
      <output className="copy-status" aria-live="polite">
        {status === "copied"
          ? "コピーしました"
          : status === "error"
            ? "メールアドレスを選択してコピーしてください"
            : ""}
      </output>
    </div>
  );
}
