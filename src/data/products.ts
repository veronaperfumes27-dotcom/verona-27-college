import { Product } from '../types';
import heroNoirImg from '../assets/images/hero_verona27_noir_1791317341488.jpg';
import eclatImg from '../assets/images/product_verona_eclat_1791317355358.jpg';
import oudImg from '../assets/images/product_verona_oud_1791317367216.jpg';
import veilImg from '../assets/images/product_verona_veil_1791317378284.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-noir',
    slug: 'noir',
    name: 'VÉRONA 27 — NOIR',
    subtitle: 'Eau de Parfum',
    type: 'Eau de Parfum',
    defaultSize: '100 ml',
    availableSizes: [
      { size: '50 ml', price: 1699 },
      { size: '100 ml', price: 2499 }
    ],
    price: 2499,
    positioning: 'Dark, bold and magnetic.',
    description:
      'An intoxicating intersection of raw darkness and magnetic elegance. NOIR opens with crisp Calabrian bergamot cracked with crushed black peppercorn, yielding to smoky Tuscan leather and aged Atlas cedarwood. Grounded in smoldering grey amber and Haitian vetiver, NOIR is an indelible imprint that commands the room without whispering a word.',
    notes: {
      top: ['Bergamot', 'Black Pepper'],
      heart: ['Leather', 'Cedarwood'],
      base: ['Amber', 'Vetiver']
    },
    family: 'Woody Leather',
    longevity: '10–12 Hours',
    longevityScore: 9,
    sillage: 'Magnetic & Seductive Aura',
    sillageScore: 9,
    occasions: ['Evening Soirées', 'Date Night', 'Black Tie', 'Winter Evenings'],
    rating: 4.8,
    reviewCount: 148,
    isBestseller: true,
    image: heroNoirImg,
    reviews: [
      {
        id: 'rev-1',
        author: 'Arjun M.',
        location: 'Chennai',
        rating: 5,
        date: '2 weeks ago',
        comment:
          'NOIR has become my everyday signature. The longevity is genuinely impressive — I catch cedar and amber whispers 12 hours after applying.',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Vikram S.',
        location: 'Delhi',
        rating: 5,
        date: '1 month ago',
        comment:
          'Easily compares to niche European perfume houses that cost four times as much. The leather note in the drydown is exceptional.',
        verified: true
      },
      {
        id: 'rev-3',
        author: 'Tanvi K.',
        location: 'Hyderabad',
        rating: 4.5,
        date: '3 weeks ago',
        comment:
          'Bought this as an anniversary gift for my partner, but I end up borrowing it myself. Bold, smoky, and irresistible.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-eclat',
    slug: 'eclat',
    name: 'VÉRONA 27 — ÉCLAT',
    subtitle: 'Eau de Parfum',
    type: 'Eau de Parfum',
    defaultSize: '100 ml',
    availableSizes: [
      { size: '50 ml', price: 1499 },
      { size: '100 ml', price: 2299 }
    ],
    price: 2299,
    positioning: 'Bright, elegant and effortless.',
    description:
      'Sunlight suspended in heavy flacon glass. ÉCLAT is the pure expression of effortless coastal refinement tailored for modern life. Luminous sun-drenched Amalfi citrus and sparkling bergamot dance above a heart of blooming Grasse rose and dew-kissed white jasmine, finishing on soft cashmere musk and Madagascar bourbon vanilla.',
    notes: {
      top: ['Bergamot', 'Lemon'],
      heart: ['Jasmine', 'Rose'],
      base: ['Musk', 'Vanilla']
    },
    family: 'Floral Citrus',
    longevity: '8–10 Hours',
    longevityScore: 8,
    sillage: 'Luminous & Uplifting Trail',
    sillageScore: 8,
    occasions: ['Everyday Luxury', 'Executive Boardroom', 'Sunlit Brunches', 'Spring/Summer'],
    rating: 4.9,
    reviewCount: 92,
    isBestseller: false,
    image: eclatImg,
    reviews: [
      {
        id: 'rev-4',
        author: 'Priya R.',
        location: 'Bengaluru',
        rating: 5,
        date: '1 week ago',
        comment:
          'ÉCLAT feels incredibly elegant without being overpowering. Perfect for everyday wear in warm weather. I receive compliments constantly.',
        verified: true
      },
      {
        id: 'rev-5',
        author: 'Aarti V.',
        location: 'Pune',
        rating: 5,
        date: '3 weeks ago',
        comment:
          'Clean, sparkling citrus that transforms into a creamy vanilla rose. The balance is pure artistry.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-oud27',
    slug: 'oud-27',
    name: 'VÉRONA 27 — OUD 27',
    subtitle: 'Eau de Parfum',
    type: 'Eau de Parfum',
    defaultSize: '100 ml',
    availableSizes: [
      { size: '50 ml', price: 1999 },
      { size: '100 ml', price: 2999 }
    ],
    price: 2999,
    positioning: 'Rich, warm and unforgettable.',
    description:
      'An opulent tribute to timeless oriental perfumery elevated with contemporary precision. OUD 27 balances Kashmiri golden saffron and crushed green cardamom with a smoky heart of Taif rose and pure aged Cambodian oud. Rich Mysore sandalwood and crystalline golden amber linger on warm skin like liquid velvet.',
    notes: {
      top: ['Saffron', 'Cardamom'],
      heart: ['Rose', 'Oud'],
      base: ['Amber', 'Sandalwood']
    },
    family: 'Oriental Oud',
    longevity: '12–14 Hours',
    longevityScore: 10,
    sillage: 'Enveloping & Majestic',
    sillageScore: 10,
    occasions: ['Grand Soirées', 'Festive Celebrations', 'Winter Weddings', 'Memorable Nights'],
    rating: 4.9,
    reviewCount: 118,
    isBestseller: false,
    image: oudImg,
    reviews: [
      {
        id: 'rev-6',
        author: 'Rahul K.',
        location: 'Mumbai',
        rating: 5,
        date: '3 weeks ago',
        comment:
          'OUD 27 smells far more expensive than its price point. Deep, regal, and the sandalwood in the drydown is authentic Indian craftsmanship.',
        verified: true
      },
      {
        id: 'rev-7',
        author: 'Devendra B.',
        location: 'Jaipur',
        rating: 5,
        date: '1 month ago',
        comment:
          'One spray lasts past dinner into the following morning. Absolute masterclass in amber and oud harmony.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-veil',
    slug: 'veil',
    name: 'VÉRONA 27 — VEIL',
    subtitle: 'Eau de Parfum',
    type: 'Eau de Parfum',
    defaultSize: '100 ml',
    availableSizes: [
      { size: '50 ml', price: 1599 },
      { size: '100 ml', price: 2399 }
    ],
    price: 2399,
    positioning: 'Soft, mysterious and sophisticated.',
    description:
      'A gossamer cloak of whispered secrets and tactile intimacy. VEIL opens with dew-drenched Anjou pear spiced gently with crushed pink peppercorn, unfurling into powdery Florentine iris and blooming pink peony. A velvety cloud of Tahitian vanilla and skin-warm white musk creates an aura of quiet, irresistible mystery.',
    notes: {
      top: ['Pear', 'Pink Pepper'],
      heart: ['Iris', 'Peony'],
      base: ['Vanilla', 'White Musk']
    },
    family: 'Powdery Floral',
    longevity: '9–11 Hours',
    longevityScore: 8,
    sillage: 'Intimate Second-Skin Glow',
    sillageScore: 8,
    occasions: ['Intimate Evenings', 'Art Galleries', 'Rainy Afternoons', 'Candlelit Dinners'],
    rating: 4.7,
    reviewCount: 76,
    isBestseller: false,
    image: veilImg,
    reviews: [
      {
        id: 'rev-8',
        author: 'Meera S.',
        location: 'Kolkata',
        rating: 5,
        date: '2 weeks ago',
        comment:
          'VEIL has this dreamy, powdery iris note that feels so intimate and soothing. People lean in closer just to ask what I am wearing.',
        verified: true
      },
      {
        id: 'rev-9',
        author: 'Siddharth T.',
        location: 'Chandigarh',
        rating: 4.5,
        date: '4 weeks ago',
        comment:
          'Very refined and understated. It does not shout; it lingers gracefully on skin and cashmere scarves.',
        verified: true
      }
    ]
  }
];
