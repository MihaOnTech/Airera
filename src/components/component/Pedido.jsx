/* eslint-disable react/prop-types */
import { Box, Text, List, ListItem, Divider } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Pedido = ({ numero, items, total }) => {
  return (
    <Box bg="gray.700" borderWidth="3px" overflow="hidden" p={4}>
      <Text fontSize="xl" fontWeight="bold">Pedido #{numero}</Text>
      <List spacing={0.1}>
        {items.map((item, index) => (
          <ListItem key={index}>
            {item.cantidad} x {item.nombre}
          </ListItem>
        ))}
      </List>
      <Divider my={2} borderWidth="1px" />
      <Text fontSize="lg" fontWeight="bold">Total: {total}€</Text>
    </Box>
  );
};

export default Pedido;
