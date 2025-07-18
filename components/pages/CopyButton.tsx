'use client';
import { useState } from 'react';

export default function CopyButton({text}:{text:string}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-gray-200 text-black px-2 py-1 rounded hover:bg-gray-300"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}