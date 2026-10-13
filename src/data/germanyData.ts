import { Bundesland, FactItem, Idiom, QuizQuestion, Epoch } from '../types';

export const BUNDESLAENDER: Bundesland[] = [
  {
    id: 'bw',
    name: 'Baden-Württemberg',
    capital: 'Stuttgart',
    population: '11,3 Millionen',
    area: '35.751 km²',
    region: 'Süden',
    flagColors: ['#000000', '#FCD116'],
    landmark: 'Schloss Heidelberg & Schwarzwald',
    specialty: 'Schwäbische Maultaschen & Spätzle',
    description: 'Das Land der Erfinder und Denker, geprägt vom Schwarzwald, dem Bodensee und traditionsreichen Automobil- und Maschinenbau-Pionieren.',
    culturalHighlight: 'Heimat der weltweit ersten Automobilfahrt von Bertha Benz (1888) und jahrhundertealter Uhrmacherkunst.',
    funFact: 'Schwäbische Maultaschen wurden der Legende nach von Mönchen im Kloster Maulbronn erfunden, um in der Fastenzeit Fleisch vor Gott zu verstecken („Herrgottsb' + 'scheißerle“).'
  },
  {
    id: 'by',
    name: 'Bayern',
    capital: 'München',
    population: '13,4 Millionen',
    area: '70.542 km²',
    region: 'Süden',
    flagColors: ['#0080FF', '#FFFFFF'],
    landmark: 'Schloss Neuschwanstein & Zugspitze',
    specialty: 'Münchner Weißwurst mit süßem Senf & Brezen',
    description: 'Der flächengrößte Freistaat Deutschlands, weltbekannt für alpine Landschaften, lebendige Brautraditionen und barocke Prachtbauten.',
    culturalHighlight: 'Das Reinheitsgebot von 1516 wurde in Ingolstadt erlassen und gilt als das älteste noch gültige Lebensmittelgesetz der Welt.',
    funFact: 'Bayern besitzt mit über 600 Brauereien die höchste Brauereidichte Europas – allein in Franken gibt es hunderte familiengeführte Betriebe.'
  },
  {
    id: 'be',
    name: 'Berlin',
    capital: 'Berlin (Stadtstaat)',
    population: '3,8 Millionen',
    area: '891 km²',
    region: 'Osten',
    flagColors: ['#FFFFFF', '#D00000'],
    landmark: 'Brandenburger Tor & Museumsinsel',
    specialty: 'Berliner Currywurst & Berliner Pfannkuchen',
    description: 'Die Bundeshauptstadt und dynamische Kulturmetropole mit wechselvoller Geschichte, weltberühmter Kunstszene und reicher Museumslandschaft.',
    culturalHighlight: 'Die Berliner Museumsinsel zählt zum UNESCO-Welterbe und beherbergt fünf weltbekannte Museumsbauten.',
    funFact: 'Berlin hat mit rund 1.700 Brücken mehr Wasserbrücken als Venedig und besteht zu über 30 % aus Grünflächen und Gewässern.'
  },
  {
    id: 'bb',
    name: 'Brandenburg',
    capital: 'Potsdam',
    population: '2,6 Millionen',
    area: '29.654 km²',
    region: 'Osten',
    flagColors: ['#D00000', '#FFFFFF'],
    landmark: 'Schloss Sanssouci & Spreewald',
    specialty: 'Spreewaldgurken & Beelitzer Spargel',
    description: 'Wasserreiches Bundesland rund um die Hauptstadt mit über 3.000 Seen, weitläufigen Kiefernwäldern und preußischer Gartenbaukunst.',
    culturalHighlight: 'Die historischen Schlösser und Parks von Potsdam und Berlin bilden das größte zusammenhängende deutsche Welterbe-Ensemble.',
    funFact: 'Im Spreewald liefert die Deutsche Post die Post in den Sommermonaten per traditionellem Kahn über die Fließe aus.'
  },
  {
    id: 'hb',
    name: 'Bremen',
    capital: 'Bremen (Zwei-Städte-Staat mit Bremerhaven)',
    population: '685.000',
    area: '419 km²',
    region: 'Norden',
    flagColors: ['#D00000', '#FFFFFF'],
    landmark: 'Rathaus, Roland-Statue & Bremer Stadtmusikanten',
    specialty: 'Kohl und Pinkel & Bremer Klaben',
    description: 'Traditionsreiche Hansestadt an der Weser mit über 1.200 Jahren Geschichte, Hanse-Tradition und dem Überseehafen Bremerhaven.',
    culturalHighlight: 'Das gotische Rathaus und die 1404 errichtete Roland-Statue symbolisieren bürgerliche Freiheit und Hanse-Stolz (UNESCO-Welterbe).',
    funFact: 'Wer die Beine des Esels an der Bronzestatue der Bremer Stadtmusikanten mit beiden Händen anfasst, dem bringt es laut Volksmund Glück.'
  },
  {
    id: 'hh',
    name: 'Hamburg',
    capital: 'Hamburg (Freie und Hansestadt)',
    population: '1,9 Millionen',
    area: '755 km²',
    region: 'Norden',
    flagColors: ['#D00000', '#FFFFFF'],
    landmark: 'Elbphilharmonie & historische Speicherstadt',
    specialty: 'Labskaus & Franzbrötchen',
    description: 'Deutschlands Tor zur Welt: Zweitgrößte Stadt der Bundesrepublik mit dem drittgrößten Containerhafen Europas und lebendiger Musicals- und Theaterkultur.',
    culturalHighlight: 'Die historische Speicherstadt ist der weltweit größte zusammenhängende Komplex von Lagerhäusern auf Eichenpfählen.',
    funFact: 'Mit fast 2.500 Brücken übertrifft Hamburg Venedig, Amsterdam und London zusammen genommen an Brückenanzahl.'
  },
  {
    id: 'he',
    name: 'Hessen',
    capital: 'Wiesbaden',
    population: '6,4 Millionen',
    area: '21.115 km²',
    region: 'Westen',
    flagColors: ['#D00000', '#FFFFFF'],
    landmark: 'Frankfurter Römer & Bergpark Wilhelmshöhe (Kassel)',
    specialty: 'Frankfurter Grüne Soße & Hessischer Apfelwein („Äppler“)',
    description: 'Im Herzen Deutschlands: Ein Zusammenspiel aus dem Finanzzentrum Frankfurt am Main, waldreichen Mittelgebirgen und Thermalbad-Traditionen.',
    culturalHighlight: 'Geburtsort von Johann Wolfgang von Goethe und Heimat der Brüder Grimm, die in Kassel ihre weltberühmten Kinder- und Hausmärchen sammelten.',
    funFact: 'Die traditionelle „Frankfurter Grie Soß“ muss per Schutzsiegel zwingend aus genau sieben frischen Kräutern bestehen.'
  },
  {
    id: 'mv',
    name: 'Mecklenburg-Vorpommern',
    capital: 'Schwerin',
    population: '1,6 Millionen',
    area: '23.295 km²',
    region: 'Norden',
    flagColors: ['#000080', '#FFFFFF', '#D00000'],
    landmark: 'Schweriner Schloss & Kreidefelsen auf Rügen',
    specialty: 'Mecklenburger Rippenbraten & Sanddorn-Spezialitäten',
    description: 'Das Land der tausend Seen und der Ostseeküste mit traditionsreichen Kaiserbädern, Backsteingotik und unberührter Natur.',
    culturalHighlight: 'Die historische Hansestädte Stralsund und Wismar zeigen die Blütezeit der Backsteingotik im Ostseeraum.',
    funFact: 'Mecklenburg-Vorpommern besitzt mit über 2.000 Kilometern die längste Küstenlinie aller deutschen Bundesländer.'
  },
  {
    id: 'ni',
    name: 'Niedersachsen',
    capital: 'Hannover',
    population: '8,1 Millionen',
    area: '47.710 km²',
    region: 'Norden',
    flagColors: ['#000000', '#D00000', '#FCD116'],
    landmark: 'Herrenhäuser Gärten & Harz-Gebirge',
    specialty: 'Grünkohl mit Bregenwurst & Ostfriesentee mit Kluntje',
    description: 'Von den Ostfriesischen Inseln bis zum Mittelgebirge Harz: Geprägt von weiten Marschlanden, Pferdezucht und der Automobilindustrie.',
    culturalHighlight: 'Die ostfriesische Teekultur wurde von der UNESCO als Immaterielles Kulturerbe anerkannt: Jeder Ostfriese trinkt statistisch rund 300 Liter Tee im Jahr.',
    funFact: 'In Hannover und Umgebung wird laut Sprachforschern das reinstes Standarddeutsch („Hochdeutsch“) gesprochen.'
  },
  {
    id: 'nrw',
    name: 'Nordrhein-Westfalen',
    capital: 'Düsseldorf',
    population: '18,1 Millionen',
    area: '34.112 km²',
    region: 'Westen',
    flagColors: ['#008000', '#FFFFFF', '#D00000'],
    landmark: 'Kölner Dom & Zeche Zollverein (Essen)',
    specialty: 'Rheinischer Sauerbraten & Himmel un Ääd',
    description: 'Das bevölkerungsreichste Bundesland: Wandel von der Kohle- und Stahlregion zur Kultur- und Wissensmetropole mit rheinischer Lebensfreude.',
    culturalHighlight: 'Der Kölner Dom ist mit über sechs Millionen Besuchern jährlich die meistbesuchte Sehenswürdigkeit Deutschlands.',
    funFact: 'Der rheinische Karneval („Fasteleer“) gilt als fünfte Jahreszeit und beginnt alljährlich pünktlich am 11.11. um 11:11 Uhr.'
  },
  {
    id: 'rp',
    name: 'Rheinland-Pfalz',
    capital: 'Mainz',
    population: '4,1 Millionen',
    area: '19.858 km²',
    region: 'Westen',
    flagColors: ['#000000', '#D00000', '#FCD116'],
    landmark: 'Oberes Mittelrheintal & Porta Nigra in Trier',
    specialty: 'Pfälzer Saumagen & Riesling von Mosel und Rhein',
    description: 'Deutschlands Weinland Nummer eins: Geprägt von sonnigen Flusstälern, römischen Baudenkmälern und dichten Burgenlandschaften.',
    culturalHighlight: 'Johannes Gutenberg erfand um 1440 in Mainz den Buchdruck mit beweglichen Metalllettern – ein Wendepunkt der Weltgeschichte.',
    funFact: 'In Trier steht die Porta Nigra aus dem 2. Jahrhundert n. Chr., das besterhaltene römische Stadttor nördlich der Alpen.'
  },
  {
    id: 'sl',
    name: 'Saarland',
    capital: 'Saarbrücken',
    population: '990.000',
    area: '2.570 km²',
    region: 'Westen',
    flagColors: ['#000000', '#D00000', '#FCD116'],
    landmark: 'Saarschleife bei Mettlach & Völklinger Hütte',
    specialty: 'Saarländischer Schwenkbraten & Dibbelabbes',
    description: 'Kleines, charmantes Bundesland im Dreiländereck zu Frankreich und Luxemburg mit frankophilem Lebensgefühl („Savoir-vivre“).',
    culturalHighlight: 'Die Völklinger Hütte ist das weltweit einzige vollständig erhaltene Eisenwerk aus der Blütezeit der Industrialisierung (UNESCO-Welterbe).',
    funFact: 'Das Schwenken von Fleisch über offenem Buchenholzfeuer auf einem Dreibein-Grill („Schwenker“) ist im Saarland fast ein Volkssport.'
  },
  {
    id: 'sn',
    name: 'Sachsen',
    capital: 'Dresden',
    population: '4,1 Millionen',
    area: '18.450 km²',
    region: 'Osten',
    flagColors: ['#FFFFFF', '#008000'],
    landmark: 'Dresdner Frauenkirche, Zwinger & Bastei Elbsandsteingebirge',
    specialty: 'Dresdner Christstollen & Sächsische Eierschecke',
    description: 'Kulturstaat mit reicher Musiktradition, prachtvoller Barockarchitektur („Elbflorenz“) und Handwerkskunst aus dem Erzgebirge.',
    culturalHighlight: 'Wirkungsstätte von Johann Sebastian Bach in Leipzig und Wiege des europäischen Hartporzellans in Meißen (1708).',
    funFact: 'Der echte Dresdner Christstollen ist markenrechtlich geschützt und darf nur von zertifizierten Bäckereien im Großraum Dresden gebacken werden.'
  },
  {
    id: 'st',
    name: 'Sachsen-Anhalt',
    capital: 'Magdeburg',
    population: '2,2 Millionen',
    area: '20.454 km²',
    region: 'Osten',
    flagColors: ['#FCD116', '#000000'],
    landmark: 'Bauhaus Dessau & Quedlinburg Fachwerkstadt',
    specialty: 'Harzer Käse & Halloren-Kugeln aus Halle',
    description: 'Kernland der deutschen Geschichte und Reformation mit der höchsten Dichte an UNESCO-Welterbestätten in ganz Deutschland.',
    culturalHighlight: 'Martin Luthers Wirkungsorte in Wittenberg und Eisleben sowie das legendäre Bauhaus in Dessau begründeten Epochenwenden.',
    funFact: 'Quedlinburg besitzt über 2.000 erhaltene Fachwerkhäuser aus sechs Jahrhunderten und ist damit ein lebendiges Architekturmuseum.'
  },
  {
    id: 'sh',
    name: 'Schleswig-Holstein',
    capital: 'Kiel',
    population: '2,9 Millionen',
    area: '15.804 km²',
    region: 'Norden',
    flagColors: ['#000080', '#FFFFFF', '#D00000'],
    landmark: 'Holstentor in Lübeck & Wattenmeer',
    specialty: 'Lübecker Marzipan & Matjes nach Hausfrauenart',
    description: 'Das Land zwischen den Meeren: Umgeben von Nordsee und Ostsee, geprägt von Deichen, Leuchttürmen und friesischer Gelassenheit.',
    culturalHighlight: 'Das schleswig-holsteinische Wattenmeer ist eines der letzten großen Wildnisgebiete Mitteleuropas und UNESCO-Weltnaturerbe.',
    funFact: 'In Glückstadt an der Elbe wird seit Jahrhunderten der original Glückstädter Matjes nach streng traditionellem Verfahren hergestellt.'
  },
  {
    id: 'th',
    name: 'Thüringen',
    capital: 'Erfurt',
    population: '2,1 Millionen',
    area: '16.202 km²',
    region: 'Osten',
    flagColors: ['#FFFFFF', '#D00000'],
    landmark: 'Wartburg bei Eisenach & Erfurter Krämerbrücke',
    specialty: 'Original Thüringer Rostbratwurst & Thüringer Klöße',
    description: 'Das grüne Herz Deutschlands: Wiege der Weimarer Klassik, geprägt vom Thüringer Wald, dichter Dichtertradition und mittelalterlichen Burgen.',
    culturalHighlight: 'Auf der Wartburg übersetzte Martin Luther 1521/22 das Neue Testament ins Deutsche und schuf damit das Fundament der neuhochdeutschen Sprache.',
    funFact: 'Die Krämerbrücke in Erfurt ist mit 120 Metern die längste durchgehend mit Häusern bebaute und bewohnte Brücke Europas.'
  }
];

export const CORE_FACTS: FactItem[] = [
  {
    id: 'fact-1',
    title: 'Immaterielle Brotkultur',
    value: '3.200+ Sorten',
    category: 'Kultur',
    detail: 'Die deutsche Brotkultur zählt seit 2014 zum immateriellen UNESCO-Kulturerbe. Nirgendwo auf der Welt gibt es eine größere Vielfalt an Roggen-, Dinkel-, Vollkorn- und Mischbroten.',
    citation: 'Deutsches Brotinstitut e.V.'
  },
  {
    id: 'fact-2',
    title: 'UNESCO-Welterbestätten',
    value: '54 Stätten',
    category: 'Kultur',
    detail: 'Deutschland belegt weltweit Platz 3 bei UNESCO-Welterbestätten (hinter Italien und China), darunter der Kölner Dom, das Schloss Sanssouci und das Wattenmeer.',
    citation: 'Deutsche UNESCO-Kommission'
  },
  {
    id: 'fact-3',
    title: 'Waldfläche & Natur',
    value: '32 % des Landes',
    category: 'Geografie',
    detail: 'Rund 11,4 Millionen Hektar Deutschlands sind mit Wald bedeckt. Das Konzept der „Nachhaltigkeit“ wurde vor über 300 Jahren von Hans Carl von Carlowitz in Sachsen formuliert.',
    citation: 'Bundesministerium für Ernährung und Landwirtschaft'
  },
  {
    id: 'fact-4',
    title: 'Ältestes Lebensmittelgesetz',
    value: 'Seit 1516',
    category: 'Kultur',
    detail: 'Das bayerische Reinheitsgebot für Bier schreibt seit mehr als fünf Jahrhunderten vor, dass nur Wasser, Gerstenmalz und Hopfen (später ergänzt um Hefe) verwendet werden dürfen.',
    citation: 'Bayerischer Brauerbund'
  },
  {
    id: 'fact-5',
    title: 'Erfindergeist & Patente',
    value: 'Nr. 1 in Europa',
    category: 'Innovation',
    detail: 'Zu wegweisenden deutschen Erfindungen zählen der Buchdruck (Gutenberg), das Automobil (Benz), das Röntgenbild (Röntgen), der Computer (Zuse) und das MP3-Format (Fraunhofer).',
    citation: 'Deutsches Patent- und Markenamt'
  },
  {
    id: 'fact-6',
    title: 'Vereinskultur & Ehrenamt',
    value: '600.000+ Vereine',
    category: 'Gesellschaft',
    detail: 'Vom Sportverein über den Schützenverein bis zum Musik- und Kleingartenverein: Nahezu jeder zweite Deutsche ist Mitglied in mindestens einem eingetragenen Verein (e.V.).',
    citation: 'ZiviZ / Stifterverband'
  },
  {
    id: 'fact-7',
    title: 'Zentralität in Europa',
    value: '9 Nachbarstaaten',
    category: 'Geografie',
    detail: 'Deutschland grenzt an neun europäische Nachbarländer: Dänemark, Polen, Tschechien, Österreich, die Schweiz, Frankreich, Luxemburg, Belgien und die Niederlande.',
    citation: 'Statistisches Bundesamt'
  },
  {
    id: 'fact-8',
    title: 'Die Autobahn & Richtgeschwindigkeit',
    value: '13.000+ km Netz',
    category: 'Gesellschaft',
    detail: 'Auf vielen Autobahnabschnitten gibt es kein generelles Tempolimit, sondern eine empfohlene Richtgeschwindigkeit von 130 km/h – ein weltweites Unikat unter Industrienationen.',
    citation: 'Bundesanstalt für Straßenwesen'
  }
];

export const TRADITIONS_STORIES = [
  {
    id: 'brot',
    title: 'Brotkultur: Handwerk, Roggen und Kruste',
    subtitle: 'Vom Sauerteig bis zum Abendbrot',
    imageKey: 'brot',
    tag: 'Kulinarisches Erbe',
    summary: 'Während in vielen Teilen der Welt Weißbrot dominiert, ist deutsches Brot dunkel, kräftig und von feinsäuerlicher Aromatik geprägt.',
    content: `Die Vielfalt deutscher Brote beruht historisch auf den klimatischen Bedingungen: Im kühleren Norden und Osten gedieh Roggen deutlich besser als Weizen. Durch die traditionelle Dreistufen-Sauerteigführung entstand ein nahrhaftes, saftiges Brot mit dicker, schützender Kruste. 

Zur deutschen Kultur gehört auch das „Abendbrot“ – eine feste Institution des Alltags: Statt einer zweiten warmen Mahlzeit serviert man am Abend traditionell frisches Sauerteigbrot mit Butter, regionalem Käse, Schinken und Essiggurken.`
  },
  {
    id: 'bauhaus',
    title: 'Das Bauhaus: Form folgt Funktion',
    subtitle: 'Wie Weimar und Dessau die Moderne prägten',
    imageKey: 'bauhaus',
    tag: 'Kunst & Design',
    summary: '1919 von Walter Gropius in Weimar gegründet, revolutionierte das Staatliche Bauhaus das Verhältnis von Kunst, Handwerk und Architektur weltweit.',
    content: `Das Bauhaus brach radikal mit den verschnörkelten Ornamenten des 19. Jahrhunderts. Architekten und Designer wie Ludwig Mies van der Rohe, Marcel Breuer, Wassily Kandinsky und Paul Klee suchten nach klaren, geometrischen Formen und industrieller Nutzbarkeit.

Ob Freischwinger-Stühle, Schreibtischlampen oder kubische Wohnhäuser: Die Ideen des Bauhauses prägen bis heute das moderne Produktdesign und die Architektur auf allen Kontinenten.`
  },
  {
    id: 'weihnachten',
    title: 'Weihnachtszauber & Brauchtum',
    subtitle: 'Vom Nürnberger Christkindlesmarkt bis zum Adventskranz',
    imageKey: 'weihnachten',
    tag: 'Festkultur & Bräuche',
    summary: 'Zahlreiche weihnachtliche Bräuche, die heute weltweit zelebriert werden, nahmen ihren Ursprung in deutschen Regionen.',
    content: `Der geschmückte Tannenbaum, der Adventskalender und der Adventskranz mit vier Kerzen stammen aus deutschen Traditionen. Historische Weihnachtsmärkte – wie der Dresdner Striezelmarkt (erstmals urkundlich erwähnt 1434) oder der Nürnberger Christkindlesmarkt – verwandeln historische Marktplätze in Lichtermeere.

In der Adventszeit duftet es nach gebrannten Mandeln, Glühwein, Lebkuchen und Bratwurst – ein geselliger Treffpunkt in den kältesten Wochen des Winters.`
  }
];

export const GERMAN_IDIOMS: Idiom[] = [
  {
    id: 'idiom-1',
    german: 'Ich verstehe nur Bahnhof',
    literal: 'I only understand train station',
    meaning: 'Ich verstehe überhaupt nichts oder will nichts davon hören.',
    origin: 'Entstand vermutlich im Ersten Weltkrieg: Müde Soldaten an der Front dachten nur noch an den Bahnhof, um die Heimreise anzutreten.',
    example: 'Er hat versucht, mir Quantenphysik zu erklären, aber ich habe nur Bahnhof verstanden.',
    category: 'Alltag'
  },
  {
    id: 'idiom-2',
    german: 'Da steppt der Bär',
    literal: 'The bear is tap-dancing there',
    meaning: 'Dort ist richtig viel los, es herrscht ausgelassene Partystimmung.',
    origin: 'Geht auf historische Tanzbären zurück, die auf Jahrmärkten für großes Spektakel und Menschenaufläufe sorgten.',
    example: 'Komm am Wochenende mit zum Stadtfest, da steppt garantiert der Bär!',
    category: 'Gefühle'
  },
  {
    id: 'idiom-3',
    german: 'Tomaten auf den Augen haben',
    literal: 'To have tomatoes on one’s eyes',
    meaning: 'Etwas Offensichtliches nicht sehen oder übersehen.',
    origin: 'Möglicherweise abgeleitet von rot unterlaufenen, müden Augen, die Dinge nicht mehr klar wahrnehmen können.',
    example: 'Mein Schlüssel lag die ganze Zeit auf dem Tisch – ich hatte wohl Tomaten auf den Augen!',
    category: 'Alltag'
  },
  {
    id: 'idiom-4',
    german: 'Das ist mir Wurst',
    literal: 'That is sausage to me',
    meaning: 'Das ist mir völlig egal / gleichgültig.',
    origin: 'Schlachter verarbeiteten früher Fleischreste in Wurst; welches Reststück drin war, war buchstäblich „Wurst“ bzw. einerlei.',
    example: 'Ob wir heute Pizza oder Pasta kochen, ist mir völlig Wurst.',
    category: 'Essen'
  },
  {
    id: 'idiom-5',
    german: 'Die Daumen drücken',
    literal: 'To press the thumbs',
    meaning: 'Jemandem viel Glück und Erfolg für eine Prüfung oder Herausforderung wünschen.',
    origin: 'Schon bei den alten Römern galt der nach innen gedrückte Daumen bei Gladiatorenkämpfen als Zeichen der Gnade.',
    example: 'Morgen hast du deine Fahrprüfung? Ich drücke dir ganz fest die Daumen!',
    category: 'Gefühle'
  },
  {
    id: 'idiom-6',
    german: 'Den Nagel auf den Kopf treffen',
    literal: 'To hit the nail on the head',
    meaning: 'Einen Sachverhalt exakt und treffend formulieren.',
    origin: 'Aus dem mittelalterlichen Schützen- und Handwerkswesen: Wer den Zielnagel genau mittig traf, gewann den Wettbewerb.',
    example: 'Mit deiner Analyse hast du den Nagel genau auf den Kopf getroffen.',
    category: 'Alltag'
  },
  {
    id: 'idiom-7',
    german: 'Kummerspeck ansetzen',
    literal: 'To put on grief-bacon',
    meaning: 'Gewicht zunehmen, weil man aus Sorge oder Trauer zu viel isst.',
    origin: 'Typisch deutsches Kompositum aus „Kummer“ (Sorgen) und „Speck“ (Körperfett).',
    example: 'Nach dem stressigen Prüfungsmonat habe ich mir ordentlich Kummerspeck angefuttert.',
    category: 'Essen'
  },
  {
    id: 'idiom-8',
    german: 'Den inneren Schweinehund überwinden',
    literal: 'To overcome the inner pig-dog',
    meaning: 'Sich selbst disziplinieren und eigene Trägheit oder Faulheit besiegen.',
    origin: 'Historisch bezog sich der Begriff auf Sauhunde bei der Wildschweinjagd, später politisch und psychologisch popularisiert.',
    example: 'Heute früh habe ich meinen inneren Schweinehund überwunden und bin vor der Arbeit joggen gegangen.',
    category: 'Tiere'
  }
];

export const HISTORICAL_EPOCHS: Epoch[] = [
  {
    year: '962 – 1806',
    title: 'Heiliges Römisches Reich Deutscher Nation',
    subtitle: 'Föderales Gefüge statt Zentralstaat',
    description: 'Über acht Jahrhunderte hinweg war Mitteleuropa kein zentralistischer Nationalstaat, sondern ein Verbund hunderter Fürstentümer, Reichsstädte und Bistümer. Dieses Erbe begründet die bis heute lebendige regionale Vielfalt Deutschlands.',
    impact: 'Ursprung des deutschen Föderalismus und der Dezentralität von Kultur und Bildung.'
  },
  {
    year: '1440 & 1517',
    title: 'Buchdruck & Reformation',
    subtitle: 'Gutenberg und Luthers Bibelübersetzung',
    description: 'Johannes Gutenberg erfand in Mainz den Buchdruck mit beweglichen Lettern. Martin Luther übersetzte auf der Wartburg das Neue Testament ins Deutsche und schuf damit eine gemeinsame Schriftsprache für den gesamten Sprachraum.',
    impact: 'Demokratisierung des Wissens und Vereinheitlichung der deutschen Hochsprache.'
  },
  {
    year: 'ca. 1770 – 1830',
    title: 'Weimarer Klassik & Deutsche Aufklärung',
    subtitle: 'Das Land der Dichter und Denker',
    description: 'Persönlichkeiten wie Johann Wolfgang von Goethe, Friedrich Schiller, Immanuel Kant und Ludwig van Beethoven revolutionierten Literatur, Ethik und Musik. Weimar wurde zum geistigen Zentrum Europas.',
    impact: 'Humboldt’sches Bildungsideal und philosophische Meilensteine von Weltrang.'
  },
  {
    year: '1871',
    title: 'Deutsche Reichsgründung',
    subtitle: 'Die Entstehung des ersten Nationalstaats',
    description: 'Nach den Einigungskriegen wurde unter Reichskanzler Otto von Bismarck im Spiegelsaal von Versailles das Deutsche Kaiserreich proklamiert. Parallel setzte eine rasante Industrialisierung mit führender Chemie- und Elektroindustrie ein.',
    impact: 'Einführung der weltweit ersten modernen Sozialversicherung (Kranken-, Unfall- und Rentenversicherung).'
  },
  {
    year: '1919 – 1933',
    title: 'Weimarer Republik & Moderne',
    subtitle: 'Erste Demokratie und künstlerische Blüte',
    description: 'Nach dem Ersten Weltkrieg entstand die erste parlamentarische Republik mit Frauenwahlrecht. Kultur und Wissenschaft erlebten in Berlin die „Goldenen Zwanziger“ mit Bauhaus, Filmkunst und Nobelpreisen (u. a. Albert Einstein).',
    impact: 'Kulturelle Avantgarde und demokratische Grundrechte.'
  },
  {
    year: '1945 – 1989',
    title: 'Teilung & Kaltfront',
    subtitle: 'Bundesrepublik (BRD) und DDR',
    description: 'Nach dem von Nazi-Deutschland entfesselten Zweiten Weltkrieg und dem Zivilisationsbruch der Shoah wurde das Land in vier Besatzungszonen und später zwei Staaten geteilt. Die Berliner Mauer symbolisierte ab 1961 den Eisernen Vorhang.',
    impact: 'Entwicklung der Sozialen Marktwirtschaft im Westen und friedlicher Widerstand im Osten.'
  },
  {
    year: '1989 – 1990',
    title: 'Friedliche Revolution & Wiedervereinigung',
    subtitle: 'Der Fall der Berliner Mauer',
    description: 'Getragen von mutigen Bürgerbewegungen in Leipzig, Berlin und vielen Städten der DDR fiel am 9. November 1989 die Mauer. Am 3. Oktober 1990 trat die DDR der Bundesrepublik bei – heute der Tag der Deutschen Einheit.',
    impact: 'Historische Wiedervereinigung in Frieden und Freiheit mitten in Europa.'
  },
  {
    year: 'Gegenwart',
    title: 'Modernes Deutschland in Europa',
    subtitle: 'Demokratie, Innovation & Verantwortung',
    description: 'Als bevölkerungsreichstes Land und größte Volkswirtschaft der Europäischen Union setzt sich Deutschland für ein vereintes Europa, Energiewende und weltoffene wissenschaftliche Zusammenarbeit ein.',
    impact: 'Stabiler Eckpfeiler der europäischen Friedensordnung und weltweiter Innovationsstandort.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Wie viele Bundesländer hat die Bundesrepublik Deutschland?',
    options: ['12 Bundesländer', '14 Bundesländer', '16 Bundesländer', '18 Bundesländer'],
    correctIndex: 2,
    explanation: 'Deutschland besteht aus 16 Bundesländern, darunter die drei Stadtstaaten Berlin, Hamburg und Bremen.',
    category: 'Geografie'
  },
  {
    id: 2,
    question: 'Welches Gesetz aus dem Jahr 1516 gilt als ältestes noch gültiges Lebensmittelgesetz der Welt?',
    options: ['Das Bäckerei-Edikt', 'Das Bayerische Reinheitsgebot', 'Die Nürnberger Wurstordnung', 'Das Wein-Statut'],
    correctIndex: 1,
    explanation: 'Das Bayerische Reinheitsgebot von 1516 schrieb vor, dass Bier ausschließlich aus Wasser, Gerste und Hopfen gebraut werden darf.',
    category: 'Kultur'
  },
  {
    id: 3,
    question: 'An welchem Ort übersetzte Martin Luther 1521/22 das Neue Testament ins Deutsche?',
    options: ['Schloss Neuschwanstein', 'Wartburg bei Eisenach', 'Heidelberger Schloss', 'Kölner Dom'],
    correctIndex: 1,
    explanation: 'Auf der Wartburg in Thüringen lebte Luther inkognito als „Junker Jörg“ und schuf mit seiner Bibelübersetzung die Basis der deutschen Schriftsprache.',
    category: 'Geschichte'
  },
  {
    id: 4,
    question: 'Welche Stadt besitzt mehr Brücken als Venedig, Amsterdam und London zusammen?',
    options: ['München', 'Köln', 'Dresden', 'Hamburg'],
    correctIndex: 3,
    explanation: 'Hamburg verfügt über fast 2.500 Brücken – mehr als jede andere Stadt in Europa.',
    category: 'Fakten'
  },
  {
    id: 5,
    question: 'Was meint jemand, wenn er sagt: „Ich verstehe nur Bahnhof“?',
    options: ['Er möchte verreisen', 'Er versteht überhaupt nichts', 'Er hat einen Zug verpasst', 'Er spricht sehr laut'],
    correctIndex: 1,
    explanation: 'Die Redewendung stammt aus der Soldatensprache und bedeutet, dass man ein Thema inhaltlich gar nicht begreift oder nichts davon wissen will.',
    category: 'Sprache'
  },
  {
    id: 6,
    question: 'Welches Bundesland ist das flächenmäßig größte in Deutschland?',
    options: ['Niedersachsen', 'Baden-Württemberg', 'Nordrhein-Westfalen', 'Bayern'],
    correctIndex: 3,
    explanation: 'Der Freistaat Bayern ist mit über 70.500 km² das größte der 16 deutschen Länder.',
    category: 'Geografie'
  },
  {
    id: 7,
    question: 'Wie viele anerkannte UNESCO-Welterbestätten gibt es in Deutschland (Stand 2024)?',
    options: ['28 Stätten', '37 Stätten', '54 Stätten', '72 Stätten'],
    correctIndex: 2,
    explanation: 'Mit 54 UNESCO-Welterbestätten rangiert Deutschland weltweit auf Platz drei, hinter Italien und China.',
    category: 'Kultur'
  },
  {
    id: 8,
    question: 'Was ist das traditionelle deutsche „Abendbrot“?',
    options: ['Ein mehrgängiges warmes Festmenü', 'Eine kalte Mahlzeit mit Brot, Käse, Aufschnitt und Butter', 'Ein süßes Dessert mit Kaffee', 'Eine Schüssel Gemüseeintopf'],
    correctIndex: 1,
    explanation: 'Das Abendbrot ist ein typischer Brauch: Statt warm zu kochen, essen viele Familien abends Brotscheiben mit herzhaftem Belag.',
    category: 'Traditionen'
  },
  {
    id: 9,
    question: 'Wann fiel die Berliner Mauer, die Ost- und Westberlin fast 28 Jahre lang trennte?',
    options: ['17. Juni 1953', '13. August 1961', '9. November 1989', '3. Oktober 1990'],
    correctIndex: 2,
    explanation: 'Am Abend des 9. November 1989 öffneten sich die Grenzübergänge nach einer historischen Pressekonferenz und friedlichen Massenprotesten.',
    category: 'Geschichte'
  },
  {
    id: 10,
    question: 'Welche Kunst- und Architekturschule wurde 1919 in Weimar gegründet und prägte die moderne Gestaltung?',
    options: ['Jugendstil Akademie', 'Das Bauhaus', 'Deutscher Werkbund', 'Darmstädter Künstlerkolonie'],
    correctIndex: 1,
    explanation: 'Das von Walter Gropius gegründete Bauhaus revolutionierte mit dem Grundsatz „Form folgt Funktion“ die globale Architektur und das Industriedesign.',
    category: 'Kunst'
  }
];
