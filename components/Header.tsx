'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <span className="font-bold text-lg">P</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}