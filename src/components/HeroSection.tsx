import React from 'react';
import { Compass, BookOpen } from 'lucide-react';
import { heroImage } from '../assets/images';

interface HeroSectionProps {
  onExploreState: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreState }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header Lead */}
        <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-stone-500">
          <span>Kulturerbe & Föderalismus</span>
          <span aria-hidden="true">·</span>
          <span>Bundesrepublik Deutschland</span>
          <span aria-hidden="true">·</span>
          <span>Dokumentation & Porträt</span>
        </div>

        {/* 2-Column Split: Editorial Narrative & Hero Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.12] text-balance">
              Vielfalt, Geschichte & Lebensart im Herzen Europas
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl">
              Deutschland vereint Jahrhunderte von Dichtung, Philosophie und Handwerkskunst mit regionalem Föderalismus. Von den windgepeitschten Nordseeinseln bis zu den Alpengipfeln Bayerns: Entdecken Sie die 16 Bundesländer, lebendige Traditionen, kulinarische Schätze und überraschende Fakten.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#bundeslaender"
                onClick={onExploreState}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-sm"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Bundesländer erkunden</span>
              </a>
              <a
                href="#fakten"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200/80 rounded-md transition-colors border border-stone-200"
              >
                <BookOpen className="w-4 h-4 text-stone-600" />
                <span>Kulturfakten lesen</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-stone-500 font-sans">
              <span>Amtssprache: Deutsch</span>
              <span aria-hidden="true">·</span>
              <span>Hauptstadt: Berlin</span>
              <span aria-hidden="true">·</span>
              <span>Währung: Euro (€)</span>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-stone-200/80 shadow-md bg-stone-100 aspect-16/10">
              <img
                src={heroImage}
                alt="Schloss Neuschwanstein in den bayerischen Alpen bei Morgennebel"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-serif italic text-stone-200">
                  Schloss Neuschwanstein, Bayern – Sinnbild der deutschen Romantik und weltweites Kulturmonument
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Statistics Strip below the hero split */}
        <div className="mt-14 pt-10 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tabular-nums">
              84,4 Mio.
            </div>
            <div className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-wider">
              Einwohner
            </div>
            <p className="mt-1 text-xs text-stone-500">
              Bevölkerungsreichstes Land der Europäischen Union
            </p>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tabular-nums">
              16
            </div>
            <div className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-wider">
              Bundesländer
            </div>
            <p className="mt-1 text-xs text-stone-500">
              13 Flächenländer und 3 traditionsreiche Stadtstaaten
            </p>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tabular-nums">
              54
            </div>
            <div className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-wider">
              UNESCO-Stätten
            </div>
            <p className="mt-1 text-xs text-stone-500">
              Platz 3 weltweit für herausragendes Menschheitserbe
            </p>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tabular-nums">
              3.200+
            </div>
            <div className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-wider">
              Brotsorten
            </div>
            <p className="mt-1 text-xs text-stone-500">
              Deutsches Bäckerhandwerk als immaterielles Kulturerbe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
