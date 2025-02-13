import { useState } from "react";

export function useCopyText() {
  const [copied, setCopied] = useState(false);

  function copyTextToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  }

  return {
    copyTextToClipboard,
    copied,
  };
}
