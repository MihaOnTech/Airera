import React from 'react';
import { VStack, Box, Flex, useToken } from '@chakra-ui/react';

const Layout = ({ children }) => {
  // Utilizamos useToken para obtener los valores exactos de los tamaños desde el tema de Chakra UI.
  const [height] = useToken("sizes", ["10vh"]);

  return (
    <VStack spacing={0} height="100vh" width="100vw">
      <Box bg="blue.500" width="100%" height={height}>
        Header (Menú)
      </Box>
      <Box bg="purple.500" width="100%" height={height}>
        Subheader (Tabs)
      </Box>
      <Flex flex="1" bg="gray.200" width="100%">
        {children} {/* Contenido dinámico aquí */}
      </Flex>
    </VStack>
  );
};

export default Layout;
