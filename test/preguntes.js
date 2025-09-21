const questionBank = [
    // ========================================
    // BLOC: SENTIT NUMÈRIC
    // ========================================
    {
        id: "sn_001",
        bloc: "sentit_numeric",
        tipus: "directa",
        pregunta: "Quina és la representació decimal de la fracció 3/8?",
        opcions: [
            { id: "a", text: "0,24", correcta: false },
            { id: "b", text: "0,375", correcta: true },
            { id: "c", text: "0,48", correcta: false },
            { id: "d", text: "0,625", correcta: false }
        ],
        explicacio: "3 dividit per 8 dona 0,375; és la representació decimal exacta de la fracció."
    },
    {
        id: "sn_002",
        bloc: "sentit_numeric",
        tipus: "competencial",
        pregunta: "En un informe energètic es comparen dues dades: la ciutat A consumeix 2,75·10^5 kWh i el poble B consumeix 3,1·10^4 kWh cada mes. Quina conclusió és correcta?",
        opcions: [
            { id: "a", text: "El poble B consumeix 31.000 kWh i supera lleugerament la ciutat A.", correcta: false },
            { id: "b", text: "La ciutat A consumeix 275.000 kWh, aproximadament deu vegades més que el poble B.", correcta: true },
            { id: "c", text: "Les dues xifres representen el mateix consum, només escrit de manera diferent.", correcta: false },
            { id: "d", text: "El poble B consumeix 0,275·10^5 kWh, gairebé igual que la ciutat A.", correcta: false }
        ],
        explicacio: "2,75·10^5 = 275.000 i 3,1·10^4 = 31.000; la ciutat A gasta molt més energia que el poble B."
    },

    // ========================================
    // BLOC: SENTIT DE LES OPERACIONS
    // ========================================
    {
        id: "so_001",
        bloc: "sentit_operacions",
        tipus: "directa",
        pregunta: "Calcula 18 - (-7) × 2 respectant la prioritat de les operacions.",
        opcions: [
            { id: "a", text: "4", correcta: false },
            { id: "b", text: "32", correcta: true },
            { id: "c", text: "-4", correcta: false },
            { id: "d", text: "40", correcta: false }
        ],
        explicacio: "Primer es multiplica: (-7) × 2 = -14. Després 18 - (-14) = 18 + 14 = 32."
    },
    {
        id: "so_002",
        bloc: "sentit_operacions",
        tipus: "competencial",
        pregunta: "Una plataforma de vídeo cobra 9,99 € al mes i ofereix un 20% de descompte si pagues els tres primers mesos per avançat. Quant pagaràs pels tres mesos amb la promoció?",
        opcions: [
            { id: "a", text: "19,98 €", correcta: false },
            { id: "b", text: "21,50 €", correcta: false },
            { id: "c", text: "23,98 €", correcta: true },
            { id: "d", text: "26,00 €", correcta: false }
        ],
        explicacio: "Sense descompte serien 9,99 × 3 = 29,97 €. Un 20% de descompte equival a restar 5,994 €, de manera que es paga aproximadament 23,98 €."
    },

    // ========================================
    // BLOC: SENTIT DE LA MESURA
    // ========================================
    {
        id: "sm_001",
        bloc: "sentit_mesura",
        tipus: "directa",
        pregunta: "Converteix 1,25 kilòmetres a metres.",
        opcions: [
            { id: "a", text: "125 metres", correcta: false },
            { id: "b", text: "1.250 metres", correcta: true },
            { id: "c", text: "12.500 metres", correcta: false },
            { id: "d", text: "0,125 metres", correcta: false }
        ],
        explicacio: "Multipliquem per 1.000: 1,25 × 1.000 = 1.250 metres."
    },
    {
        id: "sm_002",
        bloc: "sentit_mesura",
        tipus: "competencial",
        pregunta: "Una impressora 3D utilitza 18 grams de filament cada 45 minuts en mode eco. Quants grams necessitarà per imprimir una peça que triga 2 hores i 15 minuts?",
        opcions: [
            { id: "a", text: "36 grams", correcta: false },
            { id: "b", text: "45 grams", correcta: false },
            { id: "c", text: "54 grams", correcta: true },
            { id: "d", text: "72 grams", correcta: false }
        ],
        explicacio: "2 h 15 min són 135 minuts. El consum és 18/45 = 0,4 g per minut. Multiplicant 135 × 0,4 obtenim 54 grams."
    },

    // ========================================
    // BLOC: SENTIT ESPACIAL
    // ========================================
    {
        id: "se_001",
        bloc: "sentit_espacial",
        tipus: "directa",
        pregunta: "Quina és la suma dels angles interiors d’un hexàgon?",
        opcions: [
            { id: "a", text: "360°", correcta: false },
            { id: "b", text: "540°", correcta: false },
            { id: "c", text: "720°", correcta: true },
            { id: "d", text: "900°", correcta: false }
        ],
        explicacio: "Per a un polígon de n costats, la suma d’angles és (n − 2) × 180°. Per a n = 6, obtenim (6 − 2) × 180° = 720°."
    },
    {
        id: "se_002",
        bloc: "sentit_espacial",
        tipus: "competencial",
        pregunta: "En un mapa digital, 1 cm representa 250 metres. Si un recorregut en forma de L mesura 4,5 cm en un tram i 3,2 cm en l’altre, quina distància real recorreràs?",
        opcions: [
            { id: "a", text: "1,10 km", correcta: false },
            { id: "b", text: "1,55 km", correcta: false },
            { id: "c", text: "1,93 km", correcta: true },
            { id: "d", text: "2,50 km", correcta: false }
        ],
        explicacio: "La longitud total en el mapa és 4,5 + 3,2 = 7,7 cm. Multiplicant per l’escala: 7,7 × 250 = 1.925 metres ≈ 1,93 km."
    },

    // ========================================
    // BLOC: SENTIT ALGEBRAIC
    // ========================================
    {
        id: "sa_001",
        bloc: "sentit_algebraic",
        tipus: "directa",
        pregunta: "Calcula 3(2x − 1) quan x = 4.",
        opcions: [
            { id: "a", text: "15", correcta: false },
            { id: "b", text: "21", correcta: true },
            { id: "c", text: "27", correcta: false },
            { id: "d", text: "33", correcta: false }
        ],
        explicacio: "2x − 1 = 2·4 − 1 = 7; multiplicant per 3 obtenim 21."
    },
    {
        id: "sa_002",
        bloc: "sentit_algebraic",
        tipus: "directa",
        pregunta: "Quina expressió representa la seqüència 5, 8, 11, 14... si n indica la posició començant en n = 1?",
        opcions: [
            { id: "a", text: "2n + 3", correcta: false },
            { id: "b", text: "3n + 2", correcta: true },
            { id: "c", text: "4n + 1", correcta: false },
            { id: "d", text: "5n − 2", correcta: false }
        ],
        explicacio: "La diferència és constant (3). L’expressió que compleix a n = 1 → 5 és 3n + 2."
    },
    {
        id: "sa_003",
        bloc: "sentit_algebraic",
        tipus: "competencial",
        pregunta: "Un robot aspirador intel·ligent neteja 18 m² cada 7 minuts. Quina expressió permet calcular el temps t (en minuts) necessari per netejar una superfície S m² en aquest mode?",
        opcions: [
            { id: "a", text: "t = (7/18) · S", correcta: true },
            { id: "b", text: "t = (18/7) · S", correcta: false },
            { id: "c", text: "t = 18S − 7", correcta: false },
            { id: "d", text: "t = S / (18 + 7)", correcta: false }
        ],
        explicacio: "Si 18 m² requereixen 7 minuts, el temps és proporcional a la superfície: t = S · (7/18)."
    },
    {
        id: "sa_004",
        bloc: "sentit_algebraic",
        tipus: "competencial",
        pregunta: "En un festival tecnològic, el passi digital costa 12 € i cada taller extra val 2,5 €. Si disposes de 32 €, quants tallers addicionals pots reservar sense superar el pressupost?",
        opcions: [
            { id: "a", text: "6 tallers", correcta: false },
            { id: "b", text: "7 tallers", correcta: false },
            { id: "c", text: "8 tallers", correcta: true },
            { id: "d", text: "9 tallers", correcta: false }
        ],
        explicacio: "Cal resoldre 12 + 2,5·t ≤ 32. Resta 12 (queden 20 €) i divideix per 2,5: t = 8 tallers."
    },

    // ========================================
    // BLOC: SENTIT ESTOCÀSTIC
    // ========================================
    {
        id: "st_001",
        bloc: "sentit_estocastic",
        tipus: "directa",
        pregunta: "En un grup es registren els minuts de lectura digital per dia: 15, 20, 18, 15, 22, 15. Quina és la moda de la mostra?",
        opcions: [
            { id: "a", text: "18 minuts", correcta: false },
            { id: "b", text: "15 minuts", correcta: true },
            { id: "c", text: "20 minuts", correcta: false },
            { id: "d", text: "22 minuts", correcta: false }
        ],
        explicacio: "La moda és el valor que més es repeteix; en aquest cas 15 apareix tres vegades."
    },
    {
        id: "st_002",
        bloc: "sentit_estocastic",
        tipus: "directa",
        pregunta: "En una caixa hi ha 3 memòries USB blaves, 2 vermelles i 1 verda. Quina és la probabilitat d’agafar una memòria vermella a l’atzar?",
        opcions: [
            { id: "a", text: "1/6", correcta: false },
            { id: "b", text: "1/3", correcta: true },
            { id: "c", text: "1/2", correcta: false },
            { id: "d", text: "2/3", correcta: false }
        ],
        explicacio: "Hi ha 6 memòries en total i 2 són vermelles: la probabilitat és 2/6 = 1/3."
    },
    {
        id: "st_003",
        bloc: "sentit_estocastic",
        tipus: "competencial",
        pregunta: "Una app de salut registra els passos mitjans per dia d’un grup: dilluns 8.000, dimarts 9.200, dimecres 10.400, dijous 9.800 i divendres 11.600. Quin missatge ajudaria millor a millorar la rutina del grup?",
        opcions: [
            { id: "a", text: "Enviar un recordatori els dilluns perquè és el dia amb menys activitat registrada.", correcta: true },
            { id: "b", text: "Enviar-lo els divendres perquè ja són el dia amb menys passos.", correcta: false },
            { id: "c", text: "No cal cap recordatori perquè la mitjana diària supera els 12.000 passos.", correcta: false },
            { id: "d", text: "Concentrar el missatge els dimecres perquè és quan hi ha una baixada sobtada.", correcta: false }
        ],
        explicacio: "Les dades mostren que dilluns és el dia amb menys passos; és el moment òptim per reforçar l’hàbit."
    },
    {
        id: "st_004",
        bloc: "sentit_estocastic",
        tipus: "competencial",
        pregunta: "Un estudi sobre mobilitat mostra el temps de desplaçament (en minuts) d’un grup d’estudiants: 12, 18, 25, 30, 35, 40, 45, 45. Quin indicador és més útil per informar les famílies del temps típic i quin és el seu valor?",
        opcions: [
            { id: "a", text: "La mitjana, 31 minuts.", correcta: false },
            { id: "b", text: "La moda, 12 minuts.", correcta: false },
            { id: "c", text: "La mediana, 32,5 minuts.", correcta: true },
            { id: "d", text: "El rang, 45 minuts.", correcta: false }
        ],
        explicacio: "La mediana (promig entre 30 i 35) resumeix millor el temps típic evitant l’efecte dels valors extrems."
    }
];

console.log(`Total de preguntes carregades: ${questionBank.length}`);
console.log(`- Bloc 'sentit_numeric': ${questionBank.filter(q => q.bloc === 'sentit_numeric').length} preguntes.`);
console.log(`- Bloc 'sentit_operacions': ${questionBank.filter(q => q.bloc === 'sentit_operacions').length} preguntes.`);
console.log(`- Bloc 'sentit_mesura': ${questionBank.filter(q => q.bloc === 'sentit_mesura').length} preguntes.`);
console.log(`- Bloc 'sentit_espacial': ${questionBank.filter(q => q.bloc === 'sentit_espacial').length} preguntes.`);
console.log(`- Bloc 'sentit_algebraic': ${questionBank.filter(q => q.bloc === 'sentit_algebraic').length} preguntes.`);
console.log(`- Bloc 'sentit_estocastic': ${questionBank.filter(q => q.bloc === 'sentit_estocastic').length} preguntes.`);
