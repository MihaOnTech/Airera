import React, { useState } from 'react';
import { Flex, Grid, Box, useBreakpointValue } from '@chakra-ui/react';
import FloatingAddButton from '../../components/FloatingAddButton';
import Pedido from '../../components/Pedido';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([
    {
      numero: 1,
      items: [
        { nombre: "Ensaladilla", cantidad: 1 },
        { nombre: "CocaCola", cantidad: 2 },
        { nombre: "Agua", cantidad: 1 }
      ],
      total: 18.50
    },
    {
      numero: 2,
      items: [
        { nombre: "Ensaladilla", cantidad: 1 },
        { nombre: "Patatas", cantidad: 1 },
        { nombre: "Coca", cantidad: 1 },
        { nombre: "Fanta", cantidad: 1 },
        { nombre: "Maxibon", cantidad: 1 },
        { nombre: "Olivas", cantidad: 1 },
        { nombre: "Anchoas", cantidad: 1 },
        { nombre: "Te", cantidad: 1 }
      ],
      total: 40
    },
    {
      numero: 3,
      items: [
        { nombre: "Ensaladilla", cantidad: 1 },
        { nombre: "CocaCola", cantidad: 2 },
        { nombre: "Agua", cantidad: 1 }
      ],
      total: 18.50
    },
    {
      numero: 4,
      items: [
        { nombre: "Ensaladilla", cantidad: 1 },
        { nombre: "CocaCola", cantidad: 2 },
        { nombre: "Agua", cantidad: 1 }
      ],
      total: 18.50
    },
    {
      numero: 5,
      items: [
        { nombre: "Ensaladilla", cantidad: 1 },
        { nombre: "CocaCola", cantidad: 2 },
        { nombre: "Agua", cantidad: 1 }
      ],
      total: 18.50
    },
    {
      numero: 6,
      items: [
        { nombre: "Ensaladilla", cantidad: 1 },
        { nombre: "Patatas", cantidad: 1 },
        { nombre: "Coca", cantidad: 1 },
        { nombre: "Nachos huacamole", cantidad: 1 },
        { nombre: "Humus Olivas", cantidad: 1 },
        { nombre: "Olivas", cantidad: 1 },
        { nombre: "Anchoas", cantidad: 1 },
        { nombre: "Te", cantidad: 1 }
      ],
      total: 40
    },
  ]);

  const handleAddPedido = () => {
    // Lógica para añadir un nuevo pedido
    console.log("Agregar nuevo pedido");
  };


  return (
    <Box
        padding={2}
        bg="gray.800"
      >
        {pedidos.map((pedido) => (
          <Box key={pedido.numero} margin={2}>
             <Pedido  numero={pedido.numero} items={pedido.items} total={pedido.total} />
          </Box>
         
        ))}
      <FloatingAddButton onClick={handleAddPedido} />
    </Box>
  );
};

export default Pedidos;
