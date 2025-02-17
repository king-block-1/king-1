"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background border-b border-black/[.08] dark:border-white/[.145] h-16 flex items-center px-6 z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
        <Link href="/" className="text-base md:text-lg font-semibold whitespace-nowrap">
          King Blockchain
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/explore" 
            className="text-sm hover:text-primary transition-colors"
          >
            Explore
          </Link>
          <Link 
            href="/creators" 
            className="text-sm hover:text-primary transition-colors"
          >
            Creators
          </Link>
          <Button>
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-black/[.05] dark:hover:bg-white/[.06] rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-black/[.08] dark:border-white/[.145] py-4 px-6 md:hidden flex flex-col gap-4 shadow-lg">
            <Link 
              href="/explore" 
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              href="/creators" 
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Creators
            </Link>
            <Button
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}; 