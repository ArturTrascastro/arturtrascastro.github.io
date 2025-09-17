/**
 * GOOGLE APPS SCRIPT: CREACIÓ AUTOMÀTICA DEL FORM + IDS D'ENTRADA
 * ===============================================================
 * 
 * Què fa:
 * - Crea un Google Form amb TOTS els camps que fa servir l'app (2n ESO, diagnòstic 1r ESO)
 * - Enllaça automàticament un Google Sheets per recollir respostes
 * - Genera la URL d'enviament (formResponse) correcta
 * - GENERA AUTOMÀTICAMENT el mapa d'entries (entry.XXXX) per enganxar a l'app
 * 
 * Ús:
 * 1. Ves a https://script.google.com i crea un projecte nou
 * 2. Enganxa aquest codi complet
 * 3. Executa la funció principal: setupMathEvaluationForm()
 * 4. Accepta permisos i, en finalitzar, copia el bloc de codi que surt al Log
 * 5. Substitueix a la teva app (script.js) les constants amb el bloc generat
 */

/**
 * Funció principal que crea el formulari i extreu tots els IDs
 */
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

    // Resum
    const resum = ensureResumSheet_(ss);
    const t = body.totals || {};
    const blocks = body.blocks || {};
    const stu = body.student || {};
    const att = body.attemptId || '';
    const row = [
      new Date(),
      att,
      body.timeTakenSeconds || '',
      t.answered || 0,
      t.correct || 0,
      t.wrong || 0,
      t.unanswered || 0,
      t.points != null ? t.points : '',
      t.grade10 != null ? t.grade10 : ''
    ];
    // Per bloc: encerts/errors
    const blocKeys = ['processos','numeros_algebra','geometria','estadistica','funcions'];
    blocKeys.forEach(b => {
      const bb = blocks[b] || {};
      row.push(bb.correct || 0, bb.wrong || 0);
    });
    // Factors de context al Resum
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

    // Detall per pregunta (si vols), aquí ja tens body.answers (objecte)
    const detail = ensureDetailSheet_(ss);
    const answers = body.answers || {};
    const keys = Object.keys(answers).sort((a,b)=>Number(a)-Number(b));
    const rowsDetall = keys.map(k => {
      const x = answers[k];
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
        }
      } catch (e) { punt = ''; }
      return [
        new Date(), att, Number(k), x.idPregunta || '', x.bloc || '', x.blocLabel || '', x.enunciat || '',
        x.resposta || '', x.respostaText || '', x.correctaId || '', x.correctaText || '', x.correcta === true ? 'TRUE' : (x.correcta === false ? 'FALSE' : ''),
        punt,
        x.temps != null ? Number(x.temps) : '', x.tempsFinsPrimera != null ? Number(x.tempsFinsPrimera) : '', x.canvis != null ? Number(x.canvis) : '',
        x.confianca != null ? Number(x.confianca) : '', x.dificultat != null ? Number(x.dificultat) : '', x.estrategia || '',
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
    'Timestamp','AttemptId','Temps(s)','Respostes','Encerts','Errors','NoRespostes','Punts','Nota10',
    'Proc_Encerts','Proc_Errors','NumAlg_Encerts','NumAlg_Errors','Geo_Encerts','Geo_Errors','Est_Encerts','Est_Errors','Func_Encerts','Func_Errors',
    'CentrePrimaria','ConfiancaInicial','HoresMobil','HoresSon','HoresEstudiMates','ReforcMates','AnsietatMates'
  ];
  sh.getRange(1,1,1,headers.length).setValues([headers]);
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

/**
 * Full de detall: escriu una fila per pregunta a la pestanya "Detall".
 * Columnes: Timestamp, Index, IdPregunta, Bloc, BlocLabel, Enunciat,
 * RespostaId, RespostaText, CorrectaId, CorrectaText, Correcta,
 * Temps, TempsFinsPrimera, Canvis, Confianca, Dificultat, Estrategia,
 * Dispositiu, Ambient, ConfiancaInicial, ExperienciaPrevia
 */
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
      Number(k),
      x.idPregunta || '',
      x.bloc || '',
      x.blocLabel || '',
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
    'Timestamp','AttemptId','Index','IdPregunta','Bloc','BlocLabel','Enunciat',
    'RespostaId','RespostaText','CorrectaId','CorrectaText','Correcta','Punt',
    'Temps','TempsFinsPrimera','Canvis','Confianca','Dificultat','Estrategia',
    'CentrePrimaria','ConfiancaInicial','HoresMobil','HoresSon','HoresEstudiMates','ReforcMates','AnsietatMates'
  ];
  sh.getRange(1,1,1,headers.length).setValues([headers]);
  sh.setFrozenRows(1);
  return sh;
}

/**
 * Crea el formulari base amb títol i descripció
 */
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

/**
 * Afegeix els camps de dades bàsiques (7 camps)
 */
function addBasicFields(form) {
  console.log('Afegint camps bàsics de resultats (valors totals)...');

  // Resultats totals (valors absoluts)
  const totals = [
    { key: 'temps', title: 'Temps emprat (segons)', help: 'Temps total emprat per completar el test' },
    { key: 'totalsEncerts', title: 'Encerts totals', help: 'Nombre total de respostes correctes' },
    { key: 'totalsErrors', title: 'Errors totals', help: 'Nombre total de respostes incorrectes' },
    { key: 'totalsNoRespostes', title: 'No respostes totals', help: 'Nombre de preguntes sense resposta' },
    { key: 'totalsRespostes', title: 'Respostes totals', help: 'Nombre total de preguntes respostes' },
    { key: 'totalsPunts', title: 'Punts totals (penalitzats)', help: 'Suma de punts amb penalització per errada' },
    { key: 'totalsNota10', title: 'Nota sobre 10', help: 'Nota final sobre 10' }
  ];

  // Resultats per bloc (valors absoluts)
  const blocs = [
    { b: 'processos', label: 'Processos i mètodes' },
    { b: 'numeros_algebra', label: 'Números i àlgebra' },
    { b: 'geometria', label: 'Geometria' },
    { b: 'estadistica', label: 'Estadística i probabilitat' },
    { b: 'funcions', label: 'Funcions' }
  ];

  const defs = [...totals, ...blocs.flatMap(({ b, label }) => ([
    { key: `${b}Encerts`, title: `Encerts ${label}`, help: `Nombre d'encerts al bloc ${label}` },
    { key: `${b}Errors`, title: `Errors ${label}`, help: `Nombre d'errors al bloc ${label}` }
  ]))];

  const created = [];
  defs.forEach(d => {
    const item = form.addTextItem().setTitle(d.title).setHelpText(d.help).setRequired(false);
    created.push({ key: d.key, item });
  });
  console.log(`${created.length} camps bàsics afegits`);
  return created;
}

/**
 * Afegeix els camps de dades contextuals (7 camps actuals)
 */
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

/**
 * Afegeix els camps d'analytics conductuals (6 camps JSON)
 */
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

/**
 * Afegeix els camps de metadades tècniques (5 camps)
 */
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

/**
 * Configura els settings avançats del formulari
 */
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

/**
 * Crea un Google Sheets enllaçat automàticament
 */
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

/**
 * Crea un URL preomplert i obté el mapping entry.XXXX → clau de camp
 */
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

/**
 * Genera el codi JavaScript amb tots els IDs reals
 */
function generateJavaScriptCode(formData) {
  console.log('Generant codi JavaScript...');

  const entries = formData.entries || {};
  const get = (k) => entries[k] || 'entry.MANUALMENT';

  const jsCode = `
// ========================================
// CONFIGURACIÓ AUTOMÀTICA DE GOOGLE FORMS
// Generat automàticament el ${new Date().toLocaleString('ca-ES')}
// ========================================

// URL del formulari per enviar respostes
const GOOGLE_FORM_ACTION_URL = "${formData.responseUrl || formData.actionUrl || ''}";

// IMPORTANT: Clau → entry.XXXX generada automàticament.
// Si canvies el formulari, torna a executar l'script de creació.
const GOOGLE_FORM_ENTRIES = {
    // Dades bàsiques
    temps: "${get('temps')}",
    totalsEncerts: "${get('totalsEncerts')}",
    totalsErrors: "${get('totalsErrors')}",
    totalsNoRespostes: "${get('totalsNoRespostes')}",
    totalsRespostes: "${get('totalsRespostes')}",
    totalsPunts: "${get('totalsPunts')}",
    totalsNota10: "${get('totalsNota10')}",
    processosEncerts: "${get('processosEncerts')}",
    processosErrors: "${get('processosErrors')}",
    numeros_algebraEncerts: "${get('numeros_algebraEncerts')}",
    numeros_algebraErrors: "${get('numeros_algebraErrors')}",
    geometriaEncerts: "${get('geometriaEncerts')}",
    geometriaErrors: "${get('geometriaErrors')}",
    estadisticaEncerts: "${get('estadisticaEncerts')}",
    estadisticaErrors: "${get('estadisticaErrors')}",
    funcionsEncerts: "${get('funcionsEncerts')}",
    funcionsErrors: "${get('funcionsErrors')}",

    // Dades contextuals
    centrePrimaria: "${get('centrePrimaria')}",
    confiancaInicial: "${get('confiancaInicial')}",
    horesMobil: "${get('horesMobil')}",
    horesSon: "${get('horesSon')}",
    horesEstudiMates: "${get('horesEstudiMates')}",
    reforcMates: "${get('reforcMates')}",
    ansietatMates: "${get('ansietatMates')}",

    // Analytics conductuals (JSON)
    tempsPerPregunta: "${get('tempsPerPregunta')}",
    canvisResposta: "${get('canvisResposta')}",
    confiancaPerPregunta: "${get('confiancaPerPregunta')}",
    dificultatPercebuda: "${get('dificultatPercebuda')}",
    estrategiesResolucio: "${get('estrategiesResolucio')}",
    patronsNavegacio: "${get('patronsNavegacio')}",
    respostesSeleccionades: "${get('respostesSeleccionades')}",

    // Metadades tècniques
    sistemaOperatiu: "${get('sistemaOperatiu')}",
    navegador: "${get('navegador')}",
    resolucio: "${get('resolucio')}",
    horaInici: "${get('horaInici')}",
    diaSetmana: "${get('diaSetmana')}"
};

// (Opcional) Si vols guardar les respostes per pregunta, afegeix un camp extra al formulari
// i envia des de l'app un JSON amb les opcions triades: {"0":"a","1":"c",...}
// Ex.: respostesSeleccionades: "entry.XXXX"

// ========================================
// INFORMACIÓ
// - Formulari (editar): ${formData.editUrl}
// - Formulari (veure): ${formData.publishedUrl}
// - Full de càlcul vinculat (ID): ${formData.sheetId || 'n/a'}
`;

  console.log('\nCODI PER ENGANXAR A script.js');
  console.log('==========================================');
  console.log(jsCode);
  console.log('==========================================\n');
}

/**
 * Funció auxiliar per eliminar el formulari (només per proves)
 * ATENCIÓ: Aquesta funció elimina permanentment el formulari
 */
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
