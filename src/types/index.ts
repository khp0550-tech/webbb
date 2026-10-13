export interface Bundesland {
  id: string;
  name: string;
  capital: string; // Landeshauptstadt
  population: string; // Einwohner
  area: string; // Fläche in km²
  region: 'Norden' | 'Süden' | 'Westen' | 'Osten';
  flagColors: string[];
  landmark: string; // Bekanntes Wahrzeichen
  specialty: string; // Kulinarische Spezialität
  description: string;
  culturalHighlight: string;
  funFact: string;
}

export interface FactItem {
  id: string;
  title: string;
  value: string;
  category: 'Gesellschaft' | 'Geografie' | 'Innovation' | 'Kultur';
  detail: string;
  citation: string;
}

export interface Idiom {
  id: string;
  german: string;
  literal: string; // Wörtliche Übersetzung/Bedeutung
  meaning: string; // Eigentliche Bedeutung
  origin: string; // Ursprung & Herkunft
  example: string; // Beispielsatz
  category: 'Essen' | 'Alltag' | 'Gefühle' | 'Tiere';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface Epoch {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
}
