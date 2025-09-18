// ========================================
// BANCO DE PREGUNTES PROCEDIMENTALS - 6è PRIMÀRIA
// ========================================
//
// Basat en els continguts oficials de Matemàtiques de 6è de Primària
// Enfocament: Identificació de procediments i estratègies
// Cada opció representa un procediment diferent
// Nivell: 6è Primària / 1r ESO transició
//
// Distribució:
// - Bloc 1: Resolució de problemes i estratègies (15 preguntes)
// - Bloc 2: Números i operacions (20 preguntes)
// - Bloc 3: Mesura i magnituds (15 preguntes)
// - Bloc 4: Geometria (15 preguntes)
// - Bloc 5: Estadística i probabilitat (10 preguntes)
const questionBank = [
code
Code
// ========================================
// BLOC 1: PROCESSOS, MÈTODES I ACTITUDS (10 preguntes)
// ========================================
{
    id: "proc_001",
    bloc: "processos",
    pregunta: "Després de resoldre un problema, quin és el pas final més important per assegurar que la teva solució és correcta?",
    opcions: [
        { id: "a", text: "Presentar el resultat de manera ordenada i neta.", correcta: false },
        { id: "b", text: "Comprovar si el resultat té sentit en el context del problema.", correcta: true },
        { id: "c", text: "Tornar a fer totes les operacions amb la calculadora.", correcta: false },
        { id: "d", text: "Preguntar a un company si li ha donat el mateix.", correcta: false }
    ],
    explicacio: "Sempre cal pensar si la resposta és lògica. Per exemple, no pot costar 500€ una llibreta."
},
{
    id: "proc_002",
    bloc: "processos",
    pregunta: "Si un problema et sembla molt difícil, quina és una bona primera estratègia?",
    opcions: [
        { id: "a", text: "Deixar-lo en blanc i passar al següent.", correcta: false },
        { id: "b", text: "Llegir l'enunciat diverses vegades i subratllar les dades clau.", correcta: true },
        { id: "c", text: "Inventar-se un resultat aproximat.", correcta: false },
        { id: "d", text: "Començar a fer operacions a l'atzar amb els números que hi ha.", correcta: false }
    ],
    explicacio: "El primer pas per resoldre un problema és entendre bé què et demana."
},
{
    id: "proc_003",
    bloc: "processos",
    pregunta: "Quina és la millor manera d'utilitzar les unitats (metres, euros, kg...) en un problema?",
    opcions: [
        { id: "a", text: "Posar les unitats només al resultat final.", correcta: false },
        { id: "b", text: "Acompanyar els números amb les seves unitats durant tot el procés.", correcta: true },
        { id: "c", text: "No posar mai les unitats, només els números.", correcta: false },
        { id: "d", text: "Inventar-se una unitat nova per al resultat.", correcta: false }
    ],
    explicacio: "Utilitzar les unitats en cada pas t'ajuda a no perdre't i a comprovar que el resultat és coherent."
},
{
    id: "proc_004",
    bloc: "processos",
    pregunta: "Davant d'un problema amb moltes dades numèriques, quina estratègia t'ajuda a organitzar la informació?",
    opcions: [
        { id: "a", text: "Fer les operacions per l'ordre en què apareixen.", correcta: false },
        { id: "b", text: "Crear una taula o un esquema per classificar les dades.", correcta: true },
        { id: "c", text: "Centrar-se només en els números més grans.", correcta: false },
        { id: "d", text: "Memoritzar totes les dades abans de començar.", correcta: false }
    ],
    explicacio: "Una taula o un dibuix són eines molt útils per posar ordre quan hi ha molta informació."
},
{
    id: "proc_005",
    bloc: "processos",
    pregunta: "Com comproves si una divisió està ben feta?",
    opcions: [
        { id: "a", text: "Sumant el divisor i el quocient.", correcta: false },
        { id: "b", text: "Multiplicant el divisor pel quocient i sumant-hi el residu.", correcta: true },
        { id: "c", text: "Tornant a fer la divisió més a poc a poc.", correcta: false },
        { id: "d", text: "Dividint el dividend pel quocient.", correcta: false }
    ],
    explicacio: "És la prova de la divisió: Dividend = (divisor × quocient) + residu."
},
{
    id: "proc_006",
    bloc: "processos",
    pregunta: "Si has de comunicar la solució d'un problema, què és més important?",
    opcions: [
        { id: "a", text: "Només donar el número del resultat final.", correcta: false },
        { id: "b", text: "Explicar els passos que has seguit i per què.", correcta: true },
        { id: "c", text: "Dir només quines operacions has fet (sumes, restes...).", correcta: false },
        { id: "d", text: "Fer una bona presentació visual, encara que el resultat sigui incorrecte.", correcta: false }
    ],
    explicacio: "Explicar el teu raonament demostra que has entès el problema a fons."
},
{
    id: "proc_007",
    bloc: "processos",
    pregunta: "Què vol dir 'simplificar' una fracció?",
    opcions: [
        { id: "a", text: "Fer que el numerador i el denominador siguin més grans.", correcta: false },
        { id: "b", text: "Dividir el numerador i el denominador pel mateix nombre.", correcta: true },
        { id: "c", text: "Restar el mateix nombre al numerador i al denominador.", correcta: false },
        { id: "d", text: "Convertir la fracció en un nombre decimal.", correcta: false }
    ],
    explicacio: "Simplificar és trobar una fracció equivalent amb números més petits."
},
{
    id: "proc_008",
    bloc: "processos",
    pregunta: "Quina és la millor estratègia si no recordes una fórmula matemàtica?",
    opcions: [
        { id: "a", text: "Deixar el problema en blanc.", correcta: false },
        { id: "b", text: "Intentar deduir-la a partir d'un exemple senzill o un dibuix.", correcta: true },
        { id: "c", text: "Utilitzar una altra fórmula que s'hi assembli.", correcta: false },
        { id: "d", text: "Posar un resultat a l'atzar.", correcta: false }
    ],
    explicacio: "Les matemàtiques són lògica. Moltes fórmules es poden raonar sense necessitat de memoritzar-les."
},
{
    id: "proc_009",
    bloc: "processos",
    pregunta: "Per què és útil l'estimació o el càlcul aproximat abans de resoldre un problema?",
    opcions: [
        { id: "a", text: "No és útil, sempre cal calcular el resultat exacte directament.", correcta: false },
        { id: "b", text: "Per tenir una idea del resultat esperat i detectar errors greus.", correcta: true },
        { id: "c", text: "Per substituir el càlcul exacte i anar més ràpid.", correcta: false },
        { id: "d", text: "Per demostrar que saps fer operacions mentals.", correcta: false }
    ],
    explicacio: "Estimar t'ajuda a saber si el teu resultat final té sentit o si t'has equivocat molt."
},
{
    id: "proc_010",
    bloc: "processos",
    pregunta: "Si en un problema apareix la paraula 'diferència', quina operació t'està suggerint?",
    opcions: [
        { id: "a", text: "Una suma.", correcta: false },
        { id: "b", text: "Una resta.", correcta: true },
        { id: "c", text: "Una multiplicació.", correcta: false },
        { id: "d", text: "Una divisió.", correcta: false }
    ],
    explicacio: "La paraula 'diferència' en matemàtiques sempre es refereix al resultat d'una resta."
},

// ========================================
// BLOC 2: NOMBRES I ÀLGEBRA (20 preguntes)
// ========================================

{
    id: "numalg_001",
    bloc: "numeros_algebra",
    pregunta: "Per trobar el Mínim Comú Múltiple (MCM) de dos nombres, quin procediment fas?",
    opcions: [
        { id: "a", text: "Descompondre i agafar només els factors comuns amb l'exponent més petit.", correcta: false },
        { id: "b", text: "Multiplicar els dos nombres entre ells.", correcta: false },
        { id: "c", text: "Descompondre i agafar tots els factors (comuns i no comuns) amb l'exponent més gran.", correcta: true },
        { id: "d", text: "Buscar els divisors de cada nombre i agafar el més gran.", correcta: false }
    ],
    explicacio: "Per al MCM, es descompon i s'agafen 'tots els actors, amb el barret més alt'."
},
{
    id: "numalg_002",
    bloc: "numeros_algebra",
    pregunta: "En l'equació 5x - 6 = 14, quin és el primer pas correcte per començar a aïllar la 'x'?",
    opcions: [
        { id: "a", text: "Passar el 5 que multiplica a l'altre costat dividint.", correcta: false },
        { id: "b", text: "Sumar 6 a tots dos costats de l'equació.", correcta: true },
        { id: "c", text: "Restar 14 a tots dos costats de l'equació.", correcta: false },
        { id: "d", text: "Dividir tota l'equació per 5.", correcta: false }
    ],
    explicacio: "Primer es mou el que suma o resta. El '-6' passa a l'altre costat com a '+6'."
},
{
    id: "numalg_003",
    bloc: "numeros_algebra",
    pregunta: "Com s'aplica la regla dels signes per multiplicar (-8) × (-3)?",
    opcions: [
        { id: "a", text: "Es multipliquen els números i es posa el signe del més gran.", correcta: false },
        { id: "b", text: "Com que els dos signes són iguals (negatius), el resultat és positiu.", correcta: true },
        { id: "c", text: "Es multipliquen els números i el resultat sempre és negatiu.", correcta: false },
        { id: "d", text: "Es resten els números perquè els signes són iguals.", correcta: false }
    ],
    explicacio: "La regla és: 'menys per menys, més'."
},
{
    id: "numalg_004",
    bloc: "numeros_algebra",
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
    id: "numalg_005",
    bloc: "numeros_algebra",
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
    id: "numalg_006",
    bloc: "numeros_algebra",
    pregunta: "Per calcular 3/5 de 50, quin procediment és el correcte?",
    opcions: [
        { id: "a", text: "Sumar 3/5 a 50.", correcta: false },
        { id: "b", text: "Dividir 50 entre 5, i el resultat multiplicar-lo per 3.", correcta: true },
        { id: "c", text: "Multiplicar 50 per 5 i dividir-ho entre 3.", correcta: false },
        { id: "d", text: "Restar 3/5 de 50.", correcta: false }
    ],
    explicacio: "Per fer la fracció d'un nombre, es divideix pel de baix (denominador) i es multiplica pel de dalt (numerador)."
},
{
    id: "numalg_007",
    bloc: "numeros_algebra",
    pregunta: "Quina expressió representa 'el doble d'un nombre més cinc'?",
    opcions: [
        { id: "a", text: "2(x+5)", correcta: false },
        { id: "b", text: "2x + 5", correcta: true },
        { id: "c", text: "x² + 5", correcta: false },
        { id: "d", text: "5x + 2", correcta: false }
    ],
    explicacio: "El 'doble d'un nombre' es tradueix com a '2x', i 'més cinc' com a '+5'."
},
{
    id: "numalg_008",
    bloc: "numeros_algebra",
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
    id: "numalg_009",
    bloc: "numeros_algebra",
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
    id: "numalg_010",
    bloc: "numeros_algebra",
    pregunta: "Per resoldre l'equació x + 8 = 3, quin procediment segueixes?",
    opcions: [
        { id: "a", text: "Restar 3 de 8.", correcta: false },
        { id: "b", text: "Passar el 8 que suma a l'altre costat restant.", correcta: true },
        { id: "c", text: "Sumar 8 i 3.", correcta: false },
        { id: "d", text: "Passar el 8 que suma a l'altre costat multiplicant.", correcta: false }
    ],
    explicacio: "Per aïllar la 'x', el que suma a un costat passa restant a l'altre. x = 3 - 8."
},
{
    id: "numalg_011",
    bloc: "numeros_algebra",
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
    id: "numalg_012",
    bloc: "numeros_algebra",
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
    id: "numalg_013",
    bloc: "numeros_algebra",
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
    id: "numalg_014",
    bloc: "numeros_algebra",
    pregunta: "Quin és el resultat de l'operació 7 - (+10)?",
    opcions: [
        { id: "a", text: "17", correcta: false },
        { id: "b", text: "-3", correcta: true },
        { id: "c", text: "3", correcta: false },
        { id: "d", text: "-17", correcta: false }
    ],
    explicacio: "Restar un positiu és el mateix que restar normal. 7 - 10 = -3."
},
{
    id: "numalg_015",
    bloc: "numeros_algebra",
    pregunta: "Per multiplicar dues fraccions, quin procediment s'ha de seguir?",
    opcions: [
        { id: "a", text: "Posar el mateix denominador i multiplicar els numeradors.", correcta: false },
        { id: "b", text: "Multiplicar els numeradors entre si i els denominadors entre si.", correcta: true },
        { id: "c", text: "Multiplicar en creu.", correcta: false },
        { id: "d", text: "Sumar les dues fraccions.", correcta: false }
    ],
    explicacio: "La multiplicació de fraccions es fa 'en línia recta': el de dalt pel de dalt i el de baix pel de baix."
},
{
    id: "numalg_016",
    bloc: "numeros_algebra",
    pregunta: "Quina equació representa el problema: 'Si a un nombre li sumo 8, obtinc 20'?",
    opcions: [
        { id: "a", text: "x - 8 = 20", correcta: false },
        { id: "b", text: "x + 8 = 20", correcta: true },
        { id: "c", text: "8x = 20", correcta: false },
        { id: "d", text: "x = 20 + 8", correcta: false }
    ],
    explicacio: "El nombre és 'x', i si li sumem 8, el resultat ('obtenim') és igual a 20."
},
{
    id: "numalg_017",
    bloc: "numeros_algebra",
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
    id: "numalg_018",
    bloc: "numeros_algebra",
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
    id: "numalg_019",
    bloc: "numeros_algebra",
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
    id: "numalg_020",
    bloc: "numeros_algebra",
    pregunta: "Com es representa en una sola potència l'operació 5² × 5⁴?",
    opcions: [
        { id: "a", text: "5⁸", correcta: false },
        { id: "b", text: "5⁶", correcta: true },
        { id: "c", text: "25⁶", correcta: false },
        { id: "d", text: "5²", correcta: false }
    ],
    explicacio: "Per multiplicar potències amb la mateixa base, es deixa la base i se sumen els exponents (2+4=6)."
},

// ========================================
// BLOC 3: GEOMETRIA (15 preguntes)
// ========================================

{
    id: "geo_001",
    bloc: "geometria",
    pregunta: "Per calcular l'àrea d'un trapezi, quina informació necessites obligatòriament?",
    opcions: [
        { id: "a", text: "La longitud dels seus quatre costats.", correcta: false },
        { id: "b", text: "La longitud de les seves dues bases i la seva altura.", correcta: true },
        { id: "c", text: "Només la longitud de la base més llarga i l'altura.", correcta: false },
        { id: "d", text: "La mesura dels seus quatre angles.", correcta: false }
    ],
    explicacio: "La fórmula de l'àrea necessita la base gran, la base petita i l'altura."
},
{
    id: "geo_002",
    bloc: "geometria",
    pregunta: "En un triangle rectangle, com s'aplica correctament el Teorema de Pitàgores?",
    opcions: [
        { id: "a", text: "La suma dels dos catets és igual a la hipotenusa.", correcta: false },
        { id: "b", text: "El quadrat d'un catet és igual a la suma dels altres dos costats.", correcta: false },
        { id: "c", text: "La suma dels quadrats dels catets és igual al quadrat de la hipotenusa.", correcta: true },
        { id: "d", text: "L'àrea del triangle és igual al quadrat de la hipotenusa.", correcta: false }
    ],
    explicacio: "La fórmula és: catet² + catet² = hipotenusa²."
},
{
    id: "geo_003",
    bloc: "geometria",
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
    id: "geo_004",
    bloc: "geometria",
    pregunta: "Quina característica defineix dues rectes com a 'perpendiculars'?",
    opcions: [
        { id: "a", text: "Que no es tallen mai.", correcta: false },
        { id: "b", text: "Que es tallen formant quatre angles rectes (de 90°).", correcta: true },
        { id: "c", text: "Que tenen la mateixa longitud.", correcta: false },
        { id: "d", text: "Que es tallen en un punt qualsevol.", correcta: false }
    ],
    explicacio: "Les rectes perpendiculars formen angles de 90° en el punt on es creuen."
},
{
    id: "geo_005",
    bloc: "geometria",
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
    id: "geo_006",
    bloc: "geometria",
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
    id: "geo_007",
    bloc: "geometria",
    pregunta: "Com es construeix la bisectriu d'un angle?",
    opcions: [
        { id: "a", text: "És una recta que passa pel vèrtex i és perpendicular a un dels costats.", correcta: false },
        { id: "b", text: "És una recta que divideix l'angle en dues parts exactament iguals.", correcta: true },
        { id: "c", text: "És una recta paral·lela a un dels costats de l'angle.", correcta: false },
        { id: "d", text: "És un arc que uneix els dos costats de l'angle.", correcta: false }
    ],
    explicacio: "La bisectriu és com una 'navalla' que talla l'angle en dues meitats perfectes."
},
{
    id: "geo_008",
    bloc: "geometria",
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
    id: "geo_009",
    bloc: "geometria",
    pregunta: "Quin és el procediment per calcular l'àrea d'un quadrat?",
    opcions: [
        { id: "a", text: "Multiplicar el costat per 4.", correcta: false },
        { id: "b", text: "Multiplicar el costat per si mateix (costat²).", correcta: true },
        { id: "c", text: "Sumar dos dels seus costats.", correcta: false },
        { id: "d", text: "Multiplicar el costat per 2.", correcta: false }
    ],
    explicacio: "L'àrea d'un quadrat es calcula com a costat × costat, que és el mateix que costat al quadrat."
},
{
    id: "geo_010",
    bloc: "geometria",
    pregunta: "Com es defineix un angle 'agut'?",
    opcions: [
        { id: "a", text: "És un angle que mesura exactament 90°.", correcta: false },
        { id: "b", text: "És un angle que mesura menys de 90°.", correcta: true },
        { id: "c", text: "És un angle que mesura més de 90°.", correcta: false },
        { id: "d", text: "És un angle que mesura 180°.", correcta: false }
    ],
    explicacio: "Els angles aguts són els 'tancats', que mesuren entre 0° i 90°."
},
{
    id: "geo_011",
    bloc: "geometria",
    pregunta: "Per calcular el volum d'un cub (un ortoedre), quin procediment fas?",
    opcions: [
        { id: "a", text: "Sumar la longitud de totes les seves arestes.", correcta: false },
        { id: "b", text: "Multiplicar la longitud, l'amplada i l'altura.", correcta: true },
        { id: "c", text: "Calcular l'àrea d'una de les seves cares.", correcta: false },
        { id: "d", text: "Multiplicar la longitud de l'aresta per 6.", correcta: false }
    ],
    explicacio: "El volum mesura l'espai que ocupa i es calcula multiplicant les tres dimensions: llarg × ample × alt."
},
{
    id: "geo_012",
    bloc: "geometria",
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
    id: "geo_013",
    bloc: "geometria",
    pregunta: "Com es defineix la 'altura' d'un triangle?",
    opcions: [
        { id: "a", text: "És el costat més llarg del triangle.", correcta: false },
        { id: "b", text: "És la línia perpendicular des d'un vèrtex fins al costat oposat.", correcta: true },
        { id: "c", text: "És la línia que divideix el triangle en dues meitats iguals.", correcta: false },
        { id: "d", text: "És la suma de dos dels seus costats.", correcta: false }
    ],
    explicacio: "L'altura és la distància 'recta' (perpendicular) des de la base fins al punt més alt."
},
{
    id: "geo_014",
    bloc: "geometria",
    pregunta: "Quina característica principal tenen els prismes?",
    opcions: [
        { id: "a", text: "Tenen una base i acaben en punta.", correcta: false },
        { id: "b", text: "Tenen dues bases iguals i paral·leles, i les cares laterals són rectangles.", correcta: true },
        { id: "c", text: "Totes les seves cares són triangles.", correcta: false },
        { id: "d", text: "No tenen cap vèrtex.", correcta: false }
    ],
    explicacio: "Un prisma és com una 'torre' amb dues bases iguals (la de baix i la de dalt)."
},
{
    id: "geo_015",
    bloc: "geometria",
    pregunta: "Per calcular la longitud d'una circumferència, quin procediment és el correcte?",
    opcions: [
        { id: "a", text: "Multiplicar el radi per π.", correcta: false },
        { id: "b", text: "Multiplicar el diàmetre per π.", correcta: true },
        { id: "c", text: "Elevar el radi al quadrat i multiplicar per π.", correcta: false },
        { id: "d", text: "Multiplicar el diàmetre per 2.", correcta: false }
    ],
    explicacio: "La longitud de la 'corda' que forma la circumferència és L = D × π (o L = 2 × π × r)."
},

// ========================================
// BLOC 4: FUNCIONS (15 preguntes)
// ========================================

{
    id: "func_001",
    bloc: "funcions",
    pregunta: "En un gràfic de coordenades, com localitzes el punt (3, 5)?",
    opcions: [
        { id: "a", text: "Em moc 3 posicions cap amunt i 5 a la dreta.", correcta: false },
        { id: "b", text: "Em moc 3 posicions a la dreta i 5 cap amunt.", correcta: true },
        { id: "c", text: "Em moc 3 posicions a l'esquerra i 5 cap avall.", correcta: false },
        { id: "d", text: "Em moc 5 posicions a la dreta i 3 cap amunt.", correcta: false }
    ],
    explicacio: "El primer número (3) és a l'eix horitzontal (X) i el segon (5) és al vertical (Y)."
},
{
    id: "func_002",
    bloc: "funcions",
    pregunta: "En un gràfic que mostra la temperatura al llarg d'un dia, què representa el punt més alt de la línia?",
    opcions: [
        { id: "a", text: "L'hora en què ha començat el dia.", correcta: false },
        { id: "b", text: "La temperatura màxima que s'ha assolit.", correcta: true },
        { id: "c", text: "La temperatura mínima del dia.", correcta: false },
        { id: "d", text: "El moment en què ha acabat el dia.", correcta: false }
    ],
    explicacio: "El punt més alt en l'eix vertical (temperatura) correspon al valor màxim."
},
{
    id: "func_003",
    bloc: "funcions",
    pregunta: "Com es diu l'eix horitzontal en un sistema de coordenades?",
    opcions: [
        { id: "a", text: "Eix Y o eix d'ordenades.", correcta: false },
        { id: "b", text: "Eix X o eix d'abscisses.", correcta: true },
        { id: "c", text: "Eix Z o eix de profunditat.", correcta: false },
        { id: "d", text: "L'origen de coordenades.", correcta: false }
    ],
    explicacio: "L'eix horitzontal és l'eix de les X, també anomenat eix d'abscisses."
},
{
    id: "func_004",
    bloc: "funcions",
    pregunta: "Què representa l'origen de coordenades (0,0)?",
    opcions: [
        { id: "a", text: "Un punt qualsevol del gràfic.", correcta: false },
        { id: "b", text: "El punt on es creuen els dos eixos.", correcta: true },
        { id: "c", text: "El valor màxim del gràfic.", correcta: false },
        { id: "d", text: "El final de l'eix X.", correcta: false }
    ],
    explicacio: "L'origen és el punt de partida, on tant l'eix X com l'eix Y valen zero."
},
{
    id: "func_005",
    bloc: "funcions",
    pregunta: "En un gràfic que relaciona temps i distància, què indica una línia que puja?",
    opcions: [
        { id: "a", text: "Que el temps passa però la distància no canvia.", correcta: false },
        { id: "b", text: "Que la distància augmenta a mesura que passa el temps.", correcta: true },
        { id: "c", text: "Que la distància disminueix.", correcta: false },
        { id: "d", text: "Que el temps va cap enrere.", correcta: false }
    ],
    explicacio: "Si la línia puja, vol dir que el valor de l'eix Y (distància) es fa més gran a mesura que avança l'eix X (temps)."
},
{
    id: "func_006",
    bloc: "funcions",
    pregunta: "Quina és la funció principal d'un gràfic?",
    opcions: [
        { id: "a", text: "Fer que les dades semblin més complicades.", correcta: false },
        { id: "b", text: "Representar visualment la relació entre dues magnituds.", correcta: true },
        { id: "c", text: "Decorar un informe o un treball.", correcta: false },
        { id: "d", text: "Substituir completament les taules de dades.", correcta: false }
    ],
    explicacio: "Un gràfic ens ajuda a veure d'un cop d'ull com canvien les coses, cosa que és difícil de veure en una taula plena de números."
},
{
    id: "func_007",
    bloc: "funcions",
    pregunta: "Per representar una funció, quin és el primer pas que es fa normalment?",
    opcions: [
        { id: "a", text: "Dibuixar una línia a l'atzar.", correcta: false },
        { id: "b", text: "Crear una taula de valors.", correcta: true },
        { id: "c", text: "Escriure la conclusió del gràfic.", correcta: false },
        { id: "d", text: "Pintar els eixos de colors.", correcta: false }
    ],
    explicacio: "La taula de valors ens dona els punts (les coordenades) que després dibuixarem al gràfic."
},
{
    id: "func_008",
    bloc: "funcions",
    pregunta: "En el punt (-4, 2), quin número correspon a l'eix Y?",
    opcions: [
        { id: "a", text: "-4.", correcta: false },
        { id: "b", text: "El número 2.", correcta: true },
        { id: "c", text: "Tots dos.", correcta: false },
        { id: "d", text: "Cap dels dos.", correcta: false }
    ],
    explicacio: "Les coordenades sempre van en ordre (X, Y). El segon número sempre és el de l'eix vertical Y."
},
{
    id: "func_009",
    bloc: "funcions",
    pregunta: "Què és una funció en matemàtiques?",
    opcions: [
        { id: "a", text: "Una operació matemàtica qualsevol.", correcta: false },
        { id: "b", text: "Una relació on a cada valor de sortida (x) li correspon un únic valor d'arribada (y).", correcta: true },
        { id: "c", text: "Un tipus de gràfic amb línies corbes.", correcta: false },
        { id: "d", text: "Un sinònim d'equació.", correcta: false }
    ],
    explicacio: "Una funció és com una 'màquina': tu li poses un número (x) i et torna només un resultat (y)."
},
{
    id: "func_010",
    bloc: "funcions",
    pregunta: "Com es diu el punt on un gràfic talla l'eix Y?",
    opcions: [
        { id: "a", text: "Punt de tall amb l'eix X.", correcta: false },
        { id: "b", text: "Ordenada a l'origen.", correcta: true },
        { id: "c", text: "Vèrtex de la funció.", correcta: false },
        { id: "d", text: "Punt màxim.", correcta: false }
    ],
    explicacio: "El tall amb l'eix d'ordenades (Y) s'anomena ordenada a l'origen."
},
{
    id: "func_011",
    bloc: "funcions",
    pregunta: "En un gràfic de coordenades, quina zona s'anomena 'primer quadrant'?",
    opcions: [
        { id: "a", text: "La zona de baix a l'esquerra (X negativa, Y negativa).", correcta: false },
        { id: "b", text: "La zona de dalt a la dreta (X positiva, Y positiva).", correcta: true },
        { id: "c", text: "La zona de dalt a l'esquerra (X negativa, Y positiva).", correcta: false },
        { id: "d", text: "La zona de baix a la dreta (X positiva, Y negativa).", correcta: false }
    ],
    explicacio: "Els quadrants es compten en sentit contrari a les agulles del rellotge. El primer és el de dalt a la dreta."
},
{
    id: "func_012",
    bloc: "funcions",
    pregunta: "Si un gràfic mostra el nivell d'aigua d'una piscina durant el dia, què significa un tram que baixa?",
    opcions: [
        { id: "a", text: "Que la piscina s'està omplint.", correcta: false },
        { id: "b", text: "Que el nivell de l'aigua està baixant (s'està buidant o evaporant).", correcta: true },
        { id: "c", text: "Que el nivell de l'aigua no canvia.", correcta: false },
        { id: "d", text: "Que fa més calor.", correcta: false }
    ],
    explicacio: "Una línia descendent indica que el valor de l'eix Y (nivell d'aigua) disminueix."
},
{
    id: "func_013",
    bloc: "funcions",
    pregunta: "Quina és la principal diferència entre una representació gràfica i una taula de valors?",
    opcions: [
        { id: "a", text: "No n'hi ha cap, són el mateix.", correcta: false },
        { id: "b", text: "La representació gràfica permet veure la tendència visualment, la taula no.", correcta: true },
        { id: "c", text: "La taula de valors té més informació que el gràfic.", correcta: false },
        { id: "d", text: "El gràfic només es pot fer si tens una taula de valors.", correcta: false }
    ],
    explicacio: "El gràfic ens dóna una 'foto' global i ràpida de com es relacionen les dades."
},
{
    id: "func_014",
    bloc: "funcions",
    pregunta: "Com es diu l'eix vertical en un sistema de coordenades?",
    opcions: [
        { id: "a", text: "Eix X o eix d'abscisses.", correcta: false },
        { id: "b", text: "Eix Y o eix d'ordenades.", correcta: true },
        { id: "c", text: "Eix de simetria.", correcta: false },
        { id: "d", text: "Línia de funció.", correcta: false }
    ],
    explicacio: "L'eix vertical és l'eix de les Y, també anomenat eix d'ordenades."
},
{
    id: "func_015",
    bloc: "funcions",
    pregunta: "Què vol dir que una funció és 'creixent' en un interval?",
    opcions: [
        { id: "a", text: "Que la línia del gràfic és recta.", correcta: false },
        { id: "b", text: "Que en avançar cap a la dreta en l'eix X, la línia del gràfic puja.", correcta: true },
        { id: "c", text: "Que la línia del gràfic és corba.", correcta: false },
        { id: "d", text: "Que la línia del gràfic baixa.", correcta: false }
    ],
    explicacio: "Una funció creix si, a mesura que augmenta la X, també augmenta la Y."
},

// ========================================
// BLOC 5: ESTADÍSTICA I PROBABILITAT (15 preguntes)
// ========================================

{
    id: "est_001",
    bloc: "estadistica",
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
    id: "est_002",
    bloc: "estadistica",
    pregunta: "En una bossa hi ha 4 boles vermelles i 1 bola blava. Quin procediment et dona la probabilitat de treure una bola blava?",
    opcions: [
        { id: "a", text: "Dividir el nombre de boles blaves pel nombre de boles vermelles (1/4).", correcta: false },
        { id: "b", text: "Dividir el nombre de boles blaves pel nombre total de boles (1/5).", correcta: true },
        { id: "c", text: "Restar les boles blaves de les vermelles (4 - 1).", correcta: false },
        { id: "d", text: "Multiplicar el nombre de boles de cada color (4 * 1).", correcta: false }
    ],
    explicacio: "La probabilitat es calcula dividint els 'casos favorables' (boles blaves) entre els 'casos possibles' (totes les boles)."
},
{
    id: "est_003",
    bloc: "estadistica",
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
    id: "est_004",
    bloc: "estadistica",
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
    id: "est_005",
    bloc: "estadistica",
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
    id: "est_006",
    bloc: "estadistica",
    pregunta: "En una enquesta, què és la 'mostra'?",
    opcions: [
        { id: "a", text: "Totes les persones a qui podries preguntar.", correcta: false },
        { id: "b", text: "Un petit grup representatiu de totes les persones a qui vols estudiar.", correcta: true },
        { id: "c", text: "Les preguntes de l'enquesta.", correcta: false },
        { id: "d", text: "El resultat final de l'enquesta.", correcta: false }
    ],
    explicacio: "Com que no es pot preguntar a tothom (població), s'agafa un grup més petit (mostra) que representi al total."
},
{
    id: "est_007",
    bloc: "estadistica",
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
    id: "est_008",
    bloc: "estadistica",
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
    id: "est_009",
    bloc: "estadistica",
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
    id: "est_010",
    bloc: "estadistica",
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
    id: "est_011",
    bloc: "estadistica",
    pregunta: "Què és la 'freqüència relativa'?",
    opcions: [
        { id: "a", text: "El nombre total de dades.", correcta: false },
        { id: "b", text: "La proporció de vegades que apareix una dada respecte al total.", correcta: true },
        { id: "c", text: "El nombre de vegades que surt una dada.", correcta: false },
        { id: "d", text: "La dada més important.", correcta: false }
    ],
    explicacio: "Es calcula dividint la freqüència absoluta entre el total de dades. Sovint es dóna en percentatge."
},
{
    id: "est_012",
    bloc: "estadistica",
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
    id: "est_013",
    bloc: "estadistica",
    pregunta: "Quina és la principal diferència entre una variable qualitativa i una quantitativa?",
    opcions: [
        { id: "a", text: "No n'hi ha cap, són el mateix.", correcta: false },
        { id: "b", text: "La quantitativa es mesura amb números i la qualitativa amb paraules.", correcta: true },
        { id: "c", text: "La qualitativa és més important que la quantitativa.", correcta: false },
        { id: "d", text: "La quantitativa s'usa en ciències i la qualitativa en lletres.", correcta: false }
    ],
    explicacio: "Quantitativa ve de 'quantitat' (números) i qualitativa ve de 'qualitat' (categories)."
},
{
    id: "est_014",
    bloc: "estadistica",
    pregunta: "Per organitzar un gran nombre de dades en una taula de freqüències, quin és el primer pas?",
    opcions: [
        { id: "a", text: "Calcular la mitjana directament.", correcta: false },
        { id: "b", text: "Agrupar les dades en intervals o classes.", correcta: true },
        { id: "c", text: "Fer un gràfic.", correcta: false },
        { id: "d", text: "Ordenar les dades de més gran a més petita.", correcta: false }
    ],
    explicacio: "Quan hi ha moltes dades diferents, agrupar-les en intervals (ex: de 0 a 10, de 10 a 20...) fa que la taula sigui més fàcil d'interpretar."
},
{
    id: "est_015",
    bloc: "estadistica",
    pregunta: "Què mesura el 'rang' o 'recorregut' d'un conjunt de dades?",
    opcions: [
        { id: "a", text: "El valor central de les dades.", correcta: false },
        { id: "b", text: "La dispersió de les dades, és a dir, la diferència entre el valor màxim i el mínim.", correcta: true },
        { id: "c", text: "El valor que més es repeteix.", correcta: false },
        { id: "d", text: "El nombre total de dades.", correcta: false }
    ],
    explicacio: "El rang ens dóna una idea de com d'escampades estan les dades."
}
];
// Verificació: 75 preguntes total
// Bloc 1 (Problemes): 15 preguntes
// Bloc 2 (Números): 20 preguntes
// Bloc 3 (Mesura): 15 preguntes
// Bloc 4 (Geometria): 15 preguntes
// Bloc 5 (Estadística): 10 preguntes
console.log(Total preguntes: ${questionBank.length});
console.log(Bloc problemes: ${questionBank.filter(q => q.bloc === 'problemes').length});
console.log(Bloc números: ${questionBank.filter(q => q.bloc === 'numeros').length});
console.log(Bloc mesura: ${questionBank.filter(q => q.bloc === 'mesura').length});
console.log(Bloc geometria: ${questionBank.filter(q => q.bloc === 'geometria').length});
console.log(Bloc estadística: ${questionBank.filter(q => q.bloc === 'estadistica').length});
