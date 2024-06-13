import React from 'react';
import {
  Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, IconButton, useDisclosure, VStack, Button, Divider 
} from '@chakra-ui/react';
import { auth } from '../firebaseConfig';
import { Navigate } from 'react-router-dom';

function SideBarMenu({ isOpen, onClose }) {
  const logout = () => {
    auth.signOut();
  };

  return (
    <Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack p={4}>
              <Button w="100%" onClick={Navigate}>Perfil</Button>
              <Button w="100%" onClick={onClose}>Bar</Button>
              <Button w="100%" onClick={onClose}>Gastos</Button>
              <Divider my={4} />
              <Button w="100%" onClick={logout}>Salir</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SideBarMenu;
