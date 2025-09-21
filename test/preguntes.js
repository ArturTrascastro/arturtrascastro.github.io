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
    {
        id: "sn_003",
        bloc: "sentit_numeric",
        tipus: "directa",
        pregunta: "Quin percentatge representa la fracció 4/5?",
        opcions: [
            { id: "a", text: "40%", correcta: false },
            { id: "b", text: "60%", correcta: false },
            { id: "c", text: "75%", correcta: false },
            { id: "d", text: "80%", correcta: true }
        ],
        explicacio: "4 dividit per 5 és 0,8, que equival al 80%."
    },
    {
        id: "sn_004",
        bloc: "sentit_numeric",
        tipus: "competencial",
        pregunta: "Una botiga aplica un descompte del 15% a un videojoc que costa 40 €. Quin preu pagarà un client durant la promoció?",
        opcions: [
            { id: "a", text: "28 €", correcta: false },
            { id: "b", text: "32 €", correcta: false },
            { id: "c", text: "34 €", correcta: true },
            { id: "d", text: "36 €", correcta: false }
        ],
        explicacio: "El descompte és 0,15 × 40 = 6 €. El nou preu és 40 - 6 = 34 €."
    },
    {
        id: "sn_005",
        bloc: "sentit_numeric",
        tipus: "directa",
        pregunta: "Quant és 2/3 + 1/6?",
        opcions: [
            { id: "a", text: "3/9", correcta: false },
            { id: "b", text: "1/2", correcta: false },
            { id: "c", text: "5/6", correcta: true },
            { id: "d", text: "7/6", correcta: false }
        ],
        explicacio: "Fem denominador comú 6: 4/6 + 1/6 = 5/6."
    },
    {
        id: "sn_006",
        bloc: "sentit_numeric",
        tipus: "competencial",
        pregunta: "En un hort urbà hi ha 96 plantes, i 3/8 són tomàquets. Quantes plantes de tomàquet hi ha?",
        opcions: [
            { id: "a", text: "24", correcta: false },
            { id: "b", text: "30", correcta: false },
            { id: "c", text: "36", correcta: true },
            { id: "d", text: "48", correcta: false }
        ],
        explicacio: "3/8 de 96 és (96 ÷ 8) × 3 = 12 × 3 = 36 plantes."
    },
    {
        id: "sn_007",
        bloc: "sentit_numeric",
        tipus: "directa",
        pregunta: "Quin és el valor absolut de −14?",
        opcions: [
            { id: "a", text: "−14", correcta: false },
            { id: "b", text: "0", correcta: false },
            { id: "c", text: "14", correcta: true },
            { id: "d", text: "−1", correcta: false }
        ],
        explicacio: "El valor absolut d’un nombre és la seva distància a zero, per tant |−14| = 14."
    },
    {
        id: "sn_008",
        bloc: "sentit_numeric",
        tipus: "competencial",
        pregunta: "Una ruta de senderisme té dos trams: el primer és de 3,2 km i el segon de 2,75 km. Quina distància total es recorre?",
        opcions: [
            { id: "a", text: "5,05 km", correcta: false },
            { id: "b", text: "5,95 km", correcta: true },
            { id: "c", text: "6,2 km", correcta: false },
            { id: "d", text: "6,45 km", correcta: false }
        ],
        explicacio: "Sumem els trams: 3,2 + 2,75 = 5,95 km."
    },
    {
        id: "sn_009",
        bloc: "sentit_numeric",
        tipus: "directa",
        pregunta: "Quina és l'ordre creixent correcte d’aquests decimals: 0,45 · 0,405 · 0,5 · 0,4?",
        opcions: [
            { id: "a", text: "0,4 < 0,45 < 0,405 < 0,5", correcta: false },
            { id: "b", text: "0,4 < 0,405 < 0,45 < 0,5", correcta: true },
            { id: "c", text: "0,405 < 0,4 < 0,45 < 0,5", correcta: false },
            { id: "d", text: "0,405 < 0,45 < 0,4 < 0,5", correcta: false }
        ],
        explicacio: "Comparant les centèsimes: 0,4 = 0,400 és el menor, seguit de 0,405, després 0,45 i finalment 0,5."
    },
    {
        id: "sn_010",
        bloc: "sentit_numeric",
        tipus: "competencial",
        pregunta: "Un robot aspirador neteja 1,8 m² per minut. Quina superfície netejarà en 12,5 minuts?",
        opcions: [
            { id: "a", text: "15 m²", correcta: false },
            { id: "b", text: "20 m²", correcta: false },
            { id: "c", text: "22,5 m²", correcta: true },
            { id: "d", text: "25,5 m²", correcta: false }
        ],
        explicacio: "Multipliquem: 1,8 × 12,5 = 22,5 metres quadrats."
    },
    {
        id: "sn_011",
        bloc: "sentit_numeric",
        tipus: "directa",
        pregunta: "Quant val 2^3 × 5?",
        opcions: [
            { id: "a", text: "15", correcta: false },
            { id: "b", text: "30", correcta: false },
            { id: "c", text: "40", correcta: true },
            { id: "d", text: "45", correcta: false }
        ],
        explicacio: "2^3 = 8 i 8 × 5 = 40."
    },
    {
        id: "sn_012",
        bloc: "sentit_numeric",
        tipus: "competencial",
        pregunta: "Una cooperativa reparteix 9,6 litres de suc a parts iguals en ampolles de 0,8 litres. Quantes ampolles s’omplen completament?",
        opcions: [
            { id: "a", text: "10", correcta: false },
            { id: "b", text: "11", correcta: false },
            { id: "c", text: "12", correcta: true },
            { id: "d", text: "14", correcta: false }
        ],
        explicacio: "9,6 ÷ 0,8 = 12 ampolles plenes."
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
    {
        id: "so_003",
        bloc: "sentit_operacions",
        tipus: "directa",
        pregunta: "Calcula 45 ÷ 9 + 7 × 2 respectant l’ordre de les operacions.",
        opcions: [
            { id: "a", text: "12", correcta: false },
            { id: "b", text: "19", correcta: true },
            { id: "c", text: "24", correcta: false },
            { id: "d", text: "29", correcta: false }
        ],
        explicacio: "Primer 7 × 2 = 14; després 45 ÷ 9 = 5 i finalment 5 + 14 = 19."
    },
    {
        id: "so_004",
        bloc: "sentit_operacions",
        tipus: "competencial",
        pregunta: "En una cafeteria es venen 12 sucs a 2,60 € i 8 entrepans a 3,40 €. Quin és l’ingrés total?",
        opcions: [
            { id: "a", text: "43,20 €", correcta: false },
            { id: "b", text: "54,80 €", correcta: false },
            { id: "c", text: "58,40 €", correcta: true },
            { id: "d", text: "62,10 €", correcta: false }
        ],
        explicacio: "12 × 2,60 = 31,20 € i 8 × 3,40 = 27,20 €. Sumem: 31,20 + 27,20 = 58,40 €."
    },
    {
        id: "so_005",
        bloc: "sentit_operacions",
        tipus: "directa",
        pregunta: "Resol 5 · (12 − 7) + 9.",
        opcions: [
            { id: "a", text: "29", correcta: false },
            { id: "b", text: "34", correcta: true },
            { id: "c", text: "44", correcta: false },
            { id: "d", text: "69", correcta: false }
        ],
        explicacio: "12 − 7 = 5; 5 · 5 = 25; 25 + 9 = 34."
    },
    {
        id: "so_006",
        bloc: "sentit_operacions",
        tipus: "competencial",
        pregunta: "Un taller fabrica 18 peces per hora. Quantes peces farà en 4,5 hores si manté el ritme?",
        opcions: [
            { id: "a", text: "54", correcta: false },
            { id: "b", text: "72", correcta: false },
            { id: "c", text: "81", correcta: true },
            { id: "d", text: "90", correcta: false }
        ],
        explicacio: "18 × 4,5 = 81 peces fabricades."
    },
    {
        id: "so_007",
        bloc: "sentit_operacions",
        tipus: "directa",
        pregunta: "Calcula −8 + 15 − 6.",
        opcions: [
            { id: "a", text: "−7", correcta: false },
            { id: "b", text: "1", correcta: true },
            { id: "c", text: "3", correcta: false },
            { id: "d", text: "13", correcta: false }
        ],
        explicacio: "−8 + 15 = 7 i 7 − 6 = 1."
    },
    {
        id: "so_008",
        bloc: "sentit_operacions",
        tipus: "competencial",
        pregunta: "Una targeta moneder té 25 €. Si compres 3 aplicacions de 4,50 € i un joc de 6,20 €, quin saldo et queda?",
        opcions: [
            { id: "a", text: "3,10 €", correcta: false },
            { id: "b", text: "4,30 €", correcta: false },
            { id: "c", text: "5,30 €", correcta: true },
            { id: "d", text: "6,50 €", correcta: false }
        ],
        explicacio: "La despesa total és 3 × 4,50 = 13,50 €; 13,50 + 6,20 = 19,70 €. El saldo és 25 − 19,70 = 5,30 €."
    },
    {
        id: "so_009",
        bloc: "sentit_operacions",
        tipus: "directa",
        pregunta: "Quin és el valor de 3/4 de 32?",
        opcions: [
            { id: "a", text: "18", correcta: false },
            { id: "b", text: "20", correcta: false },
            { id: "c", text: "24", correcta: true },
            { id: "d", text: "28", correcta: false }
        ],
        explicacio: "32 × 3 ÷ 4 = 96 ÷ 4 = 24."
    },
    {
        id: "so_010",
        bloc: "sentit_operacions",
        tipus: "competencial",
        pregunta: "Un bitllet de bus costa 1,45 €. Si pagues amb un bitllet de 5 €, quin canvi rebràs?",
        opcions: [
            { id: "a", text: "3,35 €", correcta: false },
            { id: "b", text: "3,45 €", correcta: false },
            { id: "c", text: "3,55 €", correcta: true },
            { id: "d", text: "3,65 €", correcta: false }
        ],
        explicacio: "5 − 1,45 = 3,55 €."
    },
    {
        id: "so_011",
        bloc: "sentit_operacions",
        tipus: "directa",
        pregunta: "Calcula 2^4 − 3^2.",
        opcions: [
            { id: "a", text: "4", correcta: false },
            { id: "b", text: "7", correcta: true },
            { id: "c", text: "13", correcta: false },
            { id: "d", text: "25", correcta: false }
        ],
        explicacio: "2^4 = 16 i 3^2 = 9, de manera que 16 − 9 = 7."
    },
    {
        id: "so_012",
        bloc: "sentit_operacions",
        tipus: "competencial",
        pregunta: "Una recepta per a 6 persones necessita 450 g d’arròs. Quants grams calen per a 9 persones mantenint la mateixa proporció?",
        opcions: [
            { id: "a", text: "525 g", correcta: false },
            { id: "b", text: "600 g", correcta: false },
            { id: "c", text: "675 g", correcta: true },
            { id: "d", text: "720 g", correcta: false }
        ],
        explicacio: "450 g ÷ 6 = 75 g per persona. 75 × 9 = 675 g."
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
    {
        id: "sm_003",
        bloc: "sentit_mesura",
        tipus: "directa",
        pregunta: "Quants litres són 2.500 mil·lilitres?",
        opcions: [
            { id: "a", text: "0,25 L", correcta: false },
            { id: "b", text: "2,5 L", correcta: true },
            { id: "c", text: "25 L", correcta: false },
            { id: "d", text: "250 L", correcta: false }
        ],
        explicacio: "Dividim per 1.000: 2.500 ml = 2,5 litres."
    },
    {
        id: "sm_004",
        bloc: "sentit_mesura",
        tipus: "competencial",
        pregunta: "Una cantimplora conté 1,2 litres d’aigua. Si quatre excursionistes comparteixen el contingut per igual, quants mil·lilitres beu cadascun?",
        opcions: [
            { id: "a", text: "240 ml", correcta: false },
            { id: "b", text: "300 ml", correcta: true },
            { id: "c", text: "450 ml", correcta: false },
            { id: "d", text: "600 ml", correcta: false }
        ],
        explicacio: "1,2 L = 1.200 ml i 1.200 ÷ 4 = 300 ml per persona."
    },
    {
        id: "sm_005",
        bloc: "sentit_mesura",
        tipus: "directa",
        pregunta: "Quin és el perímetre d’un rectangle de 8 cm de llarg i 5 cm d’ample?",
        opcions: [
            { id: "a", text: "13 cm", correcta: false },
            { id: "b", text: "26 cm", correcta: true },
            { id: "c", text: "30 cm", correcta: false },
            { id: "d", text: "40 cm", correcta: false }
        ],
        explicacio: "Perímetre = 2 × (8 + 5) = 2 × 13 = 26 cm."
    },
    {
        id: "sm_006",
        bloc: "sentit_mesura",
        tipus: "competencial",
        pregunta: "Es vol cobrir un jardí de 18 metres per 6 metres amb plaques de gespa de 2 m². Quantes plaques calen?",
        opcions: [
            { id: "a", text: "36 plaques", correcta: false },
            { id: "b", text: "48 plaques", correcta: false },
            { id: "c", text: "54 plaques", correcta: true },
            { id: "d", text: "60 plaques", correcta: false }
        ],
        explicacio: "L’àrea del jardí és 18 × 6 = 108 m²; 108 ÷ 2 = 54 plaques."
    },
    {
        id: "sm_007",
        bloc: "sentit_mesura",
        tipus: "directa",
        pregunta: "Quants segons hi ha en 3 minuts i 40 segons?",
        opcions: [
            { id: "a", text: "180 s", correcta: false },
            { id: "b", text: "200 s", correcta: false },
            { id: "c", text: "220 s", correcta: true },
            { id: "d", text: "240 s", correcta: false }
        ],
        explicacio: "3 minuts = 180 s; 180 + 40 = 220 segons."
    },
    {
        id: "sm_008",
        bloc: "sentit_mesura",
        tipus: "competencial",
        pregunta: "Una recepta digital indica 0,35 kg de farina. Quants grams són?",
        opcions: [
            { id: "a", text: "35 g", correcta: false },
            { id: "b", text: "150 g", correcta: false },
            { id: "c", text: "350 g", correcta: true },
            { id: "d", text: "3.500 g", correcta: false }
        ],
        explicacio: "Multipliquem per 1.000: 0,35 kg = 350 grams."
    },
    {
        id: "sm_009",
        bloc: "sentit_mesura",
        tipus: "directa",
        pregunta: "Quants centímetres hi ha en 2,4 metres?",
        opcions: [
            { id: "a", text: "24 cm", correcta: false },
            { id: "b", text: "240 cm", correcta: true },
            { id: "c", text: "2.400 cm", correcta: false },
            { id: "d", text: "0,24 cm", correcta: false }
        ],
        explicacio: "1 metre són 100 cm, de manera que 2,4 × 100 = 240 cm."
    },
    {
        id: "sm_010",
        bloc: "sentit_mesura",
        tipus: "competencial",
        pregunta: "Un experiment de laboratori necessita 1,8 litres d’aigua. Si només tens gots de 150 ml, quants gots plens calen?",
        opcions: [
            { id: "a", text: "9", correcta: false },
            { id: "b", text: "10", correcta: false },
            { id: "c", text: "12", correcta: true },
            { id: "d", text: "15", correcta: false }
        ],
        explicacio: "1,8 L = 1.800 ml i 1.800 ÷ 150 = 12 gots."
    },
    {
        id: "sm_011",
        bloc: "sentit_mesura",
        tipus: "directa",
        pregunta: "Quina és l’àrea d’un triangle de base 10 cm i alçada 6 cm?",
        opcions: [
            { id: "a", text: "16 cm²", correcta: false },
            { id: "b", text: "30 cm²", correcta: true },
            { id: "c", text: "60 cm²", correcta: false },
            { id: "d", text: "120 cm²", correcta: false }
        ],
        explicacio: "Àrea = (base × alçada) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm²."
    },
    {
        id: "sm_012",
        bloc: "sentit_mesura",
        tipus: "competencial",
        pregunta: "Un patinador fa una volta completa a una pista circular de radi 4 metres. Quina distància recorre en una volta (pren π ≈ 3,14)?",
        opcions: [
            { id: "a", text: "12,56 m", correcta: false },
            { id: "b", text: "18,84 m", correcta: false },
            { id: "c", text: "25,12 m", correcta: true },
            { id: "d", text: "31,40 m", correcta: false }
        ],
        explicacio: "Longitud = 2·π·r = 2 × 3,14 × 4 = 25,12 metres."
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
    {
        id: "se_003",
        bloc: "sentit_espacial",
        tipus: "directa",
        pregunta: "Quin tipus de triangle té dos costats iguals i un de diferent?",
        opcions: [
            { id: "a", text: "Equilàter", correcta: false },
            { id: "b", text: "Rectangle", correcta: false },
            { id: "c", text: "Isòsceles", correcta: true },
            { id: "d", text: "Escalè", correcta: false }
        ],
        explicacio: "Un triangle isòsceles té exactament dos costats de la mateixa longitud."
    },
    {
        id: "se_004",
        bloc: "sentit_espacial",
        tipus: "competencial",
        pregunta: "En un plànol a escala 1:500, la longitud d’una sala és de 8 cm. Quina longitud real té la sala?",
        opcions: [
            { id: "a", text: "20 m", correcta: false },
            { id: "b", text: "30 m", correcta: false },
            { id: "c", text: "40 m", correcta: true },
            { id: "d", text: "50 m", correcta: false }
        ],
        explicacio: "Cada centímetre representa 500 cm. 8 × 500 = 4.000 cm = 40 metres."
    },
    {
        id: "se_005",
        bloc: "sentit_espacial",
        tipus: "directa",
        pregunta: "Quants graus mesura cada angle interior d’un quadrat?",
        opcions: [
            { id: "a", text: "45°", correcta: false },
            { id: "b", text: "60°", correcta: false },
            { id: "c", text: "90°", correcta: true },
            { id: "d", text: "120°", correcta: false }
        ],
        explicacio: "Tots els angles interiors d’un quadrat són rectes, és a dir, de 90°."
    },
    {
        id: "se_006",
        bloc: "sentit_espacial",
        tipus: "competencial",
        pregunta: "En un videojoc, el punt A(2, 3) es reflecteix respecte de l’eix Y. Quines són les noves coordenades del punt?",
        opcions: [
            { id: "a", text: "(−2, 3)", correcta: true },
            { id: "b", text: "(2, −3)", correcta: false },
            { id: "c", text: "(3, 2)", correcta: false },
            { id: "d", text: "(−3, 2)", correcta: false }
        ],
        explicacio: "Reflectir respecte l’eix Y canvia el signe de la coordenada x: (2, 3) → (−2, 3)."
    },
    {
        id: "se_007",
        bloc: "sentit_espacial",
        tipus: "directa",
        pregunta: "Quina figura té sis cares quadrades, totes les arestes iguals i fa la mateixa forma que un dau?",
        opcions: [
            { id: "a", text: "Prisma rectangular", correcta: false },
            { id: "b", text: "Cub", correcta: true },
            { id: "c", text: "Piràmide", correcta: false },
            { id: "d", text: "Cilindre", correcta: false }
        ],
        explicacio: "El cub té sis cares quadrades idèntiques i totes les arestes iguals."
    },
    {
        id: "se_008",
        bloc: "sentit_espacial",
        tipus: "competencial",
        pregunta: "En un dron simulator, un punt es troba en la posició (−3, 4). Si avança 5 unitats cap a la dreta, quina és la nova posició?",
        opcions: [
            { id: "a", text: "(2, 4)", correcta: true },
            { id: "b", text: "(−8, 4)", correcta: false },
            { id: "c", text: "(−3, 9)", correcta: false },
            { id: "d", text: "(2, −4)", correcta: false }
        ],
        explicacio: "Desplaçar-se cap a la dreta augmenta la coordenada x: −3 + 5 = 2."
    },
    {
        id: "se_009",
        bloc: "sentit_espacial",
        tipus: "directa",
        pregunta: "Quants graus té la suma dels angles interiors d’un triangle?",
        opcions: [
            { id: "a", text: "90°", correcta: false },
            { id: "b", text: "120°", correcta: false },
            { id: "c", text: "180°", correcta: true },
            { id: "d", text: "270°", correcta: false }
        ],
        explicacio: "La suma dels angles interiors de qualsevol triangle és 180°."
    },
    {
        id: "se_010",
        bloc: "sentit_espacial",
        tipus: "competencial",
        pregunta: "Una peça de construcció té forma de prisma rectangular de base 2 cm × 3 cm i alçada 4 cm. Quants petits cubs d’1 cm³ caldrien per omplir-la?",
        opcions: [
            { id: "a", text: "18", correcta: false },
            { id: "b", text: "20", correcta: false },
            { id: "c", text: "24", correcta: true },
            { id: "d", text: "30", correcta: false }
        ],
        explicacio: "Volum = 2 × 3 × 4 = 24 cm³; calen 24 cubs d’1 cm³."
    },
    {
        id: "se_011",
        bloc: "sentit_espacial",
        tipus: "directa",
        pregunta: "Com s’anomena un angle menor de 90°?",
        opcions: [
            { id: "a", text: "Obtús", correcta: false },
            { id: "b", text: "Plan", correcta: false },
            { id: "c", text: "Agut", correcta: true },
            { id: "d", text: "Recte", correcta: false }
        ],
        explicacio: "Un angle agut mesura menys de 90°."
    },
    {
        id: "se_012",
        bloc: "sentit_espacial",
        tipus: "competencial",
        pregunta: "Un mural triangular equilàter té costats d’1,2 metres. Quina longitud total de cinta LED cal per ressaltar-ne el contorn?",
        opcions: [
            { id: "a", text: "2,4 m", correcta: false },
            { id: "b", text: "3,6 m", correcta: true },
            { id: "c", text: "4,2 m", correcta: false },
            { id: "d", text: "5,0 m", correcta: false }
        ],
        explicacio: "Perímetre del triangle equilàter = 3 × 1,2 = 3,6 metres."
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
    {
        id: "sa_005",
        bloc: "sentit_algebraic",
        tipus: "directa",
        pregunta: "Resol l’equació x + 7 = 18.",
        opcions: [
            { id: "a", text: "9", correcta: false },
            { id: "b", text: "10", correcta: false },
            { id: "c", text: "11", correcta: true },
            { id: "d", text: "12", correcta: false }
        ],
        explicacio: "Restem 7 als dos costats: x = 18 − 7 = 11."
    },
    {
        id: "sa_006",
        bloc: "sentit_algebraic",
        tipus: "directa",
        pregunta: "Calcula 2(x + 3) quan x = 5.",
        opcions: [
            { id: "a", text: "10", correcta: false },
            { id: "b", text: "14", correcta: false },
            { id: "c", text: "16", correcta: true },
            { id: "d", text: "20", correcta: false }
        ],
        explicacio: "x + 3 = 8 i 2 × 8 = 16."
    },
    {
        id: "sa_007",
        bloc: "sentit_algebraic",
        tipus: "directa",
        pregunta: "Resol 12 − 3x = 3.",
        opcions: [
            { id: "a", text: "2", correcta: false },
            { id: "b", text: "3", correcta: true },
            { id: "c", text: "4", correcta: false },
            { id: "d", text: "5", correcta: false }
        ],
        explicacio: "Restem 12: −3x = −9 i dividim per −3: x = 3."
    },
    {
        id: "sa_008",
        bloc: "sentit_algebraic",
        tipus: "directa",
        pregunta: "Quina expressió genera la successió 5, 9, 13, 17, ... si n comença en 1?",
        opcions: [
            { id: "a", text: "3n + 2", correcta: false },
            { id: "b", text: "4n + 1", correcta: true },
            { id: "c", text: "5n", correcta: false },
            { id: "d", text: "n + 4", correcta: false }
        ],
        explicacio: "La diferència és 4. Per n = 1 → 4(1) + 1 = 5; per n = 2 → 9, etc."
    },
    {
        id: "sa_009",
        bloc: "sentit_algebraic",
        tipus: "directa",
        pregunta: "Resol l’equació 2x + 4 = 3x − 5.",
        opcions: [
            { id: "a", text: "−9", correcta: false },
            { id: "b", text: "1", correcta: false },
            { id: "c", text: "9", correcta: true },
            { id: "d", text: "14", correcta: false }
        ],
        explicacio: "Restem 2x i sumem 5: 4 + 5 = x, així que x = 9."
    },
    {
        id: "sa_010",
        bloc: "sentit_algebraic",
        tipus: "competencial",
        pregunta: "Un trajecte en taxi costa 4 € de sortida més 0,80 € per quilòmetre. Quant costarà un trajecte de 6 km?",
        opcions: [
            { id: "a", text: "7,80 €", correcta: false },
            { id: "b", text: "8,80 €", correcta: true },
            { id: "c", text: "9,20 €", correcta: false },
            { id: "d", text: "10,40 €", correcta: false }
        ],
        explicacio: "Cost = 4 + 0,80 × 6 = 4 + 4,8 = 8,8 €."
    },
    {
        id: "sa_011",
        bloc: "sentit_algebraic",
        tipus: "competencial",
        pregunta: "El lloguer d’una sala inclou una quota fixa de 25 € més 6 € per cada assistent. Quin preu es paga si hi participen 10 persones?",
        opcions: [
            { id: "a", text: "75 €", correcta: false },
            { id: "b", text: "85 €", correcta: true },
            { id: "c", text: "90 €", correcta: false },
            { id: "d", text: "95 €", correcta: false }
        ],
        explicacio: "Cost = 25 + 6 × 10 = 25 + 60 = 85 €."
    },
    {
        id: "sa_012",
        bloc: "sentit_algebraic",
        tipus: "competencial",
        pregunta: "Una impressora 3D tarda 3 minuts de preparació i 45 segons per cada capa. Quant trigarà a imprimir una peça de 8 capes?",
        opcions: [
            { id: "a", text: "6 minuts", correcta: false },
            { id: "b", text: "7 minuts i 30 segons", correcta: false },
            { id: "c", text: "9 minuts", correcta: true },
            { id: "d", text: "11 minuts", correcta: false }
        ],
        explicacio: "8 capes × 45 s = 360 s. Afegim 180 s de preparació: 540 s = 9 minuts."
    },
    {
        id: "sa_013",
        bloc: "sentit_algebraic",
        tipus: "competencial",
        pregunta: "Una cooperativa digitalitza plànols per 18 € de quota inicial i 2 € per plànol. Quin import es paga per digitalitzar 9 plànols?",
        opcions: [
            { id: "a", text: "32 €", correcta: false },
            { id: "b", text: "34 €", correcta: false },
            { id: "c", text: "36 €", correcta: true },
            { id: "d", text: "40 €", correcta: false }
        ],
        explicacio: "Cost = 18 + 2 × 9 = 18 + 18 = 36 €."
    },
    {
        id: "sa_014",
        bloc: "sentit_algebraic",
        tipus: "competencial",
        pregunta: "Per a un taller STEM es compren kits que costen 7,5 € cadascun i s’hi afegeixen 12 € de transport. Quant es pagarà per 5 kits?",
        opcions: [
            { id: "a", text: "42,5 €", correcta: false },
            { id: "b", text: "49,5 €", correcta: true },
            { id: "c", text: "52,5 €", correcta: false },
            { id: "d", text: "57,0 €", correcta: false }
        ],
        explicacio: "7,5 × 5 = 37,5; 37,5 + 12 = 49,5 €."
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
    },
    {
        id: "st_005",
        bloc: "sentit_estocastic",
        tipus: "directa",
        pregunta: "Quina és la mitjana dels valors 6, 8, 10 i 6?",
        opcions: [
            { id: "a", text: "6,5", correcta: false },
            { id: "b", text: "7,5", correcta: true },
            { id: "c", text: "8,0", correcta: false },
            { id: "d", text: "9,0", correcta: false }
        ],
        explicacio: "La suma és 30 i 30 ÷ 4 = 7,5."
    },
    {
        id: "st_006",
        bloc: "sentit_estocastic",
        tipus: "competencial",
        pregunta: "En un laboratori STEAM es registren els temps de resposta (en segons) de cinc sensors: 12, 15, 18, 15 i 20. Quin és el valor de la mediana?",
        opcions: [
            { id: "a", text: "12 s", correcta: false },
            { id: "b", text: "15 s", correcta: true },
            { id: "c", text: "18 s", correcta: false },
            { id: "d", text: "20 s", correcta: false }
        ],
        explicacio: "Ordenant (12, 15, 15, 18, 20), el valor central és 15 segons."
    },
    {
        id: "st_007",
        bloc: "sentit_estocastic",
        tipus: "directa",
        pregunta: "En una bossa hi ha 5 boles verdes i 3 de vermelles. Quina és la probabilitat d’extreure una bola verda a l’atzar?",
        opcions: [
            { id: "a", text: "3/8", correcta: false },
            { id: "b", text: "5/8", correcta: true },
            { id: "c", text: "1/2", correcta: false },
            { id: "d", text: "5/3", correcta: false }
        ],
        explicacio: "Hi ha 8 boles en total i 5 són verdes: probabilitat 5/8."
    },
    {
        id: "st_008",
        bloc: "sentit_estocastic",
        tipus: "competencial",
        pregunta: "Un gràfic circular indica que el 35% de l’alumnat va a l’escola en transport públic. Si s’han enquestat 200 estudiants, quants utilitzen el transport públic?",
        opcions: [
            { id: "a", text: "60", correcta: false },
            { id: "b", text: "65", correcta: false },
            { id: "c", text: "70", correcta: true },
            { id: "d", text: "80", correcta: false }
        ],
        explicacio: "El 35% de 200 és 0,35 × 200 = 70 estudiants."
    },
    {
        id: "st_009",
        bloc: "sentit_estocastic",
        tipus: "directa",
        pregunta: "Quin és el rang de les dades 12, 7, 15 i 10?",
        opcions: [
            { id: "a", text: "5", correcta: false },
            { id: "b", text: "7", correcta: false },
            { id: "c", text: "8", correcta: true },
            { id: "d", text: "12", correcta: false }
        ],
        explicacio: "Rang = valor màxim − mínim = 15 − 7 = 8."
    },
    {
        id: "st_010",
        bloc: "sentit_estocastic",
        tipus: "competencial",
        pregunta: "En una plataforma educativa, les puntuacions d’un qüestionari són 8, 6, 9, 7 i 10. Quin percentatge d’alumnes ha obtingut una nota superior a 8?",
        opcions: [
            { id: "a", text: "20%", correcta: false },
            { id: "b", text: "40%", correcta: true },
            { id: "c", text: "60%", correcta: false },
            { id: "d", text: "80%", correcta: false }
        ],
        explicacio: "Les notes superiors a 8 són 9 i 10: 2 de 5 alumnes, és a dir, 40%."
    },
    {
        id: "st_011",
        bloc: "sentit_estocastic",
        tipus: "directa",
        pregunta: "Quina és la probabilitat d’obtenir un nombre parell en llançar un dau equilibrat de sis cares?",
        opcions: [
            { id: "a", text: "1/6", correcta: false },
            { id: "b", text: "1/3", correcta: false },
            { id: "c", text: "1/2", correcta: true },
            { id: "d", text: "2/3", correcta: false }
        ],
        explicacio: "Hi ha tres resultats parells (2, 4, 6) de sis possibles: 3/6 = 1/2."
    },
    {
        id: "st_012",
        bloc: "sentit_estocastic",
        tipus: "competencial",
        pregunta: "Una enquesta sobre temps d’estudi mostra (en minuts): 45, 60, 30, 45 i 90. Quin és el temps mitjà dedicat per alumne?",
        opcions: [
            { id: "a", text: "48 minuts", correcta: false },
            { id: "b", text: "54 minuts", correcta: true },
            { id: "c", text: "60 minuts", correcta: false },
            { id: "d", text: "72 minuts", correcta: false }
        ],
        explicacio: "La suma és 270 minuts i 270 ÷ 5 = 54 minuts."
    },
    {
        id: "st_013",
        bloc: "sentit_estocastic",
        tipus: "directa",
        pregunta: "Quina és la moda del conjunt de dades 4, 5, 7, 5, 9, 4, 5?",
        opcions: [
            { id: "a", text: "4", correcta: false },
            { id: "b", text: "5", correcta: true },
            { id: "c", text: "7", correcta: false },
            { id: "d", text: "9", correcta: false }
        ],
        explicacio: "El valor que més es repeteix és 5, que apareix tres vegades."
    }
];

console.log(`Total de preguntes carregades: ${questionBank.length}`);
console.log(`- Bloc 'sentit_numeric': ${questionBank.filter(q => q.bloc === 'sentit_numeric').length} preguntes.`);
console.log(`- Bloc 'sentit_operacions': ${questionBank.filter(q => q.bloc === 'sentit_operacions').length} preguntes.`);
console.log(`- Bloc 'sentit_mesura': ${questionBank.filter(q => q.bloc === 'sentit_mesura').length} preguntes.`);
console.log(`- Bloc 'sentit_espacial': ${questionBank.filter(q => q.bloc === 'sentit_espacial').length} preguntes.`);
console.log(`- Bloc 'sentit_algebraic': ${questionBank.filter(q => q.bloc === 'sentit_algebraic').length} preguntes.`);
console.log(`- Bloc 'sentit_estocastic': ${questionBank.filter(q => q.bloc === 'sentit_estocastic').length} preguntes.`);
