import fs from 'fs';
import path from 'path';

const enPagePath = path.join(process.cwd(), 'app', '(en)', 'page.tsx');
const enContent = fs.readFileSync(enPagePath, 'utf8');

const translations = {
  es: {
    "The Best Free Online Photo Editor — No Software, No Sign-Up": "El Mejor Editor de Fotos Online Gratis — Sin Software, Sin Registro",
    "Edit Photos": "Editar Fotos",
    "Instantly": "Al Instante",
    "Right in Your Browser": "Directo en tu Navegador",
    "Resize, compress, remove backgrounds, and add text": "Redimensionar, comprimir, eliminar fondos y añadir texto",
    "Photo Editor": "Editor de Fotos",
    "Bulk BG Remover": "Eliminador de Fondo Masivo",
    "Upload Your Photo": "Sube Tu Foto",
    "Drop your image here!": "¡Suelta tu imagen aquí!",
    "Choose Image": "Elegir Imagen",
    "All Free": "Todo Gratis",
    "Trusted by 1M+ users worldwide": "Confiado por más de 1M de usuarios",
    "Ready to Edit Your Photos?": "¿Listo para Editar tus Fotos?",
    "Open Photo Editor →": "Abrir Editor de Fotos →",
    "Browse All 40+ Tools": "Navegar más de 40 Herramientas",
    "Frequently Asked Questions": "Preguntas Frecuentes",
    "PhotoResizerAI": "PhotoResizerAI",
  },
  fr: {
    "The Best Free Online Photo Editor — No Software, No Sign-Up": "Le Meilleur Éditeur de Photos en Ligne Gratuit",
    "Edit Photos": "Modifier des Photos",
    "Instantly": "Instantanément",
    "Right in Your Browser": "Directement dans votre Navigateur",
    "Resize, compress, remove backgrounds, and add text": "Redimensionnez, compressez, supprimez les fonds et ajoutez du texte",
    "Photo Editor": "Éditeur de Photos",
    "Bulk BG Remover": "Suppresseur de Fond en Masse",
    "Upload Your Photo": "Téléchargez Votre Photo",
    "Drop your image here!": "Déposez votre image ici !",
    "Choose Image": "Choisir une Image",
    "All Free": "Tout Gratuit",
    "Trusted by 1M+ users worldwide": "Approuvé par plus de 1M d'utilisateurs",
    "Ready to Edit Your Photos?": "Prêt à Modifier vos Photos ?",
    "Open Photo Editor →": "Ouvrir l'Éditeur de Photos →",
    "Browse All 40+ Tools": "Parcourir plus de 40 Outils",
    "Frequently Asked Questions": "Foire Aux Questions",
  }
};

function generatePage(lang) {
  let content = enContent;
  
  const t = translations[lang];
  for (const [enStr, langStr] of Object.entries(t)) {
    content = content.replace(new RegExp(enStr, 'g'), langStr);
  }

  // Adjust imports relative to `app/[lang]/page.tsx`
  // `app/(en)/page.tsx` uses `../../lib/schema`. For `app/es/page.tsx`, it's the same.
  
  fs.writeFileSync(path.join(process.cwd(), 'app', lang, 'page.tsx'), content);
}

generatePage('es');
generatePage('fr');
console.log('Successfully generated es and fr pages.');
