import { extendTheme } from "@chakra-ui/react";

// Definición de la paleta de colores pastel para un tema oscuro
const darkPastelTheme = extendTheme({
  colors: {
    brand: {
      50: "#6D6875",  // Elementos destacados - Lavanda oscuro
      100: "#2A9D8F", // Fondo de los elementos principales - Azul oscuro apagado
      200: "#355070", // Background cercano - Verde turquesa suave
      300: "#264653", // Background lejano - Azul grisáceo profundo
      400: "black", // Letras - Amarillo pastel suave para contraste en temas oscuros
    },
  },
  config: {
    initialColorMode: 'dark', // Modo de color inicial
    useSystemColorMode: false, // No usar el modo de color del sistema
  },
});

export default darkPastelTheme;
