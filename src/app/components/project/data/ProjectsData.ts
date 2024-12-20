import assets from "@/common/assets/img/_index";



export const ProejectsLinks = [
  {
    name: 'Flexwork App',
    description:"Is a platform that allows users to find remote jobs in Latin America. It is a platform that connects companies with professionals who want to work.",
    year: '2024',
    href: 'https://flexworklatam.pro/',
    className: 'text-[var(--text-color-linkedIn)] border-[var(--border-primary)] hover:border-[var(--border-linkedIn)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25',
    img:`${assets.imgFlework}` ,
  },
  {
    name: 'Flexwork whitelist',
    description:"Is a microproject that allows users to leave their details to receive information about the launch of the Flexwork App.",
    year: '2024',
    href: 'https://flexwork-microproject.vercel.app/',
    className: 'text-[var(--text-color-github)] border-[var(--border-primary)] hover:border-[var(--border-github)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25',
    img:`${assets.imgWhitelist}` ,
  },
  {
    name: 'Coin Latam',
    description:"A real-time cryptocurrency reference site. It provides users with up to the minute crypto quotes.",
    year: '2024',
    href: 'https://instagram.com/julianvidela_?igshid=MzMyNGUyNmU2YQ==',
    className: 'text-[var(--text-color-instagram)] border-[var(--border-primary)] hover:border-[var(--border-instagram)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25',
    img: `${assets.imgCoinLatam}` ,
  },

];


