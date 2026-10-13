import React, { useState } from 'react';
import { BUNDESLAENDER } from '../data/germanyData';
import { Bundesland } from '../types';
import { Search, MapPin, Utensils, Landmark, X, ArrowRight } from 'lucide-react';

export const BundeslaenderSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeState, setActiveState] = useState<Bundesland | null>(null);

  const regions = ['Alle', 'Norden', 'Süden', 'Westen', 'Osten'];

  const filteredStates = BUNDESLAENDER.filter((state) => {
    const matchesRegion = selectedRegion === 'Alle' || state.region === selectedRegion;
    const matchesSearch =
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.landmark.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="bundeslaender" className="py-16 lg:py-24 border-b border-stone-200 bg-[#F8F5EE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-stone-500 mb-2">
            <span>Kapitel 2</span>
            <span aria-hidden="true">·</span>
            <span>Der deutsche Föderalismus</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            Die 16 Bundesländer im Porträt
          </h2>
          <p className="mt-3 text-stone-700 text-base leading-relaxed">
            Deutschland ist keine zentralistische Nation, sondern ein Bund aus 16 eigenständigen Ländern – jedes mit eigener Verfassung, reicher Mundart, regionalen Delikatessen und stolzer Tradition.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  selectedRegion === reg
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Land, Hauptstadt oder Wahrzeichen..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredStates.map((state) => (
            <div
              key={state.id}
              onClick={() => setActiveState(state)}
              className="bg-white border border-stone-200/90 rounded-lg p-5 flex flex-col justify-between hover:border-amber-900/30 hover:shadow-md transition-all cursor-pointer group"
            >
              <div>
                {/* Header with region & flag mini color bar */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-stone-500 font-sans">
                    Region {state.region}
                  </span>
                  <div className="flex h-2 w-7 rounded-xs overflow-hidden border border-stone-200">
                    {state.flagColors.map((color, idx) => (
                      <div
                        key={idx}
                        className="flex-1 h-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
                  {state.name}
                </h3>

                <div className="mt-2 text-xs text-stone-600 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className="font-medium text-stone-900">Hauptstadt:</span>
                    <span className="truncate">{state.capital}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Landmark className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className="font-medium text-stone-900">Wahrzeichen:</span>
                    <span className="truncate">{state.landmark.split('&')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Utensils className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className="font-medium text-stone-900">Küche:</span>
                    <span className="truncate">{state.specialty.split('&')[0]}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {state.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="tabular-nums">{state.population}</span>
                <span className="inline-flex items-center gap-1 text-amber-900 font-medium group-hover:translate-x-0.5 transition-transform">
                  Porträt ansehen <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredStates.length === 0 && (
          <div className="text-center py-12 bg-white border border-stone-200 rounded-lg">
            <p className="text-stone-600 text-sm">Kein Bundesland passend zur Suche „{searchQuery}“ gefunden.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('Alle');
              }}
              className="mt-3 text-xs text-stone-900 underline font-medium"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}

        {/* State Detail Modal */}
        {activeState && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
            <div className="bg-[#FBF9F5] border border-stone-300 rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveState(null)}
                className="absolute top-5 right-5 p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-3 w-10 rounded-xs overflow-hidden border border-stone-300">
                  {activeState.flagColors.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex-1 h-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-widest font-sans text-stone-500">
                  Bundesland · Region {activeState.region}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-stone-900 mb-1">
                {activeState.name}
              </h3>
              <p className="text-sm font-medium text-amber-900 mb-6">
                Landeshauptstadt: {activeState.capital}
              </p>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-stone-100/80 rounded-lg border border-stone-200 mb-6 text-xs">
                <div>
                  <span className="text-stone-500 block">Einwohnerzahl</span>
                  <span className="font-serif text-base font-semibold text-stone-900 tabular-nums">
                    {activeState.population}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block">Fläche</span>
                  <span className="font-serif text-base font-semibold text-stone-900 tabular-nums">
                    {activeState.area}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-stone-500 block">Geografische Lage</span>
                  <span className="font-serif text-base font-semibold text-stone-900">
                    {activeState.region}deutschland
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Überblick:</h4>
                  <p>{activeState.description}</p>
                </div>

                <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                  <div className="flex items-start gap-2.5">
                    <Landmark className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900 block text-xs">Bekannte Wahrzeichen:</span>
                      <span className="text-stone-800 text-xs">{activeState.landmark}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                  <div className="flex items-start gap-2.5">
                    <Utensils className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900 block text-xs">Kulinarische Spezialität:</span>
                      <span className="text-stone-800 text-xs">{activeState.specialty}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-semibold text-stone-900 mb-1 text-xs uppercase tracking-wider">Kultureller Höhepunkt:</h4>
                  <p className="text-xs text-stone-700">{activeState.culturalHighlight}</p>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-md">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-1">
                    Kurioser Fakt:
                  </span>
                  <p className="text-xs text-amber-950 italic">
                    {activeState.funFact}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setActiveState(null)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
