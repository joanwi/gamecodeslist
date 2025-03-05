"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{ game: string; url: string }[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (input.length > 0) {
        const res = await fetch(`/api/search?q=${encodeURIComponent(input)}`);
        const data = await res.json();
        setResults(data);
        setShowDropdown(true);
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [input]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (url: string) => {
    router.push(url);
    setShowDropdown(false);
  };

  return (
    <div className="relative flex flex-col items-center my-8" ref={wrapperRef}>
      <h2 className="text-2xl font-bold text-center mb-8">
        Enter a game name, quickly find the latest redeem codes!
      </h2>
      <div className="w-full max-w-lg flex gap-2 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          placeholder="Enter game name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => input && handleSelect(results[0]?.url)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go
        </button>

        {showDropdown && results.length > 0 && (
          <ul className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg">
            {results.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item.url)}
                className="p-3 hover:bg-gray-100 cursor-pointer transition-colors">
                {item.game}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
