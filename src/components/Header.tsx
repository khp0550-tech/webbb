import React, { useState } from 'react';
import { Menu, X, Award } from 'lucide-react';

interface HeaderProps {
  onStartQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-baseline gap-2 text-stone-900 group whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-2xl font-bold tracking-tight group-hover:text-amber-900 transition-colors">
              KULTURATLAS DEUTSCHLAND
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a
              href="#fakten"
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Fakten & Zahlen
            </a>
            <a
              href="#bundeslaender"
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              16 Bundesländer
            </a>
            <a
              href="#traditionen"
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Kultur & Bräuche
            </a>
            <a
              href="#redewendungen"
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Redewendungen
            </a>
            <a
              href="#geschichte"
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Geschichte
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Wissen testen</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 space-y-3">
            <a
              href="#fakten"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 hover:text-stone-950 px-2 py-1.5"
            >
              Fakten & Zahlen
            </a>
            <a
              href="#bundeslaender"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 hover:text-stone-950 px-2 py-1.5"
            >
              16 Bundesländer
            </a>
            <a
              href="#traditionen"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 hover:text-stone-950 px-2 py-1.5"
            >
              Kultur & Bräuche
            </a>
            <a
              href="#redewendungen"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 hover:text-stone-950 px-2 py-1.5"
            >
              Redewendungen
            </a>
            <a
              href="#geschichte"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 hover:text-stone-950 px-2 py-1.5"
            >
              Geschichte
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartQuiz();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 rounded-md"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Wissen testen</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
