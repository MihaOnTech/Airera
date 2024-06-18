import { extendTheme } from "@chakra-ui/react";

// Definición de la paleta de colores pastel para un tema oscuro
const darkTheme = extendTheme({
  colors: {
    brand: {
      100: "#00377e",  // Elementos destacados -
      200: "#444444", // Fondo de los elementos principales - 
      300: "#3c3c3c", // Background cercano - 
      400: "#222222", // Background lejano - 
      
    },
    warn: {
     100: "#d67605",
     200: "#b34871"
    },
    text: {
      bright: "#c9b7b8",
      light: "#706f6f",
      muted: "#444444",
      dark: "#000000"
    }
  },
  fontSizes: {
    xs: '10px',
    sm: '15px',
    md: '20px',
    lg: '25px',   
    xl: '30px',
    '2xl': '35px',
  },
  config: {
    initialColorMode: 'dark', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default darkTheme;
