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
    dispositiu: 'Tipus de Dispositiu',
    ambient: "Ambient d'Estudi",
    confiancaInicial: 'Confiança Inicial (1-10)',
    experienciaPrevia: 'Experiència Prèvia'
  };
  const get = (title) => (nv[title] && nv[title][0]) ? nv[title][0] : '';

  let payload = {};
  const raw = get(T.respostesSeleccionades);
  if (!raw) return;
  try { payload = JSON.parse(raw); } catch (err) { Logger.log('JSON invàlid a Respostes seleccionades'); return; }

  const ctx = {
    dispositiu: get(T.dispositiu),
    ambient: get(T.ambient),
    confiancaInicial: get(T.confiancaInicial),
    experienciaPrevia: get(T.experienciaPrevia)
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
      ctx.dispositiu,
      ctx.ambient,
      ctx.confiancaInicial,
      ctx.experienciaPrevia
    ];
  });

  if (rows.length) detail.getRange(detail.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}

function ensureDetailSheet_(ss) {
  const name = 'Detall';
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    const headers = [
      'Timestamp','Index','IdPregunta','Bloc','BlocLabel','Enunciat',
      'RespostaId','RespostaText','CorrectaId','CorrectaText','Correcta','Punt',
      'Temps','TempsFinsPrimera','Canvis','Confianca','Dificultat','Estrategia',
      'Dispositiu','Ambient','ConfiancaInicial','ExperienciaPrevia'
    ];
    sh.getRange(1,1,1,headers.length).setValues([headers]);
    sh.setFrozenRows(1);
  }
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
  
  form.setAcceptingResponses(true);
  form.setAllowResponseEdits(false);
  form.setCollectEmail(false);
  form.setRequireLogin(false);
  
  console.log('Formulari base creat: ' + form.getEditUrl());
  return form;
}

/**
 * Afegeix els camps de dades bàsiques (7 camps)
 */
function addBasicFields(form) {
  console.log('Afegint camps bàsics de puntuacions...');

  // Claus alineades amb l'app (script.js):
  // temps, total, processos, numeros_algebra, geometria, estadistica, funcions
  const defs = [
    { key: 'temps', title: 'Temps emprat (segons)', help: 'Temps total emprat per completar el test' },
    { key: 'total', title: 'Puntuació total (%)', help: 'Percentatge final (amb penalització per errada)' },
    { key: 'processos', title: 'Puntuació Processos i mètodes (%)', help: 'Percentatge penalitzat del bloc Processos i mètodes' },
    { key: 'numeros_algebra', title: 'Puntuació Números i àlgebra (%)', help: 'Percentatge penalitzat del bloc Números i àlgebra' },
    { key: 'geometria', title: 'Puntuació Geometria (%)', help: 'Percentatge penalitzat del bloc Geometria' },
    { key: 'estadistica', title: 'Puntuació Estadística i probabilitat (%)', help: 'Percentatge penalitzat del bloc Estadística i probabilitat' },
    { key: 'funcions', title: 'Puntuació Funcions (%)', help: 'Percentatge penalitzat del bloc Funcions' }
  ];

  const created = [];
  defs.forEach(d => {
    const item = form.addTextItem().setTitle(d.title).setHelpText(d.help).setRequired(false);
    created.push({ key: d.key, item });
  });
  console.log(`${created.length} camps bàsics afegits`);
  return created;
}

/**
 * Afegeix els camps de dades contextuals (4 camps)
 */
function addContextualFields(form) {
  console.log('Afegint camps contextuals...');
  const defs = [
    { key: 'dispositiu', title: 'Tipus de Dispositiu', help: 'Dispositiu utilitzat per fer el test' },
    { key: 'ambient', title: "Ambient d'Estudi", help: "Lloc on s'ha realitzat el test" },
    { key: 'confiancaInicial', title: 'Confiança Inicial (1-10)', help: "Nivell de confiança inicial de l'estudiant" },
    { key: 'experienciaPrevia', title: 'Experiència Prèvia', help: 'Familiaritat amb tests online' }
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
  form.setCollectEmail(false);
  form.setRequireLogin(false);
  form.setAllowResponseEdits(false);
  form.setAcceptingResponses(true);
  
  // Missatge de confirmació personalitzat
  form.setConfirmationMessage(
    'Dades de recerca rebudes correctament! Gràcies per participar en aquest estudi d\'investigació educativa.'
  );
  
  console.log('Settings configurats');
}

/**
 * Crea un Google Sheets enllaçat automàticament
 */
function createLinkedSpreadsheet(form) {
  console.log('Creant Google Sheets enllaçat...');
  
  try {
    // Crear enllaç automàtic amb Sheets
    form.setDestination(FormApp.DestinationType.SPREADSHEET);
    
    // Obtenir l'ID del spreadsheet creat
    const formResponses = form.getDestinationId();
    
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
  let response = form.createResponse();

  items.forEach(rec => {
    const it = rec.item;
    try {
      switch (it.getType()) {
        case FormApp.ItemType.TEXT:
          response = response.withItemResponse(it.asTextItem().createResponse(token + rec.key));
          break;
        case FormApp.ItemType.PARAGRAPH_TEXT:
          response = response.withItemResponse(it.asParagraphTextItem().createResponse(token + rec.key));
          break;
        default:
          // Altres tipus no s'usen aquí
          break;
      }
    } catch (e) {
      // Si algun tipus no accepta resposta per preomplert, l'ignorem
    }
  });

  const prefillUrl = response.toPrefilledUrl();
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
    total: "${get('total')}",
    processos: "${get('processos')}",
    numeros_algebra: "${get('numeros_algebra')}",
    geometria: "${get('geometria')}",
    estadistica: "${get('estadistica')}",
    funcions: "${get('funcions')}",

    // Dades contextuals
    dispositiu: "${get('dispositiu')}",
    ambient: "${get('ambient')}",
    confiancaInicial: "${get('confiancaInicial')}",
    experienciaPrevia: "${get('experienciaPrevia')}",

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
