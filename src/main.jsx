import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import greenTheme from "./styles/themes/greenTheme";
import blueTheme from "./styles/themes/blueTheme";
import lightTheme from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme";
import darkBlueTheme from "./styles/themes/darkBlueTheme";

localStorage.removeItem("chakra-ui-color-mode");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={lightTheme}>
        <ColorModeScript
          initialColorMode={lightTheme.config.initialColorMode}
        />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
