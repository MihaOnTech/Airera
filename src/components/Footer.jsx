import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" h="50px" bg="blue.500" color="white" p="4">
      <Flex alignItems="center" justifyContent="center" height="100%" w="100%">
        <Text>© 2024 L'Airera. All rights reserved.</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
