import { Guitar } from '../models/guitar';

export const GUITARS: Guitar[] = [
  {
    id: 1,
    model: 'Stratocaster',
    brand: 'Fender',
    price: 1499.99,
    inStock: true,
    description: 'The Fender Stratocaster is a classic electric guitar, loved for its sleek design and rich, versatile sound.' +
      ' It\'s perfect for rock, blues, and funk, giving you that signature tone that\'s made it a favorite for decades.',
    imageUrl: 'https://archive.org/download/fender-png-fender-standard-stratocaster-black-pf-600/fender-png-fender-standard-stratocaster-black-pf-600.png'
  },
  {
    id: 2,
    model: 'Les Paul',
    brand: 'Gibson',
    price: 999.99,
    inStock: true,
    description: 'The Gibson Les Paul is a powerhouse guitar known for its thick, warm tone and sustain. It\'s perfect for rock, metal,' +
      ' and jazz, offering rich sound and unmatched playability',
    imageUrl: "https://www.pngkey.com/png/full/495-4958566_vintage-custom-guitar-brands-les-studio-paul-1958.png"
  },
  {
    id: 3,
    model: 'SG',
    brand: 'Gibson',
    price: 599.99,
    inStock: false,
    imageUrl: "https://cdn.long-mcquade.com/files/349876/lg_8626f7c159855f5a4acae32b31a7eb87.png"
  },
  {
    id: 4,
    model: 'Telecaster',
    brand: 'Fender',
    price: 1199.99,
    inStock: true,
    description: 'The Fender Telecaster is a timeless electric guitar celebrated for its sharp, bright tone and simplicity.' +
      ' Ideal for country, rock, and blues, it delivers a distinctive sound with excellent clarity and a solid, reliable feel.',
    imageUrl: "https://www.fmicassets.com/Damroot/Lg/10002/9235000563_gtr_frt_001_rr.png"
  },
  {
    id: 5,
    model: 'Dot Studio',
    brand: 'Epiphone',
    price: 399.99,
    inStock: true,
    description: 'The Epiphone Studio Dot is a stylish semi-hollow body guitar that offers a warm, resonant tone with excellent sustain.' +
      ' Perfect for blues, jazz, and rock, its smooth playability make it a great choice for musicians seeking rich, full sound.',
    imageUrl: "https://www.stars-music.com/medias/epiphone/cropped-dot-ch-53958.png"
  },
  {
    id: 6,
    model: 'D-28',
    brand: 'Martin',
    price: 2999.99,
    inStock: true,
    description: 'The Martin D-28 is a renowned acoustic guitar celebrated for its deep, powerful sound and exceptional craftsmanship.' +
      ' It delivers rich bass response and clear highs, making it a top choice for bluegrass, folk, and singer-songwriters.',
    imageUrl: "https://worshiponline.com/wp-content/uploads/2023/01/Martin-e1673530576484.png"
  }
];
