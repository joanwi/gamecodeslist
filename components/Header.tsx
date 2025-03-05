'use client'
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Jujutsu Infinite', href: '/jujutsu-infinite-codes' },
  { text: 'Genshin Impact', href: '/genshin-impact-codes' },
  { text: 'Blue Lock Rivals', href: '/blue-lock-rivals-codes' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 relative">
      <div className="container pr-4 mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          GameCodesList
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link href={item.href} className="hover:underline">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="w-6 h-px bg-white mb-1 transition-transform duration-300"></div>
          <div className="w-6 h-px bg-white mb-1 opacity-100 transition-opacity duration-300"></div>
          <div className="w-6 h-px bg-white transition-transform duration-300"></div>
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-800 z-50 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="p-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link href={item.href} className="block py-2 hover:underline">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
