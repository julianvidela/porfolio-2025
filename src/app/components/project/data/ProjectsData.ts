import assets from "@/common/assets/img/_index";



export const ProejectsLinks = [
  { 
    id: 1,
    name: 'Flexwork App',
    description:"Is a platform that allows users to find remote jobs in Latin America. It is a platform that connects companies with professionals who want to work.",
    extendedDescription:"Flexwork App es una plataforma revolucionaria diseñada para conectar empresas con profesionales que buscan trabajar de forma remota en América Latina. La aplicación no solo facilita la búsqueda de oportunidades laborales, sino que también proporciona herramientas avanzadas para personalizar las búsquedas, filtrar según las preferencias del usuario, y aplicar directamente a las ofertas más relevantes. Con una interfaz moderna e intuitiva, Flexwork App prioriza la experiencia del usuario, asegurando que tanto empleadores como candidatos puedan interactuar de manera eficiente. Además, ofrece recursos adicionales como guías de trabajo remoto, recomendaciones para entrevistas virtuales y asesoramiento en la construcción de un perfil profesional atractivo. La seguridad es una prioridad, garantizando la verificación de empresas y la protección de datos personales. Esta plataforma es ideal para quienes buscan flexibilidad laboral, una mejor calidad de vida, y nuevas oportunidades en el dinámico mercado laboral de la región. Desde freelancers hasta grandes empresas, Flexwork App se posiciona como el puente perfecto para construir relaciones laborales exitosas y sostenibles.",
    year: '2024',
    href: 'https://flexworklatam.pro/',
    className: 'text-[var(--text-color-linkedIn)] border-[var(--border-primary)] hover:border-[var(--border-linkedIn)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25',
    img:`${assets.imgFlework}` ,
  },
  {
    id: 2,
    name: 'Flexwork whitelist',
    description:"Is a microproject that allows users to leave their details to receive information about the launch of the Flexwork App.",
    extendedDescription:"",
    year: '2024',
    href: 'https://flexwork-microproject.vercel.app/',
    className: 'text-[var(--text-color-github)] border-[var(--border-primary)] hover:border-[var(--border-github)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25',
    img:`${assets.imgWhitelist}` ,
  },
  {
    id: 3,
    name: 'Coin Latam',
    description:"A real-time cryptocurrency reference site. It provides users with up to the minute crypto quotes.",
    extendedDescription:"",
    year: '2024',
    href: 'https://instagram.com/julianvidela_?igshid=MzMyNGUyNmU2YQ==',
    className: 'text-[var(--text-color-instagram)] border-[var(--border-primary)] hover:border-[var(--border-instagram)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25',
    img: `${assets.imgCoinLatam}`,

  },

];


