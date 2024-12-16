'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { usePathname } from 'next/navigation';

export interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Accueil' },
  { href: '/articles', label: 'Articles' },
  { href: '/about', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle body scroll and menu state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close menu when pathname changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <nav className="fixed z-50 w-full bg-white/90 shadow-sm backdrop-blur-sm dark:bg-black/90">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="z-50 text-2xl font-bold dark:text-white"
          aria-label="Tech Blog Home"
        >
          Tech Blog
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-800 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400`}
            >
              {link.label}
            </Link>
          ))}
          {/* Theme Toggle for Desktop */}
          {/** <ModeToggle /> */}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="z-50 flex items-center space-x-2 md:hidden">
          {/* Theme Toggle for Mobile */}
          {/** <ModeToggle /> */}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            className="text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed left-0 top-20 z-40 h-[calc(100vh-5rem)] w-full overflow-y-auto bg-white/95 pb-10 backdrop-blur-lg transition-all duration-300 ease-in-out dark:bg-black/95 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-full flex-col space-y-8 px-4 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-lg font-medium text-gray-800 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
