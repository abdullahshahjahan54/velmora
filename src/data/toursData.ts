import { TourPackage } from '../types/travel';
import hunzaHero from '../assets/images/velmora_hero_hunza_1790689476526.jpg';
import skarduHero from '../assets/images/velmora_experience_skardu_1790689492734.jpg';
import maldivesHero from '../assets/images/velmora_maldives_luxury_1790689505749.jpg';
import turkeyHero from '../assets/images/velmora_turkey_cappadocia_1790689523801.jpg';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'hunza-explorer',
    slug: 'hunza-explorer',
    title: 'Hunza Explorer Luxury Expedition',
    destinationId: 'hunza',
    location: 'Gilgit-Baltistan, Pakistan',
    country: 'Pakistan',
    duration: '8 Days / 7 Nights',
    startingPrice: 1250,
    priceFormatted: '$1,250',
    rating: 4.98,
    reviewCount: 94,
    travelersCount: '2 - 12 Guests',
    shortDescription: 'The definitive Karakoram journey: Attabad Lake boating, Passu Cones, ancient forts, and luxury mountain lodges.',
    fullOverview: 'Embark on an awe-inspiring 8-day expedition through the storied valleys of Gilgit and Hunza. Journey across the eighth wonder of the world—the Karakoram Highway—to discover ancient Silk Route forts, turquoise glacial lakes, hanging suspension bridges, and dramatic vistas of Rakaposhi, Diran, and the Cathedral Cones.',
    categories: ['all', 'pakistan', 'luxury', 'family', 'adventure'],
    heroImage: hunzaHero,
    galleryImages: [
      hunzaHero,
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private motorboat safari across Attabad Lake turquoise waters',
      'VIP guided tours of 800-year-old Baltit Fort and 1,100-year-old Altit Fort',
      'Sunset panoramic champagne/high-tea toast at Eagle\'s Nest Duikar',
      'Crossing the thrilling Hussaini Hanging Bridge above the Hunza River',
      'Drive to Khunjerab Pass (4,693m) — the world\'s highest paved international border'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Islamabad & Scenic Mountain Flight to Gilgit',
        description: 'Morning reception by your private VELMORA chauffeur and concierge at Islamabad International Airport. Scenic flight over Nanga Parbat to Gilgit. Check into luxury boutique resort with river views. Afternoon orientation and traditional welcoming dinner.',
        meals: 'Dinner Included',
        stay: 'Serena Gilgit / Mountain View Suite'
      },
      {
        day: 'Day 02',
        title: 'Gilgit to Karimabad & Rakaposhi Viewpoint',
        description: 'Depart Gilgit along the scenic Karakoram Highway. Stop at the collision point of the Indian and Eurasian tectonic plates. Enjoy lunch overlooking the 7,788m snow face of Rakaposhi. Arrive in Karimabad, Hunza, and explore local gemstone bazaars.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Serena Hunza Baltit Inn / Deluxe Mountain Suite'
      },
      {
        day: 'Day 03',
        title: 'Historical Forts & Sunset at Eagle\'s Nest',
        description: 'Private guided architectural tour of Baltit Fort, once the royal seat of the Mir of Hunza. Visit Altit Fort and its 1000-year-old royal apricot orchard. Late afternoon ascent to Eagle\'s Nest in Duikar for an unforgettable 360-degree sunset over 7 Himalayan peaks.',
        meals: 'Breakfast, Dinner',
        stay: 'Serena Hunza Baltit Inn'
      },
      {
        day: 'Day 04',
        title: 'Attabad Lake Boating & Upper Hunza (Gojal)',
        description: 'Drive through the KKH tunnels to Attabad Lake. Private VIP speed boat ride across the brilliant turquoise waters. Continue to Gulmit historic village and walk through the carpet weaving center run by local women artisans.',
        meals: 'Breakfast, Local Organic Lunch, Dinner',
        stay: 'Luxus Grand Attabad Lake Resort / Over-water Suite'
      },
      {
        day: 'Day 05',
        title: 'Passu Cathedral Cones & Hussaini Bridge',
        description: 'Morning walk alongside the Borith Lake salt basin. Photo stops under the awe-inspiring vertical towers of Passu Cones. Brave the wooden planks of Hussaini Hanging Bridge with professional mountain safety guides. Sunset tea at Passu Glacier viewpoint.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Luxus Grand Attabad Lake Resort'
      },
      {
        day: 'Day 06',
        title: 'Expedition to Khunjerab Pass (World\'s Highest Border)',
        description: 'Ascend through Khunjerab National Park. Spot Himalayan ibex and golden marmots along the alpine crags. Reach the Pakistan-China friendship monument at 4,693 meters. Enjoy hot soup and Karakoram tea at the high-altitude post.',
        meals: 'Breakfast, Packed Warm Lunch, Dinner',
        stay: 'Luxus Grand Attabad Lake Resort'
      },
      {
        day: 'Day 07',
        title: 'Scenic Return Journey to Gilgit & Cultural Evening',
        description: 'Leisurely morning with lakefront breakfast. Return drive to Gilgit with stops at ancient Silk Road petroglyphs and suspension bridges. Evening folk music performance and celebratory farewell dinner.',
        meals: 'Breakfast, Lunch, Farewell Banquet',
        stay: 'Serena Gilgit'
      },
      {
        day: 'Day 08',
        title: 'Flight to Islamabad & Onward Departure',
        description: 'Morning flight back to Islamabad with bird’s-eye views of the Himalayas and Karakoram. Private transfer to your departing flight or onward stay with complimentary VELMORA luxury gift hamper.',
        meals: 'Breakfast Included',
        stay: 'Departure / Seamless Transfer'
      }
    ],
    included: [
      'Round-trip luxury Toyota Prado / Coaster transportation with fuel and private chauffeur',
      'Islamabad to Gilgit roundtrip scenic domestic flights',
      '7 nights accommodation in premier 5-star properties (Serena Hotels & Luxus Grand)',
      'Daily gourmet breakfast, curated lunch stops, and chef-curated dinners',
      'Private government-licensed English/Urdu speaking lead tour curator',
      'All entry tickets, fort permits, and national park tolls',
      'Private motorboat safari at Attabad Lake',
      'Complimentary mineral water, dry fruit snack hampers, and 24/7 concierge support'
    ],
    notIncluded: [
      'International airfare to/from Islamabad',
      'Personal travel & medical insurance (available as add-on)',
      'Alcoholic beverages and personal telephone calls',
      'Gratuities for driver and guide'
    ],
    accommodation: 'Handpicked 5-Star luxury properties: Serena Gilgit, Serena Baltit Inn Karimabad, Luxus Grand Attabad Lake Resort.',
    transportation: 'Chauffeured 4x4 Toyota Land Cruiser Prado / Super Custom HiAce equipped with panoramic glass windows and Wi-Fi.',
    importantInfo: [
      'Valid national identity card or international passport with Pakistan Visa is required.',
      'Gilgit flights are weather-dependent; a scenic road backup via Babusar/KKH is always secured in standby.',
      'Modest mountain clothing and warm layers are recommended for evening temperatures.'
    ],
    reviews: [
      {
        author: 'Zainab & Tariq Mansoor',
        location: 'Lahore, Pakistan',
        rating: 5,
        date: 'October 2025',
        comment: 'VELMORA made our Hunza anniversary trip extraordinary. The stay at Luxus Attabad Lake was surreal, and having a private Prado with an educated, polite driver made all the difference.'
      },
      {
        author: 'Marcus Vance',
        location: 'London, UK',
        rating: 5,
        date: 'August 2025',
        comment: 'Hands down the most professional travel agency in Pakistan. Zero logistical friction, stunning hotels, and breathtaking mountain vistas. The Khunjerab day trip was unforgettable.'
      }
    ]
  },
  {
    id: 'skardu-adventure',
    slug: 'skardu-adventure',
    title: 'Skardu Shangri-La & Cold Desert Tour',
    destinationId: 'skardu',
    location: 'Gilgit-Baltistan, Pakistan',
    country: 'Pakistan',
    duration: '7 Days / 6 Nights',
    startingPrice: 1400,
    priceFormatted: '$1,400',
    rating: 4.96,
    reviewCount: 82,
    travelersCount: '2 - 10 Guests',
    shortDescription: 'Witness sand dunes touching snow-capped peaks, Shangrila Resort, Upper Kachura Lake, and Deosai Plains.',
    fullOverview: 'Explore Skardu, the gateway to K2 and the mythical realm of Shangri-La. From serene morning reflection walks along Kachura Lake to exhilarating 4x4 rides across the high-altitude wilderness of Deosai National Park at 4,000 meters, this tour combines high comfort with pure adventure.',
    categories: ['all', 'pakistan', 'adventure', 'luxury'],
    heroImage: skarduHero,
    galleryImages: [
      skarduHero,
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Stargazing and bonfire in the Katpana Cold Desert',
      'Private boat cruise on heart-shaped Upper Kachura Lake',
      'Full-day 4x4 expedition to the Deosai Plains (Land of Giants)',
      'Visit to ancient Manthal Buddha Rock & Kharpocho Fort ruins',
      'Stay in Shangrila Resort pagoda chalets surrounded by fruit gardens'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Flight to Skardu & Welcome at Shangrila',
        description: 'Breathtaking flight past Nanga Parbat and K2 into Skardu Airport. Check in to Shangrila Resort overlooking Lower Kachura Lake. Afternoon tea by the water.',
        meals: 'Dinner Included',
        stay: 'Shangrila Resort / Lake Chalet'
      },
      {
        day: 'Day 02',
        title: 'Upper Kachura Lake & Soq Valley Exploration',
        description: 'Trek through pine woods to Upper Kachura Lake for trout boating. Continue to the picturesque pastoral hamlet of Soq Valley for riverside tea.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Shangrila Resort'
      },
      {
        day: 'Day 03',
        title: 'Shigar Valley & 400-Year-Old Serena Shigar Fort',
        description: 'Cross the Indus River into the fertile oasis of Shigar. Walk through ancient stone villages and dine in the restored Serena Shigar Fort.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Serena Shigar Fort (Palace Room)'
      },
      {
        day: 'Day 04',
        title: 'Expedition to Deosai National Park & Sheosar Lake',
        description: 'Ascend the Ali Malik pass onto the vast, windswept Deosai plateau at 4,114m. Picnic at mirror-like Sheosar Lake with views of Nanga Parbat in the distance.',
        meals: 'Breakfast, Wilderness Picnic, Dinner',
        stay: 'Serena Shigar Fort'
      },
      {
        day: 'Day 05',
        title: 'Katpana Cold Desert Dunes & Kharpocho Fort',
        description: 'Sunset at the mystical Katpana Cold Desert. Climb to the historic rooftop of Kharpocho Fort overlooking the convergence of the Indus and Shigar rivers.',
        meals: 'Breakfast, Lunch, Desert BBQ Dinner',
        stay: 'Byarsa Skardu Luxury Hotel'
      },
      {
        day: 'Day 06',
        title: 'Khaplu Valley & Serena Khaplu Palace',
        description: 'Day excursion to the historic kingdom of Khaplu. Explore the Tibetan-influenced Royal Palace and centuries-old Chaqchan Mosque.',
        meals: 'Breakfast, Royal Balti Feast, Dinner',
        stay: 'Serena Khaplu Palace'
      },
      {
        day: 'Day 07',
        title: 'Departure from Skardu to Islamabad',
        description: 'Morning transfer to Skardu Airport with panoramic views of the Karakoram range. Arrival in Islamabad and farewell service.',
        meals: 'Breakfast Included',
        stay: 'Departure'
      }
    ],
    included: [
      'Domestic flights Islamabad to Skardu roundtrip',
      'All nights in luxury heritage suites (Shangrila & Serena Forts)',
      'Dedicated 4x4 Toyota Prado throughout Skardu & Deosai',
      'All gourmet meals including live trout barbecue and royal Balti dinner',
      'Expert expedition leader and local cultural historians'
    ],
    notIncluded: ['Personal gear', 'Optional helicopter mountain flight'],
    accommodation: 'Serena Shigar Fort, Serena Khaplu Palace, and Shangrila Resort Skardu.',
    transportation: 'Dedicated Toyota Land Cruiser Prado 4x4.',
    importantInfo: ['Deosai is open June to October due to snow cover.'],
    reviews: [
      {
        author: 'Dr. Hamza Farooq',
        location: 'Karachi, Pakistan',
        rating: 5,
        date: 'July 2025',
        comment: 'The silence of Deosai and the royal elegance of Serena Shigar Fort were unforgettable. VELMORA took care of every tiny detail.'
      }
    ]
  },
  {
    id: 'kashmir-escape',
    slug: 'kashmir-escape',
    title: 'Kashmir & Neelum Valley Escape',
    destinationId: 'kashmir',
    location: 'Azad Kashmir, Pakistan',
    country: 'Pakistan',
    duration: '6 Days / 5 Nights',
    startingPrice: 890,
    priceFormatted: '$890',
    rating: 4.94,
    reviewCount: 76,
    travelersCount: '2 - 8 Guests',
    shortDescription: 'Discover the fairytale village of Arang Kel, historic Sharda Peeth, and rushing emerald rivers.',
    fullOverview: 'Experience the pristine romantic valleys of Azad Kashmir. Journey alongside the crystalline waters of the Neelum River, ride the aerial cable car to the lush plateau of Arang Kel, explore the 6th-century intellectual hub of Sharda Peeth, and relax in scenic riverside pine chalets.',
    categories: ['all', 'pakistan', 'honeymoon', 'budget', 'family'],
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Cable car and hike to the fairytale mountain meadow of Arang Kel',
      'Exploration of the ancient stone ruins of Sharda Peeth University',
      'Riverside bonfire and fresh Kashmiri trout dinner at Keran',
      'Excursion to cascading Kutton waterfalls and Jagran valley',
      'Stay in premium river-facing wooden chalets'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Islamabad to Muzaffarabad & Neelum River Gate',
        description: 'Morning pickup from Islamabad. Scenic drive through Kohala bridge into Azad Kashmir. Visit Red Fort Muzaffarabad and proceed into lower Neelum Valley.',
        meals: 'Lunch, Dinner',
        stay: 'Pearl Continental Muzaffarabad / River Suite'
      },
      {
        day: 'Day 02',
        title: 'Dhani Waterfall, Kutton & Keran Riverside',
        description: 'Stop at the roaring Dhani Waterfall. Check into scenic wooden riverside lodge in Keran, situated right on the banks of the Neelum River.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Keran Riverside Pine Resort'
      },
      {
        day: 'Day 03',
        title: 'Sharda Peeth Ancient Temple & Sharda Valley',
        description: 'Drive deeper into upper Neelum to historical Sharda. Walk across the wooden bridge to explore the historic 6th-century Sharda Peeth ruins.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Sharda Alpine Chalet'
      },
      {
        day: 'Day 04',
        title: 'Arang Kel — The Pearl of Neelum',
        description: 'Board the thrilling scenic cable car from Kel, followed by a gentle pine-scented forest trek up to the lush meadows of Arang Kel. Free afternoon in paradise.',
        meals: 'Breakfast, Traditional Kashmiri Lunch, Dinner',
        stay: 'Arang Kel Valley Retreat'
      },
      {
        day: 'Day 05',
        title: 'Kutton Jagran Hydro Valley & Relaxed Evening',
        description: 'Descend to Jagran Valley to tour pristine trout hatcheries and pine-shaded mountain streams. Evening bonfire with Kashmiri folk melodies.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Kutton Jagran Luxury Resort'
      },
      {
        day: 'Day 06',
        title: 'Return to Islamabad via Murree Hills',
        description: 'Morning return journey via scenic Murree Expressway with stops for high tea and shopping. Drop-off in Islamabad.',
        meals: 'Breakfast, Lunch',
        stay: 'Departure'
      }
    ],
    included: [
      'Private air-conditioned Grand Cabin / Prado transportation with driver',
      '5 nights boutique riverside accommodation',
      'Daily breakfast, Kashmiri lunch stops, and dinner with trout specialty',
      'Cable car passes to Arang Kel and local guide assistance',
      'All toll taxes and permits'
    ],
    notIncluded: ['Personal shopping', 'Laundry and tips'],
    accommodation: 'Boutique river lodges including PC Muzaffarabad and Keran Pine Resort.',
    transportation: 'Dedicated SUV or high-roof executive van.',
    importantInfo: ['Kashmir entry requires valid identity documents.'],
    reviews: [
      {
        author: 'Ayesha & Bilal Qureshi',
        location: 'Islamabad, Pakistan',
        rating: 5,
        date: 'September 2025',
        comment: 'Our honeymoon in Arang Kel was pure magic. The greenery, the tranquility, and VELMORA\'s hospitality made it unforgettable.'
      }
    ]
  },
  {
    id: 'northern-pakistan-family-tour',
    slug: 'northern-pakistan-family-tour',
    title: 'Northern Pakistan Grand Family Tour',
    destinationId: 'hunza',
    location: 'Hunza, Skardu & Naran, Pakistan',
    country: 'Pakistan',
    duration: '10 Days / 9 Nights',
    startingPrice: 1650,
    priceFormatted: '$1,650',
    rating: 4.97,
    reviewCount: 110,
    travelersCount: '4 - 16 Guests',
    shortDescription: 'The ultimate family vacation: comfortable travel, safe luxury hotels, Saif-ul-Malook, Hunza, and Babusar Pass.',
    fullOverview: 'Specially engineered for families traveling with children or elders. We provide leisurely pacing, top-tier luxury hotels with heating and backup power, kid-friendly activities, private spacious vans, and round-the-clock medical concierge support across the crown jewels of Northern Pakistan.',
    categories: ['all', 'pakistan', 'family', 'luxury'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      hunzaHero,
      skarduHero
    ],
    highlights: [
      'Comfort-first travel paced specifically for all generations',
      'Safe 4x4 excursion to mythical Lake Saif-ul-Malook with pony rides',
      'Private boat cruise at Attabad Lake and apricot picking in Hunza',
      'Scenic stop at the 4,173m Babusar Pass with hot tea and snacks',
      'Stays at Serena Hotels and Luxus Grand'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Islamabad to Naran via Balakot Valley',
        description: 'Morning departure from Islamabad. Scenic drive along Kunhar River to Naran. Evening family stroll along Naran market.',
        meals: 'Lunch, Dinner',
        stay: 'The Sarai Naran Luxury Hotel'
      },
      {
        day: 'Day 02',
        title: 'Lake Saif-ul-Malook & Babusar Pass to Gilgit',
        description: 'Morning jeep safari to Lake Saif-ul-Malook. Cross the majestic Babusar Pass at 4,173m with warm snacks. Evening arrival in Gilgit.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Serena Gilgit'
      },
      {
        day: 'Day 03-05',
        title: 'Karimabad, Attabad Lake & Khunjerab Pass',
        description: 'Explore Baltit and Altit Forts, sunset tea at Eagle\'s Nest, boat safari on Attabad Lake, and journey to China Border at Khunjerab.',
        meals: 'All Breakfasts, Lunches & Dinners',
        stay: 'Luxus Grand Attabad Lake Resort & Serena Hunza'
      },
      {
        day: 'Day 06-08',
        title: 'Skardu Oasis, Kachura Lakes & Katpana Sand Dunes',
        description: 'Transfer to Skardu via the scenic Karakoram gorge road. Peaceful days at Shangrila Resort, Upper Kachura boat rides, and desert bonfire.',
        meals: 'All Meals Included',
        stay: 'Shangrila Resort Skardu'
      },
      {
        day: 'Day 09',
        title: 'Scenic Return Flight to Islamabad',
        description: 'VIP transfer to Skardu Airport for return flight to Islamabad. Relaxed evening dinner in Islamabad.',
        meals: 'Breakfast, Dinner',
        stay: 'Serena Islamabad'
      },
      {
        day: 'Day 10',
        title: 'Faisal Mosque & Departure',
        description: 'Morning tour of Faisal Mosque and Lok Virsa museum before airport drop-off.',
        meals: 'Breakfast Included',
        stay: 'Departure'
      }
    ],
    included: [
      'Private luxury Toyota Coaster / Executive HiAce with driver and fuel',
      'All 9 nights in family suites at 5-star properties',
      'All daily family meals with tailored kids menu options',
      'All excursion jeeps, boat charters, and entry permits',
      'Dedicated on-trip family care assistant'
    ],
    notIncluded: ['Personal extras'],
    accommodation: 'Serena Gilgit, Serena Hunza, Luxus Grand, Shangrila Resort.',
    transportation: 'Executive High-Roof Van / Luxury Coaster with reclining seats.',
    importantInfo: ['Special dietary requirements accommodated upon request.'],
    reviews: [
      {
        author: 'Usman & Fariha Sheikh',
        location: 'Multan, Pakistan',
        rating: 5,
        date: 'July 2025',
        comment: 'Traveling with three kids and my elderly parents felt effortless with VELMORA. Every hotel had hot water, delicious food, and wonderful rooms.'
      }
    ]
  },
  {
    id: 'swat-malam-jabba-retreat',
    slug: 'swat-malam-jabba-retreat',
    title: 'Swat Emerald Valley & Malam Jabba Retreat',
    destinationId: 'swat',
    location: 'Swat, Khyber Pakhtunkhwa, Pakistan',
    country: 'Pakistan',
    duration: '5 Days / 4 Nights',
    startingPrice: 850,
    priceFormatted: '$850',
    rating: 4.89,
    reviewCount: 68,
    travelersCount: '2 - 8 Guests',
    shortDescription: 'Ski slopes and chairlifts in Malam Jabba, Ushu pine forest in Kalam, and pristine Mahodand Lake.',
    fullOverview: 'Indulge in the pristine alpine charm of Swat. Ascend to Malam Jabba at 2,804m for skiing or scenic chairlift rides, wander through the towering deodar pines of Kalam and Ushu forest, and embark on a rugged jeep safari to the turquoise waters of Mahodand Lake.',
    categories: ['all', 'pakistan', 'budget', 'family'],
    heroImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Malam Jabba scenic chairlift and zipline adventure',
      'Jeep excursion to glacial Mahodand Lake with boat riding',
      'Walk through the majestic Ushu Pine Forest',
      'Explore ancient Buddhist archaeological sites in Swat',
      'Stay at Pearl Continental Malam Jabba Resort'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Islamabad via Swat Motorway to Malam Jabba',
        description: 'Depart Islamabad on the modern Swat Motorway through scenic tunnels. Ascend the mountain road to Malam Jabba resort at 2,800m. Enjoy panoramic mountain sunset.',
        meals: 'Lunch, Dinner',
        stay: 'Pearl Continental Malam Jabba'
      },
      {
        day: 'Day 02',
        title: 'Malam Jabba Chairlift & Winter Sports / Summer Zipline',
        description: 'Morning activities at the ski resort: chairlift rides, zipline over pine canopies, and alpine hiking. Afternoon high tea with valley views.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Pearl Continental Malam Jabba'
      },
      {
        day: 'Day 03',
        title: 'Transfer to Kalam Valley & Riverside Walk',
        description: 'Descend into the heart of Swat and follow the roaring Swat River up into Kalam Valley. Check in to river-facing pine chalets.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Walnut Heights Kalam'
      },
      {
        day: 'Day 04',
        title: 'Ushu Pine Forest & Mahodand Lake Jeep Safari',
        description: 'Board rugged 4x4 jeeps through dense deodar forests of Ushu and Matiltan to reach alpine Mahodand Lake. Fresh trout lunch beside the lake.',
        meals: 'Breakfast, Trout Picnic Lunch, Dinner',
        stay: 'Walnut Heights Kalam'
      },
      {
        day: 'Day 05',
        title: 'Swat Museum, White Palace Marghazar & Islamabad',
        description: 'Visit the historic White Palace built with marble from the same quarry as the Taj Mahal. Return to Islamabad via motorway.',
        meals: 'Breakfast, Lunch',
        stay: 'Departure'
      }
    ],
    included: [
      'Executive chauffeured SUV / Van with fuel and motorway tolls',
      '4 nights in 5-star mountain lodges (PC Malam Jabba & Walnut Heights)',
      'Daily breakfast, scenic lunch stops, and three-course dinners',
      '4x4 jeep hire for Mahodand Lake',
      'Chairlift passes at Malam Jabba'
    ],
    notIncluded: ['Ski equipment rental', 'Personal expenses'],
    accommodation: 'PC Malam Jabba and boutique resort in Kalam.',
    transportation: 'Chauffeured Toyota Fortuner / Grand Cabin.',
    importantInfo: ['Warm clothes required even in summer evenings.'],
    reviews: [
      {
        author: 'Naveed Akhtar',
        location: 'Islamabad, Pakistan',
        rating: 5,
        date: 'December 2025',
        comment: 'PC Malam Jabba in winter is pure Switzerland. VELMORA made the booking and transportation seamless.'
      }
    ]
  },
  {
    id: 'fairy-meadows-nanga-parbat',
    slug: 'fairy-meadows-nanga-parbat',
    title: 'Fairy Meadows & Nanga Parbat Base Camp Trek',
    destinationId: 'fairy-meadows',
    location: 'Gilgit-Baltistan, Pakistan',
    country: 'Pakistan',
    duration: '6 Days / 5 Nights',
    startingPrice: 990,
    priceFormatted: '$990',
    rating: 4.97,
    reviewCount: 62,
    travelersCount: '2 - 8 Guests',
    shortDescription: 'Thrilling Raikot bridge cliff jeep ride, alpine pine hike, and front-row camping beneath 8,126m Killer Mountain.',
    fullOverview: 'For adventure seekers who crave authentic mountain intimacy. After an exhilarating mountain jeep ascent from Raikot Bridge, hike into the magical alpine meadow beneath the soaring ice wall of Nanga Parbat (8,126m). Camp in cozy log cabins with panoramic views of the Raikot Glacier and Milky Way.',
    categories: ['all', 'pakistan', 'adventure'],
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'World-famous cliffside jeep adventure from Raikot Bridge to Tattu',
      'Trek through aromatic pine forests to Fairy Meadows plateau',
      'Hike to Beyal Camp and Nanga Parbat Base Camp (German Viewpoint)',
      'Stay in private wooden log cottages with wood-burning stoves',
      'Unrivaled night sky photography of the galactic core over Nanga Parbat'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Islamabad to Chilas / Raikot Bridge',
        description: 'Morning departure via Hazara Motorway and Babusar Pass or KKH to Raikot Bridge. Riverside dinner and briefing.',
        meals: 'Lunch, Dinner',
        stay: 'Shangrila Raikot Sarai'
      },
      {
        day: 'Day 02',
        title: 'Mountain Jeep to Tattu & Trek to Fairy Meadows',
        description: 'Morning 4x4 jeep ride along the thrilling cliff road to Tattu village. 3-hour guided hike through lush pine forests up to Fairy Meadows.',
        meals: 'Breakfast, Mountain Lunch, Dinner',
        stay: 'Raikot Sarai Fairy Meadows / Deluxe Log Cabin'
      },
      {
        day: 'Day 03',
        title: 'Trek to Beyal Camp & Nanga Parbat Viewpoint',
        description: 'Gentle day trek along the edge of Raikot Glacier to Beyal Camp. Continue to Viewpoint 1 for a direct, thundering view of Nanga Parbat\'s north face.',
        meals: 'Breakfast, Packed Lunch, Dinner',
        stay: 'Raikot Sarai Fairy Meadows'
      },
      {
        day: 'Day 04',
        title: 'Full Day Exploration & Reflection Lake',
        description: 'Leisurely day at the meadows. Photography at the crystal reflection pond, meeting local shepherds, and evening bonfire with mountain stories.',
        meals: 'Breakfast, Lunch, Bonfire Dinner',
        stay: 'Raikot Sarai Fairy Meadows'
      },
      {
        day: 'Day 05',
        title: 'Descend to Tattu & Transfer to Gilgit / Naran',
        description: 'Hike down to Tattu, jeep back to Raikot Bridge, and transfer to luxury resort in Gilgit or Naran for hot showers and relaxation.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Serena Gilgit / The Sarai Naran'
      },
      {
        day: 'Day 06',
        title: 'Return to Islamabad',
        description: 'Scenic return drive to Islamabad. Drop-off at home or airport.',
        meals: 'Breakfast, Lunch',
        stay: 'Departure'
      }
    ],
    included: [
      'Private vehicle from Islamabad roundtrip',
      'Dedicated local mountain jeep for Raikot-Tattu route',
      '5 nights accommodation including log cottages at Fairy Meadows',
      'Certified wilderness mountain guide and porter services for baggage',
      'All meals and camp tea/coffee'
    ],
    notIncluded: ['Personal hiking boots and sleeping bag (cottages provide warm duvets)'],
    accommodation: 'Deluxe private wooden log cabins at Raikot Sarai Fairy Meadows.',
    transportation: 'Chauffeured SUV + dedicated 4x4 mountain jeep.',
    importantInfo: ['Requires moderate walking fitness (3-4 hours of uphill hiking).'],
    reviews: [
      {
        author: 'Khurram Shahzad',
        location: 'Lahore, Pakistan',
        rating: 5,
        date: 'August 2025',
        comment: 'Standing at Beyal Camp with Nanga Parbat right in front was the most spiritual travel experience of my life. 10/10 execution by VELMORA.'
      }
    ]
  },
  // International Packages
  {
    id: 'dubai-luxury-escape',
    slug: 'dubai-luxury-escape',
    title: 'Dubai Royal Skyline & Desert Safari',
    destinationId: 'dubai',
    location: 'Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    duration: '5 Days / 4 Nights',
    startingPrice: 1850,
    priceFormatted: '$1,850',
    rating: 4.95,
    reviewCount: 92,
    travelersCount: '2 - 8 Guests',
    shortDescription: 'VIP Burj Khalifa access, private sunset yacht cruise in Dubai Marina, and luxury desert glamping.',
    fullOverview: 'Indulge in the finest hospitality of the Arabian Gulf. Stay in 5-star beachfront resorts on Palm Jumeirah, cruise the shimmering waters of Dubai Marina on a private luxury yacht, explore the futuristic Museum of the Future, and experience a private VIP red dune safari with gourmet barbecue dining.',
    categories: ['all', 'international', 'luxury', 'family'],
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'VIP Skip-the-line tickets to Burj Khalifa Level 148 Sky Lounge',
      '2-Hour private luxury yacht charter along Palm Jumeirah & Atlantis',
      'VIP Red Dunes Desert Safari in Land Cruiser with private Bedouin camp dinner',
      'Museum of the Future guaranteed entry tickets',
      'Luxury chauffeured airport transfers in Lexus / Mercedes'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Dubai & Private Yacht Cruise',
        description: 'Chauffeured airport pickup from DXB. Check in to Atlantis The Royal / Jumeirah Beach Hotel. Late afternoon 2-hour private yacht cruise in Dubai Marina with refreshments.',
        meals: 'Welcome Dinner on Board',
        stay: 'Atlantis The Royal / Palm Suite'
      },
      {
        day: 'Day 02',
        title: 'Burj Khalifa Level 148 & Dubai Mall Fountain VIP',
        description: 'Morning visit to Museum of the Future. Afternoon VIP access to Burj Khalifa At The Top SKY (Level 148). Prime dinner overlooking the Dubai Fountain.',
        meals: 'Breakfast, Dinner',
        stay: 'Atlantis The Royal'
      },
      {
        day: 'Day 03',
        title: 'Private Royal Desert Safari & Bedouin Glamping',
        description: 'Morning relaxed pool time. Afternoon pickup in private 4x4 for red dune bashing, falconry display, camel rides, and gourmet 5-star desert BBQ under starlight.',
        meals: 'Breakfast, Royal Desert Feast',
        stay: 'Bab Al Shams Desert Resort'
      },
      {
        day: 'Day 04',
        title: 'Old Dubai Heritage, Gold Souk & Luxury Shopping',
        description: 'Traditional Abra boat crossing on Dubai Creek. Private guide through the Gold and Spice Souks. Afternoon luxury personal shopping concierge in Mall of the Emirates.',
        meals: 'Breakfast, Lunch',
        stay: 'Atlantis The Royal'
      },
      {
        day: 'Day 05',
        title: 'Chauffeured Airport Transfer & Departure',
        description: 'Breakfast with sea views, late checkout, and private chauffeured transfer to Dubai International Airport.',
        meals: 'Breakfast Included',
        stay: 'Departure'
      }
    ],
    included: [
      '4 nights in 5-star luxury hotels (Palm Jumeirah & Bab Al Shams)',
      'Private luxury airport & city transfers throughout Dubai',
      'Private 2-hour yacht charter with crew and refreshments',
      'VIP Burj Khalifa & Museum of the Future tickets',
      'Private desert safari with entertainment and gourmet feast',
      'UAE Tourist Visa processing assistance'
    ],
    notIncluded: ['International flights (can be arranged upon request)', 'Tourism Dirham fee paid directly to hotel'],
    accommodation: 'Atlantis The Royal / Jumeirah Beach Hotel & Bab Al Shams.',
    transportation: 'Chauffeured Mercedes V-Class or Lexus ES.',
    importantInfo: ['Passports must be valid for at least 6 months.'],
    reviews: [
      {
        author: 'Saad & Mahnoor Hashmi',
        location: 'Lahore, Pakistan',
        rating: 5,
        date: 'January 2026',
        comment: 'VELMORA\'s Dubai VIP package made us feel like royalty. Skipping the Burj Khalifa lines and the private yacht at sunset was pure luxury.'
      }
    ]
  },
  {
    id: 'turkey-discovery-tour',
    slug: 'turkey-discovery-tour',
    title: 'Turkey Discovery & Cappadocia Sunrise Flight',
    destinationId: 'turkey',
    location: 'Istanbul & Cappadocia, Turkey',
    country: 'Turkey',
    duration: '7 Days / 6 Nights',
    startingPrice: 2100,
    priceFormatted: '$2,100',
    rating: 4.97,
    reviewCount: 118,
    travelersCount: '2 - 8 Guests',
    shortDescription: 'Sunrise hot air balloon in Cappadocia, Bosphorus private yacht, Hagia Sophia, and luxury cave suites.',
    fullOverview: 'Experience the magic where East embraces West. From the minarets and imperial palaces of Istanbul to the dreamlike subterranean cities and fairy chimneys of Cappadocia, this curated luxury Turkish holiday combines ancient splendor with bucket-list romance.',
    categories: ['all', 'international', 'honeymoon', 'luxury'],
    heroImage: turkeyHero,
    galleryImages: [
      turkeyHero,
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Guaranteed sunrise hot air balloon flight over Cappadocia canyons',
      'Stay in an authentic luxury cave suite at Museum Hotel Cappadocia',
      'Private sunset motor yacht cruise along the Istanbul Bosphorus strait',
      'Skip-the-line VIP historian tours of Hagia Sophia, Blue Mosque & Topkapi',
      'Domestic flights between Istanbul and Cappadocia included'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Istanbul & Bosphorus Welcome Dinner',
        description: 'Private airport transfer to your luxury hotel overlooking the Bosphorus. Evening welcome dinner featuring modern Ottoman cuisine.',
        meals: 'Dinner Included',
        stay: 'Ciragan Palace Kempinski / Four Seasons Bosphorus'
      },
      {
        day: 'Day 02',
        title: 'Imperial Istanbul: Hagia Sophia, Blue Mosque & Grand Bazaar',
        description: 'Full-day tour with licensed art historian. Private access to Hagia Sophia, the Blue Mosque, Topkapi Palace Treasury, and spice tasting in the Grand Bazaar.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Ciragan Palace Kempinski'
      },
      {
        day: 'Day 03',
        title: 'Private Bosphorus Yacht Cruise & Domestic Flight to Cappadocia',
        description: 'Morning private 2-hour cruise gliding between Europe and Asia. Afternoon domestic flight to Cappadocia. Check in to your cave suite.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Museum Hotel Cappadocia / Luxury Cave Suite'
      },
      {
        day: 'Day 04',
        title: 'Cappadocia Sunrise Hot Air Balloon & Fairy Chimneys',
        description: 'Early morning flight above Cappadocia as hundreds of balloons rise over Rose Valley. Champagne toast upon landing. Afternoon visit to Goreme Open Air Museum and Kaymakli Underground City.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Museum Hotel Cappadocia'
      },
      {
        day: 'Day 05',
        title: 'Love Valley Hike & Authentic Pottery Workshop in Avanos',
        description: 'Morning walk through Love Valley. Masterclass with 5th-generation terracotta pottery artisans in Avanos. Sunset tea overlooking Uchisar Castle.',
        meals: 'Breakfast, Lunch, Anatolian Feast',
        stay: 'Museum Hotel Cappadocia'
      },
      {
        day: 'Day 06',
        title: 'Return Flight to Istanbul & Hammam Ritual',
        description: 'Morning flight back to Istanbul. Afternoon indulgence at the historic Hurrem Sultan Hammam with 100% organic olive oil soaps and massage.',
        meals: 'Breakfast, Farewell Dinner',
        stay: 'Ciragan Palace Kempinski'
      },
      {
        day: 'Day 07',
        title: 'Farewell Istanbul & International Departure',
        description: 'Private transfer to Istanbul Airport (IST) for departure with sweet memories and Turkish delight souvenirs.',
        meals: 'Breakfast Included',
        stay: 'Departure'
      }
    ],
    included: [
      '6 nights in premier 5-star properties (Ciragan Palace & Museum Hotel Cave Suite)',
      'Domestic flights Istanbul-Cappadocia roundtrip',
      'Sunrise hot air balloon flight ticket in Cappadocia',
      'Private 2-hour Bosphorus yacht charter',
      'Licensed English-speaking professional art historian guide',
      'All gourmet meals, monument admissions, and chauffeured Mercedes transfers'
    ],
    notIncluded: ['International flights to Istanbul', 'Turkish eVisa fee'],
    accommodation: 'Ciragan Palace Kempinski Istanbul and Museum Hotel Cappadocia.',
    transportation: 'Chauffeured Mercedes Sprinter / Vito VIP.',
    importantInfo: ['Balloon flights are weather dependent; a second backup morning is built into the itinerary.'],
    reviews: [
      {
        author: 'Danish & Hira Zubair',
        location: 'Islamabad, Pakistan',
        rating: 5,
        date: 'October 2025',
        comment: 'Cappadocia was our dream honeymoon destination, and VELMORA executed every second flawlessly. The sunrise balloon flight was pure enchantment.'
      }
    ]
  },
  {
    id: 'maldives-honeymoon-escape',
    slug: 'maldives-honeymoon-escape',
    title: 'Maldives Overwater Paradise Honeymoon',
    destinationId: 'maldives',
    location: 'North Male Atoll, Maldives',
    country: 'Maldives',
    duration: '5 Days / 4 Nights',
    startingPrice: 2800,
    priceFormatted: '$2,800',
    rating: 4.99,
    reviewCount: 88,
    travelersCount: '2 Guests',
    shortDescription: 'Private pool overwater villa, scenic seaplane flight, nurse shark snorkeling, and sandbank candlelight dining.',
    fullOverview: 'The ultimate bespoke honeymoon experience. Step directly from your private sun deck into crystal-clear turquoise lagoons filled with colorful coral reefs. Savor world-class culinary excellence, floating breakfasts, and intimate sunset cruises designed exclusively for couples.',
    categories: ['all', 'international', 'honeymoon', 'luxury'],
    heroImage: maldivesHero,
    galleryImages: [
      maldivesHero,
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '4 nights in a luxury Overwater Villa with private plunge pool and glass floor',
      'Roundtrip scenic seaplane transfers directly from Velana Airport',
      'Private candlelight 5-course dinner on a secluded sandbank under the stars',
      'Complimentary floating breakfast served in your private plunge pool',
      'Couples sunset dolphin cruise with champagne/sparkling juice'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Seaplane Arrival & Overwater Villa Check-In',
        description: 'Warm airport greeting at Male. Scenic 35-minute seaplane flight soaring over azure atolls. Check in to your private overwater pool villa with welcome tropical fruit platter.',
        meals: 'Dinner Included',
        stay: 'Anantara Kihavah / Overwater Pool Villa'
      },
      {
        day: 'Day 02',
        title: 'Floating Breakfast & Coral Reef Snorkeling',
        description: 'Morning floating breakfast delivered to your villa pool. Guided afternoon snorkel along the house reef with sea turtles and harmless reef sharks.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Anantara Kihavah'
      },
      {
        day: 'Day 03',
        title: 'Couples Spa & Private Sunset Dolphin Cruise',
        description: '90-minute signature couples massage at the overwater spa with glass floor viewing panels. Board a private traditional wooden Dhoni for a sunset dolphin safari.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Anantara Kihavah'
      },
      {
        day: 'Day 04',
        title: 'Private Sandbank Dining Experience',
        description: 'Leisurely day of water sports, standup paddleboarding, and sunbathing. Sunset transfer to a private sandbank for an exclusive candlelight seafood dinner.',
        meals: 'Breakfast, Lunch, Sandbank 5-Course Dinner',
        stay: 'Anantara Kihavah'
      },
      {
        day: 'Day 05',
        title: 'Seaplane Departure to Male & Return Home',
        description: 'Final breakfast overlooking the lagoon. Seaplane transfer to Male International Airport for departing flights.',
        meals: 'Breakfast Included',
        stay: 'Departure'
      }
    ],
    included: [
      '4 nights in luxury Overwater Villa with private pool',
      'All-inclusive gourmet dining: breakfast, lunch, 5-course dinners, and beverages',
      'Roundtrip seaplane transfers between Male and resort',
      'One private sandbank romantic dinner setup',
      'One signature floating villa breakfast',
      'Complimentary non-motorized water sports gear'
    ],
    notIncluded: ['Scuba diving certification courses', 'International air tickets'],
    accommodation: '5-Star luxury overwater villa at Anantara Kihavah or Baros Maldives.',
    transportation: 'Scenic seaplane / luxury speedboat.',
    importantInfo: ['Complimentary 30-day visa on arrival for all nationalities.'],
    reviews: [
      {
        author: 'Ali & Sarah Khan',
        location: 'Karachi, Pakistan',
        rating: 5,
        date: 'November 2025',
        comment: 'VELMORA planned our dream honeymoon in the Maldives. The overwater villa and sandbank dinner were straight out of a movie. Absolutely priceless.'
      }
    ]
  },
  {
    id: 'azerbaijan-baku-peaks',
    slug: 'azerbaijan-baku-peaks',
    title: 'Azerbaijan Baku & Caucasus Peaks Tour',
    destinationId: 'azerbaijan',
    location: 'Baku & Gabala, Azerbaijan',
    country: 'Azerbaijan',
    duration: '6 Days / 5 Nights',
    startingPrice: 1350,
    priceFormatted: '$1,350',
    rating: 4.87,
    reviewCount: 54,
    travelersCount: '2 - 10 Guests',
    shortDescription: 'Flame Towers, UNESCO Old Town, Caspian promenade, and alpine cable cars in Gabala.',
    fullOverview: 'Experience the dynamic contrast of Azerbaijan: from the Parisian-style boulevards and futuristic Flame Towers of Baku to the ancient fire temples, mud volcanoes, and lush Caucasus peaks of Gabala.',
    categories: ['all', 'international', 'budget', 'family'],
    heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'UNESCO Icherisheher Old Town & Maiden Tower private tour',
      'Heydar Aliyev Center by Zaha Hadid architectural visit',
      'Excursion to Gobustan Rock Art & mysterious bubbling Mud Volcanoes',
      'Full-day trip to Gabala including Tufandag Mountain Cable Car & Nohur Lake',
      '5-Star luxury stay in Baku with Caspian Sea views'
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Baku & Night Panorama at Highland Park',
        description: 'Private airport pickup. Check in to 5-star hotel. Evening funicular ride to Highland Park for glittering views of the Flame Towers and Baku Bay.',
        meals: 'Dinner Included',
        stay: 'Fairmont Baku Flame Towers / Four Seasons Baku'
      },
      {
        day: 'Day 02',
        title: 'Icherisheher Old City & Heydar Aliyev Center',
        description: 'Guided walk through the medieval fortress walls of Icherisheher, Shirvanshahs Palace, and Maiden Tower. Afternoon visit to the iconic curves of Heydar Aliyev Center.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Fairmont Baku Flame Towers'
      },
      {
        day: 'Day 03',
        title: 'Ateshgah Fire Temple, Yanar Dag & Gobustan Mud Volcanoes',
        description: 'Explore the eternal flames of Yanar Dag and Zoroastrian Ateshgah temple. Afternoon 4x4 trip to Gobustan rock petroglyphs and active mud volcanoes.',
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Fairmont Baku Flame Towers'
      },
      {
        day: 'Day 04',
        title: 'Expedition to Gabala & Tufandag Mountain Cable Car',
        description: 'Scenic drive into the Caucasus foothills. Ride the 4-level Tufandag cable car to high alpine ridges. Boat ride on serene Lake Nohur.',
        meals: 'Breakfast, Traditional Shah Plov Lunch, Dinner',
        stay: 'Qafqaz Tufandag Mountain Resort'
      },
      {
        day: 'Day 05',
        title: 'Yeddi Gozel (Seven Beauties) Waterfall & Return to Baku',
        description: 'Visit the picturesque Seven Beauties Waterfall in dense beech forests. Return drive to Baku for luxury shopping at Nizami Street.',
        meals: 'Breakfast, Lunch, Farewell Dinner',
        stay: 'Fairmont Baku Flame Towers'
      },
      {
        day: 'Day 06',
        title: 'Caspian Boulevard & Airport Departure',
        description: 'Morning walk along Baku Seaside Boulevard. Private transfer to Heydar Aliyev International Airport.',
        meals: 'Breakfast Included',
        stay: 'Departure'
      }
    ],
    included: [
      '5 nights in 5-star luxury hotels (Fairmont Baku & Qafqaz Tufandag)',
      'Dedicated chauffeured executive Mercedes throughout Azerbaijan',
      'Licensed English-speaking professional guide',
      'All entry tickets, cable car passes, and 4x4 mud volcano jeeps',
      'Daily breakfast, lunches, and dinner with traditional Azerbaijani dishes'
    ],
    notIncluded: ['International flights', 'Azerbaijan ASAN eVisa ($26)'],
    accommodation: 'Fairmont Baku Flame Towers & Qafqaz Tufandag Mountain Resort.',
    transportation: 'Chauffeured Mercedes Sprinter / Vito.',
    importantInfo: ['Easy online e-visa processed within 3 hours.'],
    reviews: [
      {
        author: 'Rehan & Sana Jamil',
        location: 'Islamabad, Pakistan',
        rating: 5,
        date: 'November 2025',
        comment: 'Azerbaijan was so close, modern, and affordable. VELMORA made the entire trip smooth from airport pickup to our cable car passes in Gabala.'
      }
    ]
  }
];
