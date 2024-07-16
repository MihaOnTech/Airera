import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, VStack } from '@chakra-ui/react';

const SelectionPage = () => {
  const navigate = useNavigate();

  return (
    <VStack spacing={4} justify="center" height="100vh">
      <Button
        colorScheme="blue"
        onClick={() => navigate('/bar')}
      >
        Ir al Bar
      </Button>
      <Button
        colorScheme="green"
        onClick={() => navigate('/office')}
      >
        Ir a la Oficina
      </Button>
    </VStack>
  );
};

export default SelectionPage;
