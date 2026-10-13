import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              KULTURATLAS DEUTSCHLAND
            </span>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Ein interaktives Wissensportal zur Vermittlung deutscher Kultur, Geschichte, Geografie, Föderalismus und sprachlicher Besonderheiten im europäischen Kontext.
            </p>
            <div className="text-xs text-stone-500 font-mono">
              Sprachraum: de-DE · Bundesrepublik Deutschland
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block">
              Inhalte
            </span>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#fakten" className="hover:text-white transition-colors">
                  Fakten & Statistiken
                </a>
              </li>
              <li>
                <a href="#bundeslaender" className="hover:text-white transition-colors">
                  Die 16 Bundesländer
                </a>
              </li>
              <li>
                <a href="#traditionen" className="hover:text-white transition-colors">
                  Traditionen & Brotkultur
                </a>
              </li>
              <li>
                <a href="#redewendungen" className="hover:text-white transition-colors">
                  Deutsche Redewendungen
                </a>
              </li>
              <li>
                <a href="#geschichte" className="hover:text-white transition-colors">
                  Historische Epochen
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">
                  Kultur-Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Official Resources & Heritage Sources */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block">
              Quellen & Archive
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Zusammengestellt auf Grundlage von Daten der Deutschen UNESCO-Kommission, des Statistischen Bundesamtes (Destatis), des Deutschen Brotinstituts sowie der Bundeszentrale für politische Bildung (bpb).
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Nach oben scrollen</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Kulturatlas Deutschland. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-4">
            <span>Einheit in Vielfalt</span>
            <span aria-hidden="true">·</span>
            <span>Made with Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
