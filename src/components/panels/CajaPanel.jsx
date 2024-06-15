import React, { useState } from "react";
import { Flex, Grid, Box, useBreakpointValue } from "@chakra-ui/react";
import FloatingAddButton from "../component/FloatingAddButton";
import Pedido from "../component/Pedido";

const Caja = () => {
  return (
    <Box fontSize={"25px"}>
      {`- Cerrar Caja
          . Mostrar total del dia
          . Confirmar todo OK y cerrar caja
          . Limpiar memoria app
          . Mandar reporte al servidor
          . Comprobar Stock`}
      <hr></hr>
      <br />

      {`- Backend
          . Con cada venta disminuir stock
          . Con cada venta aumentar contador ventas de los productos
          . Implementar lista de mas vendidos`}
    </Box>
  );
};

export default Caja;
