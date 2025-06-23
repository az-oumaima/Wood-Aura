import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: { [lang: string]: { [key: string]: string } } = {
  ar: {
    // Header
    'header.delivery': 'التوصيل بالمجان والدفع عند الاستلام',

    // Hero
    'hero.title': 'مصنوعة بعناية للحظات لا تُنسى',
    'hero.subtitle': 'قطع خشبية ومن الراتنج مصنوعة يدوياً لترقية مساحتك',
    'hero.explore': 'استكشف منتجاتنا',
    'hero.order': 'اطلب الآن',
    
    // About
    'about.title': 'حول وود أورا',
    'about.description1': 'وُلدت من حب عميق لجمال الطبيعة الخام والسحر الذي يحدث عندما يلتقي الخشب بالراتنج، تخلق وود أورا قطعاً فريدة تحكي قصصاً. كل إبداع هو تأمل في الحرفية، حيث تمتزج تقاليد النجارة القديمة مع فن الراتنج الحديث.',
    'about.description2': 'شغفنا يكمن في تحويل الخشب المستدام إلى قطع فنية وظيفية تجلب الدفء والشخصية إلى مساحتك. كل نمط حبيبات، كل دوامة راتنج، كل حافة مصقولة بعناية تعكس التزامنا بالتميز واحترامنا للمواد الطبيعية التي نعمل بها.',
    'about.handcrafted': 'مصنوعة يدوياً بحب',
    'about.handcrafted.desc': 'كل قطعة فريدة، مصنوعة بعناية فائقة',
    'about.sustainable': 'مواد مستدامة',
    'about.sustainable.desc': 'خشب مصدره مسؤول وراتنج صديق للبيئة',
    'about.excellence': 'التميز الفني',
    'about.excellence.desc': 'فن وظيفي يرقي أي مساحة داخلية',
    
    // Store
    'store.title': 'متجرنا',
    'store.subtitle': 'مجموعة طاولات راتنج وخشب طبيعي',
    'store.all': 'الكل',
    'store.clocks': 'الساعات',
    'store.tables': 'الطاولات',
    'store.etageres': 'الرفوف',
    'store.mad': 'درهم',
    'store.buy': 'اشتري الآن',
    'store.free.delivery': 'التوصيل بالمجان',
    'store.cash.delivery': 'الدفع عند الاستلام',
    
    // Order Form
    'order.title': 'اطلب منتجك',
    'order.fullname': 'الاسم الكامل',
    'order.phone': 'رقم الهاتف',
    'order.city': 'المدينة',
    'order.message': 'رسالة اختيارية',
    'order.submit': 'إرسال الطلب',
    'order.close': 'إغلاق',
    'order.success': 'تم إرسال طلبك بنجاح!',
    'order.success.desc': 'سنتواصل معك خلال 24 ساعة لتأكيد التفاصيل.',
    'order.out_of_stock': 'غير متوفر حالياً',
    
    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا الراضون عن قطع وود أورا.',
    'testimonials.cta': 'ابدأ طلبك اليوم',
    
    // Footer
    'footer.description': 'صناعة تحف خشبية وراتنج فريدة تجلب الجمال الطبيعي والأناقة الفنية إلى مساحتك. كل قطعة تحكي قصة من الشغف والحرفية وحب المواد الطبيعية.',
    'footer.made.morocco': 'صُنع بحب في المغرب',
    'footer.contact': 'اتصل بنا',
    'footer.follow': 'تابع حرفتنا',
    'footer.follow.desc': 'شاهد أحدث إبداعاتنا وعملية الصناعة وعروض العملاء على إنستغرام.',
    'footer.order.now': 'اطلب الآن',
    'footer.copyright': '© 2024 وود أورا. جميع الحقوق محفوظة. مصنوعة بشغف.',
  },
  fr: {
    // Header
    'woodaura': 'WoodAura',
    'language': 'Langue',
    'header.delivery': 'Livraison gratuite et paiement à la livraison',

    // Hero
    'hero.title': 'Créé avec Soin pour des Moments Mémorables',
    'hero.subtitle': 'Pièces artisanales en bois et résine pour sublimer votre espace',
    'hero.explore': 'Explorez nos Créations',
    'hero.order': 'Commander',
    
    // About
    'about.title': 'À Propos de WoodAura',
    'about.description1': 'Née d\'un amour profond pour la beauté brute de la nature et la magie qui se produit quand le bois rencontre la résine, WoodAura crée des pièces uniques qui racontent des histoires. Chaque création est une méditation sur l\'artisanat, où les traditions ancestrales de menuiserie se mélangent à l\'art moderne de la résine.',
    'about.description2': 'Notre passion réside dans la transformation du bois durable en pièces d\'art fonctionnelles qui apportent chaleur et caractère à votre espace. Chaque motif de grain, chaque tourbillon de résine, chaque bord soigneusement poncé reflète notre engagement envers l\'excellence et notre respect pour les matériaux naturels avec lesquels nous travaillons.',
    'about.handcrafted': 'Fait Main avec Amour',
    'about.handcrafted.desc': 'Chaque pièce est unique, faite avec attention aux détails',
    'about.sustainable': 'Matériaux Durables',
    'about.sustainable.desc': 'Bois d\'origine responsable et résines écologiques',
    'about.excellence': 'Excellence Artistique',
    'about.excellence.desc': 'Art fonctionnel qui sublime tout espace intérieur',
    
    // Store
    'store.title': 'Notre Boutique',
    'store.subtitle': 'Découvrez notre collection signature de pièces artisanales',
    'store.all': 'Tout',
    'store.clocks': 'Horloges',
    'store.tables': 'Tables',
    'store.etageres': 'Étagères',
    'store.mad': 'MAD',
    'store.buy': 'Acheter',
    'store.free.delivery': 'Livraison gratuite',
    'store.cash.delivery': 'Paiement à la livraison',
    
    // Order Form
    'order.title': 'Commandez votre produit',
    'order.fullname': 'Nom complet',
    'order.phone': 'Numéro de téléphone',
    'order.city': 'Ville',
    'order.message': 'Message optionnel',
    'order.submit': 'Envoyer la commande',
    'order.close': 'Fermer',
    'order.success': 'Votre commande a été envoyée avec succès !',
    'order.success.desc': 'Nous vous contacterons dans les 24 heures pour confirmer les détails.',
    'order.out_of_stock': 'Rupture de stock',
    
    // Testimonials
    'testimonials.title': 'Ce que Disent nos Clients',
    'testimonials.subtitle': 'Ne nous croyez pas sur parole. Voici ce que nos clients satisfaits disent de leurs pièces WoodAura.',
    'testimonials.cta': 'Commencez votre commande aujourd\'hui',
    
    // Footer
    'footer.description': 'Création de chefs-d\'œuvre uniques en bois et résine qui apportent beauté naturelle et élégance artistique à votre espace. Chaque pièce raconte une histoire de passion, d\'artisanat et d\'amour pour les matériaux naturels.',
    'footer.made.morocco': 'Fait avec amour au Maroc',
    'footer.contact': 'Nous Contacter',
    'footer.follow': 'Suivez Notre Artisanat',
    'footer.follow.desc': 'Découvrez nos dernières créations, le processus de fabrication et les présentations clients sur Instagram.',

    'footer.order.now': 'Commander Maintenant',
    'footer.copyright': '© 2024 WoodAura. Tous droits réservés. Fait avec passion.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};