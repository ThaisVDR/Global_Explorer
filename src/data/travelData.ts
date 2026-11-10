/**
 * Global Explorers — Authoritative Travel Data for Ireland
 * 
 * Strict specifications:
 * - Exactly two travel packages: "Irish Cities Experience" and "Irish Nature & Landscapes"
 * - Exactly eight destinations: Dublin, Galway, Cork, Kilkenny, Cliffs of Moher, Connemara National Park, Killarney National Park, Dingle Peninsula
 * - All text exclusively in English.
 */

export interface HotelStay {
  name: string;
  stars: 4 | 5;
  isTopChoice?: boolean;
  tag?: string;
  description: string;
  location: string;
}

export interface Destination {
  id: string;
  name: string;
  category: 'city' | 'nature';
  packageId: 'irish-cities' | 'irish-nature';
  packageName: string;
  price: string;
  priceNumeric: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  region: string;
  hotel: HotelStay;
  mainAttractions: string[];
  suggestedExperiences: string[];
}

export interface TravelPackage {
  id: 'irish-cities' | 'irish-nature';
  packageNumber: string;
  title: string;
  subtitle: string;
  price: string;
  pricePerPerson: string;
  shortDescription: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  introduction: string;
  fullDescription: string;
  destinations: Destination[];
  suggestedItinerary: {
    day: string;
    title: string;
    location: string;
    description: string;
  }[];
  suggestedActivities: string[];
  transportationInfo: string;
  accommodationInfo: string;
  serviceBadges: string[];
}

export const DESTINATIONS: Destination[] = [
  // Package 01 — Irish Cities Experience (Total: US$ 2,490 per person with luxury hotel stays)
  {
    id: 'dublin',
    name: 'Dublin',
    category: 'city',
    packageId: 'irish-cities',
    packageName: 'Irish Cities Experience',
    price: 'US$ 820',
    priceNumeric: 820,
    region: 'Leinster, East Coast',
    shortDescription: "Discover Ireland's vibrant capital, rich history, iconic landmarks, and lively culture.",
    fullDescription:
      "Dublin seamlessly weaves a thousand years of history with cosmopolitan energy. Walk through the Long Room of Trinity College, admire the Georgian door architecture along Merrion Square, stroll beside the River Liffey, and immerse yourself in the creative heritage of Oscar Wilde and James Joyce.",
    hotel: {
      name: 'The Merrion Hotel Dublin',
      stars: 5,
      isTopChoice: true,
      tag: 'Top Choice',
      description: 'Five-star elegant hotel with an exceptional central location in downtown Dublin.',
      location: 'Dublin 2, Ireland',
    },
    image: '/src/assets/images/package_irish_cities_1794338907747.jpg',
    imageAlt: 'Historic cobblestone streets and Georgian architecture in Dublin, Ireland',
    mainAttractions: [
      'Trinity College & the Book of Kells exhibition',
      "Georgian architecture of Merrion Square & St. Stephen's Green",
      'Dublin Castle & historic Christ Church Cathedral',
      'The River Liffey historic bridges and Ha’penny Bridge promenade',
    ],
    suggestedExperiences: [
      'Private historical walking tour through Dublin’s literary quarters',
      'Evening acoustic folk performance in an intimate historic tavern',
      'Curated visit to the National Museum of Archaeology',
      'Artisan afternoon tea in a restored 18th-century townhouse',
    ],
  },
  {
    id: 'galway',
    name: 'Galway',
    category: 'city',
    packageId: 'irish-cities',
    packageName: 'Irish Cities Experience',
    price: 'US$ 640',
    priceNumeric: 640,
    region: 'Connacht, West Coast',
    shortDescription: 'Experience colorful streets, traditional music, local culture, and a welcoming atmosphere.',
    fullDescription:
      "Known as Ireland's cultural heart, Galway radiates vibrant warmth. The pedestrianized Latin Quarter is framed by brightly painted facades, artisan workshops, and street performers. As twilight settles, the lively sound of traditional fiddles and bodhráns echoes from welcoming pubs.",
    hotel: {
      name: 'The Galmont Hotel & Spa',
      stars: 4,
      isTopChoice: false,
      tag: 'Four-Star Spa Hotel',
      description: 'Four-star hotel featuring an award-winning spa, indoor pool, and prime location close to the city center.',
      location: 'Galway, Ireland',
    },
    image: '/src/assets/images/destination_galway_1794338947860.jpg',
    imageAlt: 'Vibrant Latin Quarter streets of Galway with colorful facades and welcoming storefronts',
    mainAttractions: [
      'The bustling cobblestone Latin Quarter & Quay Street',
      'Historic Spanish Arch & the scenic Corrib Riverwalk',
      'Galway Bay panorama & the breezy Salthill Promenade',
      'St. Nicholas’ Collegiate Church dating back to 1320',
    ],
    suggestedExperiences: [
      'Authentic traditional Irish music session with local resident musicians',
      'Artisan seafood and Atlantic oyster tasting along the harbor',
      'Explore handcrafted Claddagh ring workshops and local silversmiths',
      'Sunset stroll along the Atlantic waters of Galway Bay',
    ],
  },
  {
    id: 'cork',
    name: 'Cork',
    category: 'city',
    packageId: 'irish-cities',
    packageName: 'Irish Cities Experience',
    price: 'US$ 590',
    priceNumeric: 590,
    region: 'Munster, Southern Ireland',
    shortDescription: "Explore historic architecture, local food, and the charm of Ireland's southern city.",
    fullDescription:
      "Perched on the River Lee, Cork is renowned as Ireland's culinary capital. Its waterways are crisscrossed by stone bridges leading to vibrant food markets, stately Victorian terraces, and the melodious chimes of the Shandon Bells ringing across the rooftops.",
    hotel: {
      name: 'Hayfield Manor Hotel',
      stars: 5,
      isTopChoice: true,
      tag: 'Top Choice',
      description: 'Five-star hotel featuring manicured gardens, indoor swimming pool, and sophisticated bespoke hospitality.',
      location: 'Cork, Ireland',
    },
    image: '/src/assets/images/destination_cork_1794338948720.jpg',
    imageAlt: 'Panoramic view of Cork City waterfront along the River Lee with historic architecture',
    mainAttractions: [
      'The English Market — historic culinary market trading since 1788',
      'St. Anne’s Church at Shandon & the famous bell-ringing tower',
      'University College Cork Quadrangle and Glucksman Gallery',
      'The scenic River Lee bridges and riverside boardwalks',
    ],
    suggestedExperiences: [
      'Guided culinary discovery tour meeting generational local cheese & fish mongers',
      'Climb the Shandon tower for a 360-degree panoramic view over Cork',
      'Afternoon boat excursion along the coastal waterways of Cork Harbour',
      'Tasting seasonal Southern Irish farmhouse produce and artisanal cider',
    ],
  },
  {
    id: 'kilkenny',
    name: 'Kilkenny',
    category: 'city',
    packageId: 'irish-cities',
    packageName: 'Irish Cities Experience',
    price: 'US$ 440',
    priceNumeric: 440,
    region: 'Leinster, South-East',
    shortDescription: 'Step into medieval Ireland through its castles, historic streets, and cultural heritage.',
    fullDescription:
      "Kilkenny is Ireland's premier medieval gem. Its celebrated 'Medieval Mile' connects a 12th-century stone fortress with Gothic abbeys and half-timbered merchant residences, set against a backdrop of world-renowned pottery, weaving, and artistic craft studios.",
    hotel: {
      name: 'Pembroke Hotel Kilkenny',
      stars: 4,
      isTopChoice: false,
      tag: 'Boutique Heritage Stay',
      description: 'Four-star boutique hotel located moments from Kilkenny Castle and the historic city center.',
      location: 'Kilkenny, Ireland',
    },
    image: '/src/assets/images/destination_kilkenny_1794338949077.jpg',
    imageAlt: 'Magnificent Kilkenny Castle overlooking lush green parklands and the River Nore',
    mainAttractions: [
      'The 12th-century Kilkenny Castle & 50-acre Victorian parklands',
      'The Medieval Mile connecting historic sites along high street',
      'St. Canice’s Cathedral & the 9th-century Round Tower',
      'Black Abbey and Rothe House merchant museum',
    ],
    suggestedExperiences: [
      'Private curator-led walk through the restored staterooms of Kilkenny Castle',
      'Climb the ancient 100-foot stone Round Tower for breathtaking county views',
      'Visit master glassblowers and ceramic artists in historic stable yards',
      'Sample traditional craft ales brewed along the historic banks of the River Nore',
    ],
  },

  // Package 02 — Irish Nature & Landscapes (Total: US$ 2,350 per person with castle & spa stays)
  {
    id: 'cliffs-of-moher',
    name: 'Cliffs of Moher',
    category: 'nature',
    packageId: 'irish-nature',
    packageName: 'Irish Nature & Landscapes',
    price: 'US$ 580',
    priceNumeric: 580,
    region: 'County Clare, Atlantic Edge',
    shortDescription: 'Admire dramatic coastal cliffs overlooking the Atlantic Ocean.',
    fullDescription:
      "Rising over 700 feet above the crashing Atlantic surf, the Cliffs of Moher offer one of the planet's most dramatic coastal panoramas. Towering vertical shale and sandstone walls stretch for eight continuous miles, bathed in maritime spray and inhabited by thriving colonies of seabirds.",
    hotel: {
      name: 'Doolin Inn',
      stars: 4,
      isTopChoice: true,
      tag: 'Top Choice',
      description: 'Four-star country accommodation in Doolin, close to the coastal cliffs trail and charming village.',
      location: 'Doolin, County Clare',
    },
    image: '/src/assets/images/destination_cliffs_moher_1794338908937.jpg',
    imageAlt: 'Towering Cliffs of Moher meeting crashing Atlantic ocean waves under golden sunlight',
    mainAttractions: [
      'Eight miles of soaring 702-foot vertical cliff faces',
      "Historic 1835 O'Brien's Tower observation lookout",
      'Seabird nesting sanctuaries including Atlantic puffins and guillemots',
      'The scenic Coastal Cliff Path between Doolin and Hags Head',
    ],
    suggestedExperiences: [
      'Early morning coastal walking expedition before peak visitation',
      'Atlantic sea safari cruise viewing the cliff ramparts from water level',
      'Expert geological and seabird conservation interpretive walk',
      'Spectacular sunset photography session over the Aran Islands horizon',
    ],
  },
  {
    id: 'connemara',
    name: 'Connemara National Park',
    category: 'nature',
    packageId: 'irish-nature',
    packageName: 'Irish Nature & Landscapes',
    price: 'US$ 690',
    priceNumeric: 690,
    region: 'County Galway, Wild Atlantic Way',
    shortDescription: 'Discover mountains, lakes, walking trails, and extraordinary natural scenery.',
    fullDescription:
      "Connemara embodies the untamed, mystical soul of the Irish west. Across nearly 7,000 acres, this pristine national park encompasses the dramatic peaks of the Twelve Bens mountain range, expanse of golden bogland, mirrored lakes, and native Connemara ponies grazing freely.",
    hotel: {
      name: 'Ballynahinch Castle',
      stars: 5,
      isTopChoice: true,
      tag: 'Top Choice',
      description: 'Luxury castle hotel set on an approx. 700-acre natural estate surrounded by mountains, rivers, and woodlands.',
      location: 'Recess, County Galway',
    },
    image: '/src/assets/images/destination_connemara_1794338950772.jpg',
    imageAlt: 'Scenic Twelve Bens mountain range reflecting in calm bog lake in Connemara',
    mainAttractions: [
      'The rugged Twelve Bens (Na Beanna Beola) quartzite mountain range',
      'Diamond Hill trail network with summit vistas of ocean bays',
      'Kylemore Abbey Gothic castle and 6-acre Victorian Walled Garden',
      'Lough Pollacappul and sprawling Atlantic heather blanket bogs',
    ],
    suggestedExperiences: [
      'Hike the scenic Upper Diamond Hill trail for 360-degree ocean and mountain panoramas',
      'Stroll through the romantic Victorian Walled Gardens of Kylemore Abbey',
      'Observe purebred native Connemara ponies in their natural wild habitat',
      'Guided botanical walk exploring ancient peat bogs and carnivorous sundew plants',
    ],
  },
  {
    id: 'killarney',
    name: 'Killarney National Park',
    category: 'nature',
    packageId: 'irish-nature',
    packageName: 'Irish Nature & Landscapes',
    price: 'US$ 620',
    priceNumeric: 620,
    region: 'County Kerry, South-West',
    shortDescription: 'Explore beautiful lakes, mountains, forests, and remarkable landscapes.',
    fullDescription:
      "Ireland's first national park spans over 26,000 acres of ecological magnificence. Ancient sessile oak forests, cascading mountain waterfalls, and the mirror-like waters of Lough Leane, Muckross Lake, and Upper Lake are framed by the imposing heights of the MacGillycuddy's Reeks.",
    hotel: {
      name: 'Muckross Park Hotel & Spa',
      stars: 5,
      isTopChoice: true,
      tag: 'Top Choice',
      description: 'Five-star hotel with spa, close to the landscapes and walking trails of the national park.',
      location: 'Killarney, County Kerry',
    },
    image: '/src/assets/images/destination_killarney_1794338950706.jpg',
    imageAlt: 'Mirror-calm Lough Leane lake with misty Kerry mountains in Killarney National Park',
    mainAttractions: [
      'The tranquil Three Lakes of Killarney (Lough Leane, Muckross, Upper Lake)',
      '15th-century Ross Castle perched at the water’s edge',
      'Muckross House Victorian mansion and traditional farmsteads',
      'Torc Waterfall descending through ancient moss-draped oak woods',
    ],
    suggestedExperiences: [
      'Traditional wooden lakeboat cruise across Lough Leane to Innisfallen Island',
      'Horse-drawn jaunting car excursion through the historic Muckross Peninsula',
      'Spotting the native herd of wild red deer, continuous in Ireland since the Ice Age',
      'Scenic photography along Ladies View lookout over the Upper Lake valley',
    ],
  },
  {
    id: 'dingle',
    name: 'Dingle Peninsula',
    category: 'nature',
    packageId: 'irish-nature',
    packageName: 'Irish Nature & Landscapes',
    price: 'US$ 460',
    priceNumeric: 460,
    region: 'County Kerry, Atlantic Coast',
    shortDescription: 'Experience spectacular coastal views, charming villages, and scenic routes.',
    fullDescription:
      "Reaching into the wild North Atlantic, the Dingle Peninsula is a breathtaking masterpiece of rugged beauty. Pristine sandy beaches, towering sea cliffs, prehistoric beehive stone huts, and emerald fields tumbling into turquoise waves define this captivating coastal sanctuary.",
    hotel: {
      name: 'Dingle Skellig Hotel',
      stars: 4,
      isTopChoice: false,
      tag: 'Bay-View Retreat',
      description: 'Four-star hotel commanding views over Dingle Bay, complete with swimming pool and spa.',
      location: 'Dingle, County Kerry',
    },
    image: '/src/assets/images/destination_dingle_1794338950804.jpg',
    imageAlt: 'Panoramic Slea Head coastal road winding above turquoise Atlantic waters in Dingle',
    mainAttractions: [
      'The legendary Slea Head Drive — one of Europe’s most scenic coastal routes',
      'Dunquin Pier & breathtaking views across to the wild Blasket Islands',
      'Conor Pass — Ireland’s highest mountain pass with glacial corrie lakes',
      'Charming Dingle fishing town with artisan pottery and coastal harbor',
    ],
    suggestedExperiences: [
      'Panoramic scenic drive along the sheer cliffs of Slea Head',
      'Visit the ancient Gallarus Oratory stone church preserved since early Christian times',
      'Taste handmade sea salt ice cream and fresh coastal chowder in Dingle harbor',
      'Coastal walk along the sandy stretches of Inch Strand against mountain backdrops',
    ],
  },
];

export const PACKAGES: TravelPackage[] = [
  {
    id: 'irish-cities',
    packageNumber: 'Package 1',
    title: 'Irish Cities Experience',
    subtitle: "Discover Ireland's most charming cities.",
    price: 'US$ 2,490',
    pricePerPerson: 'US$ 2,490 per person',
    shortDescription: 'Discover Irish culture, historic streets, architecture, and charming cities.',
    tagline: 'Culture, history, culinary heritage, and vibrant local spirit across four iconic urban centers.',
    heroImage: '/src/assets/images/package_irish_cities_1794338907747.jpg',
    galleryImages: [
      '/src/assets/images/package_irish_cities_1794338907747.jpg',
      '/src/assets/images/destination_galway_1794338947860.jpg',
      '/src/assets/images/destination_cork_1794338948720.jpg',
      '/src/assets/images/destination_kilkenny_1794338949077.jpg',
    ],
    introduction:
      "Embark on an enriching journey through Ireland's premier cultural hubs. From the storied Georgian squares of Dublin and the medieval corridors of Kilkenny to the gastronomic waterways of Cork and the lively musical heart of Galway, this curated itinerary immerses you in the authentic soul of Irish urban life.",
    fullDescription:
      "The Irish Cities Experience connects you with the heritage, architecture, and living culture that make Ireland's cities truly unforgettable. Each city offers its own distinct personality: Dublin's literary grandeur and historic castle grounds, Kilkenny's preserved medieval fortifications and contemporary craft scene, Cork's vibrant artisanal culinary traditions along the River Lee, and Galway's bohemian coastal energy and spontaneous traditional music.",
    destinations: DESTINATIONS.filter((d) => d.packageId === 'irish-cities'),
    suggestedItinerary: [
      {
        day: 'Days 1 – 2',
        title: "Dublin's Historic Heart & Georgian Grandeur",
        location: 'Dublin',
        description:
          "Arrive in Dublin and discover the vibrant capital. Explore the Long Room at Trinity College, walk through the historic quays of the River Liffey, and experience the cultural quarters and Georgian elegance of St. Stephen's Green.",
      },
      {
        day: 'Days 3 – 4',
        title: 'Kilkenny’s Medieval Mile & Master Crafts',
        location: 'Kilkenny',
        description:
          'Journey south to medieval Kilkenny. Tour the magnificent 12th-century castle and its manicured rose gardens, walk the historic Medieval Mile, and visit artisan pottery and glassblowing studios.',
      },
      {
        day: 'Day 5',
        title: "Cork's Riverside Charm & Culinary Treasures",
        location: 'Cork',
        description:
          'Travel to southern Ireland’s culinary capital. Wander through the world-famous English Market with local artisanal food purveyors, stroll along the bridges of the River Lee, and hear the bells of Shandon.',
      },
      {
        day: 'Days 6 – 7',
        title: "Galway's Colorful Streets & Living Traditions",
        location: 'Galway',
        description:
          'Head west to lively Galway. Experience the vibrant pedestrianized Latin Quarter, visit the historic Spanish Arch, stroll along Galway Bay, and enjoy traditional live music in historic establishments.',
      },
    ],
    suggestedActivities: [
      'Private architectural & historical walking tours led by licensed local historians',
      'Curated gourmet tasting journeys through generational heritage food markets',
      'Exclusive access to castle staterooms, cathedrals, and ancient library collections',
      'Evenings of authentic Irish storytelling, poetry, and traditional music sessions',
      'Visits to traditional craft workshops, handweavers, and silversmith studios',
    ],
    transportationInfo:
      'Transfers are provided via comfortable private executive transport or first-class scenic rail service connecting major Irish metropolitan centers. City center travel is designed for pleasant, scenic walking.',
    accommodationInfo:
      'Stays are arranged in boutique 4-star and 5-star heritage hotels, restored Georgian townhouses, and luxury city-center establishments chosen for character, comfort, and prime central locations.',
    serviceBadges: [
      'Curated Urban Itinerary',
      'Accredited Cultural Guides',
      'Boutique Heritage Stays',
      'Private Executive Transport',
    ],
  },
  {
    id: 'irish-nature',
    packageNumber: 'Package 2',
    title: 'Irish Nature & Landscapes',
    subtitle: "Experience Ireland's most breathtaking natural wonders.",
    price: 'US$ 2,350',
    pricePerPerson: 'US$ 2,350 per person',
    shortDescription: "Experience Ireland's spectacular cliffs, mountains, lakes, and coastal views.",
    tagline: 'Dramatic sea cliffs, misty mountain ranges, serene glacial lakes, and wild Atlantic coastal routes.',
    heroImage: '/src/assets/images/package_irish_nature_1794338907611.jpg',
    galleryImages: [
      '/src/assets/images/package_irish_nature_1794338907611.jpg',
      '/src/assets/images/destination_cliffs_moher_1794338908937.jpg',
      '/src/assets/images/destination_connemara_1794338950772.jpg',
      '/src/assets/images/destination_killarney_1794338950706.jpg',
      '/src/assets/images/destination_dingle_1794338950804.jpg',
    ],
    introduction:
      "Discover the raw, untamed splendor of Ireland's Atlantic rim. From the towering precipices of the Cliffs of Moher and the mystical boglands of Connemara to the mirror-like mountain lakes of Killarney and the windswept coastal majesty of the Dingle Peninsula, prepare to be inspired by nature at its most dramatic.",
    fullDescription:
      "Irish Nature & Landscapes is crafted for travelers who long to reconnect with the pristine natural world. Traversed along the celebrated Wild Atlantic Way, this route brings you face-to-face with sheer 700-foot coastal cliffs, ancient oak woodlands dating back centuries, reflective glacial tarns, and panoramic mountain passes.",
    destinations: DESTINATIONS.filter((d) => d.packageId === 'irish-nature'),
    suggestedItinerary: [
      {
        day: 'Days 1 – 2',
        title: 'The Untamed Wilderness of Connemara',
        location: 'Connemara National Park',
        description:
          'Begin in the mystical west. Trek the scenic slopes of Diamond Hill, admire the Twelve Bens mountain reflections in serene bog lakes, and visit romantic Kylemore Abbey surrounded by native wilderness.',
      },
      {
        day: 'Day 3',
        title: 'The Atlantic Majesty of the Cliffs of Moher',
        location: 'Cliffs of Moher',
        description:
          'Experience the soaring 700-foot coastal cliffs dropping into the Atlantic surf. Walk the panoramic coastal trail, observe colonies of seabirds, and view the Aran Islands across the bay.',
      },
      {
        day: 'Days 4 – 5',
        title: 'Lakes, Waterfalls & Ancient Woods of Killarney',
        location: 'Killarney National Park',
        description:
          'Explore Ireland’s first national park. Take a scenic wooden boat cruise across Lough Leane, visit medieval Ross Castle, witness Torc Waterfall, and spot native herds of wild red deer.',
      },
      {
        day: 'Days 6 – 7',
        title: 'The Wild Atlantic Splendor of Dingle Peninsula',
        location: 'Dingle Peninsula',
        description:
          'Conclude with the dramatic coastal drive around Slea Head. Admire sheer cliffs overlooking the Blasket Islands, walk sandy Atlantic beaches, and explore coastal harbors with views of Conor Pass.',
      },
    ],
    suggestedActivities: [
      'Guided nature and geology walks led by certified Irish wilderness naturalists',
      'Coastal boat expeditions viewing towering sea cliffs and marine life from ocean level',
      'Scenic photography stops at legendary mountain passes and Atlantic panoramic lookouts',
      'Tranquil lake cruises on historic wooden crafts through glacial mountain waters',
      'Visits to protected national park visitor centers, castles, and historic coastal sites',
    ],
    transportationInfo:
      'Travel is conducted via private executive Mercedes chauffeur vehicles, specially suited for navigating Ireland’s scenic coastal roads, mountain passes, and national park trailheads with ease.',
    accommodationInfo:
      'Accommodations feature handpicked country manor estates, secluded lakeside lodges, and boutique coastal retreats offering exceptional natural views, warmth, and tranquil luxury.',
    serviceBadges: [
      'Scenic Wild Atlantic Routes',
      'Expert Nature Naturalists',
      'Lakeside & Manor Lodges',
      'Private Chauffeur Travel',
    ],
  },
];
