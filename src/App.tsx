/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FactsSection } from './components/FactsSection';
import { BundeslaenderSection } from './components/BundeslaenderSection';
import { TraditionsSection } from './components/TraditionsSection';
import { IdiomsSection } from './components/IdiomsSection';
import { TimelineSection } from './components/TimelineSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStates = () => {
    const el = document.getElementById('bundeslaender');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 3-Zone Top Navigation */}
      <Header onStartQuiz={scrollToQuiz} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner with Photography & Key Metrics */}
        <HeroSection onExploreState={scrollToStates} />

        {/* Kapitel 1: Fakten & Kennzahlen */}
        <FactsSection />

        {/* Kapitel 2: Die 16 Bundesländer */}
        <BundeslaenderSection />

        {/* Kapitel 3: Kultur, Brotkultur & Bräuche */}
        <TraditionsSection />

        {/* Kapitel 4: Deutsche Redewendungen & Audio-Aussprache */}
        <IdiomsSection />

        {/* Kapitel 5: Epochen & Geschichte */}
        <TimelineSection />

        {/* Interaktives Quiz */}
        <QuizSection onScrollToTop={scrollToTop} />
      </main>

      {/* Archiv Footer */}
      <Footer />
    </div>
  );
}
