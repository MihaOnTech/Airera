import React, { useContext } from 'react';
import { Timestamp } from "firebase/firestore";
import { Box, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, Button } from '@chakra-ui/react';
import { SalesContext } from '../../contexts/SalesContext';
import { parseTime } from '../../utils/timeParser';

const Historial = () => {
  const { sales, deleteSale } = useContext(SalesContext); 
  
  const handleDeleteSale = (id) => {
    deleteSale(id);
  };

  return (
    <Box padding={4} height="86vh" overflow="auto">
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6}>
        {[...sales].reverse().map(sale => {
          
          // Verificar que sale no es undefined y tiene items como un array
          if (!sale || !sale.items || !Array.isArray(sale.items)) {
            console.warn('Venta inválida o sin items:', sale);
            return null;
          }

          return (
          <Accordion key={sale.UUID} allowToggle bg="brand.100">
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="25px">
                  <Text>
                    V000001 - {parseTime(sale.date)} - {sale.items.length} items - Importe: {sale.importe.toFixed(2)}€
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Box>
                  {sale.items.map((item, index) => (
                    <Text key={index} fontSize="20px">
                      {item} - {sale.importe.toFixed(2)}€
                    </Text>
                  ))}
                </Box>
                <Button
                  mt={4}
                  colorScheme="red"
                  size="md"
                  onClick={() => handleDeleteSale(sale.id)}
                >
                  Eliminar Venta
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
      </SimpleGrid>
    </Box>
  );
};

export default Historial;
