import React from "react";
import { Box, Button } from "@chakra-ui/react";
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
      <Button colorScheme="blue" onClick={handleLogout}>
        Salir
      </Button>
    </Box>
  );
};

export default Fichar;
