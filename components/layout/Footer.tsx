'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/votrenom',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/votrenom',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/votrenom',
    icon: Twitter,
    label: 'Twitter',
  },
];

const footerLinks = [
  { href: '/about', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/mentions-legales', label: 'Mentions Légales' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Colonne 1: Description */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Tech Blog</h3>
            <p className="text-gray-600">
              Partage de connaissances et insights sur les technologies web
              modernes.
            </p>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div>
            <h4 className="mb-4 font-semibold">Suivez-moi</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                  aria-label={label}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} Tech Blog. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
