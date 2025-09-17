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
    totalQuestions: 20,
    timeLimit: 20 * 60, // 20 minuts en segons
    questionsPerBlock: 4, // 4 preguntes per bloc (5 blocs × 4 = 20)
    // Ordre i blocs definits per a 2n ESO
    blocks: ['estadistica', 'funcions', 'geometria', 'numeros_algebra', 'processos']
};

// Etiquetes amigables per a cada bloc (fallback a capitalitzar si no existeix)
const BLOCK_LABELS = {
    estadistica: 'Estadística i probabilitat',
    funcions: 'Funcions',
    geometria: 'Geometria',
    numeros_algebra: 'Números i àlgebra',
    processos: 'Processos i mètodes',
    // Compatibilitat amb possibles claus antigues
    numeros: 'Números i operacions',
    mesura: 'Mesura i magnituds',
    problemes: 'Problemes'
};

// Configuració de Google Forms (cal personalitzar amb els teus identificadors)
// Opcional: URL d'un Web App de Google Apps Script per enviar dades en JSON sense mapatges d'entries
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbycMGH0jx6ms7nX5lUiL2b3IoTXRE9AgLj_ngdOJ8E6Chwl-FdprF7Me9M0zDngxO0Z/exec"; // Ex.: "https://script.google.com/macros/s/AKfycbx.../exec" (deixar buit per usar Google Forms)

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/[SUBSTITUIR_PER_ID_REAL]/formResponse";
const GOOGLE_FORM_ENTRIES = {
    // Dades bàsiques (valors totals)
    temps: "entry.1234567890",
    totalsEncerts: "entry.2000000001",
    totalsErrors: "entry.2000000002",
    totalsNoRespostes: "entry.2000000003",
    totalsRespostes: "entry.2000000004",
    totalsPunts: "entry.2000000005",
    totalsNota10: "entry.2000000006",

    // Per bloc (valors totals)
    processosEncerts: "entry.2100000001",
    processosErrors: "entry.2100000002",
    numeros_algebraEncerts: "entry.2100000003",
    numeros_algebraErrors: "entry.2100000004",
    geometriaEncerts: "entry.2100000005",
    geometriaErrors: "entry.2100000006",
    estadisticaEncerts: "entry.2100000007",
    estadisticaErrors: "entry.2100000008",
    funcionsEncerts: "entry.2100000009",
    funcionsErrors: "entry.2100000010",

    // Dades contextuals ampliades
    centrePrimaria: "entry.8901234500",
    confiancaInicial: "entry.0123456789",
    horesMobil: "entry.8901234510",
    horesSon: "entry.8901234520",
    horesEstudiMates: "entry.8901234530",
    reforcMates: "entry.8901234540",
    ansietatMates: "entry.8901234550",

    // Analytics conductuals (JSON string)
    tempsPerPregunta: "entry.2345678902",
    canvisResposta: "entry.3456789013",
    confiancaPerPregunta: "entry.4567890124",
    dificultatPercebuda: "entry.5678901235",
    estrategiesResolucio: "entry.6789012346",
    patronsNavegacio: "entry.7890123457",
    respostesSeleccionades: "entry.7890123460",

    // Metadades tècniques
    sistemaOperatiu: "entry.8901234568",
    navegador: "entry.9012345679",
    resolucio: "entry.0123456780",
    horaInici: "entry.1234567892",
    diaSetmana: "entry.2345678903"
};

// Mapatge de blocs → clau de formulari (només s'enviaran si existeixen al formulari)
const BLOCK_TO_FORM_ENTRY = {
    processos: 'processos',
    funcions: 'funcions',
    numeros_algebra: 'numeros_algebra',
    mesura: 'mesura',
    geometria: 'geometria',
    estadistica: 'estadistica',
    problemes: 'problemes'
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
    const comptatge = {};
    TEST_CONFIG.blocks.forEach(b => comptatge[b] = 0);
    questionBank.forEach(q => {
        if (comptatge.hasOwnProperty(q.bloc)) comptatge[q.bloc]++;
    });
    const insuficients = Object.entries(comptatge)
        .filter(([bloc, count]) => count < TEST_CONFIG.questionsPerBlock)
        .map(([bloc, count]) => `${BLOCK_LABELS[bloc] || bloc}: ${count}/${TEST_CONFIG.questionsPerBlock}`);
    if (insuficients.length > 0) {
        alert('Avís: alguns blocs tenen poques preguntes i s\'omplirà amb altres blocs:\n' + insuficients.join('\n'));
        console.warn('Disponibilitat insuficient per blocs:', comptatge);
    }
}

/**
 * Selecciona preguntes aleatòries seguint la distribució per blocs
 */
function selectRandomQuestions() {
    const selected = [];
    const alreadyPickedIds = new Set();

    // Blocs disponibles realment al banc de preguntes
    const availableBlocks = Array.from(new Set(questionBank.map(q => q.bloc)));

    // Primer intent: seleccionar per blocs definits si existeixen
    TEST_CONFIG.blocks.forEach(block => {
        if (!availableBlocks.includes(block)) return; // si el bloc no existeix, saltar
        const blockQuestions = questionBank.filter(q => q.bloc === block);
        // barrejar superficialment
        const shuffled = blockQuestions.slice().sort(() => Math.random() - 0.5);
        const take = Math.min(TEST_CONFIG.questionsPerBlock, shuffled.length);
        for (let i = 0; i < take; i++) {
            if (!alreadyPickedIds.has(shuffled[i].id)) {
                selected.push(shuffled[i]);
                alreadyPickedIds.add(shuffled[i].id);
            }
        }
    });

    // Si encara no arribem a totalQuestions, omplir amb qualsevol altra pregunta disponible
    if (selected.length < TEST_CONFIG.totalQuestions) {
        const remainingPool = questionBank.filter(q => !alreadyPickedIds.has(q.id));
        const shuffledPool = remainingPool.slice().sort(() => Math.random() - 0.5);
        const needed = TEST_CONFIG.totalQuestions - selected.length;
        for (let i = 0; i < Math.min(needed, shuffledPool.length); i++) {
            selected.push(shuffledPool[i]);
            alreadyPickedIds.add(shuffledPool[i].id);
        }
    }

    // Barrejar l'ordre final de les preguntes
    return selected.sort(() => Math.random() - 0.5);
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
    
    if (strategyTracking[questionIndex]) {
        solutionStrategy.value = strategyTracking[questionIndex];
    } else {
        solutionStrategy.value = '';
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
    
    if (solutionStrategy && solutionStrategy.value) {
        strategyTracking[questionIndex] = solutionStrategy.value;
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
    // Actualitzar cada segon
    setInterval(updateRealTimeAnalytics, 1000);
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

    const totals = { answered: 0, correct: 0, wrong: 0, unanswered: 0, points: 0, grade10: 0, percentCorrect: 0, percentPenalized: 0 };
    const blocks = {};

    const ensureBlock = (b) => {
        if (!blocks[b]) blocks[b] = { answered: 0, correct: 0, wrong: 0, unanswered: 0, points: 0, grade10: 0, percentCorrect: 0, percentPenalized: 0 };
        return blocks[b];
    };

    testQuestions.forEach((question, index) => {
        const bloc = question.bloc;
        const b = ensureBlock(bloc);
        const answered = Object.prototype.hasOwnProperty.call(userAnswers, index);
        if (!answered) {
            totals.unanswered++;
            b.unanswered++;
            return;
        }
        totals.answered++;
        b.answered++;

        const userAnswer = userAnswers[index];
        const correctAnswer = question.opcions.find(opt => opt.correcta);
        const isCorrect = userAnswer === (correctAnswer && correctAnswer.id);
        if (isCorrect) {
            totals.correct++;
            b.correct++;
            totals.points += 1;
            b.points += 1;
        } else {
            totals.wrong++;
            b.wrong++;
            const nOpts = Array.isArray(question.opcions) ? question.opcions.length : 4;
            const pen = CONFIG_PENAL_ERRADA.proporcionalOpcions && nOpts > 1 ? (1 / (nOpts - 1)) : CONFIG_PENAL_ERRADA.valorFix;
            totals.points -= pen;
            b.points -= pen;
        }
    });

    // Notes i percentatges
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
    };

    calcRatios(totals);
    Object.keys(blocks).forEach(k => calcRatios(blocks[k]));

    // Dades exportables per a Google Forms (valors totals)
    const exportScores = {
        totalsEncerts: totals.correct,
        totalsErrors: totals.wrong,
        totalsNoRespostes: totals.unanswered,
        totalsRespostes: totals.answered,
        totalsPunts: Math.round(totals.points * 100) / 100,
        totalsNota10: totals.grade10
    };
    Object.keys(blocks).forEach(k => {
        exportScores[`${k}Encerts`] = blocks[k].correct;
        exportScores[`${k}Errors`] = blocks[k].wrong;
    });

    const result = { totals, blocks, exportScores };
    console.log('Resultats calculats (sobre respostes i per bloc):', result);
    return result;
}

/**
 * Mostra els resultats en la interfície
 */
function displayResults(result, timeUsed) {
    const minutes = Math.floor(timeUsed / 60);
    const seconds = timeUsed % 60;
    const timeString = `${minutes}m ${seconds}s`;
    
    // Calcular estadístiques avançades
    const totalQuestionTime = Object.values(questionTimeTracking).reduce((sum, time) => sum + time, 0);
    const avgTimePerQuestion = Math.round(totalQuestionTime / TEST_CONFIG.totalQuestions);
    const totalChanges = Object.values(answerChangeTracking).reduce((sum, changes) => sum + changes, 0);
    const avgConfidence = Object.values(confidenceTracking).length > 0 ? 
        Math.round(Object.values(confidenceTracking).reduce((sum, conf) => sum + conf, 0) / Object.values(confidenceTracking).length * 10) / 10 : 'N/A';
    
    const { totals, blocks } = result;
    const totalQuestions = testQuestions.length || TEST_CONFIG.totalQuestions;

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
            ${TEST_CONFIG.blocks
                .filter(k => blocks[k])
                .map(blockKey => {
                    const b = blocks[blockKey];
                    const label = BLOCK_LABELS[blockKey] || capitalizeFirst(blockKey.replace(/_/g, ' '));
                    return `
                    <div class="result-card ${getScoreClass(b.percentPenalized)}">
                        <h4>${label}</h4>
                        <div class="result-score">${b.grade10}/10</div>
                        <p>Encerts: <strong>${b.correct}/${b.answered}</strong> · Errors: <strong>${b.wrong}</strong></p>
                    </div>`;
                }).join('')}
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
        respostes[idx] = {
            idPregunta: q.id,
            bloc: q.bloc,
            blocLabel: blocLabel,
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
        // Crear FormData amb les dades
        const formData = new FormData();
        
        // Dades bàsiques: temps
        if (GOOGLE_FORM_ENTRIES.temps) formData.append(GOOGLE_FORM_ENTRIES.temps, timeTakenSeconds);
        
        // Dades totals
        if (GOOGLE_FORM_ENTRIES.totalsEncerts && scores.totalsEncerts != null) formData.append(GOOGLE_FORM_ENTRIES.totalsEncerts, scores.totalsEncerts);
        if (GOOGLE_FORM_ENTRIES.totalsErrors && scores.totalsErrors != null) formData.append(GOOGLE_FORM_ENTRIES.totalsErrors, scores.totalsErrors);
        if (GOOGLE_FORM_ENTRIES.totalsNoRespostes && scores.totalsNoRespostes != null) formData.append(GOOGLE_FORM_ENTRIES.totalsNoRespostes, scores.totalsNoRespostes);
        if (GOOGLE_FORM_ENTRIES.totalsRespostes && scores.totalsRespostes != null) formData.append(GOOGLE_FORM_ENTRIES.totalsRespostes, scores.totalsRespostes);
        if (GOOGLE_FORM_ENTRIES.totalsPunts && scores.totalsPunts != null) formData.append(GOOGLE_FORM_ENTRIES.totalsPunts, scores.totalsPunts);
        if (GOOGLE_FORM_ENTRIES.totalsNota10 && scores.totalsNota10 != null) formData.append(GOOGLE_FORM_ENTRIES.totalsNota10, scores.totalsNota10);
        
        // Per bloc: encerts i errors
        ['processos','numeros_algebra','geometria','estadistica','funcions'].forEach(blockKey => {
            const encKey = `${blockKey}Encerts`;
            const errKey = `${blockKey}Errors`;
            const encEntry = GOOGLE_FORM_ENTRIES[encKey];
            const errEntry = GOOGLE_FORM_ENTRIES[errKey];
            if (encEntry && scores[encKey] != null) formData.append(encEntry, scores[encKey]);
            if (errEntry && scores[errKey] != null) formData.append(errEntry, scores[errKey]);
        });
        
        // Dades contextuals ampliades
        if (GOOGLE_FORM_ENTRIES.centrePrimaria) formData.append(GOOGLE_FORM_ENTRIES.centrePrimaria, studentData.school);
        if (GOOGLE_FORM_ENTRIES.confiancaInicial) formData.append(GOOGLE_FORM_ENTRIES.confiancaInicial, studentData.mathConfidence);
        if (GOOGLE_FORM_ENTRIES.horesMobil && studentData.mobileUsage != null) formData.append(GOOGLE_FORM_ENTRIES.horesMobil, studentData.mobileUsage);
        if (GOOGLE_FORM_ENTRIES.horesSon && studentData.sleepHours != null) formData.append(GOOGLE_FORM_ENTRIES.horesSon, studentData.sleepHours);
        if (GOOGLE_FORM_ENTRIES.horesEstudiMates && studentData.studyHours != null) formData.append(GOOGLE_FORM_ENTRIES.horesEstudiMates, studentData.studyHours);
        if (GOOGLE_FORM_ENTRIES.reforcMates && studentData.tutoring) formData.append(GOOGLE_FORM_ENTRIES.reforcMates, studentData.tutoring);
        if (GOOGLE_FORM_ENTRIES.ansietatMates && studentData.mathAnxiety != null) formData.append(GOOGLE_FORM_ENTRIES.ansietatMates, studentData.mathAnxiety);
        
        // Analytics conductuals (com a JSON strings)
        formData.append(GOOGLE_FORM_ENTRIES.tempsPerPregunta, JSON.stringify(questionTimeTracking));
        formData.append(GOOGLE_FORM_ENTRIES.canvisResposta, JSON.stringify(answerChangeTracking));
        formData.append(GOOGLE_FORM_ENTRIES.confiancaPerPregunta, JSON.stringify(confidenceTracking));
        formData.append(GOOGLE_FORM_ENTRIES.dificultatPercebuda, JSON.stringify(difficultyTracking));
        formData.append(GOOGLE_FORM_ENTRIES.estrategiesResolucio, JSON.stringify(strategyTracking));
        formData.append(GOOGLE_FORM_ENTRIES.patronsNavegacio, JSON.stringify(navigationPatterns));
        
        // Respostes seleccionades (per pregunta)
        if (GOOGLE_FORM_ENTRIES.respostesSeleccionades) {
            formData.append(GOOGLE_FORM_ENTRIES.respostesSeleccionades, construirRespostesSeleccionadesJSON());
        }
        
        // Metadades tècniques
        formData.append(GOOGLE_FORM_ENTRIES.sistemaOperatiu, technicalMetadata.platform);
        formData.append(GOOGLE_FORM_ENTRIES.navegador, technicalMetadata.userAgent.substring(0, 100)); // Limitar longitud
        formData.append(GOOGLE_FORM_ENTRIES.resolucio, technicalMetadata.screenResolution);
        formData.append(GOOGLE_FORM_ENTRIES.horaInici, technicalMetadata.sessionStart);
        formData.append(GOOGLE_FORM_ENTRIES.diaSetmana, technicalMetadata.dayOfWeek.toString());
        
        // Enviar amb fetch API utilitzant mode no-cors
        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors" // Essencial per evitar problemes de CORS
        });
        
        // Èxit (el mode no-cors no permet comprovar la resposta real)
        updateDataStatus('success', 'Resultats enviats correctament ✓');
        console.log('Resultats enviats a Google Forms');
        
    } catch (error) {
        console.error('Error enviant resultats:', error);
        updateDataStatus('error', 'Error en l\'enviament. Resultats guardats localment.');
        
        // Guardar localment com a fallback
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
    const { totals, blocks, exportScores } = result;
    return {
        version: 'v1',
        attemptId,
        timeTakenSeconds,
        student: studentData,
        totals,
        blocks,
        exportScores,
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
