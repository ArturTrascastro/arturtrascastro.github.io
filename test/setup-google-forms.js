/**
 * Funció principal que crea el formulari i extreu tots els IDs
 */
const BLOCK_CONFIG = [
  { key: 'sentit_numeric', label: 'Sentit numèric', sheetLabel: 'SentitNumeric' },
  { key: 'sentit_operacions', label: 'Sentit de les operacions', sheetLabel: 'SentitOperacions' },
  { key: 'sentit_mesura', label: 'Sentit de la mesura', sheetLabel: 'SentitMesura' },
  { key: 'sentit_espacial', label: 'Sentit espacial', sheetLabel: 'SentitEspacial' },
  { key: 'sentit_algebraic', label: 'Sentit algebraic', sheetLabel: 'SentitAlgebraic' },
  { key: 'sentit_estocastic', label: 'Sentit estocàstic', sheetLabel: 'SentitEstocastic' }
];

const QUESTION_TYPE_KEYS = ['directa', 'competencial'];
const QUESTION_TYPE_LABELS = { directa: 'Directes', competencial: 'Competencials' };
const QUESTION_TYPE_SUFFIX = { directa: 'Directa', competencial: 'Competencial' };

function setupMathEvaluationForm() {
  console.log('Iniciant creació automàtica del Google Form...');

  // 1) Formulari base
  const form = createBaseForm();

  // 2) Afegir tots els camps necessaris i conservar referències per preomplir
  const items = [];
  items.push(...addBasicFields(form));
  items.push(...addContextualFields(form));
  items.push(...addBehavioralAnalyticsFields(form));
  items.push(...addTechnicalMetadataFields(form));

  // 3) Configuració del formulari
  configureFormSettings(form);

  // 4) Enllaçar amb Sheets
  const sheetId = createLinkedSpreadsheet(form);

  // 5) Generar URL d'enviament i MAPEIG entry.XXXX automàtic amb un URL preomplert
  const mapping = buildEntryMappingFromPrefill(form, items);

  // 6) Mostrar bloc de codi llest per enganxar a l'app
  generateJavaScriptCode({
    responseUrl: mapping.actionUrl,
    editUrl: form.getEditUrl(),
    publishedUrl: form.getPublishedUrl(),
    entries: mapping.entries,
    sheetId
  });

  console.log('Configuració completada amb èxit!');
  console.log('Copia el codi JavaScript generat i enganxa’l a script.js');

  // 7) Crear trigger d'esdeveniment per desnormalitzar a la pestanya "Detall"
  if (sheetId) {
    setupOnSubmitTrigger(sheetId);
    console.log('Trigger onFormSubmit creat per al full: ' + sheetId);
  }

  // 8) (Opcional) Mostra també instruccions per via Web App sense Google Forms
  console.log('');
  console.log('ALTERNATIVA SENSE MAPEIG D\'ENTRIES (RECOMANADA):');
  console.log('- Publica aquest projecte com a Web App (Deploy → New deployment → type: Web app → Anyone can access)');
  console.log('- Copia la URL i posa-la a WEB_APP_URL a script.js');
  console.log('- L\'app enviarà JSON directament al Web App i s\'escriurà al full com decideixis a doPost');
}

/**
 * Handler de Web App per rebre els resultats en JSON i escriure a Sheets (opcional)
 * Desplega com a Web App i configura la URL a WEB_APP_URL a la teva app
 */
function doPost(e) {
  try {
    const ss = getOrCreateStorage_();
    const body = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : null;
    if (!body) return ContentService.createTextOutput('No content').setMimeType(ContentService.MimeType.TEXT);
    appendDebug_(ss, body);

    const resum = ensureResumSheet_(ss);
    const detail = ensureDetailSheet_(ss);

    const totals = body.totals || {};
    const blocks = body.blocks || {};
    const types = body.types || {};
    const exportScores = body.exportScores || {};
    const stu = body.student || {};
    const att = body.attemptId || '';

    const getTypeStats = (typeKey) => {
      const stats = types[typeKey];
      if (stats && typeof stats === 'object') {
        if (stats.unanswered == null) {
          const totalExport = Number(exportScores[`${typeKey}Preguntes`]) || 0;
          const answered = stats.answered || 0;
          if (stats.unanswered == null) {
            stats.unanswered = Math.max(0, (totalExport || (answered + (stats.unanswered || 0))) - answered);
          }
        }
        return stats;
      }
      const total = Number(exportScores[`${typeKey}Preguntes`]) || 0;
      const answered = Number(exportScores[`${typeKey}Respostes`]) || 0;
      const correct = Number(exportScores[`${typeKey}Encerts`]) || 0;
      const wrong = Number(exportScores[`${typeKey}Errors`]) || 0;
      const unanswered = Math.max(0, total - answered);
      return { answered, correct, wrong, unanswered };
    };

    const getBlockTypeStatsFromExport = (blockKey, typeKey) => {
      const suffix = QUESTION_TYPE_SUFFIX[typeKey];
      const total = Number(exportScores[`${blockKey}${suffix}Preguntes`]) || 0;
      const answered = Number(exportScores[`${blockKey}${suffix}Respostes`]) || 0;
      const correct = Number(exportScores[`${blockKey}${suffix}Encerts`]) || 0;
      const wrong = Number(exportScores[`${blockKey}${suffix}Errors`]) || 0;
      const unanswered = Math.max(0, total - answered);
      return { answered, correct, wrong, unanswered };
    };

    const getBlockStats = (blockKey) => {
      const stats = blocks[blockKey];
      const ensureUnanswered = (obj, totalFallback = 0) => {
        if (obj.unanswered == null) {
          const answered = obj.answered || 0;
          const total = totalFallback || (answered + (obj.unanswered || 0));
          obj.unanswered = Math.max(0, total - answered);
        }
      };

      if (stats && typeof stats === 'object') {
        if (!stats.byType) stats.byType = {};
        QUESTION_TYPE_KEYS.forEach((typeKey) => {
          if (!stats.byType[typeKey]) {
            stats.byType[typeKey] = getBlockTypeStatsFromExport(blockKey, typeKey);
          } else {
            const sub = stats.byType[typeKey];
            const totalExport = Number(exportScores[`${blockKey}${QUESTION_TYPE_SUFFIX[typeKey]}Preguntes`]) || 0;
            ensureUnanswered(sub, totalExport);
          }
        });
        const totalExport = Number(exportScores[`${blockKey}Preguntes`]) || 0;
        ensureUnanswered(stats, totalExport);
        return stats;
      }

      const total = Number(exportScores[`${blockKey}Preguntes`]) || 0;
      const answered = Number(exportScores[`${blockKey}Respostes`]) || 0;
      const correct = Number(exportScores[`${blockKey}Encerts`]) || 0;
      const wrong = Number(exportScores[`${blockKey}Errors`]) || 0;
      const unanswered = Math.max(0, total - answered);
      const byType = {};
      QUESTION_TYPE_KEYS.forEach((typeKey) => {
        byType[typeKey] = getBlockTypeStatsFromExport(blockKey, typeKey);
      });
      return { answered, correct, wrong, unanswered, byType };
    };

    const totalQuestions = (totals.answered || 0) + (totals.unanswered || 0);

    const row = [
      new Date(),
      att,
      body.timeTakenSeconds || '',
      totalQuestions,
      totals.answered || 0,
      totals.correct || 0,
      totals.wrong || 0,
      totals.unanswered || 0,
      totals.points != null ? totals.points : '',
      totals.grade10 != null ? totals.grade10 : '',
      stu.emailHash || '',
      stu.emailDomain || '',
      stu.uniqueAttemptsLocal != null ? Number(stu.uniqueAttemptsLocal) : ''
    ];

    QUESTION_TYPE_KEYS.forEach((typeKey) => {
      const stats = getTypeStats(typeKey);
      const answered = stats.answered || 0;
      const correct = stats.correct || 0;
      const wrong = stats.wrong || 0;
      const unanswered = stats.unanswered != null ? stats.unanswered : Math.max(0, (Number(exportScores[`${typeKey}Preguntes`]) || 0) - answered);
      const total = answered + unanswered;
      row.push(total, answered, correct, wrong, unanswered);
    });

    BLOCK_CONFIG.forEach((block) => {
      const stats = getBlockStats(block.key);
      const answered = stats.answered || 0;
      const correct = stats.correct || 0;
      const wrong = stats.wrong || 0;
      const unanswered = stats.unanswered != null ? stats.unanswered : Math.max(0, (Number(exportScores[`${block.key}Preguntes`]) || 0) - answered);
      const total = answered + unanswered;
      row.push(total, answered, correct, wrong, unanswered);
      QUESTION_TYPE_KEYS.forEach((typeKey) => {
        const subStats = (stats.byType && stats.byType[typeKey]) ? stats.byType[typeKey] : getBlockTypeStatsFromExport(block.key, typeKey);
        const subAnswered = subStats.answered || 0;
        const subCorrect = subStats.correct || 0;
        const subWrong = subStats.wrong || 0;
        const subUnanswered = subStats.unanswered != null ? subStats.unanswered : Math.max(0, (Number(exportScores[`${block.key}${QUESTION_TYPE_SUFFIX[typeKey]}Preguntes`]) || 0) - subAnswered);
        const subTotal = subAnswered + subUnanswered;
        row.push(subTotal, subAnswered, subCorrect, subWrong, subUnanswered);
      });
    });

    row.push(
      stu.school || '',
      stu.mathConfidence != null ? Number(stu.mathConfidence) : '',
      stu.mobileUsage != null ? Number(stu.mobileUsage) : '',
      stu.sleepHours != null ? Number(stu.sleepHours) : '',
      stu.studyHours != null ? Number(stu.studyHours) : '',
      stu.tutoring || '',
      stu.mathAnxiety != null ? Number(stu.mathAnxiety) : ''
    );
    resum.appendRow(row);

    const answers = body.answers || {};
    const keys = Object.keys(answers).sort((a, b) => Number(a) - Number(b));
    const rowsDetall = keys.map((k) => {
      const x = answers[k] || {};
      let punt = '';
      try {
        const nOpts = Array.isArray(x.opcions) ? x.opcions.length : 4;
        if (x.resposta == null || x.resposta === '') {
          punt = 0;
        } else if (x.correcta === true) {
          punt = 1;
        } else if (x.correcta === false) {
          const pen = nOpts > 1 ? (1 / (nOpts - 1)) : 0.25;
          punt = -pen;
        } else {
          punt = '';
        }
      } catch (err) {
        punt = '';
      }

      return [
        new Date(), att, Number(k),
        x.idPregunta || '',
        x.bloc || '',
        x.blocLabel || '',
        x.tipus || '',
        x.tipusLabel || '',
        x.enunciat || '',
        x.resposta || '',
        x.respostaText || '',
        x.correctaId || '',
        x.correctaText || '',
        x.correcta === true ? 'TRUE' : (x.correcta === false ? 'FALSE' : ''),
        punt,
        x.temps != null ? Number(x.temps) : '',
        x.tempsFinsPrimera != null ? Number(x.tempsFinsPrimera) : '',
        x.canvis != null ? Number(x.canvis) : '',
        x.confianca != null ? Number(x.confianca) : '',
        x.dificultat != null ? Number(x.dificultat) : '',
        x.estrategia || '',
        stu.emailHash || '',
        stu.emailDomain || '',
        stu.uniqueAttemptsLocal != null ? Number(stu.uniqueAttemptsLocal) : '',
        stu.school || '',
        stu.mathConfidence != null ? Number(stu.mathConfidence) : '',
        stu.mobileUsage != null ? Number(stu.mobileUsage) : '',
        stu.sleepHours != null ? Number(stu.sleepHours) : '',
        stu.studyHours != null ? Number(stu.studyHours) : '',
        stu.tutoring || '',
        stu.mathAnxiety != null ? Number(stu.mathAnxiety) : ''
      ];
    });

    if (rowsDetall.length) {
      detail.getRange(detail.getLastRow() + 1, 1, rowsDetall.length, rowsDetall[0].length).setValues(rowsDetall);
    }

    return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput('ERR').setMimeType(ContentService.MimeType.TEXT);
  }
}

function appendDebug_(ss, body) {
  const name = 'Debug';
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  sh.appendRow([new Date(), ss.getId(), ss.getUrl(), JSON.stringify(body)]);
}

function getOrCreateStorage_() {
  const name = 'Avaluacio_Mates_2nESO';
  const props = PropertiesService.getScriptProperties();
  const savedId = props.getProperty('STORAGE_SHEET_ID');
  if (savedId) {
    try { return SpreadsheetApp.openById(savedId); } catch (e) {}
  }
  const files = DriveApp.getFilesByName(name);
  if (files.hasNext()) {
    const file = files.next();
    const id = file.getId();
    props.setProperty('STORAGE_SHEET_ID', id);
    return SpreadsheetApp.openById(id);
  }
  const ss = SpreadsheetApp.create(name);
  props.setProperty('STORAGE_SHEET_ID', ss.getId());
  return ss;
}

function ensureResumSheet_(ss) {
  const name = 'Resum';
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
  }

  const headers = [
    'Timestamp','AttemptId','Temps(s)',
    'Totals_Preguntes','Totals_Respostes','Totals_Encerts','Totals_Errors','Totals_NoRespostes','Totals_Punts','Totals_Nota10',
    'EmailHash','EmailDomain','ParticipacionsLocal'
  ];

  QUESTION_TYPE_KEYS.forEach((typeKey) => {
    const base = QUESTION_TYPE_LABELS[typeKey].replace(/\s+/g, '');
    headers.push(`${base}_Preguntes`, `${base}_Respostes`, `${base}_Encerts`, `${base}_Errors`, `${base}_NoRespostes`);
  });

  BLOCK_CONFIG.forEach((block) => {
    const blockBase = block.sheetLabel;
    headers.push(`${blockBase}_Preguntes`, `${blockBase}_Respostes`, `${blockBase}_Encerts`, `${blockBase}_Errors`, `${blockBase}_NoRespostes`);
    QUESTION_TYPE_KEYS.forEach((typeKey) => {
      const typeSuffix = QUESTION_TYPE_SUFFIX[typeKey];
      headers.push(`${blockBase}_${typeSuffix}_Preguntes`, `${blockBase}_${typeSuffix}_Respostes`, `${blockBase}_${typeSuffix}_Encerts`, `${blockBase}_${typeSuffix}_Errors`, `${blockBase}_${typeSuffix}_NoRespostes`);
    });
  });

  headers.push('CentrePrimaria','ConfiancaInicial','HoresMobil','HoresSon','HoresEstudiMates','ReforcMates','AnsietatMates');

  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  sh.setFrozenRows(1);
  return sh;
}


// ========================================
// TRIGGER I NORMALITZACIÓ DE RESPOSTES
// ========================================

/**
 * Crea (idempotent) el trigger onFormSubmit que invoca processFormSubmission
 */
function setupOnSubmitTrigger(sheetId) {
  // Eliminar triggers duplicats per a la mateixa funció
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction && t.getHandlerFunction() === 'processFormSubmission') {
      ScriptApp.deleteTrigger(t);
    }
  });
  ScriptApp.newTrigger('processFormSubmission')
    .forSpreadsheet(sheetId)
    .onFormSubmit()
    .create();
}

//
function processFormSubmission(e) {
  const sheet = e.range.getSheet();
  const ss = sheet.getParent();
  const detail = ensureDetailSheet_(ss);

  const row = e.range.getRow();
  const timestamp = sheet.getRange(row, 1).getValue(); // 1a columna del full de respostes
  const nv = e.namedValues || {};

  // Títols tal com es creen al formulari
  const T = {
    respostesSeleccionades: 'Respostes seleccionades (JSON)',
    centrePrimaria: 'Centre de procedència (Primària)',
    confiancaInicial: 'Confiança Inicial (1-10)',
    horesMobil: "Hores d'ús del mòbil al dia",
    horesSon: 'Hores de son per nit',
    horesEstudiMates: "Hores setmanals d'estudi de matemàtiques",
    reforcMates: 'Reforç de matemàtiques',
    ansietatMates: 'Ansietat davant les matemàtiques (1-5)'
  };
  const get = (title) => (nv[title] && nv[title][0]) ? nv[title][0] : '';

  let payload = {};
  const raw = get(T.respostesSeleccionades);
  if (!raw) return;
  try { payload = JSON.parse(raw); } catch (err) { Logger.log('JSON invàlid a Respostes seleccionades'); return; }

  const ctx = {
    centrePrimaria: get(T.centrePrimaria),
    confiancaInicial: get(T.confiancaInicial),
    horesMobil: get(T.horesMobil),
    horesSon: get(T.horesSon),
    horesEstudiMates: get(T.horesEstudiMates),
    reforcMates: get(T.reforcMates),
    ansietatMates: get(T.ansietatMates)
  };

  const keys = Object.keys(payload).sort((a,b) => Number(a) - Number(b));
  const rows = keys.map(k => {
    const x = payload[k] || {};
    // Càlcul del punt per pregunta (1 si correcta, -1/(nOpcions-1) si incorrecta, 0 si en blanc)
    let punt = '';
    try {
      const nOpts = Array.isArray(x.opcions) ? x.opcions.length : 4;
      if (x.resposta == null || x.resposta === '') {
        punt = 0;
      } else if (x.correcta === true) {
        punt = 1;
      } else if (x.correcta === false) {
        const pen = nOpts > 1 ? (1 / (nOpts - 1)) : 0.25;
        punt = -pen;
      } else {
        punt = '';
      }
    } catch (e) { punt = ''; }
    return [
      timestamp || new Date(),
      '',
      Number(k),
      x.idPregunta || '',
      x.bloc || '',
      x.blocLabel || '',
      x.tipus || '',
      x.tipusLabel || '',
      x.enunciat || '',
      x.resposta || '',
      x.respostaText || '',
      x.correctaId || '',
      x.correctaText || '',
      x.correcta === true ? 'TRUE' : (x.correcta === false ? 'FALSE' : ''),
      punt,
      x.temps != null ? Number(x.temps) : '',
      x.tempsFinsPrimera != null ? Number(x.tempsFinsPrimera) : '',
      x.canvis != null ? Number(x.canvis) : '',
      x.confianca != null ? Number(x.confianca) : '',
      x.dificultat != null ? Number(x.dificultat) : '',
      x.estrategia || '',
      '', '', '',
      ctx.centrePrimaria,
      ctx.confiancaInicial,
      ctx.horesMobil,
      ctx.horesSon,
      ctx.horesEstudiMates,
      ctx.reforcMates,
      ctx.ansietatMates
    ];
  });

  if (rows.length) detail.getRange(detail.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}

function ensureDetailSheet_(ss) {
  const name = 'Detall';
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
  }
  const headers = [
    'Timestamp','AttemptId','Index','IdPregunta','Bloc','BlocLabel','Tipus','TipusLabel','Enunciat',
    'RespostaId','RespostaText','CorrectaId','CorrectaText','Correcta','Punt',
    'Temps','TempsFinsPrimera','Canvis','Confianca','Dificultat','Estrategia',
    'EmailHash','EmailDomain','ParticipacionsLocal',
    'CentrePrimaria','ConfiancaInicial','HoresMobil','HoresSon','HoresEstudiMates','ReforcMates','AnsietatMates'
  ];
  sh.getRange(1,1,1,headers.length).setValues([headers]);
  sh.setFrozenRows(1);
  return sh;
}


//
function createBaseForm() {
  const form = FormApp.create('Test de Matemàtiques - Avaluació Diagnòstica (Dades d\'Investigació)');

  form.setDescription(
    'Aquest formulari recull automàticament les dades d\'investigació del test de matemàtiques. ' +
    'NO omplir manualment - les dades s\'envien automàticament des de l\'aplicació web.'
  );

  try { form.setAcceptingResponses(true); } catch (e) { Logger.log('setAcceptingResponses no suportat: ' + e); }
  try { form.setAllowResponseEdits(false); } catch (e) { Logger.log('setAllowResponseEdits no suportat: ' + e); }
  try { form.setCollectEmail(false); } catch (e) { Logger.log('setCollectEmail no suportat: ' + e); }
  // Alguns entorns (fora de domini) no suporten setRequireLogin
  try { form.setRequireLogin(false); } catch (e) { Logger.log('setRequireLogin no suportat: ' + e); }

  console.log('Formulari base creat: ' + form.getEditUrl());
  return form;
}

//
function addBasicFields(form) {
  console.log('Afegint camps bàsics de resultats (valors totals)...');

  const defs = [];
  const addField = (key, title, help) => {
    defs.push({ key, title, help });
  };

  // Resultats totals (valors absoluts)
  addField('temps', 'Temps emprat (segons)', 'Temps total emprat per completar el test');
  addField('totalsEncerts', 'Encerts totals', 'Nombre total de respostes correctes');
  addField('totalsErrors', 'Errors totals', 'Nombre total de respostes incorrectes');
  addField('totalsNoRespostes', 'No respostes totals', 'Nombre de preguntes sense resposta');
  addField('totalsRespostes', 'Respostes totals', 'Nombre total de preguntes respostes');
  addField('totalsPunts', 'Punts totals (penalitzats)', 'Suma de punts amb penalització per errada');
  addField('totalsNota10', 'Nota sobre 10', 'Nota final sobre 10');

  // Resultats per tipus de pregunta
  QUESTION_TYPE_KEYS.forEach((typeKey) => {
    const label = QUESTION_TYPE_LABELS[typeKey];
    const lowerLabel = label.toLowerCase();
    addField(`${typeKey}Preguntes`, `Preguntes ${label}`, `Nombre total de preguntes ${lowerLabel}`);
    addField(`${typeKey}Respostes`, `Respostes ${label}`, `Nombre de preguntes ${lowerLabel} respostes`);
    addField(`${typeKey}Encerts`, `Encerts ${label}`, `Nombre d'encerts en preguntes ${lowerLabel}`);
    addField(`${typeKey}Errors`, `Errors ${label}`, `Nombre d'errors en preguntes ${lowerLabel}`);
    addField(`${typeKey}NoRespostes`, `No respostes ${label}`, `Nombre de preguntes ${lowerLabel} sense resposta`);
  });

  // Resultats per bloc i bloc-tipus
  BLOCK_CONFIG.forEach((block) => {
    const blockLabel = block.label;
    const lowerBlockLabel = blockLabel.toLowerCase();
    addField(`${block.key}Preguntes`, `Preguntes ${blockLabel}`, `Nombre total de preguntes del bloc ${lowerBlockLabel}`);
    addField(`${block.key}Respostes`, `Respostes ${blockLabel}`, `Nombre de preguntes respostes al bloc ${lowerBlockLabel}`);
    addField(`${block.key}Encerts`, `Encerts ${blockLabel}`, `Nombre d'encerts al bloc ${lowerBlockLabel}`);
    addField(`${block.key}Errors`, `Errors ${blockLabel}`, `Nombre d'errors al bloc ${lowerBlockLabel}`);
    addField(`${block.key}NoRespostes`, `No respostes ${blockLabel}`, `Nombre de preguntes sense resposta al bloc ${lowerBlockLabel}`);
    QUESTION_TYPE_KEYS.forEach((typeKey) => {
      const typeLabel = QUESTION_TYPE_LABELS[typeKey];
      const suffix = QUESTION_TYPE_SUFFIX[typeKey];
      const lowerTypeLabel = typeLabel.toLowerCase();
      addField(`${block.key}${suffix}Preguntes`, `Preguntes ${blockLabel} (${lowerTypeLabel})`, `Nombre de preguntes ${lowerTypeLabel} al bloc ${lowerBlockLabel}`);
      addField(`${block.key}${suffix}Respostes`, `Respostes ${blockLabel} (${lowerTypeLabel})`, `Nombre de respostes ${lowerTypeLabel} al bloc ${lowerBlockLabel}`);
      addField(`${block.key}${suffix}Encerts`, `Encerts ${blockLabel} (${lowerTypeLabel})`, `Nombre d'encerts ${lowerTypeLabel} al bloc ${lowerBlockLabel}`);
      addField(`${block.key}${suffix}Errors`, `Errors ${blockLabel} (${lowerTypeLabel})`, `Nombre d'errors ${lowerTypeLabel} al bloc ${lowerBlockLabel}`);
      addField(`${block.key}${suffix}NoRespostes`, `No respostes ${blockLabel} (${lowerTypeLabel})`, `Nombre de preguntes ${lowerTypeLabel} sense resposta al bloc ${lowerBlockLabel}`);
    });
  });

  const created = [];
  defs.forEach((d) => {
    const item = form.addTextItem().setTitle(d.title).setHelpText(d.help).setRequired(false);
    created.push({ key: d.key, item });
  });
  console.log(`${created.length} camps bàsics afegits`);
  return created;
}


//
function addContextualFields(form) {
  console.log('Afegint camps contextuals...');
  const defs = [
    { key: 'centrePrimaria', title: 'Centre de procedència (Primària)', help: "Centre de Primària de l'alumne" },
    { key: 'confiancaInicial', title: 'Confiança Inicial (1-10)', help: "Nivell de confiança inicial de l'estudiant" },
    { key: 'horesMobil', title: "Hores d'ús del mòbil al dia", help: 'Nombre d\'hores aproximat' },
    { key: 'horesSon', title: 'Hores de son per nit', help: 'Hores aproximades diàries' },
    { key: 'horesEstudiMates', title: "Hores setmanals d'estudi de matemàtiques", help: 'Hores/setmana aproximades' },
    { key: 'reforcMates', title: 'Reforç de matemàtiques', help: 'Cap / Esporàdic / Setmanal' },
    { key: 'ansietatMates', title: 'Ansietat davant les matemàtiques (1-5)', help: '1 (cap) a 5 (molta)' }
  ];
  const created = [];
  defs.forEach(d => {
    const item = form.addTextItem().setTitle(d.title).setHelpText(d.help).setRequired(false);
    created.push({ key: d.key, item });
  });
  console.log(`${created.length} camps contextuals afegits`);
  return created;
}

//
function addBehavioralAnalyticsFields(form) {
  console.log("Afegint camps d'analytics conductuals (JSON)...");
  const defs = [
    { key: 'tempsPerPregunta', title: 'Temps per Pregunta (JSON)', help: 'Ex: {"0": 45, "1": 32, ...} (segons)' },
    { key: 'canvisResposta', title: 'Canvis de Resposta (JSON)', help: 'Ex: {"3": 2, "7": 1, ...}' },
    { key: 'confiancaPerPregunta', title: 'Confiança per Pregunta (JSON)', help: 'Ex: {"0": 3, "1": 5, ...} (1-5)' },
    { key: 'dificultatPercebuda', title: 'Dificultat Percebuda (JSON)', help: 'Ex: {"0": 2, "1": 4, ...} (1-5)' },
    { key: 'estrategiesResolucio', title: 'Estratègies de Resolució (JSON)', help: 'Ex: {"0": "calcul_mental", ...}' },
    { key: 'patronsNavegacio', title: 'Patrons de Navegació (JSON)', help: 'Ex: [{timestamp, action, fromIndex, toIndex}, ...]' },
    { key: 'respostesSeleccionades', title: 'Respostes seleccionades (JSON)', help: 'Ex: {"0": {"idPregunta":"...","bloc":"...","resposta":"a","correcta":true}, ...}' }
  ];
  const created = [];
  defs.forEach(d => {
    const item = form.addParagraphTextItem().setTitle(d.title).setHelpText(d.help).setRequired(false);
    created.push({ key: d.key, item });
  });
  console.log(`${created.length} camps d'analytics afegits`);
  return created;
}

//
function addTechnicalMetadataFields(form) {
  console.log('Afegint camps de metadades tècniques...');
  const defs = [
    { key: 'sistemaOperatiu', title: 'Sistema Operatiu', help: 'Plataforma del dispositiu' },
    { key: 'navegador', title: 'Navegador', help: 'Informació del navegador utilitzat' },
    { key: 'resolucio', title: 'Resolució de Pantalla', help: 'Resolució (ample × alt)' },
    { key: 'horaInici', title: "Hora d'Inici", help: 
      "Timestamp d'inici del test (ISO)" },
    { key: 'diaSetmana', title: 'Dia de la Setmana', help: '0=diumenge, 1=dilluns, ...' }
  ];
  const created = [];
  defs.forEach(d => {
    const item = form.addTextItem().setTitle(d.title).setHelpText(d.help).setRequired(false);
    created.push({ key: d.key, item });
  });
  console.log(`${created.length} camps tècnics afegits`);
  return created;
}

//
function configureFormSettings(form) {
  console.log('Configurant settings del formulari...');
  
  // Configuracions de privacitat i seguretat
  try { form.setCollectEmail(false); } catch (e) { Logger.log('setCollectEmail no suportat: ' + e); }
  try { form.setRequireLogin(false); } catch (e) { Logger.log('setRequireLogin no suportat: ' + e); }
  try { form.setAllowResponseEdits(false); } catch (e) { Logger.log('setAllowResponseEdits no suportat: ' + e); }
  try { form.setAcceptingResponses(true); } catch (e) { Logger.log('setAcceptingResponses no suportat: ' + e); }
  
  // Missatge de confirmació personalitzat
  try {
    form.setConfirmationMessage(
      'Dades de recerca rebudes correctament! Gràcies per participar en aquest estudi d\'investigació educativa.'
    );
  } catch (e) { Logger.log('setConfirmationMessage no suportat: ' + e); }
  
  console.log('Settings configurats');
}

//
function createLinkedSpreadsheet(form) {
  console.log('Creant Google Sheets enllaçat...');
  
  try {
    // Crear un nou Spreadsheet i enllaçar-lo com a destí de respostes
    const ss = SpreadsheetApp.create(`Respostes - ${form.getTitle()}`);
    const ssId = ss.getId();
    form.setDestination(FormApp.DestinationType.SPREADSHEET, ssId);
    
    // Obtenir l'ID del spreadsheet enllaçat
    const formResponses = form.getDestinationId() || ssId;
    
    if (formResponses) {
      console.log('Google Sheets creat i enllaçat automàticament');
      console.log('Spreadsheet ID: ' + formResponses);
      return formResponses;
    } else {
      console.log('No s\'ha pogut crear l\'enllaç automàtic amb Sheets');
      return null;
    }
  } catch (error) {
    console.log('Error creant Sheets: ' + error.toString());
    return null;
  }
}

//
function buildEntryMappingFromPrefill(form, items) {
  console.log('Generant URL preomplert per detectar entries...');
  const token = 'KEY__';
  // Petita pausa per assegurar persistència d'items abans de preomplir
  Utilities.sleep(500);
  let response = form.createResponse();

  items.forEach(rec => {
    const it = rec.item;
    try {
      const t = it.getType();
      if (t === FormApp.ItemType.TEXT) {
        const ir = it.asTextItem().createResponse(token + rec.key);
        response = response.withItemResponse(ir);
      } else if (t === FormApp.ItemType.PARAGRAPH_TEXT) {
        const ir = it.asParagraphTextItem().createResponse(token + rec.key);
        response = response.withItemResponse(ir);
      }
    } catch (e) {
      Logger.log('No s\'ha pogut preomplir un camp: ' + e);
    }
  });

  let prefillUrl = '';
  try {
    prefillUrl = response.toPrefilledUrl();
  } catch (e) {
    Logger.log('No s\'ha pogut generar prefill URL: ' + e);
  }
  console.log('URL preomplert (per intern): ' + prefillUrl);

  const query = prefillUrl.split('?')[1] || '';
  const params = query.split('&');
  const entries = {};
  params.forEach(p => {
    try {
      const [k, v] = p.split('=').map(decodeURIComponent);
      if (k && v && k.indexOf('entry.') === 0 && v.indexOf(token) === 0) {
        const key = v.substring(token.length);
        entries[key] = k; // k = entry.XXXXXXXXX
      }
    } catch (e) {}
  });

  // Obtenir FORM_ID públic per a l'URL d'enviament
  const pub = form.getPublishedUrl();
  const m = pub && pub.match(/\/forms\/d\/e\/([^/]+)/);
  const publicId = m ? m[1] : null;
  const actionUrl = publicId ? `https://docs.google.com/forms/d/e/${publicId}/formResponse` : null;

  return { actionUrl, entries, prefillUrl };
}

//
function generateJavaScriptCode(formData) {
  console.log('Generant codi JavaScript...');

  const entries = formData.entries || {};
  const get = (k) => entries[k] || 'entry.MANUALMENT';
  const now = new Date().toLocaleString('ca-ES');

  const sections = [
    {
      comment: '    // Dades bàsiques (valors totals)',
      props: [
        'temps: "' + get('temps') + '"',
        'totalsEncerts: "' + get('totalsEncerts') + '"',
        'totalsErrors: "' + get('totalsErrors') + '"',
        'totalsNoRespostes: "' + get('totalsNoRespostes') + '"',
        'totalsRespostes: "' + get('totalsRespostes') + '"',
        'totalsPunts: "' + get('totalsPunts') + '"',
        'totalsNota10: "' + get('totalsNota10') + '"'
      ]
    },
    {
      comment: '    // Resultats per tipus de pregunta',
      props: QUESTION_TYPE_KEYS.flatMap((typeKey) => [
        typeKey + 'Preguntes: "' + get(typeKey + 'Preguntes') + '"',
        typeKey + 'Respostes: "' + get(typeKey + 'Respostes') + '"',
        typeKey + 'Encerts: "' + get(typeKey + 'Encerts') + '"',
        typeKey + 'Errors: "' + get(typeKey + 'Errors') + '"',
        typeKey + 'NoRespostes: "' + get(typeKey + 'NoRespostes') + '"'
      ])
    },
    {
      comment: '    // Resultats per bloc (valors totals)',
      props: BLOCK_CONFIG.flatMap((block) => [
        block.key + 'Preguntes: "' + get(block.key + 'Preguntes') + '"',
        block.key + 'Respostes: "' + get(block.key + 'Respostes') + '"',
        block.key + 'Encerts: "' + get(block.key + 'Encerts') + '"',
        block.key + 'Errors: "' + get(block.key + 'Errors') + '"',
        block.key + 'NoRespostes: "' + get(block.key + 'NoRespostes') + '"'
      ])
    },
    {
      comment: '    // Resultats per bloc i tipus',
      props: BLOCK_CONFIG.flatMap((block) => (
        QUESTION_TYPE_KEYS.flatMap((typeKey) => {
          const suffix = QUESTION_TYPE_SUFFIX[typeKey];
          return [
            block.key + suffix + 'Preguntes: "' + get(block.key + suffix + 'Preguntes') + '"',
            block.key + suffix + 'Respostes: "' + get(block.key + suffix + 'Respostes') + '"',
            block.key + suffix + 'Encerts: "' + get(block.key + suffix + 'Encerts') + '"',
            block.key + suffix + 'Errors: "' + get(block.key + suffix + 'Errors') + '"',
            block.key + suffix + 'NoRespostes: "' + get(block.key + suffix + 'NoRespostes') + '"'
          ];
        })
      ))
    },
    {
      comment: '    // Dades contextuals ampliades',
      props: [
        'centrePrimaria: "' + get('centrePrimaria') + '"',
        'confiancaInicial: "' + get('confiancaInicial') + '"',
        'horesMobil: "' + get('horesMobil') + '"',
        'horesSon: "' + get('horesSon') + '"',
        'horesEstudiMates: "' + get('horesEstudiMates') + '"',
        'reforcMates: "' + get('reforcMates') + '"',
        'ansietatMates: "' + get('ansietatMates') + '"'
      ]
    },
    {
      comment: '    // Analytics conductuals (JSON string)',
      props: [
        'tempsPerPregunta: "' + get('tempsPerPregunta') + '"',
        'canvisResposta: "' + get('canvisResposta') + '"',
        'confiancaPerPregunta: "' + get('confiancaPerPregunta') + '"',
        'dificultatPercebuda: "' + get('dificultatPercebuda') + '"',
        'estrategiesResolucio: "' + get('estrategiesResolucio') + '"',
        'patronsNavegacio: "' + get('patronsNavegacio') + '"',
        'respostesSeleccionades: "' + get('respostesSeleccionades') + '"'
      ]
    },
    {
      comment: '    // Metadades tècniques',
      props: [
        'sistemaOperatiu: "' + get('sistemaOperatiu') + '"',
        'navegador: "' + get('navegador') + '"',
        'resolucio: "' + get('resolucio') + '"',
        'horaInici: "' + get('horaInici') + '"',
        'diaSetmana: "' + get('diaSetmana') + '"'
      ]
    }
  ];

  const propertyLines = [];
  sections.forEach((section) => {
    propertyLines.push(section.comment);
    section.props.forEach((prop) => propertyLines.push('    ' + prop));
  });

  const lastPropertyIndex = (() => {
    for (let i = propertyLines.length - 1; i >= 0; i--) {
      if (!propertyLines[i].trim().startsWith('//')) return i;
    }
    return -1;
  })();

  const formattedProperties = propertyLines.map((line, index) => {
    if (line.trim().startsWith('//')) {
      return line;
    }
    const needsComma = index !== lastPropertyIndex;
    return needsComma ? line + ',' : line;
  });

  const lines = [
    '// ========================================',
    '// CONFIGURACIÓ AUTOMÀTICA DE GOOGLE FORMS',
    '// Generat automàticament el ' + now,
    '// ========================================',
    '',
    '// URL del formulari per enviar respostes',
    'const GOOGLE_FORM_ACTION_URL = "' + (formData.responseUrl || formData.actionUrl || '') + '";',
    '',
    '// IMPORTANT: Clau → entry.XXXX generada automàticament.',
    "// Si canvies el formulari, torna a executar l'script de creació.",
    'const GOOGLE_FORM_ENTRIES = {'
  ];

  Array.prototype.push.apply(lines, formattedProperties);
  lines.push('};');
  lines.push('');
  lines.push('// ========================================');
  lines.push('// INFORMACIÓ');
  lines.push('// - Formulari (editar): ' + formData.editUrl);
  lines.push('// - Formulari (veure): ' + formData.publishedUrl);
  lines.push('// - Full de càlcul vinculat (ID): ' + (formData.sheetId || 'n/a'));

  const jsCode = lines.join('\n');

  console.log('\nCODI PER ENGANXAR A script.js');
  console.log('==========================================');
  console.log(jsCode);
  console.log('==========================================\n');
}


//
function deleteTestForm() {
  const forms = DriveApp.getFilesByType('application/vnd.google-apps.form');
  
  while (forms.hasNext()) {
    const form = forms.next();
    if (form.getName().includes('Test de Matemàtiques - Avaluació Diagnòstica')) {
      console.log('Eliminant formulari de prova: ' + form.getName());
      DriveApp.removeFile(form);
    }
  }
  
  console.log('Formularis de prova eliminats');
}

// ========================================
// FUNCIONS D'EXECUCIÓ
// ========================================

/**
 * Executa la configuració completa
 * Aquesta és la funció principal a executar
 */
function main() {
  setupMathEvaluationForm();
}

/**
 * Prova ràpida per verificar que el script funciona
 */
function testScript() {
  console.log('Provant script...');
  console.log('Script funcionant correctament');
  console.log('Executa setupMathEvaluationForm() per crear el formulari');
}
