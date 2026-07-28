import type { Dictionary } from '../types';

/** Français. */
const fr: Dictionary = {
  nav: {
    home: 'Accueil',
    services: 'Prestations',
    expertise: 'Domaines de spécialité',
    authorities: 'Autorités et institutions',
    business: 'Pour les entreprises',
    coverage: 'Zones d’intervention',
    languages: 'Langues',
    about: 'À propos',
    careers: 'Interprètes & traducteurs',
    apply: 'Postuler',
    requirements: 'Conditions requises',
    contact: 'Contact',
    imprint: 'Mentions légales',
    privacy: 'Protection des données',
  },

  ui: {
    logoSubtitle: 'Interprétation & traduction',
    skipToContent: 'Aller au contenu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    languageSwitcher: 'Langue',
    languageSwitcherHint: 'Choisir la langue du site',
    currentLanguage: 'Langue actuelle',
    breadcrumb: 'Vous êtes ici',
    home: 'Accueil',
    phone: 'Téléphone',
    mobile: 'Portable',
    fax: 'Fax',
    email: 'E-mail',
    address: 'Adresse',
    postalAddress: 'Adresse postale',
    callNow: 'Appeler',
    writeEmail: 'Écrire un e-mail',
    requestQuote: 'Demander un devis',
    learnMore: 'En savoir plus',
    allLanguages: 'Voir toutes les langues',
    backToHome: 'Retour à l’accueil',
    legallyBindingNote: 'Seule la version allemande de cette page fait foi.',
    applyCta: 'Postuler comme interprète / traducteur',
    applyCtaShort: 'Postuler comme interprète',
    websiteLanguages:
      'Ce site est actuellement disponible en {count} langues européennes. Nous ajoutons d’autres versions linguistiques selon les besoins — n’hésitez pas à nous solliciter.',
  },

  home: {
    metaTitle: 'Interprètes et traducteurs pour administrations, tribunaux et entreprises',
    metaDescription:
      'Bureau d’interprétation Translation Admy : interprétation consécutive et de conférence, traductions certifiées dans de nombreuses langues et dialectes. Pour les administrations, tribunaux, entreprises et particuliers, partout en Europe.',
    heroKicker: 'Bureau d’interprétation Translation Admy',
    heroTitle: 'Se comprendre sans détour — dans la langue de votre interlocuteur',
    heroLead:
      'Nous interprétons et traduisons pour les administrations, les tribunaux, les centres d’accueil, les entreprises et les particuliers. Interprètes de langue maternelle, plus de 10 ans d’expérience, interventions en Allemagne et dans de nombreux pays européens.',
    heroPrimary: 'Demande sans engagement',
    heroSecondary: 'Voir nos prestations',
    heroBadges: [
      'Professionnels de langue maternelle',
      'Traductions certifiées',
      'Interventions à court terme',
    ],
    statLanguages: '18',
    statLanguagesLabel: 'Versions linguistiques du site',
    statYears: '10+',
    statYearsLabel: 'Plus de 10 ans d’expérience',
    statCoverage: 'À l’échelle européenne',
    statCoverageLabel: 'Zone d’intervention',

    servicesTitle: 'Nos prestations',
    servicesLead:
      'Du rendez-vous administratif à l’audience au tribunal jusqu’à la conférence internationale — nous fournissons l’accompagnement linguistique adapté.',
    servicesCta: 'Voir toutes les prestations',

    audienceTitle: 'Pour qui nous travaillons',
    audienceLead:
      'Nos prestations s’adressent aux donneurs d’ordre publics, aux institutions, aux entreprises et aux particuliers.',
    audienceCta: 'Informations pour les administrations',

    expertiseTitle: 'Domaines de spécialité',
    expertiseLead:
      'L’accompagnement linguistique exige des connaissances spécialisées. Nos interprètes maîtrisent les domaines qui vous concernent.',

    languagesTitle: 'Langues et dialectes',
    languagesLead:
      'Nous couvrons les langues européennes, asiatiques et africaines — y compris des dialectes rares pour lesquels il est souvent difficile de trouver quelqu’un rapidement.',
    languagesCta: 'Voir toutes les langues',

    processTitle: 'Comment se déroule une demande',
    processLead: 'Clair, rapide et sans charge administrative de votre côté.',
    process: [
      {
        title: '1. Demande',
        text: 'Indiquez-nous la langue, la date, le lieu et le motif — par téléphone ou par e-mail.',
      },
      {
        title: '2. Réponse',
        text: 'Nous vérifions les disponibilités et revenons vers vous rapidement avec une proposition concrète.',
      },
      {
        title: '3. Intervention',
        text: 'L’interprète adapté arrive à l’heure sur place, ou la traduction est livrée.',
      },
      {
        title: '4. Facturation',
        text: 'Vous recevez une facture transparente — conforme aux exigences de votre administration si nécessaire.',
      },
    ],

    valuesTitle: 'Ce sur quoi vous pouvez compter',
    valuesLead:
      'Lors d’entretiens sensibles, l’exactitude, la neutralité et la confidentialité ne sont pas un supplément : ce sont les conditions de base.',

    ctaTitle: 'Vous avez besoin d’un interprète à court terme ?',
    ctaText:
      'Appelez-nous ou écrivez-nous — nous vous répondons dans les meilleurs délais de manière ferme.',
    ctaButton: 'Nous contacter',
  },

  services: {
    metaTitle: 'Prestations — interprétation et traduction',
    metaDescription:
      'Interprétation consécutive, interprétation de conférence, traductions certifiées, interprétation auprès des administrations et tribunaux, interprétation d’accompagnement dans de nombreuses langues et dialectes.',
    h1: 'Nos prestations',
    lead:
      'Nous proposons des prestations d’interprétation et de traduction aux administrations, tribunaux, entreprises et particuliers — dans la combinaison linguistique dont vous avez besoin.',
    items: [
      {
        title: 'Interprétation consécutive',
        text: 'L’interprète restitue le propos par segments, une fois que la personne a terminé de parler. La forme adaptée aux entretiens, auditions et rendez-vous réunissant un nombre limité de participants.',
        bullets: [
          'Auditions, consultations et entretiens administratifs',
          'Négociations et réunions',
          'Aucun équipement technique nécessaire',
        ],
      },
      {
        title: 'Interprétation de conférence',
        text: 'Pour les événements réunissant un large public et plusieurs langues. Le propos est restitué simultanément, sans interrompre le déroulement.',
        bullets: [
          'Colloques, conférences spécialisées et formations',
          'Événements multilingues',
          'Adaptation à votre programme',
        ],
      },
      {
        title: 'Traductions certifiées',
        text: 'Traductions d’actes et de documents destinés à être présentés aux administrations, tribunaux et institutions.',
        bullets: [
          'Actes d’état civil et pièces d’identité',
          'Diplômes et attestations',
          'Documents judiciaires et administratifs',
        ],
      },
      {
        title: 'Interprétation administrative et judiciaire',
        text: 'Accompagnement linguistique dans le cadre administratif et judiciaire. Chaque mot compte : nous restituons ce qui a réellement été dit, sans omission ni ajout.',
        bullets: [
          'Rendez-vous auprès des services et administrations',
          'Audiences et procédures de police',
          'Neutralité et confidentialité',
        ],
      },
      {
        title: 'Interprétation d’accompagnement',
        text: 'Un accompagnement personnel là où la compréhension est immédiatement nécessaire — au quotidien, lors de rendez-vous et dans des situations particulières.',
        bullets: [
          'Accompagnement lors d’un mariage',
          'Visites médicales et hospitalières',
          'Autres démarches personnelles',
        ],
      },
      {
        title: 'Traductions spécialisées',
        text: 'Traductions écrites répondant à des exigences professionnelles — dans toute combinaison linguistique dont vous avez besoin.',
        bullets: [
          'Médecine, économie, droit et technique',
          'Traitement par des locuteurs natifs',
          'Terminologie spécialisée cohérente',
        ],
      },
    ],
    noteTitle: 'Votre langue ne figure pas dans la liste ?',
    noteText:
      'Demandez-nous. Notre couverture linguistique est particulièrement étendue et nous vous conseillons volontiers personnellement.',
  },

  expertise: {
    metaTitle: 'Domaines de spécialité — médecine, droit, asile, économie et technique',
    metaDescription:
      'Les domaines de spécialité du bureau Translation Admy : médecine et santé, droit et justice, asile et migration, administration publique, économie et technique.',
    h1: 'Domaines de spécialité',
    lead:
      'Des traductions professionnelles du plus haut niveau — qu’il s’agisse de médecine, d’économie, de droit ou de technique, et quelle que soit la combinaison linguistique dont vous avez besoin.',
    items: [
      {
        title: 'Médecine et santé',
        text: 'La compréhension entre soignants et patients, là où un malentendu peut avoir de lourdes conséquences.',
        bullets: [
          'Anamnèse, information et entretiens de conseil',
          'Visites médicales et hospitalières',
          'Résultats d’examens et dossiers médicaux',
        ],
      },
      {
        title: 'Droit et justice',
        text: 'Accompagnement linguistique en contexte juridique, où l’exactitude et la neutralité influent sur le déroulement de la procédure.',
        bullets: [
          'Audiences et auditions',
          'Contrats et mémoires',
          'Actes destinés aux tribunaux',
        ],
      },
      {
        title: 'Asile et migration',
        text: 'La communication dans les procédures et les structures où comptent les langues et dialectes rares — ainsi qu’une conduite d’entretien calme et factuelle.',
        bullets: [
          'Auditions et conseil en procédure',
          'Centres d’accueil et d’hébergement',
          'Langues et dialectes rares',
        ],
      },
      {
        title: 'Administration publique',
        text: 'Un appui partout où l’action administrative rencontre des personnes ne maîtrisant pas suffisamment l’allemand.',
        bullets: [
          'Rendez-vous auprès des services administratifs',
          'Entretiens de conseil et de demande',
          'Décisions et courriers officiels',
        ],
      },
      {
        title: 'Économie et industrie',
        text: 'Accompagnement linguistique du quotidien professionnel — de la négociation à la documentation multilingue.',
        bullets: [
          'Négociations et rendez-vous d’affaires',
          'Salons et visites d’entreprise',
          'Correspondance et documents commerciaux',
        ],
      },
      {
        title: 'Technique',
        text: 'Restitution de contenus techniques avec une terminologie cohérente et le sens du contexte spécialisé.',
        bullets: [
          'Documentation technique',
          'Formations et instructions',
          'Documents de sécurité et d’exploitation',
        ],
      },
    ],
    noteTitle: 'Une affectation adaptée au domaine',
    noteText:
      'Il nous importe que la langue et le domaine de spécialité concordent. Indiquez-nous le motif de votre rendez-vous : nous l’affectons en conséquence.',
  },

  authorities: {
    metaTitle: 'Autorités et institutions — interprétation pour le secteur public',
    metaDescription:
      'Prestations d’interprétation et de traduction pour les tribunaux, la police, la police fédérale, le BAMF, les services des étrangers, les centres d’accueil, les communes, les ONG ainsi que les institutions européennes telles que l’EUAA et Frontex.',
    h1: 'Autorités et institutions',
    lead:
      'Les donneurs d’ordre publics ont besoin d’un accompagnement linguistique fiable, neutre et disponible à court terme. C’est précisément l’orientation de notre bureau.',
    audienceTitle: 'À qui s’adresse notre offre',
    audienceLead:
      'Nous nous tenons à la disposition des entités suivantes pour des prestations d’interprétation et de traduction.',
    audienceDisclaimer:
      'Les entités et organisations mentionnées ici décrivent les publics visés par notre offre. Elles ne constituent expressément pas des références et aucune collaboration ni relation contractuelle n’existe, sauf convention distincte.',
    audience: [
      {
        title: 'Tribunaux',
        text: 'Accompagnement linguistique lors d’audiences, d’auditions et de rendez-vous, ainsi que traduction de pièces.',
      },
      {
        title: 'Police et police fédérale',
        text: 'Compréhension lors des constatations et des auditions — y compris en dehors des heures de bureau habituelles.',
      },
      {
        title: 'Office fédéral des migrations et des réfugiés (BAMF)',
        text: 'Accompagnement linguistique dans le cadre des procédures et du conseil, y compris pour les langues et dialectes rares.',
      },
      {
        title: 'Services des étrangers',
        text: 'Appui lors des démarches, des entretiens de demande et de la traduction de documents officiels.',
      },
      {
        title: 'Centres d’accueil',
        text: 'Compréhension au quotidien dans les structures de premier accueil et d’hébergement.',
      },
      {
        title: 'Communes et arrondissements',
        text: 'Accompagnement linguistique pour les services spécialisés, sociaux, de la jeunesse et de l’ordre public.',
      },
      {
        title: 'Agences pour l’emploi et services sociaux',
        text: 'Accompagnement des entretiens de conseil, de demande et d’insertion.',
      },
      {
        title: 'Écoles et établissements de formation',
        text: 'Entretiens avec les parents, rendez-vous de conseil et documents scolaires.',
      },
      {
        title: 'EUAA',
        text: 'Nous nous tenons à la disposition de l’Agence de l’Union européenne pour l’asile pour un accompagnement linguistique dans les langues que nous couvrons.',
      },
      {
        title: 'Frontex',
        text: 'Pour les opérations de l’Agence européenne de garde-frontières et de garde-côtes, nous proposons un accompagnement linguistique dans des langues européennes et extra-européennes.',
      },
      {
        title: 'ONG et organisations internationales',
        text: 'Appui linguistique pour les structures de conseil, les organisations humanitaires et les institutions internationales.',
      },
    ],
    principlesTitle: 'Les principes de notre travail',
    principlesLead:
      'Lors d’entretiens sensibles, c’est la posture de l’interprète qui détermine le résultat.',
    principles: [
      {
        title: 'Restitution fidèle',
        text: 'Il nous importe beaucoup que l’interprétation et la traduction restituent toujours exactement ce qui a réellement été dit.',
      },
      {
        title: 'Neutralité',
        text: 'Nous interprétons de manière impartiale, sans porter notre propre appréciation sur les propos tenus.',
      },
      {
        title: 'Confidentialité',
        text: 'Tous les contenus sont traités de manière confidentielle, pendant et après l’intervention.',
      },
      {
        title: 'Fiabilité',
        text: 'Les rendez-vous confirmés sont honorés. Vous êtes informé rapidement des disponibilités.',
      },
    ],
    procurementTitle: 'Collaboration et passation de commande',
    procurementText:
      'Nous nous adaptons aux procédures de votre institution et intervenons aussi bien pour des rendez-vous ponctuels que dans le cadre d’une collaboration durable.',
    procurementBullets: [
      'Commandes ponctuelles et interventions à court terme',
      'Rendez-vous récurrents sur accord',
      'Accords-cadres sur demande',
      'Facturation selon les exigences de votre service',
      'Un interlocuteur pour toute question pendant l’intervention',
    ],
    tendersTitle: 'Appels d’offres et marchés publics en Europe',
    tendersText:
      'Nous participons aux appels d’offres et aux procédures de passation de marchés publics partout en Europe. Si vous lancez un appel d’offres pour des services linguistiques, contactez-nous : nous réunissons les pièces nécessaires au dépôt d’une offre.',
  },

  business: {
    metaTitle: 'Pour les entreprises — interprétation et traductions spécialisées',
    metaDescription:
      'Prestations d’interprétation et de traduction pour les entreprises : négociations, salons, visites de site, formations, contrats et documentation technique dans de nombreuses langues.',
    h1: 'Pour les entreprises',
    lead:
      'Négociation, salon ou documentation technique : nous veillons à ce que votre message soit reçu dans l’autre langue exactement comme vous l’entendiez.',
    items: [
      {
        title: 'Négociations',
        text: 'Accompagnement linguistique lors de rendez-vous d’affaires, de discussions contractuelles et d’échanges avec des partenaires internationaux.',
      },
      {
        title: 'Salons et événements',
        text: 'Appui sur le stand et lors des programmes d’accompagnement — sur plusieurs jours si nécessaire.',
      },
      {
        title: 'Visites d’entreprise',
        text: 'Accompagnement de groupes de visiteurs à travers la production, le laboratoire ou l’administration.',
      },
      {
        title: 'Formations et instructions',
        text: 'Transmission claire des procédures, des consignes de sécurité et des contenus techniques.',
      },
      {
        title: 'Contrats et documents',
        text: 'Traduction écrite de documents commerciaux et juridiques, certifiée sur demande.',
      },
      {
        title: 'Documentation technique',
        text: 'Restitution de contenus techniques avec une terminologie cohérente et traçable.',
      },
    ],
    processTitle: 'Du premier contact à l’intervention',
    processLead: 'Un déroulement clair qui vous épargne des allers-retours.',
    process: [
      {
        title: 'Cerner le besoin',
        text: 'Langue, date, lieu, durée et contexte technique de votre événement.',
      },
      {
        title: 'Recevoir une proposition',
        text: 'Vous obtenez une réponse concrète sur les disponibilités et les conditions.',
      },
      {
        title: 'Préparer l’intervention',
        text: 'Sur demande, vous transmettez des documents en amont afin d’assurer la justesse terminologique.',
      },
      {
        title: 'Réalisation',
        text: 'L’accompagnement linguistique a lieu à l’heure sur place, ou sous forme de traduction écrite.',
      },
    ],
    ctaTitle: 'Une proposition pour votre entreprise',
    ctaText:
      'Décrivez-nous brièvement votre besoin — nous revenons vers vous avec une évaluation concrète des disponibilités et des conditions.',
  },

  coverage: {
    metaTitle: 'Zones d’intervention — partout en Europe',
    metaDescription:
      'Translation Admy met à disposition des interprètes et des traducteurs partout en Europe — sur place, par téléphone ou par visioconférence, y compris pour les procédures d’asile et aux frontières.',
    h1: 'Zones d’intervention',
    lead:
      'Notre bureau est établi à Bingen am Rhein. Nos interprètes interviennent partout en Europe.',
    baseTitle: 'Implantation à Bingen am Rhein',
    baseText:
      'Depuis Bingen am Rhein, nous coordonnons des interventions partout en Europe. Pour les rendez-vous à très court terme, nous nous appuyons sur un réseau qui dépasse les frontières nationales.',
    europeTitle: 'Des interventions partout en Europe',
    europeText:
      'Translation Admy met à disposition des interprètes et des traducteurs pour des interventions partout en Europe. Selon la mission, nous accompagnons les administrations, les établissements publics, les entreprises et les organisations internationales sur place, par téléphone ou par visioconférence.',
    capabilities: [
      'Interventions à l’échelle européenne',
      'Interprétation sur place',
      'Interprétation par téléphone et par visioconférence',
      'Missions à court terme et planifiées de longue date',
      'Projets transfrontaliers dans plusieurs pays',
      'Accompagnement des procédures d’asile, de migration et d’accueil',
      'Constitution d’un réseau d’interprètes à l’échelle européenne',
    ],

    bordersTitle: 'Interprétation pour les procédures européennes d’asile et aux frontières',
    bordersText:
      'Translation Admy constitue un réseau européen d’interprètes et de traducteurs qualifiés. Nos intervenants linguistiques sont disponibles pour des demandes et des missions éventuelles dans l’environnement de Frontex, de l’Agence de l’Union européenne pour l’asile (EUAA), des autorités nationales d’asile, des centres d’accueil ainsi que des structures situées aux frontières extérieures européennes.',
    bordersNote:
      'Nous facilitons la compréhension linguistique lors des procédures d’asile, de migration, d’enregistrement, d’accueil et de retour. Selon la langue, la disponibilité, la qualification et le lieu, les interventions peuvent être organisées sur place, par téléphone ou par visioconférence.',

    countriesTitle: 'Zones d’intervention et de placement en Europe',
    countriesNote:
      'La disponibilité effective dépend de la langue, de la qualification, du lieu et de la date.',

    nationwideTitle: 'Partout en Europe',
    nationwideText:
      'Nous collaborons avec des interprètes dans de nombreux pays européens. Indiquez-nous le lieu et la date : nous vérifions les disponibilités sur place.',
    internationalTitle: 'Interventions transfrontalières',
    internationalText:
      'Pour les interventions dans plusieurs pays ou en dehors de nos zones habituelles, contactez-nous. Nous examinons au cas par cas si et comment nous pouvons couvrir votre besoin.',
    remoteTitle: 'Rendez-vous par téléphone et visioconférence',
    remoteText:
      'Lorsqu’un rendez-vous sur place n’est pas possible ou pas nécessaire, l’accompagnement linguistique peut aussi se faire par téléphone ou par visioconférence, sur accord.',
  },

  languages: {
    metaTitle: 'Langues — notre offre linguistique complète',
    metaDescription:
      'Nous interprétons et traduisons dans de nombreuses langues et dialectes : langues européennes, asiatiques, nord-africaines et africaines — y compris des variétés rares.',
    h1: 'Langues et dialectes',
    lead:
      'Notre couverture linguistique est particulièrement étendue et nous pouvons vous accompagner dans de nombreuses langues. Nous interprétons et traduisons pour vous dans les langues suivantes.',
    searchLabel: 'Rechercher une langue',
    searchPlaceholder: 'p. ex. Arabisch, ትግርኛ, Sorani …',
    clearSearch: 'Effacer la recherche',
    resultsOne: '1 langue trouvée',
    resultsMany: '{count} langues trouvées',
    noResults: 'Aucune langue correspondante trouvée.',
    noResultsHint: 'Demandez-nous malgré tout — notre liste n’est pas exhaustive.',
    groupTitles: {
      asiatisch: 'Langues d’Asie et du Proche-Orient',
      europaeisch: 'Langues européennes',
      nordafrikanisch: 'Langues nord-africaines',
      afrikanisch: 'Langues et dialectes africains',
    },
    groupIntros: {
      asiatisch:
        'De l’arabe aux variétés kurdes jusqu’au vietnamien — un point fort de notre bureau.',
      europaeisch:
        'Toutes les langues officielles courantes de l’UE ainsi que les langues d’Europe orientale et du Sud-Est, pour les administrations, tribunaux et entreprises.',
      nordafrikanisch: 'L’arabe maghrébin et les langues berbères d’Afrique du Nord.',
      afrikanisch:
        'Plus de 50 langues et dialectes d’Afrique de l’Ouest, de l’Est et centrale — y compris des variétés rares.',
    },
    missingTitle: 'Si la langue souhaitée ne figure pas dans la liste, demandez-nous.',
    missingText:
      'Nous vous conseillons volontiers personnellement. Nous nous réjouissons de votre demande.',
  },

  about: {
    metaTitle: 'À propos — un bureau d’interprétation fort de plus de 10 ans d’expérience',
    metaDescription:
      'Translation Admy est une équipe expérimentée d’interprètes et de traducteurs professionnels forte de plus de 10 ans d’expérience dans le secteur.',
    h1: 'À propos',
    lead:
      'Nous sommes une équipe expérimentée d’interprètes et de traducteurs professionnels, forte de plus de 10 ans d’expérience dans le secteur.',
    body: [
      'Une exigence élevée nous anime aujourd’hui comme demain : nous ne fournissons que les meilleures prestations et solutions à nos clients, et toujours à un tarif avantageux. Notre offre se règle exclusivement sur les besoins et attentes spécifiques de nos clients.',
      'C’est précisément pourquoi notre bureau ne fait appel qu’à des interprètes et traducteurs qualifiés de langue maternelle. Nos collaborateurs disposent d’une expérience solide en traduction et en interprétation.',
      'Le résultat : des traductions professionnelles du plus haut niveau — qu’il s’agisse de médecine, d’économie, de droit ou de technique, et quelle que soit la combinaison linguistique dont vous avez besoin.',
    ],
    quote:
      'Il nous importe beaucoup que l’interprétation et la traduction restituent toujours exactement ce qui a réellement été dit.',
    valuesTitle: 'Ce qui nous caractérise',
    values: [
      {
        title: 'Principe de la langue maternelle',
        text: 'Notre bureau ne fait appel qu’à des interprètes et traducteurs qualifiés de langue maternelle.',
      },
      {
        title: 'Expérience',
        text: 'Plus de 10 ans d’expérience dans le secteur — et des collaborateurs aguerris à l’interprétation et à la traduction.',
      },
      {
        title: 'À l’écoute du besoin',
        text: 'Notre offre se règle exclusivement sur les besoins et attentes spécifiques de nos clients.',
      },
      {
        title: 'Conditions équitables',
        text: 'Les meilleures prestations et solutions pour nos clients — et toujours à un tarif avantageux.',
      },
    ],
  },

  careers: {
    metaTitle: 'Carrières — interprètes recherchés pour toutes langues et dialectes',
    metaDescription:
      'Nous recherchons, pour renforcer notre équipe partout en Europe, des interprètes pour toutes les langues et tous les dialectes. Postulez dès maintenant chez Translation Admy.',
    h1: 'Carrières',
    lead:
      'Pour renforcer notre équipe partout en Europe, nous recherchons des interprètes pour toutes les langues et tous les dialectes.',
    requirementsTitle: 'Conditions requises',
    requirements: [
      'Attestation de niveau C1 ou supérieur dans vos langues de travail — ou un diplôme équivalent reconnu dans votre pays de résidence',
      'Aucune inscription au casier judiciaire',
      'Autorisation de travail requise',
    ],
    offerTitle: 'Ce qui vous attend',
    offer: [
      'Des interventions à l’échelle européenne — y compris dans votre région',
      'Des missions variées pour des administrations, tribunaux, entreprises et particuliers',
      'Une équipe attachée à un accompagnement linguistique exact et neutre',
    ],
    applyTitle: 'Comment postuler',
    applyText:
      'Envoyez-nous votre candidature par e-mail en indiquant vos langues et dialectes ainsi que vos justificatifs. Vous pouvez également nous contacter par téléphone.',
    closing: 'Nous nous réjouissons de recevoir votre candidature.',
    networkTitle: 'Pourquoi collaborer avec Translation Admy ?',
    networkLead:
      'Nous constituons un réseau d’interprètes et de traducteurs dans toute l’Europe. Voici comment nous travaillons ensemble.',
    benefits: [
      {
        title: 'Missions flexibles',
        text: 'Vous décidez des demandes que vous acceptez. Nous adaptons les rendez-vous à vos disponibilités.',
      },
      {
        title: 'Projets à l’échelle européenne',
        text: 'Les demandes nous parviennent de toute l’Europe : le besoin d’interprétation croît au-delà des frontières.',
      },
      {
        title: 'Collaboration équitable',
        text: 'Des accords clairs sur l’ampleur, le lieu et les conditions — avant la mission, et non après.',
      },
      {
        title: 'Coopération durable',
        text: 'Nous ne cherchons pas des rendez-vous isolés, mais une collaboration fiable sur plusieurs années.',
      },
      {
        title: 'Organisation professionnelle',
        text: 'Nous clarifions à l’avance le motif, le domaine et le cadre, afin que vous arriviez préparé.',
      },
      {
        title: 'Communication simple',
        text: 'Des circuits courts, des interlocuteurs fixes et des réponses rapides — y compris pendant une mission.',
      },
      {
        title: 'Protection des données et confidentialité',
        text: 'Vos documents sont traités de manière confidentielle et servent uniquement à l’examen de votre candidature.',
      },
    ],
    ctaTitle: 'Rejoignez notre réseau',
    ctaText:
      'Envoyez-nous votre candidature avec vos langues, vos domaines de spécialité et vos justificatifs. Nous reviendrons vers vous.',
  },

  apply: {
    metaTitle: 'Postuler comme interprète ou traducteur',
    metaDescription:
      'Postulez comme interprète ou traducteur auprès de Translation Admy. Candidature en ligne avec langues, domaines de spécialité, CV et justificatifs.',
    h1: 'Postuler comme interprète ou traducteur',
    lead:
      'Remplissez le formulaire et téléversez votre CV. Nous examinons votre dossier et revenons vers vous. Aucune inscription n’est nécessaire.',

    sectionPerson: 'Informations personnelles',
    sectionLanguages: 'Langues',
    sectionProfile: 'Profil d’intervention',
    sectionDocuments: 'Documents',

    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Numéro de téléphone',
    city: 'Lieu de résidence',
    country: 'Pays',
    nationality: 'Nationalité',
    spokenLanguages: 'Langues parlées',
    spokenLanguagesHint: 'Toutes les langues et tous les dialectes que vous parlez, séparés par des virgules.',
    workingLanguages: 'Langues de travail',
    workingLanguagesHint: 'Vos combinaisons, p. ex. arabe → allemand, allemand → arabe.',

    fieldsLabel: 'Domaines de spécialité',
    fieldsHint: 'Plusieurs choix possibles.',
    fieldLabels: {
      asylum: 'Asile',
      authorities: 'Administrations',
      police: 'Police',
      courts: 'Tribunaux',
      medical: 'Médecine',
      social: 'Social',
      education: 'Éducation',
      business: 'Économie',
      technical: 'Technique',
    },

    serviceModesLabel: 'Type d’activité',
    serviceModeLabels: {
      interpreting: 'Interprétation',
      translation: 'Traduction',
    },

    deliveryModesLabel: 'Forme d’intervention',
    deliveryModeLabels: {
      onsite: 'Sur place',
      phone: 'Par téléphone',
      video: 'Interprétation par vidéo',
    },

    travelLabel: 'Disponibilité pour les déplacements',
    travelLabels: {
      local: 'Lieu de résidence et environs',
      regional: 'Régional',
      national: 'Tout le pays de résidence',
      european: 'Toute l’Europe',
    },

    availabilityLabel: 'Disponibilité',
    availabilityLabels: {
      fulltime: 'Temps plein',
      parttime: 'Temps partiel',
      occasional: 'Occasionnelle',
      'on-call': 'Sur appel à court terme',
    },

    experienceLabel: 'Expérience professionnelle',
    experienceLabels: {
      lt1: 'Moins d’un an',
      '1-3': '1 à 3 ans',
      '3-5': '3 à 5 ans',
      '5-10': '5 à 10 ans',
      gt10: 'Plus de 10 ans',
    },

    messageLabel: 'Votre message',
    messageHint: 'Que devrions-nous savoir d’autre à votre sujet ?',

    cvLabel: 'CV',
    cvHint: 'PDF, JPG ou PNG, 8 Mo maximum.',
    certificatesLabel: 'Certificats et justificatifs',
    certificatesHint: 'Facultatif, jusqu’à 5 fichiers, 8 Mo maximum chacun.',

    consent:
      'J’ai lu la politique de confidentialité et j’accepte que mes informations et documents soient enregistrés et traités aux fins de l’examen de ma candidature. Je sais que je peux retirer mon consentement à tout moment.',
    optional: 'facultatif',
    requiredHint: '* Indique les champs obligatoires',
    submit: 'Envoyer la candidature',
    sending: 'Envoi de la candidature …',

    successTitle: 'Merci pour votre candidature !',
    successText:
      'Nous avons bien reçu votre dossier et reviendrons vers vous. Un accusé de réception est en route vers votre adresse e-mail.',
    referenceLabel: 'Votre numéro de dossier',

    errorTitle: 'Votre candidature n’a pas pu être transmise',
    errorText:
      'Veuillez vérifier vos informations et réessayer. Vous pouvez également nous envoyer votre dossier directement par e-mail.',
    errorNotDelivered:
      'L’envoi d’e-mails n’est pas encore configuré sur ce serveur. Envoyez-nous pour l’instant votre dossier directement par e-mail.',

    validation: {
      required: 'Veuillez remplir ce champ.',
      email: 'Veuillez indiquer une adresse e-mail valide.',
      fileType: 'Les fichiers PDF, JPG et PNG sont acceptés.',
      tooLarge: 'Le fichier est trop volumineux. La limite est de 8 Mo.',
      tooMany: 'Veuillez téléverser 5 certificats au maximum.',
      country: 'Veuillez sélectionner un pays.',
      confirmations: 'Veuillez confirmer tous les points.',
    },
    uploadLabels: {
      cv: 'CV',
      languageCertificate: 'Certificat de langue',
      schoolCertificate: 'Diplôme scolaire',
      vocationalCertificate: 'Diplôme professionnel',
      degree: 'Diplôme universitaire',
      residencePermit: 'Titre de séjour',
      workPermit: 'Justificatif d’autorisation de travail',
      other: 'Autres certificats',
    },
    uploadHint: 'PDF, JPG ou PNG — 8 Mo maximum par fichier.',
    criminalRecordNotice:
      'L’extrait de casier judiciaire ou document comparable n’est volontairement pas transmis avec la candidature. Nous ne le demandons que lorsqu’il est nécessaire pour une mission précise.',
    uploadBackendNotice:
      'Remarque : la transmission sécurisée des documents reste à configurer sur ce serveur. D’ici là, nous vous signalons une erreur plutôt que de simuler un envoi réussi.',
    confirmationsTitle: 'Confirmations',
    confirmations: [
      'J’ai pris connaissance des conditions requises pour le pays d’intervention sélectionné.',
      'Je dispose de l’autorisation de travail nécessaire ou je fournirai le justificatif correspondant.',
      'Mes informations et documents sont complets et véridiques.',
      'Je sais que chaque candidature fait l’objet d’un examen individuel et qu’il n’existe ni admission automatique ni garantie de mission.',
    ],
    privacyLinkText: 'Lire la politique de confidentialité',
  },

  requirements: {
    metaTitle: 'Conditions requises pour les interprètes et traducteurs',
    metaDescription:
      'Conditions linguistiques et scolaires pour les missions d’interprétation et de traduction — détaillées par pays d’intervention, avec renvoi aux autorités compétentes.',
    h1: 'Conditions requises par pays d’intervention',
    lead:
      'Les justificatifs pertinents dépendent du pays d’intervention et du donneur d’ordre. L’aperçu ci-dessous indique les dénominations usuelles sur place. La reconnaissance d’un diplôme relève exclusivement des autorités compétentes.',
    countryLabel: 'Pays de résidence ou pays d’intervention envisagé',
    countryPlaceholder: 'Veuillez sélectionner',
    countryHint: 'Les conditions diffèrent selon les pays.',
    panelTitle: 'Conditions requises pour des missions en {country}',
    separationNotice:
      'Important : un diplôme scolaire, un titre d’accès à l’enseignement supérieur ou un diplôme universitaire ne constitue pas automatiquement une preuve de compétences linguistiques de niveau C1. Les qualifications linguistiques et scolaires sont examinées séparément.',
    languageTitle: 'A. Qualification linguistique',
    languageLead: 'Au moins l’un des justificatifs suivants :',
    languageItems: [
      'Un certificat de langue reconnu de niveau C1 ou C2 selon le Cadre européen commun de référence',
      'Un justificatif linguistique équivalent reconnu dans le pays concerné',
      'Un diplôme obtenu dans la langue de travail concernée, s’il peut être accepté comme preuve linguistique',
      'Tout autre justificatif vérifiable attestant d’un niveau linguistique au moins C1',
    ],
    educationTitle: 'B. Qualification scolaire ou professionnelle',
    educationLead:
      'Selon la mission et le donneur d’ordre, au moins un justificatif adapté, par exemple :',
    educationItems: [
      'Titre d’accès à l’enseignement supérieur',
      'Formation professionnelle achevée',
      'Diplôme d’une année préparatoire ou équivalent',
      'Diplôme universitaire',
      'Formation d’interprète ou de traducteur',
      'Diplôme étranger comparable',
    ],
    certLabel: 'Certificats de langue courants dans le pays',
    entranceLabel: 'Titre d’accès à l’enseignement supérieur',
    vocationalLabel: 'Diplôme professionnel',
    higherLabel: 'Diplôme universitaire',
    criminalLabel: 'Extrait de casier judiciaire',
    legalTitle: 'Conditions légales',
    legalItems: [
      'Autorisation de travailler dans le pays d’intervention',
      'Titre de séjour valable, si nécessaire',
      'Extrait de casier judiciaire, si la mission concrète l’exige',
    ],
    clientTitle: 'Exigences supplémentaires du donneur d’ordre',
    clientText:
      'Les administrations, tribunaux et organisations internationales posent parfois leurs propres exigences : habilitation de sécurité, engagement de confidentialité ou connaissances spécialisées. Nous vous en informons avant une mission.',
    individualNotice:
      'Justificatif comparable — examen individuel nécessaire. Cet aperçu ne remplace pas une décision officielle de reconnaissance.',
    reviewPending:
      'L’examen professionnel des informations relatives à ce pays reste à effectuer. Les dénominations indiquées servent uniquement d’orientation.',
    sourcesLabel: 'Sources d’information officielles',
    fullRequirementsLink: 'Voir toutes les conditions pour ce pays',
    backToApply: 'Retour à la candidature',
  },

  contact: {
    metaTitle: 'Contact — demande auprès de Translation Admy',
    metaDescription:
      'Contactez le bureau d’interprétation Translation Admy à Bingen am Rhein. Téléphone, e-mail et formulaire de demande pour des prestations d’interprétation et de traduction.',
    h1: 'Contact',
    lead:
      'Vous avez un rendez-vous nécessitant un accompagnement linguistique ? Décrivez-nous brièvement votre besoin — nous revenons vers vous dans les meilleurs délais.',
    detailsTitle: 'Coordonnées',
    formTitle: 'Envoyer une demande',
    formLead:
      'Plus vous précisez la langue, la date et le motif, plus vite nous pouvons vous donner une réponse ferme.',
    fieldName: 'Nom',
    fieldEmail: 'E-mail',
    fieldOrg: 'Administration / entreprise',
    fieldOrgHint: 'facultatif',
    fieldSubject: 'Objet',
    fieldMessage: 'Message',
    subjectOptions: [
      'Mission d’interprétation',
      'Traduction certifiée',
      'Traduction spécialisée',
      'Demande d’une administration',
      'Demande d’une entreprise',
      'Candidature comme interprète',
      'Autre',
    ],
    consent:
      'J’accepte que ces données soient enregistrées et traitées aux fins de la prise de contact. Je sais que je peux retirer mon consentement à tout moment.',
    requiredHint: '* Indique les champs obligatoires',
    submit: 'Envoyer la demande',
    sending: 'Envoi en cours …',
    success: 'Merci. Nous reviendrons vers vous dans les meilleurs délais.',
    error: 'Une erreur est survenue lors de l’envoi de votre message. Veuillez réessayer.',
    mailtoNote:
      'À l’envoi, votre logiciel de messagerie s’ouvre avec un message préparé à notre intention. Vous pouvez également nous joindre directement par téléphone.',
    validationName: 'Veuillez indiquer votre nom.',
    validationEmail: 'Veuillez indiquer une adresse e-mail valide.',
    validationMessage: 'Veuillez décrire brièvement votre demande.',
    validationConsent: 'Veuillez consentir au traitement de vos données.',
  },

  imprint: {
    metaTitle: 'Mentions légales',
    metaDescription: 'Identification de l’éditeur du bureau d’interprétation Translation Admy.',
    h1: 'Mentions légales',
    providerTitle: 'Informations conformément à l’article 5 DDG',
    representedBy: 'Représenté par',
    taxNumberLabel: 'Numéro fiscal',
    vatIdLabel: 'Numéro d’identification à la TVA conformément au § 27a UStG',
    contactTitle: 'Contact',
    responsibleTitle: 'Responsable de la rédaction',
    responsibleText: 'Responsable du contenu de ce site :',
    disputeTitle: 'Règlement des litiges',
    disputeText:
      'Nous ne sommes ni disposés ni tenus de participer à une procédure de règlement des litiges devant un organe de conciliation pour les consommateurs.',
    liabilityContentTitle: 'Responsabilité quant au contenu',
    liabilityContentText:
      'Les contenus de ces pages ont été élaborés avec le plus grand soin. Nous ne pouvons toutefois garantir leur exactitude, leur exhaustivité ni leur actualité. En tant que prestataire de services, nous sommes responsables de nos propres contenus sur ces pages conformément au droit commun, sans être tenus de surveiller les informations de tiers transmises ou stockées.',
    liabilityLinksTitle: 'Responsabilité quant aux liens',
    liabilityLinksText:
      'Notre site peut contenir des liens vers des sites externes de tiers sur le contenu desquels nous n’avons aucune influence. Le fournisseur ou l’exploitant respectif est toujours responsable du contenu des pages liées. Si nous avons connaissance d’une violation du droit, nous supprimons immédiatement ces liens.',
    copyrightTitle: 'Droit d’auteur',
    copyrightText:
      'Les contenus et œuvres créés par l’exploitant du site sur ces pages sont soumis au droit d’auteur allemand. Les contributions de tiers sont signalées comme telles. La reproduction, la modification et la diffusion au-delà des limites du droit d’auteur nécessitent un accord écrit.',
  },

  privacy: {
    metaTitle: 'Protection des données',
    metaDescription:
      'Informations sur le traitement des données à caractère personnel sur le site du bureau d’interprétation Translation Admy.',
    h1: 'Protection des données',
    lead:
      'Nous prenons la protection de vos données personnelles au sérieux. Vous trouverez ci-dessous les informations relatives aux données traitées lors de la visite de ce site.',
    sections: [
      {
        title: 'Responsable du traitement',
        body: [
          'Le responsable du traitement des données sur ce site est l’éditeur mentionné dans les mentions légales. Vous y trouverez ses coordonnées, également disponibles sur la page de contact.',
        ],
      },
      {
        title: 'Données d’accès et fichiers journaux du serveur',
        body: [
          'Lors de la consultation de ce site, l’hébergeur enregistre automatiquement les informations transmises par votre navigateur. Il s’agit en règle générale du type et de la version du navigateur, du système d’exploitation utilisé, de la page demandée, de la date et de l’heure de l’accès ainsi que de l’adresse IP.',
          'Ces données sont techniquement nécessaires pour fournir le site et garantir sa stabilité et sa sécurité. La base juridique est l’art. 6, § 1, point f) du RGPD. Ces données ne sont pas recoupées avec d’autres sources.',
        ],
      },
      {
        title: 'Prise de contact',
        body: [
          'Lorsque vous nous contactez par formulaire, par e-mail ou par téléphone, nous traitons les informations que vous communiquez exclusivement pour traiter votre demande et pour d’éventuelles questions complémentaires.',
          'La base juridique est l’art. 6, § 1, point b) du RGPD lorsque votre demande vise la conclusion ou l’exécution d’un contrat, et par ailleurs l’art. 6, § 1, points a) et f) du RGPD. Vous pouvez retirer votre consentement à tout moment pour l’avenir.',
          'Nous supprimons les données dès que votre demande a été traitée définitivement et qu’aucune obligation légale de conservation ne s’y oppose.',
        ],
      },
      {
        title: 'Formulaire de contact',
        body: [
          'Le formulaire de demande de ce site nous transmet vos informations afin que nous puissions répondre à votre demande. Les champs obligatoires sont signalés comme tels. La communication d’autres données est facultative.',
        ],
      },
      {
        title: 'Candidatures',
        body: [
          'Si vous nous adressez une candidature via le formulaire dédié, nous traitons les informations et documents transmis exclusivement pour l’examen de votre candidature. La base juridique est l’art. 6, § 1, point b) du RGPD ainsi que, pour le consentement donné, l’art. 6, § 1, point a) du RGPD.',
          'Les documents sont transmis par e-mail à notre bureau et traités de manière confidentielle. Vous pouvez en demander la suppression à tout moment.',
          'Nous ne conservons vos documents que le temps nécessaire à l’examen de votre candidature et à une éventuelle collaboration. Nous les supprimons ensuite, sauf obligation légale de conservation.',
        ],
      },
      {
        title: 'Cookies et traçage',
        body: [
          'Ce site n’utilise aucun cookie à des fins d’analyse, de publicité ou de traçage. Aucun profil d’utilisateur n’est établi et aucun service d’analyse tiers n’est intégré.',
          'Votre version linguistique préférée est enregistrée exclusivement en local dans votre navigateur (localStorage), afin que vous arriviez directement dans votre langue lors de votre prochaine visite. Cette information ne quitte pas votre appareil et ne nous est pas transmise. Vous pouvez la supprimer à tout moment via les paramètres de votre navigateur.',
        ],
      },
      {
        title: 'Polices de caractères et contenus externes',
        body: [
          'Les polices de caractères et tous les autres éléments graphiques sont fournis directement depuis notre serveur. Aucune connexion à des prestataires externes n’est établie lors du chargement de la page.',
        ],
      },
      {
        title: 'Vos droits',
        body: [
          'Vous disposez d’un droit d’accès aux données vous concernant (art. 15 RGPD), de rectification (art. 16 RGPD), d’effacement (art. 17 RGPD), de limitation du traitement (art. 18 RGPD), de portabilité des données (art. 20 RGPD) ainsi que d’un droit d’opposition (art. 21 RGPD).',
          'Un simple message aux coordonnées indiquées dans les mentions légales suffit pour exercer vos droits.',
        ],
      },
      {
        title: 'Droit de réclamation auprès d’une autorité de contrôle',
        body: [
          'Vous avez le droit d’introduire une réclamation auprès d’une autorité de contrôle de la protection des données concernant le traitement de vos données à caractère personnel. Est notamment compétent le délégué régional à la protection des données et à la liberté d’information de Rhénanie-Palatinat.',
        ],
      },
      {
        title: 'Chiffrement',
        body: [
          'Pour des raisons de sécurité, ce site utilise un chiffrement TLS. Une connexion chiffrée se reconnaît au symbole du cadenas dans la barre d’adresse de votre navigateur.',
        ],
      },
      {
        title: 'Actualisation',
        body: [
          'Nous adaptons la présente politique de confidentialité dès que des modifications du site ou des exigences légales le rendent nécessaire.',
        ],
      },
    ],
  },

  notFound: {
    metaTitle: 'Page introuvable',
    metaDescription: 'La page demandée n’existe pas.',
    h1: 'Page introuvable',
    text: 'La page que vous avez demandée n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },

  footer: {
    tagline:
      'Interprétation et traduction dans de nombreuses langues et dialectes — pour les administrations, tribunaux, entreprises et particuliers.',
    servicesHeading: 'Prestations',
    companyHeading: 'Entreprise',
    contactHeading: 'Contact',
    legalHeading: 'Informations légales',
    copyright: 'Tous droits réservés.',
    languageHeading: 'Langue',
  },
};

export default fr;
