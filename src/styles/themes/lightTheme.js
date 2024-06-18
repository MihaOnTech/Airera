import { extendTheme } from "@chakra-ui/react";

// Definición de la paleta de colores pastel
const lightTheme = extendTheme({
  colors: {
    brand: {
      50: "#adf7b6",  // Elementos destacados - Rosa claro pastel
      100: "#fcf5c7", // Fondo de los elementos principales - Amarillo claro pastel
      200: "#ffee93", // Background cercano - Azul claro pastel
      300: "#ffc09f", // Background lejano - Verde menta claro pastel
      400: "#a0ced9", // Letras - Gris oscuro para buen contraste
    },
  },
  config: {
    initialColorMode: 'light', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default lightTheme;
