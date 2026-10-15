(function () {
  'use strict';
  const CONFIG = {
    repo: 'Zelinsky-Vladimir/lampa-releases',
    appStore: '',
    googlePlay: '',
  };
  const FILES = {
    macArm: 'Lampa-mac-arm64.dmg',
    macIntel: 'Lampa-mac-x64.dmg',
    winSetup: 'Lampa-Setup.exe',
    winPortable: 'Lampa-Portable.exe',
    appImage: 'Lampa-linux-x86_64.AppImage',
    deb: 'Lampa-linux-amd64.deb',
  };
  const RU = {
    tourKicker: 'Внутри приложения',
    tourTitle: 'Посмотрите, прежде чем скачать',
    tourSub: 'Настоящие экраны из приложения для iPhone. На iPad и компьютере всё то же, только просторнее.',
    t1t: 'Ваша полка, а не магазин',
    t1d: 'Обложки, прогресс и быстрые фильтры. Целую папку книг можно добавить разом.',
    t2t: 'Закраски в четыре цвета',
    t2d: 'Выделите фрагмент, чтобы отметить его, добавить заметку, перевести или скопировать.',
    t3t: 'Значение слова — не уходя со страницы',
    t3d: 'Нажмите на слово, и словарь объяснит его, даже если оно в другой форме.',
    t4t: 'Настройте под себя',
    t4d: 'Пять выверенных тем, шрифты для чтения, размер и межстрочный интервал.',
    t5t: 'Настоящий чёрный для ночи',
    t5d: 'Мягкий текст на чистом чёрном: глазам спокойно, а OLED-экраны экономят заряд.',
    t6t: '70 000 бесплатных книг внутри',
    t6d: 'Project Gutenberg встроен, а свою библиотеку Calibre можно подключить по OPDS.',
    tourCta: 'Скачать Lampa бесплатно',
    navFeatures: 'Возможности', navDownload: 'Скачать', navSupport: 'Поддержка',
    pill: 'Новое: словарь и каталоги OPDS',
    heroTitle: 'Спокойная читалка <br>для ваших книг',
    heroLead: 'FB2, EPUB и TXT на iPhone, iPad, Mac, Windows и Linux. Место, заметки и списки сами переносятся между устройствами.',
    heroUnder: 'Бесплатно · без рекламы · <a href="#download">другие платформы ↓</a>',
    dlFor: 'Скачать для {os}',
    storeTop: 'Загрузите в', playTop: 'Доступно в', soon: 'скоро',
    featKicker: 'Возможности', featTitle: 'Всё для долгого чтения, ничего лишнего',
    f1t: 'FB2 и EPUB без конвертации', f1d: 'Открывает книги как есть, вместе с обложками и сносками. ZIP с FB2 тоже.',
    f2t: 'Место, заметки и списки — везде', f2d: 'Дочитали на телефоне, продолжили на планшете или компьютере с той же страницы.',
    f3t: 'Закраски и заметки', f3d: 'Четыре цвета, заметки к фрагментам, переход по сноскам и обратно одним касанием.',
    f4t: 'Словарь и перевод', f4d: 'Значение слова или перевод фразы прямо в книге. На iPhone перевод без интернета.',
    f5t: 'Каталоги OPDS', f5d: 'Project Gutenberg и ваша библиотека Calibre — листайте и скачивайте прямо в приложении.',
    f6t: '«Прочитано» и «Хочу прочитать»', f6d: 'Оценки, обложки и порядок — маленький Goodreads внутри читалки.',
    thKicker: 'Для глаз', thTitle: 'Пять тем — на день, вечер и ночь', thSub: 'Контраст от 8:1 до 14:1, без режущего белого. Шрифты Literata, PT Serif и ещё три.',
    thSample: 'Всё смешалось в доме Облонских.', th1: 'Бумага', th2: 'Сепия', th3: 'Шалфей', th4: 'Сумерки', th5: 'Ночь',
    dlKicker: 'Скачать', dlTitle: 'Бесплатно на всех устройствах', dlVersion: 'Версия {v} · {date}', dlAll: 'Все версии',
    macArm: 'Apple Silicon', macArmSub: '.dmg · M1 и новее', macIntel: 'Intel', macIntelSub: '.dmg',
    winSetup: 'Установщик', winSetupSub: '.exe · Windows 10 и 11', winPortable: 'Портативная', winPortableSub: '.exe без установки',
    appImage: 'AppImage', appImageSub: 'любой дистрибутив', deb: '.deb', debSub: 'Debian, Ubuntu',
    get: 'Скачать', storesNote: 'iPhone и iPad — в App Store, Android — в Google Play.',
    faqTitle: 'Частые вопросы',
    q1: 'Это правда бесплатно?', a1: 'Да. Чтение, заметки, списки и синхронизация бесплатны. Позже появится подписка с большим облаком для книг, но всё, что есть сейчас, останется бесплатным.',
    q2: 'Нужен ли аккаунт?', a2: 'Нет. Без входа всё хранится на устройстве. Аккаунт нужен только для синхронизации между устройствами.',
    q3: 'Где хранятся мои книги?', a3: 'На вашем устройстве. Если вы вошли, файлы книг ещё и в закрытом облаке в ЕС — чтобы открыть книгу на другом устройстве.',
    q4: 'Какие форматы?', a4: 'FB2, FB2.ZIP, EPUB и TXT. PDF пока нет.',
    footSupport: 'Поддержка', footPrivacy: 'Конфиденциальность', footReleases: 'Все версии', footContact: 'Связаться', footBy: '© 2026 Владимир Зелинский',
    supKicker: 'Поддержка', supTitle: 'Чем помочь?', supLead: 'Ответы на частые вопросы. Не нашли своего — напишите, отвечаю сам, обычно в течение дня.',
    supWrite: 'Написать разработчику', supWriteSub: 'приложите версию из «Аккаунт и приложение»', supBtn: 'Написать',
    privTitle: 'Политика конфиденциальности',
  };
  const FR = {
    tourKicker: 'Dans l’application',
    tourTitle: 'Voyez-la avant de la télécharger',
    tourSub: 'De vrais écrans de l’app iPhone. Sur iPad et ordinateur, c’est pareil, en plus spacieux.',
    t1t: 'Votre étagère, pas une boutique',
    t1d: 'Couvertures, progression et filtres rapides. Ajoutez tout un dossier de livres d’un coup.',
    t2t: 'Surlignez en quatre couleurs',
    t2d: 'Sélectionnez un passage pour le marquer, l’annoter, le traduire ou le copier.',
    t3t: 'Le sens sans quitter la page',
    t3d: 'Touchez un mot : le dictionnaire l’explique, même conjugué ou accordé.',
    t4t: 'À votre goût',
    t4d: 'Cinq thèmes soignés, des polices de lecture, la taille et l’interligne.',
    t5t: 'Un vrai noir pour la nuit',
    t5d: 'Texte doux sur noir pur : reposant pour les yeux et économe sur écran OLED.',
    t6t: '70 000 livres gratuits inclus',
    t6d: 'Project Gutenberg est intégré, et votre bibliothèque Calibre se connecte via OPDS.',
    tourCta: 'Obtenir Lampa gratuitement',
    navFeatures: 'Fonctions', navDownload: 'Télécharger', navSupport: 'Aide',
    pill: 'Nouveau : dictionnaire et catalogues OPDS',
    heroTitle: 'Une liseuse paisible <br>pour vos propres livres',
    heroLead: 'FB2, EPUB et TXT sur iPhone, iPad, Mac, Windows et Linux. Votre page, vos notes et vos listes vous suivent d’un appareil à l’autre.',
    heroUnder: 'Gratuit · sans publicité · <a href="#download">autres plateformes ↓</a>',
    dlFor: 'Télécharger pour {os}', storeTop: 'Télécharger dans l’', playTop: 'Disponible sur', soon: 'bientôt',
    featKicker: 'Fonctions', featTitle: 'Tout pour la lecture au long cours, rien de superflu',
    f1t: 'FB2 et EPUB sans conversion', f1d: 'Ouvre les livres tels quels, avec couvertures et notes. Le FB2 dans un ZIP aussi.',
    f2t: 'Page, notes et listes partout', f2d: 'Arrêtez sur le téléphone, reprenez à la même page sur la tablette ou l’ordinateur.',
    f3t: 'Surlignages et notes', f3d: 'Quatre couleurs, notes sur les passages, aller-retour vers les notes en un geste.',
    f4t: 'Dictionnaire et traduction', f4d: 'Le sens d’un mot ou la traduction d’une phrase sans quitter le livre. Sur iPhone, la traduction marche hors ligne.',
    f5t: 'Catalogues OPDS', f5d: 'Project Gutenberg et votre bibliothèque Calibre : parcourez et téléchargez dans l’app.',
    f6t: '« Lus » et « À lire »', f6d: 'Notes, couvertures et ordre — un petit Goodreads dans la liseuse.',
    thKicker: 'Pour les yeux', thTitle: 'Cinq thèmes pour le jour, le soir et la nuit', thSub: 'Contraste entre 8:1 et 14:1, sans blanc éblouissant. Literata, PT Serif et trois autres polices.',
    thSample: 'Tout était sens dessus dessous chez les Oblonski.', th1: 'Papier', th2: 'Sépia', th3: 'Sauge', th4: 'Crépuscule', th5: 'Nuit',
    dlKicker: 'Télécharger', dlTitle: 'Gratuit sur tous vos appareils', dlVersion: 'Version {v} · {date}', dlAll: 'Toutes les versions',
    macArm: 'Apple Silicon', macArmSub: '.dmg · M1 et plus récents', macIntel: 'Intel', macIntelSub: '.dmg',
    winSetup: 'Installateur', winSetupSub: '.exe · Windows 10 et 11', winPortable: 'Portable', winPortableSub: '.exe sans installation',
    appImage: 'AppImage', appImageSub: 'toute distribution', deb: '.deb', debSub: 'Debian, Ubuntu',
    get: 'Télécharger', storesNote: 'iPhone et iPad sur l’App Store, Android sur Google Play.',
    faqTitle: 'Questions fréquentes',
    q1: 'C’est vraiment gratuit ?', a1: 'Oui. Lecture, notes, listes et synchronisation sont gratuites. Un abonnement avec plus d’espace cloud viendra plus tard, mais tout ce qui existe aujourd’hui restera gratuit.',
    q2: 'Faut-il un compte ?', a2: 'Non. Sans connexion, tout reste sur votre appareil. Un compte ne sert qu’à synchroniser vos appareils.',
    q3: 'Où sont mes livres ?', a3: 'Sur votre appareil. Si vous êtes connecté, les fichiers sont aussi dans un espace cloud privé en UE, pour ouvrir le livre sur un autre appareil.',
    q4: 'Quels formats ?', a4: 'FB2, FB2.ZIP, EPUB et TXT. Pas encore de PDF.',
    footSupport: 'Aide', footPrivacy: 'Confidentialité', footReleases: 'Toutes les versions', footContact: 'Contact', footBy: '© 2026 Vladimir Zelinskyi',
  };
  const DE = {
    tourKicker: 'In der App',
    tourTitle: 'Erst ansehen, dann laden',
    tourSub: 'Echte Bildschirme aus der iPhone-App. Auf iPad und Computer sieht es genauso aus, nur geräumiger.',
    t1t: 'Ihr Regal, kein Shop',
    t1d: 'Cover, Fortschritt und schnelle Filter. Einen ganzen Ordner voller Bücher auf einmal hinzufügen.',
    t2t: 'Markieren in vier Farben',
    t2d: 'Eine Stelle auswählen, um sie zu markieren, zu notieren, zu übersetzen oder zu kopieren.',
    t3t: 'Bedeutung, ohne die Seite zu verlassen',
    t3d: 'Wort antippen, und das Wörterbuch erklärt es, auch in gebeugter Form.',
    t4t: 'Ganz nach Ihrem Geschmack',
    t4d: 'Fünf abgestimmte Themen, Lese-Schriften, Größe und Zeilenabstand.',
    t5t: 'Echtes Schwarz für die Nacht',
    t5d: 'Sanfter Text auf reinem Schwarz: angenehm für die Augen und sparsam auf OLED.',
    t6t: '70.000 freie Bücher inklusive',
    t6d: 'Project Gutenberg ist eingebaut, Ihre eigene Calibre-Bibliothek verbinden Sie per OPDS.',
    tourCta: 'Lampa kostenlos laden',
    navFeatures: 'Funktionen', navDownload: 'Download', navSupport: 'Hilfe',
    pill: 'Neu: Wörterbuch und OPDS-Kataloge',
    heroTitle: 'Ein ruhiger Reader <br>für Ihre eigenen Bücher',
    heroLead: 'FB2, EPUB und TXT auf iPhone, iPad, Mac, Windows und Linux. Lesestelle, Notizen und Listen wandern zwischen Ihren Geräten mit.',
    heroUnder: 'Kostenlos · ohne Werbung · <a href="#download">andere Plattformen ↓</a>',
    dlFor: 'Für {os} laden', storeTop: 'Laden im', playTop: 'Jetzt bei', soon: 'bald',
    featKicker: 'Funktionen', featTitle: 'Alles für langes Lesen, nichts Überflüssiges',
    f1t: 'FB2 und EPUB ohne Umwandeln', f1d: 'Öffnet Bücher, wie sie sind, mit Covern und Fußnoten. FB2 im ZIP auch.',
    f2t: 'Lesestelle, Notizen und Listen überall', f2d: 'Am Handy aufhören, am Tablet oder Computer auf derselben Seite weiterlesen.',
    f3t: 'Markierungen und Notizen', f3d: 'Vier Farben, Notizen zu Stellen, Fußnoten hin und zurück mit einem Tippen.',
    f4t: 'Wörterbuch und Übersetzung', f4d: 'Bedeutung eines Wortes oder Übersetzung eines Satzes direkt im Buch. Auf dem iPhone offline.',
    f5t: 'OPDS-Kataloge', f5d: 'Project Gutenberg und Ihre Calibre-Bibliothek: direkt in der App stöbern und laden.',
    f6t: '„Gelesen“ und „Will ich lesen“', f6d: 'Bewertungen, Cover und Reihenfolge – ein kleines Goodreads im Reader.',
    thKicker: 'Augenschonend', thTitle: 'Fünf Themen für Tag, Abend und Nacht', thSub: 'Kontrast zwischen 8:1 und 14:1, kein grelles Weiß. Literata, PT Serif und drei weitere Schriften.',
    thSample: 'Im Hause Oblonski ging alles drunter und drüber.', th1: 'Papier', th2: 'Sepia', th3: 'Salbei', th4: 'Dämmerung', th5: 'Nacht',
    dlKicker: 'Download', dlTitle: 'Kostenlos auf allen Geräten', dlVersion: 'Version {v} · {date}', dlAll: 'Alle Versionen',
    macArm: 'Apple Silicon', macArmSub: '.dmg · M1 und neuer', macIntel: 'Intel', macIntelSub: '.dmg',
    winSetup: 'Installer', winSetupSub: '.exe · Windows 10 und 11', winPortable: 'Portabel', winPortableSub: '.exe ohne Installation',
    appImage: 'AppImage', appImageSub: 'jede Distribution', deb: '.deb', debSub: 'Debian, Ubuntu',
    get: 'Laden', storesNote: 'iPhone und iPad im App Store, Android bei Google Play.',
    faqTitle: 'Häufige Fragen',
    q1: 'Ist das wirklich kostenlos?', a1: 'Ja. Lesen, Notizen, Listen und Synchronisierung sind kostenlos. Später kommt ein Abo mit mehr Cloud-Speicher, aber alles, was es jetzt gibt, bleibt kostenlos.',
    q2: 'Brauche ich ein Konto?', a2: 'Nein. Ohne Anmeldung bleibt alles auf dem Gerät. Ein Konto braucht es nur zum Synchronisieren.',
    q3: 'Wo liegen meine Bücher?', a3: 'Auf Ihrem Gerät. Wenn Sie angemeldet sind, liegen die Dateien zusätzlich in privatem Cloud-Speicher in der EU – für das Öffnen auf anderen Geräten.',
    q4: 'Welche Formate?', a4: 'FB2, FB2.ZIP, EPUB und TXT. PDF noch nicht.',
    footSupport: 'Hilfe', footPrivacy: 'Datenschutz', footReleases: 'Alle Versionen', footContact: 'Kontakt', footBy: '© 2026 Vladimir Zelinskyi',
  };
  const ES = {
    tourKicker: 'Dentro de la app',
    tourTitle: 'Mírala antes de descargarla',
    tourSub: 'Pantallas reales de la app para iPhone. En iPad y ordenador es igual, pero con más espacio.',
    t1t: 'Tu estantería, no una tienda',
    t1d: 'Portadas, progreso y filtros rápidos. Añade una carpeta entera de libros de una vez.',
    t2t: 'Subraya en cuatro colores',
    t2d: 'Selecciona un pasaje para marcarlo, anotarlo, traducirlo o copiarlo.',
    t3t: 'El significado sin salir de la página',
    t3d: 'Toca una palabra y el diccionario la explica, aunque esté conjugada o en plural.',
    t4t: 'A tu manera',
    t4d: 'Cinco temas cuidados, fuentes de lectura, tamaño e interlineado.',
    t5t: 'Negro puro para la noche',
    t5d: 'Texto suave sobre negro puro: descansa la vista y ahorra batería en OLED.',
    t6t: '70.000 libros gratis dentro',
    t6d: 'Project Gutenberg viene integrado y tu biblioteca Calibre se conecta por OPDS.',
    tourCta: 'Descargar Lampa gratis',
    navFeatures: 'Funciones', navDownload: 'Descargar', navSupport: 'Ayuda',
    pill: 'Nuevo: diccionario y catálogos OPDS',
    heroTitle: 'Un lector tranquilo <br>para sus propios libros',
    heroLead: 'FB2, EPUB y TXT en iPhone, iPad, Mac, Windows y Linux. Su página, notas y listas le siguen entre dispositivos.',
    heroUnder: 'Gratis · sin anuncios · <a href="#download">otras plataformas ↓</a>',
    dlFor: 'Descargar para {os}', storeTop: 'Descárgalo en el', playTop: 'Disponible en', soon: 'pronto',
    featKicker: 'Funciones', featTitle: 'Todo para leer largo, nada de más',
    f1t: 'FB2 y EPUB sin convertir', f1d: 'Abre los libros tal cual, con portadas y notas al pie. FB2 dentro de ZIP también.',
    f2t: 'Página, notas y listas en todas partes', f2d: 'Deje de leer en el móvil y siga en la tableta o el ordenador desde la misma página.',
    f3t: 'Subrayados y notas', f3d: 'Cuatro colores, notas a pasajes, ir y volver de las notas al pie con un toque.',
    f4t: 'Diccionario y traducción', f4d: 'El significado de una palabra o la traducción de una frase sin salir del libro. En iPhone, sin conexión.',
    f5t: 'Catálogos OPDS', f5d: 'Project Gutenberg y su biblioteca de Calibre: explore y descargue dentro de la app.',
    f6t: '«Leídos» y «Quiero leer»', f6d: 'Valoraciones, portadas y orden: un pequeño Goodreads dentro del lector.',
    thKicker: 'Para la vista', thTitle: 'Cinco temas para el día, la tarde y la noche', thSub: 'Contraste entre 8:1 y 14:1, sin blanco que deslumbre. Literata, PT Serif y tres fuentes más.',
    thSample: 'En casa de los Oblonski andaba todo trastornado.', th1: 'Papel', th2: 'Sepia', th3: 'Salvia', th4: 'Crepúsculo', th5: 'Noche',
    dlKicker: 'Descargar', dlTitle: 'Gratis en todos sus dispositivos', dlVersion: 'Versión {v} · {date}', dlAll: 'Todas las versiones',
    macArm: 'Apple Silicon', macArmSub: '.dmg · M1 y posteriores', macIntel: 'Intel', macIntelSub: '.dmg',
    winSetup: 'Instalador', winSetupSub: '.exe · Windows 10 y 11', winPortable: 'Portátil', winPortableSub: '.exe sin instalar',
    appImage: 'AppImage', appImageSub: 'cualquier distribución', deb: '.deb', debSub: 'Debian, Ubuntu',
    get: 'Descargar', storesNote: 'iPhone y iPad en el App Store, Android en Google Play.',
    faqTitle: 'Preguntas frecuentes',
    q1: '¿De verdad es gratis?', a1: 'Sí. Leer, las notas, las listas y la sincronización son gratis. Más adelante habrá una suscripción con más espacio en la nube, pero todo lo que existe ahora seguirá siendo gratis.',
    q2: '¿Necesito una cuenta?', a2: 'No. Sin iniciar sesión todo se queda en su dispositivo. La cuenta solo sirve para sincronizar.',
    q3: '¿Dónde se guardan mis libros?', a3: 'En su dispositivo. Si inicia sesión, los archivos también se guardan en una nube privada en la UE, para abrir el libro en otro dispositivo.',
    q4: '¿Qué formatos?', a4: 'FB2, FB2.ZIP, EPUB y TXT. PDF todavía no.',
    footSupport: 'Ayuda', footPrivacy: 'Privacidad', footReleases: 'Todas las versiones', footContact: 'Contacto', footBy: '© 2026 Vladimir Zelinskyi',
  };
  const EN = {};
  const L = { ru: RU, fr: FR, de: DE, es: ES };
  const LANGS = ['en', 'ru', 'fr', 'de', 'es'];
  const LOCALES = { en: 'en-GB', ru: 'ru-RU', fr: 'fr-FR', de: 'de-DE', es: 'es-ES' };
  const tr = (key, fallback) => (lang !== 'en' && L[lang][key] != null ? L[lang][key] : fallback);
  let lang = 'en';

  function detectOs() {
    const ua = navigator.userAgent || '';
    const p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';
    if (/iPhone|iPad|iPod/.test(ua) || (/Mac/.test(p) && navigator.maxTouchPoints > 1)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    if (/Mac/.test(p) || /Macintosh/.test(ua)) return 'mac';
    if (/Win/.test(p) || /Windows/.test(ua)) return 'win';
    if (/Linux|X11/.test(p) || /Linux/.test(ua)) return 'linux';
    return 'other';
  }

  const fileUrl = (name) => `https://github.com/${CONFIG.repo}/releases/latest/download/${name}`;

  function apply() {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    for (const img of document.querySelectorAll('img[data-shot]')) img.src = `shots/${lang === 'ru' ? 'ru' : 'en'}-${img.dataset.shot}.webp`;
    for (const img of document.querySelectorAll('img[data-fshot]')) img.src = `shots/f/${lang === 'ru' ? 'ru' : 'en'}-${img.dataset.fshot}.webp`;
    for (const n of document.querySelectorAll('[data-t]')) {
      const key = n.dataset.t;
      if (!(key in EN)) EN[key] = n.innerHTML;
      const v = tr(key, EN[key]);
      if (v != null) n.innerHTML = v;
    }
    for (const b of document.querySelectorAll('.lang button')) b.classList.toggle('on', b.dataset.lang === lang);
    const docs = document.querySelectorAll('.doc section[lang]');
    const has = Array.from(docs).some((d) => d.lang === lang);
    for (const d of docs) d.hidden = d.lang !== (has ? lang : 'en');
    for (const n of document.querySelectorAll('.store.soon')) n.dataset.soon = tr('soon', 'soon');
    hero();
    version();
  }

  function hero() {
    const os = detectOs();
    const btn = document.getElementById('hero-dl');
    if (!btn) return;
    const map = { mac: ['macOS', 'macArm', 'Apple Silicon · .dmg'], win: ['Windows', 'winSetup', 'Windows 10, 11 · .exe'], linux: ['Linux', 'appImage', 'AppImage'] };
    const m = map[os];
    btn.hidden = !m;
    if (m) {
      btn.href = fileUrl(FILES[m[1]]);
      btn.querySelector('.t').textContent = tr('dlFor', 'Download for {os}').replace('{os}', m[0]);
      btn.querySelector('small').textContent = m[2];
    }
    for (const r of document.querySelectorAll('.dl-row')) r.classList.toggle('mine', !!m && r.dataset.file === m[1]);
    const store = document.getElementById('hero-store');
    if (store && os === 'android') store.replaceWith(document.getElementById('play-badge').cloneNode(true));
  }

  let release = null;
  async function version() {
    const out = document.getElementById('dl-version');
    if (!out) return;
    if (!release) {
      try {
        const cached = JSON.parse(sessionStorage.getItem('lampa-site-release') || 'null');
        if (cached && Date.now() - cached.at < 3600000) release = cached.data;
      } catch {}
    }
    if (!release) {
      try {
        const r = await fetch(`https://api.github.com/repos/${CONFIG.repo}/releases/latest`);
        if (r.ok) {
          const j = await r.json();
          release = { tag_name: j.tag_name, published_at: j.published_at };
          try {
            sessionStorage.setItem('lampa-site-release', JSON.stringify({ at: Date.now(), data: release }));
          } catch {}
        }
      } catch {}
    }
    if (!release) return;
    const date = new Date(release.published_at).toLocaleDateString(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' });
    out.textContent = tr('dlVersion', 'Version {v} · {date}').replace('{v}', release.tag_name.replace(/^v/, '')).replace('{date}', date) + ' · ';
  }

  function init() {
    for (const r of document.querySelectorAll('.dl-row')) r.href = fileUrl(FILES[r.dataset.file]);
    for (const a of document.querySelectorAll('[data-store]')) {
      const url = CONFIG[a.dataset.store];
      if (url) a.href = url;
      else a.classList.add('soon');
    }
    let saved = null;
    try {
      saved = localStorage.getItem('lampa-site-lang');
    } catch {}
    const q = new URLSearchParams(location.search).get('lang');
    const nav = (navigator.language || 'en').toLowerCase();
    const guess = /^(ru|uk|be|kk)/.test(nav) ? 'ru' : LANGS.find((l) => nav.startsWith(l)) || 'en';
    lang = LANGS.includes(q) ? q : LANGS.includes(saved) ? saved : guess;
    for (const b of document.querySelectorAll('.lang button')) {
      b.addEventListener('click', () => {
        lang = b.dataset.lang;
        try {
          localStorage.setItem('lampa-site-lang', lang);
        } catch {}
        apply();
      });
    }
    apply();
  }

  init();
})();
