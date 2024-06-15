import { extendTheme } from "@chakra-ui/react";

// Definición de la paleta de colores pastel
const lightTheme = extendTheme({
  colors: {
    brand: {
      50: "#FFE6E6",  // Elementos destacados - Rosa claro pastel
      100: "#FFF3CC", // Fondo de los elementos principales - Amarillo claro pastel
      200: "#CCF2FF", // Background cercano - Azul claro pastel
      300: "#D1E8E4", // Background lejano - Verde menta claro pastel
      400: "#2D3748", // Letras - Gris oscuro para buen contraste
    },
  },
  config: {
    initialColorMode: 'light', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default lightTheme;
