"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { searchGames, GameData } from "@/lib/gameData";

interface SearchBarProps {
  compact?: boolean;
  onSelect?: () => void;
}

export default function SearchBar({ compact = false, onSelect }: SearchBarProps) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [results, setResults] = useState<GameData[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (input.length > 0) {
        const searchResults = searchGames(input, 10);
        setResults(searchResults);
        setShowDropdown(true);
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 100); // reduce delay to 100ms, because the front-end search is very fast

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
    setInput(""); // clear input
    onSelect?.(); // call callback if provided
  };

  if (compact) {
    return (
      <div className="relative" ref={wrapperRef}>
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search games..."
            className="w-48 px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
          />
        </div>

        {showDropdown && results.length > 0 && (
          <ul className="absolute top-full left-0 w-48 mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {results.map((item: GameData, index: number) => (
              <li
                key={index}
                onClick={() => handleSelect(item.url)}
                className="p-2 hover:bg-gray-100 cursor-pointer transition-colors border-b last:border-b-0 text-sm text-gray-800">
                {item.game}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center" ref={wrapperRef}>
      
      <div className="w-full max-w-lg flex gap-2 relative z-50">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => input.length > 0 && setShowDropdown(true)}
          placeholder="Type game name, get codes now!"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => input && handleSelect(results[0]?.url)}
          disabled={!input || results.length === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed">
          Go
        </button>

        {showDropdown && results.length > 0 && (
          <ul className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {results.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item.url)}
                className="p-3 hover:bg-gray-100 cursor-pointer transition-colors border-b last:border-b-0 text-gray-800">
                {item.game}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
