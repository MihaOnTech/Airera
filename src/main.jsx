import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import greenTheme from "./styles/greenTheme";
import blueTheme from "./styles/blueTheme";
import lightTheme from "./styles/lightTheme";
import darkPastelTheme from "./styles/darkTheme";

localStorage.removeItem("chakra-ui-color-mode");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={darkPastelTheme}>
        <ColorModeScript
          initialColorMode={darkPastelTheme.config.initialColorMode}
        />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
