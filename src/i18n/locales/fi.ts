import type { LocaleDictionary } from '../types';

/** Suomi. TODO: Abschnitt `requirements` fehlt noch. */
const fi: LocaleDictionary = {
  nav: {
    home: 'Etusivu',
    services: 'Palvelut',
    expertise: 'Erikoisalat',
    authorities: 'Viranomaiset ja instituutiot',
    business: 'Yrityksille',
    coverage: 'Toiminta-alueet',
    languages: 'Kielet',
    about: 'Tietoa meistä',
    careers: 'Tulkeille ja kääntäjille',
    apply: 'Hae mukaan',
    requirements: 'Edellytykset',
    contact: 'Yhteystiedot',
    imprint: 'Oikeudellinen huomautus',
    privacy: 'Tietosuoja',
  },

  ui: {
    skipToContent: 'Siirry sisältöön',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
    languageSwitcher: 'Kieli',
    languageSwitcherHint: 'Valitse sivuston kieli',
    currentLanguage: 'Nykyinen kieli',
    breadcrumb: 'Olet tässä',
    home: 'Etusivu',
    phone: 'Puhelin',
    mobile: 'Matkapuhelin',
    fax: 'Faksi',
    email: 'Sähköposti',
    address: 'Osoite',
    postalAddress: 'Postiosoite',
    callNow: 'Soita nyt',
    writeEmail: 'Lähetä sähköpostia',
    requestQuote: 'Pyydä tarjous',
    learnMore: 'Lue lisää',
    allLanguages: 'Katso kaikki kielet',
    backToHome: 'Takaisin etusivulle',
    legallyBindingNote: 'Oikeudellisesti sitova on yksinomaan tämän sivun saksankielinen versio.',
    applyCta: 'Hae tulkiksi tai kääntäjäksi',
    applyCtaShort: 'Hae tulkiksi',
    websiteLanguages:
      'Tämä sivusto on tällä hetkellä saatavilla {count} eurooppalaisella kielellä. Lisäämme tarvittaessa muitakin kieliversioita – ottakaa yhteyttä.',
  },

  home: {
    metaTitle: 'Tulkkeja ja kääntäjiä viranomaisille, tuomioistuimille ja yrityksille',
    metaDescription:
      'Tulkkaustoimisto Translation Admy: konsekutiivi- ja konferenssitulkkaus sekä auktorisoidut käännökset lukuisilla kielillä ja murteilla. Viranomaisille, tuomioistuimille, yrityksille ja yksityisasiakkaille koko Saksassa ja Euroopassa.',
    heroKicker: 'Tulkkaustoimisto Translation Admy',
    heroTitle: 'Ymmärrystä ilman esteitä — keskustelukumppanin kielellä',
    heroLead:
      'Tulkkaamme ja käännämme viranomaisille, tuomioistuimille, vastaanottokeskuksille, yrityksille ja yksityisasiakkaille. Äidinkieliset tulkit, yli 10 vuoden kokemus, toimimme koko Suomessa ja useissa Euroopan maissa.',
    heroPrimary: 'Sitoumukseton tiedustelu',
    heroSecondary: 'Katso palvelut',
    heroBadges: [
      'Äidinkieliset ammattilaiset',
      'Auktorisoidut käännökset',
      'Toimeksiannot lyhyellä varoitusajalla',
    ],
    statLanguages: '17',
    statLanguagesLabel: 'Sivuston kieliversiota',
    statYears: '10+',
    statYearsLabel: 'Yli 10 vuoden kokemus',
    statCoverage: 'Koko Euroopassa',
    statCoverageLabel: 'Toiminta-alue',

    servicesTitle: 'Palvelumme',
    servicesLead:
      'Viranomaistapaamisesta oikeudenkäyntiin ja kansainväliseen konferenssiin — järjestämme sopivan kielellisen välityksen.',
    servicesCta: 'Katso kaikki palvelut',

    audienceTitle: 'Kenelle työskentelemme',
    audienceLead:
      'Palvelumme on suunnattu julkisen sektorin tilaajille, instituutioille, yrityksille ja yksityishenkilöille.',
    audienceCta: 'Tietoa viranomaisille',

    expertiseTitle: 'Erikoisalat',
    expertiseLead:
      'Kielellinen välitys edellyttää asiantuntemusta. Tulkkimme tuntevat alat, joista on kyse.',

    languagesTitle: 'Kielet ja murteet',
    languagesLead:
      'Katamme eurooppalaisia, aasialaisia ja afrikkalaisia kieliä — mukaan lukien harvinaiset murteet, joille on usein vaikea löytää tekijää lyhyellä varoitusajalla.',
    languagesCta: 'Katso kaikki kielet',

    processTitle: 'Näin tiedustelu etenee',
    processLead: 'Selkeästi, nopeasti ja ilman hallinnollista taakkaa teille.',
    process: [
      {
        title: '1. Tiedustelu',
        text: 'Kerrotte meille kielen, ajankohdan, paikan ja aiheen — puhelimitse tai sähköpostitse.',
      },
      {
        title: '2. Vastaus',
        text: 'Tarkistamme saatavuuden ja palaamme asiaan pian konkreettisella tarjouksella.',
      },
      {
        title: '3. Toteutus',
        text: 'Sopiva tulkki saapuu ajoissa paikalle tai käännös toimitetaan.',
      },
      {
        title: '4. Laskutus',
        text: 'Saatte selkeän laskun — halutessanne organisaationne vaatimusten mukaisesti.',
      },
    ],

    valuesTitle: 'Mihin voitte luottaa',
    valuesLead:
      'Arkaluonteisissa keskusteluissa tarkkuus, puolueettomuus ja vaitiolo eivät ole lisäpalvelu vaan edellytys.',

    ctaTitle: 'Tarvitsetteko tulkin lyhyellä varoitusajalla?',
    ctaText:
      'Soittakaa tai kirjoittakaa meille — vastaamme mahdollisimman pian sitovalla tiedolla.',
    ctaButton: 'Ota yhteyttä',
  },

  services: {
    metaTitle: 'Palvelut — tulkkaus ja kääntäminen',
    metaDescription:
      'Konsekutiivitulkkaus, konferenssitulkkaus, auktorisoidut käännökset, tulkkaus viranomaisissa ja tuomioistuimissa sekä asioimistulkkaus lukuisilla kielillä ja murteilla.',
    h1: 'Palvelumme',
    lead:
      'Tarjoamme tulkkaus- ja käännöspalveluja viranomaisille, tuomioistuimille, yrityksille ja yksityishenkilöille — tarvitsemassanne kieliyhdistelmässä.',
    items: [
      {
        title: 'Konsekutiivitulkkaus',
        text: 'Tulkki välittää sanotun jaksoittain sen jälkeen, kun puhuja on lopettanut. Sopiva muoto keskusteluihin, kuulemisiin ja tapaamisiin, joissa osallistujia on kohtuullinen määrä.',
        bullets: [
          'Kuulemiset, neuvonta ja viranomaiskeskustelut',
          'Neuvottelut ja kokoukset',
          'Ei vaadi teknisiä laitteita',
        ],
      },
      {
        title: 'Konferenssitulkkaus',
        text: 'Tilaisuuksiin, joissa on laajempi osallistujajoukko ja useita kieliä. Sanottu välitetään samanaikaisesti, joten kulku ei katkea.',
        bullets: [
          'Konferenssit, alan tapahtumat ja koulutukset',
          'Monikieliset tilaisuudet',
          'Sovittaminen ohjelmaanne',
        ],
      },
      {
        title: 'Auktorisoidut käännökset',
        text: 'Asiakirjojen käännökset, jotka on tarkoitettu esitettäviksi viranomaisille, tuomioistuimille ja instituutioille.',
        bullets: [
          'Väestörekisteri- ja henkilöllisyysasiakirjat',
          'Todistukset ja selvitykset',
          'Oikeudelliset ja viranomaisasiakirjat',
        ],
      },
      {
        title: 'Tulkkaus viranomaisissa ja tuomioistuimissa',
        text: 'Kielellinen välitys hallinnollisessa ja oikeudellisessa ympäristössä. Täällä jokainen sana merkitsee: välitämme sen, mitä todella sanottiin, mitään pois jättämättä ja mitään lisäämättä.',
        bullets: [
          'Tapaamiset virastoissa ja viranomaisissa',
          'Oikeuden istunnot ja poliisiasiat',
          'Puolueettomuus ja vaitiolo',
        ],
      },
      {
        title: 'Asioimistulkkaus',
        text: 'Henkilökohtainen saattaminen siellä, missä ymmärrystä tarvitaan välittömästi — arjessa, tapaamisissa ja erityisissä elämäntilanteissa.',
        bullets: [
          'Saattaminen avioliittoon vihkimisessä',
          'Lääkäri- ja sairaalakäynnit',
          'Muut henkilökohtaiset asiat',
        ],
      },
      {
        title: 'Erikoisalojen käännökset',
        text: 'Kirjalliset ammattitasoiset käännökset — kaikissa tarvitsemissanne kieliyhdistelmissä.',
        bullets: [
          'Lääketiede, talous, oikeus ja tekniikka',
          'Äidinkielisten laatimat',
          'Yhtenäinen erikoisalan terminologia',
        ],
      },
    ],
    noteTitle: 'Eikö kieltänne löydy listalta?',
    noteText:
      'Kysykää meiltä. Kielivalikoimamme on erityisen laaja ja autamme mielellämme henkilökohtaisesti.',
  },

  expertise: {
    metaTitle: 'Erikoisalat — lääketiede, oikeus, turvapaikka-asiat, talous ja tekniikka',
    metaDescription:
      'Translation Admyn erikoisalat: lääketiede ja terveydenhuolto, oikeus ja oikeuslaitos, turvapaikka-asiat ja maahanmuutto, julkishallinto, talous sekä tekniikka.',
    h1: 'Erikoisalat',
    lead:
      'Ammattimaisia korkeatasoisia käännöksiä — olipa kyse lääketieteestä, taloudesta, oikeudesta tai tekniikasta ja riippumatta siitä, minkä kieliyhdistelmän tarvitsette.',
    items: [
      {
        title: 'Lääketiede ja terveydenhuolto',
        text: 'Ymmärrys hoitohenkilökunnan ja potilaiden välillä, jossa väärinkäsityksillä voi olla vakavia seurauksia.',
        bullets: [
          'Esitiedot, tiedottaminen ja neuvontakeskustelut',
          'Lääkäri- ja sairaalakäynnit',
          'Tutkimustulokset ja lääketieteelliset asiakirjat',
        ],
      },
      {
        title: 'Oikeus ja oikeuslaitos',
        text: 'Kielellinen välitys oikeudellisessa ympäristössä, jossa tarkkuus ja puolueettomuus vaikuttavat menettelyn kulkuun.',
        bullets: [
          'Oikeuden istunnot ja kuulemiset',
          'Sopimukset ja oikeudelliset asiakirjat',
          'Tuomioistuimille esitettävät asiakirjat',
        ],
      },
      {
        title: 'Turvapaikka-asiat ja maahanmuutto',
        text: 'Viestintä menettelyissä ja yksiköissä, joissa harvinaiset kielet ja murteet ovat tärkeitä — samoin rauhallinen, asiallinen keskustelun ohjaus.',
        bullets: [
          'Kuulemiset ja menettelyneuvonta',
          'Vastaanotto- ja majoitusyksiköt',
          'Harvinaiset kielet ja murteet',
        ],
      },
      {
        title: 'Julkishallinto',
        text: 'Tukea kaikkialla, missä hallinnollinen toiminta kohtaa ihmisiä, joiden saksan kielen taito ei riitä.',
        bullets: [
          'Tapaamiset virastoissa ja erityispalveluissa',
          'Neuvonta- ja hakemuskeskustelut',
          'Päätökset ja viranomaiskirjeet',
        ],
      },
      {
        title: 'Talous ja teollisuus',
        text: 'Kielellinen välitys liiketoiminnan arkeen — neuvotteluista monikieliseen dokumentaatioon.',
        bullets: [
          'Neuvottelut ja liiketapaamiset',
          'Messut ja yritysvierailut',
          'Liikekirjeenvaihto ja asiakirjat',
        ],
      },
      {
        title: 'Tekniikka',
        text: 'Teknisen sisällön välittäminen yhtenäisellä terminologialla ja alan asiayhteyden tuntemuksella.',
        bullets: [
          'Tekninen dokumentaatio',
          'Koulutukset ja perehdytykset',
          'Turvallisuus- ja käyttöasiakirjat',
        ],
      },
    ],
    noteTitle: 'Alalle sopiva valinta',
    noteText:
      'Meille on tärkeää, että kieli ja erikoisala sopivat yhteen. Kertokaa tapaamisenne aihe — valitsemme tulkin sen mukaan.',
  },

  authorities: {
    metaTitle: 'Viranomaiset ja instituutiot — tulkkaus julkiselle sektorille',
    metaDescription:
      'Tulkkaus- ja käännöspalvelut tuomioistuimille, poliisille, liittovaltion poliisille, BAMF:lle, ulkomaalaisvirastoille, vastaanottokeskuksille, kunnille, kansalaisjärjestöille sekä eurooppalaisille instituutioille kuten EUAA ja Frontex.',
    h1: 'Viranomaiset ja instituutiot',
    lead:
      'Julkisen sektorin tilaajat tarvitsevat kielellistä välitystä, joka on luotettavaa, puolueetonta ja saatavilla lyhyellä varoitusajalla. Juuri siihen toimistomme on suunnattu.',
    audienceTitle: 'Kenelle tarjouksemme on suunnattu',
    audienceLead:
      'Olemme seuraavien tahojen käytettävissä tulkkaus- ja käännöspalveluissa.',
    audienceDisclaimer:
      'Tässä mainitut tahot ja organisaatiot kuvaavat tarjouksemme kohderyhmiä. Ne eivät nimenomaisesti ole referenssejä, eikä yhteistyötä tai sopimussuhdetta ole olemassa, ellei siitä ole erikseen sovittu.',
    audience: [
      {
        title: 'Tuomioistuimet',
        text: 'Kielellinen välitys istunnoissa, kuulemisissa ja tapaamisissa sekä asiakirjojen kääntäminen.',
      },
      {
        title: 'Poliisi ja liittovaltion poliisi',
        text: 'Ymmärrys lausuntoja otettaessa ja kuulusteluissa — myös tavanomaisen virka-ajan ulkopuolella.',
      },
      {
        title: 'Liittovaltion maahanmuutto- ja pakolaisvirasto (BAMF)',
        text: 'Kielellinen välitys menettelyissä ja neuvonnassa, mukaan lukien harvinaiset kielet ja murteet.',
      },
      {
        title: 'Ulkomaalaisvirastot',
        text: 'Tukea asioinnissa, hakemuskeskusteluissa ja virallisten asiakirjojen kääntämisessä.',
      },
      {
        title: 'Vastaanottoyksiköt',
        text: 'Ymmärrys vastaanotto- ja majoitusyksiköiden arjessa.',
      },
      {
        title: 'Kunnat ja piirikunnat',
        text: 'Kielellinen välitys erityispalveluille sekä sosiaali-, nuoriso- ja järjestysvirastoille.',
      },
      {
        title: 'Työvoima- ja sosiaalivirastot',
        text: 'Saattaminen neuvonta-, hakemus- ja kotoutumiskeskusteluissa.',
      },
      {
        title: 'Koulut ja oppilaitokset',
        text: 'Vanhempainkeskustelut, neuvontatapaamiset ja kouluasiakirjat.',
      },
      {
        title: 'EUAA',
        text: 'Olemme Euroopan unionin turvapaikkaviraston käytettävissä kielellisessä välityksessä kattamillamme kielillä.',
      },
      {
        title: 'Frontex',
        text: 'Euroopan raja- ja merivartioviraston operaatioihin tarjoamme kielellistä välitystä eurooppalaisilla ja Euroopan ulkopuolisilla kielillä.',
      },
      {
        title: 'Kansalaisjärjestöt ja kansainväliset organisaatiot',
        text: 'Kielellistä tukea neuvontapisteille, avustusjärjestöille ja kansainvälisille laitoksille.',
      },
    ],
    principlesTitle: 'Työmme periaatteet',
    principlesLead:
      'Arkaluonteisissa keskusteluissa tulkin asenne ratkaisee lopputuloksen.',
    principles: [
      {
        title: 'Uskollinen välittäminen',
        text: 'Meille on erittäin tärkeää, että tulkkauksessa ja kääntämisessä välitetään aina täsmälleen se, mitä todella sanottiin.',
      },
      {
        title: 'Puolueettomuus',
        text: 'Tulkkaamme puolueettomasti lisäämättä omaa arviotamme sanotusta.',
      },
      {
        title: 'Vaitiolo',
        text: 'Kaikkea sisältöä käsitellään luottamuksellisesti — toimeksiannon aikana ja sen jälkeen.',
      },
      {
        title: 'Luotettavuus',
        text: 'Sovituista ajoista pidetään kiinni. Saatte tiedon saatavuudesta hyvissä ajoin.',
      },
    ],
    procurementTitle: 'Yhteistyö ja toimeksiannot',
    procurementText:
      'Mukaudumme organisaationne menettelyihin ja olemme käytettävissä sekä yksittäisiin tapaamisiin että pysyvään yhteistyöhön.',
    procurementBullets: [
      'Yksittäiset toimeksiannot ja työt lyhyellä varoitusajalla',
      'Toistuvat tapaamiset sopimuksen mukaan',
      'Puitesopimukset pyynnöstä',
      'Laskutus organisaationne vaatimusten mukaisesti',
      'Yhteyshenkilö kysymyksiä varten toimeksiannon aikana',
    ],
    tendersTitle: 'Tarjouskilpailut ja hankintamenettelyt Euroopassa',
    tendersText:
      'Osallistumme julkisen sektorin tilaajien tarjouskilpailuihin ja hankintamenettelyihin Saksassa ja muualla Euroopassa. Jos kilpailutatte kielipalveluja, ottakaa yhteyttä — kokoamme tarjouksen jättämiseen tarvittavat asiakirjat.',
  },

  business: {
    metaTitle: 'Yrityksille — tulkkaus ja erikoisalojen käännökset',
    metaDescription:
      'Tulkkaus- ja käännöspalvelut yrityksille: neuvottelut, messut, yritysvierailut, koulutukset, sopimukset ja tekninen dokumentaatio lukuisilla kielillä.',
    h1: 'Yrityksille',
    lead:
      'Olipa kyse neuvottelusta, messuista tai teknisestä dokumentaatiosta: huolehdimme siitä, että viestinne välittyy toisella kielellä juuri niin kuin sen tarkoititte.',
    items: [
      {
        title: 'Neuvottelut',
        text: 'Kielellinen välitys liiketapaamisissa, sopimusneuvotteluissa ja kansainvälisten kumppaneiden kanssa käytävissä keskusteluissa.',
      },
      {
        title: 'Messut ja tapahtumat',
        text: 'Tukea osastolla ja oheisohjelmissa — myös useiden päivien ajan.',
      },
      {
        title: 'Yritysvierailut',
        text: 'Vierailijaryhmien saattaminen tuotannossa, laboratoriossa tai hallinnossa.',
      },
      {
        title: 'Koulutukset ja perehdytykset',
        text: 'Prosessien, turvallisuusohjeiden ja alan sisällön ymmärrettävä välittäminen.',
      },
      {
        title: 'Sopimukset ja asiakirjat',
        text: 'Liike- ja oikeudellisten asiakirjojen kirjallinen käännös, pyynnöstä auktorisoituna.',
      },
      {
        title: 'Tekninen dokumentaatio',
        text: 'Teknisen sisällön välittäminen yhtenäisellä ja jäljitettävällä terminologialla.',
      },
    ],
    processTitle: 'Ensimmäisestä yhteydenotosta toimeksiantoon',
    processLead: 'Selkeä eteneminen, joka säästää teiltä koordinointityötä.',
    process: [
      {
        title: 'Tarpeen selvittäminen',
        text: 'Kieli, ajankohta, paikka, kesto ja tilaisuutenne alakohtainen tausta.',
      },
      {
        title: 'Tarjouksen saaminen',
        text: 'Saatte konkreettisen tiedon saatavuudesta ja ehdoista.',
      },
      {
        title: 'Toimeksiannon valmistelu',
        text: 'Halutessanne toimitatte etukäteen asiakirjoja, jotta terminologia on täsmällinen.',
      },
      {
        title: 'Toteutus',
        text: 'Kielellinen välitys tapahtuu ajallaan paikan päällä tai kirjallisena käännöksenä.',
      },
    ],
    ctaTitle: 'Tarjous yrityksellenne',
    ctaText:
      'Kuvatkaa lyhyesti tarpeenne — palaamme asiaan konkreettisella arviolla saatavuudesta ja ehdoista.',
  },

  coverage: {
    metaTitle: 'Toiminta-alueet — Saksa ja Eurooppa',
    metaDescription:
      'Translation Admy välittää tulkkeja ja kääntäjiä toimeksiantoihin koko Saksassa ja valituissa Euroopan maissa — paikan päällä, puhelimitse tai videolla, myös turvapaikka- ja rajamenettelyissä.',
    h1: 'Toiminta-alueet',
    lead:
      'Toimistomme sijaitsee Bingen am Rheinissä. Tulkkimme toimivat koko Saksassa.',
    baseTitle: 'Toimipaikka Bingen am Rhein',
    baseText:
      'Bingen am Rheinistä saavutamme lyhyessä ajassa Rein–Main-alueen, Rheinhessenin ja Keski-Reinin. Tämän alueen tapaamisiin olemme usein käytettävissä hyvinkin lyhyellä varoitusajalla.',
    europeTitle: 'Toimimme koko Saksassa ja Euroopassa',
    europeText:
      'Translation Admy välittää tulkkeja ja kääntäjiä toimeksiantoihin koko Saksassa ja valituissa Euroopan maissa. Toimeksiannosta riippuen tuemme viranomaisia, julkisia laitoksia, yrityksiä ja kansainvälisiä organisaatioita paikan päällä, puhelimitse tai videoyhteydellä.',
    capabilities: [
      'Toimeksiannot koko Saksassa',
      'Tulkkaus paikan päällä',
      'Puhelin- ja videotulkkaus',
      'Lyhyellä varoitusajalla ja pitkälle suunnitellut toimeksiannot',
      'Rajat ylittävät ja Euroopan laajuiset hankkeet',
      'Tuki turvapaikka-, maahanmuutto- ja vastaanottomenettelyissä',
      'Euroopan laajuisen tulkkiverkoston rakentaminen',
    ],

    bordersTitle: 'Tulkkauspalvelut Euroopan raja- ja turvapaikkamenettelyihin',
    bordersText:
      'Translation Admy rakentaa Euroopan laajuista pätevien tulkkien ja kääntäjien verkostoa. Kielenvälittäjämme ovat käytettävissä tiedusteluihin ja mahdollisiin toimeksiantoihin Frontexin, Euroopan unionin turvapaikkaviraston (EUAA), kansallisten turvapaikkaviranomaisten, vastaanottoyksiköiden sekä Euroopan ulkorajoilla toimivien yksiköiden ympäristössä.',
    bordersNote:
      'Tuemme kielellistä ymmärrystä turvapaikka-, maahanmuutto-, rekisteröinti-, vastaanotto- ja palautusmenettelyissä. Kielestä, saatavuudesta, pätevyydestä ja paikasta riippuen toimeksiannot voidaan järjestää paikan päällä, puhelimitse tai videoyhteydellä.',

    countriesTitle: 'Euroopan toiminta- ja välitysalueet',
    countriesNote:
      'Todellinen saatavuus riippuu kielestä, pätevyydestä, paikasta ja ajankohdasta.',

    nationwideTitle: 'Koko Saksassa',
    nationwideText:
      'Teemme yhteistyötä tulkkien kanssa koko Saksan alueella. Kertokaa paikka ja ajankohta — tarkistamme saatavuuden paikan päällä.',
    internationalTitle: 'Toimeksiannot muualla Euroopassa',
    internationalText:
      'Saksan ulkopuolisista toimeksiannoista pyydämme ottamaan yhteyttä. Arvioimme tapauskohtaisesti, voimmeko kattaa tarpeenne ja miten.',
    remoteTitle: 'Puhelin- ja videotapaamiset',
    remoteText:
      'Kun paikan päällä tapahtuva tapaaminen ei ole mahdollinen tai tarpeen, kielellinen välitys voi sopimuksen mukaan tapahtua myös puhelimitse tai videoyhteydellä.',
  },

  languages: {
    metaTitle: 'Kielet — koko kielivalikoimamme',
    metaDescription:
      'Tulkkaamme ja käännämme lukuisilla kielillä ja murteilla: eurooppalaisia, aasialaisia, pohjoisafrikkalaisia ja afrikkalaisia kieliä — mukaan lukien harvinaiset muunnokset.',
    h1: 'Kielet ja murteet',
    lead:
      'Kielivalikoimamme on erityisen laaja ja voimme tukea teitä monilla kielillä. Tulkkaamme ja käännämme teille seuraavilla kielillä.',
    searchLabel: 'Hae kieltä',
    searchPlaceholder: 'esim. arabia, tigrinja, sorani …',
    clearSearch: 'Tyhjennä haku',
    resultsOne: 'Löytyi 1 kieli',
    resultsMany: 'Löytyi {count} kieltä',
    noResults: 'Sopivaa kieltä ei löytynyt.',
    noResultsHint: 'Kysykää silti meiltä — luettelomme ei ole tyhjentävä.',
    groupTitles: {
      asiatisch: 'Aasian ja Lähi-idän kielet',
      europaeisch: 'Euroopan kielet',
      nordafrikanisch: 'Pohjois-Afrikan kielet',
      afrikanisch: 'Afrikan kielet ja murteet',
    },
    groupIntros: {
      asiatisch:
        'Arabiasta kurdin muunnosten kautta vietnamiin — toimistomme vahvuus.',
      europaeisch:
        'Kaikki tavanomaiset EU:n viralliset kielet sekä Itä- ja Kaakkois-Euroopan kielet viranomaisille, tuomioistuimille ja yrityksille.',
      nordafrikanisch: 'Maghrebin arabia ja Pohjois-Afrikan berberikielet.',
      afrikanisch:
        'Yli 50 Länsi-, Itä- ja Keski-Afrikan kieltä ja murretta — mukaan lukien harvinaiset muunnokset.',
    },
    missingTitle: 'Jos haluamanne kieli puuttuu luettelosta, kysykää meiltä.',
    missingText: 'Autamme mielellämme henkilökohtaisesti. Odotamme yhteydenottoanne.',
  },

  about: {
    metaTitle: 'Tietoa meistä — tulkkaustoimisto, jolla on yli 10 vuoden kokemus',
    metaDescription:
      'Translation Admy on kokenut ammattitulkkien ja -kääntäjien tiimi, jolla on yli 10 vuoden kokemus alalta.',
    h1: 'Tietoa meistä',
    lead:
      'Olemme kokenut ammattitulkkien ja -kääntäjien tiimi, jolla on yli 10 vuoden kokemus alalta.',
    body: [
      'Meitä ohjaa korkea vaatimustaso tänään ja tulevaisuudessa: tarjoamme asiakkaillemme vain parhaat palvelut ja ratkaisut, ja aina edulliseen hintaan. Tarjontamme perustuu yksinomaan asiakkaiden konkreettisiin tarpeisiin ja odotuksiin.',
      'Juuri siksi toimistossamme työskentelee ainoastaan päteviä äidinkielisiä tulkkeja ja kääntäjiä. Työntekijöillämme on riittävä kokemus kääntämisen ja tulkkauksen alalta.',
      'Tulos: ammattimaisia korkeatasoisia käännöksiä — olipa kyse lääketieteestä, taloudesta, oikeudesta tai tekniikasta ja riippumatta siitä, minkä kieliyhdistelmän tarvitsette.',
    ],
    quote:
      'Meille on erittäin tärkeää, että tulkkauksessa ja kääntämisessä välitetään aina täsmälleen se, mitä todella sanottiin.',
    valuesTitle: 'Mikä meitä leimaa',
    values: [
      {
        title: 'Äidinkielisyyden periaate',
        text: 'Toimistossamme työskentelee ainoastaan päteviä äidinkielisiä tulkkeja ja kääntäjiä.',
      },
      {
        title: 'Kokemus',
        text: 'Yli 10 vuoden kokemus alalta — ja työntekijät, joilla on käytännön kokemusta tulkkauksesta ja kääntämisestä.',
      },
      {
        title: 'Tarpeeseen perustuva',
        text: 'Tarjontamme perustuu yksinomaan asiakkaiden konkreettisiin tarpeisiin ja odotuksiin.',
      },
      {
        title: 'Reilut ehdot',
        text: 'Parhaat palvelut ja ratkaisut asiakkaillemme — ja aina edulliseen hintaan.',
      },
    ],
  },

  careers: {
    metaTitle: 'Ura — etsimme tulkkeja kaikille kielille ja murteille',
    metaDescription:
      'Tiimimme vahvistamiseksi etsimme koko Saksan alueella tulkkeja kaikille kielille ja murteille. Hae nyt Translation Admyyn.',
    h1: 'Tulkeille ja kääntäjille',
    lead:
      'Tiimimme vahvistamiseksi etsimme koko Saksan alueella tulkkeja kaikille kielille ja murteille.',
    requirementsTitle: 'Edellytykset',
    requirements: [
      'Saksan kielen C1-tason todistus, saksalainen Abitur / Fachabitur, DSH 2/3, Allgemeine Fachhochschulreife, Fachoberschulreife, Studienkolleg-todistus tai korkeakoulututkinto',
      'Ei merkintöjä rikosrekisterissä',
      'Työnteko-oikeus on oltava',
    ],
    offerTitle: 'Mitä odottaa',
    offer: [
      'Toimeksiantoja koko Saksassa — myös omalla alueellanne',
      'Vaihtelevia toimeksiantoja viranomaisille, tuomioistuimille, yrityksille ja yksityishenkilöille',
      'Tiimi, joka arvostaa tarkkaa ja puolueetonta kielellistä välitystä',
    ],
    applyTitle: 'Näin haet',
    applyText:
      'Lähettäkää hakemuksenne sähköpostitse ja mainitkaa kielenne ja murteenne sekä liittäkää todistuksenne. Voitte ottaa meihin yhteyttä myös puhelimitse.',
    closing: 'Odotamme hakemustanne.',
    networkTitle: 'Miksi tehdä yhteistyötä Translation Admyn kanssa?',
    networkLead:
      'Rakennamme tulkkien ja kääntäjien verkostoa koko Eurooppaan. Näin teemme yhteistyötä.',
    benefits: [
      {
        title: 'Joustavat toimeksiannot',
        text: 'Te päätätte, mitkä tiedustelut otatte vastaan. Sovimme ajankohdat saatavuutenne mukaan.',
      },
      {
        title: 'Hankkeita koko Euroopassa',
        text: 'Koko Saksan toimeksiantojen ohella tiedusteluja tulee yhä enemmän muista Euroopan maista.',
      },
      {
        title: 'Reilu yhteistyö',
        text: 'Selkeät sopimukset laajuudesta, paikasta ja ehdoista — ennen toimeksiantoa, ei sen jälkeen.',
      },
      {
        title: 'Pitkäjänteinen yhteistyö',
        text: 'Emme tavoittele yksittäisiä tapaamisia vaan luotettavaa yhteistyötä vuosien ajan.',
      },
      {
        title: 'Ammattimainen järjestely',
        text: 'Selvitämme etukäteen aiheen, alan ja puitteet, jotta saavutte tapaamiseen valmistautuneena.',
      },
      {
        title: 'Yksinkertainen viestintä',
        text: 'Lyhyet väylät, vakituiset yhteyshenkilöt ja nopea vastaus — myös käynnissä olevan toimeksiannon aikana.',
      },
      {
        title: 'Tietosuoja ja luottamuksellisuus',
        text: 'Asiakirjojanne käsitellään luottamuksellisesti ja käytetään yksinomaan hakemuksenne arviointiin.',
      },
    ],
    ctaTitle: 'Liity verkostoomme',
    ctaText:
      'Lähettäkää hakemuksenne kielineen, erikoisaloineen ja todistuksineen. Otamme teihin yhteyttä.',
  },

  apply: {
    metaTitle: 'Hakemus tulkiksi tai kääntäjäksi',
    metaDescription:
      'Hae tulkiksi tai kääntäjäksi Translation Admyyn. Verkkohakemus kielineen, erikoisaloineen, ansioluetteloineen ja todistuksineen.',
    h1: 'Hakemus tulkiksi tai kääntäjäksi',
    lead:
      'Täyttäkää lomake ja lataa ansioluettelonne. Tarkastelemme asiakirjanne ja otamme teihin yhteyttä. Rekisteröitymistä ei tarvita.',

    sectionPerson: 'Henkilötiedot',
    sectionLanguages: 'Kielet',
    sectionProfile: 'Toimeksiantoprofiili',
    sectionDocuments: 'Asiakirjat',

    firstName: 'Etunimi',
    lastName: 'Sukunimi',
    email: 'Sähköposti',
    phone: 'Puhelinnumero',
    city: 'Asuinpaikka',
    country: 'Maa',
    nationality: 'Kansalaisuus',
    spokenLanguages: 'Puhutut kielet',
    spokenLanguagesHint: 'Kaikki puhumanne kielet ja murteet — pilkuilla eroteltuna.',
    workingLanguages: 'Työkielet',
    workingLanguagesHint: 'Kielisuuntanne, esim. arabia → saksa, saksa → arabia.',

    fieldsLabel: 'Erikoisalat',
    fieldsHint: 'Voitte valita useita.',
    fieldLabels: {
      asylum: 'Turvapaikka-asiat',
      authorities: 'Viranomaiset',
      police: 'Poliisi',
      courts: 'Tuomioistuimet',
      medical: 'Lääketiede',
      social: 'Sosiaaliala',
      education: 'Koulutus',
      business: 'Talous',
      technical: 'Tekniikka',
    },

    serviceModesLabel: 'Toiminnan laji',
    serviceModeLabels: {
      interpreting: 'Tulkkaus',
      translation: 'Kääntäminen',
    },

    deliveryModesLabel: 'Toimeksiannon muoto',
    deliveryModeLabels: {
      onsite: 'Paikan päällä',
      phone: 'Puhelimitse',
      video: 'Videotulkkaus',
    },

    travelLabel: 'Matkustusvalmius',
    travelLabels: {
      local: 'Asuinpaikka ja lähiseutu',
      regional: 'Alueellinen',
      national: 'Koko Saksa',
      european: 'Koko Eurooppa',
    },

    availabilityLabel: 'Käytettävyys',
    availabilityLabels: {
      fulltime: 'Kokoaikainen',
      parttime: 'Osa-aikainen',
      occasional: 'Satunnaisesti',
      'on-call': 'Kutsusta lyhyellä varoitusajalla',
    },

    experienceLabel: 'Työkokemus',
    experienceLabels: {
      lt1: 'Alle 1 vuosi',
      '1-3': '1–3 vuotta',
      '3-5': '3–5 vuotta',
      '5-10': '5–10 vuotta',
      gt10: 'Yli 10 vuotta',
    },

    messageLabel: 'Viestinne',
    messageHint: 'Mitä muuta meidän tulisi tietää teistä?',

    cvLabel: 'Ansioluettelo',
    cvHint: 'PDF, JPG tai PNG, enintään 8 Mt.',
    certificatesLabel: 'Todistukset ja selvitykset',
    certificatesHint: 'Vapaaehtoinen, enintään 5 tiedostoa, kukin enintään 8 Mt.',

    consent:
      'Olen lukenut tietosuojaselosteen ja suostun siihen, että tietojani ja asiakirjojani säilytetään ja käsitellään hakemukseni käsittelyä varten. Tiedän, että voin peruuttaa suostumukseni milloin tahansa.',
    optional: 'vapaaehtoinen',
    requiredHint: '* Merkitsee pakolliset kentät',
    submit: 'Lähetä hakemus',
    sending: 'Hakemusta lähetetään …',

    successTitle: 'Kiitos hakemuksestanne!',
    successText:
      'Olemme vastaanottaneet asiakirjanne ja otamme teihin yhteyttä. Vastaanottovahvistus on matkalla sähköpostiosoitteeseenne.',
    referenceLabel: 'Asianumeronne',

    errorTitle: 'Hakemustanne ei voitu lähettää',
    errorText:
      'Tarkistakaa tietonne ja yrittäkää uudelleen. Voitte myös lähettää asiakirjanne suoraan sähköpostitse.',
    errorNotDelivered:
      'Sähköpostin lähetystä ei ole vielä määritetty tällä palvelimella. Lähettäkää asiakirjanne toistaiseksi suoraan sähköpostitse.',

    validation: {
      required: 'Täyttäkää tämä kenttä.',
      email: 'Antakaa kelvollinen sähköpostiosoite.',
      fileType: 'Sallittuja ovat PDF-, JPG- ja PNG-tiedostot.',
      tooLarge: 'Tiedosto on liian suuri. Enimmäiskoko on 8 Mt.',
      tooMany: 'Ladatkaa enintään 5 todistusta.',
    },
  },

  contact: {
    metaTitle: 'Yhteystiedot — tiedustelu Translation Admylle',
    metaDescription:
      'Ottakaa yhteyttä tulkkaustoimisto Translation Admyyn Bingen am Rheinissä. Puhelin, sähköposti ja yhteydenottolomake tulkkaus- ja käännöspalveluille.',
    h1: 'Yhteystiedot',
    lead:
      'Onko teillä tapaaminen, johon tarvitsette kielellistä välitystä? Kuvatkaa lyhyesti tarpeenne — otamme teihin yhteyttä mahdollisimman pian.',
    detailsTitle: 'Yhteystiedot',
    formTitle: 'Lähetä tiedustelu',
    formLead:
      'Mitä tarkemmin kuvaatte kielen, ajankohdan ja aiheen, sitä nopeammin voimme antaa sitovan vastauksen.',
    fieldName: 'Nimi',
    fieldEmail: 'Sähköposti',
    fieldOrg: 'Viranomainen / yritys',
    fieldOrgHint: 'vapaaehtoinen',
    fieldSubject: 'Aihe',
    fieldMessage: 'Viesti',
    subjectOptions: [
      'Tulkkaustoimeksianto',
      'Auktorisoitu käännös',
      'Erikoisalan käännös',
      'Viranomaisen tiedustelu',
      'Yrityksen tiedustelu',
      'Hakemus tulkiksi',
      'Muu',
    ],
    consent:
      'Suostun siihen, että näitä tietoja säilytetään ja käsitellään yhteydenottoa varten. Tiedän, että voin peruuttaa suostumukseni milloin tahansa.',
    requiredHint: '* Merkitsee pakolliset kentät',
    submit: 'Lähetä tiedustelu',
    sending: 'Lähetetään …',
    success: 'Kiitos. Otamme teihin yhteyttä mahdollisimman pian.',
    error: 'Viestin lähettämisessä tapahtui virhe. Yrittäkää uudelleen.',
    mailtoNote:
      'Lähetettäessä avautuu sähköpostiohjelmanne valmistellulla viestillä. Voitte tavoittaa meidät myös suoraan puhelimitse.',
    validationName: 'Ilmoittakaa nimenne.',
    validationEmail: 'Antakaa kelvollinen sähköpostiosoite.',
    validationMessage: 'Kuvatkaa lyhyesti asianne.',
    validationConsent: 'Antakaa suostumuksenne tietojenne käsittelyyn.',
  },

  imprint: {
    metaTitle: 'Oikeudellinen huomautus',
    metaDescription: 'Tulkkaustoimisto Translation Admyn palveluntarjoajatiedot.',
    h1: 'Oikeudellinen huomautus',
    providerTitle: 'Tiedot DDG:n 5 §:n mukaisesti',
    representedBy: 'Edustaja',
    taxNumberLabel: 'Verotunniste',
    vatIdLabel: 'Arvonlisäverotunniste § 27a UStG mukaisesti',
    contactTitle: 'Yhteystiedot',
    responsibleTitle: 'Sisällöstä vastaava',
    responsibleText: 'Tämän verkkosivuston sisällöstä vastaa:',
    disputeTitle: 'Riitojen ratkaisu',
    disputeText:
      'Emme ole valmiita emmekä velvollisia osallistumaan riidanratkaisumenettelyihin kuluttajariitalautakunnassa.',
    liabilityContentTitle: 'Vastuu sisällöstä',
    liabilityContentText:
      'Näiden sivujen sisältö on laadittu erittäin huolellisesti. Emme kuitenkaan voi taata sen oikeellisuutta, täydellisyyttä ja ajantasaisuutta. Palveluntarjoajana vastaamme omasta sisällöstämme näillä sivuilla yleisten lakien mukaisesti, mutta emme ole velvollisia valvomaan välitettyjä tai tallennettuja vieraita tietoja.',
    liabilityLinksTitle: 'Vastuu linkeistä',
    liabilityLinksText:
      'Sivustomme voi sisältää linkkejä kolmansien osapuolten ulkoisille verkkosivustoille, joiden sisältöön emme voi vaikuttaa. Linkitettyjen sivujen sisällöstä vastaa aina kyseinen tarjoaja tai ylläpitäjä. Saatuamme tiedon oikeudenloukkauksista poistamme tällaiset linkit viipymättä.',
    copyrightTitle: 'Tekijänoikeus',
    copyrightText:
      'Sivuston ylläpitäjän näillä sivuilla luoma sisältö ja teokset kuuluvat Saksan tekijänoikeuden piiriin. Kolmansien osapuolten osuudet on merkitty sellaisiksi. Monistaminen, muokkaaminen ja levittäminen tekijänoikeuden rajojen ulkopuolella edellyttää kirjallista suostumusta.',
  },

  privacy: {
    metaTitle: 'Tietosuojaseloste',
    metaDescription:
      'Tietoa henkilötietojen käsittelystä tulkkaustoimisto Translation Admyn verkkosivustolla.',
    h1: 'Tietosuojaseloste',
    lead:
      'Suhtaudumme henkilötietojenne suojaan vakavasti. Seuraavassa kerromme, mitä tietoja tällä sivustolla vieraillessa käsitellään.',
    sections: [
      {
        title: 'Rekisterinpitäjä',
        body: [
          'Tämän sivuston tietojenkäsittelystä vastaa oikeudellisessa huomautuksessa mainittu palveluntarjoaja. Yhteystiedot löytyvät sieltä ja yhteystietosivulta.',
        ],
      },
      {
        title: 'Käyttötiedot ja palvelimen lokitiedostot',
        body: [
          'Tätä sivustoa avattaessa palveluntarjoaja tallentaa automaattisesti selaimenne välittämiä tietoja. Näitä ovat yleensä selaimen tyyppi ja versio, käytetty käyttöjärjestelmä, pyydetty sivu, käytön päivämäärä ja kellonaika sekä IP-osoite.',
          'Nämä tiedot ovat teknisesti tarpeen sivuston toimittamiseksi sekä sen vakauden ja turvallisuuden varmistamiseksi. Oikeusperuste on yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan f alakohta. Näitä tietoja ei yhdistetä muihin lähteisiin.',
        ],
      },
      {
        title: 'Yhteydenotto',
        body: [
          'Kun otatte meihin yhteyttä lomakkeella, sähköpostitse tai puhelimitse, käsittelemme antamianne tietoja yksinomaan tiedustelunne käsittelemiseksi ja mahdollisia jatkokysymyksiä varten.',
          'Oikeusperuste on tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohta, mikäli tiedustelunne liittyy sopimuksen valmisteluun tai täyttämiseen, muutoin 6 artiklan 1 kohdan a ja f alakohta. Voitte peruuttaa antamanne suostumuksen milloin tahansa tulevaisuuden osalta.',
          'Poistamme tiedot heti, kun asianne on lopullisesti käsitelty eivätkä lakisääteiset säilytysvelvoitteet ole esteenä.',
        ],
      },
      {
        title: 'Yhteydenottolomake',
        body: [
          'Tämän sivuston yhteydenottolomake välittää tietonne meille, jotta voimme vastata tiedusteluunne. Pakolliset kentät on merkitty. Muiden tietojen antaminen on vapaaehtoista.',
        ],
      },
      {
        title: 'Hakemukset',
        body: [
          'Jos lähetätte meille hakemuksen hakemuslomakkeen kautta, käsittelemme välitettyjä tietoja ja asiakirjoja yksinomaan hakemuksenne arvioimiseksi. Oikeusperuste on tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohta ja annetun suostumuksen osalta 6 artiklan 1 kohdan a alakohta.',
          'Asiakirjat välitetään sähköpostitse toimistollemme ja käsitellään luottamuksellisesti. Voitte pyytää niiden poistamista milloin tahansa.',
        ],
      },
      {
        title: 'Evästeet ja seuranta',
        body: [
          'Tämä sivusto ei käytä evästeitä analytiikka-, mainonta- tai seurantatarkoituksiin. Käyttäjäprofiileja ei luoda eikä kolmansien osapuolten analytiikkapalveluita ole upotettu.',
          'Valitsemanne kieliversion tallennamme yksinomaan paikallisesti selaimeenne (localStorage), jotta pääsette seuraavalla käynnillä suoraan omalle kielellenne. Tämä tieto ei poistu laitteeltanne eikä sitä välitetä meille. Voitte poistaa sen milloin tahansa selaimenne asetuksista.',
        ],
      },
      {
        title: 'Kirjasimet ja ulkoinen sisältö',
        body: [
          'Kirjasimet ja kaikki muut ulkoasun elementit toimitetaan suoraan palvelimeltamme. Sivua ladattaessa ei muodosteta yhteyksiä ulkoisiin palveluntarjoajiin.',
        ],
      },
      {
        title: 'Oikeutenne',
        body: [
          'Teillä on oikeus saada pääsy teitä koskeviin tallennettuihin tietoihin (tietosuoja-asetuksen 15 artikla), oikaisuun (16 artikla), poistamiseen (17 artikla), käsittelyn rajoittamiseen (18 artikla), tietojen siirtämiseen (20 artikla) sekä vastustamisoikeus (21 artikla).',
          'Oikeuksien käyttämiseen riittää vapaamuotoinen viesti oikeudellisessa huomautuksessa mainittuihin yhteystietoihin.',
        ],
      },
      {
        title: 'Oikeus tehdä valitus valvontaviranomaiselle',
        body: [
          'Teillä on oikeus tehdä valitus tietosuojan valvontaviranomaiselle henkilötietojenne käsittelystä. Toimivaltainen on muun muassa Rheinland-Pfalzin osavaltion tietosuoja- ja tiedonvapausvaltuutettu.',
        ],
      },
      {
        title: 'Salaus',
        body: [
          'Turvallisuussyistä tämä sivusto käyttää TLS-salausta. Salatun yhteyden tunnistatte selaimen osoiterivin lukkosymbolista.',
        ],
      },
      {
        title: 'Ajantasaisuus',
        body: [
          'Mukautamme tätä tietosuojaselostetta heti, kun sivuston tai oikeudellisten vaatimusten muutokset sitä edellyttävät.',
        ],
      },
    ],
  },

  notFound: {
    metaTitle: 'Sivua ei löytynyt',
    metaDescription: 'Pyydettyä sivua ei ole olemassa.',
    h1: 'Sivua ei löytynyt',
    text: 'Pyytämäänne sivua ei ole olemassa tai se on siirretty.',
    cta: 'Takaisin etusivulle',
  },

  footer: {
    tagline:
      'Tulkkausta ja kääntämistä lukuisilla kielillä ja murteilla — viranomaisille, tuomioistuimille, yrityksille ja yksityisasiakkaille.',
    servicesHeading: 'Palvelut',
    companyHeading: 'Yritys',
    contactHeading: 'Yhteystiedot',
    legalHeading: 'Oikeudelliset tiedot',
    copyright: 'Kaikki oikeudet pidätetään.',
    languageHeading: 'Kieli',
  },
};

export default fi;
