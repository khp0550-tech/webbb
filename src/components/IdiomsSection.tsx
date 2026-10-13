import React, { useState } from 'react';
import { GERMAN_IDIOMS } from '../data/germanyData';
import { Idiom } from '../types';
import { Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';

export const IdiomsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const categories = ['Alle', 'Alltag', 'Essen', 'Gefühle', 'Tiere'];

  const filteredIdioms = selectedCategory === 'Alle'
    ? GERMAN_IDIOMS
    : GERMAN_IDIOMS.filter((item) => item.category === selectedCategory);

  const playPronunciation = (idiom: Idiom) => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(idiom.german);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;

    utterance.onstart = () => {
      setPlayingId(idiom.id);
    };

    utterance.onend = () => {
      setPlayingId(null);
    };

    utterance.onerror = () => {
      setPlayingId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="redewendungen" className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAF7F0]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-stone-500 mb-2">
            <span>Kapitel 4</span>
            <span aria-hidden="true">·</span>
            <span>Sprachliche Eigenheiten</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            Typisch Deutsch: Redewendungen & Metaphern
          </h2>
          <p className="mt-3 text-stone-700 text-base leading-relaxed">
            Die deutsche Sprache liebt bildhafte Zusammensetzungen und kuriose Metaphern. Klicken Sie auf das Lautsprecher-Symbol, um sich die Redewendung in korrekter deutscher Aussprache vorlesen zu lassen.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100/90 rounded-lg w-fit border border-stone-200 mb-8">
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

        {/* Idioms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIdioms.map((idiom) => {
            const isPlaying = playingId === idiom.id;

            return (
              <div
                key={idiom.id}
                className="bg-white border border-stone-200/90 rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
                    <span>Thema: {idiom.category}</span>
                    <button
                      onClick={() => playPronunciation(idiom)}
                      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors ${
                        isPlaying
                          ? 'bg-amber-100 text-amber-900 font-medium'
                          : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                      }`}
                      title="Deutsche Aussprache anhören"
                      aria-label={`Aussprache von ${idiom.german}`}
                    >
                      {isPlaying ? (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                          <span className="text-[11px]">Spielt...</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Anhören</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug group-hover:text-amber-900 transition-colors">
                    „{idiom.german}“
                  </h3>

                  <div className="mt-2 text-xs text-stone-500 italic">
                    Wörtlich: {idiom.literal}
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-stone-900 block">Bedeutung:</span>
                      <p className="text-stone-700">{idiom.meaning}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-900 block">Herkunft:</span>
                      <p className="text-stone-600 text-[11px] leading-relaxed">{idiom.origin}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100">
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-150 text-[11px] text-stone-700 italic">
                    <span className="font-semibold not-italic text-stone-900 block mb-0.5">Beispiel:</span>
                    „{idiom.example}“
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Kurioses Wortgut Box */}
        <div className="mt-12 bg-white border border-stone-200 rounded-lg p-6 lg:p-8">
          <h4 className="font-serif text-xl font-semibold text-stone-900 mb-2">
            Die Magie der deutschen Bandwurm-Wörter
          </h4>
          <p className="text-sm text-stone-700 leading-relaxed mb-4 max-w-3xl">
            Das Deutsche ist weltberühmt für seine Fähigkeit, beliebig viele Hauptwörter zu präzisen neuen Begriffen zusammenzusetzen („Komposita“). Begriffe wie <em>Kummerspeck</em> (Gewichtszunahme durch Sorgen), <em>Fernweh</em> (Sehnsucht nach fernen Ländern) oder <em>Weltschmerz</em> existieren in fast keiner anderen Sprache in einem einzigen Wort.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-stone-100 text-xs">
            <div className="p-3 bg-stone-50 rounded">
              <span className="font-semibold text-stone-900 block">Waldeinsamkeit</span>
              <span className="text-stone-600">Das friedliche Gefühl, ganz allein im stillen Wald zu sein.</span>
            </div>
            <div className="p-3 bg-stone-50 rounded">
              <span className="font-semibold text-stone-900 block">Schadenfreude</span>
              <span className="text-stone-600">Freude über das Missgeschick oder Pech einer anderen Person.</span>
            </div>
            <div className="p-3 bg-stone-50 rounded">
              <span className="font-semibold text-stone-900 block">Treppenwitz</span>
              <span className="text-stone-600">Die schlagfertige Pointe, die einem erst auf der Treppe danach einfällt.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
