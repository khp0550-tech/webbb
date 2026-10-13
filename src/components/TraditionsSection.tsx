import React from 'react';
import { TRADITIONS_STORIES } from '../data/germanyData';
import { brotImage, bauhausImage, weihnachtsmarktImage } from '../assets/images';
import { Coffee, Clock, HeartHandshake, Music } from 'lucide-react';

export const TraditionsSection: React.FC = () => {
  const getImage = (key: string) => {
    switch (key) {
      case 'brot':
        return brotImage;
      case 'bauhaus':
        return bauhausImage;
      case 'weihnachten':
        return weihnachtsmarktImage;
      default:
        return brotImage;
    }
  };

  return (
    <section id="traditionen" className="py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-stone-500 mb-2">
            <span>Kapitel 3</span>
            <span aria-hidden="true">·</span>
            <span>Bräuche, Ästhetik & Lebensgefühl</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            Deutsche Kultur & Gelebte Traditionen
          </h2>
          <p className="mt-3 text-stone-700 text-base leading-relaxed">
            Deutsche Kultur reicht von jahrhundertealtem Handwerk über radikale architektonische Neuerungen bis hin zu intimen Alltagsritualen wie dem Feierabend oder dem gemütlichen Adventskaffee.
          </p>
        </div>

        {/* 3 Detailed Editorial Essays with Photographs */}
        <div className="space-y-16 lg:space-y-24">
          {TRADITIONS_STORIES.map((story, index) => {
            const isReversed = index % 2 === 1;
            const imageSrc = getImage(story.imageKey);

            return (
              <article
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-lg overflow-hidden border border-stone-200/90 shadow-sm bg-stone-100 aspect-4/3">
                    <img
                      src={imageSrc}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="mt-2 text-xs font-serif italic text-stone-500">
                    Dokumentation: {story.title} – Historisches Kulturgut Deutschlands
                  </p>
                </div>

                {/* Text Narrative Column */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-amber-900 font-semibold">
                    <span>{story.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>Tradition & Erbe</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-sm font-medium text-stone-600 italic">
                    {story.subtitle}
                  </p>

                  <p className="text-base text-stone-800 leading-relaxed pt-1">
                    {story.summary}
                  </p>

                  <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line border-t border-stone-200/80 pt-4">
                    {story.content}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 4 Cultural Pillars of Daily Life */}
        <div className="mt-20 pt-14 border-t border-stone-200">
          <div className="max-w-2xl mb-10">
            <h3 className="font-serif text-2xl font-semibold text-stone-900">
              Säulen des Alltags: Wie Deutschland tickt
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Vier ungeschriebene Gesetze des Zusammenlebens, die Besuchern und Einheimischen gleichermaßen vertraut sind:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="w-9 h-9 rounded-md bg-stone-200 flex items-center justify-center text-stone-800 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                Pünktlichkeit & Verlässlichkeit
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Fünf Minuten vor der Zeit ist des Deutschen Pünktlichkeit: Termine werden präzise eingehalten, Unpünktlichkeit gilt als Respektlosigkeit gegenüber der Zeit anderer.
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="w-9 h-9 rounded-md bg-stone-200 flex items-center justify-center text-stone-800 mb-3">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                Feierabend & Sonntag
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Nach getaner Arbeit beginnt der „Feierabend“ – eine heilige Grenze zwischen Beruf und Privatem. Der Sonntag ist gesetzlich geschützt als Tag der Ruhe ohne geöffnete Geschäfte.
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="w-9 h-9 rounded-md bg-stone-200 flex items-center justify-center text-stone-800 mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                Vereinswesen (e. V.)
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Ob freiwillige Feuerwehr, Sport, Chor oder Schrebergarten: Über 600.000 eingetragene Vereine bilden das soziale Rückgrat der Bürgergesellschaft.
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="w-9 h-9 rounded-md bg-stone-200 flex items-center justify-center text-stone-800 mb-3">
                <Music className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                Kaffee & Kuchen
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Am Sonntagnachmittag gegen 15:30 Uhr versammeln sich Familie und Freunde zu frisch gebrühtem Filterkaffee und hausgebackenem Kuchen – von Schwarzwälder Kirschtorte bis Apfelstrudel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
