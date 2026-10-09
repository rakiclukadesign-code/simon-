/* Zajednički kod za SVE formulare na sajtu (stručno savetovanje i karijera).
   Podešavanja stoje samo ovde, na jednom mestu. */
(function () {
  'use strict';

  // ===== Web3Forms =====
  // Ključ se pravi na https://web3forms.com sa klijentovim e-mailom. Ključ je predviđen da stoji javno u kodu.
  // Dok je 'OVDE_KLJUC', slanje se simulira (poruka u konzoli i demo poruka uspeha).
  const WEB3FORMS_KEY = 'OVDE_KLJUC';

  // Prijave za posao: ako budu stizale na drugi e-mail, napravite poseban ključ sa tim e-mailom i upišite ga ovde.
  // Dok je prazno, formular za karijeru koristi isti ključ kao formular za savetovanje (WEB3FORMS_KEY).
  const WEB3FORMS_KEY_KARIJERA = '';

  // PRILOZI RADE SAMO NA PRO (PLAĆENOM) PAKETU. Na besplatnom paketu postavite ATTACHMENTS_ENABLED = false.
  // Važi za oba formulara: kad je false, polja za priloge i CV se sakrivaju i prikazuje se napomena o slanju na e-mail ili Viber.
  const ATTACHMENTS_ENABLED = true;

  // Ograničenja priloga. Dokumentacija Web3Forms navodi samo: podrazumevani uploader do 5 MB po fajlu (Pro).
  // Dozvoljeni tipovi, ukupna veličina i najveći broj fajlova NISU dokumentovani, pa su ukupno (15 MB) i broj fajlova (5)
  // konzervativne vrednosti. Proveriti pravim Pro ključem.
  const LIMITS = { maxFiles: 5, maxFileMB: 5, maxTotalMB: 15 };

  const ENDPOINT = 'https://api.web3forms.com/submit';
  const DEMO_KEY = 'OVDE_KLJUC';

  const delay = ms => new Promise(r => setTimeout(r, ms));
  const fmtSize = n => n < 1048576 ? Math.max(1, Math.round(n / 1024)) + ' KB' : (n / 1048576).toFixed(1).replace('.', ',') + ' MB';
  const fileCount = n => n + (n % 10 === 1 && n % 100 !== 11 ? ' fajl' : (n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? ' fajla' : ' fajlova'));
  const keyFor = kind => (kind === 'karijera' && WEB3FORMS_KEY_KARIJERA) ? WEB3FORMS_KEY_KARIJERA : WEB3FORMS_KEY;

  /* ---------- komponenta za prilog fajlova ----------
     o: { input, pick, drop, list, err, live, allowed:[ext], extLabel, max, maxFileMB, maxTotalMB, onChange }
     max === 1: jedan fajl (novi izbor zamenjuje prethodni). */
  function attachments(o) {
    const max = o.max || LIMITS.maxFiles;
    const fileMB = o.maxFileMB || LIMITS.maxFileMB;
    const totalMB = o.maxTotalMB || LIMITS.maxTotalMB;
    let files = [];
    const extOf = n => (n.split('.').pop() || '').toLowerCase();
    const say = t => { if (o.live) o.live.textContent = t; };
    const changed = () => { if (o.onChange) o.onChange(files); };

    function limitsText() {
      return max === 1
        ? 'Formati: ' + o.extLabel + '. Jedan fajl, do ' + fileMB + ' MB.'
        : 'Formati: ' + o.extLabel + '. Najviše ' + max + ' fajlova, do ' + fileMB + ' MB po fajlu i do ' + totalMB + ' MB ukupno.';
    }
    function showErr(list) {
      o.err.textContent = list.join(' ');
      o.err.hidden = !list.length;
      if (list.length) say('Neki fajlovi nisu dodati: ' + list.join(' '));
    }
    function render() {
      o.list.textContent = '';
      files.forEach((f, i) => {
        const li = document.createElement('li'), th = document.createElement('span'), nm = document.createElement('span'), btn = document.createElement('button');
        th.className = 'th';
        if (['jpg', 'jpeg', 'png'].includes(extOf(f.name))) {
          const im = document.createElement('img'), u = URL.createObjectURL(f);
          im.src = u; im.alt = '';
          im.onload = () => URL.revokeObjectURL(u);
          im.onerror = () => { th.textContent = extOf(f.name).toUpperCase(); };
          th.appendChild(im);
        } else th.textContent = extOf(f.name).toUpperCase();
        nm.className = 'nm'; nm.textContent = f.name;
        const sz = document.createElement('span'); sz.className = 'sz'; sz.textContent = fmtSize(f.size); nm.appendChild(sz);
        btn.type = 'button'; btn.textContent = '✕'; btn.setAttribute('aria-label', 'Ukloni fajl ' + f.name);
        btn.onclick = () => {
          files.splice(i, 1); render(); showErr([]); changed();
          say('Fajl ' + f.name + ' je uklonjen.');
          const bs = [...o.list.querySelectorAll('button')];
          (bs[Math.min(i, bs.length - 1)] || o.pick).focus();
        };
        li.append(th, nm, btn); o.list.appendChild(li);
      });
    }
    function add(list) {
      const rej = [], added = [];
      [...list].forEach(f => {
        if (!o.allowed.includes(extOf(f.name))) { rej.push(f.name + ': nepodržan format (dozvoljeno: ' + o.extLabel + ').'); return; }
        if (f.size > fileMB * 1048576) { rej.push(f.name + ': fajl je prevelik (' + fmtSize(f.size) + '), najviše je ' + fileMB + ' MB' + (max === 1 ? '.' : ' po fajlu.')); return; }
        if (max === 1) { files = [f]; added.push(f.name); return; }
        if (files.some(x => x.name === f.name && x.size === f.size)) return;
        if (files.length >= max) { rej.push(f.name + ': najviše je ' + max + ' fajlova.'); return; }
        if (files.reduce((n, x) => n + x.size, 0) + f.size > totalMB * 1048576) { rej.push(f.name + ': ukupna veličina priloga ne sme preći ' + totalMB + ' MB.'); return; }
        files.push(f); added.push(f.name);
      });
      render(); showErr(rej); changed();
      if (added.length && !rej.length) say('Dodato fajlova: ' + added.length + '.');
    }
    o.pick.onclick = () => o.input.click();
    o.input.addEventListener('change', () => { add(o.input.files); o.input.value = ''; });
    ['dragenter', 'dragover'].forEach(t => o.drop.addEventListener(t, e => { e.preventDefault(); o.drop.classList.add('over'); }));
    ['dragleave', 'drop'].forEach(t => o.drop.addEventListener(t, e => { e.preventDefault(); o.drop.classList.remove('over'); }));
    o.drop.addEventListener('drop', e => { if (e.dataTransfer && e.dataTransfer.files) add(e.dataTransfer.files); });
    return {
      add, limitsText,
      clearError: () => showErr([]),
      get files() { return files; }
    };
  }

  /* ---------- slanje ----------
     Fajlovi idu kao FormData (multipart) pod imenima attachment, attachment_2, ... Bez fajlova se šalje JSON (radi i na besplatnom paketu).
     Baca grešku ako slanje ne uspe. */
  async function send(o) {
    const data = Object.assign({ access_key: o.key }, o.data);
    if (o.key === DEMO_KEY) {
      console.info('[Web3Forms DEMO] Ključ nije upisan, slanje nije izvršeno. Podaci koji bi bili poslati:', data,
        o.withFiles ? 'Prilozi: ' + o.files.map(f => f.name).join(', ') : '(bez priloga)');
      await delay(800);
      return;
    }
    let init;
    if (o.withFiles && o.files.length) {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v === true ? 'true' : v));
      o.files.forEach((f, i) => fd.append(i ? 'attachment_' + (i + 1) : 'attachment', f, f.name));
      init = { method: 'POST', body: fd }; // bez Content-Type zaglavlja: pregledač ga sam postavlja
    } else {
      init = { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) };
    }
    const r = await fetch(ENDPOINT, init);
    const d = await r.json().catch(() => ({}));
    if (!r.ok || !d.success) throw new Error(d.message || ('HTTP ' + r.status));
  }

  window.SimonForms = { ATTACHMENTS_ENABLED, LIMITS, keyFor, fmtSize, fileCount, attachments, send };
})();
