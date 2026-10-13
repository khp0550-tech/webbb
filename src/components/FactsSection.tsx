import React, { useState } from 'react';
import { CORE_FACTS } from '../data/germanyData';
import { Sparkles, Info } from 'lucide-react';

export const FactsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [expandedFactId, setExpandedFactId] = useState<string | null>(null);

  const categories = ['Alle', 'Kultur', 'Gesellschaft', 'Geografie', 'Innovation'];

  const filteredFacts = selectedCategory === 'Alle'
    ? CORE_FACTS
    : CORE_FACTS.filter((f) => f.category === selectedCategory);

  return (
    <section id="fakten" className="py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-stone-500 mb-2">
            <span>Kapitel 1</span>
            <span aria-hidden="true">·</span>
            <span>Kennzahlen & Hintergründe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            Faszinierende Fakten über Deutschland
          </h2>
          <p className="mt-3 text-stone-700 text-base leading-relaxed">
            Ob die Wiege moderner Erfindungen, das Konzept der Nachhaltigkeit aus sächsischen Forsten oder das weltweite Unikat der Autobahn-Richtgeschwindigkeit: Hier sind fundamentale Fakten und kuriose Besonderheiten.
          </p>
        </div>

        {/* Interactive Filter Control */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-stone-100/90 rounded-lg w-fit border border-stone-200/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacts.map((fact) => {
            const isExpanded = expandedFactId === fact.id;
            return (
              <div
                key={fact.id}
                className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Category unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-500 font-sans mb-3">
                    <span>{fact.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-stone-400">#0{fact.id.replace('fact-', '')}</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-stone-900 leading-snug">
                    {fact.title}
                  </h3>

                  <div className="my-4 pb-3 border-b border-stone-100">
                    <span className="font-serif text-2xl font-bold text-amber-800 tabular-nums">
                      {fact.value}
                    </span>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    {fact.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="truncate italic">Quelle: {fact.citation}</span>
                  <button
                    onClick={() => setExpandedFactId(isExpanded ? null : fact.id)}
                    className="text-stone-700 hover:text-stone-950 p-1"
                    title="Information anzeigen"
                    aria-label={`Details zu ${fact.title}`}
                  >
                    <Info className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-colors" />
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-3 p-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-700 space-y-1 animate-fadeIn">
                    <p className="font-semibold text-stone-900">Kontext & Bedeutung:</p>
                    <p>
                      Dieser Fakt veranschaulicht, wie stark Tradition, Rechtsstaatlichkeit und regionale Identität den Alltag in Deutschland bis heute formen.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Kuriositäten-Kasten */}
        <div className="mt-12 bg-[#F4EFE6] border border-amber-200/70 rounded-lg p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Wussten Sie schon? Deutsche Alltagskuriositäten</span>
              </div>
              <h4 className="font-serif text-xl font-semibold text-stone-900">
                „Stoßlüften“ – Ein fast ritueller Kulturakt
              </h4>
              <p className="text-sm text-stone-800 leading-relaxed max-w-3xl">
                Das mehrmals tägliche, vollständige Öffnen aller Fenster für fünf bis zehn Minuten zum effizienten Luftaustausch ist in Deutschland tief in Mietverträgen, Schulrichtlinien und Wohnkonventionen verankert. Selbst im kältesten Winter gehört das Stoßlüften zum unverrückbaren Tagesablauf!
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#redewendungen"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-md shadow-xs transition-colors whitespace-nowrap"
              >
                Mehr Eigenheiten entdecken
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
