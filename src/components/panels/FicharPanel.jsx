import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Button,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { auth } from "../../firebaseConfig";
import QRGenerator from "../component/QRGenerator";

const Fichar = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [action, setAction] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [datetime, setDatetime] = useState("");

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setAction("");
    setShowQR(false);
  };

  const handleAction = (type) => {
    if (!selectedUser) {
      alert("Please select a user first.");
      return;
    }
    setAction(type);
    setDatetime(new Date().toISOString());
    setShowQR(true);
  };

  const handleBackClick = () => {
    setAction("");
    setShowQR(false);
  };

  const users = ["Andrea", "Ángela", "Hans", "Miguel"];

  return (
    <Grid
      height="86vh"
      templateAreas={`
                      "top top top"
                      "left main right"
                      "left main right"
                      "footer footer footer"
                    `}
      gridTemplateRows={"10vh 1fr 1fr 10vh"}
      gridTemplateColumns={"25vw 1fr 25vw"}
      gap="4"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"top"} bg="blue.200">
        <Button onClick={handleLogout} height="100%" width="10vh" fontSize="25px">
          Salir
        </Button>
      </GridItem>
      <GridItem area={"left"} bg="green.200" display="flex" flexDirection="column">
        {users.map((user) => (
          <Button key={user} onClick={() => handleSelectUser(user)} width="100%" height="25%">
            {user}
          </Button>
        ))}
      </GridItem>
      <GridItem area={"main"} bg="red.200" display="flex" alignItems="center" justifyContent="center">
        {showQR ? (
          <QRGenerator action={action} datetime={datetime} user={selectedUser} />
        ) : (
          <Flex direction="column" width="100%" height="100%">
            <Button onClick={() => handleAction("Entrada")} width="100%" height="50%" bg="green.200" fontSize={"30px"}>
              Entrada
            </Button>
            <Button onClick={() => handleAction("Salida")} width="100%" height="50%" bg="red.200" fontSize={"30px"}>
              Salida
            </Button>
          </Flex>
        )}
      </GridItem>
      <GridItem pl="2" area={"right"} bg="purple.200">
        {/* Placeholder or additional content */}
      </GridItem>
      <GridItem pl="2" area={"footer"} bg="gray.400">
        {showQR && (
          <Flex justify="center" align="center" position="relative">
            <Text fontSize={"30px"}>Scanea el QR para registrar tu {action}</Text>
          </Flex>
        )}
      </GridItem>
    </Grid>
  );
};

export default Fichar;
