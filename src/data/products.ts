import { Product } from '../types';
import table1 from '../assets/table 1.jpg';
import table2 from '../assets/table2.jpg';
import table3 from '../assets/table3.jpg';
import c1 from '../assets/photo2.jpg';
import c2 from '../assets/c22.jpg';
import c3 from '../assets/3.jpg';
import plato from '../assets/plato.jpg';
import pres from '../assets/pres.jpg';
import shel from '../assets/shelves.jpg';
import black1 from '../assets/Black/1.jpg';
import black2 from '../assets/Black/2.jpg';
import black4 from '../assets/Black/4.jpg';
import gold2 from '../assets/gold/2.jpg';
import gold3 from '../assets/gold/3.jpg';
import gold4 from '../assets/gold/4.jpg';
import gold5 from '../assets/gold/5.jpg';
import ocs1 from '../assets/ocs/1.jpg';
import ocs2 from '../assets/ocs/2.jpg';
import ocs3 from '../assets/ocs/3.jpg';
import tr1 from '../assets/trad/0.jpg';
import tr2 from '../assets/trad/1.jpg';
import tr3 from '../assets/trad/2.jpg';
import tr4 from '../assets/trad/3.jpg'



export const products: Product[] = 
  // Clocks
  [
    {
      id: 'clock-1',
      name: {
        ar: 'ساعة حائط – خلفية سوداء',
        fr: 'Horloge murale – fond noir'
      },
      description: {
        ar: 'ساعة حائط أنيقة بتباين قوي لمظهر فاخر.',
        fr: 'Une horloge murale chic avec un contraste intense pour un effet luxueux.'
      },
      discountedPrice: 299,
      originalPrice: 699,
      image: c1,
      images: [black1, black2, black4],
      category: 'clocks',
      qte: 4
    },
    {
      id: 'clock-4',
      name: {
        ar: 'ساعة حائط بزخارف الزليج والسجاد الأمازيغي',
        fr: 'Horloge Murale Zellige & Tapis Berbère'
      },
      description: {
        ar: 'تحفة فنية تجمع بين جمالية الزليج المغربي التقليدي وسحر النقوش الأمازيغية الأصيلة.',
        fr: 'Une création artistique unique mêlant la géométrie des zelliges marocains au charme des tapis berbères, pour une déco riche en culture.'
      },
      discountedPrice: 249,
      originalPrice: 599,
      image: tr1,
      images: [tr1, tr2, tr3, tr4],
      category: 'clocks',
      qte: 5
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
      discountedPrice: 299,
      originalPrice: 699,
      image: c2,
      images: [gold5, gold2, gold3, gold4],
      category: 'clocks',
      qte: 3
    },
    {
      id: 'clock-3',
      name: {
        ar: 'ساعة أبطال OCS — كأس العرش 2025',
        fr: 'Horloge Champions OCS — Coupe du Trône 2025'
      },
      description: {
        ar: 'خلّدوا الانتصار التاريخي لنادي أولمبيك آسفي مع هذه الساعة الفريدة، تكريمًا لأبطال اللقب.',
        fr: 'Immortalisez la victoire historique de l’Olympique Club de Safi avec cette horloge unique, hommage aux héros du titre.'
      },
      discountedPrice: 199,
      originalPrice: 599,
      image: ocs1,
      images: [ocs1, ocs2, ocs3],
      category: 'clocks',
      qte: 5
    },

  
    // Tables
    {
      id: 'table-1',
      name: {
        ar: 'مجموعة طاولات راتنج وخشب طبيعي',
        fr: 'Ensemble de Tables en Tranches de Bois & Résine'
      },
      description: {
        ar: 'ثلاث طاولات متداخلة بتصميم عضوي يجمع بين جمال الخشب الطبيعي ونقاء الراتنج الشفاف.',
        fr: 'Trio de tables gigognes au design organique, associant la noblesse du bois naturel à la transparence élégante de la résine.'
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
  
    // Étageres / Plateaux
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
        ar: 'صينية متعددة المستويات بلمسة زهرية',
        fr: 'Plateau en Fleurs Suspendues'
      },
      description: {
        ar: 'صينية أنيقة مصنوعة من طبقات شفافة تحبس الزهور داخلها لإضفاء لمسة طبيعية ساحرة.',
        fr: 'Un plateau unique à étages, incrusté de fleurs naturelles et de résine transparente.'
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
        ar: 'صوانٍ فنية من الراتنج والزهور',
        fr: 'Plateaux Artistiques en Résine Florale'
      },
      description: {
        ar: 'مجموعة صوانٍ يدوية التصميم بألوان جذابة وزهور مجففة، تضيف لمسة فنية فريدة.',
        fr: 'Ensemble de plateaux décoratifs aux formes organiques, infusés de couleurs et de fleurs séchées.'
      },
      discountedPrice: 350,
      originalPrice: 550,
      image: pres,
      category: 'etageres',
      qte: 0
    }
  ]
  