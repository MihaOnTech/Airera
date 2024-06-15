import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { auth } from "../../firebaseConfig";

const Fichar = () => {
  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log("Logout successful");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <Box>
      <VStack>
      <Button size="lg" colorScheme="blue" onClick={handleLogout}>
        Salir
      </Button>
      <Button size="lg" colorScheme="blue">
        Fichar
      </Button>
      </VStack>
      

      <Text>
     { `- Fichar
          . Iniciar proceso (Entrada/Salida)
          . Seleccionar usuario
          . Mandar fichaje al servidor`}
      </Text>
    </Box>
  );
};

export default Fichar;
