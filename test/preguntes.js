const questionBank = [
    
    // ========================================
    // BLOC 1: CÀLCUL (20 preguntes)
    // ========================================

    // --- Tipus: Directa (10) ---
    {
        id: "calc_001",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Quin és el resultat de l'operació (-5) - (-8)?",
        opcions: [ { id: "a", text: "-13", correcta: false }, { id: "b", text: "3", correcta: true }, { id: "c", text: "-3", correcta: false }, { id: "d", text: "13", correcta: false } ],
        explicacio: "Restar un negatiu és com sumar un positiu: -5 + 8 = 3."
    },
    {
        id: "calc_002",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Resol: 10 + 4 * (-2)",
        opcions: [ { id: "a", text: "-28", correcta: false }, { id: "b", text: "2", correcta: true }, { id: "c", text: "12", correcta: false }, { id: "d", text: "-12", correcta: false } ],
        explicacio: "Primer la multiplicació (4 * -2 = -8), després la suma (10 + (-8) = 2)."
    },
    {
        id: "calc_003",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Calcula: 3/5 + 1/5",
        opcions: [ { id: "a", text: "4/10", correcta: false }, { id: "b", text: "4/5", correcta: true }, { id: "c", text: "3/25", correcta: false }, { id: "d", text: "5/4", correcta: false } ],
        explicacio: "Si els denominadors són iguals, només se sumen els numeradors."
    },
    {
        id: "calc_004",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Calcula: (-4) * (-6)",
        opcions: [ { id: "a", text: "-24", correcta: false }, { id: "b", text: "24", correcta: true }, { id: "c", text: "-10", correcta: false }, { id: "d", text: "10", correcta: false } ],
        explicacio: "La regla dels signes diu: menys per menys, més."
    },
    {
        id: "calc_005",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Quin és el resultat de 1/2 * 3/4?",
        opcions: [ { id: "a", text: "4/6", correcta: false }, { id: "b", text: "3/8", correcta: true }, { id: "c", text: "4/8", correcta: false }, { id: "d", text: "3/6", correcta: false } ],
        explicacio: "La multiplicació de fraccions es fa en línia: el de dalt pel de dalt i el de baix pel de baix."
    },
    {
        id: "calc_006",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Quin és el resultat de 5²?",
        opcions: [ { id: "a", text: "10", correcta: false }, { id: "b", text: "25", correcta: true }, { id: "c", text: "7", correcta: false }, { id: "d", text: "52", correcta: false } ],
        explicacio: "Elevar al quadrat significa multiplicar un número per si mateix: 5 * 5 = 25."
    },
    {
        id: "calc_007",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Resol: 1/3 : 2/5",
        opcions: [ { id: "a", text: "2/15", correcta: false }, { id: "b", text: "5/6", correcta: true }, { id: "c", text: "6/5", correcta: false }, { id: "d", text: "3/10", correcta: false } ],
        explicacio: "La divisió de fraccions és el mateix que multiplicar en creu."
    },
    {
        id: "calc_008",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Quin és el resultat de (-2)³?",
        opcions: [ { id: "a", text: "-6", correcta: false }, { id: "b", text: "-8", correcta: true }, { id: "c", text: "8", correcta: false }, { id: "d", text: "6", correcta: false } ],
        explicacio: "És (-2) * (-2) * (-2). Menys per menys és més, i més per menys és menys."
    },
    {
        id: "calc_009",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Calcula l'arrel quadrada de 49.",
        opcions: [ { id: "a", text: "4,9", correcta: false }, { id: "b", text: "7", correcta: true }, { id: "c", text: "24,5", correcta: false }, { id: "d", text: "9", correcta: false } ],
        explicacio: "L'arrel quadrada de 49 és 7, perquè 7 * 7 = 49."
    },
    {
        id: "calc_010",
        bloc: "calcul",
        tipus: "directa",
        pregunta: "Resol: (-30) / (-5)",
        opcions: [ { id: "a", text: "6", correcta: true }, { id: "b", text: "-6", correcta: false }, { id: "c", text: "5", correcta: false }, { id: "d", text: "-5", correcta: false } ],
        explicacio: "La regla dels signes per a la divisió és la mateixa: menys entre menys, més."
    },
    
    // --- Tipus: Competencial (10) ---
    {
        id: "calc_011",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Per resoldre 20 - 5 * 3 + 1, quin és el primer pas correcte que has de fer?",
        opcions: [ { id: "a", text: "Restar 20 - 5.", correcta: false }, { id: "b", text: "Multiplicar 5 * 3.", correcta: true }, { id: "c", text: "Sumar 3 + 1.", correcta: false }, { id: "d", text: "L'ordre no importa.", correcta: false } ],
        explicacio: "La jerarquia d'operacions obliga a fer les multiplicacions abans que les sumes o restes."
    },
    {
        id: "calc_012",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Un ascensor està a la planta 2, baixa 5 plantes i en puja 8. Quina operació representa el seu recorregut?",
        opcions: [ { id: "a", text: "2 + 5 + 8", correcta: false }, { id: "b", text: "2 - 5 + 8", correcta: true }, { id: "c", text: "-2 - 5 + 8", correcta: false }, { id: "d", text: "8 - 2 - 5", correcta: false } ],
        explicacio: "Baixar es representa amb una resta i pujar amb una suma."
    },
    {
        id: "calc_013",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "L'Edu introdueix '36', prem '−', i un altre número. El resultat és '6'. Quin raonament ha seguit?",
        opcions: [ { id: "a", text: "Ha buscat un número que sumat a 6 doni 36.", correcta: false }, { id: "b", text: "Ha plantejat l'operació 36 - x = 6.", correcta: true }, { id: "c", text: "Ha restat 6 - 36.", correcta: false }, { id: "d", text: "Ha multiplicat 36 * 6.", correcta: false } ],
        explicacio: "Això és com resoldre una petita equació mentalment."
    },
    {
        id: "calc_014",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Per calcular 1/2 + 1/3, quin denominador comú has d'utilitzar?",
        opcions: [ { id: "a", text: "5, perquè és la suma dels denominadors.", correcta: false }, { id: "b", text: "6, perquè és el MCM de 2 i 3.", correcta: true }, { id: "c", text: "2, perquè és el denominador més petit.", correcta: false }, { id: "d", text: "3, perquè és el denominador més gran.", correcta: false } ],
        explicacio: "Per sumar fraccions, primer cal trobar el Mínim Comú Múltiple dels denominadors."
    },
    {
        id: "calc_015",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Si calcules 2/3 de 18, quina operació fas primer?",
        opcions: [ { id: "a", text: "Multiplicar 2 per 18.", correcta: false }, { id: "b", text: "Dividir 18 entre 3.", correcta: true }, { id: "c", text: "Sumar 2 i 3.", correcta: false }, { id: "d", text: "Multiplicar 3 per 18.", correcta: false } ],
        explicacio: "Per fer la fracció d'un número, el més fàcil és dividir-lo primer pel denominador."
    },
    {
        id: "calc_016",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Quina d'aquestes operacions donarà un resultat negatiu?",
        opcions: [ { id: "a", text: "(-5) * (-5)", correcta: false }, { id: "b", text: "10 - (-3)", correcta: false }, { id: "c", text: "(-10) / 2", correcta: true }, { id: "d", text: "8 + (-2)", correcta: false } ],
        explicacio: "Menys entre més, dóna menys. Les altres opcions donen resultats positius."
    },
    {
        id: "calc_017",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Per resoldre l'operació 5 * (4 - 2), quin pas fas primer?",
        opcions: [ { id: "a", text: "Multiplicar 5 * 4.", correcta: false }, { id: "b", text: "Resoldre el parèntesi (4 - 2).", correcta: true }, { id: "c", text: "Multiplicar 5 * 2.", correcta: false }, { id: "d", text: "L'ordre no importa.", correcta: false } ],
        explicacio: "La jerarquia d'operacions diu que els parèntesis sempre van primer."
    },
    {
        id: "calc_018",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Quina operació és equivalent a calcular el 25% d'un nombre?",
        opcions: [ { id: "a", text: "Multiplicar el nombre per 25.", correcta: false }, { id: "b", text: "Dividir el nombre per 4.", correcta: true }, { id: "c", text: "Restar 25 al nombre.", correcta: false }, { id: "d", text: "Dividir el nombre per 25.", correcta: false } ],
        explicacio: "El 25% és el mateix que la fracció 1/4, per tant, dividir per 4 és el mateix."
    },
    {
        id: "calc_019",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Si has de calcular 47 + 38 mentalment, quina estratègia és eficient?",
        opcions: [ { id: "a", text: "Sumar 40+30 i després sumar 7+8.", correcta: true }, { id: "b", text: "Posar els números en columna al teu cap.", correcta: false }, { id: "c", text: "Arrodonir 47 a 40 i 38 a 30.", correcta: false }, { id: "d", text: "Sumar 47 + 40 i després restar 2.", correcta: false } ],
        explicacio: "Descompondre en desenes i unitats és una tècnica clàssica de càlcul mental."
    },
    {
        id: "calc_020",
        bloc: "calcul",
        tipus: "competencial",
        pregunta: "Quina d'aquestes fraccions és més gran que 1?",
        opcions: [ { id: "a", text: "3/4", correcta: false }, { id: "b", text: "5/3", correcta: true }, { id: "c", text: "2/2", correcta: false }, { id: "d", text: "1/5", correcta: false } ],
        explicacio: "Una fracció és més gran que la unitat si el numerador (el de dalt) és més gran que el denominador (el de baix)."
    },

    // ========================================
// BLOC 2: PROBLEMES (20 preguntes)
// ========================================

// --- Tipus: Competencial (15) ---
{
    id: "prob_001",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "En una classe de 30 alumnes, 2/5 parts són nois. Quin procediment has de seguir per saber quantes noies hi ha?",
    opcions: [
        { id: "a", text: "Calcular 2/5 de 30 per obtenir directament el nombre de noies.", correcta: false },
        { id: "b", text: "Calcular 2/5 de 30 per saber els nois, i després restar aquest número a 30.", correcta: true },
        { id: "c", text: "Restar 2/5 a 30.", correcta: false },
        { id: "d", text: "Dividir 30 entre 2 i multiplicar per 5.", correcta: false }
    ],
    explicacio: "Primer calcules la part (els nois) i després la restes del total per trobar l'altra part (les noies)."
},
{
    id: "prob_002",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Si 3 llibretes costen 6€, quin és el raonament correcte per saber quant en costaran 5?",
    opcions: [
        { id: "a", text: "Fer una regla de tres: si 3 són 6, 5 són X. X = (3*6)/5.", correcta: false },
        { id: "b", text: "Trobar el preu d'una llibreta (6/3=2€) i després multiplicar-lo per 5.", correcta: true },
        { id: "c", text: "Sumar la diferència: com que comprem 2 llibretes més, sumem 2€ al preu.", correcta: false },
        { id: "d", text: "Plantejar una proporció directa i resoldre.", correcta: false }
    ],
    explicacio: "La reducció a la unitat (trobar el preu d'1) és un procediment fonamental per a la proporcionalitat."
},
{
    id: "prob_003",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "La temperatura a la matinada era de -5°C. Al migdia, era de 12°C. Quina operació representa la variació de temperatura?",
    opcions: [
        { id: "a", text: "12 + 5", correcta: false },
        { id: "b", text: "12 - (-5)", correcta: true },
        { id: "c", text: "-5 - 12", correcta: false },
        { id: "d", text: "12 * (-5)", correcta: false }
    ],
    explicacio: "La variació és la diferència entre la temperatura final i la inicial. 12 - (-5) = 17°C."
},
{
    id: "prob_004",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Un quadrat té un perímetre de 24 cm. Com pots calcular la seva àrea?",
    opcions: [
        { id: "a", text: "Dividir el perímetre per 4 per trobar el costat, i després elevar el resultat al quadrat.", correcta: true },
        { id: "b", text: "Elevar el perímetre al quadrat.", correcta: false },
        { id: "c", text: "Dividir el perímetre per 2 per trobar l'àrea.", correcta: false },
        { id: "d", text: "Multiplicar el perímetre per 4.", correcta: false }
    ],
    explicacio: "Primer necessites el costat (perímetre/4) per poder aplicar la fórmula de l'àrea (costat²)."
},
{
    id: "prob_005",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "En una caixa hi ha 12 pomes, 15 taronges i 13 plàtans. Quin procediment et dona la fracció de taronges respecte al total?",
    opcions: [
        { id: "a", text: "Posar 15 al numerador i 12+13 al denominador.", correcta: false },
        { id: "b", text: "Posar 15 al numerador i sumar 12+15+13 per al denominador.", correcta: true },
        { id: "c", text: "Posar 12+13 al numerador i 15 al denominador.", correcta: false },
        { id: "d", text: "Dividir 15 entre 12.", correcta: false }
    ],
    explicacio: "Una fracció representa la 'part' (taronges) dividida pel 'total' (totes les fruites)."
},
{
    id: "prob_006",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Per pintar una habitació necessites 5 litres de pintura. Si cada pot conté 2 litres, quin és el procediment per saber quants pots has de comprar?",
    opcions: [
        { id: "a", text: "Multiplicar 5 per 2.", correcta: false },
        { id: "b", text: "Dividir 5 entre 2 i arrodonir cap amunt, ja que no es poden comprar mitjos pots.", correcta: true },
        { id: "c", text: "Dividir 5 entre 2 i agafar només la part entera del resultat.", correcta: false },
        { id: "d", text: "Sumar 5 i 2.", correcta: false }
    ],
    explicacio: "Cal dividir el total necessari per la capacitat de cada pot i sempre arrodonir a l'alça per no quedar-se curt."
},
{
    id: "prob_007",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Una excursió comença a les 9:00 i acaba a les 16:30. Si es fa una parada de 30 minuts per dinar, quina operació calcula el temps real de caminada?",
    opcions: [
        { id: "a", text: "(16:30 - 9:00) + 30 minuts", correcta: false },
        { id: "b", text: "(16:30 - 9:00) - 30 minuts", correcta: true },
        { id: "c", text: "16:30 + 9:00 - 30 minuts", correcta: false },
        { id: "d", text: "9:00 + 30 minuts", correcta: false }
    ],
    explicacio: "Cal calcular el temps total de l'excursió i després restar-li el temps de les parades."
},
{
    id: "prob_008",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Vols enrajolar una cuina de 12 m². Si cada rajola cobreix una superfície de 0,25 m², com calcules quantes rajoles necessites?",
    opcions: [
        { id: "a", text: "Multiplicant 12 per 0,25.", correcta: false },
        { id: "b", text: "Dividint 12 entre 0,25.", correcta: true },
        { id: "c", text: "Sumant 12 i 0,25.", correcta: false },
        { id: "d", text: "Restant 0,25 de 12.", correcta: false }
    ],
    explicacio: "Cal dividir la superfície total per la superfície que cobreix cada rajola."
},
{
    id: "prob_009",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Un cotxe consumeix 7 litres de benzina cada 100 km. Quin procediment et permet saber quants litres consumirà en un viatge de 300 km?",
    opcions: [
        { id: "a", text: "Dividir 100 entre 7.", correcta: false },
        { id: "b", text: "Fer una regla de tres: si 100 km són 7 L, 300 km són X.", correcta: true },
        { id: "c", text: "Sumar 300 + 100 + 7.", correcta: false },
        { id: "d", text: "Multiplicar 300 per 100.", correcta: false }
    ],
    explicacio: "És un problema clàssic de proporcionalitat directa que es pot resoldre amb una regla de tres."
},
{
    id: "prob_010",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Per preparar un pastís per a 4 persones es necessiten 200 g de farina. Si vols fer el mateix pastís per a 6 persones, com calcules la farina necessària?",
    opcions: [
        { id: "a", text: "Dividir 200/4 per saber la farina per persona, i multiplicar per 6.", correcta: true },
        { id: "b", text: "Sumar 200 + (6-4).", correcta: false },
        { id: "c", text: "Multiplicar 200 per 6.", correcta: false },
        { id: "d", text: "Dividir 200 entre 6.", correcta: false }
    ],
    explicacio: "Calcular la quantitat per unitat (persona) i després multiplicar pel nou nombre d'unitats."
},
{
    id: "prob_011",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Tinc 5 pantalons i 3 samarretes. Quina operació em permet saber quantes combinacions diferents de roba puc fer?",
    opcions: [
        { id: "a", text: "5 + 3", correcta: false },
        { id: "b", text: "5 * 3", correcta: true },
        { id: "c", text: "5 - 3", correcta: false },
        { id: "d", text: "5 / 3", correcta: false }
    ],
    explicacio: "Per calcular combinacions d'elements de diferents grups, es multipliquen les opcions de cada grup."
},
{
    id: "prob_012",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Un llibre té 200 pàgines. Dilluns en llegeixo 1/4 i dimarts 1/5 del que queda. Quin procediment calcula quantes pàgines em queden per llegir?",
    opcions: [
        { id: "a", text: "Sumar 1/4 + 1/5 i restar-ho de 200.", correcta: false },
        { id: "b", text: "Calcular 1/4 de 200, restar-ho, i al resultat calcular-li 1/5 i tornar a restar.", correcta: true },
        { id: "c", text: "Calcular 1/4 de 200 i 1/5 de 200 i sumar els resultats.", correcta: false },
        { id: "d", text: "Multiplicar 200 per 1/4 i per 1/5.", correcta: false }
    ],
    explicacio: "És un problema encadenat: el segon pas depèn del resultat del primer."
},
{
    id: "prob_013",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "L'escala d'un mapa és 1:100.000. Què vol dir això?",
    opcions: [
        { id: "a", text: "Que cada centímetre del mapa són 100.000 metres a la realitat.", correcta: false },
        { id: "b", text: "Que cada centímetre del mapa són 100.000 centímetres a la realitat.", correcta: true },
        { id: "c", text: "Que el mapa és 100.000 vegades més gran que la realitat.", correcta: false },
        { id: "d", text: "Que la distància màxima al mapa és de 100.000 km.", correcta: false }
    ],
    explicacio: "L'escala manté la mateixa unitat a banda i banda: 1 cm al mapa equival a 100.000 cm reals."
},
{
    id: "prob_014",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Vols comprar un article que costa 80€ i tens estalviats 3/5 d'aquesta quantitat. Quina operació has de fer per saber quants diners et falten?",
    opcions: [
        { id: "a", text: "Calcular 3/5 de 80€ i aquest és el resultat.", correcta: false },
        { id: "b", text: "Calcular el que et falta, que és 2/5 de 80€.", correcta: true },
        { id: "c", text: "Restar 3/5 a 80.", correcta: false },
        { id: "d", text: "Dividir 80 entre 3/5.", correcta: false }
    ],
    explicacio: "Si ja tens 3/5, et falten els 2/5 restants per arribar al total."
},
{
    id: "prob_015",
    bloc: "problemes",
    tipus: "competencial",
    pregunta: "Una aixeta omple un dipòsit de 1.000 litres en 5 hores. Quina operació calcula quants litres omple en una hora?",
    opcions: [
        { id: "a", text: "1000 * 5", correcta: false },
        { id: "b", text: "1000 / 5", correcta: true },
        { id: "c", text: "1000 - 5", correcta: false },
        { id: "d", text: "5 / 1000", correcta: false }
    ],
    explicacio: "Per trobar el cabal (litres per hora), cal dividir la capacitat total pel temps que triga."
},

// --- Tipus: Directa (5) ---
{
    id: "prob_016",
    bloc: "problemes",
    tipus: "directa",
    pregunta: "Un avió vola a 8.000 metres d'altura i baixa 2.500 metres. A quina altura es troba ara?",
    opcions: [
        { id: "a", text: "10.500 metres", correcta: false },
        { id: "b", text: "5.500 metres", correcta: true },
        { id: "c", text: "6.500 metres", correcta: false },
        { id: "d", text: "2.500 metres", correcta: false }
    ],
    explicacio: "És una resta simple: 8.000 - 2.500 = 5.500."
},
{
    id: "prob_017",
    bloc: "problemes",
    tipus: "directa",
    pregunta: "La Maria té el triple d'edat que el seu germà Pere. Si en Pere té 4 anys, quants anys tenen entre tots dos?",
    opcions: [
        { id: "a", text: "12 anys", correcta: false },
        { id: "b", text: "16 anys", correcta: true },
        { id: "c", text: "8 anys", correcta: false },
        { id: "d", text: "7 anys", correcta: false }
    ],
    explicacio: "La Maria té 3 * 4 = 12 anys. La suma de les dues edats és 12 + 4 = 16 anys."
},
{
    id: "prob_018",
    bloc: "problemes",
    tipus: "directa",
    pregunta: "He comprat un llibre per 18€ i una llibreta per 2€. Si pago amb un bitllet de 50€, quants diners em tornaran?",
    opcions: [
        { id: "a", text: "20€", correcta: false },
        { id: "b", text: "30€", correcta: true },
        { id: "c", text: "32€", correcta: false },
        { id: "d", text: "28€", correcta: false }
    ],
    explicacio: "La despesa total és 18 + 2 = 20€. El canvi és 50 - 20 = 30€."
},
{
    id: "prob_019",
    bloc: "problemes",
    tipus: "directa",
    pregunta: "Si un tren viatja a 90 km/h, quina distància recorrerà en 3 hores?",
    opcions: [
        { id: "a", text: "30 km", correcta: false },
        { id: "b", text: "270 km", correcta: true },
        { id: "c", text: "180 km", correcta: false },
        { id: "d", text: "93 km", correcta: false }
    ],
    explicacio: "La distància es calcula multiplicant la velocitat pel temps: 90 km/h * 3 h = 270 km."
},
{
    id: "prob_020",
    bloc: "problemes",
    tipus: "directa",
    pregunta: "Un article costa 200€ i el seu preu augmenta un 10%. Quin és el nou preu?",
    opcions: [
        { id: "a", text: "210€", correcta: false },
        { id: "b", text: "220€", correcta: true },
        { id: "c", text: "180€", correcta: false },
        { id: "d", text: "202€", correcta: false }
    ],
    explicacio: "El 10% de 200€ és 20€. El nou preu és el preu original més l'augment: 200 + 20 = 220€."
},

   // ========================================
// BLOC 3: SENTIT NUMÈRIC (15 preguntes)
// ========================================

// --- Tipus: Directa (8) ---
{
    id: "num_001",
    bloc: "sentit_numeric",
    tipus: "directa",
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
    id: "num_002",
    bloc: "sentit_numeric",
    tipus: "directa",
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
    id: "num_003",
    bloc: "sentit_numeric",
    tipus: "directa",
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
    id: "num_004",
    bloc: "sentit_numeric",
    tipus: "directa",
    pregunta: "Quina operació té prioritat sobre les altres en la jerarquia d'operacions?",
    opcions: [
        { id: "a", text: "Les sumes i les restes.", correcta: false },
        { id: "b", text: "Les potències i les arrels.", correcta: true },
        { id: "c", text: "Les operacions sempre es fan d'esquerra a dreta.", correcta: false },
        { id: "d", text: "Les multiplicacions i les divisions.", correcta: false }
    ],
    explicacio: "L'ordre és: 1r Parèntesis, 2n Potències i Arrels, 3r Multiplicacions i Divisions, 4t Sumes i Restes."
},
{
    id: "num_005",
    bloc: "sentit_numeric",
    tipus: "directa",
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
    id: "num_006",
    bloc: "sentit_numeric",
    tipus: "directa",
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
    id: "num_007",
    bloc: "sentit_numeric",
    tipus: "directa",
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
    id: "num_008",
    bloc: "sentit_numeric",
    tipus: "directa",
    pregunta: "Què representa el denominador en una fracció?",
    opcions: [
        { id: "a", text: "Les parts que agafem.", correcta: false },
        { id: "b", text: "El nombre total de parts iguals en què es divideix la unitat.", correcta: true },
        { id: "c", text: "El resultat de la divisió.", correcta: false },
        { id: "d", text: "El nombre més gran de la fracció.", correcta: false }
    ],
    explicacio: "El denominador (el de baix) diu en quants trossos tallem la 'pizza'."
},

// --- Tipus: Competencial (7) ---
{
    id: "num_009",
    bloc: "sentit_numeric",
    tipus: "competencial",
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
    id: "num_010",
    bloc: "sentit_numeric",
    tipus: "competencial",
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
    id: "num_011",
    bloc: "sentit_numeric",
    tipus: "competencial",
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
    id: "num_012",
    bloc: "sentit_numeric",
    tipus: "competencial",
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
    id: "num_013",
    bloc: "sentit_numeric",
    tipus: "competencial",
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
    id: "num_014",
    bloc: "sentit_numeric",
    tipus: "competencial",
    pregunta: "Per dividir dues fraccions, quin procediment és el correcte?",
    opcions: [
        { id: "a", text: "Dividir els numeradors i els denominadors en línia recta.", correcta: false },
        { id: "b", text: "Multiplicar les fraccions en creu.", correcta: true },
        { id: "c", text: "Posar denominador comú i dividir els numeradors.", correcta: false },
        { id: "d", text: "Restar una fracció de l'altra.", correcta: false }
    ],
    explicacio: "Dividir fraccions és el mateix que multiplicar en creu."
},
{
    id: "num_015",
    bloc: "sentit_numeric",
    tipus: "competencial",
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

// --- Tipus: Directa (6) ---
{
    id: "esp_mes_001",
    bloc: "espai_mesura",
    tipus: "directa",
    pregunta: "Quina és la definició de 'perímetre' d'una figura plana?",
    opcions: [
        { id: "a", text: "La superfície que ocupa la figura.", correcta: false },
        { id: "b", text: "La longitud total del contorn de la figura.", correcta: true },
        { id: "c", text: "La línia més llarga que es pot dibuixar dins de la figura.", correcta: false },
        { id: "d", text: "El nombre de costats que té la figura.", correcta: false }
    ],
    explicacio: "El perímetre és la suma de la longitud de tots els costats, és a dir, el que 'mesura per fora'."
},
{
    id: "esp_mes_002",
    bloc: "espai_mesura",
    tipus: "directa",
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
    id: "esp_mes_003",
    bloc: "espai_mesura",
    tipus: "directa",
    pregunta: "Què tenen en comú tots els polígons regulars?",
    opcions: [
        { id: "a", text: "Tots tenen quatre costats.", correcta: false },
        { id: "b", text: "Tots els seus costats i tots els seus angles són iguals.", correcta: true },
        { id: "c", text: "Les seves diagonals són sempre iguals.", correcta: false },
        { id: "d", text: "Només es poden dibuixar dins d'un cercle.", correcta: false }
    ],
    explicacio: "Un polígon és regular si tots els seus costats mesuren el mateix i tots els seus angles són iguals."
},
{
    id: "esp_mes_004",
    bloc: "espai_mesura",
    tipus: "directa",
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
    id: "esp_mes_005",
    bloc: "espai_mesura",
    tipus: "directa",
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
    id: "esp_mes_006",
    bloc: "espai_mesura",
    tipus: "directa",
    pregunta: "Quina és la característica principal de les rectes paral·leles?",
    opcions: [
        { id: "a", text: "Es tallen en un punt.", correcta: false },
        { id: "b", text: "No es tallen mai i mantenen sempre la mateixa distància entre elles.", correcta: true },
        { id: "c", text: "Formen un angle de 90°.", correcta: false },
        { id: "d", text: "Tenen la mateixa longitud.", correcta: false }
    ],
    explicacio: "Les rectes paral·leles són com les vies d'un tren: mai s'arriben a tocar."
},

// --- Tipus: Competencial (4) ---
{
    id: "esp_mes_007",
    bloc: "espai_mesura",
    tipus: "competencial",
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
    id: "esp_mes_008",
    bloc: "espai_mesura",
    tipus: "competencial",
    pregunta: "Per calcular l'àrea d'un rectangle, quin procediment segueixes?",
    opcions: [
        { id: "a", text: "Sumar la longitud de tots els seus costats.", correcta: false },
        { id: "b", text: "Multiplicar la longitud de la base per la longitud de l'altura.", correcta: true },
        { id: "c", text: "Multiplicar la longitud d'una diagonal per l'altra.", correcta: false },
        { id: "d", text: "Sumar la base i l'altura.", correcta: false }
    ],
    explicacio: "La fórmula de l'àrea d'un rectangle és base × altura."
},
{
    id: "esp_mes_009",
    bloc: "espai_mesura",
    tipus: "competencial",
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
    id: "esp_mes_010",
    bloc: "espai_mesura",
    tipus: "competencial",
    pregunta: "Quina característica defineix dues rectes com a 'perpendiculars'?",
    opcions: [
        { id: "a", text: "Que no es tallen mai.", correcta: false },
        { id: "b", text: "Que es tallen formant quatre angles rectes (de 90°).", correcta: true },
        { id: "c", text: "Que tenen la mateixa longitud.", correcta: false },
        { id: "d", text: "Que pertanyen al mateix pla.", correcta: false }
    ],
    explicacio: "Les rectes perpendiculars són les que formen angles de 90° en creuar-se."
},
    // ========================================
// BLOC 5: SENTIT ESTOCÀSTIC (10 preguntes)
// ========================================

// --- Tipus: Directa (6) ---
{
    id: "estoc_001",
    bloc: "sentit_estocastic",
    tipus: "directa",
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
    id: "estoc_002",
    bloc: "sentit_estocastic",
    tipus: "directa",
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
    id: "estoc_003",
    bloc: "sentit_estocastic",
    tipus: "directa",
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
    id: "estoc_004",
    bloc: "sentit_estocastic",
    tipus: "directa",
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
    id: "estoc_005",
    bloc: "sentit_estocastic",
    tipus: "directa",
    pregunta: "En llançar una moneda a l'aire, quin és un 'succés segur'?",
    opcions: [
        { id: "a", text: "Que surti cara.", correcta: false },
        { id: "b", text: "Que surti cara o creu.", correcta: true },
        { id: "c", text: "Que surti creu.", correcta: false },
        { id: "d", text: "Que la moneda quedi de cantell.", correcta: false }
    ],
    explicacio: "Un succés segur té probabilitat 1, és a dir, passarà sempre."
},
{
    id: "estoc_006",
    bloc: "sentit_estocastic",
    tipus: "directa",
    pregunta: "Què mesura el 'rang' o 'recorregut' d'un conjunt de dades?",
    opcions: [
        { id: "a", text: "El valor central de les dades.", correcta: false },
        { id: "b", text: "La diferència entre el valor màxim i el mínim.", correcta: true },
        { id: "c", text: "El valor que més es repeteix.", correcta: false },
        { id: "d", text: "El nombre total de dades.", correcta: false }
    ],
    explicacio: "El rang ens dóna una idea de com d'escampades estan les dades."
},

// --- Tipus: Competencial (4) ---
{
    id: "estoc_007",
    bloc: "sentit_estocastic",
    tipus: "competencial",
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
    id: "estoc_008",
    bloc: "sentit_estocastic",
    tipus: "competencial",
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
    id: "estoc_009",
    bloc: "sentit_estocastic",
    tipus: "competencial",
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
    id: "estoc_010",
    bloc: "sentit_estocastic",
    tipus: "competencial",
    pregunta: "Quin procediment segueixes per calcular la 'mitjana' d'un conjunt de dades?",
    opcions: [
        { id: "a", text: "Ordenar les dades i agafar el valor central.", correcta: false },
        { id: "b", text: "Sumar tots els valors i dividir pel nombre total de dades.", correcta: true },
        { id: "c", text: "Buscar el valor que més es repeteix.", correcta: false },
        { id: "d", text: "Agafar el valor més gran.", correcta: false }
    ],
    explicacio: "La mitjana és el que normalment anomenem 'la mitja', com quan calculem la nota mitjana d'un trimestre."
}
];
// ========================================
// VERIFICACIÓ DEL BANC DE PREGUNTES
// ========================================
// Distribució Final Esperada (75 preguntes):
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
