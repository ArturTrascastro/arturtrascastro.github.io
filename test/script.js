/**
 * TEST DE MATEMÀTIQUES - APLICACIÓ PRINCIPAL
 * ==========================================
 * 
 * Aplicació per a l'avaluació diagnòstica de competències matemàtiques
 * Destinataris: Alumnes de 2n ESO (inici de curs)
 * Continguts avaluats: Nivell 1r ESO
 * 
 * Funcionalitats:
 * - Formulari d'informació personal
 * - Test de 20 preguntes aleatòries de 5 blocs matemàtics
 * - Temporitzador de 20 minuts
 * - Persistència de dades amb Google Forms
 * - Resultats detallats per bloc
 */

// ========================================
// CONFIGURACIÓ GLOBAL
// ========================================

// Configuració del test (2n ESO)
const TEST_CONFIG = {
    totalQuestions: 16,
    timeLimit: 20 * 60, // 20 minuts en segons
    blocks: {
        calcul: { total: 4 },
        problemes: { total: 4 },
        sentit_numeric: { total: 4 },
        espai_mesura: { total: 2 },
        sentit_estocastic: { total: 2 }
    },
    questionTypes: ['directa', 'competencial']
};

// Etiquetes amigables per a cada bloc (fallback a capitalitzar si no existeix)
const BLOCK_LABELS = {
    calcul: 'Càlcul',
    problemes: 'Resolució de problemes',
    sentit_numeric: 'Sentit numèric',
    espai_mesura: 'Espai i mesura',
    sentit_estocastic: 'Sentit estocàstic',
    // Compatibilitat amb possibles claus antigues
    estadistica: 'Estadística i probabilitat',
    funcions: 'Funcions',
    geometria: 'Geometria',
    numeros_algebra: 'Números i àlgebra',
    processos: 'Processos i mètodes',
    numeros: 'Números i operacions',
    mesura: 'Mesura i magnituds'
};
const QUESTION_TYPE_LABELS = {
    directa: 'Directes',
    competencial: 'Competencials'
};

const BLOCK_KEYS = Object.keys(TEST_CONFIG.blocks);
const QUESTION_TYPE_KEYS = TEST_CONFIG.questionTypes;

BLOCK_KEYS.forEach((blockKey) => {
    const total = TEST_CONFIG.blocks[blockKey].total;
    const base = Math.floor(total / QUESTION_TYPE_KEYS.length);
    const remainder = total - base * QUESTION_TYPE_KEYS.length;
    const perType = {};
    QUESTION_TYPE_KEYS.forEach((type, index) => {
        perType[type] = base + (index < remainder ? 1 : 0);
    });
    TEST_CONFIG.blocks[blockKey].perType = perType;
});

const TOTAL_REQUIRED_QUESTIONS = BLOCK_KEYS.reduce((sum, key) => sum + TEST_CONFIG.blocks[key].total, 0);
if (TOTAL_REQUIRED_QUESTIONS !== TEST_CONFIG.totalQuestions) {
    console.warn('Configuració inconsistent: totalQuestions no coincideix amb la suma per blocs');
}


// Configuració de Google Forms (cal personalitzar amb els teus identificadors)
// Opcional: URL d'un Web App de Google Apps Script per enviar dades en JSON sense mapatges d'entries
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbycMGH0jx6ms7nX5lUiL2b3IoTXRE9AgLj_ngdOJ8E6Chwl-FdprF7Me9M0zDngxO0Z/exec"; // Ex.: "https://script.google.com/macros/s/AKfycbx.../exec" (deixar buit per usar Google Forms)

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/[SUBSTITUIR_PER_ID_REAL]/formResponse";
const GOOGLE_FORM_ENTRIES = {
    // Dades bàsiques (valors totals)
    temps: "entry.MANUALMENT",
    totalsEncerts: "entry.MANUALMENT",
    totalsErrors: "entry.MANUALMENT",
    totalsNoRespostes: "entry.MANUALMENT",
    totalsRespostes: "entry.MANUALMENT",
    totalsPunts: "entry.MANUALMENT",
    totalsNota10: "entry.MANUALMENT",

    // Resultats per tipus de pregunta
    directaPreguntes: "entry.MANUALMENT",
    directaRespostes: "entry.MANUALMENT",
    directaEncerts: "entry.MANUALMENT",
    directaErrors: "entry.MANUALMENT",
    directaNoRespostes: "entry.MANUALMENT",
    competencialPreguntes: "entry.MANUALMENT",
    competencialRespostes: "entry.MANUALMENT",
    competencialEncerts: "entry.MANUALMENT",
    competencialErrors: "entry.MANUALMENT",
    competencialNoRespostes: "entry.MANUALMENT",

    // Resultats per bloc (valors totals)
    calculPreguntes: "entry.MANUALMENT",
    calculRespostes: "entry.MANUALMENT",
    calculEncerts: "entry.MANUALMENT",
    calculErrors: "entry.MANUALMENT",
    calculNoRespostes: "entry.MANUALMENT",
    problemesPreguntes: "entry.MANUALMENT",
    problemesRespostes: "entry.MANUALMENT",
    problemesEncerts: "entry.MANUALMENT",
    problemesErrors: "entry.MANUALMENT",
    problemesNoRespostes: "entry.MANUALMENT",
    sentit_numericPreguntes: "entry.MANUALMENT",
    sentit_numericRespostes: "entry.MANUALMENT",
    sentit_numericEncerts: "entry.MANUALMENT",
    sentit_numericErrors: "entry.MANUALMENT",
    sentit_numericNoRespostes: "entry.MANUALMENT",
    espai_mesuraPreguntes: "entry.MANUALMENT",
    espai_mesuraRespostes: "entry.MANUALMENT",
    espai_mesuraEncerts: "entry.MANUALMENT",
    espai_mesuraErrors: "entry.MANUALMENT",
    espai_mesuraNoRespostes: "entry.MANUALMENT",
    sentit_estocasticPreguntes: "entry.MANUALMENT",
    sentit_estocasticRespostes: "entry.MANUALMENT",
    sentit_estocasticEncerts: "entry.MANUALMENT",
    sentit_estocasticErrors: "entry.MANUALMENT",
    sentit_estocasticNoRespostes: "entry.MANUALMENT",

    // Resultats per bloc i tipus
    calculDirectaPreguntes: "entry.MANUALMENT",
    calculDirectaRespostes: "entry.MANUALMENT",
    calculDirectaEncerts: "entry.MANUALMENT",
    calculDirectaErrors: "entry.MANUALMENT",
    calculDirectaNoRespostes: "entry.MANUALMENT",
    calculCompetencialPreguntes: "entry.MANUALMENT",
    calculCompetencialRespostes: "entry.MANUALMENT",
    calculCompetencialEncerts: "entry.MANUALMENT",
    calculCompetencialErrors: "entry.MANUALMENT",
    calculCompetencialNoRespostes: "entry.MANUALMENT",
    problemesDirectaPreguntes: "entry.MANUALMENT",
    problemesDirectaRespostes: "entry.MANUALMENT",
    problemesDirectaEncerts: "entry.MANUALMENT",
    problemesDirectaErrors: "entry.MANUALMENT",
    problemesDirectaNoRespostes: "entry.MANUALMENT",
    problemesCompetencialPreguntes: "entry.MANUALMENT",
    problemesCompetencialRespostes: "entry.MANUALMENT",
    problemesCompetencialEncerts: "entry.MANUALMENT",
    problemesCompetencialErrors: "entry.MANUALMENT",
    problemesCompetencialNoRespostes: "entry.MANUALMENT",
    sentit_numericDirectaPreguntes: "entry.MANUALMENT",
    sentit_numericDirectaRespostes: "entry.MANUALMENT",
    sentit_numericDirectaEncerts: "entry.MANUALMENT",
    sentit_numericDirectaErrors: "entry.MANUALMENT",
    sentit_numericDirectaNoRespostes: "entry.MANUALMENT",
    sentit_numericCompetencialPreguntes: "entry.MANUALMENT",
    sentit_numericCompetencialRespostes: "entry.MANUALMENT",
    sentit_numericCompetencialEncerts: "entry.MANUALMENT",
    sentit_numericCompetencialErrors: "entry.MANUALMENT",
    sentit_numericCompetencialNoRespostes: "entry.MANUALMENT",
    espai_mesuraDirectaPreguntes: "entry.MANUALMENT",
    espai_mesuraDirectaRespostes: "entry.MANUALMENT",
    espai_mesuraDirectaEncerts: "entry.MANUALMENT",
    espai_mesuraDirectaErrors: "entry.MANUALMENT",
    espai_mesuraDirectaNoRespostes: "entry.MANUALMENT",
    espai_mesuraCompetencialPreguntes: "entry.MANUALMENT",
    espai_mesuraCompetencialRespostes: "entry.MANUALMENT",
    espai_mesuraCompetencialEncerts: "entry.MANUALMENT",
    espai_mesuraCompetencialErrors: "entry.MANUALMENT",
    espai_mesuraCompetencialNoRespostes: "entry.MANUALMENT",
    sentit_estocasticDirectaPreguntes: "entry.MANUALMENT",
    sentit_estocasticDirectaRespostes: "entry.MANUALMENT",
    sentit_estocasticDirectaEncerts: "entry.MANUALMENT",
    sentit_estocasticDirectaErrors: "entry.MANUALMENT",
    sentit_estocasticDirectaNoRespostes: "entry.MANUALMENT",
    sentit_estocasticCompetencialPreguntes: "entry.MANUALMENT",
    sentit_estocasticCompetencialRespostes: "entry.MANUALMENT",
    sentit_estocasticCompetencialEncerts: "entry.MANUALMENT",
    sentit_estocasticCompetencialErrors: "entry.MANUALMENT",
    sentit_estocasticCompetencialNoRespostes: "entry.MANUALMENT",

    // Dades contextuals ampliades
    centrePrimaria: "entry.MANUALMENT",
    confiancaInicial: "entry.MANUALMENT",
    horesMobil: "entry.MANUALMENT",
    horesSon: "entry.MANUALMENT",
    horesEstudiMates: "entry.MANUALMENT",
    reforcMates: "entry.MANUALMENT",
    ansietatMates: "entry.MANUALMENT",

    // Analytics conductuals (JSON string)
    tempsPerPregunta: "entry.MANUALMENT",
    canvisResposta: "entry.MANUALMENT",
    confiancaPerPregunta: "entry.MANUALMENT",
    dificultatPercebuda: "entry.MANUALMENT",
    estrategiesResolucio: "entry.MANUALMENT",
    patronsNavegacio: "entry.MANUALMENT",
    respostesSeleccionades: "entry.MANUALMENT",

    // Metadades tècniques
    sistemaOperatiu: "entry.MANUALMENT",
    navegador: "entry.MANUALMENT",
    resolucio: "entry.MANUALMENT",
    horaInici: "entry.MANUALMENT",
    diaSetmana: "entry.MANUALMENT"
};

// Mapatge de blocs → clau de formulari (només s'enviaran si existeixen al formulari)
const BLOCK_TO_FORM_ENTRY = {
    calcul: 'calcul',
    problemes: 'problemes',
    sentit_numeric: 'sentit_numeric',
    espai_mesura: 'espai_mesura',
    sentit_estocastic: 'sentit_estocastic'
};

function isGoogleFormConfigured() {
    return GOOGLE_FORM_ACTION_URL && !GOOGLE_FORM_ACTION_URL.includes('[SUBSTITUIR') &&
           !Object.values(GOOGLE_FORM_ENTRIES).some(v => String(v).includes('PLACEHOLDER'));
}

function isWebAppConfigured() {
    return WEB_APP_URL && WEB_APP_URL.startsWith('https://');
}

// ========================================
// VARIABLES GLOBALS
// ========================================

let currentSection = 'student-info';
let studentData = {};
let testQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let startTime = null;
let timerInterval = null;
let realTimeAnalyticsInterval = null;
let remainingTime = TEST_CONFIG.timeLimit;

// Variables per tracking conductual avançat
let questionStartTime = null;
let questionTimeTracking = {};        // temps per cada pregunta
let answerChangeTracking = {};        // canvis de resposta per pregunta
let confidenceTracking = {};          // confiança per pregunta
let difficultyTracking = {};          // dificultat percebuda per pregunta
let strategyTracking = {};            // estratègies utilitzades per pregunta
let navigationPatterns = [];          // patrons de navegació
let technicalMetadata = {};           // metadades tècniques del dispositiu
let currentQuestionMetrics = {};      // mètriques de la pregunta actual
let initialAnswerTimeTracking = {};   // temps fins a la primera resposta (s)
let attemptId = null;                 // identificador únic de l'intent

// ========================================
// ELEMENTS DEL DOM
// ========================================

// Seccions principals
const sections = {
    studentInfo: document.getElementById('student-info'),
    testSection: document.getElementById('test-section'),
    resultsSection: document.getElementById('results-section')
};

// Formulari d'estudiant
const studentForm = document.getElementById('student-form');

// Elements del test
const questionNumber = document.getElementById('question-number');
const questionBlock = document.getElementById('question-block');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
// const estimatedTime = document.getElementById('estimated-time'); // eliminat: no es mostra temps estimat

// Timer i progrés
const timerDisplay = document.getElementById('timer');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

// Resultats
const resultsContent = document.getElementById('results-content');
const reviewBtn = document.getElementById('review-btn');
const newTestBtn = document.getElementById('new-test-btn');
const dataStatus = document.getElementById('data-status');

// Modal d'ajuda
const helpModal = document.getElementById('help-modal');
const helpBtn = document.getElementById('help-btn');
const closeHelp = document.getElementById('close-help');

// Elements de mètriques pedagògiques
const questionMetrics = document.getElementById('question-metrics');
const questionConfidence = document.getElementById('question-confidence');
const questionDifficulty = document.getElementById('question-difficulty');
const solutionStrategy = document.getElementById('solution-strategy');
const confidenceValue = document.getElementById('confidence-value');
const qConfidenceValue = document.getElementById('q-confidence-value');
const qDifficultyValue = document.getElementById('q-difficulty-value');

// Elements d'analytics en temps real
const analyticsMini = document.getElementById('analytics-mini');
const currentTimeDisplay = document.getElementById('current-time');
const changesCountDisplay = document.getElementById('changes-count');

// ========================================
// FUNCIONS D'INICIALITZACIÓ
// ========================================

/**
 * Inicialitza l'aplicació quan es carrega la pàgina
 */
function initializeApp() {
    console.log('Inicialitzant aplicació del test de matemàtiques...');
    
    // Recollir metadades tècniques
    collectTechnicalMetadata();
    
    // Configurar event listeners
    setupEventListeners();
    
    // Mostrar secció inicial
    showSection('student-info');
    
    // Inicialitzar progrés
    updateProgress();
    
    console.log('Aplicació inicialitzada correctament');
}

/**
 * Recull metadades tècniques del dispositiu i navegador
 */
function collectTechnicalMetadata() {
    technicalMetadata = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        windowSize: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        sessionStart: new Date().toISOString(),
        dayOfWeek: new Date().getDay(), // 0=Sunday, 1=Monday, etc.
        hourOfDay: new Date().getHours()
    };
    
    console.log('Metadades tècniques recollides:', technicalMetadata);
}

/**
 * Configura tots els event listeners de l'aplicació
 */
function setupEventListeners() {
    // Formulari d'estudiant
    studentForm.addEventListener('submit', handleStudentFormSubmit);
    
    // Navegació del test
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    
    // Resultats
    reviewBtn.addEventListener('click', reviewAnswers);
    newTestBtn.addEventListener('click', startNewTest);
    
    // Modal d'ajuda
    helpBtn.addEventListener('click', () => showModal(helpModal));
    closeHelp.addEventListener('click', () => hideModal(helpModal));
    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) hideModal(helpModal);
    });
    
    // Teclat shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Event listeners per a mètriques pedagògiques
    const mathConfidenceSlider = document.getElementById('math-confidence');
    if (confidenceValue && mathConfidenceSlider) {
        mathConfidenceSlider.addEventListener('input', (e) => {
            confidenceValue.textContent = e.target.value;
        });
    }
    
    if (qConfidenceValue && questionConfidence) {
        questionConfidence.addEventListener('input', (e) => {
            qConfidenceValue.textContent = e.target.value;
        });
    }
    
    if (qDifficultyValue && questionDifficulty) {
        questionDifficulty.addEventListener('input', (e) => {
            qDifficultyValue.textContent = e.target.value;
        });
    }
    
    console.log('Event listeners configurats');
}

// ========================================
// GESTIÓ DE SECCIONS
// ========================================

/**
 * Mostra una secció específica i amaga les altres
 */
function showSection(sectionName) {
    // Amagar totes les seccions
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la secció solicitada
    let targetSection;
    if (sectionName === 'student-info') {
        targetSection = sections.studentInfo;
    } else if (sectionName === 'test-section') {
        targetSection = sections.testSection;
    } else if (sectionName === 'results-section') {
        targetSection = sections.resultsSection;
    }
    
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        console.log(`Mostrant secció: ${sectionName}`);
    }
}

// ========================================
// GESTIÓ DEL FORMULARI D'ESTUDIANT
// ========================================

/**
 * Gestiona l'enviament del formulari d'informació personal
 */
function handleStudentFormSubmit(e) {
    e.preventDefault();
    
    // Recollir dades del formulari
    const formData = new FormData(studentForm);
    studentData = {
        // Dades bàsiques
        age: parseInt(formData.get('studentAge')),
        school: formData.get('studentSchool') || 'No especificat',
        mathLevel: formData.get('mathLevel'),
        
        // Dades contextuals ampliades
        mathConfidence: parseInt(formData.get('mathConfidence')),
        mobileUsage: formData.get('mobileUsage') ? parseInt(formData.get('mobileUsage')) : null,
        sleepHours: formData.get('sleepHours') ? parseInt(formData.get('sleepHours')) : null,
        studyHours: formData.get('studyHours') ? parseInt(formData.get('studyHours')) : null,
        tutoring: formData.get('tutoring') || 'cap',
        mathAnxiety: formData.get('mathAnxiety') ? parseInt(formData.get('mathAnxiety')) : null
    };
    
    console.log('Dades de l\'estudiant recollides:', studentData);
    
    // Validar dades essencials
    if (!studentData.age || !studentData.school || !studentData.mathLevel || !studentData.mathConfidence) {
        alert('Si us plau, emplena tots els camps obligatoris marcats amb *');
        return;
    }
    
    // Inicialitzar test
    initializeTest();
}

// ========================================
// GESTIÓ DEL TEST
// ========================================

/**
 * Inicialitza el test: selecciona preguntes i prepara la interfície
 */
function initializeTest() {
    console.log('Inicialitzant test...');
    
    // Validar disponibilitat mínima de preguntes per bloc i informar si cal
    validateDisponibilitatBlocs();
    
    // Seleccionar preguntes aleatòries
    testQuestions = selectRandomQuestions();
    console.log(`Seleccionades ${testQuestions.length} preguntes aleatòries`);
    
    // Reiniciar variables del test
    attemptId = (window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : `att-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    currentQuestionIndex = 0;
    userAnswers = {};
    startTime = Date.now();
    remainingTime = TEST_CONFIG.timeLimit;

    // Reiniciar objectes de tracking
    questionTimeTracking = {};
    answerChangeTracking = {};
    confidenceTracking = {};
    difficultyTracking = {};
    strategyTracking = {};
    navigationPatterns = [];
    initialAnswerTimeTracking = {};
    currentQuestionMetrics = {};

    if (realTimeAnalyticsInterval) {
        clearInterval(realTimeAnalyticsInterval);
        realTimeAnalyticsInterval = null;
    }

    // Iniciar temporitzador
    startTimer();

    // Iniciar tracking en temps real
    startRealTimeTracking();
    
    // Mostrar primera pregunta
    displayQuestion(0);
    
    // Canviar a la secció del test
    showSection('test-section');
    
    console.log('Test inicialitzat correctament');
}

/**
 * Valida la disponibilitat de preguntes per a cada bloc configurat
 * Mostra un avís si algun bloc no té suficients preguntes
 */
function validateDisponibilitatBlocs() {
    const summary = {};
    BLOCK_KEYS.forEach((blockKey) => {
        summary[blockKey] = {
            total: 0,
            perType: QUESTION_TYPE_KEYS.reduce((acc, type) => {
                acc[type] = 0;
                return acc;
            }, {})
        };
    });

    questionBank.forEach((q) => {
        if (!summary[q.bloc]) return;
        summary[q.bloc].total += 1;
        if (summary[q.bloc].perType.hasOwnProperty(q.tipus)) {
            summary[q.bloc].perType[q.tipus] += 1;
        }
    });

    const warnings = [];

    BLOCK_KEYS.forEach((blockKey) => {
        const requirement = TEST_CONFIG.blocks[blockKey];
        const available = summary[blockKey] || { total: 0, perType: {} };
        if (available.total < requirement.total) {
            warnings.push(`${BLOCK_LABELS[blockKey] || blockKey}: ${available.total}/${requirement.total}`);
        }
        QUESTION_TYPE_KEYS.forEach((type) => {
            const needed = requirement.perType[type] || 0;
            if (needed <= 0) return;
            const got = available.perType[type] || 0;
            if (got < needed) {
                warnings.push(`${BLOCK_LABELS[blockKey] || blockKey} · ${QUESTION_TYPE_LABELS[type] || type}: ${got}/${needed}`);
            }
        });
    });

    if (warnings.length > 0) {
        alert('Avís: alguns blocs o tipus tenen poques preguntes disponibles:\n' + warnings.join('\n'));
        console.warn('Disponibilitat insuficient per blocs/tipus:', summary);
    }
}

function shuffleArray(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

/**
 * Selecciona preguntes aleatòries seguint la distribució per blocs i tipus
 */
function selectRandomQuestions() {
    const selected = [];
    const usedIds = new Set();
    const warnings = [];

    BLOCK_KEYS.forEach((blockKey) => {
        const requirement = TEST_CONFIG.blocks[blockKey];
        const blockQuestions = questionBank.filter((q) => q.bloc === blockKey);
        let blockSelectedCount = 0;

        QUESTION_TYPE_KEYS.forEach((type) => {
            const needed = requirement.perType[type] || 0;
            if (needed <= 0) return;

            const pool = shuffleArray(blockQuestions.filter((q) => q.tipus === type && !usedIds.has(q.id)));
            if (pool.length < needed) {
                warnings.push(`Bloc ${BLOCK_LABELS[blockKey] || blockKey} · ${QUESTION_TYPE_LABELS[type] || type}: ${pool.length}/${needed}`);
            }

            pool.slice(0, Math.min(needed, pool.length)).forEach((question) => {
                selected.push(question);
                usedIds.add(question.id);
                blockSelectedCount += 1;
            });
        });

        const stillNeeded = Math.max(0, requirement.total - blockSelectedCount);
        if (stillNeeded > 0) {
            const fallbackPool = shuffleArray(blockQuestions.filter((q) => !usedIds.has(q.id)));
            fallbackPool.slice(0, stillNeeded).forEach((question) => {
                selected.push(question);
                usedIds.add(question.id);
            });
        }
    });

    if (selected.length < TEST_CONFIG.totalQuestions) {
        const remainingPool = shuffleArray(questionBank.filter((q) => !usedIds.has(q.id)));
        remainingPool.slice(0, TEST_CONFIG.totalQuestions - selected.length).forEach((question) => {
            selected.push(question);
            usedIds.add(question.id);
        });
    }

    if (warnings.length) {
        console.warn('Avisos durant la selecció de preguntes:', warnings);
    }

    if (selected.length > TEST_CONFIG.totalQuestions) {
        return shuffleArray(selected).slice(0, TEST_CONFIG.totalQuestions);
    }

    return shuffleArray(selected);
}


/**
 * Mostra una pregunta específica
 */
function displayQuestion(index) {
    const question = testQuestions[index];
    if (!question) {
        // Si no hi ha més preguntes disponibles, finalitzar el test de forma segura
        console.warn('No s\'ha trobat la pregunta sol·licitada. Finalitzant test.');
        finishTest();
        return;
    }
    
    // Guardar temps de la pregunta anterior si n'hi havia una
    if (questionStartTime && currentQuestionIndex !== index) {
        saveQuestionMetrics(currentQuestionIndex);
    }
    
    // Inicialitzar tracking per a aquesta pregunta
    questionStartTime = Date.now();
    currentQuestionMetrics = {
        startTime: questionStartTime,
        questionId: question.id,
        bloc: question.bloc,
        nivel: question.nivell,
        answerChanges: 0,
        initialAnswerTime: null,
        totalViewTime: 0
    };
    
    // Registrar patró de navegació
    navigationPatterns.push({
        timestamp: Date.now(),
        action: 'view_question',
        questionIndex: index,
        questionId: question.id,
        fromIndex: currentQuestionIndex !== index ? currentQuestionIndex : null
    });
    
    // Actualitzar informació de la pregunta
    const totalCount = testQuestions.length || TEST_CONFIG.totalQuestions;
    questionNumber.textContent = `Pregunta ${index + 1} de ${totalCount}`;
    const blockLabel = BLOCK_LABELS[question.bloc] || capitalizeFirst(question.bloc.replace(/_/g, ' '));
    questionBlock.textContent = blockLabel;
    questionText.textContent = question.pregunta;
    
    // No es mostra temps estimat per pregunta
    
    // Generar opcions de resposta
    renderAnswerOptions(question, index);
    
    // Mostrar/ocultar mètriques pedagògiques segons si ja ha contestat
    const hasAnswered = userAnswers.hasOwnProperty(index);
    if (hasAnswered) {
        showQuestionMetrics();
        loadQuestionMetricsValues(index);
    } else {
        hideQuestionMetrics();
        if (solutionStrategy) {
            solutionStrategy.value = '';
        }
    }
    
    // Actualitzar botons de navegació
    updateNavigationButtons();
    
    // Actualitzar barra de progrés
    updateProgress();
    
    console.log(`Mostrant pregunta ${index + 1}: ${question.id}`);
}

/**
 * Renderitza les opcions de resposta per a una pregunta
 */
function renderAnswerOptions(question, questionIndex) {
    answerOptions.innerHTML = '';
    
    question.opcions.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        
        const optionId = `q${questionIndex}_option${optionIndex}`;
        const isSelected = userAnswers[questionIndex] === option.id;
        
        optionDiv.innerHTML = `
            <input type="radio" 
                   id="${optionId}" 
                   name="question_${questionIndex}" 
                   value="${option.id}"
                   ${isSelected ? 'checked' : ''}>
            <label for="${optionId}">${option.text}</label>
        `;
        
        // Event listener per a la selecció
        const radioInput = optionDiv.querySelector('input');
        radioInput.addEventListener('change', () => {
            // Tracking de canvis de resposta
            const previousAnswer = userAnswers[questionIndex];
            userAnswers[questionIndex] = option.id;
            
            if (previousAnswer && previousAnswer !== option.id) {
                // Increment canvis de resposta
                answerChangeTracking[questionIndex] = (answerChangeTracking[questionIndex] || 0) + 1;
                currentQuestionMetrics.answerChanges++;
                
                // Registrar canvi
                navigationPatterns.push({
                    timestamp: Date.now(),
                    action: 'change_answer',
                    questionIndex: questionIndex,
                    fromAnswer: previousAnswer,
                    toAnswer: option.id
                });
            } else if (!previousAnswer) {
                // Primera resposta
                currentQuestionMetrics.initialAnswerTime = Date.now() - questionStartTime;
                initialAnswerTimeTracking[questionIndex] = Math.round(currentQuestionMetrics.initialAnswerTime / 1000);
                showQuestionMetrics();
            }
            
            updateNavigationButtons();
            console.log(`Resposta seleccionada: Q${questionIndex + 1} → ${option.id}`);
        });
        
        answerOptions.appendChild(optionDiv);
    });
}

/**
 * Actualitza l'estat dels botons de navegació
 */
function updateNavigationButtons() {
    // Botó anterior
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Botó següent
    const hasAnswer = userAnswers.hasOwnProperty(currentQuestionIndex);
    nextBtn.disabled = !hasAnswer;
    
    // Canviar text del botó si és l'última pregunta
    const lastIndex = (testQuestions && testQuestions.length ? testQuestions.length : TEST_CONFIG.totalQuestions) - 1;
    if (currentQuestionIndex === lastIndex) {
        nextBtn.innerHTML = 'Finalitzar Test <span class="icon">✓</span>';
    } else {
        nextBtn.innerHTML = 'Següent <span class="icon">→</span>';
    }
}

/**
 * Actualitza la barra de progrés i el text informatiu
 */
function updateProgress() {
    const totalCount = testQuestions.length || TEST_CONFIG.totalQuestions;
    const progress = ((currentQuestionIndex + 1) / totalCount) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalCount}`;
}

// ========================================
// FUNCIONS DE TRACKING CONDUCTUAL
// ========================================

/**
 * Mostra les mètriques pedagògiques
 */
function showQuestionMetrics() {
    if (questionMetrics) {
        questionMetrics.style.display = 'block';
        if (!strategyTracking[currentQuestionIndex] && solutionStrategy) {
            solutionStrategy.value = '';
            solutionStrategy.selectedIndex = 0;
        }
    }
}

/**
 * Amaga les mètriques pedagògiques
 */
function hideQuestionMetrics() {
    if (questionMetrics) {
        questionMetrics.style.display = 'none';
    }
}

/**
 * Carrega els valors de mètriques per a una pregunta ja contestada
 */
function loadQuestionMetricsValues(questionIndex) {
    // Carregar valors guardats si existeixen
    if (confidenceTracking[questionIndex]) {
        questionConfidence.value = confidenceTracking[questionIndex];
        qConfidenceValue.textContent = confidenceTracking[questionIndex];
    } else {
        questionConfidence.value = 3;
        qConfidenceValue.textContent = 3;
    }
    
    if (difficultyTracking[questionIndex]) {
        questionDifficulty.value = difficultyTracking[questionIndex];
        qDifficultyValue.textContent = difficultyTracking[questionIndex];
    } else {
        questionDifficulty.value = 3;
        qDifficultyValue.textContent = 3;
    }
    
    if (solutionStrategy) {
        const savedStrategy = strategyTracking[questionIndex] || '';
        solutionStrategy.value = savedStrategy;
        if (!savedStrategy) {
            solutionStrategy.selectedIndex = 0;
        }
    }
}

/**
 * Guarda les mètriques de la pregunta actual
 */
function saveQuestionMetrics(questionIndex) {
    if (!currentQuestionMetrics.startTime) return;
    
    // Calcular temps total en aquesta pregunta
    const totalTime = Date.now() - currentQuestionMetrics.startTime;
    questionTimeTracking[questionIndex] = Math.round(totalTime / 1000); // en segons
    
    // Guardar mètriques pedagògiques si estan disponibles
    if (questionConfidence && questionConfidence.value) {
        confidenceTracking[questionIndex] = parseInt(questionConfidence.value);
    }
    
    if (questionDifficulty && questionDifficulty.value) {
        difficultyTracking[questionIndex] = parseInt(questionDifficulty.value);
    }
    
    if (solutionStrategy) {
        if (solutionStrategy.value) {
            strategyTracking[questionIndex] = solutionStrategy.value;
        } else if (strategyTracking[questionIndex]) {
            delete strategyTracking[questionIndex];
        }
        if (!solutionStrategy.value) {
            solutionStrategy.selectedIndex = 0;
        }
    }
    
    // Actualitzar metrics globals
    currentQuestionMetrics.totalViewTime = totalTime;
    // Assegurar-nos que el temps fins a la primera resposta queda registrat
    if (currentQuestionMetrics.initialAnswerTime && initialAnswerTimeTracking[questionIndex] == null) {
        initialAnswerTimeTracking[questionIndex] = Math.round(currentQuestionMetrics.initialAnswerTime / 1000);
    }
    
    console.log(`Mètriques guardades per pregunta ${questionIndex + 1}:`, {
        time: questionTimeTracking[questionIndex],
        changes: answerChangeTracking[questionIndex] || 0,
        confidence: confidenceTracking[questionIndex],
        difficulty: difficultyTracking[questionIndex]
    });
}

/**
 * Actualitza les analytics en temps real
 */
function updateRealTimeAnalytics() {
    if (!questionStartTime || !analyticsMini) return;
    
    // Calcular temps actual en la pregunta
    const currentTime = Math.round((Date.now() - questionStartTime) / 1000);
    currentTimeDisplay.textContent = `${currentTime}s`;
    
    // Mostrar nombre de canvis
    const changes = answerChangeTracking[currentQuestionIndex] || 0;
    changesCountDisplay.textContent = changes;
    
    // Mostrar analytics mini si l'estudiant ha contestat
    if (userAnswers.hasOwnProperty(currentQuestionIndex)) {
        analyticsMini.style.display = 'flex';
    }
}

/**
 * Inicia el tracking en temps real per a una pregunta
 */
function startRealTimeTracking() {
    if (realTimeAnalyticsInterval) {
        clearInterval(realTimeAnalyticsInterval);
    }
    realTimeAnalyticsInterval = setInterval(updateRealTimeAnalytics, 1000);
}

// ========================================
// NAVEGACIÓ DEL TEST
// ========================================

/**
 * Va a la pregunta anterior
 */
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        // Guardar mètriques de la pregunta actual
        saveQuestionMetrics(currentQuestionIndex);
        
        // Registrar navegació
        navigationPatterns.push({
            timestamp: Date.now(),
            action: 'navigate_previous',
            fromIndex: currentQuestionIndex,
            toIndex: currentQuestionIndex - 1
        });
        
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

/**
 * Va a la següent pregunta o finalitza el test
 */
function goToNextQuestion() {
    // Guardar mètriques de la pregunta actual
    saveQuestionMetrics(currentQuestionIndex);
    
    const lastIndex = (testQuestions && testQuestions.length ? testQuestions.length : TEST_CONFIG.totalQuestions) - 1;
    if (currentQuestionIndex < lastIndex) {
        // Registrar navegació
        navigationPatterns.push({
            timestamp: Date.now(),
            action: 'navigate_next',
            fromIndex: currentQuestionIndex,
            toIndex: currentQuestionIndex + 1
        });
        
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        // Finalitzar test
        navigationPatterns.push({
            timestamp: Date.now(),
            action: 'finish_test',
            fromIndex: currentQuestionIndex
        });
        
        finishTest();
    }
}

// ========================================
// TEMPORITZADOR
// ========================================

/**
 * Inicia el temporitzador del test
 */
function startTimer() {
    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        
        // Comprovar si s'ha acabat el temps
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert('S\'ha acabat el temps! El test es finalitzarà automàticament.');
            finishTest();
        }
    }, 1000);
}

/**
 * Actualitza la visualització del temporitzador
 */
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    timerDisplay.textContent = timeString;
    
    // Canviar color si queda poc temps
    if (remainingTime <= 60) {
        timerDisplay.style.color = '#ef4444'; // Vermell
    } else if (remainingTime <= 300) {
        timerDisplay.style.color = '#f59e0b'; // Groc
    }
}

// ========================================
// FINALITZACIÓ I RESULTATS
// ========================================

/**
 * Finalitza el test i calcula els resultats
 */
function finishTest() {
    console.log('Finalitzant test...');
    
    // Parar temporitzador
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Calcular temps emprat
    const totalTimeUsed = Math.round((Date.now() - startTime) / 1000);
    
    // Calcular puntuacions
    const result = calculateScores();
    
    // Mostrar resultats
    displayResults(result, totalTimeUsed);
    
    // Enviar dades al backend
    // FORÇAR Web App per evitar confusions (no usar Google Forms)
    console.log('Enviament: Web App', WEB_APP_URL);
    sendResultsToWebApp({ result, timeTakenSeconds: totalTimeUsed, studentData });
    
    // Canviar a la secció de resultats
    showSection('results-section');
    
    console.log('Test finalitzat correctament');
}

/**
 * Calcula les puntuacions per bloc i total
 */
function calculateScores() {
    // Penalització per errada
    const CONFIG_PENAL_ERRADA = { proporcionalOpcions: true, valorFix: 0.25 };

    const createEmptyStats = () => ({
        answered: 0,
        correct: 0,
        wrong: 0,
        unanswered: 0,
        points: 0,
        grade10: 0,
        percentCorrect: 0,
        percentPenalized: 0
    });

    const totals = createEmptyStats();
    const blocks = {};
    const types = {};
    QUESTION_TYPE_KEYS.forEach((type) => {
        types[type] = createEmptyStats();
    });

    const ensureBlock = (bloc) => {
        if (!blocks[bloc]) {
            const blockStats = createEmptyStats();
            blockStats.byType = {};
            QUESTION_TYPE_KEYS.forEach((type) => {
                blockStats.byType[type] = createEmptyStats();
            });
            blocks[bloc] = blockStats;
        }
        return blocks[bloc];
    };

    const getPenalty = (question) => {
        const optionsCount = Array.isArray(question.opcions) ? question.opcions.length : 4;
        return CONFIG_PENAL_ERRADA.proporcionalOpcions && optionsCount > 1
            ? (1 / (optionsCount - 1))
            : CONFIG_PENAL_ERRADA.valorFix;
    };

    testQuestions.forEach((question, index) => {
        const blocKey = question.bloc;
        const typeKey = QUESTION_TYPE_KEYS.includes(question.tipus) ? question.tipus : QUESTION_TYPE_KEYS[0];
        const blockStats = ensureBlock(blocKey);
        const blockTypeStats = blockStats.byType[typeKey];
        const typeStats = types[typeKey];
        const answered = Object.prototype.hasOwnProperty.call(userAnswers, index);

        if (!answered) {
            totals.unanswered++;
            blockStats.unanswered++;
            blockTypeStats.unanswered++;
            typeStats.unanswered++;
            return;
        }

        totals.answered++;
        blockStats.answered++;
        blockTypeStats.answered++;
        typeStats.answered++;

        const userAnswer = userAnswers[index];
        const correctAnswer = question.opcions.find((opt) => opt.correcta);
        const isCorrect = userAnswer === (correctAnswer && correctAnswer.id);
        const penalty = getPenalty(question);

        if (isCorrect) {
            totals.correct++;
            blockStats.correct++;
            blockTypeStats.correct++;
            typeStats.correct++;
            totals.points += 1;
            blockStats.points += 1;
            blockTypeStats.points += 1;
            typeStats.points += 1;
        } else {
            totals.wrong++;
            blockStats.wrong++;
            blockTypeStats.wrong++;
            typeStats.wrong++;
            totals.points -= penalty;
            blockStats.points -= penalty;
            blockTypeStats.points -= penalty;
            typeStats.points -= penalty;
        }
    });

    const calcRatios = (obj) => {
        if (obj.answered > 0) {
            obj.percentCorrect = Math.round((obj.correct / obj.answered) * 100);
            const grade = (obj.points / obj.answered) * 10;
            obj.grade10 = Math.max(0, Math.round(grade * 10) / 10);
            obj.percentPenalized = Math.max(0, Math.round((obj.points / obj.answered) * 100));
        } else {
            obj.percentCorrect = 0;
            obj.grade10 = 0;
            obj.percentPenalized = 0;
        }
        obj.points = Math.round(obj.points * 100) / 100;
    };

    calcRatios(totals);
    Object.values(types).forEach(calcRatios);
    Object.values(blocks).forEach((blockStats) => {
        calcRatios(blockStats);
        QUESTION_TYPE_KEYS.forEach((type) => calcRatios(blockStats.byType[type]));
    });

    const roundedTotalsPoints = Math.round(totals.points * 100) / 100;

    const exportScores = {
        totalsEncerts: totals.correct,
        totalsErrors: totals.wrong,
        totalsNoRespostes: totals.unanswered,
        totalsRespostes: totals.answered,
        totalsPunts: roundedTotalsPoints,
        totalsNota10: totals.grade10
    };

    QUESTION_TYPE_KEYS.forEach((type) => {
        const stats = types[type];
        const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
        const totalQuestionsOfType = stats.answered + stats.unanswered;
        exportScores[`${type}Preguntes`] = totalQuestionsOfType;
        exportScores[`${type}Respostes`] = stats.answered;
        exportScores[`${type}Encerts`] = stats.correct;
        exportScores[`${type}Errors`] = stats.wrong;
        exportScores[`${type}NoRespostes`] = stats.unanswered;
    });

    BLOCK_KEYS.forEach((blockKey) => {
        const stats = blocks[blockKey] || createEmptyStats();
        const totalQuestionsOfBlock = stats.answered + stats.unanswered;
        exportScores[`${blockKey}Preguntes`] = totalQuestionsOfBlock;
        exportScores[`${blockKey}Respostes`] = stats.answered;
        exportScores[`${blockKey}Encerts`] = stats.correct;
        exportScores[`${blockKey}Errors`] = stats.wrong;
        exportScores[`${blockKey}NoRespostes`] = stats.unanswered;

        QUESTION_TYPE_KEYS.forEach((type) => {
            const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
            const subStats = stats.byType ? stats.byType[type] : createEmptyStats();
            const totalQuestionsOfSub = subStats.answered + subStats.unanswered;
            exportScores[`${blockKey}${typeCapitalized}Preguntes`] = totalQuestionsOfSub;
            exportScores[`${blockKey}${typeCapitalized}Respostes`] = subStats.answered;
            exportScores[`${blockKey}${typeCapitalized}Encerts`] = subStats.correct;
            exportScores[`${blockKey}${typeCapitalized}Errors`] = subStats.wrong;
            exportScores[`${blockKey}${typeCapitalized}NoRespostes`] = subStats.unanswered;
        });
    });

    const result = { totals, blocks, types, exportScores };
    console.log('Resultats calculats (sobre respostes, blocs i tipus):', result);
    return result;
}


/**
 * Mostra els resultats en la interfície
 */
function displayResults(result, timeUsed) {
    const minutes = Math.floor(timeUsed / 60);
    const seconds = timeUsed % 60;
    const timeString = `${minutes}m ${seconds}s`;

    const totalQuestions = testQuestions.length || TOTAL_REQUIRED_QUESTIONS;

    // Calcular estadístiques avançades
    const totalQuestionTime = Object.values(questionTimeTracking).reduce((sum, time) => sum + time, 0);
    const avgTimePerQuestion = totalQuestions > 0 ? Math.round(totalQuestionTime / totalQuestions) : 0;
    const totalChanges = Object.values(answerChangeTracking).reduce((sum, changes) => sum + changes, 0);
    const confidenceValues = Object.values(confidenceTracking);
    const avgConfidence = confidenceValues.length > 0
        ? Math.round((confidenceValues.reduce((sum, conf) => sum + conf, 0) / confidenceValues.length) * 10) / 10
        : 'N/A';

    const { totals, blocks, types } = result;

    const ensureStats = (stats = {}) => ({
        answered: stats.answered || 0,
        correct: stats.correct || 0,
        wrong: stats.wrong || 0,
        unanswered: stats.unanswered || 0,
        points: stats.points || 0,
        grade10: stats.grade10 || 0,
        percentCorrect: stats.percentCorrect || 0,
        percentPenalized: stats.percentPenalized || 0
    });

    const blockCards = BLOCK_KEYS.map((blockKey) => {
        const blockStats = ensureStats(blocks[blockKey]);
        const byType = (blocks[blockKey] && blocks[blockKey].byType) || {};
        const directStats = ensureStats(byType.directa);
        const competencialStats = ensureStats(byType.competencial);
        const directTotal = directStats.answered + directStats.unanswered;
        const competencialTotal = competencialStats.answered + competencialStats.unanswered;
        const blockTotalQuestions = blockStats.answered + blockStats.unanswered;
        const label = BLOCK_LABELS[blockKey] || capitalizeFirst(blockKey.replace(/_/g, ' '));

        return `
            <div class="result-card ${getScoreClass(blockStats.percentPenalized)}">
                <h4>${label}</h4>
                <div class="result-score">${blockStats.grade10}/10</div>
                <p>Preguntes: <strong>${blockTotalQuestions}</strong> · Respostes: <strong>${blockStats.answered}</strong></p>
                <p>Encerts: <strong>${blockStats.correct}</strong> · Errors: <strong>${blockStats.wrong}</strong></p>
                <p><strong>Directes:</strong> ${directStats.correct}/${directStats.answered} encerts · ${directTotal} preguntes</p>
                <p><strong>Competencials:</strong> ${competencialStats.correct}/${competencialStats.answered} encerts · ${competencialTotal} preguntes</p>
            </div>`;
    }).join('');

    const typeCards = QUESTION_TYPE_KEYS.map((typeKey) => {
        const stats = ensureStats(types[typeKey]);
        const totalTypeQuestions = stats.answered + stats.unanswered;
        const label = QUESTION_TYPE_LABELS[typeKey] || capitalizeFirst(typeKey.replace(/_/g, ' '));
        return `
            <div class="result-card">
                <h4>${label}</h4>
                <div class="result-score">${stats.grade10}/10</div>
                <p>Preguntes: <strong>${totalTypeQuestions}</strong> · Respostes: <strong>${stats.answered}</strong></p>
                <p>Encerts: <strong>${stats.correct}</strong> · Errors: <strong>${stats.wrong}</strong></p>
            </div>`;
    }).join('');

    resultsContent.innerHTML = `
        <div class="results-summary">
            <div class="result-card ${getScoreClass(totals.percentPenalized)}">
                <h4>Resum General</h4>
                <div class="result-score">${totals.grade10}/10</div>
                <p>Encerts: <strong>${totals.correct}</strong> · Errors: <strong>${totals.wrong}</strong> · No respostes: <strong>${totals.unanswered}</strong></p>
                <p>Punts (penalitzats): <strong>${Math.round(totals.points * 100) / 100}</strong> de ${totals.answered}</p>
                <p>Respostes: <strong>${totals.answered}</strong> de ${totalQuestions} · Encerts (% sense penalitzar): <strong>${totals.percentCorrect}%</strong></p>
            </div>
            
            <div class="result-card">
                <h4>Temps Emprat</h4>
                <div class="result-score" style="color: var(--color-primary);">${timeString}</div>
                <p>de 20 minuts disponibles</p>
            </div>
        </div>
        
        <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--color-primary);">
            Resultats per Bloc Matemàtic
        </h3>
        <div class="results-summary">
            ${blockCards}
        </div>
        
        <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--color-primary);">
            Resultats per Tipus de Pregunta
        </h3>
        <div class="results-summary">
            ${typeCards}
        </div>
        
        <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--color-primary);">
            Anàlisi del Comportament d'Aprenentatge
        </h3>
        
        <div class="results-summary">
            <div class="result-card">
                <h4>Temps Mitjà per Pregunta</h4>
                <div class="result-score" style="color: var(--color-primary);">${avgTimePerQuestion}s</div>
                <p>Ritme d'aprenentatge</p>
            </div>
            
            <div class="result-card">
                <h4>Canvis de Resposta</h4>
                <div class="result-score" style="color: var(--color-warning);">${totalChanges}</div>
                <p>Indecisió total</p>
            </div>
            
            <div class="result-card">
                <h4>Confiança Mitjana</h4>
                <div class="result-score" style="color: var(--color-secondary);">${avgConfidence}/5</div>
                <p>Auto-percepció</p>
            </div>
        </div>
    `;
}


/**
 * Determina la classe CSS segons la puntuació
 */
function getScoreClass(score) {
    if (score >= 90) return 'excellent';
    if (score >= 75) return 'good';
    if (score >= 50) return 'needs-improvement';
    return 'poor';
}

/**
 * Obté una descripció textual de la puntuació
 */
function getScoreDescription(score) {
    if (score >= 90) return 'Excel·lent! Domines molt bé les matemàtiques.';
    if (score >= 75) return 'Molt bé! Tens un bon nivell matemàtic.';
    if (score >= 50) return 'Bé! Amb una mica més de pràctica milloraràs.';
    return 'Pots millorar! Et recomanam repassar aquests conceptes.';
}

// ========================================
// INTEGRACIÓ AMB GOOGLE FORMS
// ========================================

/**
 * Construeix un JSON amb les respostes seleccionades per cada pregunta
 * Format: { "0": { idPregunta, bloc, resposta, correcta }, ... }
 */
function construirRespostesSeleccionadesJSON() {
    const respostes = {};
    testQuestions.forEach((q, idx) => {
        const resposta = userAnswers[idx] || null;
        const optCorrecta = q.opcions.find(o => o.correcta);
        const optTriada = q.opcions.find(o => o.id === resposta) || null;
        const correcta = resposta != null ? !!(optCorrecta && resposta === optCorrecta.id) : null;
        const blocLabel = BLOCK_LABELS[q.bloc] || capitalizeFirst(q.bloc.replace(/_/g, ' '));
        const tipus = q.tipus || 'directa';
        const tipusLabel = QUESTION_TYPE_LABELS[tipus] || capitalizeFirst(String(tipus).replace(/_/g, ' '));
        respostes[idx] = {
            idPregunta: q.id,
            bloc: q.bloc,
            blocLabel: blocLabel,
            tipus: tipus,
            tipusLabel: tipusLabel,
            index: idx,
            enunciat: q.pregunta,
            opcions: q.opcions.map(o => ({ id: o.id, text: o.text, correcta: !!o.correcta })),
            resposta: resposta,
            respostaText: optTriada ? optTriada.text : null,
            correctaId: optCorrecta ? optCorrecta.id : null,
            correctaText: optCorrecta ? optCorrecta.text : null,
            correcta: correcta,
            temps: questionTimeTracking[idx] != null ? questionTimeTracking[idx] : null,
            tempsFinsPrimera: initialAnswerTimeTracking[idx] != null ? initialAnswerTimeTracking[idx] : null,
            canvis: answerChangeTracking[idx] || 0,
            confianca: confidenceTracking[idx] != null ? confidenceTracking[idx] : null,
            dificultat: difficultyTracking[idx] != null ? difficultyTracking[idx] : null,
            estrategia: strategyTracking[idx] || null
        };
    });
    return JSON.stringify(respostes);
}

/**
 * Envia els resultats a Google Forms per a la persistència de dades
 * Basat en les especificacions dels fitxers gemini/google_forms
 */
async function sendResultsToGoogle({ scores, timeTakenSeconds, studentData }) {
    console.log('Enviant resultats a Google Forms...');

    // Actualitzar estat visual
    updateDataStatus('sending', 'Enviant resultats...');

    // Si no està configurat, informar i sortir sense error
    if (!isGoogleFormConfigured()) {
        console.warn('Google Forms no està configurat. Saltejant enviament.');
        updateDataStatus('error', 'Enviament pendent de configuració. Resultats visibles en pantalla.');
        return;
    }

    try {
        const formData = new FormData();

        if (GOOGLE_FORM_ENTRIES.temps) {
            formData.append(GOOGLE_FORM_ENTRIES.temps, timeTakenSeconds);
        }

        if (scores && typeof scores === 'object') {
            Object.entries(scores).forEach(([key, value]) => {
                if (value == null) return;
                const entryKey = GOOGLE_FORM_ENTRIES[key];
                if (entryKey && entryKey !== 'entry.MANUALMENT') {
                    formData.append(entryKey, value);
                }
            });
        }

        // Dades contextuals ampliades
        if (GOOGLE_FORM_ENTRIES.centrePrimaria) formData.append(GOOGLE_FORM_ENTRIES.centrePrimaria, studentData.school);
        if (GOOGLE_FORM_ENTRIES.confiancaInicial) formData.append(GOOGLE_FORM_ENTRIES.confiancaInicial, studentData.mathConfidence);
        if (GOOGLE_FORM_ENTRIES.horesMobil && studentData.mobileUsage != null) formData.append(GOOGLE_FORM_ENTRIES.horesMobil, studentData.mobileUsage);
        if (GOOGLE_FORM_ENTRIES.horesSon && studentData.sleepHours != null) formData.append(GOOGLE_FORM_ENTRIES.horesSon, studentData.sleepHours);
        if (GOOGLE_FORM_ENTRIES.horesEstudiMates && studentData.studyHours != null) formData.append(GOOGLE_FORM_ENTRIES.horesEstudiMates, studentData.studyHours);
        if (GOOGLE_FORM_ENTRIES.reforcMates && studentData.tutoring) formData.append(GOOGLE_FORM_ENTRIES.reforcMates, studentData.tutoring);
        if (GOOGLE_FORM_ENTRIES.ansietatMates && studentData.mathAnxiety != null) formData.append(GOOGLE_FORM_ENTRIES.ansietatMates, studentData.mathAnxiety);

        // Analytics conductuals (com a JSON strings)
        if (GOOGLE_FORM_ENTRIES.tempsPerPregunta) formData.append(GOOGLE_FORM_ENTRIES.tempsPerPregunta, JSON.stringify(questionTimeTracking));
        if (GOOGLE_FORM_ENTRIES.canvisResposta) formData.append(GOOGLE_FORM_ENTRIES.canvisResposta, JSON.stringify(answerChangeTracking));
        if (GOOGLE_FORM_ENTRIES.confiancaPerPregunta) formData.append(GOOGLE_FORM_ENTRIES.confiancaPerPregunta, JSON.stringify(confidenceTracking));
        if (GOOGLE_FORM_ENTRIES.dificultatPercebuda) formData.append(GOOGLE_FORM_ENTRIES.dificultatPercebuda, JSON.stringify(difficultyTracking));
        if (GOOGLE_FORM_ENTRIES.estrategiesResolucio) formData.append(GOOGLE_FORM_ENTRIES.estrategiesResolucio, JSON.stringify(strategyTracking));
        if (GOOGLE_FORM_ENTRIES.patronsNavegacio) formData.append(GOOGLE_FORM_ENTRIES.patronsNavegacio, JSON.stringify(navigationPatterns));
        if (GOOGLE_FORM_ENTRIES.respostesSeleccionades) {
            formData.append(GOOGLE_FORM_ENTRIES.respostesSeleccionades, construirRespostesSeleccionadesJSON());
        }

        // Metadades tècniques
        if (GOOGLE_FORM_ENTRIES.sistemaOperatiu) formData.append(GOOGLE_FORM_ENTRIES.sistemaOperatiu, technicalMetadata.platform);
        if (GOOGLE_FORM_ENTRIES.navegador) formData.append(GOOGLE_FORM_ENTRIES.navegador, technicalMetadata.userAgent.substring(0, 100));
        if (GOOGLE_FORM_ENTRIES.resolucio) formData.append(GOOGLE_FORM_ENTRIES.resolucio, technicalMetadata.screenResolution);
        if (GOOGLE_FORM_ENTRIES.horaInici) formData.append(GOOGLE_FORM_ENTRIES.horaInici, technicalMetadata.sessionStart);
        if (GOOGLE_FORM_ENTRIES.diaSetmana) formData.append(GOOGLE_FORM_ENTRIES.diaSetmana, technicalMetadata.dayOfWeek.toString());

        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });

        updateDataStatus('success', 'Resultats enviats correctament ✓');
        console.log('Resultats enviats a Google Forms');
    } catch (error) {
        console.error('Error enviant resultats:', error);
        updateDataStatus('error', 'Error en l\'enviament. Resultats guardats localment.');

        localStorage.setItem('testResults', JSON.stringify({
            scores,
            timeTakenSeconds,
            studentData,
            timestamp: new Date().toISOString()
        }));
    }
}


/**
 * Envia els resultats a un Web App d'Apps Script en format JSON per evitar mapatges d'entries
 */
async function sendResultsToWebApp({ result, timeTakenSeconds, studentData }) {
    try {
        const payload = buildWebAppPayload({ result, timeTakenSeconds, studentData });
        await fetch(WEB_APP_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            mode: 'no-cors'
        });
        updateDataStatus('success', 'Resultats enviats correctament ✓');
        console.log('Resultats enviats al Web App');
    } catch (err) {
        console.error('Error enviant al Web App:', err);
        updateDataStatus('error', 'Error en l\'enviament. Resultats guardats localment.');
        localStorage.setItem('testResults', JSON.stringify({ result, timeTakenSeconds, studentData, timestamp: new Date().toISOString() }));
    }
}

function buildWebAppPayload({ result, timeTakenSeconds, studentData }) {
    const { totals, blocks, types, exportScores } = result;
    const blockConfig = BLOCK_KEYS.reduce((acc, key) => {
        acc[key] = {
            total: TEST_CONFIG.blocks[key].total,
            perType: TEST_CONFIG.blocks[key].perType
        };
        return acc;
    }, {});

    return {
        version: 'v2',
        attemptId,
        timeTakenSeconds,
        student: studentData,
        totals,
        blocks,
        types,
        exportScores,
        config: {
            totalQuestions: TEST_CONFIG.totalQuestions,
            blocks: blockConfig,
            questionTypes: QUESTION_TYPE_KEYS
        },
        analytics: {
            tempsPerPregunta: questionTimeTracking,
            canvisResposta: answerChangeTracking,
            confiancaPerPregunta: confidenceTracking,
            dificultatPercebuda: difficultyTracking,
            estrategiesResolucio: strategyTracking,
            patronsNavegacio: navigationPatterns,
            tempsFinsPrimera: initialAnswerTimeTracking
        },
        technical: technicalMetadata,
        answers: JSON.parse(construirRespostesSeleccionadesJSON())
    };
}

/**
 * Actualitza l'estat visual de l'enviament de dades
 */
function updateDataStatus(status, message) {
    const statusIcon = dataStatus.querySelector('.status-icon');
    const statusText = dataStatus.querySelector('.status-text');
    
    // Actualitzar classes CSS
    dataStatus.className = `data-status ${status}`;
    
    // Actualitzar contingut
    switch (status) {
        case 'sending':
            statusIcon.textContent = '';
            break;
        case 'success':
            statusIcon.textContent = '';
            break;
        case 'error':
            statusIcon.textContent = '';
            break;
    }
    
    statusText.textContent = message;
}

// ========================================
// FUNCIONS D'UTILITAT
// ========================================

/**
 * Capitalitza la primera lletra d'una cadena
 */
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Mostra un modal
 */
function showModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Amaga un modal
 */
function hideModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// GESTIÓ D'ESDEVENIMENTS ADICIONALS
// ========================================

/**
 * Gestiona les dreceres de teclat
 */
function handleKeyboardShortcuts(e) {
    // Escapar per tancar modals
    if (e.key === 'Escape') {
        hideModal(helpModal);
    }
    
    // Navegació amb fletxes (només durant el test)
    if (currentSection === 'test-section') {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            goToPreviousQuestion();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            goToNextQuestion();
        }
    }
}

/**
 * Revisa les respostes (funcionalitat futura)
 */
function reviewAnswers() {
    alert('Funcionalitat de revisió en desenvolupament');
    // TODO: Implementar revisió detallada de respostes
}

/**
 * Inicia un nou test
 */
function startNewTest() {
    if (confirm('Estàs segur que vols començar un nou test? Es perdran les dades actuals.')) {
        // Reiniciar variables
        currentSection = 'student-info';
        studentData = {};
        testQuestions = [];
        currentQuestionIndex = 0;
        userAnswers = {};
        startTime = null;
        remainingTime = TEST_CONFIG.timeLimit;
        
        // Parar temporitzador si està actiu
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        if (realTimeAnalyticsInterval) {
            clearInterval(realTimeAnalyticsInterval);
            realTimeAnalyticsInterval = null;
        }

        // Reiniciar tracking
        questionTimeTracking = {};
        answerChangeTracking = {};
        confidenceTracking = {};
        difficultyTracking = {};
        strategyTracking = {};
        navigationPatterns = [];
        initialAnswerTimeTracking = {};
        currentQuestionMetrics = {};

        // Reiniciar formulari
        studentForm.reset();
        
        // Reiniciar timer display
        timerDisplay.textContent = '20:00';
        timerDisplay.style.color = '';
        
        // Mostrar secció inicial
        showSection('student-info');
        
        console.log('Test reinicialitzat');
    }
}

// ========================================
// INICIALITZACIÓ AUTOMÀTICA
// ========================================

// Inicialitzar l'aplicació quan es carrega la pàgina
document.addEventListener('DOMContentLoaded', initializeApp);

// Guardar estat abans de tancar la pàgina (si està fent el test)
window.addEventListener('beforeunload', (e) => {
    if (currentSection === 'test-section' && Object.keys(userAnswers).length > 0) {
        e.preventDefault();
        e.returnValue = 'Tens un test en curs. Estàs segur que vols sortir?';
    }
});

console.log('Script del test de matemàtiques carregat correctament');
