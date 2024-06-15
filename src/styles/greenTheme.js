import { extendTheme } from "@chakra-ui/react";

const greenTheme = extendTheme({
  colors: {
    brand: {
      50: "#D6F8D8",  // elementos destacados
      100: "#ACDEAA", // fondo de los elementos principales
      200: "#8FBBAF", // background cercano
      300: "#6B7B8E", // background lejano
      400: "#000000", // letras negras
    },
  },
  config: {
    initialColorMode: 'dark', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default greenTheme;
