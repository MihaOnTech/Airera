import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const FloatingActionButton = ({ onClick }) => {
  return (
    <IconButton
      icon={<AddIcon />}
      isRound
      size="lg"
      position="fixed"
      bottom="20px"
      right="20px"
      colorScheme="teal"
      shadow="md"
      onClick={onClick}
      aria-label="Agregar nuevo pedido"
    />
  );
};

export default FloatingActionButton;
