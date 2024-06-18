import { extendTheme } from "@chakra-ui/react";

const darkBlueTheme = extendTheme({
  colors: {
    brand: {
      50: "#b4e5ec",  // elementos destacados
      100: "#38ccdf", // fondo de los elementos principales
      200: "#0cb7d1", // background cercano
      300: "#00418b", // background lejano
      400: "#000000", // letras negras
      500: "#b4e5ec", // Advertencia
    },
  },
  config: {
    initialColorMode: 'dark', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default darkBlueTheme;
