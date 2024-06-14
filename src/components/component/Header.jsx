import React from 'react';
import { Box, Flex, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Airera from '../assets/airera.svg';


function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="header" h="30%" justifyContent="space-between" p="4" align="center" bg="blue.500" color="white">
      <Box as="img" src={Airera} h="30px" />
      <IconButton icon={<HamburgerIcon />} variant="outline" onClick={onOpen} aria-label="Open Menu" />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menú</DrawerHeader>
          <DrawerBody>
            <Button as={Link} to="/perfil" w="full" mb="2">Perfil</Button>
            <Button as={Link} to="/piscinas" w="full" mb="2">Piscinas</Button>
            <Button as={Link} to="/cuentas" w="full">Cuentas</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Header;
