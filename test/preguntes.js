// ========================================
// BANCO DE PREGUNTES PROCEDIMENTALS - 6è PRIMÀRIA / 1r ESO
// ========================================
//
// Basat en els continguts oficials de Matemàtiques de 6è de Primària
// Enfocament: Identificació de procediments i estratègies
// Cada opció representa un procediment diferent
//
// Distribució:
// - BLOC 1: CÀLCUL (20 preguntes)
// - BLOC 2: PROBLEMES (20 preguntes)
// - BLOC 3: SENTIT NUMÈRIC (15 preguntes)
// - BLOC 4: ESPAI I MESURA (10 preguntes)
// - BLOC 5: SENTIT ESTOCÀSTIC (10 preguntes)

const questionBank = [

    // ========================================
    // BLOC 1: CÀLCUL (20 preguntes)
    // ========================================
    {
        id: "calc_001",
        bloc: "calcul",
        pregunta: "Quin és el resultat de l'operació (-5) - (-8)?",
        opcions: [
            { id: "a", text: "-13", correcta: false },
            { id: "b", text: "3", correcta: true },
            { id: "c", text: "-3", correcta: false },
            { id: "d", text: "13", correcta: false }
        ],
        explicacio: "Restar un nombre negatiu és el mateix que sumar el seu valor absolut: -5 + 8 = 3."
    },
    {
        id: "calc_002",
        bloc: "calcul",
        pregunta: "Resol l'operació combinada: 10 + 4 * (-2)",
        opcions: [
            { id: "a", text: "-28", correcta: false },
            { id: "b", text: "2", correcta: true },
            { id: "c", text: "12", correcta: false },
            { id: "d", text: "-12", correcta: false }
        ],
        explicacio: "Primer es fa la multiplicació: 4 * (-2) = -8. Després la suma: 10 + (-8) = 2."
    },
    {
        id: "calc_003",
        bloc: "calcul",
        pregunta: "Calcula: 3/5 + 1/5",
        opcions: [
            { id: "a", text: "4/10", correcta: false },
            { id: "b", text: "4/5", correcta: true },
            { id: "c", text: "3/25", correcta: false },
            { id: "d", text: "5/4", correcta: false }
        ],
        explicacio: "Quan les fraccions tenen el mateix denominador, se sumen els numeradors i es manté el denominador."
    },
    {
        id: "calc_004",
        bloc: "calcul",
        pregunta: "Quin és el resultat de 20 - 5 * 3 + 1?",
        opcions: [
            { id: "a", text: "46", correcta: false },
            { id: "b", text: "6", correcta: true },
            { id: "c", text: "4", correcta: false },
            { id: "d", text: "16", correcta: false }
        ],
        explicacio: "Primer la multiplicació: 5 * 3 = 15. Després d'esquerra a dreta: 20 - 15 = 5, i 5 + 1 = 6."
    },
    {
        id: "calc_005",
        bloc: "calcul",
        pregunta: "Calcula: (-4) * (-6)",
        opcions: [
            { id: "a", text: "-24", correcta: false },
            { id: "b", text: "24", correcta: true },
            { id: "c", text: "-10", correcta: false },
            { id: "d", text: "10", correcta: false }
        ],
        explicacio: "Menys per menys és més. 4 * 6 = 24."
    },
    {
        id: "calc_006",
        bloc: "calcul",
        pregunta: "Quin és el resultat de 1/2 * 3/4?",
        opcions: [
            { id: "a", text: "4/6", correcta: false },
            { id: "b", text: "3/8", correcta: true },
            { id: "c", text: "4/8", correcta: false },
            { id: "d", text: "3/6", correcta: false }
        ],
        explicacio: "Per multiplicar fraccions, es multiplica numerador per numerador i denominador per denominador: (1*3)/(2*4) = 3/8."
    },
    {
        id: "calc_007",
        bloc: "calcul",
        pregunta: "Resol: 18 / (-3) + 2",
        opcions: [
            { id: "a", text: "-4", correcta: true },
            { id: "b", text: "-8", correcta: false },
            { id: "c", text: "4", correcta: false },
            { id: "d", text: "8", correcta: false }
        ],
        explicacio: "Primer la divisió: 18 / (-3) = -6. Després la suma: -6 + 2 = -4."
    },
    {
        id: "calc_008",
        bloc: "calcul",
        pregunta: "Calcula el 50% de 120.",
        opcions: [
            { id: "a", text: "120", correcta: false },
            { id: "b", text: "60", correcta: true },
            { id: "c", text: "240", correcta: false },
            { id: "d", text: "50", correcta: false }
        ],
        explicacio: "El 50% és la meitat: 120 / 2 = 60."
    },
    {
        id: "calc_009",
        bloc: "calcul",
        pregunta: "Quin és el resultat de 5²?",
        opcions: [
            { id: "a", text: "10", correcta: false },
            { id: "b", text: "25", correcta: true },
            { id: "c", text: "7", correcta: false },
            { id: "d", text: "52", correcta: false }
        ],
        explicacio: "5² significa 5 * 5 = 25."
    },
    {
        id: "calc_010",
        bloc: "calcul",
        pregunta: "Resol: 1/3 : 2/5",
        opcions: [
            { id: "a", text: "2/15", correcta: false },
            { id: "b", text: "5/6", correcta: true },
            { id: "c", text: "6/5", correcta: false },
            { id: "d", text: "3/10", correcta: false }
        ],
        explicacio: "Per dividir fraccions, es multiplica la primera pel la inversa de la segona, o en creu: (1*5)/(3*2) = 5/6."
    },
    {
        id: "calc_011",
        bloc: "calcul",
        pregunta: "Calcula: 2,5 + 3,75",
        opcions: [
            { id: "a", text: "5,25", correcta: false },
            { id: "b", text: "6,25", correcta: true },
            { id: "c", text: "5,80", correcta: false },
            { id: "d", text: "6,50", correcta: false }
        ],
        explicacio: "Es sumen com nombres decimals: 2.50 + 3.75 = 6.25."
    },
    {
        id: "calc_012",
        bloc: "calcul",
        pregunta: "Quin és el resultat de (-2)³?",
        opcions: [
            { id: "a", text: "-6", correcta: false },
            { id: "b", text: "-8", correcta: true },
            { id: "c", text: "8", correcta: false },
            { id: "d", text: "6", correcta: false }
        ],
        explicacio: "(-2)³ = (-2) * (-2) * (-2) = 4 * (-2) = -8."
    },
    {
        id: "calc_013",
        bloc: "calcul",
        pregunta: "Calcula l'arrel quadrada de 49 (√49).",
        opcions: [
            { id: "a", text: "4,9", correcta: false },
            { id: "b", text: "7", correcta: true },
            { id: "c", text: "24,5", correcta: false },
            { id: "d", text: "9", correcta: false }
        ],
        explicacio: "L'arrel quadrada d'un nombre és aquell nombre que, multiplicat per si mateix, dóna el nombre original. 7 * 7 = 49."
    },
    {
        id: "calc_014",
        bloc: "calcul",
        pregunta: "Resol: 5 * (4 - 2) + 1",
        opcions: [
            { id: "a", text: "11", correcta: true },
            { id: "b", text: "19", correcta: false },
            { id: "c", text: "9", correcta: false },
            { id: "d", text: "10", correcta: false }
        ],
        explicacio: "Primer el parèntesi: 4 - 2 = 2. Després la multiplicació: 5 * 2 = 10. Finalment la suma: 10 + 1 = 11."
    },
    {
        id: "calc_015",
        bloc: "calcul",
        pregunta: "Calcula: 4/3 - 1/3",
        opcions: [
            { id: "a", text: "3/0", correcta: false },
            { id: "b", text: "1", correcta: true },
            { id: "c", text: "3/3", correcta: false },
            { id: "d", text: "3/6", correcta: false }
        ],
        explicacio: "Quan les fraccions tenen el mateix denominador, es resten els numeradors i es manté el denominador: 3/3 = 1."
    },
    {
        id: "calc_016",
        bloc: "calcul",
        pregunta: "Quin és el resultat de 7 * 1,5?",
        opcions: [
            { id: "a", text: "10,5", correcta: true },
            { id: "b", text: "8,5", correcta: false },
            { id: "c", text: "7,5", correcta: false },
            { id: "d", text: "105", correcta: false }
        ],
        explicacio: "7 * 1 = 7, i 7 * 0.5 = 3.5. Sumant: 7 + 3.5 = 10.5."
    },
    {
        id: "calc_017",
        bloc: "calcul",
        pregunta: "Resol: (-30) / (-5)",
        opcions: [
            { id: "a", text: "6", correcta: true },
            { id: "b", text: "-6", correcta: false },
            { id: "c", text: "5", correcta: false },
            { id: "d", text: "-5", correcta: false }
        ],
        explicacio: "Menys dividit per menys és més. 30 / 5 = 6."
    },
    {
        id: "calc_018",
        bloc: "calcul",
        pregunta: "Calcula el 10% de 200.",
        opcions: [
            { id: "a", text: "2", correcta: false },
            { id: "b", text: "20", correcta: true },
            { id: "c", text: "10", correcta: false },
            { id: "d", text: "2000", correcta: false }
        ],
        explicacio: "El 10% de 200 és (10/100) * 200 = 0.10 * 200 = 20."
    },
    {
        id: "calc_019",
        bloc: "calcul",
        pregunta: "Quin és el resultat de 2/3 de 18?",
        opcions: [
            { id: "a", text: "6", correcta: false },
            { id: "b", text: "12", correcta: true },
            { id: "c", text: "18", correcta: false },
            { id: "d", text: "27", correcta: false }
        ],
        explicacio: "Per calcular una fracció d'un nombre, es divideix el nombre pel denominador i es multiplica pel numerador: (18 / 3) * 2 = 6 * 2 = 12."
    },
    {
        id: "calc_020",
        bloc: "calcul",
        pregunta: "Resol: -5 + 12 - 3",
        opcions: [
            { id: "a", text: "-10", correcta: false },
            { id: "b", text: "4", correcta: true },
            { id: "c", text: "14", correcta: false },
            { id: "d", text: "-4", correcta: false }
        ],
        explicacio: "Es fa d'esquerra a dreta: -5 + 12 = 7. Després, 7 - 3 = 4."
    },

    // ========================================
    // BLOC 2: PROBLEMES (20 preguntes)
    // ========================================
    {
        id: "prob_001",
        bloc: "problemes",
        pregunta: "L'Anna té 50€ al compte. Li cobren un rebut de 75€ i rep una paga de 30€. Quin és el seu saldo final?",
        opcions: [
            { id: "a", text: "155€", correcta: false },
            { id: "b", text: "5€", correcta: true },
            { id: "c", text: "-5€", correcta: false },
            { id: "d", text: "95€", correcta: false }
        ],
        explicacio: "50 - 75 + 30 = -25 + 30 = 5€."
    },
    {
        id: "prob_002",
        bloc: "problemes",
        pregunta: "Una samarreta que valia 40€ té un 25% de descompte. Quin és el seu preu final?",
        opcions: [
            { id: "a", text: "15€", correcta: false },
            { id: "b", text: "30€", correcta: true },
            { id: "c", text: "10€", correcta: false },
            { id: "d", text: "35€", correcta: false }
        ],
        explicacio: "El 25% de 40€ és (25/100) * 40 = 10€. El preu final és 40€ - 10€ = 30€."
    },
    {
        id: "prob_003",
        bloc: "problemes",
        pregunta: "Si en Joan llegeix 15 pàgines cada dia, quantes pàgines haurà llegit en dues setmanes?",
        opcions: [
            { id: "a", text: "105 pàgines", correcta: false },
            { id: "b", text: "210 pàgines", correcta: true },
            { id: "c", text: "30 pàgines", correcta: false },
            { id: "d", text: "150 pàgines", correcta: false }
        ],
        explicacio: "Dues setmanes són 14 dies. 15 pàgines/dia * 14 dies = 210 pàgines."
    },
    {
        id: "prob_004",
        bloc: "problemes",
        pregunta: "Un avió vola a 8.000 metres d'altura i baixa 2.500 metres. A quina altura es troba ara?",
        opcions: [
            { id: "a", text: "10.500 metres", correcta: false },
            { id: "b", text: "5.500 metres", correcta: true },
            { id: "c", text: "6.500 metres", correcta: false },
            { id: "d", text: "2.500 metres", correcta: false }
        ],
        explicacio: "8.000 - 2.500 = 5.500 metres."
    },
    {
        id: "prob_005",
        bloc: "problemes",
        pregunta: "En una classe de 30 alumnes, 2/5 parts són nois. Quantes noies hi ha a la classe?",
        opcions: [
            { id: "a", text: "12 noies", correcta: false },
            { id: "b", text: "18 noies", correcta: true },
            { id: "c", text: "10 noies", correcta: false },
            { id: "d", text: "15 noies", correcta: false }
        ],
        explicacio: "Nois: (2/5) * 30 = 12 nois. Total alumnes - nois = noies: 30 - 12 = 18 noies."
    },
    {
        id: "prob_006",
        bloc: "problemes",
        pregunta: "Un rectangle fa 10 cm de llargada i 5 cm d'amplada. Quina és la seva àrea?",
        opcions: [
            { id: "a", text: "30 cm²", correcta: false },
            { id: "b", text: "50 cm²", correcta: true },
            { id: "c", text: "15 cm²", correcta: false },
            { id: "d", text: "100 cm²", correcta: false }
        ],
        explicacio: "L'àrea d'un rectangle és llargada * amplada: 10 cm * 5 cm = 50 cm²."
    },
    {
        id: "prob_007",
        bloc: "problemes",
        pregunta: "Si 3 llibretes costen 6€, quant costaran 5 llibretes?",
        opcions: [
            { id: "a", text: "10€", correcta: true },
            { id: "b", text: "9€", correcta: false },
            { id: "c", text: "11€", correcta: false },
            { id: "d", text: "15€", correcta: false }
        ],
        explicacio: "Una llibreta costa 6€ / 3 = 2€. Aleshores, 5 llibretes costaran 5 * 2€ = 10€."
    },
    {
        id: "prob_008",
        bloc: "problemes",
        pregunta: "La Maria té el triple d'edat que el seu germà Pere. Si en Pere té 4 anys, quants anys tenen entre tots dos?",
        opcions: [
            { id: "a", text: "12 anys", correcta: false },
            { id: "b", text: "16 anys", correcta: true },
            { id: "c", text: "8 anys", correcta: false },
            { id: "d", text: "7 anys", correcta: false }
        ],
        explicacio: "Maria té 3 * 4 = 12 anys. Entre tots dos tenen 12 + 4 = 16 anys."
    },
    {
        id: "prob_009",
        bloc: "problemes",
        pregunta: "Un dipòsit conté 600 litres d'aigua i perd 5 litres cada minut. Quanta aigua quedarà després de mitja hora?",
        opcions: [
            { id: "a", text: "570 litres", correcta: false },
            { id: "b", text: "450 litres", correcta: true },
            { id: "c", text: "300 litres", correcta: false },
            { id: "d", text: "150 litres", correcta: false }
        ],
        explicacio: "Mitja hora són 30 minuts. Pèrdua total: 5 litres/min * 30 min = 150 litres. Aigua restant: 600 - 150 = 450 litres."
    },
    {
        id: "prob_010",
        bloc: "problemes",
        pregunta: "En una cursa, en Pau ha recorregut 3/4 del total. Si la cursa és de 20 km, quants km li falten per arribar?",
        opcions: [
            { id: "a", text: "15 km", correcta: false },
            { id: "b", text: "5 km", correcta: true },
            { id: "c", text: "10 km", correcta: false },
            { id: "d", text: "25 km", correcta: false }
        ],
        explicacio: "Ha recorregut (3/4) * 20 km = 15 km. Li falten 20 km - 15 km = 5 km."
    },
    {
        id: "prob_011",
        bloc: "problemes",
        pregunta: "La temperatura a la matinada era de -5°C. Al migdia, el termòmetre marcava 12°C. Quants graus ha pujat la temperatura?",
        opcions: [
            { id: "a", text: "7°C", correcta: false },
            { id: "b", text: "17°C", correcta: true },
            { id: "c", text: "-17°C", correcta: false },
            { id: "d", text: "12°C", correcta: false }
        ],
        explicacio: "La pujada de temperatura és la diferència: 12°C - (-5°C) = 12°C + 5°C = 17°C."
    },
    {
        id: "prob_012",
        bloc: "problemes",
        pregunta: "Un pastís es divideix en 8 trossos iguals. Si ens mengem 3 trossos, quina fracció del pastís queda?",
        opcions: [
            { id: "a", text: "3/8", correcta: false },
            { id: "b", text: "5/8", correcta: true },
            { id: "c", text: "8/5", correcta: false },
            { id: "d", text: "8/3", correcta: false }
        ],
        explicacio: "Si hi ha 8 trossos i se'n mengen 3, queden 8 - 3 = 5 trossos. La fracció restant és 5/8."
    },
    {
        id: "prob_013",
        bloc: "problemes",
        pregunta: "Si un tren viatja a 90 km/h, quina distància recorrerà en 3 hores?",
        opcions: [
            { id: "a", text: "30 km", correcta: false },
            { id: "b", text: "270 km", correcta: true },
            { id: "c", text: "180 km", correcta: false },
            { id: "d", text: "93 km", correcta: false }
        ],
        explicacio: "Distància = velocitat * temps: 90 km/h * 3 h = 270 km."
    },
    {
        id: "prob_014",
        bloc: "problemes",
        pregunta: "En una caixa hi ha 12 pomes, 15 taronges i 13 plàtans. Quina és la fracció de taronges respecte al total de fruites?",
        opcions: [
            { id: "a", text: "15/25", correcta: false },
            { id: "b", text: "15/40", correcta: true },
            { id: "c", text: "15/12", correcta: false },
            { id: "d", text: "40/15", correcta: false }
        ],
        explicacio: "Total de fruites = 12 + 15 + 13 = 40. Fracció de taronges = 15/40."
    },
    {
        id: "prob_015",
        bloc: "problemes",
        pregunta: "Un quadrat té un perímetre de 24 cm. Quina és la seva àrea?",
        opcions: [
            { id: "a", text: "36 cm²", correcta: true },
            { id: "b", text: "24 cm²", correcta: false },
            { id: "c", text: "6 cm²", correcta: false },
            { id: "d", text: "48 cm²", correcta: false }
        ],
        explicacio: "Si el perímetre és 24 cm i un quadrat té 4 costats iguals, cada costat mesura 24 / 4 = 6 cm. L'àrea és costat * costat = 6 cm * 6 cm = 36 cm²."
    },
    {
        id: "prob_016",
        bloc: "problemes",
        pregunta: "He comprat un llibre per 18€ i una llibreta per 2€. Si pago amb un bitllet de 50€, quants diners em tornaran?",
        opcions: [
            { id: "a", text: "20€", correcta: false },
            { id: "b", text: "30€", correcta: true },
            { id: "c", text: "32€", correcta: false },
            { id: "d", text: "28€", correcta: false }
        ],
        explicacio: "Cost total: 18€ + 2€ = 20€. Canvi: 50€ - 20€ = 30€."
    },
    {
        id: "prob_017",
        bloc: "problemes",
        pregunta: "Un article costa 200€ i el seu preu augmenta un 10%. Quin és el nou preu?",
        opcions: [
            { id: "a", text: "210€", correcta: false },
            { id: "b", text: "220€", correcta: true },
            { id: "c", text: "180€", correcta: false },
            { id: "d", text: "202€", correcta: false }
        ],
        explicacio: "El 10% de 200€ és (10/100) * 200 = 20€. El nou preu és 200€ + 20€ = 220€."
    },
    {
        id: "prob_018",
        bloc: "problemes",
        pregunta: "En una sala de cinema hi ha 20 files amb 15 seients cadascuna. Quants seients hi ha en total?",
        opcions: [
            { id: "a", text: "35 seients", correcta: false },
            { id: "b", text: "300 seients", correcta: true },
            { id: "c", text: "200 seients", correcta: false },
            { id: "d", text: "150 seients", correcta: false }
        ],
        explicacio: "Nombre total de seients = files * seients per fila: 20 * 15 = 300 seients."
    },
    {
        id: "prob_019",
        bloc: "problemes",
        pregunta: "Si tens 6 ampolles de 1,5 litres cadascuna, quants litres tens en total?",
        opcions: [
            { id: "a", text: "7,5 litres", correcta: false },
            { id: "b", text: "9 litres", correcta: true },
            { id: "c", text: "6 litres", correcta: false },
            { id: "d", text: "12 litres", correcta: false }
        ],
        explicacio: "Litres totals = nombre d'ampolles * capacitat per ampolla: 6 * 1,5 = 9 litres."
    },
    {
        id: "prob_020",
        bloc: "problemes",
        pregunta: "Una excursió comença a les 9:00 del matí i acaba a les 16:30 de la tarda. Quantes hores i minuts ha durat?",
        opcions: [
            { id: "a", text: "6 hores i 30 minuts", correcta: false },
            { id: "b", text: "7 hores i 30 minuts", correcta: true },
            { id: "c", text: "7 hores", correcta: false },
            { id: "d", text: "8 hores", correcta: false }
        ],
        explicacio: "De 9:00 a 16:00 hi ha 7 hores. De 16:00 a 16:30 hi ha 30 minuts. Total: 7 hores i 30 minuts."
    },
    // ========================================
// BLOC 3: SENTIT NUMÈRIC (15 preguntes)
// ========================================
{
    id: "num_001",
    bloc: "sentit_numeric",
    pregunta: "Per trobar el Mínim Comú Múltiple (MCM) de dos nombres, quin procediment fas?",
    opcions: [
        { id: "a", text: "Descompondre i agafar només els factors comuns amb l'exponent més petit.", correcta: false },
        { id: "b", text: "Descompondre i agafar tots els factors (comuns i no comuns) amb l'exponent més gran.", correcta: true },
        { id: "c", text: "Multiplicar els dos nombres entre ells.", correcta: false },
        { id: "d", text: "Buscar els divisors comuns i agafar el més gran.", correcta: false }
    ],
    explicacio: "Per al MCM, es descompon i s'agafen 'tots els actors, amb el barret més alt'."
},
{
    id: "num_002",
    bloc: "sentit_numeric",
    pregunta: "Per saber si el número 123 és divisible per 3, quin criteri de divisibilitat apliques?",
    opcions: [
        { id: "a", text: "Mirar si l'última xifra és 3.", correcta: false },
        { id: "b", text: "Sumar les seves xifres (1+2+3) i comprovar si el resultat és múltiple de 3.", correcta: true },
        { id: "c", text: "Comprovar si és un nombre parell.", correcta: false },
        { id: "d", text: "Dividir el nombre per 2.", correcta: false }
    ],
    explicacio: "Un nombre es pot dividir per 3 si la suma de les seves xifres també es pot dividir per 3."
},
{
    id: "num_003",
    bloc: "sentit_numeric",
    pregunta: "Què és un nombre primer?",
    opcions: [
        { id: "a", text: "Un nombre que és senar.", correcta: false },
        { id: "b", text: "Un nombre que només es pot dividir per 1 i per si mateix.", correcta: true },
        { id: "c", text: "Qualsevol nombre que no sigui parell.", correcta: false },
        { id: "d", text: "Un nombre que acaba en 1, 3, 7 o 9.", correcta: false }
    ],
    explicacio: "Els nombres primers només tenen dos divisors: l'1 i ells mateixos. Per exemple, el 7 o el 13."
},
{
    id: "num_004",
    bloc: "sentit_numeric",
    pregunta: "Per sumar les fraccions 1/2 + 1/3, quin és el primer pas necessari?",
    opcions: [
        { id: "a", text: "Sumar els numeradors i els denominadors per separat.", correcta: false },
        { id: "b", text: "Trobar un denominador comú per a les dues fraccions.", correcta: true },
        { id: "c", text: "Multiplicar les dues fraccions.", correcta: false },
        { id: "d", text: "Convertir les fraccions a nombres decimals.", correcta: false }
    ],
    explicacio: "No es poden sumar fraccions si no tenen el mateix denominador. Primer cal trobar el MCM dels denominadors."
},
{
    id: "num_005",
    bloc: "sentit_numeric",
    pregunta: "Què vol dir calcular 5³?",
    opcions: [
        { id: "a", text: "Multiplicar 5 per 3.", correcta: false },
        { id: "b", text: "Multiplicar 5 per si mateix 3 vegades (5 × 5 × 5).", correcta: true },
        { id: "c", text: "Sumar 5 tres vegades (5 + 5 + 5).", correcta: false },
        { id: "d", text: "Dividir 5 entre 3.", correcta: false }
    ],
    explicacio: "Una potència significa multiplicar la base (5) tantes vegades com diu l'exponent (3)."
},
{
    id: "num_006",
    bloc: "sentit_numeric",
    pregunta: "Què és el Màxim Comú Divisor (MCD) de dos nombres?",
    opcions: [
        { id: "a", text: "El nombre més gran que pot dividir els dos nombres.", correcta: true },
        { id: "b", text: "El nombre més petit que es pot dividir pels dos nombres.", correcta: false },
        { id: "c", text: "La suma dels dos nombres.", correcta: false },
        { id: "d", text: "La descomposició en factors primers.", correcta: false }
    ],
    explicacio: "El MCD és el divisor més gran que tenen en comú dos o més nombres."
},
{
    id: "num_007",
    bloc: "sentit_numeric",
    pregunta: "Quina operació té prioritat en la jerarquia d'operacions?",
    opcions: [
        { id: "a", text: "Les sumes i les restes.", correcta: false },
        { id: "b", text: "Les potències i les arrels.", correcta: true },
        { id: "c", text: "Les operacions sempre es fan d'esquerra a dreta.", correcta: false },
        { id: "d", text: "Les multiplicacions i les divisions.", correcta: false }
    ],
    explicacio: "L'ordre és: 1r Parèntesis, 2n Potències i Arrels, 3r Multiplicacions i Divisions, 4t Sumes i Restes."
},
{
    id: "num_008",
    bloc: "sentit_numeric",
    pregunta: "Com es tradueix 'un nombre desconegut' a l'àlgebra?",
    opcions: [
        { id: "a", text: "Amb un interrogant (?).", correcta: false },
        { id: "b", text: "Amb una lletra, normalment la 'x'.", correcta: true },
        { id: "c", text: "Amb el número zero (0).", correcta: false },
        { id: "d", text: "Amb una paraula com 'nombre'.", correcta: false }
    ],
    explicacio: "En àlgebra, les lletres s'utilitzen per representar valors que no coneixem."
},
{
    id: "num_009",
    bloc: "sentit_numeric",
    pregunta: "Què vol dir l'arrel quadrada d'un nombre (per exemple, √25)?",
    opcions: [
        { id: "a", text: "Dividir el nombre per 2.", correcta: false },
        { id: "b", text: "Trobar un nombre que, multiplicat per si mateix, doni 25.", correcta: true },
        { id: "c", text: "Multiplicar el nombre per 2.", correcta: false },
        { id: "d", text: "Restar 2 al nombre.", correcta: false }
    ],
    explicacio: "L'arrel quadrada és l'operació contrària a elevar al quadrat. 5 × 5 = 25, per tant √25 = 5."
},
{
    id: "num_010",
    bloc: "sentit_numeric",
    pregunta: "Per aplicar un augment del 20% a un preu, quin és el procediment?",
    opcions: [
        { id: "a", text: "Restar 20 al preu.", correcta: false },
        { id: "b", text: "Calcular el 20% del preu i sumar-lo al preu original.", correcta: true },
        { id: "c", text: "Multiplicar el preu per 20.", correcta: false },
        { id: "d", text: "Dividir el preu per 20.", correcta: false }
    ],
    explicacio: "Un augment de preu implica sumar una part (el percentatge) al preu que ja teníem."
},
{
    id: "num_011",
    bloc: "sentit_numeric",
    pregunta: "Com es representa en una sola potència l'operació 5² × 5⁴?",
    opcions: [
        { id: "a", text: "5⁸", correcta: false },
        { id: "b", text: "5⁶", correcta: true },
        { id: "c", text: "25⁶", correcta: false },
        { id: "d", text: "5²", correcta: false }
    ],
    explicacio: "Per multiplicar potències amb la mateixa base, es deixa la base i se sumen els exponents (2+4=6)."
},
{
    id: "num_012",
    bloc: "sentit_numeric",
    pregunta: "Què significa que dos nombres són 'proporcionals'?",
    opcions: [
        { id: "a", text: "Que són nombres parells.", correcta: false },
        { id: "b", text: "Que la seva divisió dóna sempre el mateix resultat (constant de proporcionalitat).", correcta: true },
        { id: "c", text: "Que són nombres primers.", correcta: false },
        { id: "d", text: "Que sumen el mateix.", correcta: false }
    ],
    explicacio: "La proporcionalitat indica que dues magnituds pugen o baixen al mateix ritme."
},
{
    id: "num_013",
    bloc: "sentit_numeric",
    pregunta: "Quin criteri de divisibilitat s'utilitza per saber si un nombre es pot dividir per 5?",
    opcions: [
        { id: "a", text: "Si la suma de les seves xifres és 5.", correcta: false },
        { id: "b", text: "Si acaba en 0 o en 5.", correcta: true },
        { id: "c", text: "Si és un nombre senar.", correcta: false },
        { id: "d", text: "Si és més gran que 5.", correcta: false }
    ],
    explicacio: "Tots els nombres divisibles per 5 acaben en 0 o 5."
},
{
    id: "num_014",
    bloc: "sentit_numeric",
    pregunta: "Què representa el denominador en una fracció?",
    opcions: [
        { id: "a", text: "Les parts que agafem.", correcta: false },
        { id: "b", text: "El nombre total de parts iguals en què es divideix la unitat.", correcta: true },
        { id: "c", text: "El resultat de la divisió.", correcta: false },
        { id: "d", text: "El nombre més gran de la fracció.", correcta: false }
    ],
    explicacio: "El denominador (el de baix) diu en quants trossos tallem la 'pizza'."
},
{
    id: "num_015",
    bloc: "sentit_numeric",
    pregunta: "Quin és el procediment correcte per comparar dos nombres enters negatius, com -8 i -3?",
    opcions: [
        { id: "a", text: "El que sembla més gran (8) és el més gran.", correcta: false },
        { id: "b", text: "El que està més a prop del zero a la recta numèrica (-3) és el més gran.", correcta: true },
        { id: "c", text: "Sempre és més gran el que està més a l'esquerra.", correcta: false },
        { id: "d", text: "Tots els nombres negatius són iguals.", correcta: false }
    ],
    explicacio: "En els negatius, és més gran el que menys 'deu', és a dir, el que està més a prop del 0."
},
    // ========================================
// BLOC 4: ESPAI I MESURA (10 preguntes)
// ========================================
{
    id: "esp_mes_001",
    bloc: "espai_mesura",
    pregunta: "Quina característica defineix dues rectes com a 'perpendiculars'?",
    opcions: [
        { id: "a", text: "Que no es tallen mai.", correcta: false },
        { id: "b", text: "Que es tallen formant quatre angles rectes (de 90°).", correcta: true },
        { id: "c", text: "Que tenen la mateixa longitud.", correcta: false },
        { id: "d", text: "Que pertanyen al mateix pla.", correcta: false }
    ],
    explicacio: "Les rectes perpendiculars són les que formen angles de 90° en creuar-se."
},
{
    id: "esp_mes_002",
    bloc: "espai_mesura",
    pregunta: "Per calcular el perímetre d'un polígon, quin és el procediment correcte?",
    opcions: [
        { id: "a", text: "Multiplicar la base per l'altura.", correcta: false },
        { id: "b", text: "Sumar la longitud de tots els seus costats.", correcta: true },
        { id: "c", text: "Comptar el nombre de vèrtexs.", correcta: false },
        { id: "d", text: "Calcular la superfície que ocupa.", correcta: false }
    ],
    explicacio: "El perímetre és la mesura del contorn, és a dir, la suma de tots els costats."
},
{
    id: "esp_mes_003",
    bloc: "espai_mesura",
    pregunta: "En un triangle rectangle, com s'aplica correctament el Teorema de Pitàgores?",
    opcions: [
        { id: "a", text: "La suma dels dos catets és igual a la hipotenusa.", correcta: false },
        { id: "b", text: "La suma dels quadrats dels catets és igual al quadrat de la hipotenusa.", correcta: true },
        { id: "c", text: "El quadrat d'un catet és igual a la suma dels altres dos costats.", correcta: false },
        { id: "d", text: "L'àrea del triangle és igual al quadrat de la hipotenusa.", correcta: false }
    ],
    explicacio: "La fórmula és: catet² + catet² = hipotenusa²."
},
{
    id: "esp_mes_004",
    bloc: "espai_mesura",
    pregunta: "Quina és la definició de 'àrea' d'una figura plana?",
    opcions: [
        { id: "a", text: "La longitud total del contorn de la figura.", correcta: false },
        { id: "b", text: "La mesura de la superfície que ocupa la figura.", correcta: true },
        { id: "c", text: "La distància més llarga entre dos punts de la figura.", correcta: false },
        { id: "d", text: "El nombre d'angles que té la figura.", correcta: false }
    ],
    explicacio: "L'àrea mesura l'espai interior d'una figura, normalment en unitats quadrades (cm², m²...)."
},
{
    id: "esp_mes_005",
    bloc: "espai_mesura",
    pregunta: "Quina relació hi ha entre el radi i el diàmetre d'un cercle?",
    opcions: [
        { id: "a", text: "Són iguals.", correcta: false },
        { id: "b", text: "El diàmetre és el doble que el radi.", correcta: true },
        { id: "c", text: "El radi és el doble que el diàmetre.", correcta: false },
        { id: "d", text: "No tenen cap relació.", correcta: false }
    ],
    explicacio: "El diàmetre és la línia que creua tot el cercle pel centre, i és igual a dos radis."
},
{
    id: "esp_mes_006",
    bloc: "espai_mesura",
    pregunta: "Què tenen en comú tots els polígons regulars?",
    opcions: [
        { id: "a", text: "Tots tenen quatre costats.", correcta: false },
        { id: "b", text: "Tots els seus costats i tots els seus angles són iguals.", correcta: true },
        { id: "c", text: "Les seves diagonals sempre són iguals.", correcta: false },
        { id: "d", text: "Només es poden dibuixar dins d'un cercle.", correcta: false }
    ],
    explicacio: "Un polígon és regular si tots els seus costats mesuren el mateix i tots els seus angles són iguals."
},
{
    id: "esp_mes_007",
    bloc: "espai_mesura",
    pregunta: "Quina és la suma dels angles interiors de qualsevol triangle?",
    opcions: [
        { id: "a", text: "Depèn del tipus de triangle.", correcta: false },
        { id: "b", text: "Sempre sumen 180°.", correcta: true },
        { id: "c", text: "Sempre sumen 360°.", correcta: false },
        { id: "d", text: "Sempre sumen 90°.", correcta: false }
    ],
    explicacio: "No importa si un triangle és gran, petit, equilàter o rectangle: la suma dels seus tres angles sempre és 180°."
},
{
    id: "esp_mes_008",
    bloc: "espai_mesura",
    pregunta: "Per calcular la longitud d'una circumferència, quin procediment és el correcte?",
    opcions: [
        { id: "a", text: "Multiplicar el radi per π.", correcta: false },
        { id: "b", text: "Multiplicar el diàmetre per π.", correcta: true },
        { id: "c", text: "Elevar el radi al quadrat i multiplicar per π.", correcta: false },
        { id: "d", text: "Multiplicar el diàmetre per 2.", correcta: false }
    ],
    explicacio: "La longitud de la 'corda' que forma la circumferència és L = D × π (o L = 2 × π × r)."
},
{
    id: "esp_mes_009",
    bloc: "espai_mesura",
    pregunta: "Com es diu un angle que mesura exactament 90°?",
    opcions: [
        { id: "a", text: "Angle agut.", correcta: false },
        { id: "b", text: "Angle recte.", correcta: true },
        { id: "c", text: "Angle obtús.", correcta: false },
        { id: "d", text: "Angle pla.", correcta: false }
    ],
    explicacio: "L'angle de 90 graus, que forma una 'L', s'anomena angle recte."
},
{
    id: "esp_mes_010",
    bloc: "espai_mesura",
    pregunta: "Quina és la característica principal de les rectes paral·leles?",
    opcions: [
        { id: "a", text: "Es tallen en un punt.", correcta: false },
        { id: "b", text: "No es tallen mai i mantenen sempre la mateixa distància entre elles.", correcta: true },
        { id: "c", text: "Formen un angle de 90°.", correcta: false },
        { id: "d", text: "Tenen la mateixa longitud.", correcta: false }
    ],
    explicacio: "Les rectes paral·leles són com les vies d'un tren: mai s'arriben a tocar."
}

   // ========================================
// BLOC 5: SENTIT ESTOCÀSTIC (10 preguntes)
// ========================================
{
    id: "estoc_001",
    bloc: "sentit_estocastic",
    pregunta: "Si llances un dau de sis cares, quina és la probabilitat de treure un nombre més gran que 4?",
    opcions: [
        { id: "a", text: "4/6", correcta: false },
        { id: "b", text: "2/6", correcta: true },
        { id: "c", text: "1/6", correcta: false },
        { id: "d", text: "3/6", correcta: false }
    ],
    explicacio: "Els nombres més grans que 4 són el 5 i el 6 (2 casos favorables) d'un total de 6 casos possibles."
},
{
    id: "estoc_002",
    bloc: "sentit_estocastic",
    pregunta: "Si en un examen les teves notes són 5, 6, 7, 7, 10, quin procediment segueixes per calcular la 'mediana'?",
    opcions: [
        { id: "a", text: "Sumar totes les notes i dividir entre 5.", correcta: false },
        { id: "b", text: "Ordenar les notes i agafar el valor que queda just al mig.", correcta: true },
        { id: "c", text: "Agafar la nota que més es repeteix.", correcta: false },
        { id: "d", text: "Restar la nota més baixa de la més alta.", correcta: false }
    ],
    explicacio: "La mediana és la 'del mig' un cop has ordenat els números."
},
{
    id: "estoc_003",
    bloc: "sentit_estocastic",
    pregunta: "Quin tipus de gràfic és millor per representar els percentatges d'un total (ex: els resultats d'unes eleccions)?",
    opcions: [
        { id: "a", text: "Un gràfic de línies.", correcta: false },
        { id: "b", text: "Un gràfic de sectors (un 'formatget').", correcta: true },
        { id: "c", text: "Un pictograma.", correcta: false },
        { id: "d", text: "Una taula de dades.", correcta: false }
    ],
    explicacio: "El gràfic de sectors és ideal per veure com es reparteix un total en diferents parts."
},
{
    id: "estoc_004",
    bloc: "sentit_estocastic",
    pregunta: "Què és la 'freqüència absoluta' d'una dada?",
    opcions: [
        { id: "a", text: "El percentatge de vegades que apareix la dada.", correcta: false },
        { id: "b", text: "El nombre de vegades que es repeteix una dada.", correcta: true },
        { id: "c", text: "La dada més alta de totes.", correcta: false },
        { id: "d", text: "La suma de totes les dades.", correcta: false }
    ],
    explicacio: "La freqüència absoluta és simplement comptar quantes vegades surt cada resultat."
},
{
    id: "estoc_005",
    bloc: "sentit_estocastic",
    pregunta: "Quin procediment segueixes per calcular la 'mitjana' d'un conjunt de dades?",
    opcions: [
        { id: "a", text: "Ordenar les dades i agafar el valor central.", correcta: false },
        { id: "b", text: "Sumar tots els valors i dividir pel nombre total de dades.", correcta: true },
        { id: "c", text: "Buscar el valor que més es repeteix.", correcta: false },
        { id: "d", text: "Agafar el valor més gran.", correcta: false }
    ],
    explicacio: "La mitjana és el que normalment anomenem 'la mitja', com quan calculem la nota mitjana d'un trimestre."
},
{
    id: "estoc_006",
    bloc: "sentit_estocastic",
    pregunta: "Què és la 'moda' d'un conjunt de dades?",
    opcions: [
        { id: "a", text: "La mitjana de les dades.", correcta: false },
        { id: "b", text: "La dada que més es repeteix.", correcta: true },
        { id: "c", text: "El valor central de les dades.", correcta: false },
        { id: "d", text: "La dada més gran.", correcta: false }
    ],
    explicacio: "La moda és la dada que 'està de moda', la que surt més vegades."
},
{
    id: "estoc_007",
    bloc: "sentit_estocastic",
    pregunta: "Quin tipus de variable estadística és 'el color preferit'?",
    opcions: [
        { id: "a", text: "Una variable numèrica.", correcta: false },
        { id: "b", text: "Una variable qualitativa.", correcta: true },
        { id: "c", text: "Una variable contínua.", correcta: false },
        { id: "d", text: "Una variable de freqüència.", correcta: false }
    ],
    explicacio: "Les variables qualitatives expressen qualitats o categories, no números (com 'vermell', 'blau'...)."
},
{
    id: "estoc_008",
    bloc: "sentit_estocastic",
    pregunta: "Què és un succés 'impossible' en probabilitat?",
    opcions: [
        { id: "a", text: "Un succés que és molt difícil que passi.", correcta: false },
        { id: "b", text: "Un succés que no pot passar mai.", correcta: true },
        { id: "c", text: "Un succés que passa sempre.", correcta: false },
        { id: "d", text: "Un succés que passa poques vegades.", correcta: false }
    ],
    explicacio: "Un succés impossible té probabilitat 0, com treure un 7 en un dau de 6 cares."
},
{
    id: "estoc_009",
    bloc: "sentit_estocastic",
    pregunta: "Quin tipus de gràfic és més adequat per representar l'evolució de la temperatura al llarg del temps?",
    opcions: [
        { id: "a", text: "Un gràfic de sectors.", correcta: false },
        { id: "b", text: "Un gràfic de línies.", correcta: true },
        { id: "c", text: "Un gràfic de barres.", correcta: false },
        { id: "d", text: "Un histograma.", correcta: false }
    ],
    explicacio: "El gràfic de línies és perfecte per veure com una variable canvia amb el temps."
},
{
    id: "estoc_010",
    bloc: "sentit_estocastic",
    pregunta: "En llançar una moneda a l'aire, quin és un 'succés segur'?",
    opcions: [
        { id: "a", text: "Que surti cara.", correcta: false },
        { id: "b", text: "Que surti cara o creu.", correcta: true },
        { id: "c", text: "Que surti creu.", correcta: false },
        { id: "d", text: "Que la moneda quedi de cantell.", correcta: false }
    ],
    explicacio: "Un succés segur té probabilitat 1, és a dir, passarà sempre."
}
];
// ========================================
// VERIFICACIÓ DEL BANC DE PREGUNTES
// ========================================
// Distribució Final Esperada:
// - Càlcul: 20 preguntes
// - Problemes: 20 preguntes
// - Sentit Numèric: 15 preguntes
// - Espai i Mesura: 10 preguntes
// - Sentit Estocàstic: 10 preguntes

console.log(`Total de preguntes carregades: ${questionBank.length}`);
console.log(`- Bloc 'calcul': ${questionBank.filter(q => q.bloc === 'calcul').length} preguntes.`);
console.log(`- Bloc 'problemes': ${questionBank.filter(q => q.bloc === 'problemes').length} preguntes.`);
console.log(`- Bloc 'sentit_numeric': ${questionBank.filter(q => q.bloc === 'sentit_numeric').length} preguntes.`);
console.log(`- Bloc 'espai_mesura': ${questionBank.filter(q => q.bloc === 'espai_mesura').length} preguntes.`);
console.log(`- Bloc 'sentit_estocastic': ${questionBank.filter(q => q.bloc === 'sentit_estocastic').length} preguntes.`);
