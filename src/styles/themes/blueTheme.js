import { extendTheme } from "@chakra-ui/react";

const blueTheme = extendTheme({
  colors: {
    brand: {
      50: "#90e0ef",  // elementos destacados
      100: "#00b4d8", // fondo de los elementos principales
      200: "#0077b6", // background cercano
      300: "#03045e", // background lejano
      400: "#000000", // letras negras
    },
  },
  config: {
    initialColorMode: 'dark', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default blueTheme;
