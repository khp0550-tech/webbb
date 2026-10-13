import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/germanyData';
import { Award, CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';

interface QuizSectionProps {
  onScrollToTop?: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onScrollToTop }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const getRank = (finalScore: number) => {
    if (finalScore >= 9) {
      return {
        title: 'Ausgezeichneter Deutschland-Experte',
        desc: 'Großartig! Sie kennen die Bundesländer, Geschichte, Traditionen und sprachlichen Feinheiten wie ein waschechter Einheimischer.'
      };
    }
    if (finalScore >= 7) {
      return {
        title: 'Sehr guter Deutschland-Kenner',
        desc: 'Hervorragende Leistung! Sie besitzen ein fundiertes Wissen über deutsche Kultur und Geografie.'
      };
    }
    if (finalScore >= 5) {
      return {
        title: 'Engagierter Entdecker',
        desc: 'Ein solides Fundament! Mit ein wenig Stöbern im Kulturatlas werden Sie schnell zum echten Experten.'
      };
    }
    return {
      title: 'Neugieriger Deutschland-Anfänger',
      desc: 'Jede Entdeckungsreise beginnt mit dem ersten Schritt. Lesen Sie noch einmal die Abschnitte zu Bundesländern und Redewendungen!'
    };
  };

  return (
    <section id="quiz" className="py-16 lg:py-24 border-b border-stone-200 bg-[#F4F1EA]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-sans text-stone-500 mb-2">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Kultur-Quiz · 10 Fragen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            Wie gut kennen Sie Deutschland?
          </h2>
          <p className="mt-3 text-stone-700 text-sm leading-relaxed">
            Testen Sie Ihr Wissen über Geografie, Geschichte, Küche, Kunst und Alltagssprache im interaktiven Deutschland-Test.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 shadow-sm">
          {!isFinished ? (
            <div>
              {/* Progress & Category */}
              <div className="flex items-center justify-between text-xs text-stone-500 mb-4 pb-3 border-b border-stone-100">
                <span className="font-medium text-stone-800">
                  Thema: {currentQuestion.category}
                </span>
                <span className="font-mono tabular-nums">
                  Frage {currentIndex + 1} von {QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-amber-800 h-full transition-all duration-300"
                  style={{
                    width: `${((currentIndex + (isAnswered ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%`
                  }}
                />
              </div>

              {/* Question */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-6 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, idx) => {
                  let optionStyles = 'border-stone-200 bg-white text-stone-800 hover:border-stone-400 hover:bg-stone-50';

                  if (isAnswered) {
                    if (idx === currentQuestion.correctIndex) {
                      optionStyles = 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-medium';
                    } else if (idx === selectedOption) {
                      optionStyles = 'border-rose-500 bg-rose-50/80 text-rose-950';
                    } else {
                      optionStyles = 'border-stone-200 bg-stone-50 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between text-sm ${optionStyles}`}
                    >
                      <span>{option}</span>
                      {isAnswered && idx === currentQuestion.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQuestion.correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {isAnswered && (
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs leading-relaxed text-stone-700 mb-6">
                  <div className="font-semibold text-stone-900 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-amber-800" />
                    <span>Hintergrund-Erklärung:</span>
                  </div>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {isAnswered && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors"
                  >
                    <span>{currentIndex + 1 === QUIZ_QUESTIONS.length ? 'Ergebnis anzeigen' : 'Nächste Frage'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-4 border border-amber-200">
                <Award className="w-8 h-8" />
              </div>

              <div className="text-xs uppercase tracking-widest font-sans text-stone-500 mb-1">
                Quiz Abgeschlossen
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900 mb-2">
                {getRank(score).title}
              </h3>

              <div className="my-6">
                <span className="font-serif text-5xl font-bold text-stone-900 tabular-nums">
                  {score}
                </span>
                <span className="text-stone-400 font-serif text-2xl"> / {QUIZ_QUESTIONS.length}</span>
                <p className="text-xs text-stone-500 mt-1">Richtige Antworten</p>
              </div>

              <p className="text-sm text-stone-700 max-w-md mx-auto leading-relaxed mb-8">
                {getRank(score).desc}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Quiz wiederholen</span>
                </button>
                {onScrollToTop && (
                  <button
                    onClick={onScrollToTop}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-md transition-colors"
                  >
                    <span>Zurück zum Start</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
