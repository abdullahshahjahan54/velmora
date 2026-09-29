import { GalleryItem } from '../types/travel';
import hunzaHero from '../assets/images/velmora_hero_hunza_1790689476526.jpg';
import skarduHero from '../assets/images/velmora_experience_skardu_1790689492734.jpg';
import maldivesHero from '../assets/images/velmora_maldives_luxury_1790689505749.jpg';
import turkeyHero from '../assets/images/velmora_turkey_cappadocia_1790689523801.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Cathedral Passu Cones at Twilight',
    category: 'Mountains',
    location: 'Hunza Valley, Gilgit-Baltistan',
    image: hunzaHero,
    description: 'The iconic jagged granite needles of Passu Cones bathed in the golden hues of sunset along the Karakoram Highway.'
  },
  {
    id: 'gal-2',
    title: 'Alpine Desert Meets Glacial Peaks',
    category: 'Adventure',
    location: 'Katpana Desert, Skardu',
    image: skarduHero,
    description: 'One of the world\'s highest cold deserts, where rolling sand dunes meet crystalline alpine lakes.'
  },
  {
    id: 'gal-3',
    title: 'Secluded Overwater Sanctuary',
    category: 'Hotels',
    location: 'North Male Atoll, Maldives',
    image: maldivesHero,
    description: 'Private 5-star overwater pool bungalows resting above vibrant marine life in turquoise Indian Ocean lagoons.'
  },
  {
    id: 'gal-4',
    title: 'Cappadocia Sunrise Ascents',
    category: 'Experiences',
    location: 'Goreme, Cappadocia, Turkey',
    image: turkeyHero,
    description: 'A hundred colorful hot air balloons greeting the dawn over the ancient rock formations and fairy chimneys.'
  },
  {
    id: 'gal-5',
    title: 'Attabad Lake Turquoise Waters',
    category: 'Mountains',
    location: 'Upper Hunza, Pakistan',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'Speedboating across the glacial blue waters of Attabad Lake framed by vertical granite walls.'
  },
  {
    id: 'gal-6',
    title: 'Pristine Maldives White Coral Sand',
    category: 'Beaches',
    location: 'Ari Atoll, Maldives',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Powder-soft white sands and translucent turquoise waters along private uninhabited sandbanks.'
  },
  {
    id: 'gal-7',
    title: 'Ancient 800-Year-Old Baltit Fort',
    category: 'Culture',
    location: 'Karimabad, Hunza',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Tibetan-influenced wooden architectural marvel once home to the hereditary Mir of Hunza.'
  },
  {
    id: 'gal-8',
    title: 'Dubai Marina Skyline at Dusk',
    category: 'Cities',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'Illuminated luxury skyscrapers towering above superyachts cruising through Dubai Marina.'
  },
  {
    id: 'gal-9',
    title: 'Himalayan Organic Trout Barbecue',
    category: 'Food',
    location: 'Kalam, Swat Valley',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    description: 'Fresh trout caught from glacial streams, seasoned with native mountain spices and char-grilled riverside.'
  },
  {
    id: 'gal-10',
    title: 'Fairytale Meadows & Nanga Parbat',
    category: 'Adventure',
    location: 'Fairy Meadows, Gilgit-Baltistan',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    description: 'Front-row view of the colossal 8,126m Killer Mountain towering above peaceful pine-fringed grasslands.'
  },
  {
    id: 'gal-11',
    title: 'Four Centuries of Royal Living',
    category: 'Hotels',
    location: 'Serena Shigar Fort, Skardu',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'A meticulously restored 17th-century Rajas palace transformed into one of Pakistan\'s finest heritage hotels.'
  },
  {
    id: 'gal-12',
    title: 'Caspian Sea Promenade & Flame Towers',
    category: 'Cities',
    location: 'Baku, Azerbaijan',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern curved architecture and eternal flames rising above the historic Caspian seaside boulevard.'
  }
];
