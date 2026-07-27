import type { LocaleDictionary } from '../types';

/** Polski. TODO: Abschnitt `requirements` fehlt noch. */
const pl: LocaleDictionary = {
  nav: {
    home: 'Start',
    services: 'Usługi',
    expertise: 'Dziedziny specjalizacji',
    authorities: 'Urzędy i instytucje',
    business: 'Dla firm',
    coverage: 'Obszary działania',
    languages: 'Języki',
    about: 'O nas',
    careers: 'Dla tłumaczy',
    apply: 'Aplikuj',
    requirements: 'Wymagania',
    contact: 'Kontakt',
    imprint: 'Nota prawna',
    privacy: 'Ochrona danych',
  },

  ui: {
    skipToContent: 'Przejdź do treści',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    languageSwitcher: 'Język',
    languageSwitcherHint: 'Wybierz język strony',
    currentLanguage: 'Bieżący język',
    breadcrumb: 'Znajdujesz się tutaj',
    home: 'Start',
    phone: 'Telefon',
    mobile: 'Komórka',
    fax: 'Faks',
    email: 'E-mail',
    address: 'Adres',
    postalAddress: 'Adres pocztowy',
    callNow: 'Zadzwoń teraz',
    writeEmail: 'Napisz e-mail',
    requestQuote: 'Poproś o ofertę',
    learnMore: 'Dowiedz się więcej',
    allLanguages: 'Zobacz wszystkie języki',
    backToHome: 'Powrót na stronę główną',
    legallyBindingNote: 'Prawnie wiążąca jest wyłącznie niemiecka wersja tej strony.',
    applyCta: 'Aplikuj jako tłumacz ustny / pisemny',
    applyCtaShort: 'Aplikuj jako tłumacz',
    websiteLanguages:
      'Ta strona jest obecnie dostępna w {count} językach europejskich. W razie potrzeby dodajemy kolejne wersje językowe – prosimy o kontakt.',
  },

  home: {
    metaTitle: 'Tłumacze ustni i pisemni dla urzędów, sądów i firm',
    metaDescription:
      'Biuro tłumaczeń Translation Admy: tłumaczenia konsekutywne i konferencyjne oraz tłumaczenia uwierzytelnione w wielu językach i dialektach. Dla urzędów, sądów, firm i klientów prywatnych w całych Niemczech i w Europie.',
    heroKicker: 'Biuro tłumaczeń Translation Admy',
    heroTitle: 'Porozumienie bez przeszkód — w języku Państwa rozmówcy',
    heroLead:
      'Tłumaczymy ustnie i pisemnie dla urzędów, sądów, ośrodków recepcyjnych, firm i klientów prywatnych. Tłumacze native speakerzy, ponad 12 lat doświadczenia, działamy w całej Polsce i w różnych krajach europejskich.',
    heroPrimary: 'Zapytanie bez zobowiązań',
    heroSecondary: 'Zobacz usługi',
    heroBadges: [
      'Specjaliści native speakerzy',
      'Tłumaczenia uwierzytelnione',
      'Zlecenia w krótkim terminie',
    ],
    statLanguages: '17',
    statLanguagesLabel: 'Wersje językowe strony',
    statYears: '10+',
    statYearsLabel: 'Ponad 10 lat doświadczenia',
    statCoverage: 'W całej Europie',
    statCoverageLabel: 'Obszar działania',

    servicesTitle: 'Nasze usługi',
    servicesLead:
      'Od wizyty w urzędzie przez rozprawę sądową po konferencję międzynarodową — zapewniamy odpowiednie wsparcie językowe.',
    servicesCta: 'Zobacz wszystkie usługi',

    audienceTitle: 'Dla kogo pracujemy',
    audienceLead:
      'Nasze usługi kierujemy do zleceniodawców publicznych, instytucji, firm i osób prywatnych.',
    audienceCta: 'Informacje dla urzędów',

    expertiseTitle: 'Dziedziny specjalizacji',
    expertiseLead:
      'Wsparcie językowe wymaga wiedzy fachowej. Nasi tłumacze znają dziedziny, których dotyczy sprawa.',

    languagesTitle: 'Języki i dialekty',
    languagesLead:
      'Obsługujemy języki europejskie, azjatyckie i afrykańskie — w tym rzadkie dialekty, dla których często trudno w krótkim czasie znaleźć tłumacza.',
    languagesCta: 'Zobacz wszystkie języki',

    processTitle: 'Jak przebiega zapytanie',
    processLead: 'Przejrzyście, szybko i bez obciążeń administracyjnych po Państwa stronie.',
    process: [
      {
        title: '1. Zapytanie',
        text: 'Podają nam Państwo język, termin, miejsce i powód — telefonicznie lub e-mailem.',
      },
      {
        title: '2. Odpowiedź',
        text: 'Sprawdzamy dostępność i wracamy do Państwa w krótkim czasie z konkretną ofertą.',
      },
      {
        title: '3. Realizacja',
        text: 'Odpowiedni tłumacz stawia się punktualnie na miejscu albo dostarczamy tłumaczenie.',
      },
      {
        title: '4. Rozliczenie',
        text: 'Otrzymują Państwo przejrzystą fakturę — w razie potrzeby zgodnie z wymogami Państwa urzędu.',
      },
    ],

    valuesTitle: 'Na co mogą Państwo liczyć',
    valuesLead:
      'W rozmowach wrażliwych dokładność, bezstronność i poufność nie są dodatkiem, lecz warunkiem podstawowym.',

    ctaTitle: 'Potrzebują Państwo tłumacza w krótkim terminie?',
    ctaText:
      'Prosimy o telefon lub wiadomość — odpowiemy możliwie jak najszybciej wiążącą informacją.',
    ctaButton: 'Skontaktuj się teraz',
  },

  services: {
    metaTitle: 'Usługi — tłumaczenia ustne i pisemne',
    metaDescription:
      'Tłumaczenia konsekutywne, konferencyjne, uwierzytelnione, tłumaczenia w urzędach i sądach oraz tłumaczenia towarzyszące w wielu językach i dialektach.',
    h1: 'Nasze usługi',
    lead:
      'Oferujemy tłumaczenia ustne i pisemne dla urzędów, sądów, firm i osób prywatnych — w potrzebnej Państwu kombinacji językowej.',
    items: [
      {
        title: 'Tłumaczenie konsekutywne',
        text: 'Tłumacz oddaje wypowiedź fragmentami, po zakończeniu wypowiedzi mówiącego. Odpowiednia forma dla rozmów, przesłuchań i spotkań z ograniczoną liczbą uczestników.',
        bullets: [
          'Przesłuchania, konsultacje i rozmowy w urzędach',
          'Negocjacje i narady',
          'Nie wymaga sprzętu technicznego',
        ],
      },
      {
        title: 'Tłumaczenie konferencyjne',
        text: 'Dla wydarzeń z liczniejszym gronem uczestników i wieloma językami. Wypowiedź jest przekazywana równocześnie, bez przerywania przebiegu.',
        bullets: [
          'Konferencje, sesje branżowe i szkolenia',
          'Wydarzenia wielojęzyczne',
          'Dostosowanie do Państwa harmonogramu',
        ],
      },
      {
        title: 'Tłumaczenia uwierzytelnione',
        text: 'Tłumaczenia dokumentów przeznaczonych do przedłożenia w urzędach, sądach i instytucjach.',
        bullets: [
          'Dokumenty stanu cywilnego i tożsamości',
          'Świadectwa i zaświadczenia',
          'Pisma sądowe i urzędowe',
        ],
      },
      {
        title: 'Tłumaczenia w urzędach i sądach',
        text: 'Wsparcie językowe w kontekście urzędowym i sądowym. Tu liczy się każde słowo: oddajemy to, co rzeczywiście zostało powiedziane, bez pominięć i bez dodatków.',
        bullets: [
          'Wizyty w urzędach i instytucjach',
          'Terminy sądowe i czynności policyjne',
          'Bezstronność i poufność',
        ],
      },
      {
        title: 'Tłumaczenie towarzyszące',
        text: 'Osobiste towarzyszenie tam, gdzie porozumienie jest potrzebne bezpośrednio — w codziennych sprawach, na wizytach i w szczególnych sytuacjach życiowych.',
        bullets: [
          'Towarzyszenie przy zawarciu małżeństwa',
          'Wizyty u lekarza i w szpitalu',
          'Inne sprawy osobiste',
        ],
      },
      {
        title: 'Tłumaczenia specjalistyczne',
        text: 'Tłumaczenia pisemne o profesjonalnym standardzie — w każdej potrzebnej Państwu kombinacji językowej.',
        bullets: [
          'Medycyna, gospodarka, prawo i technika',
          'Opracowanie przez native speakerów',
          'Jednolita terminologia branżowa',
        ],
      },
    ],
    noteTitle: 'Nie ma Państwa języka na liście?',
    noteText:
      'Prosimy zapytać. Nasza oferta językowa jest wyjątkowo szeroka i chętnie doradzimy osobiście.',
  },

  expertise: {
    metaTitle: 'Dziedziny specjalizacji — medycyna, prawo, azyl, gospodarka i technika',
    metaDescription:
      'Dziedziny specjalizacji Translation Admy: medycyna i ochrona zdrowia, prawo i wymiar sprawiedliwości, azyl i migracja, administracja publiczna, gospodarka oraz technika.',
    h1: 'Dziedziny specjalizacji',
    lead:
      'Profesjonalne tłumaczenia na najwyższym poziomie — niezależnie od tego, czy chodzi o medycynę, gospodarkę, prawo czy technikę, i niezależnie od potrzebnej kombinacji językowej.',
    items: [
      {
        title: 'Medycyna i ochrona zdrowia',
        text: 'Porozumienie między personelem medycznym a pacjentami, gdzie nieporozumienia mogą mieć poważne skutki.',
        bullets: [
          'Wywiad, informowanie i rozmowy doradcze',
          'Wizyty u lekarza i w szpitalu',
          'Wyniki badań i dokumentacja medyczna',
        ],
      },
      {
        title: 'Prawo i wymiar sprawiedliwości',
        text: 'Wsparcie językowe w środowisku prawnym, gdzie dokładność i bezstronność współdecydują o przebiegu postępowania.',
        bullets: [
          'Terminy sądowe i przesłuchania',
          'Umowy i pisma procesowe',
          'Dokumenty do przedłożenia w sądach',
        ],
      },
      {
        title: 'Azyl i migracja',
        text: 'Komunikacja w postępowaniach i placówkach, gdzie liczą się rzadkie języki i dialekty — a także spokojne, rzeczowe prowadzenie rozmowy.',
        bullets: [
          'Przesłuchania i doradztwo proceduralne',
          'Ośrodki recepcyjne i zakwaterowania',
          'Rzadkie języki i dialekty',
        ],
      },
      {
        title: 'Administracja publiczna',
        text: 'Wsparcie wszędzie tam, gdzie działanie administracji styka się z osobami bez wystarczającej znajomości niemieckiego.',
        bullets: [
          'Wizyty w urzędach i służbach specjalistycznych',
          'Rozmowy doradcze i wnioskowe',
          'Decyzje i pisma urzędowe',
        ],
      },
      {
        title: 'Gospodarka i przemysł',
        text: 'Wsparcie językowe w codziennej działalności gospodarczej — od negocjacji po dokumentację wielojęzyczną.',
        bullets: [
          'Negocjacje i spotkania biznesowe',
          'Targi i wizyty w zakładach',
          'Korespondencja i dokumenty handlowe',
        ],
      },
      {
        title: 'Technika',
        text: 'Przekazywanie treści technicznych z jednolitą terminologią i wyczuciem kontekstu branżowego.',
        bullets: [
          'Dokumentacja techniczna',
          'Szkolenia i instruktaże',
          'Dokumenty dotyczące bezpieczeństwa i eksploatacji',
        ],
      },
    ],
    noteTitle: 'Dobór odpowiedni do dziedziny',
    noteText:
      'Zależy nam, aby język i dziedzina do siebie pasowały. Prosimy podać powód spotkania — odpowiednio dobierzemy tłumacza.',
  },

  authorities: {
    metaTitle: 'Urzędy i instytucje — tłumaczenia dla sektora publicznego',
    metaDescription:
      'Usługi tłumaczeń ustnych i pisemnych dla sądów, policji, policji federalnej, BAMF, urzędów ds. cudzoziemców, ośrodków recepcyjnych, gmin, organizacji pozarządowych oraz instytucji europejskich, takich jak EUAA i Frontex.',
    h1: 'Urzędy i instytucje',
    lead:
      'Zleceniodawcy publiczni potrzebują wsparcia językowego, które jest niezawodne, bezstronne i dostępne w krótkim terminie. Właśnie na to nastawione jest nasze biuro.',
    audienceTitle: 'Do kogo kierujemy naszą ofertę',
    audienceLead:
      'Jesteśmy do dyspozycji następujących podmiotów w zakresie tłumaczeń ustnych i pisemnych.',
    audienceDisclaimer:
      'Wymienione tu podmioty i organizacje opisują grupy docelowe naszej oferty. Wyraźnie nie stanowią one referencji i nie istnieje żadna współpraca ani stosunek umowny, o ile nie uzgodniono tego odrębnie.',
    audience: [
      {
        title: 'Sądy',
        text: 'Wsparcie językowe podczas rozpraw, przesłuchań i terminów oraz tłumaczenie pism.',
      },
      {
        title: 'Policja i policja federalna',
        text: 'Porozumienie przy przyjmowaniu zeznań i przesłuchaniach — także poza zwykłymi godzinami pracy.',
      },
      {
        title: 'Federalny Urząd ds. Migracji i Uchodźców (BAMF)',
        text: 'Wsparcie językowe w postępowaniach i doradztwie, w tym w rzadkich językach i dialektach.',
      },
      {
        title: 'Urzędy ds. cudzoziemców',
        text: 'Wsparcie przy wizytach, rozmowach wnioskowych i tłumaczeniu dokumentów urzędowych.',
      },
      {
        title: 'Ośrodki recepcyjne',
        text: 'Porozumienie w codziennym funkcjonowaniu ośrodków pierwszego przyjęcia i zakwaterowania.',
      },
      {
        title: 'Gminy i powiaty',
        text: 'Wsparcie językowe dla służb specjalistycznych oraz urzędów socjalnych, ds. młodzieży i porządku publicznego.',
      },
      {
        title: 'Urzędy pracy i instytucje socjalne',
        text: 'Towarzyszenie przy rozmowach doradczych, wnioskowych i integracyjnych.',
      },
      {
        title: 'Szkoły i placówki oświatowe',
        text: 'Rozmowy z rodzicami, spotkania doradcze i dokumenty szkolne.',
      },
      {
        title: 'EUAA',
        text: 'Jesteśmy do dyspozycji Agencji Unii Europejskiej ds. Azylu w zakresie wsparcia językowego w obsługiwanych przez nas językach.',
      },
      {
        title: 'Frontex',
        text: 'Na potrzeby operacji Europejskiej Agencji Straży Granicznej i Przybrzeżnej oferujemy wsparcie językowe w językach europejskich i pozaeuropejskich.',
      },
      {
        title: 'Organizacje pozarządowe i międzynarodowe',
        text: 'Wsparcie językowe dla punktów doradczych, organizacji pomocowych i instytucji międzynarodowych.',
      },
    ],
    principlesTitle: 'Zasady naszej pracy',
    principlesLead:
      'W rozmowach wrażliwych to postawa tłumacza decyduje o wyniku.',
    principles: [
      {
        title: 'Wierne oddanie treści',
        text: 'Bardzo nam zależy, aby w tłumaczeniu ustnym i pisemnym zawsze oddawane było dokładnie to, co rzeczywiście zostało powiedziane.',
      },
      {
        title: 'Bezstronność',
        text: 'Tłumaczymy bezstronnie, nie dodając własnej oceny wypowiedzi.',
      },
      {
        title: 'Poufność',
        text: 'Wszystkie treści traktujemy poufnie — w trakcie zlecenia i po jego zakończeniu.',
      },
      {
        title: 'Niezawodność',
        text: 'Potwierdzone terminy są dotrzymywane. Wcześnie otrzymują Państwo informację o dostępności.',
      },
    ],
    procurementTitle: 'Współpraca i zlecanie',
    procurementText:
      'Dostosowujemy się do procedur Państwa instytucji i jesteśmy dostępni zarówno dla pojedynczych terminów, jak i dla trwałej współpracy.',
    procurementBullets: [
      'Zlecenia pojedyncze i realizacje w krótkim terminie',
      'Terminy cykliczne po uzgodnieniu',
      'Umowy ramowe na życzenie',
      'Rozliczenie zgodnie z wymogami Państwa jednostki',
      'Osoba kontaktowa na wypadek pytań w trakcie realizacji',
    ],
    tendersTitle: 'Przetargi i postępowania o udzielenie zamówienia w Europie',
    tendersText:
      'Bierzemy udział w przetargach i postępowaniach o udzielenie zamówienia prowadzonych przez zleceniodawców publicznych w Niemczech i w innych krajach Europy. Jeśli ogłaszają Państwo przetarg na usługi językowe, prosimy o kontakt — przygotujemy dokumenty niezbędne do złożenia oferty.',
  },

  business: {
    metaTitle: 'Dla firm — tłumaczenia ustne i specjalistyczne',
    metaDescription:
      'Usługi tłumaczeń ustnych i pisemnych dla firm: negocjacje, targi, wizyty w zakładach, szkolenia, umowy i dokumentacja techniczna w wielu językach.',
    h1: 'Dla firm',
    lead:
      'Czy chodzi o negocjacje, targi czy dokumentację techniczną: dbamy o to, aby Państwa przekaz dotarł w drugim języku dokładnie tak, jak został pomyślany.',
    items: [
      {
        title: 'Negocjacje',
        text: 'Wsparcie językowe podczas spotkań biznesowych, rozmów umownych i uzgodnień z partnerami międzynarodowymi.',
      },
      {
        title: 'Targi i wydarzenia',
        text: 'Wsparcie na stoisku i w programie towarzyszącym — także przez kilka dni.',
      },
      {
        title: 'Wizyty w zakładach',
        text: 'Towarzyszenie grupom zwiedzających w produkcji, laboratorium lub administracji.',
      },
      {
        title: 'Szkolenia i instruktaże',
        text: 'Zrozumiałe przekazywanie procedur, instrukcji bezpieczeństwa i treści fachowych.',
      },
      {
        title: 'Umowy i dokumenty',
        text: 'Tłumaczenie pisemne dokumentów handlowych i prawnych, na życzenie uwierzytelnione.',
      },
      {
        title: 'Dokumentacja techniczna',
        text: 'Przekazywanie treści technicznych z jednolitą i możliwą do prześledzenia terminologią.',
      },
    ],
    processTitle: 'Od pierwszego kontaktu do realizacji',
    processLead: 'Przejrzysty przebieg, który oszczędza Państwu pracy koordynacyjnej.',
    process: [
      {
        title: 'Ustalenie potrzeb',
        text: 'Język, termin, miejsce, czas trwania i kontekst branżowy Państwa wydarzenia.',
      },
      {
        title: 'Otrzymanie oferty',
        text: 'Otrzymują Państwo konkretną informację o dostępności i warunkach.',
      },
      {
        title: 'Przygotowanie realizacji',
        text: 'Na życzenie udostępniają Państwo materiały z wyprzedzeniem, aby terminologia była trafna.',
      },
      {
        title: 'Realizacja',
        text: 'Wsparcie językowe odbywa się punktualnie na miejscu albo w formie tłumaczenia pisemnego.',
      },
    ],
    ctaTitle: 'Oferta dla Państwa firmy',
    ctaText:
      'Prosimy krótko opisać potrzebę — odezwiemy się z konkretną oceną dostępności i warunków.',
  },

  coverage: {
    metaTitle: 'Obszary działania — Niemcy i Europa',
    metaDescription:
      'Translation Admy pośredniczy w zapewnianiu tłumaczy w całych Niemczech i w wybranych krajach europejskich — na miejscu, telefonicznie lub przez wideo, także w procedurach azylowych i granicznych.',
    h1: 'Obszary działania',
    lead:
      'Nasze biuro ma siedzibę w Bingen am Rhein. Nasi tłumacze działają w całych Niemczech.',
    baseTitle: 'Siedziba w Bingen am Rhein',
    baseText:
      'Z Bingen am Rhein szybko docieramy do regionu Ren-Men, Hesji Nadreńskiej i Środkowego Renu. Na terminy w tym regionie jesteśmy często dostępni nawet w bardzo krótkim czasie.',
    europeTitle: 'Działamy w całych Niemczech i w Europie',
    europeText:
      'Translation Admy pośredniczy w zapewnianiu tłumaczy ustnych i pisemnych do zleceń w całych Niemczech oraz w wybranych krajach europejskich. W zależności od zlecenia wspieramy urzędy, instytucje publiczne, firmy i organizacje międzynarodowe na miejscu, telefonicznie lub przez wideo.',
    capabilities: [
      'Zlecenia w całych Niemczech',
      'Tłumaczenia ustne na miejscu',
      'Tłumaczenia telefoniczne i wideo',
      'Zlecenia w krótkim terminie i planowane z wyprzedzeniem',
      'Projekty transgraniczne i ogólnoeuropejskie',
      'Wsparcie w procedurach azylowych, migracyjnych i recepcyjnych',
      'Budowa ogólnoeuropejskiej sieci tłumaczy',
    ],

    bordersTitle: 'Tłumaczenia dla europejskich procedur granicznych i azylowych',
    bordersText:
      'Translation Admy buduje ogólnoeuropejską sieć wykwalifikowanych tłumaczy ustnych i pisemnych. Nasi pośrednicy językowi są dostępni dla zapytań i ewentualnych zleceń w otoczeniu Frontexu, Agencji Unii Europejskiej ds. Azylu (EUAA), krajowych organów azylowych, ośrodków recepcyjnych oraz placówek na europejskich granicach zewnętrznych.',
    bordersNote:
      'Wspieramy porozumienie językowe w procedurach azylowych, migracyjnych, rejestracyjnych, recepcyjnych i powrotowych. W zależności od języka, dostępności, kwalifikacji i miejsca zlecenia mogą być realizowane na miejscu, telefonicznie lub przez wideo.',

    countriesTitle: 'Europejskie obszary działania i pośrednictwa',
    countriesNote:
      'Konkretna dostępność zależy od języka, kwalifikacji, miejsca i terminu.',

    nationwideTitle: 'W całych Niemczech',
    nationwideText:
      'Współpracujemy z tłumaczami na terenie całych Niemiec. Prosimy podać miejsce i termin — sprawdzimy dostępność na miejscu.',
    internationalTitle: 'Realizacje w innych krajach Europy',
    internationalText:
      'W sprawie realizacji poza Niemcami prosimy o kontakt. Sprawdzamy indywidualnie, czy i w jaki sposób możemy pokryć Państwa zapotrzebowanie.',
    remoteTitle: 'Terminy telefoniczne i wideo',
    remoteText:
      'Gdy spotkanie na miejscu nie jest możliwe lub konieczne, wsparcie językowe może odbyć się po uzgodnieniu również telefonicznie lub przez połączenie wideo.',
  },

  languages: {
    metaTitle: 'Języki — nasza pełna oferta językowa',
    metaDescription:
      'Tłumaczymy ustnie i pisemnie w wielu językach i dialektach: języki europejskie, azjatyckie, północnoafrykańskie i afrykańskie — w tym rzadkie odmiany.',
    h1: 'Języki i dialekty',
    lead:
      'Nasza oferta językowa jest wyjątkowo szeroka i możemy wesprzeć Państwa w wielu językach. Tłumaczymy dla Państwa ustnie i pisemnie w następujących językach.',
    searchLabel: 'Szukaj języka',
    searchPlaceholder: 'np. arabski, tigrinia, sorani …',
    clearSearch: 'Wyczyść wyszukiwanie',
    resultsOne: 'Znaleziono 1 język',
    resultsMany: 'Znaleziono {count} języków',
    noResults: 'Nie znaleziono pasującego języka.',
    noResultsHint: 'Prosimy mimo to zapytać — nasza lista nie jest wyczerpująca.',
    groupTitles: {
      asiatisch: 'Języki azjatyckie i bliskowschodnie',
      europaeisch: 'Języki europejskie',
      nordafrikanisch: 'Języki północnoafrykańskie',
      afrikanisch: 'Języki i dialekty afrykańskie',
    },
    groupIntros: {
      asiatisch:
        'Od arabskiego przez odmiany kurdyjskie po wietnamski — mocna strona naszego biura.',
      europaeisch:
        'Wszystkie powszechne języki urzędowe UE oraz języki Europy Wschodniej i Południowo-Wschodniej dla urzędów, sądów i firm.',
      nordafrikanisch: 'Arabski maghrebijski i języki berberyjskie Afryki Północnej.',
      afrikanisch:
        'Ponad 50 języków i dialektów Afryki Zachodniej, Wschodniej i Środkowej — w tym rzadkie odmiany.',
    },
    missingTitle: 'Jeśli potrzebnego języka nie ma na liście, prosimy zapytać.',
    missingText: 'Chętnie doradzimy osobiście. Czekamy na Państwa zapytanie.',
  },

  about: {
    metaTitle: 'O nas — biuro tłumaczeń z ponad 12-letnim doświadczeniem',
    metaDescription:
      'Translation Admy to doświadczony zespół profesjonalnych tłumaczy ustnych i pisemnych z ponad 12-letnim doświadczeniem w branży.',
    h1: 'O nas',
    lead:
      'Jesteśmy doświadczonym zespołem profesjonalnych tłumaczy ustnych i pisemnych z ponad 12-letnim doświadczeniem w branży.',
    body: [
      'Kieruje nami wysokie wymaganie, dziś i w przyszłości: dostarczamy naszym klientom wyłącznie najlepsze usługi i rozwiązania, zawsze w korzystnej cenie. Nasza oferta jest podporządkowana wyłącznie konkretnym potrzebom i oczekiwaniom klientów.',
      'Właśnie dlatego w naszym biurze pracują wyłącznie wykwalifikowani tłumacze ustni i pisemni będący native speakerami. Nasi współpracownicy dysponują wystarczającym doświadczeniem w tłumaczeniach pisemnych i ustnych.',
      'Efekt: profesjonalne tłumaczenia na najwyższym poziomie — niezależnie od tego, czy chodzi o medycynę, gospodarkę, prawo czy technikę, i niezależnie od potrzebnej kombinacji językowej.',
    ],
    quote:
      'Bardzo nam zależy, aby w tłumaczeniu ustnym i pisemnym zawsze oddawane było dokładnie to, co rzeczywiście zostało powiedziane.',
    valuesTitle: 'Co nas wyróżnia',
    values: [
      {
        title: 'Zasada native speakera',
        text: 'W naszym biurze pracują wyłącznie wykwalifikowani tłumacze ustni i pisemni będący native speakerami.',
      },
      {
        title: 'Doświadczenie',
        text: 'Ponad 12 lat doświadczenia w branży — i współpracownicy z praktyką w tłumaczeniach ustnych i pisemnych.',
      },
      {
        title: 'Nastawienie na potrzeby',
        text: 'Nasza oferta jest podporządkowana wyłącznie konkretnym potrzebom i oczekiwaniom klientów.',
      },
      {
        title: 'Uczciwe warunki',
        text: 'Najlepsze usługi i rozwiązania dla naszych klientów — zawsze w korzystnej cenie.',
      },
    ],
  },

  careers: {
    metaTitle: 'Kariera — poszukujemy tłumaczy wszystkich języków i dialektów',
    metaDescription:
      'W celu wzmocnienia naszego zespołu w całych Niemczech poszukujemy tłumaczy wszystkich języków i dialektów. Aplikuj już teraz do Translation Admy.',
    h1: 'Dla tłumaczy ustnych i pisemnych',
    lead:
      'W celu wzmocnienia naszego zespołu w całych Niemczech poszukujemy tłumaczy wszystkich języków i dialektów.',
    requirementsTitle: 'Wymagania',
    requirements: [
      'Certyfikat języka niemieckiego na poziomie C1, niemiecka matura Abitur / Fachabitur, DSH 2/3, Allgemeine Fachhochschulreife, Fachoberschulreife, świadectwo Studienkolleg lub dyplom ukończenia studiów',
      'Brak wpisów w rejestrze karnym',
      'Wymagane zezwolenie na pracę',
    ],
    offerTitle: 'Co Państwa czeka',
    offer: [
      'Zlecenia w całych Niemczech — także w Państwa regionie',
      'Różnorodne zlecenia dla urzędów, sądów, firm i osób prywatnych',
      'Zespół, dla którego liczy się dokładne i bezstronne wsparcie językowe',
    ],
    applyTitle: 'Jak aplikować',
    applyText:
      'Prosimy przesłać zgłoszenie e-mailem, podając swoje języki i dialekty oraz dokumenty potwierdzające. Można się z nami skontaktować także telefonicznie.',
    closing: 'Czekamy na Państwa zgłoszenie.',
    networkTitle: 'Dlaczego warto współpracować z Translation Admy?',
    networkLead:
      'Budujemy sieć tłumaczy ustnych i pisemnych w całej Europie. Tak wygląda nasza współpraca.',
    benefits: [
      {
        title: 'Elastyczne zlecenia',
        text: 'To Państwo decydują, które zapytania przyjąć. Terminy uzgadniamy zgodnie z Państwa dostępnością.',
      },
      {
        title: 'Projekty w całej Europie',
        text: 'Obok zleceń w całych Niemczech przybywa zapytań z innych krajów europejskich.',
      },
      {
        title: 'Uczciwa współpraca',
        text: 'Jasne ustalenia co do zakresu, miejsca i warunków — przed realizacją, a nie po niej.',
      },
      {
        title: 'Długofalowa kooperacja',
        text: 'Nie chodzi nam o pojedyncze terminy, lecz o rzetelną współpracę przez lata.',
      },
      {
        title: 'Profesjonalna organizacja',
        text: 'Z wyprzedzeniem wyjaśniamy powód, dziedzinę i warunki, aby przyszli Państwo przygotowani.',
      },
      {
        title: 'Prosta komunikacja',
        text: 'Krótkie ścieżki, stałe osoby kontaktowe i szybka odpowiedź — także w trakcie trwającego zlecenia.',
      },
      {
        title: 'Ochrona danych i poufność',
        text: 'Państwa dokumenty traktujemy poufnie i wykorzystujemy wyłącznie do oceny zgłoszenia.',
      },
    ],
    ctaTitle: 'Dołącz do naszej sieci',
    ctaText:
      'Prosimy przesłać zgłoszenie z językami, dziedzinami specjalizacji i dokumentami. Odezwiemy się do Państwa.',
  },

  apply: {
    metaTitle: 'Zgłoszenie jako tłumacz ustny lub pisemny',
    metaDescription:
      'Aplikuj jako tłumacz ustny lub pisemny w Translation Admy. Zgłoszenie online z językami, dziedzinami specjalizacji, CV i dokumentami.',
    h1: 'Zgłoszenie jako tłumacz ustny lub pisemny',
    lead:
      'Prosimy wypełnić formularz i załączyć CV. Sprawdzimy dokumenty i odezwiemy się do Państwa. Rejestracja nie jest wymagana.',

    sectionPerson: 'Dane osobowe',
    sectionLanguages: 'Języki',
    sectionProfile: 'Profil realizacji',
    sectionDocuments: 'Dokumenty',

    firstName: 'Imię',
    lastName: 'Nazwisko',
    email: 'E-mail',
    phone: 'Numer telefonu',
    city: 'Miejsce zamieszkania',
    country: 'Kraj',
    nationality: 'Obywatelstwo',
    spokenLanguages: 'Języki, którymi Państwo władają',
    spokenLanguagesHint: 'Wszystkie języki i dialekty, którymi Państwo mówią, oddzielone przecinkami.',
    workingLanguages: 'Języki robocze',
    workingLanguagesHint: 'Państwa kierunki językowe, np. arabski → niemiecki, niemiecki → arabski.',

    fieldsLabel: 'Dziedziny specjalizacji',
    fieldsHint: 'Można wybrać kilka.',
    fieldLabels: {
      asylum: 'Azyl',
      authorities: 'Urzędy',
      police: 'Policja',
      courts: 'Sądy',
      medical: 'Medycyna',
      social: 'Pomoc społeczna',
      education: 'Edukacja',
      business: 'Gospodarka',
      technical: 'Technika',
    },

    serviceModesLabel: 'Rodzaj działalności',
    serviceModeLabels: {
      interpreting: 'Tłumaczenia ustne',
      translation: 'Tłumaczenia pisemne',
    },

    deliveryModesLabel: 'Forma realizacji',
    deliveryModeLabels: {
      onsite: 'Na miejscu',
      phone: 'Telefonicznie',
      video: 'Tłumaczenie wideo',
    },

    travelLabel: 'Gotowość do podróży',
    travelLabels: {
      local: 'Miejsce zamieszkania i okolice',
      regional: 'Regionalnie',
      national: 'W całych Niemczech',
      european: 'W całej Europie',
    },

    availabilityLabel: 'Dostępność',
    availabilityLabels: {
      fulltime: 'Pełny etat',
      parttime: 'Niepełny etat',
      occasional: 'Okazjonalnie',
      'on-call': 'Na wezwanie w krótkim terminie',
    },

    experienceLabel: 'Doświadczenie zawodowe',
    experienceLabels: {
      lt1: 'Mniej niż 1 rok',
      '1-3': '1–3 lata',
      '3-5': '3–5 lat',
      '5-10': '5–10 lat',
      gt10: 'Ponad 10 lat',
    },

    messageLabel: 'Państwa wiadomość',
    messageHint: 'Co jeszcze powinniśmy o Państwu wiedzieć?',

    cvLabel: 'Życiorys',
    cvHint: 'PDF, JPG lub PNG, maksymalnie 8 MB.',
    certificatesLabel: 'Certyfikaty i zaświadczenia',
    certificatesHint: 'Opcjonalnie, do 5 plików, każdy maksymalnie 8 MB.',

    consent:
      'Zapoznałem się z polityką prywatności i wyrażam zgodę na przechowywanie i przetwarzanie moich danych oraz dokumentów w celu rozpatrzenia mojego zgłoszenia. Wiem, że mogę w każdej chwili wycofać zgodę.',
    optional: 'opcjonalnie',
    requiredHint: '* Oznacza pola obowiązkowe',
    submit: 'Wyślij zgłoszenie',
    sending: 'Wysyłanie zgłoszenia …',

    successTitle: 'Dziękujemy za zgłoszenie!',
    successText:
      'Otrzymaliśmy Państwa dokumenty i odezwiemy się. Potwierdzenie odbioru jest w drodze na Państwa adres e-mail.',
    referenceLabel: 'Państwa numer sprawy',

    errorTitle: 'Nie udało się wysłać zgłoszenia',
    errorText:
      'Prosimy sprawdzić dane i spróbować ponownie. Alternatywnie prosimy przesłać dokumenty bezpośrednio e-mailem.',
    errorNotDelivered:
      'Wysyłka e-maili nie jest jeszcze skonfigurowana na tym serwerze. Na razie prosimy przesłać dokumenty bezpośrednio e-mailem.',

    validation: {
      required: 'Prosimy wypełnić to pole.',
      email: 'Prosimy podać prawidłowy adres e-mail.',
      fileType: 'Dopuszczalne są pliki PDF, JPG i PNG.',
      tooLarge: 'Plik jest za duży. Maksimum to 8 MB.',
      tooMany: 'Prosimy przesłać maksymalnie 5 certyfikatów.',
    },
  },

  contact: {
    metaTitle: 'Kontakt — zapytanie do Translation Admy',
    metaDescription:
      'Prosimy o kontakt z biurem tłumaczeń Translation Admy w Bingen am Rhein. Telefon, e-mail i formularz zapytania dotyczący tłumaczeń ustnych i pisemnych.',
    h1: 'Kontakt',
    lead:
      'Mają Państwo termin, na który potrzebne jest wsparcie językowe? Prosimy krótko opisać potrzebę — odezwiemy się możliwie jak najszybciej.',
    detailsTitle: 'Dane kontaktowe',
    formTitle: 'Wyślij zapytanie',
    formLead:
      'Im dokładniej opiszą Państwo język, termin i powód, tym szybciej możemy udzielić wiążącej odpowiedzi.',
    fieldName: 'Imię i nazwisko',
    fieldEmail: 'E-mail',
    fieldOrg: 'Urząd / firma',
    fieldOrgHint: 'opcjonalnie',
    fieldSubject: 'Temat',
    fieldMessage: 'Wiadomość',
    subjectOptions: [
      'Zlecenie tłumaczenia ustnego',
      'Tłumaczenie uwierzytelnione',
      'Tłumaczenie specjalistyczne',
      'Zapytanie urzędu',
      'Zapytanie firmy',
      'Zgłoszenie jako tłumacz',
      'Inne',
    ],
    consent:
      'Wyrażam zgodę na przechowywanie i przetwarzanie tych danych w celu nawiązania kontaktu. Wiem, że mogę w każdej chwili wycofać zgodę.',
    requiredHint: '* Oznacza pola obowiązkowe',
    submit: 'Wyślij zapytanie',
    sending: 'Wysyłanie …',
    success: 'Dziękujemy. Odezwiemy się możliwie jak najszybciej.',
    error: 'Podczas wysyłania wiadomości wystąpił błąd. Prosimy spróbować ponownie.',
    mailtoNote:
      'Po kliknięciu otworzy się Państwa program pocztowy z przygotowaną wiadomością do nas. Alternatywnie można skontaktować się z nami bezpośrednio telefonicznie.',
    validationName: 'Prosimy podać imię i nazwisko.',
    validationEmail: 'Prosimy podać prawidłowy adres e-mail.',
    validationMessage: 'Prosimy krótko opisać sprawę.',
    validationConsent: 'Prosimy wyrazić zgodę na przetwarzanie danych.',
  },

  imprint: {
    metaTitle: 'Nota prawna',
    metaDescription: 'Oznaczenie usługodawcy biura tłumaczeń Translation Admy.',
    h1: 'Nota prawna',
    providerTitle: 'Informacje zgodnie z § 5 DDG',
    representedBy: 'Reprezentowany przez',
    taxNumberLabel: 'Numer podatkowy',
    vatIdLabel: 'Numer identyfikacyjny VAT zgodnie z § 27a UStG',
    contactTitle: 'Kontakt',
    responsibleTitle: 'Odpowiedzialny za treść',
    responsibleText: 'Odpowiedzialny za treść tej strony:',
    disputeTitle: 'Rozstrzyganie sporów',
    disputeText:
      'Nie jesteśmy gotowi ani zobowiązani do udziału w postępowaniach rozjemczych przed konsumenckim organem polubownym.',
    liabilityContentTitle: 'Odpowiedzialność za treść',
    liabilityContentText:
      'Treści tych stron zostały opracowane z najwyższą starannością. Nie możemy jednak zagwarantować ich poprawności, kompletności i aktualności. Jako usługodawca odpowiadamy za własne treści na tych stronach zgodnie z przepisami ogólnymi, nie jesteśmy jednak zobowiązani do nadzorowania przekazywanych lub przechowywanych informacji osób trzecich.',
    liabilityLinksTitle: 'Odpowiedzialność za linki',
    liabilityLinksText:
      'Nasza strona może zawierać linki do zewnętrznych witryn osób trzecich, na których treść nie mamy wpływu. Za treść stron, do których prowadzą linki, odpowiada zawsze ich dostawca lub operator. Po powzięciu wiadomości o naruszeniach prawa niezwłocznie usuwamy takie linki.',
    copyrightTitle: 'Prawo autorskie',
    copyrightText:
      'Treści i utwory stworzone przez operatora strony podlegają niemieckiemu prawu autorskiemu. Wkłady osób trzecich są oznaczone jako takie. Powielanie, opracowywanie i rozpowszechnianie poza granicami prawa autorskiego wymaga pisemnej zgody.',
  },

  privacy: {
    metaTitle: 'Polityka prywatności',
    metaDescription:
      'Informacje o przetwarzaniu danych osobowych na stronie biura tłumaczeń Translation Admy.',
    h1: 'Polityka prywatności',
    lead:
      'Poważnie traktujemy ochronę Państwa danych osobowych. Poniżej informujemy, jakie dane są przetwarzane podczas wizyty na tej stronie.',
    sections: [
      {
        title: 'Administrator danych',
        body: [
          'Administratorem przetwarzania danych na tej stronie jest usługodawca wskazany w nocie prawnej. Dane kontaktowe znajdą Państwo tam oraz na stronie kontaktowej.',
        ],
      },
      {
        title: 'Dane dostępowe i pliki dziennika serwera',
        body: [
          'Podczas wywoływania tej strony dostawca hostingu automatycznie rejestruje informacje przekazywane przez Państwa przeglądarkę. Należą do nich z reguły typ i wersja przeglądarki, używany system operacyjny, żądana strona, data i godzina dostępu oraz adres IP.',
          'Dane te są technicznie niezbędne do udostępnienia strony oraz zapewnienia jej stabilności i bezpieczeństwa. Podstawą prawną jest art. 6 ust. 1 lit. f RODO. Dane te nie są łączone z innymi źródłami.',
        ],
      },
      {
        title: 'Kontakt',
        body: [
          'Gdy kontaktują się Państwo z nami przez formularz, e-mailem lub telefonicznie, przetwarzamy przekazane dane wyłącznie w celu obsługi Państwa zapytania oraz na wypadek pytań uzupełniających.',
          'Podstawą prawną jest art. 6 ust. 1 lit. b RODO, o ile zapytanie służy zawarciu lub wykonaniu umowy, a w pozostałym zakresie art. 6 ust. 1 lit. a i f RODO. Udzieloną zgodę mogą Państwo w każdej chwili odwołać ze skutkiem na przyszłość.',
          'Usuwamy dane, gdy tylko Państwa sprawa zostanie ostatecznie załatwiona i nie stoją temu na przeszkodzie ustawowe obowiązki przechowywania.',
        ],
      },
      {
        title: 'Formularz kontaktowy',
        body: [
          'Formularz zapytania na tej stronie przekazuje nam Państwa dane, abyśmy mogli odpowiedzieć na zapytanie. Pola obowiązkowe są oznaczone. Podanie dalszych danych jest dobrowolne.',
        ],
      },
      {
        title: 'Zgłoszenia kandydatów',
        body: [
          'Jeśli prześlą nam Państwo zgłoszenie przez formularz aplikacyjny, przetwarzamy przekazane dane i dokumenty wyłącznie w celu oceny Państwa zgłoszenia. Podstawą prawną jest art. 6 ust. 1 lit. b RODO oraz art. 6 ust. 1 lit. a RODO w zakresie udzielonej zgody.',
          'Dokumenty są przekazywane e-mailem do naszego biura i traktowane poufnie. W każdej chwili mogą Państwo zażądać ich usunięcia.',
        ],
      },
      {
        title: 'Pliki cookie i śledzenie',
        body: [
          'Ta strona nie używa plików cookie do celów analitycznych, reklamowych ani śledzących. Nie tworzymy profili użytkowników i nie osadzamy usług analitycznych osób trzecich.',
          'Preferowaną wersję językową zapisujemy wyłącznie lokalnie w Państwa przeglądarce (localStorage), aby przy kolejnej wizycie trafili Państwo od razu na swoją wersję językową. Informacja ta nie opuszcza Państwa urządzenia i nie jest nam przekazywana. Mogą ją Państwo w każdej chwili usunąć w ustawieniach przeglądarki.',
        ],
      },
      {
        title: 'Kroje pisma i treści zewnętrzne',
        body: [
          'Kroje pisma i wszystkie pozostałe elementy graficzne są dostarczane bezpośrednio z naszego serwera. Podczas wczytywania strony nie są nawiązywane połączenia z dostawcami zewnętrznymi.',
        ],
      },
      {
        title: 'Państwa prawa',
        body: [
          'Przysługuje Państwu prawo dostępu do przechowywanych danych (art. 15 RODO), sprostowania (art. 16 RODO), usunięcia (art. 17 RODO), ograniczenia przetwarzania (art. 18 RODO), przenoszenia danych (art. 20 RODO) oraz prawo sprzeciwu (art. 21 RODO).',
          'Do skorzystania z praw wystarczy nieformalna wiadomość na dane kontaktowe wskazane w nocie prawnej.',
        ],
      },
      {
        title: 'Prawo do wniesienia skargi do organu nadzorczego',
        body: [
          'Mają Państwo prawo wnieść skargę do organu nadzorczego ds. ochrony danych w związku z przetwarzaniem Państwa danych osobowych. Właściwy jest m.in. Krajowy Pełnomocnik ds. Ochrony Danych i Wolności Informacji Nadrenii-Palatynatu.',
        ],
      },
      {
        title: 'Szyfrowanie',
        body: [
          'Ze względów bezpieczeństwa strona korzysta z szyfrowania TLS. Połączenie szyfrowane rozpoznają Państwo po symbolu kłódki w pasku adresu przeglądarki.',
        ],
      },
      {
        title: 'Aktualność',
        body: [
          'Dostosowujemy niniejszą politykę prywatności, gdy tylko zmiany na stronie lub w przepisach prawa tego wymagają.',
        ],
      },
    ],
  },

  notFound: {
    metaTitle: 'Nie znaleziono strony',
    metaDescription: 'Żądana strona nie istnieje.',
    h1: 'Nie znaleziono strony',
    text: 'Strona, którą Państwo wywołali, nie istnieje lub została przeniesiona.',
    cta: 'Powrót na stronę główną',
  },

  footer: {
    tagline:
      'Tłumaczenia ustne i pisemne w wielu językach i dialektach — dla urzędów, sądów, firm i klientów prywatnych.',
    servicesHeading: 'Usługi',
    companyHeading: 'Firma',
    contactHeading: 'Kontakt',
    legalHeading: 'Informacje prawne',
    copyright: 'Wszelkie prawa zastrzeżone.',
    languageHeading: 'Język',
  },
};

export default pl;
