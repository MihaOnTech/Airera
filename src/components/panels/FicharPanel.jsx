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
import AddProductForm from "../forms/AddProductForm";
import AddClientForm from "../forms/AddClientForm";

const Fichar = () => {
  const menus = ["Añadir Producto", "Añadir Cliente", "Modificar Venta", "Añadir Gasto"];

  const [selectedMenu, setSelectedMenu] = useState(menus[0]);
  const [datetime, setDatetime] = useState("");

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const renderSelectedMenu = () => {
    switch (selectedMenu) {
      case "Añadir Producto":
        return <AddProductForm />;
      case "Añadir Cliente":
        return <AddClientForm />;
      case "Borrar Venta":
        return <div>Borrar Venta</div>;
      case "Añadir Gasto":
        return <div>Añadir Gasto</div>;
      default:
        return null;
    }
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
      <GridItem area={"left"} display="flex" flexDirection="column">
        {menus.map((menu) => (
          <Button
            key={menu}
            m={"5px"}
            onClick={() => handleMenu(menu)}
            width="100%"
            height="25%"
            borderColor={"black"}
            borderWidth={"2px"}
            bg={"brand.100"}
          >
            {menu}
          </Button>
        ))}
      </GridItem>
      <GridItem
        area={"main"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {renderSelectedMenu()}
      </GridItem>
      <GridItem pl="2" area={"right"} bg="purple.200">
        {/* Placeholder or additional content */}
      </GridItem>
      <GridItem pl="2" area={"footer"} bg="gray.400">
        FOOTER
      </GridItem>
    </Grid>
  );
};

export default Fichar;
