import type { Dictionary } from '../types';

/** Română. */
const ro: Dictionary = {
  nav: {
    home: 'Acasă',
    services: 'Servicii',
    expertise: 'Domenii de specializare',
    authorities: 'Autorități și instituții',
    business: 'Pentru companii',
    coverage: 'Zone de acțiune',
    languages: 'Limbi',
    about: 'Despre noi',
    careers: 'Interpreți și traducători',
    apply: 'Aplică acum',
    requirements: 'Cerințe',
    contact: 'Contact',
    imprint: 'Informații legale',
    privacy: 'Protecția datelor',
  },

  ui: {
    logoSubtitle: 'Interpretariat & traduceri',
    skipToContent: 'Salt la conținut',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
    languageSwitcher: 'Limbă',
    languageSwitcherHint: 'Alegeți limba site-ului',
    currentLanguage: 'Limba curentă',
    breadcrumb: 'Vă aflați aici',
    home: 'Acasă',
    phone: 'Telefon',
    mobile: 'Mobil',
    fax: 'Fax',
    email: 'E-mail',
    address: 'Adresă',
    postalAddress: 'Adresă poștală',
    callNow: 'Sunați acum',
    writeEmail: 'Trimiteți un e-mail',
    requestQuote: 'Solicitați o ofertă',
    learnMore: 'Aflați mai multe',
    allLanguages: 'Vedeți toate limbile',
    backToHome: 'Înapoi la pagina principală',
    legallyBindingNote: 'Obligatorie din punct de vedere juridic este exclusiv versiunea în limba germană a acestei pagini.',
    applyCta: 'Aplicați ca interpret / traducător',
    applyCtaShort: 'Aplicați ca interpret',
    websiteLanguages:
      'Acest site este disponibil în prezent în {count} limbi europene. Adăugăm alte versiuni lingvistice la nevoie – contactați-ne.',
  },

  home: {
    metaTitle: 'Interpreți și traducători pentru autorități, instanțe și companii',
    metaDescription:
      'Biroul de interpretariat Translation Admy: interpretariat consecutiv și de conferință, precum și traduceri autorizate în numeroase limbi și dialecte. Pentru autorități, instanțe, companii și persoane fizice, în toată Europa.',
    heroKicker: 'Biroul de interpretariat Translation Admy',
    heroTitle: 'Înțelegere fără obstacole — în limba interlocutorului dumneavoastră',
    heroLead:
      'Asigurăm interpretariat și traduceri pentru autorități, instanțe, centre de primire, companii și persoane fizice. Interpreți vorbitori nativi, peste 10 ani de experiență, prezenți în Germania și în numeroase țări europene.',
    heroPrimary: 'Solicitare fără obligații',
    heroSecondary: 'Vedeți serviciile',
    heroBadges: [
      'Profesioniști vorbitori nativi',
      'Traduceri autorizate',
      'Intervenții în termen scurt',
    ],
    statLanguages: '18',
    statLanguagesLabel: 'Versiuni lingvistice ale site-ului',
    statYears: '10+',
    statYearsLabel: 'Peste 10 ani de experiență',
    statCoverage: 'La nivel european',
    statCoverageLabel: 'Zonă de acțiune',

    servicesTitle: 'Serviciile noastre',
    servicesLead:
      'De la o programare la o autoritate, la o ședință de judecată sau la o conferință internațională — asigurăm medierea lingvistică potrivită.',
    servicesCta: 'Vedeți toate serviciile',

    audienceTitle: 'Pentru cine lucrăm',
    audienceLead:
      'Serviciile noastre se adresează beneficiarilor publici, instituțiilor, companiilor și persoanelor fizice.',
    audienceCta: 'Informații pentru autorități',

    expertiseTitle: 'Domenii de specializare',
    expertiseLead:
      'Medierea lingvistică cere cunoștințe de specialitate. Interpreții noștri stăpânesc domeniile despre care este vorba.',

    languagesTitle: 'Limbi și dialecte',
    languagesLead:
      'Acoperim limbi europene, asiatice și africane — inclusiv dialecte rare, pentru care este adesea greu de găsit cineva în termen scurt.',
    languagesCta: 'Vedeți toate limbile',

    processTitle: 'Cum decurge o solicitare',
    processLead: 'Clar, rapid și fără efort administrativ din partea dumneavoastră.',
    process: [
      {
        title: '1. Solicitarea',
        text: 'Ne comunicați limba, data, locul și motivul — telefonic sau prin e-mail.',
      },
      {
        title: '2. Răspunsul',
        text: 'Verificăm disponibilitatea și revenim în scurt timp cu o ofertă concretă.',
      },
      {
        title: '3. Intervenția',
        text: 'Interpretul potrivit se prezintă la timp la fața locului sau traducerea este livrată.',
      },
      {
        title: '4. Facturarea',
        text: 'Primiți o factură transparentă — la nevoie conform cerințelor instituției dumneavoastră.',
      },
    ],

    valuesTitle: 'Pe ce vă puteți baza',
    valuesLead:
      'În discuțiile sensibile, acuratețea, neutralitatea și confidențialitatea nu sunt un serviciu suplimentar, ci o condiție de bază.',

    ctaTitle: 'Aveți nevoie de un interpret în termen scurt?',
    ctaText:
      'Sunați-ne sau scrieți-ne — revenim cât mai repede posibil cu un răspuns ferm.',
    ctaButton: 'Contactați-ne acum',
  },

  services: {
    metaTitle: 'Servicii — interpretariat și traduceri',
    metaDescription:
      'Interpretariat consecutiv, interpretariat de conferință, traduceri autorizate, interpretariat la autorități și instanțe și interpretariat de însoțire în numeroase limbi și dialecte.',
    h1: 'Serviciile noastre',
    lead:
      'Oferim servicii de interpretariat și traducere pentru autorități, instanțe, companii și persoane fizice — în combinația lingvistică de care aveți nevoie.',
    items: [
      {
        title: 'Interpretariat consecutiv',
        text: 'Interpretul redă cele spuse pe fragmente, după ce vorbitorul a terminat. Forma potrivită pentru discuții, audieri și întâlniri cu un număr restrâns de participanți.',
        bullets: [
          'Audieri, consultări și discuții cu autoritățile',
          'Negocieri și ședințe',
          'Nu necesită echipament tehnic',
        ],
      },
      {
        title: 'Interpretariat de conferință',
        text: 'Pentru evenimente cu public numeros și mai multe limbi. Cele spuse sunt redate simultan, fără a întrerupe desfășurarea.',
        bullets: [
          'Conferințe, sesiuni de specialitate și cursuri',
          'Evenimente multilingve',
          'Adaptare la programul dumneavoastră',
        ],
      },
      {
        title: 'Traduceri autorizate',
        text: 'Traduceri ale actelor și documentelor destinate depunerii la autorități, instanțe și instituții.',
        bullets: [
          'Acte de stare civilă și de identitate',
          'Diplome și adeverințe',
          'Documente judiciare și administrative',
        ],
      },
      {
        title: 'Interpretariat la autorități și instanțe',
        text: 'Mediere lingvistică în context administrativ și judiciar. Aici fiecare cuvânt contează: redăm ceea ce s-a spus efectiv, fără omisiuni și fără adăugiri.',
        bullets: [
          'Programări la servicii și autorități',
          'Termene de judecată și proceduri de poliție',
          'Neutralitate și confidențialitate',
        ],
      },
      {
        title: 'Interpretariat de însoțire',
        text: 'Însoțire personală acolo unde înțelegerea este necesară imediat — în viața de zi cu zi, la programări și în situații deosebite.',
        bullets: [
          'Însoțire la încheierea căsătoriei',
          'Vizite la medic și în spital',
          'Alte chestiuni personale',
        ],
      },
      {
        title: 'Traduceri specializate',
        text: 'Traduceri scrise la standard profesional — în orice combinație lingvistică aveți nevoie.',
        bullets: [
          'Medicină, economie, drept și tehnică',
          'Realizate de vorbitori nativi',
          'Terminologie de specialitate unitară',
        ],
      },
    ],
    noteTitle: 'Limba dumneavoastră nu apare în listă?',
    noteText:
      'Întrebați-ne. Acoperirea noastră lingvistică este deosebit de largă și vă stăm la dispoziție cu plăcere personal.',
  },

  expertise: {
    metaTitle: 'Domenii de specializare — medicină, drept, azil, economie și tehnică',
    metaDescription:
      'Domeniile de specializare ale Translation Admy: medicină și sănătate, drept și justiție, azil și migrație, administrație publică, economie și tehnică.',
    h1: 'Domenii de specializare',
    lead:
      'Traduceri profesionale la cel mai înalt nivel — fie că este vorba de medicină, economie, drept sau tehnică și indiferent de combinația lingvistică de care aveți nevoie.',
    items: [
      {
        title: 'Medicină și sănătate',
        text: 'Înțelegerea dintre personalul medical și pacienți, unde neînțelegerile pot avea consecințe grave.',
        bullets: [
          'Anamneză, informare și discuții de consiliere',
          'Vizite la medic și în spital',
          'Rezultate și documente medicale',
        ],
      },
      {
        title: 'Drept și justiție',
        text: 'Mediere lingvistică în mediul juridic, unde acuratețea și neutralitatea influențează desfășurarea procedurii.',
        bullets: [
          'Termene de judecată și audieri',
          'Contracte și acte procedurale',
          'Documente destinate instanțelor',
        ],
      },
      {
        title: 'Azil și migrație',
        text: 'Comunicarea în proceduri și structuri unde contează limbile și dialectele rare — precum și o conducere calmă și obiectivă a discuției.',
        bullets: [
          'Audieri și consiliere procedurală',
          'Centre de primire și cazare',
          'Limbi și dialecte rare',
        ],
      },
      {
        title: 'Administrație publică',
        text: 'Sprijin oriunde activitatea administrativă întâlnește persoane fără cunoștințe suficiente de limba germană.',
        bullets: [
          'Programări la servicii și direcții de specialitate',
          'Discuții de consiliere și de depunere a cererilor',
          'Decizii și corespondență oficială',
        ],
      },
      {
        title: 'Economie și industrie',
        text: 'Mediere lingvistică pentru activitatea curentă a companiilor — de la negocieri la documentație multilingvă.',
        bullets: [
          'Negocieri și întâlniri de afaceri',
          'Târguri și vizite în unități de producție',
          'Corespondență și documente de afaceri',
        ],
      },
      {
        title: 'Tehnică',
        text: 'Redarea conținutului tehnic cu terminologie unitară și simț al contextului de specialitate.',
        bullets: [
          'Documentație tehnică',
          'Instruiri și prezentări',
          'Documente de securitate și de exploatare',
        ],
      },
    ],
    noteTitle: 'Repartizare potrivită domeniului',
    noteText:
      'Pentru noi contează ca limba și domeniul de specialitate să se potrivească. Spuneți-ne motivul programării și o vom repartiza în consecință.',
  },

  authorities: {
    metaTitle: 'Autorități și instituții — interpretariat pentru sectorul public',
    metaDescription:
      'Servicii de interpretariat și traducere pentru instanțe, poliție, poliția federală, BAMF, oficii pentru străini, centre de primire, municipalități, ONG-uri și instituții europene precum EUAA și Frontex.',
    h1: 'Autorități și instituții',
    lead:
      'Beneficiarii publici au nevoie de mediere lingvistică fiabilă, neutră și disponibilă în termen scurt. Exact spre acest lucru este orientat biroul nostru.',
    audienceTitle: 'Cui se adresează oferta noastră',
    audienceLead:
      'Stăm la dispoziția următoarelor entități pentru servicii de interpretariat și traducere.',
    audienceDisclaimer:
      'Entitățile și organizațiile menționate aici descriu grupurile-țintă ale ofertei noastre. Ele nu constituie în mod expres referințe și nu există nicio colaborare sau relație contractuală, cu excepția cazului în care s-a convenit separat.',
    audience: [
      {
        title: 'Instanțe',
        text: 'Mediere lingvistică la ședințe, audieri și termene, precum și traducerea actelor.',
      },
      {
        title: 'Poliție și poliția federală',
        text: 'Înțelegere la consemnarea declarațiilor și la audieri — inclusiv în afara programului obișnuit.',
      },
      {
        title: 'Oficiul Federal pentru Migrație și Refugiați (BAMF)',
        text: 'Mediere lingvistică în cadrul procedurilor și al consilierii, inclusiv pentru limbi și dialecte rare.',
      },
      {
        title: 'Oficii pentru străini',
        text: 'Sprijin la prezentări, discuții privind cererile și traducerea documentelor oficiale.',
      },
      {
        title: 'Centre de primire',
        text: 'Înțelegere în activitatea curentă a centrelor de primire inițială și de cazare.',
      },
      {
        title: 'Municipalități și consilii județene',
        text: 'Mediere lingvistică pentru servicii de specialitate și direcții sociale, de tineret și de ordine publică.',
      },
      {
        title: 'Agenții de ocupare și servicii sociale',
        text: 'Însoțire la discuții de consiliere, de depunere a cererilor și de integrare.',
      },
      {
        title: 'Școli și instituții de învățământ',
        text: 'Discuții cu părinții, întâlniri de consiliere și documente școlare.',
      },
      {
        title: 'EUAA',
        text: 'Stăm la dispoziția Agenției Uniunii Europene pentru Azil pentru mediere lingvistică în limbile pe care le acoperim.',
      },
      {
        title: 'Frontex',
        text: 'Pentru operațiunile Agenției Europene pentru Poliția de Frontieră și Garda de Coastă oferim mediere lingvistică în limbi europene și extraeuropene.',
      },
      {
        title: 'ONG-uri și organizații internaționale',
        text: 'Sprijin lingvistic pentru centre de consiliere, organizații umanitare și instituții internaționale.',
      },
    ],
    principlesTitle: 'Principiile muncii noastre',
    principlesLead:
      'În discuțiile sensibile, atitudinea interpretului determină rezultatul.',
    principles: [
      {
        title: 'Redare fidelă',
        text: 'Pentru noi este foarte important ca la interpretariat și traducere să se redea întotdeauna exact ceea ce s-a spus efectiv.',
      },
      {
        title: 'Neutralitate',
        text: 'Interpretăm imparțial și fără a adăuga o apreciere proprie asupra celor spuse.',
      },
      {
        title: 'Confidențialitate',
        text: 'Toate conținuturile sunt tratate confidențial, în timpul și după intervenție.',
      },
      {
        title: 'Fiabilitate',
        text: 'Termenele confirmate sunt respectate. Primiți din timp un răspuns privind disponibilitatea.',
      },
    ],
    procurementTitle: 'Colaborare și atribuire',
    procurementText:
      'Ne adaptăm procedurilor instituției dumneavoastră și suntem disponibili atât pentru intervenții punctuale, cât și pentru o colaborare de durată.',
    procurementBullets: [
      'Comenzi individuale și intervenții în termen scurt',
      'Termene recurente pe bază de înțelegere',
      'Acorduri-cadru la cerere',
      'Facturare conform cerințelor instituției dumneavoastră',
      'Persoană de contact pentru întrebări pe durata intervenției',
    ],
    tendersTitle: 'Licitații și proceduri de atribuire în Europa',
    tendersText:
      'Participăm la licitații și proceduri de atribuire ale beneficiarilor publici din toată Europa. Dacă organizați o licitație pentru servicii lingvistice, contactați-ne — pregătim documentele necesare depunerii ofertei.',
  },

  business: {
    metaTitle: 'Pentru companii — interpretariat și traduceri specializate',
    metaDescription:
      'Servicii de interpretariat și traducere pentru companii: negocieri, târguri, vizite în unități de producție, instruiri, contracte și documentație tehnică în numeroase limbi.',
    h1: 'Pentru companii',
    lead:
      'Fie că este vorba de o negociere, un târg sau documentație tehnică: ne asigurăm că mesajul dumneavoastră ajunge în cealaltă limbă exact așa cum l-ați gândit.',
    items: [
      {
        title: 'Negocieri',
        text: 'Mediere lingvistică la întâlniri de afaceri, discuții contractuale și consultări cu parteneri internaționali.',
      },
      {
        title: 'Târguri și evenimente',
        text: 'Sprijin la stand și în programele conexe — inclusiv pe parcursul mai multor zile.',
      },
      {
        title: 'Vizite în unități de producție',
        text: 'Însoțirea grupurilor de vizitatori prin producție, laborator sau administrație.',
      },
      {
        title: 'Instruiri și prezentări',
        text: 'Transmiterea clară a proceselor, a instrucțiunilor de securitate și a conținutului tehnic.',
      },
      {
        title: 'Contracte și documente',
        text: 'Traducerea scrisă a documentelor comerciale și juridice, la cerere autorizată.',
      },
      {
        title: 'Documentație tehnică',
        text: 'Redarea conținutului tehnic cu terminologie unitară și trasabilă.',
      },
    ],
    processTitle: 'De la primul contact la intervenție',
    processLead: 'Un parcurs clar, care vă scutește de efort de coordonare.',
    process: [
      {
        title: 'Clarificarea nevoii',
        text: 'Limba, data, locul, durata și contextul de specialitate al evenimentului dumneavoastră.',
      },
      {
        title: 'Primirea ofertei',
        text: 'Primiți un răspuns concret privind disponibilitatea și condițiile.',
      },
      {
        title: 'Pregătirea intervenției',
        text: 'La cerere ne puneți la dispoziție documente în avans, pentru ca terminologia să fie corectă.',
      },
      {
        title: 'Realizarea',
        text: 'Medierea lingvistică are loc la timp la fața locului sau ca traducere scrisă.',
      },
    ],
    ctaTitle: 'O ofertă pentru compania dumneavoastră',
    ctaText:
      'Descrieți-ne pe scurt nevoia — revenim cu o evaluare concretă privind disponibilitatea și condițiile.',
  },

  coverage: {
    metaTitle: 'Zone de acțiune — în toată Europa',
    metaDescription:
      'Translation Admy intermediază interpreți și traducători pentru misiuni în toată Europa — la fața locului, telefonic sau prin video, inclusiv în proceduri de azil și de frontieră.',
    h1: 'Zone de acțiune',
    lead:
      'Biroul nostru are sediul în Bingen am Rhein. Interpreții noștri acționează în toată Europa.',
    baseTitle: 'Sediul din Bingen am Rhein',
    baseText:
      'Din Bingen am Rhein coordonăm misiuni în toată Europa. Pentru programările în termen foarte scurt ne bazăm pe o rețea care depășește granițele naționale.',
    europeTitle: 'Prezenți în toată Europa',
    europeText:
      'Translation Admy intermediază interpreți și traducători pentru misiuni în toată Europa. În funcție de comandă, sprijinim autorități, instituții publice, companii și organizații internaționale la fața locului, telefonic sau prin videoconferință.',
    capabilities: [
      'Misiuni în toată Europa',
      'Interpretariat la fața locului',
      'Interpretariat telefonic și prin video',
      'Misiuni în termen scurt și planificate din timp',
      'Proiecte transfrontaliere în mai multe țări',
      'Sprijin în proceduri de azil, migrație și primire',
      'Construirea unei rețele europene de interpreți',
    ],

    bordersTitle: 'Servicii de interpretariat pentru procedurile europene de frontieră și azil',
    bordersText:
      'Translation Admy construiește o rețea europeană de interpreți și traducători calificați. Mediatorii noștri lingvistici sunt disponibili pentru solicitări și eventuale misiuni în contextul Frontex, al Agenției Uniunii Europene pentru Azil (EUAA), al autorităților naționale în materie de azil, al centrelor de primire, precum și al structurilor de la frontierele externe europene.',
    bordersNote:
      'Sprijinim înțelegerea lingvistică în procedurile de azil, migrație, înregistrare, primire și returnare. În funcție de limbă, disponibilitate, calificare și locul misiunii, intervențiile pot fi organizate la fața locului, telefonic sau prin videoconferință.',

    countriesTitle: 'Zone europene de intervenție și intermediere',
    countriesNote:
      'Disponibilitatea concretă depinde de limbă, calificare, locul misiunii și dată.',

    nationwideTitle: 'În toată Europa',
    nationwideText:
      'Colaborăm cu interpreți în numeroase țări europene. Spuneți-ne locul și data — verificăm disponibilitatea la fața locului.',
    internationalTitle: 'Intervenții transfrontaliere',
    internationalText:
      'Pentru intervenții în mai multe țări sau în afara zonelor noastre obișnuite vă rugăm să ne contactați. Analizăm de la caz la caz dacă și cum putem acoperi nevoia dumneavoastră.',
    remoteTitle: 'Întâlniri telefonice și video',
    remoteText:
      'Când o întâlnire la fața locului nu este posibilă sau necesară, medierea lingvistică poate avea loc, pe bază de înțelegere, și telefonic sau prin videoconferință.',
  },

  languages: {
    metaTitle: 'Limbi — oferta noastră lingvistică completă',
    metaDescription:
      'Asigurăm interpretariat și traduceri în numeroase limbi și dialecte: limbi europene, asiatice, nord-africane și africane — inclusiv varietăți rare.',
    h1: 'Limbi și dialecte',
    lead:
      'Acoperirea noastră lingvistică este deosebit de largă și vă putem sprijini în numeroase limbi. Asigurăm pentru dumneavoastră interpretariat și traduceri în următoarele limbi.',
    searchLabel: 'Căutați o limbă',
    searchPlaceholder: 'de ex. Arabisch, ትግርኛ, Sorani …',
    clearSearch: 'Ștergeți căutarea',
    resultsOne: 'S-a găsit 1 limbă',
    resultsMany: 'S-au găsit {count} limbi',
    noResults: 'Nu s-a găsit nicio limbă potrivită.',
    noResultsHint: 'Întrebați-ne totuși — lista noastră nu este exhaustivă.',
    groupTitles: {
      asiatisch: 'Limbi asiatice și din Orientul Apropiat',
      europaeisch: 'Limbi europene',
      nordafrikanisch: 'Limbi nord-africane',
      afrikanisch: 'Limbi și dialecte africane',
    },
    groupIntros: {
      asiatisch:
        'De la arabă, trecând prin varietățile kurde, până la vietnameză — un punct forte al biroului nostru.',
      europaeisch:
        'Toate limbile oficiale uzuale ale UE, precum și limbi din Europa de Est și de Sud-Est, pentru autorități, instanțe și companii.',
      nordafrikanisch: 'Araba maghrebină și limbile berbere din Africa de Nord.',
      afrikanisch:
        'Peste 50 de limbi și dialecte din Africa de Vest, de Est și Centrală — inclusiv varietăți rare.',
    },
    missingTitle: 'Dacă limba dorită lipsește din listă, întrebați-ne.',
    missingText: 'Vă stăm la dispoziție cu plăcere personal. Așteptăm solicitarea dumneavoastră.',
  },

  about: {
    metaTitle: 'Despre noi — un birou de interpretariat cu peste 10 ani de experiență',
    metaDescription:
      'Translation Admy este o echipă experimentată de interpreți și traducători profesioniști, cu peste 10 ani de experiență în domeniu.',
    h1: 'Despre noi',
    lead:
      'Suntem o echipă experimentată de interpreți și traducători profesioniști, cu peste 10 ani de experiență în domeniu.',
    body: [
      'Ne ghidează o exigență ridicată, astăzi și în viitor: oferim clienților noștri doar cele mai bune servicii și soluții, întotdeauna la un preț avantajos. Oferta noastră se orientează exclusiv după nevoile și așteptările specifice ale clienților.',
      'Tocmai de aceea, în biroul nostru lucrează exclusiv interpreți și traducători calificați, vorbitori nativi. Colaboratorii noștri dispun de experiență solidă în traducere și interpretariat.',
      'Rezultatul: traduceri profesionale la cel mai înalt nivel — fie că este vorba de medicină, economie, drept sau tehnică și indiferent de combinația lingvistică de care aveți nevoie.',
    ],
    quote:
      'Pentru noi este foarte important ca la interpretariat și traducere să se redea întotdeauna exact ceea ce s-a spus efectiv.',
    valuesTitle: 'Ce ne caracterizează',
    values: [
      {
        title: 'Principiul vorbitorului nativ',
        text: 'În biroul nostru lucrează exclusiv interpreți și traducători calificați, vorbitori nativi.',
      },
      {
        title: 'Experiență',
        text: 'Peste 10 ani de experiență în domeniu — și colaboratori cu practică în interpretariat și traducere.',
      },
      {
        title: 'Orientați spre nevoie',
        text: 'Oferta noastră se orientează exclusiv după nevoile și așteptările specifice ale clienților.',
      },
      {
        title: 'Condiții corecte',
        text: 'Cele mai bune servicii și soluții pentru clienții noștri — întotdeauna la un preț avantajos.',
      },
    ],
  },

  careers: {
    metaTitle: 'Carieră — căutăm interpreți pentru toate limbile și dialectele',
    metaDescription:
      'Pentru consolidarea echipei noastre în toată Europa căutăm interpreți pentru toate limbile și dialectele. Aplicați acum la Translation Admy.',
    h1: 'Pentru interpreți și traducători',
    lead:
      'Pentru consolidarea echipei noastre în toată Europa căutăm interpreți pentru toate limbile și dialectele.',
    requirementsTitle: 'Cerințe',
    requirements: [
      'Dovada competenței lingvistice la nivelul C1 sau superior în limbile dumneavoastră de lucru — sau o calificare echivalentă recunoscută în țara de reședință',
      'Fără înscrieri în cazierul judiciar',
      'Este necesar dreptul de a desfășura activitate lucrativă',
    ],
    offerTitle: 'Ce vă așteaptă',
    offer: [
      'Intervenții în toată Europa — inclusiv în regiunea dumneavoastră',
      'Comenzi variate pentru autorități, instanțe, companii și persoane fizice',
      'O echipă care pune preț pe o mediere lingvistică exactă și neutră',
    ],
    applyTitle: 'Cum aplicați',
    applyText:
      'Trimiteți-ne candidatura prin e-mail, precizând limbile și dialectele dumneavoastră, precum și documentele justificative. Ne puteți contacta și telefonic.',
    closing: 'Așteptăm cu interes candidatura dumneavoastră.',
    networkTitle: 'De ce să colaborați cu Translation Admy?',
    networkLead:
      'Construim o rețea de interpreți și traducători în toată Europa. Iată cum lucrăm împreună.',
    benefits: [
      {
        title: 'Intervenții flexibile',
        text: 'Dumneavoastră decideți ce solicitări acceptați. Adaptăm programările la disponibilitatea dumneavoastră.',
      },
      {
        title: 'Proiecte la nivel european',
        text: 'Solicitările ne ajung din toată Europa — nevoia de mediere lingvistică crește dincolo de granițe.',
      },
      {
        title: 'Colaborare corectă',
        text: 'Înțelegeri clare privind amploarea, locul și condițiile — înainte de intervenție, nu după.',
      },
      {
        title: 'Cooperare pe termen lung',
        text: 'Nu urmărim programări izolate, ci o colaborare de încredere de-a lungul anilor.',
      },
      {
        title: 'Organizare profesionistă',
        text: 'Clarificăm din timp motivul, domeniul și cadrul, ca să ajungeți pregătit la întâlnire.',
      },
      {
        title: 'Comunicare simplă',
        text: 'Căi scurte, persoane de contact stabile și răspuns rapid — inclusiv în timpul unei intervenții.',
      },
      {
        title: 'Protecția datelor și confidențialitate',
        text: 'Documentele dumneavoastră sunt tratate confidențial și folosite exclusiv pentru evaluarea candidaturii.',
      },
    ],
    ctaTitle: 'Deveniți parte din rețeaua noastră',
    ctaText:
      'Trimiteți-ne candidatura cu limbile, domeniile de specializare și documentele dumneavoastră. Vom reveni cu un răspuns.',
  },

  apply: {
    metaTitle: 'Candidatură ca interpret sau traducător',
    metaDescription:
      'Candidați ca interpret sau traducător la Translation Admy. Candidatură online cu limbi, domenii de specializare, CV și documente justificative.',
    h1: 'Candidatură ca interpret sau traducător',
    lead:
      'Completați formularul și încărcați CV-ul. Vă analizăm dosarul și revenim cu un răspuns. Nu este necesară nicio înregistrare.',

    sectionPerson: 'Date personale',
    sectionLanguages: 'Limbi',
    sectionProfile: 'Profil de intervenție',
    sectionDocuments: 'Documente',

    firstName: 'Prenume',
    lastName: 'Nume',
    email: 'E-mail',
    phone: 'Număr de telefon',
    city: 'Localitatea de domiciliu',
    country: 'Țara',
    nationality: 'Cetățenie',
    spokenLanguages: 'Limbi vorbite',
    spokenLanguagesHint: 'Toate limbile și dialectele pe care le vorbiți, separate prin virgulă.',
    workingLanguages: 'Limbi de lucru',
    workingLanguagesHint: 'Direcțiile dumneavoastră lingvistice, de ex. arabă → germană, germană → arabă.',

    fieldsLabel: 'Domenii de specializare',
    fieldsHint: 'Este posibilă selecția multiplă.',
    fieldLabels: {
      asylum: 'Azil',
      authorities: 'Autorități',
      police: 'Poliție',
      courts: 'Instanțe',
      medical: 'Medicină',
      social: 'Servicii sociale',
      education: 'Educație',
      business: 'Economie',
      technical: 'Tehnică',
    },

    serviceModesLabel: 'Tip de activitate',
    serviceModeLabels: {
      interpreting: 'Interpretariat',
      translation: 'Traducere',
    },

    deliveryModesLabel: 'Formă de intervenție',
    deliveryModeLabels: {
      onsite: 'La fața locului',
      phone: 'Telefonic',
      video: 'Interpretariat video',
    },

    travelLabel: 'Disponibilitate de deplasare',
    travelLabels: {
      local: 'Localitatea de domiciliu și împrejurimi',
      regional: 'Regional',
      national: 'În toată țara de reședință',
      european: 'În toată Europa',
    },

    availabilityLabel: 'Disponibilitate',
    availabilityLabels: {
      fulltime: 'Normă întreagă',
      parttime: 'Normă parțială',
      occasional: 'Ocazional',
      'on-call': 'La cerere, în termen scurt',
    },

    experienceLabel: 'Experiență profesională',
    experienceLabels: {
      lt1: 'Mai puțin de 1 an',
      '1-3': '1–3 ani',
      '3-5': '3–5 ani',
      '5-10': '5–10 ani',
      gt10: 'Peste 10 ani',
    },

    messageLabel: 'Mesajul dumneavoastră',
    messageHint: 'Ce altceva ar trebui să știm despre dumneavoastră?',

    cvLabel: 'CV',
    cvHint: 'PDF, JPG sau PNG, maximum 8 MB.',
    certificatesLabel: 'Certificate și documente justificative',
    certificatesHint: 'Opțional, până la 5 fișiere, fiecare de maximum 8 MB.',

    consent:
      'Am citit politica de confidențialitate și sunt de acord ca datele și documentele mele să fie stocate și prelucrate în scopul soluționării candidaturii mele. Știu că îmi pot retrage consimțământul în orice moment.',
    optional: 'opțional',
    requiredHint: '* Indică câmpurile obligatorii',
    submit: 'Trimiteți candidatura',
    sending: 'Se trimite candidatura …',

    successTitle: 'Vă mulțumim pentru candidatură!',
    successText:
      'Am primit documentele dumneavoastră și vom reveni cu un răspuns. O confirmare de primire este pe drum către adresa dumneavoastră de e-mail.',
    referenceLabel: 'Numărul dumneavoastră de dosar',

    errorTitle: 'Candidatura nu a putut fi trimisă',
    errorText:
      'Verificați datele introduse și încercați din nou. Alternativ, trimiteți-ne documentele direct prin e-mail.',
    errorNotDelivered:
      'Trimiterea e-mailurilor nu este încă configurată pe acest server. Deocamdată, trimiteți-ne documentele direct prin e-mail.',

    validation: {
      required: 'Completați acest câmp.',
      email: 'Introduceți o adresă de e-mail validă.',
      fileType: 'Sunt acceptate fișiere PDF, JPG și PNG.',
      tooLarge: 'Fișierul este prea mare. Limita este de 8 MB.',
      tooMany: 'Încărcați cel mult 5 certificate.',
      country: 'Selectați o țară.',
      confirmations: 'Confirmați toate punctele.',
    },
    uploadLabels: {
      cv: 'CV',
      languageCertificate: 'Certificat lingvistic',
      schoolCertificate: 'Diplomă de studii liceale',
      vocationalCertificate: 'Calificare profesională',
      degree: 'Diplomă universitară',
      residencePermit: 'Permis de ședere',
      workPermit: 'Dovada dreptului de a munci',
      other: 'Alte certificate',
    },
    uploadHint: 'PDF, JPG sau PNG – maximum 8 MB per fișier.',
    criminalRecordNotice:
      'Certificatul de cazier judiciar sau documentul echivalent nu se încarcă în mod deliberat odată cu candidatura. Îl solicităm doar atunci când este necesar pentru o misiune concretă.',
    uploadBackendNotice:
      'Notă: transmiterea securizată a documentelor urmează să fie configurată pe acest server. Până atunci vă semnalăm o eroare în loc să simulăm o trimitere reușită.',
    confirmationsTitle: 'Confirmări',
    confirmations: [
      'Am citit cerințele pentru țara de misiune selectată.',
      'Dispun de autorizația de muncă necesară sau voi prezenta dovada corespunzătoare.',
      'Datele și documentele mele sunt complete și conforme cu realitatea.',
      'Știu că fiecare candidatură este evaluată individual și că nu există admitere automată sau garanție a misiunilor.',
    ],
    privacyLinkText: 'Citiți politica de confidențialitate',
  },

  requirements: {
    metaTitle: 'Cerințe pentru interpreți și traducători',
    metaDescription:
      'Cerințe lingvistice și de studii pentru misiuni de interpretariat și traducere – detaliate pe țări, cu trimitere la autoritățile oficiale competente.',
    h1: 'Cerințe în funcție de țara misiunii',
    lead:
      'Documentele relevante depind de țara misiunii și de beneficiar. Prezentarea de mai jos indică denumirile uzuale de acolo. Recunoașterea unui titlu este decisă exclusiv de autoritățile oficiale competente.',
    countryLabel: 'Țara de reședință sau țara de misiune avută în vedere',
    countryPlaceholder: 'Selectați',
    countryHint: 'Cerințele diferă de la o țară la alta.',
    panelTitle: 'Cerințe pentru misiuni în {country}',
    separationNotice:
      'Important: o diplomă de studii liceale, un act de acces la învățământul superior sau o diplomă universitară nu constituie automat o dovadă a competențelor lingvistice de nivel C1. Calificarea lingvistică și cea de studii se evaluează separat.',
    languageTitle: 'A. Calificare lingvistică',
    languageLead: 'Cel puțin unul dintre următoarele documente:',
    languageItems: [
      'Un certificat lingvistic recunoscut de nivel C1 sau C2 conform Cadrului european comun de referință',
      'Un document lingvistic echivalent recunoscut în țara respectivă',
      'Studii absolvite în limba de lucru respectivă, dacă pot fi acceptate ca dovadă lingvistică',
      'Alt document verificabil privind competențe lingvistice de cel puțin nivel C1',
    ],
    educationTitle: 'B. Calificare școlară sau profesională',
    educationLead:
      'În funcție de misiune și de beneficiar, cel puțin un document adecvat, de exemplu:',
    educationItems: [
      'Act de acces la învățământul superior',
      'Formare profesională absolvită',
      'Certificat de an pregătitor sau echivalent',
      'Diplomă universitară',
      'Formare în interpretariat sau traducere',
      'Titlu de studii străin comparabil',
    ],
    certLabel: 'Certificate lingvistice uzuale în țară',
    entranceLabel: 'Act de acces la învățământul superior',
    vocationalLabel: 'Calificare profesională',
    higherLabel: 'Diplomă universitară',
    criminalLabel: 'Certificat de cazier judiciar',
    legalTitle: 'Cerințe legale',
    legalItems: [
      'Dreptul de a munci în țara misiunii',
      'Document de ședere valabil, dacă este necesar',
      'Certificat de cazier judiciar, dacă misiunea concretă îl impune',
    ],
    clientTitle: 'Cerințe suplimentare ale beneficiarului',
    clientText:
      'Autoritățile, instanțele și organizațiile internaționale stabilesc uneori cerințe proprii, precum verificări de securitate, declarații de confidențialitate sau cunoștințe de specialitate. Vi le comunicăm înaintea misiunii.',
    individualNotice:
      'Document comparabil – este necesară o evaluare individuală. Această prezentare nu înlocuiește o decizie oficială de recunoaștere.',
    reviewPending:
      'Verificarea de specialitate a informațiilor privind această țară este încă în curs. Denumirile indicate servesc exclusiv orientării.',
    sourcesLabel: 'Surse oficiale de informare',
    fullRequirementsLink: 'Vedeți toate cerințele pentru această țară',
    backToApply: 'Înapoi la candidatură',
  },

  contact: {
    metaTitle: 'Contact — solicitare către Translation Admy',
    metaDescription:
      'Contactați biroul de interpretariat Translation Admy din Bingen am Rhein. Telefon, e-mail și formular de solicitare pentru servicii de interpretariat și traducere.',
    h1: 'Contact',
    lead:
      'Aveți o programare pentru care aveți nevoie de mediere lingvistică? Descrieți-ne pe scurt nevoia — revenim cât mai repede posibil.',
    detailsTitle: 'Date de contact',
    formTitle: 'Trimiteți o solicitare',
    formLead:
      'Cu cât descrieți mai exact limba, data și motivul, cu atât mai repede vă putem da un răspuns ferm.',
    fieldName: 'Nume',
    fieldEmail: 'E-mail',
    fieldOrg: 'Instituție / companie',
    fieldOrgHint: 'opțional',
    fieldSubject: 'Subiect',
    fieldMessage: 'Mesaj',
    subjectOptions: [
      'Intervenție de interpretariat',
      'Traducere autorizată',
      'Traducere specializată',
      'Solicitare din partea unei autorități',
      'Solicitare din partea unei companii',
      'Candidatură ca interpret',
      'Altele',
    ],
    consent:
      'Sunt de acord ca aceste date să fie stocate și prelucrate în scopul luării legăturii. Știu că îmi pot retrage consimțământul în orice moment.',
    requiredHint: '* Indică câmpurile obligatorii',
    submit: 'Trimiteți solicitarea',
    sending: 'Se trimite …',
    success: 'Vă mulțumim. Vom reveni cât mai repede posibil.',
    error: 'A apărut o eroare la trimiterea mesajului. Încercați din nou.',
    mailtoNote:
      'La trimitere se deschide programul dumneavoastră de e-mail cu un mesaj pregătit către noi. Alternativ ne puteți contacta direct telefonic.',
    validationName: 'Vă rugăm să indicați numele dumneavoastră.',
    validationEmail: 'Vă rugăm să indicați o adresă de e-mail validă.',
    validationMessage: 'Vă rugăm să descrieți pe scurt solicitarea.',
    validationConsent: 'Vă rugăm să consimțiți la prelucrarea datelor dumneavoastră.',
  },

  imprint: {
    metaTitle: 'Informații legale',
    metaDescription: 'Identificarea furnizorului biroului de interpretariat Translation Admy.',
    h1: 'Informații legale',
    providerTitle: 'Informații conform § 5 DDG',
    representedBy: 'Reprezentat de',
    taxNumberLabel: 'Număr fiscal',
    vatIdLabel: 'Cod de identificare în scopuri de TVA conform § 27a UStG',
    contactTitle: 'Contact',
    responsibleTitle: 'Responsabil editorial',
    responsibleText: 'Responsabil pentru conținutul acestui site:',
    disputeTitle: 'Soluționarea litigiilor',
    disputeText:
      'Nu suntem dispuși și nici obligați să participăm la proceduri de soluționare a litigiilor în fața unui organism de conciliere pentru consumatori.',
    liabilityContentTitle: 'Răspunderea pentru conținut',
    liabilityContentText:
      'Conținutul acestor pagini a fost elaborat cu cea mai mare atenție. Nu putem însă garanta corectitudinea, caracterul complet și actualitatea acestuia. În calitate de furnizor de servicii răspundem pentru conținutul propriu de pe aceste pagini conform legilor generale, fără a fi însă obligați să supraveghem informațiile terților transmise sau stocate.',
    liabilityLinksTitle: 'Răspunderea pentru linkuri',
    liabilityLinksText:
      'Site-ul nostru poate conține linkuri către site-uri externe ale unor terți, asupra conținutului cărora nu avem nicio influență. Pentru conținutul paginilor cu care se face legătura răspunde întotdeauna furnizorul sau operatorul respectiv. La aflarea unor încălcări ale legii, eliminăm imediat astfel de linkuri.',
    copyrightTitle: 'Drepturi de autor',
    copyrightText:
      'Conținutul și lucrările create de operatorul site-ului pe aceste pagini sunt supuse dreptului de autor german. Contribuțiile terților sunt marcate ca atare. Reproducerea, prelucrarea și difuzarea dincolo de limitele dreptului de autor necesită acordul scris.',
  },

  privacy: {
    metaTitle: 'Politica de confidențialitate',
    metaDescription:
      'Informații privind prelucrarea datelor cu caracter personal pe site-ul biroului de interpretariat Translation Admy.',
    h1: 'Politica de confidențialitate',
    lead:
      'Luăm în serios protecția datelor dumneavoastră personale. În continuare vă informăm ce date sunt prelucrate la vizitarea acestui site.',
    sections: [
      {
        title: 'Operatorul de date',
        body: [
          'Operatorul prelucrării datelor pe acest site este furnizorul menționat în informațiile legale. Datele de contact le găsiți acolo și pe pagina de contact.',
        ],
      },
      {
        title: 'Date de acces și fișiere jurnal ale serverului',
        body: [
          'La accesarea acestui site, furnizorul de găzduire înregistrează automat informațiile transmise de browserul dumneavoastră. De regulă, acestea includ tipul și versiunea browserului, sistemul de operare utilizat, pagina solicitată, data și ora accesării, precum și adresa IP.',
          'Aceste date sunt necesare din punct de vedere tehnic pentru livrarea site-ului și pentru asigurarea stabilității și securității sale. Temeiul juridic este art. 6 alin. (1) lit. (f) din RGPD. Aceste date nu sunt combinate cu alte surse.',
        ],
      },
      {
        title: 'Luarea legăturii',
        body: [
          'Dacă ne contactați prin formular, e-mail sau telefon, prelucrăm datele comunicate exclusiv pentru soluționarea solicitării dumneavoastră și pentru eventuale întrebări ulterioare.',
          'Temeiul juridic este art. 6 alin. (1) lit. (b) din RGPD, în măsura în care solicitarea servește inițierii sau executării unui contract, iar în rest art. 6 alin. (1) lit. (a) și (f) din RGPD. Puteți retrage consimțământul acordat oricând, cu efect pentru viitor.',
          'Ștergem datele de îndată ce solicitarea dumneavoastră a fost soluționată definitiv și nu există obligații legale de păstrare.',
        ],
      },
      {
        title: 'Formularul de contact',
        body: [
          'Formularul de solicitare de pe acest site ne transmite datele dumneavoastră pentru a putea răspunde solicitării. Câmpurile obligatorii sunt marcate ca atare. Furnizarea altor date este voluntară.',
        ],
      },
      {
        title: 'Candidaturi',
        body: [
          'Dacă ne trimiteți o candidatură prin formularul dedicat, prelucrăm datele și documentele transmise exclusiv în scopul evaluării candidaturii dumneavoastră. Temeiul juridic este art. 6 alin. (1) lit. (b) din RGPD, respectiv art. 6 alin. (1) lit. (a) din RGPD pentru consimțământul acordat.',
          'Documentele sunt transmise în siguranță prin e-mail către biroul nostru și tratate confidențial. Puteți solicita oricând ștergerea lor.',
          'Păstrăm documentele dumneavoastră doar atât timp cât este necesar pentru evaluarea candidaturii și pentru o eventuală colaborare. Ulterior le ștergem, cu excepția cazului în care există obligații legale de păstrare.',
        ],
      },
      {
        title: 'Cookie-uri și urmărire',
        body: [
          'Acest site nu utilizează cookie-uri în scopuri de analiză, publicitate sau urmărire. Nu se creează profiluri de utilizator și nu sunt integrate servicii de analiză ale terților.',
          'Versiunea lingvistică preferată este stocată exclusiv local în browserul dumneavoastră (localStorage), pentru ca la următoarea vizită să ajungeți direct în limba dumneavoastră. Această informație nu părăsește dispozitivul și nu ne este transmisă. O puteți șterge oricând din setările browserului.',
        ],
      },
      {
        title: 'Fonturi și conținut extern',
        body: [
          'Fonturile și toate celelalte elemente de design sunt livrate direct de pe serverul nostru. La încărcarea paginii nu se stabilesc conexiuni cu furnizori externi.',
        ],
      },
      {
        title: 'Drepturile dumneavoastră',
        body: [
          'Aveți dreptul de acces la datele stocate despre dumneavoastră (art. 15 RGPD), de rectificare (art. 16 RGPD), de ștergere (art. 17 RGPD), de restricționare a prelucrării (art. 18 RGPD), de portabilitate a datelor (art. 20 RGPD), precum și dreptul de opoziție (art. 21 RGPD).',
          'Pentru exercitarea drepturilor este suficientă o comunicare informală la datele de contact menționate în informațiile legale.',
        ],
      },
      {
        title: 'Dreptul de a depune plângere la autoritatea de supraveghere',
        body: [
          'Aveți dreptul de a depune o plângere la o autoritate de supraveghere a protecției datelor cu privire la prelucrarea datelor dumneavoastră cu caracter personal. Competent este, printre alții, Comisarul landului Renania-Palatinat pentru protecția datelor și libertatea informației.',
        ],
      },
      {
        title: 'Criptare',
        body: [
          'Din motive de securitate, acest site utilizează criptarea TLS. O conexiune criptată o recunoașteți după simbolul lacătului din bara de adrese a browserului.',
        ],
      },
      {
        title: 'Actualizare',
        body: [
          'Adaptăm prezenta politică de confidențialitate de îndată ce modificările site-ului sau ale cerințelor legale o impun.',
        ],
      },
    ],
  },

  notFound: {
    metaTitle: 'Pagina nu a fost găsită',
    metaDescription: 'Pagina solicitată nu există.',
    h1: 'Pagina nu a fost găsită',
    text: 'Pagina pe care ați solicitat-o nu există sau a fost mutată.',
    cta: 'Înapoi la pagina principală',
  },

  footer: {
    tagline:
      'Interpretariat și traduceri în numeroase limbi și dialecte — pentru autorități, instanțe, companii și persoane fizice.',
    servicesHeading: 'Servicii',
    companyHeading: 'Companie',
    contactHeading: 'Contact',
    legalHeading: 'Informații legale',
    copyright: 'Toate drepturile rezervate.',
    languageHeading: 'Limbă',
  },
};

export default ro;
