import { extendTheme } from "@chakra-ui/react";

const blueTheme = extendTheme({
  colors: {
    brand: {
      50: "#4AB1D8",  // elementos destacados
      100: "#527CBC", // fondo de los elementos principales
      200: "#5256BC", // background cercano
      300: "#3A3E98", // background lejano
      400: "#000000", // letras negras
    },
  },
  config: {
    initialColorMode: 'dark', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default blueTheme;
