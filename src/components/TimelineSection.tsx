import React, { useState } from 'react';
import { HISTORICAL_EPOCHS } from '../data/germanyData';
import { Calendar, ChevronRight } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedEpochIndex, setSelectedEpochIndex] = useState<number>(0);
  const activeEpoch = HISTORICAL_EPOCHS[selectedEpochIndex];

  return (
    <section id="geschichte" className="py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-stone-500 mb-2">
            <span>Kapitel 5</span>
            <span aria-hidden="true">·</span>
            <span>Historische Meilensteine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            Epochen deutscher Kultur- und Staatengeschichte
          </h2>
          <p className="mt-3 text-stone-700 text-base leading-relaxed">
            Deutschlands Geschichte ist geprägt von dezentraler Vielstaaterei, epochalen geistigen Umbrüchen, dunklen Abgründen und dem mutigen Aufbruch zu einer friedlichen, vereinten Demokratie.
          </p>
        </div>

        {/* 2-Column Interactive Epoch Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Epoch Selector Column (Left) */}
          <div className="lg:col-span-5 space-y-2">
            {HISTORICAL_EPOCHS.map((epoch, index) => {
              const isActive = index === selectedEpochIndex;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedEpochIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  <div>
                    <span
                      className={`text-xs font-mono block ${
                        isActive ? 'text-amber-300' : 'text-stone-500'
                      }`}
                    >
                      {epoch.year}
                    </span>
                    <h3 className="font-serif text-base font-semibold leading-tight mt-0.5">
                      {epoch.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-amber-300 translate-x-1' : 'text-stone-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Epoch Deep-Dive Panel (Right) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Epoche {selectedEpochIndex + 1} von {HISTORICAL_EPOCHS.length} · {activeEpoch.year}</span>
            </div>

            <h3 className="font-serif text-3xl font-semibold text-stone-900 mb-1">
              {activeEpoch.title}
            </h3>
            <p className="text-base text-stone-600 italic mb-6">
              {activeEpoch.subtitle}
            </p>

            <div className="prose text-stone-700 text-sm leading-relaxed space-y-4">
              <p>{activeEpoch.description}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-150 bg-stone-50/80 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-1">
                Kulturelles & Gesellschaftliches Vermächtnis:
              </span>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {activeEpoch.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
