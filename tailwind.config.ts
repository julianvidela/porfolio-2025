// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/styles/**/*.{css}",
    
//   ],
//   theme: {
//     extend: {
//       colors: {
//         backgroundImage: {
//           'custom-gradient': 'linear-gradient(29deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 25%)',
//         },
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css}",
    // Asegúrate de que Tailwind procese archivos en cualquier otra carpeta que uses para tus componentes o archivos de estilo
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Esta línea garantiza que todos los archivos en 'src' sean procesados
  ],
  theme: {
    extend: {
      colors: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(29deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 25%)',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;

