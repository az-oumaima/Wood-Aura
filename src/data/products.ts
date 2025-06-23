import { Product } from '../types';
import table1 from '../assets/table 1.jpg';
import table2 from '../assets/table2.jpg';
import table3 from '../assets/table3.jpg';
import c1 from '../assets/photo2.jpg';
import c2 from '../assets/2.jpg';
import c3 from '../assets/3.jpg';
import plato from '../assets/plato.jpg';
import pres from '../assets/pres.jpg';
import shel from '../assets/shelves.jpg';

export const products: Product[] = [
  // Clocks
  {
    id: 'clock-1',
    name: {
      ar: 'ساعة حائط خشب الجوز والراتنج',
      fr: 'Horloge Murale en noir'
    },
    description: {
      ar: 'ساعة حائط فنية مع تصميم راتنج أزرق مذهل',
      fr: 'Horloge murale dorée'
    },
    discountedPrice: 499,
    originalPrice: 899,
    image: c1,
    category: 'clocks',
    qte: 4
  },
  {
    id: 'clock-2',
    name: {
      ar: 'ساعة طاولة راتنج ذهبي',
      fr: 'Horloge Murale Dorée'
    },
    description: {
      ar: 'ساعة طاولة أنيقة مع لمسات راتنج ذهبية',
      fr: 'Horloge de table élégante avec touches résine dorée'
    },
    discountedPrice: 499,
    originalPrice: 899,
    image: c2,
    category: 'clocks',
    qte: 0
  },
  {
    id: 'clock-3',
    name: {
      ar: 'ساعة حائط خشب الزيتون',
      fr: 'Horloge Murale Bois d\'Olivier'
    },
    description: {
      ar: 'ساعة حائط طبيعية من خشب الزيتون المغربي',
      fr: 'Horloge murale naturelle en bois d\'olivier marocain'
    },
    discountedPrice: 399,
    originalPrice: 599,
    image: c3,
    category: 'clocks',
    qte: 0
  },

  // Tables
  {
    id: 'table-1',
    name: {
      ar: 'طاولة نهر الراتنج',
      fr: 'Table Rivière de Résine'
    },
    description: {
      ar: 'طاولة طعام مع نهر راتنج أزرق مذهل',
      fr: 'Table à manger avec rivière de résine bleue'
    },
    discountedPrice: 1200,
    originalPrice: 1500,
    image: table1, 
    category: 'tables',
    qte: 0
  },
  {
    id: 'table-2',
    name: {
      ar: 'طاولة قهوة راتنج شفاف',
      fr: 'Table Basse Résine Transparente'
    },
    description: {
      ar: 'طاولة قهوة عصرية مع راتنج شفاف وخشب طبيعي',
      fr: 'Table basse moderne avec résine claire et bois naturel'
    },
    discountedPrice: 850,
    originalPrice: 1050,
    image: table2,
    category: 'tables',
    qte: 0

  },
  {
    id: 'table-3',
    name: {
      ar: 'طاولة جانبية فنية',
      fr: 'Table d\'Appoint Artistique'
    },
    description: {
      ar: 'طاولة جانبية صغيرة مع تصميم راتنج ملون',
      fr: 'Petite table d\'appoint avec design résine colorée'
    },
    discountedPrice: 650,
    originalPrice: 850,
    image: table3,
    category: 'tables',
    qte: 0

  },

  // Étagères
  {
    id: 'etagere-1',
    name: {
      ar: 'رف خشب البلوط المينيمالي',
      fr: 'Étagère Chêne Minimaliste'
    },
    description: {
      ar: 'رف حائط أنيق مع تفاصيل راتنج دقيقة',
      fr: 'Étagère murale élégante avec détails résine subtils'
    },
    discountedPrice: 600,
    originalPrice: 800,
    image: shel,
    category: 'etageres',
    qte: 0
  },
  {
    id: 'etagere-2',
    name: {
      ar: 'رف زاوية متعدد المستويات',
      fr: 'Étagère d\'Angle Multi-niveaux'
    },
    description: {
      ar: 'رف زاوية عملي مع ثلاث مستويات وتصميم عصري',
      fr: 'Étagère d\'angle pratique à trois niveaux design moderne'
    },
    discountedPrice: 480,
    originalPrice: 680,
    image: plato,
    category: 'etageres',
    qte: 0
  },
  {
    id: 'etagere-3',
    name: {
      ar: 'رف كتب راتنج ملون',
      fr: 'Bibliothèque Résine Colorée'
    },
    description: {
      ar: 'رف كتب كبير مع أقسام راتنج ملونة',
      fr: 'Grande bibliothèque avec sections résine colorées'
    },
    discountedPrice: 350,
    originalPrice: 550,
    image: pres,
    category: 'etageres',
    qte: 0
  }
];