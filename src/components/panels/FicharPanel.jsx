import React, { useState, useEffect } from "react";
import {
  AbsoluteCenter,
  Text,
  Button,
  Flex,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { auth } from "../../firebaseConfig";
import QRGenerator from "../component/QRGenerator";

const Fichar = () => {
  const [action, setAction] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [datetime, setDatetime] = useState("");

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logout successful");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  const handleAction = (type) => {
    setAction(type);
    setDatetime(new Date().toISOString());
    setShowQR(true);
  };

  const handleBackClick = () => {
    setAction("");
    setDatetime("");
    setShowQR(false);
  };

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
        <Button
          onClick={handleLogout}
          height="100%"
          width="10vh"
          fontSize="25px"
        >
          Salir
        </Button>
      </GridItem>
      <GridItem
        area={"left"}
        bg="green.200"
        display="flex"
        justifyContent="flex-end"
      >
        {showQR ? (
        <IconButton
          aria-label="Back"
          height="50px"
          width="50px"
          icon={<ArrowBackIcon height="60%" width="60%" />}
          onClick={handleBackClick}
        /> ) : (<></>) }
      </GridItem>
      <GridItem
        area={"main"}
        bg="red.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {showQR ? (
          <QRGenerator action={action} datetime={datetime} />
        ) : (
          <>
            <Button
              width="50%"
              height="100%"
              onClick={() => handleAction("Entrada")}
              bg="green.200"
              fontSize={"30px"}
            >
              Entrada
            </Button>
            <Button
              width="50%"
              height="100%"
              onClick={() => handleAction("Salida")}
              bg="red.200"
              fontSize={"30px"}
            >
              Salida
            </Button>
          </>
        )}
      </GridItem>
      <GridItem pl="2" area={"right"} bg="purple.200">
        {/* Placeholder o contenido adicional */}
      </GridItem>
      <GridItem pl="2" area={"footer"} bg="gray.400">
      {showQR ? ( 
        <Flex justify="center" align="center" position="relative">
        <Text fontSize={"30px"}>
          Scanea el QR para registrar tu {action}
        </Text>
        </Flex>
        ) : 
        <></>
        
      }
     
      </GridItem>
    </Grid>
  );
};

export default Fichar;
