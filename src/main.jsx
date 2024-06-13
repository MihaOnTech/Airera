import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { extendTheme, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {localStorage.setItem('chakra-ui-color-mode', 'dark')}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
