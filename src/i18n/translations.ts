export type Language = 'en' | 'pt' | 'es';

export interface TranslationDictionary {
  langName: string;
  langCode: Language;
  flag: string;
  nav: {
    home: string;
    packages: string;
    destinations: string;
    about: string;
    contact: string;
    explorePackages: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    discoverBtn: string;
    destinationsCount: string;
    destinationsLabel: string;
    packagesCount: string;
    packagesLabel: string;
    standardLabel: string;
    standardValue: string;
    specializationLabel: string;
    specializationValue: string;
  };
  intro: {
    slogan: string;
    text: string;
  };
  packagesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    bookBtn: string;
    detailsBtn: string;
    perPerson: string;
    priceDisclaimer: string;
    includedDestinations: string;
    highlightsTitle: string;
    individualDestPrice: string;
    stopPricePrefix: string;
    hotelStayLabel: string;
    hotelIncludedNote: string;
    topChoiceBadge: string;
  };
  packages: {
    cities: {
      number: string;
      title: string;
      price: string;
      priceNumeric: number;
      subtitle: string;
      shortDesc: string;
      fullDesc: string;
      intro: string;
      highlights: string[];
    };
    nature: {
      number: string;
      title: string;
      price: string;
      priceNumeric: number;
      subtitle: string;
      shortDesc: string;
      fullDesc: string;
      intro: string;
      highlights: string[];
    };
  };
  destinationsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    allFilter: string;
    citiesFilter: string;
    natureFilter: string;
    spotlightBtn: string;
    customComboTitle: string;
    customComboDesc: string;
    customComboBtn: string;
  };
  destinations: Record<
    string,
    {
      name: string;
      categoryLabel: string;
      region: string;
      price?: string;
      priceNumeric?: number;
      hotel?: {
        name: string;
        stars: number;
        tag?: string;
        description: string;
        location: string;
      };
      shortDesc: string;
      fullDesc: string;
      mainAttractionsTitle: string;
      mainAttractions: string[];
      suggestedExpTitle: string;
      suggestedExp: string[];
    }
  >;
  bookingModal: {
    title: string;
    subtitle: string;
    badge: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    packageLabel: string;
    travelersLabel: string;
    dateLabel: string;
    submitBtn: string;
    submitting: string;
    confTitle: string;
    confMessage: string;
    summaryTitle: string;
    anotherBtn: string;
    closeBtn: string;
    priceNote: string;
  };
  about: {
    kicker: string;
    title: string;
    quote: string;
    body: string;
    badgeTitle: string;
    badgeSubtitle: string;
    viewPackagesBtn: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  footer: {
    about: string;
    connectWithUs: string;
    navTitle: string;
    packagesTitle: string;
    contactTitle: string;
    headquarters: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    copyright: string;
    backToTop: string;
  };
  errors: {
    fullNameRequired: string;
    fullNameMin: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    phoneInvalid: string;
    dateRequired: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    langName: 'English',
    langCode: 'en',
    flag: '🇬🇧',
    nav: {
      home: 'Home',
      packages: 'Travel Packages',
      destinations: 'Destinations',
      about: 'About Us',
      contact: 'Book / Contact',
      explorePackages: 'Explore Our Packages',
    },
    hero: {
      tagline: 'Your next adventure awaits!',
      title: 'Discover Ireland with Global Explorers',
      subtitle: 'Explore beautiful cities and breathtaking landscapes.',
      exploreBtn: 'Explore Our Packages',
      discoverBtn: 'Discover Ireland',
      destinationsCount: '8 Iconic Places',
      destinationsLabel: 'Destinations',
      packagesCount: '2 Curated Packages',
      packagesLabel: 'Experiences',
      standardLabel: 'Standards',
      standardValue: 'Tailored Comfort',
      specializationLabel: 'Specialization',
      specializationValue: '100% Ireland Focus',
    },
    intro: {
      slogan: 'Travel • Discover • Experience',
      text: 'At Global Explorers, we create unforgettable travel experiences. Discover Ireland through its historic cities and breathtaking natural landscapes.',
    },
    packagesSection: {
      kicker: 'Curated Journeys',
      title: 'Our Travel Packages',
      subtitle: 'Two carefully designed experiences across Ireland with transparent demonstration pricing.',
      bookBtn: 'Book This Package',
      detailsBtn: 'View Package Details',
      perPerson: 'per person',
      priceDisclaimer: 'Demonstration price · Subject to custom date and seasonal confirmation',
      includedDestinations: 'Included Destinations',
      highlightsTitle: 'Package Highlights',
      individualDestPrice: 'Stop Rate',
      stopPricePrefix: 'Individual Stop:',
      hotelStayLabel: 'Featured Accommodation',
      hotelIncludedNote: 'Includes 4-Star & 5-Star Hotel Stay',
      topChoiceBadge: 'Top Choice',
    },
    packages: {
      cities: {
        number: 'Package 1',
        title: 'Irish Cities Experience',
        price: 'US$ 2,490',
        priceNumeric: 2490,
        subtitle: 'Explore four incredible Irish cities: Dublin, Galway, Cork, and Kilkenny.',
        shortDesc: 'Discover Irish culture, historic streets, architecture, and charming cities with 4- and 5-star hotel stays.',
        fullDesc:
          'Walk through the Georgian quarters of Dublin, listen to traditional fiddles in Galway’s Latin Quarter, savor the artisanal culinary heritage of Cork, and marvel at the medieval stone castle of Kilkenny.',
        intro:
          'From vibrant historic capitals to medieval castle streets, experience the living soul and hospitable warmth of Ireland’s most captivating cities with premier boutique hotel accommodations included.',
        highlights: [
          'Handpicked 4-star & 5-star central luxury hotel stays',
          'Executive transport between historic urban centers',
          'Licensed historian-led architectural & cultural walking tours',
          'Artisan food market tasting & live folk music sessions',
        ],
      },
      nature: {
        number: 'Package 2',
        title: 'Irish Nature & Landscapes',
        price: 'US$ 2,350',
        priceNumeric: 2350,
        subtitle: 'Discover four amazing natural destinations: Cliffs of Moher, Connemara, Killarney, and Dingle.',
        shortDesc: "Experience Ireland's spectacular cliffs, mountains, lakes, and coastal views with luxury castle & spa stays.",
        fullDesc:
          'Stand in awe above the 700-foot Atlantic Cliffs of Moher, explore the rugged peaks of Connemara, cruise the tranquil glacial lakes of Killarney, and navigate the wild Slea Head cliffs of Dingle.',
        intro:
          'Traverse Ireland’s dramatic Atlantic rim with windswept sea cliffs, serene mirror-lakes, ancient woodlands, and panoramic coastal routes.',
        highlights: [
          'Scenic chauffeured Mercedes van for coastal roads',
          'Scenic country manor retreats & secluded lakeside lodges',
          'Guided national park nature and geological walks',
          'Tranquil mountain lake cruises & Atlantic coastal drives',
        ],
      },
    },
    destinationsSection: {
      kicker: 'Handpicked Locations',
      title: 'Featured Irish Destinations',
      subtitle: 'Explore the eight iconic destinations across Ireland included in our two travel packages.',
      allFilter: 'All 8 Destinations',
      citiesFilter: 'Historic Cities (4)',
      natureFilter: 'Natural Wonders (4)',
      spotlightBtn: 'Spotlight',
      customComboTitle: 'Looking for a combination of cities and landscapes?',
      customComboDesc: 'We specialize exclusively in Ireland and can combine stops from both packages into a custom itinerary.',
      customComboBtn: 'Request a Custom Booking',
    },
    destinations: {
      dublin: {
        name: 'Dublin',
        categoryLabel: 'Historic City',
        region: 'Leinster, East Coast',
        shortDesc: "Discover Ireland's vibrant capital, rich history, iconic landmarks, and lively culture.",
        fullDesc: "Dublin seamlessly weaves a thousand years of history with cosmopolitan energy. Walk through Trinity College, admire Georgian architecture along Merrion Square, and stroll beside the River Liffey.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'Trinity College & the Book of Kells exhibition',
          "Georgian architecture of Merrion Square & St. Stephen's Green",
          'Dublin Castle & historic Christ Church Cathedral',
          'The River Liffey historic bridges and Ha’penny Bridge promenade',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Private historical walking tour through Dublin’s literary quarters',
          'Evening acoustic folk performance in an intimate historic tavern',
        ],
      },
      galway: {
        name: 'Galway',
        categoryLabel: 'Historic City',
        region: 'Connacht, West Coast',
        shortDesc: 'Experience colorful streets, traditional music, local culture, and a welcoming atmosphere.',
        fullDesc: "Known as Ireland's cultural heart, Galway radiates vibrant warmth. The pedestrianized Latin Quarter is framed by brightly painted facades, artisan workshops, and live street performers.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'The bustling cobblestone Latin Quarter & Quay Street',
          'Historic Spanish Arch & the scenic Corrib Riverwalk',
          'Galway Bay panorama & breezy Salthill Promenade',
          'St. Nicholas’ Collegiate Church dating back to 1320',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Authentic traditional Irish music session with local resident musicians',
          'Artisan seafood and Atlantic oyster tasting along the harbor',
        ],
      },
      cork: {
        name: 'Cork',
        categoryLabel: 'Historic City',
        region: 'Munster, Southern Ireland',
        shortDesc: "Explore historic architecture, local food, and the charm of Ireland's southern city.",
        fullDesc: "Perched on the River Lee, Cork is renowned as Ireland's culinary capital. Its waterways are crisscrossed by stone bridges leading to vibrant food markets and stately Victorian terraces.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'The English Market — historic culinary market trading since 1788',
          'St. Anne’s Church at Shandon & the famous bell-ringing tower',
          'University College Cork Quadrangle and Glucksman Gallery',
          'The scenic River Lee bridges and riverside boardwalks',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Guided culinary discovery tour meeting generational local cheese & fish mongers',
          'Climb the Shandon tower for a 360-degree panoramic view over Cork',
        ],
      },
      kilkenny: {
        name: 'Kilkenny',
        categoryLabel: 'Historic City',
        region: 'Leinster, South-East',
        shortDesc: 'Step into medieval Ireland through its castles, historic streets, and cultural heritage.',
        fullDesc: "Kilkenny is Ireland's premier medieval gem. Its celebrated Medieval Mile connects a 12th-century stone fortress with Gothic abbeys and half-timbered residences.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'The 12th-century Kilkenny Castle & 50-acre Victorian parklands',
          'The Medieval Mile connecting historic sites along high street',
          'St. Canice’s Cathedral & the 9th-century Round Tower',
          'Black Abbey and Rothe House merchant museum',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Private curator-led walk through the restored staterooms of Kilkenny Castle',
          'Climb the ancient stone Round Tower for county views',
        ],
      },
      'cliffs-of-moher': {
        name: 'Cliffs of Moher',
        categoryLabel: 'Natural Wonder',
        region: 'County Clare, Atlantic Edge',
        shortDesc: 'Admire dramatic coastal cliffs overlooking the Atlantic Ocean.',
        fullDesc: "Rising over 700 feet above the crashing Atlantic surf, the Cliffs of Moher offer one of the planet's most dramatic coastal panoramas across eight continuous miles.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'Eight miles of soaring 702-foot vertical cliff faces',
          "Historic 1835 O'Brien's Tower observation lookout",
          'Seabird nesting sanctuaries including Atlantic puffins',
          'The scenic Coastal Cliff Path between Doolin and Hags Head',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Early morning coastal walking expedition along clifftops',
          'Spectacular sunset photography session over the ocean horizon',
        ],
      },
      connemara: {
        name: 'Connemara National Park',
        categoryLabel: 'Natural Wonder',
        region: 'County Galway, Wild Atlantic Way',
        shortDesc: 'Discover mountains, lakes, walking trails, and extraordinary natural scenery.',
        fullDesc: "Connemara embodies the untamed, mystical soul of the Irish west, encompassing the dramatic Twelve Bens mountain range, expanse of golden bogland, and mirrored lakes.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'The rugged Twelve Bens quartzite mountain range',
          'Diamond Hill trail network with summit ocean vistas',
          'Kylemore Abbey Gothic castle and Victorian Walled Garden',
          'Lakeside bogland & wild native Connemara pony pastures',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Hike the scenic Diamond Hill trail for 360-degree ocean views',
          'Stroll through the romantic Victorian Walled Gardens of Kylemore Abbey',
        ],
      },
      killarney: {
        name: 'Killarney National Park',
        categoryLabel: 'Natural Wonder',
        region: 'County Kerry, South-West',
        shortDesc: 'Explore beautiful lakes, mountains, forests, and remarkable landscapes.',
        fullDesc: "Ireland's first national park spans ancient oak forests, cascading waterfalls, and the mirror-like Three Lakes of Killarney framed by rugged mountains.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'The Three Lakes of Killarney (Lough Leane, Muckross, Upper Lake)',
          '15th-century Ross Castle perched at the water’s edge',
          'Muckross House Victorian mansion and traditional farmsteads',
          'Torc Waterfall descending through ancient moss-draped oak woods',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Traditional wooden lakeboat cruise across Lough Leane',
          'Spotting the native herd of wild red deer in Ireland',
        ],
      },
      dingle: {
        name: 'Dingle Peninsula',
        categoryLabel: 'Natural Wonder',
        region: 'County Kerry, Atlantic Coast',
        shortDesc: 'Experience spectacular coastal views, charming villages, and scenic routes.',
        fullDesc: "Reaching into the wild North Atlantic, the Dingle Peninsula features pristine sandy beaches, towering sea cliffs, prehistoric beehive stone huts, and emerald fields.",
        mainAttractionsTitle: 'Main Attractions',
        mainAttractions: [
          'The legendary Slea Head Drive — one of Europe’s most scenic coastal routes',
          'Dunquin Pier & breathtaking views of the wild Blasket Islands',
          'Conor Pass — Ireland’s highest mountain pass with glacial corrie lakes',
          'Charming Dingle fishing town with artisan pottery and coastal harbor',
        ],
        suggestedExpTitle: 'Suggested Experiences',
        suggestedExp: [
          'Panoramic scenic drive along the sheer cliffs of Slea Head',
          'Walk along sandy stretches of Atlantic beaches against mountain backdrops',
        ],
      },
    },
    bookingModal: {
      title: 'Booking Request',
      subtitle: 'Complete your booking details and our Ireland travel concierge will confirm your itinerary.',
      badge: 'Package Booking',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g. Johnathan Smith',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 019-2834',
      packageLabel: 'Selected Package',
      travelersLabel: 'Number of Travelers',
      dateLabel: 'Travel Date',
      submitBtn: 'Submit Booking Request',
      submitting: 'Submitting Booking...',
      confTitle: 'Booking Request Received!',
      confMessage:
        'Thank you for booking with Global Explorers! Your booking request has been received. Our Ireland travel concierge will get back to you shortly with confirmed details and custom itinerary options.',
      summaryTitle: 'Booking Summary:',
      anotherBtn: 'Make Another Booking Request',
      closeBtn: 'Close',
      priceNote: 'Prices are in US Dollars (USD) per person and will be finalized upon travel date confirmation.',
    },
    about: {
      kicker: 'About Global Explorers',
      title: 'About Global Explorers',
      quote:
        '"At Global Explorers, we create unforgettable travel experiences. Discover Ireland through its historic cities and breathtaking natural landscapes."',
      body:
        'We believe that traveling is about more than visiting places. It is about discovering cultures, experiencing new perspectives, and creating memories that last a lifetime. Our dedicated focus on Ireland guarantees authentic connections with local hosts, historic landmarks, and pristine wild vistas.',
      badgeTitle: 'Dedicated Ireland Specialist',
      badgeSubtitle: 'Travel • Discover • Experience',
      viewPackagesBtn: 'Explore Our Two Packages',
      pillars: [
        {
          title: 'Authentic Curation',
          desc: 'Carefully chosen destinations highlighting Ireland’s most inspiring facets.',
        },
        {
          title: 'Trusted Expertise',
          desc: 'Licensed guides, reputable local accommodations, and seamless planning.',
        },
        {
          title: 'Personalized Care',
          desc: 'Every booking proposal is tailored around your preferred pace and party size.',
        },
        {
          title: 'Focused Excellence',
          desc: 'Exclusively dedicated to Ireland to guarantee unparalleled insight.',
        },
      ],
    },
    footer: {
      about:
        'Specialized travel agency dedicated exclusively to unforgettable journeys across Ireland. Discover vibrant historic cities and breathtaking natural coastal landscapes.',
      connectWithUs: 'Connect With Us',
      navTitle: 'Navigation',
      packagesTitle: 'Travel Packages',
      contactTitle: 'Agency Contact',
      headquarters: 'Dublin Headquarters',
      address: '14 Merrion Square East, Dublin 2, D02 HE94, Ireland',
      phone: '+353 (0)1 496 8200',
      email: 'concierge@globalexplorers.travel',
      hours: 'Mon – Fri: 09:00 – 18:00 GMT',
      copyright: '© 2026 Global Explorers. All rights reserved. Registered Travel Specialist for Ireland.',
      backToTop: 'Back to Top',
    },
    errors: {
      fullNameRequired: 'Please enter your full name.',
      fullNameMin: 'Full name must be at least 2 characters.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please provide a valid email address.',
      phoneRequired: 'Please enter your phone number.',
      phoneInvalid: 'Please provide a valid phone number.',
      dateRequired: 'Please select your desired travel date.',
    },
  },

  pt: {
    langName: 'Português',
    langCode: 'pt',
    flag: '🇧🇷',
    nav: {
      home: 'Início',
      packages: 'Pacotes de Viagem',
      destinations: 'Destinos',
      about: 'Sobre Nós',
      contact: 'Reservar / Contato',
      explorePackages: 'Explorar Nossos Pacotes',
    },
    hero: {
      tagline: 'Sua próxima aventura espera por você!',
      title: 'Descubra a Irlanda com a Global Explorers',
      subtitle: 'Explore belas cidades e paisagens de tirar o fôlego.',
      exploreBtn: 'Explorar Nossos Pacotes',
      discoverBtn: 'Descobrir a Irlanda',
      destinationsCount: '8 Lugares Icônicos',
      destinationsLabel: 'Destinos',
      packagesCount: '2 Pacotes Exclusivos',
      packagesLabel: 'Experiências',
      standardLabel: 'Padrão',
      standardValue: 'Conforto Sob Medida',
      specializationLabel: 'Especialização',
      specializationValue: '100% Foco na Irlanda',
    },
    intro: {
      slogan: 'Viajar • Descobrir • Vivenciar',
      text: 'Na Global Explorers, criamos experiências de viagem inesquecíveis. Descubra a Irlanda através de suas cidades históricas e paisagens naturais deslumbrantes.',
    },
    packagesSection: {
      kicker: 'Viagens Selecionadas',
      title: 'Nossos Pacotes de Viagem',
      subtitle: 'Duas experiências cuidadosamente planejadas pela Irlanda com preços transparentes de demonstração.',
      bookBtn: 'Reservar Este Pacote',
      detailsBtn: 'Ver Detalhes do Pacote',
      perPerson: 'por pessoa',
      priceDisclaimer: 'Preço de demonstração · Sujeito a confirmação de datas e temporada',
      includedDestinations: 'Destinos Incluídos',
      highlightsTitle: 'Destaques do Pacote',
      individualDestPrice: 'Preço do Destino',
      stopPricePrefix: 'Valor Avulso:',
      hotelStayLabel: 'Hospedagem Inclusa',
      hotelIncludedNote: 'Inclui Hospedagem em Hotel 4 e 5 Estrelas',
      topChoiceBadge: 'Minha Escolha',
    },
    packages: {
      cities: {
        number: 'Pacote 1',
        title: 'Experiência pelas Cidades Irlandesas',
        price: 'US$ 2.490',
        priceNumeric: 2490,
        subtitle: 'Explore quatro incríveis cidades irlandesas: Dublin, Galway, Cork e Kilkenny.',
        shortDesc: 'Descubra a cultura irlandesa, ruas históricas, arquitetura e cidades encantadoras com hospedagens em hotéis 4 e 5 estrelas.',
        fullDesc:
          'Caminhe pelos bairros georgianos de Dublin, ouça música tradicional no Latin Quarter de Galway, saboreie a rica gastronomia de Cork e encante-se com o castelo medieval de Kilkenny.',
        intro:
          'De capitais vibrantes a ruelas medievais, vivencie a alma viva e a acolhedora hospitalidade das cidades mais cativantes da Irlanda com hospedagens exclusivas.',
        highlights: [
          'Hospedagens selecionadas em hotéis 4 e 5 estrelas',
          'Transporte executivo confortável entre os centros urbanos',
          'Passeios a pé com historiadores credenciados',
          'Degustação em mercados tradicionais e música ao vivo',
        ],
      },
      nature: {
        number: 'Pacote 2',
        title: 'Natureza e Paisagens Irlandesas',
        price: 'US$ 2.350',
        priceNumeric: 2350,
        subtitle: 'Descubra quatro destinos naturais incríveis: Falésias de Moher, Connemara, Killarney e Dingle.',
        shortDesc: 'Vivencie as espetaculares falésias, montanhas, lagos e vistas costeiras da Irlanda com hospedagens de luxo em castelos e spas.',
        fullDesc:
          'Surpreenda-se diante dos penhascos de mais de 200 metros nas Falésias de Moher, explore os picos de Connemara, navegue pelos lagos de Killarney e percorra as estradas costeiras da Península de Dingle.',
        intro:
          'Percorra a dramática costa atlântica da Irlanda com falésias imponentes, lagos espelhados, bosques ancestrais e rotas panorâmicas.',
        highlights: [
          'Veículo privativo executivo para rotas cênicas e costeiras',
          'Estadias em casas senhoriais e refúgios à beira do lago',
          'Caminhadas guiadas por parques nacionais e formações geológicas',
          'Passeios de barco em lagos glaciais e vistas do oceano',
        ],
      },
    },
    destinationsSection: {
      kicker: 'Lugares Selecionados',
      title: 'Destinos Irlandeses em Destaque',
      subtitle: 'Conheça os oito destinos emblemáticos da Irlanda incluídos nos nossos dois pacotes de viagem.',
      allFilter: 'Todos os 8 Destinos',
      citiesFilter: 'Cidades Históricas (4)',
      natureFilter: 'Maravilhas Naturais (4)',
      spotlightBtn: 'Ver Destaque',
      customComboTitle: 'Quer combinar cidades históricas e paisagens naturais?',
      customComboDesc: 'Somos especialistas exclusivos na Irlanda e montamos roteiros personalizados combinando atrações de ambos os pacotes.',
      customComboBtn: 'Solicitar Reserva Personalizada',
    },
    destinations: {
      dublin: {
        name: 'Dublin',
        categoryLabel: 'Cidade Histórica',
        region: 'Leinster, Costa Leste',
        shortDesc: 'Descubra a vibrante capital da Irlanda, sua rica história, marcos icônicos e cultura animada.',
        fullDesc: 'Dublin une mil anos de história com energia cosmopolita. Visite o Trinity College, admire a arquitetura georgiana em Merrion Square e passeie pelas margens do Rio Liffey.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'Trinity College e a exposição do Livro de Kells',
          'Arquitetura Georgiana em Merrion Square e St. Stephen’s Green',
          'Castelo de Dublin e Catedral Christ Church',
          'Pontes históricas do Rio Liffey e Ponte Ha’penny',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Passeio histórico a pé pelas áreas literárias de Dublin',
          'Apresentação de música tradicional em taverna histórica',
        ],
      },
      galway: {
        name: 'Galway',
        categoryLabel: 'Cidade Histórica',
        region: 'Connacht, Costa Oeste',
        shortDesc: 'Vivencie ruas coloridas, música tradicional, cultura local e uma atmosfera muito acolhedora.',
        fullDesc: 'Considerada o coração cultural da Irlanda, Galway irradia calor e alegria. O Latin Quarter é repleto de fachadas coloridas, oficinas artesanais e artistas de rua.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'Latin Quarter com ruas de paralelepípedos e Quay Street',
          'Histórico Spanish Arch e caminhada pelo Rio Corrib',
          'Vista para a Baía de Galway e o calçadão de Salthill',
          'Igreja Colegiada de St. Nicholas datada de 1320',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Sessão de música folclórica ao vivo com músicos locais',
          'Degustação de frutos do mar frescos e ostras do Atlântico',
        ],
      },
      cork: {
        name: 'Cork',
        categoryLabel: 'Cidade Histórica',
        region: 'Munster, Sul da Irlanda',
        shortDesc: 'Explore a arquitetura histórica, a culinária regional e o charme da principal cidade do sul.',
        fullDesc: 'Localizada às margens do Rio Lee, Cork é a capital gastronômica da Irlanda, com pontes de pedra, mercados tradicionais e o toque dos famosos sinos de Shandon.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'The English Market — mercado histórico ativo desde 1788',
          'Igreja de St. Anne em Shandon e sua famosa torre com sinos',
          'Campus histórico da University College Cork',
          'Pontes charmosas sobre o Rio Lee e calçadões à beira-rio',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Tour gastronômico conhecendo produtores artesanais de queijos e pescados',
          'Subida na torre de Shandon com vista panorâmica de 360° de Cork',
        ],
      },
      kilkenny: {
        name: 'Kilkenny',
        categoryLabel: 'Cidade Histórica',
        region: 'Leinster, Sudeste',
        shortDesc: 'Mergulhe na Irlanda medieval através de seus castelos, ruas históricas e herança cultural.',
        fullDesc: 'Kilkenny é a joia medieval mais célebre da Irlanda. A Milha Medieval liga uma imponente fortaleza do século XII a abadias góticas e ateliês de artesanato refinado.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'Castelo de Kilkenny do século XII e jardins vitorianos',
          'A Milha Medieval que conecta os sítios históricos centrais',
          'Catedral de St. Canice e a Torre Redonda do século IX',
          'Black Abbey e museu de comerciantes em Rothe House',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Visita guiada pelos salões nobres restaurados do Castelo de Kilkenny',
          'Subida na antiga torre de pedra para apreciar a paisagem do condado',
        ],
      },
      'cliffs-of-moher': {
        name: 'Falésias de Moher',
        categoryLabel: 'Maravilha Natural',
        region: 'Condado de Clare, Borda do Atlântico',
        shortDesc: 'Admire dramáticas falésias costeiras debruçadas sobre o Oceano Atlântico.',
        fullDesc: 'Erguendo-se a mais de 214 metros sobre o Atlântico, as Falésias de Moher formam um dos cenários costeiros mais impressionantes do planeta ao longo de oito milhas.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'Mais de 12 km de paredões rochosos verticais sobre o mar',
          'Torre de O’Brien construída em 1835 com mirante panorâmico',
          'Santuário de aves marinhas nativas, incluindo papagaios-do-mar',
          'Trilha costeira panorâmica entre Doolin e Hags Head',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Caminhada matinal ao longo da orla das falésias',
          'Sessão fotográfica inesquecível ao pôr do sol no horizonte do Atlântico',
        ],
      },
      connemara: {
        name: 'Parque Nacional de Connemara',
        categoryLabel: 'Maravilha Natural',
        region: 'Condado de Galway, Wild Atlantic Way',
        shortDesc: 'Descubra montanhas, lagos, trilhas para caminhada e paisagens naturais extraordinárias.',
        fullDesc: 'Connemara sintetiza a alma selvagem e poética do oeste irlandês, com as montanhas Twelve Bens, vastos vales de turfa dourada e lagos límpidos.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'Cadeia montanhosa de Twelve Bens em quartzito',
          'Trilha de Diamond Hill com vista do topo para o oceano',
          'Castelo neogótico de Kylemore Abbey e Jardim Murado Vitoriano',
          'Lagos serenos e pastagens com os famosos pôneis de Connemara',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Subida à trilha de Diamond Hill com vista de 360 graus para o mar e montanhas',
          'Passeio relaxante pelos jardins vitorianos de Kylemore Abbey',
        ],
      },
      killarney: {
        name: 'Parque Nacional de Killarney',
        categoryLabel: 'Maravilha Natural',
        region: 'Condado de Kerry, Sudoeste',
        shortDesc: 'Explore belos lagos, montanhas, florestas e cenários naturais marcantes.',
        fullDesc: 'O primeiro parque nacional da Irlanda preserva carvalhais ancestrais, cachoeiras e os famosos Três Lagos de Killarney emoldurados pelas montanhas mais altas do país.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'Os Três Lagos de Killarney (Lough Leane, Muckross e Upper Lake)',
          'Castelo de Ross do século XV à beira d’água',
          'Muckross House, mansão vitoriana e fazendas tradicionais',
          'Cachoeira de Torc em meio a bosques nativos centenários',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Navegação tradicional em barco de madeira pelo Lough Leane',
          'Observação da manada nativa de cervos-vermelhos selvagens',
        ],
      },
      dingle: {
        name: 'Península de Dingle',
        categoryLabel: 'Maravilha Natural',
        region: 'Condado de Kerry, Costa Atlântica',
        shortDesc: 'Aprecie espetaculares vistas costeiras, vilarejos acolhedores e rotas cinematográficas.',
        fullDesc: 'Avançando sobre o Oceano Atlântico, a Península de Dingle impressiona com praias de areia dourada, penhascos vertiginosos e colinas verdejantes.',
        mainAttractionsTitle: 'Principais Atrações',
        mainAttractions: [
          'A famosa rota Slea Head Drive — uma das mais belas da Europa',
          'Cais de Dunquin e vista panorâmica para as Ilhas Blasket',
          'Conor Pass — a passagem montanhosa mais alta da Irlanda',
          'Vila pesqueira de Dingle com cerâmica artesanal e porto pitoresco',
        ],
        suggestedExpTitle: 'Experiências Sugeridas',
        suggestedExp: [
          'Passeio panorâmico ao longo dos penhascos de Slea Head',
          'Caminhada relaxante pelas praias oceânicas cercadas por montanhas',
        ],
      },
    },
    bookingModal: {
      title: 'Solicitação de Reserva',
      subtitle: 'Preencha os dados e nosso concierge de viagens para a Irlanda confirmará seu itinerário.',
      badge: 'Reserva de Pacote',
      fullNameLabel: 'Nome Completo',
      fullNamePlaceholder: 'ex: Carlos Eduardo Silva',
      emailLabel: 'E-mail',
      emailPlaceholder: 'nome@exemplo.com',
      phoneLabel: 'Telefone / WhatsApp',
      phonePlaceholder: '+55 (11) 98765-4321',
      packageLabel: 'Pacote Selecionado',
      travelersLabel: 'Número de Viajantes',
      dateLabel: 'Data Prevista da Viagem',
      submitBtn: 'Enviar Solicitação de Reserva',
      submitting: 'Enviando Solicitação...',
      confTitle: 'Solicitação de Reserva Recebida!',
      confMessage:
        'Agradecemos por reservar com a Global Explorers! Sua solicitação foi recebida com sucesso. Nossa equipe entrará em contato em breve com as confirmações e opções de itinerário personalizado.',
      summaryTitle: 'Resumo da Reserva:',
      anotherBtn: 'Fazer Outra Solicitação',
      closeBtn: 'Fechar',
      priceNote: 'Preços em Dólares Americanos (USD) por pessoa, confirmados na validação das datas.',
    },
    about: {
      kicker: 'Sobre a Global Explorers',
      title: 'Sobre a Global Explorers',
      quote:
        '"Na Global Explorers, criamos experiências de viagem inesquecíveis. Descubra a Irlanda através de suas cidades históricas e paisagens naturais deslumbrantes."',
      body:
        'Acreditamos que viajar é mais do que visitar pontos turísticos. É descobrir novas culturas, ampliar perspectivas e criar memórias eternas. Nossa dedicação exclusiva à Irlanda garante conexões genuínas com anfitriões locais, patrimônios históricos e cenários naturais intocados.',
      badgeTitle: 'Especialista Exclusivo na Irlanda',
      badgeSubtitle: 'Viajar • Descobrir • Vivenciar',
      viewPackagesBtn: 'Explorar Nossos Dois Pacotes',
      pillars: [
        {
          title: 'Curadoria Autêntica',
          desc: 'Destinos cuidadosamente selecionados destacando o que há de mais inspirador na Irlanda.',
        },
        {
          title: 'Experiência Confiável',
          desc: 'Guias credenciados, parceiros hoteleiros de excelência e planejamento impecável.',
        },
        {
          title: 'Atendimento Personalizado',
          desc: 'Cada proposta é adaptada ao ritmo, tamanho do grupo e interesses da sua viagem.',
        },
        {
          title: 'Excelência Focada',
          desc: 'Especialização dedicada 100% à Irlanda para assegurar conhecimento ímpar.',
        },
      ],
    },
    footer: {
      about:
        'Agência de viagens especializada dedicada exclusivamente a experiências inesquecíveis pela Irlanda. Descubra cidades históricas vibrantes e paisagens naturais deslumbrantes.',
      connectWithUs: 'Conecte-se Conosco',
      navTitle: 'Navegação',
      packagesTitle: 'Pacotes de Viagem',
      contactTitle: 'Contato da Agência',
      headquarters: 'Sede em Dublin',
      address: '14 Merrion Square East, Dublin 2, D02 HE94, Irlanda',
      phone: '+353 (0)1 496 8200',
      email: 'concierge@globalexplorers.travel',
      hours: 'Seg – Sex: 09:00 – 18:00 GMT',
      copyright: '© 2026 Global Explorers. Todos os direitos reservados. Especialista em viagens para a Irlanda.',
      backToTop: 'Voltar ao Topo',
    },
    errors: {
      fullNameRequired: 'Por favor, informe seu nome completo.',
      fullNameMin: 'O nome completo deve conter pelo menos 2 caracteres.',
      emailRequired: 'Por favor, informe seu endereço de e-mail.',
      emailInvalid: 'Por favor, informe um e-mail válido.',
      phoneRequired: 'Por favor, informe seu telefone.',
      phoneInvalid: 'Por favor, informe um telefone válido.',
      dateRequired: 'Por favor, selecione a data prevista para a viagem.',
    },
  },

  es: {
    langName: 'Español',
    langCode: 'es',
    flag: '🇪🇸',
    nav: {
      home: 'Inicio',
      packages: 'Paquetes de Viaje',
      destinations: 'Destinos',
      about: 'Sobre Nosotros',
      contact: 'Reservar / Contacto',
      explorePackages: 'Explorar Nuestros Paquetes',
    },
    hero: {
      tagline: '¡Tu próxima aventura te espera!',
      title: 'Descubre Irlanda con Global Explorers',
      subtitle: 'Explora hermosas ciudades y paisajes impresionantes.',
      exploreBtn: 'Explorar Nuestros Paquetes',
      discoverBtn: 'Descubrir Irlanda',
      destinationsCount: '8 Lugares Icónicos',
      destinationsLabel: 'Destinos',
      packagesCount: '2 Paquetes Exclusivos',
      packagesLabel: 'Experiencias',
      standardLabel: 'Estándar',
      standardValue: 'Confort a Medida',
      specializationLabel: 'Especialización',
      specializationValue: '100% Enfoque en Irlanda',
    },
    intro: {
      slogan: 'Viajar • Descubrir • Experimentar',
      text: 'En Global Explorers creamos experiencias de viaje inolvidables. Descubre Irlanda a través de sus ciudades históricas y sus impresionantes paisajes naturales.',
    },
    packagesSection: {
      kicker: 'Viajes Seleccionados',
      title: 'Nuestros Paquetes de Viaje',
      subtitle: 'Dos experiencias cuidadosamente diseñadas por Irlanda con precios transparentes de demostración.',
      bookBtn: 'Reservar Este Paquete',
      detailsBtn: 'Ver Detalles del Paquete',
      perPerson: 'por persona',
      priceDisclaimer: 'Precio de demostración · Sujeto a confirmación de fechas y temporada',
      includedDestinations: 'Destinos Incluidos',
      highlightsTitle: 'Aspectos Destacados',
      individualDestPrice: 'Precio del Destino',
      stopPricePrefix: 'Tarifa Individual:',
      hotelStayLabel: 'Alojamiento Destacado',
      hotelIncludedNote: 'Incluye Alojamiento en Hoteles 4 y 5 Estrellas',
      topChoiceBadge: 'Mi Elección',
    },
    packages: {
      cities: {
        number: 'Paquete 1',
        title: 'Experiencia en Ciudades Irlandesas',
        price: 'US$ 2,490',
        priceNumeric: 2490,
        subtitle: 'Explora cuatro increíbles ciudades irlandesas: Dublín, Galway, Cork y Kilkenny.',
        shortDesc: 'Descubre la cultura irlandesa, calles históricas, arquitectura y encantadoras ciudades con hoteles de 4 y 5 estrellas.',
        fullDesc:
          'Camina por los elegantes barrios georgianos de Dublín, escucha música tradicional en el Latin Quarter de Galway, degusta la gastronomía artesanal de Cork y admira el castillo medieval de Kilkenny.',
        intro:
          'Desde capitales vibrantes hasta calles medievales, vive el alma viva y la hospitalidad acogedora de las ciudades más cautivadoras de Irlanda con selectos alojamientos.',
        highlights: [
          'Alojamiento en hoteles selectos de 4 y 5 estrellas',
          'Transporte ejecutivo cómodo entre los centros urbanos',
          'Recorridos a pie con historiadores acreditados',
          'Degustación en mercados tradicionales y música en vivo',
        ],
      },
      nature: {
        number: 'Paquete 2',
        title: 'Naturaleza y Paisajes Irlandeses',
        price: 'US$ 2,350',
        priceNumeric: 2350,
        subtitle: 'Descubre cuatro increíbles destinos naturales: Acantilados de Moher, Connemara, Killarney y Dingle.',
        shortDesc: 'Vive los espectaculares acantilados, montañas, lagos y vistas costeras de Irlanda con estancias en castillos y spas de lujo.',
        fullDesc:
          'Contempla los imponentes acantilados de más de 200 metros en Moher, explora los senderos montañosos de Connemara, navega los lagos de Killarney y recorre la costa de la Península de Dingle.',
        intro:
          'Recorre la dramática costa atlántica de Irlanda con acantilados colosales, lagos cristalinos, bosques antiguos y rutas panorámicas.',
        highlights: [
          'Vehículo privado ejecutivo para rutas costeras y panorámicas',
          'Estancias en casas señoriales y alojamientos junto al lago',
          'Caminatas guiadas por parques nacionales y geología local',
          'Paseos en barco por lagos glaciares y vistas del océano',
        ],
      },
    },
    destinationsSection: {
      kicker: 'Lugares Seleccionados',
      title: 'Destinos Irlandeses Destacados',
      subtitle: 'Conoce los ocho destinos emblemáticos de Irlanda incluidos en nuestros dos paquetes de viaje.',
      allFilter: 'Los 8 Destinos',
      citiesFilter: 'Ciudades Históricas (4)',
      natureFilter: 'Maravillas Naturales (4)',
      spotlightBtn: 'Ver Detalle',
      customComboTitle: '¿Deseas combinar ciudades históricas y paisajes naturales?',
      customComboDesc: 'Somos especialistas exclusivos en Irlanda y preparamos itinerarios personalizados combinando visitas de ambos paquetes.',
      customComboBtn: 'Solicitar Reserva Personalizada',
    },
    destinations: {
      dublin: {
        name: 'Dublín',
        categoryLabel: 'Ciudad Histórica',
        region: 'Leinster, Costa Este',
        shortDesc: 'Descubre la vibrante capital de Irlanda, su rica historia, monumentos icónicos y animada cultura.',
        fullDesc: 'Dublín une mil años de historia con energía cosmopolita. Visita el Trinity College, admira la arquitectura georgiana en Merrion Square y pasea junto al río Liffey.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'Trinity College y exposición del Libro de Kells',
          'Arquitectura georgiana en Merrion Square y St. Stephen’s Green',
          'Castillo de Dublín y Catedral de Christ Church',
          'Puentes históricos del río Liffey y el puente Ha’penny',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Paseo histórico guiado por los distritos literarios de Dublín',
          'Presentación de música folclórica en taberna tradicional',
        ],
      },
      galway: {
        name: 'Galway',
        categoryLabel: 'Ciudad Histórica',
        region: 'Connacht, Costa Oeste',
        shortDesc: 'Disfruta de calles coloridas, música tradicional, cultura local y un ambiente muy acogedor.',
        fullDesc: 'Conocida como el corazón cultural de Irlanda, Galway desborda alegría. El Latin Quarter cuenta con fachadas coloridas, talleres artesanales y artistas callejeros.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'El Latin Quarter peatonal y Quay Street',
          'Histórico Spanish Arch y paseo fluvial por el Corrib',
          'Vistas a la bahía de Galway y paseo marítimo de Salthill',
          'Iglesia colegiata de St. Nicholas construida en 1320',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Sesión auténtica de música irlandesa en vivo con músicos locales',
          'Degustación de mariscos frescos y ostras del Atlántico',
        ],
      },
      cork: {
        name: 'Cork',
        categoryLabel: 'Ciudad Histórica',
        region: 'Munster, Sur de Irlanda',
        shortDesc: 'Explora la arquitectura histórica, la comida regional y el encanto de la principal ciudad del sur.',
        fullDesc: 'Ubicada sobre el río Lee, Cork es la capital culinaria de Irlanda, con puentes de piedra, mercados tradicionales y el sonido de las campanas de Shandon.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'The English Market — mercado gastronómico activo desde 1788',
          'Iglesia de St. Anne en Shandon y su torre con campanas',
          'Claustro histórico de la University College Cork',
          'Puentes sobre el río Lee y paseos fluviales',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Tour culinario guiado con productores locales de quesos y pescados',
          'Subida a la torre de Shandon para una vista panorámica de Cork',
        ],
      },
      kilkenny: {
        name: 'Kilkenny',
        categoryLabel: 'Ciudad Histórica',
        region: 'Leinster, Sureste',
        shortDesc: 'Entra en la Irlanda medieval a través de sus castillos, calles históricas y patrimonio cultural.',
        fullDesc: 'Kilkenny es la joya medieval por excelencia de Irlanda. Su Milla Medieval conecta una fortaleza del siglo XII con abadías góticas y talleres de artesanía.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'Castillo de Kilkenny del siglo XII y jardines victorianos',
          'La Milla Medieval que une los puntos históricos principales',
          'Catedral de St. Canice y Torre Redonda del siglo IX',
          'Black Abbey y museo mercantil en Rothe House',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Recorrido por las salas nobles restauradas del Castillo de Kilkenny',
          'Subida a la antigua torre redonda de piedra para admirar el condado',
        ],
      },
      'cliffs-of-moher': {
        name: 'Acantilados de Moher',
        categoryLabel: 'Maravilla Natural',
        region: 'Condado de Clare, Borde del Atlántico',
        shortDesc: 'Admira dramáticos acantilados costeros que se asoman al Océano Atlántico.',
        fullDesc: 'Elevándose a más de 200 metros sobre el mar, los Acantilados de Moher ofrecen una de las panorámicas oceánicas más espectaculares del planeta.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'Ocho millas de imponentes paredes rocosas verticales',
          'Mirador histórico en la Torre de O’Brien construida en 1835',
          'Santuario de aves marinas con frailecillos atlánticos',
          'Sendero costero panorámico entre Doolin y Hags Head',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Paseo matutino por la cima de los acantilados marinos',
          'Sesión fotográfica al atardecer sobre el horizonte del Atlántico',
        ],
      },
      connemara: {
        name: 'Parque Nacional de Connemara',
        categoryLabel: 'Maravilla Natural',
        region: 'Condado de Galway, Wild Atlantic Way',
        shortDesc: 'Descubre montañas, lagos, senderos y paisajes naturales extraordinarios.',
        fullDesc: 'Connemara encarna el alma salvaje y agreste del oeste irlandés, con la cordillera de Twelve Bens, extensas turberas y lagos reflejantes.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'Cordillera montañosa de Twelve Bens en cuarcita',
          'Red de senderos de Diamond Hill con vistas panorámicas al mar',
          'Castillo de Kylemore Abbey y jardín victoriano amurallado',
          'Lagos tranquilos y hábitat del poni autóctono de Connemara',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Ascenso a Diamond Hill para vistas de 360 grados de montañas y costa',
          'Paseo por los románticos jardines amurallados de Kylemore Abbey',
        ],
      },
      killarney: {
        name: 'Parque Nacional de Killarney',
        categoryLabel: 'Maravilla Natural',
        region: 'Condado de Kerry, Suroeste',
        shortDesc: 'Explora hermosos lagos, montañas, bosques y paisajes memorables.',
        fullDesc: 'El primer parque nacional de Irlanda protege robledales centenarios, cascadas y los famosos Tres Lagos de Killarney rodeados de altas montañas.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'Los Tres Lagos de Killarney (Lough Leane, Muckross y Upper Lake)',
          'Castillo de Ross del siglo XV a orillas del agua',
          'Mansión victoriana de Muckross House y granjas tradicionales',
          'Cascada de Torc entre bosques de robles cubiertos de musgo',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Paseo en barco tradicional de madera por el lago Lough Leane',
          'Observación de la manada autóctona de ciervos rojos salvajes',
        ],
      },
      dingle: {
        name: 'Península de Dingle',
        categoryLabel: 'Maravilla Natural',
        region: 'Condado de Kerry, Costa Atlántica',
        shortDesc: 'Disfruta de espectaculares vistas costeras, pueblos encantadores y rutas panorámicas.',
        fullDesc: 'Adentrándose en el Atlántico Norte, la Península de Dingle ofrece playas de arena dorada, acantilados vertiginosos y colinas de un verde intenso.',
        mainAttractionsTitle: 'Atracciones Principales',
        mainAttractions: [
          'La legendaria ruta costera de Slea Head Drive',
          'Muelle de Dunquin y vistas a las remotas Islas Blasket',
          'Paso de Conor — el puerto de montaña más alto de Irlanda',
          'Pueblo marinero de Dingle con artesanía y puerto pesquero',
        ],
        suggestedExpTitle: 'Experiencias Sugeridas',
        suggestedExp: [
          'Recorrido panorámico en carretera bordeando los acantilados de Slea Head',
          'Caminatas por amplias playas atlánticas frente a las montañas',
        ],
      },
    },
    bookingModal: {
      title: 'Solicitud de Reserva',
      subtitle: 'Ingresa tus datos y nuestro equipo especialista en Irlanda confirmará tu itinerario.',
      badge: 'Reserva de Paquete',
      fullNameLabel: 'Nombre Completo',
      fullNamePlaceholder: 'ej: Alejandro Gómez',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'nombre@ejemplo.com',
      phoneLabel: 'Teléfono',
      phonePlaceholder: '+34 612 345 678',
      packageLabel: 'Paquete Seleccionado',
      travelersLabel: 'Número de Viajeros',
      dateLabel: 'Fecha Prevista del Viaje',
      submitBtn: 'Enviar Solicitud de Reserva',
      submitting: 'Enviando Solicitud...',
      confTitle: '¡Solicitud de Reserva Recibida!',
      confMessage:
        '¡Gracias por reservar con Global Explorers! Hemos recibido tu solicitud con éxito. Nuestro equipo se pondrá en contacto pronto con los detalles confirmados y opciones de itinerario a medida.',
      summaryTitle: 'Resumen de la Reserva:',
      anotherBtn: 'Hacer Otra Solicitud de Reserva',
      closeBtn: 'Cerrar',
      priceNote: 'Precios en Dólares Americanos (USD) por persona, sujetos a confirmación de fechas.',
    },
    about: {
      kicker: 'Sobre Global Explorers',
      title: 'Sobre Global Explorers',
      quote:
        '"En Global Explorers creamos experiencias de viaje inolvidables. Descubre Irlanda a través de sus ciudades históricas y sus impresionantes paisajes naturales."',
      body:
        'Creemos que viajar es más que visitar lugares; es conectar con culturas, abrir perspectivas y forjar recuerdos inolvidables. Nuestra dedicación exclusiva a Irlanda garantiza vivencias genuinas junto a guías locales, fortalezas milenarias y parajes costeros vírgenes.',
      badgeTitle: 'Especialista Exclusivo en Irlanda',
      badgeSubtitle: 'Viajar • Descubrir • Experimentar',
      viewPackagesBtn: 'Explorar Nuestros Dos Paquetes',
      pillars: [
        {
          title: 'Curaduría Auténtica',
          desc: 'Destinos cuidadosamente seleccionados para destacar lo más inspirador de Irlanda.',
        },
        {
          title: 'Experiencia Confiable',
          desc: 'Guías acreditados, alianzas con hoteles de prestigio y organización impecable.',
        },
        {
          title: 'Atención a Medida',
          desc: 'Cada propuesta se ajusta al ritmo, tamaño del grupo y preferencias de viaje.',
        },
        {
          title: 'Excelencia Dedicada',
          desc: 'Especialización 100% en Irlanda para asegurar un conocimiento inigualable.',
        },
      ],
    },
    footer: {
      about:
        'Agencia de viajes especializada dedicada exclusivamente a travesías inolvidables por Irlanda. Descubre ciudades históricas vibrantes y paisajes naturales costeros deslumbrantes.',
      connectWithUs: 'Conéctate con Nosotros',
      navTitle: 'Navegación',
      packagesTitle: 'Paquetes de Viaje',
      contactTitle: 'Contacto de la Agencia',
      headquarters: 'Sede en Dublín',
      address: '14 Merrion Square East, Dublín 2, D02 HE94, Irlanda',
      phone: '+353 (0)1 496 8200',
      email: 'concierge@globalexplorers.travel',
      hours: 'Lun – Vie: 09:00 – 18:00 GMT',
      copyright: '© 2026 Global Explorers. Todos los derechos reservados. Especialista en viajes a Irlanda.',
      backToTop: 'Volver al Inicio',
    },
    errors: {
      fullNameRequired: 'Por favor, ingresa tu nombre completo.',
      fullNameMin: 'El nombre completo debe tener al menos 2 caracteres.',
      emailRequired: 'Por favor, ingresa tu correo electrónico.',
      emailInvalid: 'Por favor, ingresa un correo electrónico válido.',
      phoneRequired: 'Por favor, ingresa tu número de teléfono.',
      phoneInvalid: 'Por favor, ingresa un número de teléfono válido.',
      dateRequired: 'Por favor, selecciona la fecha prevista del viaje.',
    },
  },
};
