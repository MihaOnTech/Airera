import React, { useState, useContext } from "react";
import { Flex, Grid, GridItem, Spinner, Button, Input, Text } from "@chakra-ui/react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { SalesContext } from "../../contexts/SalesContext";
import { ClientsContext } from "../../contexts/ClientsContext";
import Carrito from "../component/Carrito";
import ListaProductos from "../component/ListaProductos";
import Categorias from "../component/Categorias";

const Ventas = () => {
  const { products, loading, error} = useContext(ProductsContext);
  const { addSale } = useContext(SalesContext);
  const { clients, addClient } = useContext(ClientsContext);

  const [selectedCategory, setSelectedCategory] = useState("Bebidas");
  const [cart, setCart] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [newClientName, setNewClientName] = useState("");

  const handleAddToCart = (product) => {
    const productIndex = cart.findIndex((item) => item[0] === product.Nombre);
    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart[productIndex] = [
        newCart[productIndex][0],
        newCart[productIndex][1],
        newCart[productIndex][2] + 1,
      ];
      setCart(newCart);
    } else {
      setCart([...cart, [product.Nombre, product.Precio, 1]]);
    }
  };

  const removeItemFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (newCart[index][2] > 1) {
        newCart[index] = [
          newCart[index][0],
          newCart[index][1],
          newCart[index][2] - 1,
        ];
      } else {
        newCart.splice(index, 1);
      }
      return newCart;
    });
  };

  const handleAddSale = (clientId, saleStatus) => {
    const items = cart.map(([nombre, _, cantidad]) => ({
      nombre: nombre,
      cantidad: cantidad,
    }));
    const importe = cart.reduce((total, [_, precio, cantidad]) => {
      return total + precio * cantidad;
    }, 0);

    const newSale = {
      items,
      importe,
      cliente: clientId,
      status: saleStatus,
      fecha: new Date().toISOString(),
    };

    addSale(newSale);
    setCart([]);
    if (newClientName) {
      addClient({ nombre: newClientName });
      setSelectedClient("");
      setNewClientName("");
    }
  };

  const filteredProducts = products.filter(
    (product) => product.Categoria === selectedCategory
  );

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text>Error loading data: {error.message}</Text>;
  }

  return (
    <Grid
      height="86vh"
      templateAreas={`"main nav"
                    "footer nav"`}
      gridTemplateRows={"1fr 15vh"}
      gridTemplateColumns={"60vw 1fr"}
      gap="4"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"nav"} color="white">
        <Carrito
          cart={cart}
          handleAddSale={handleAddSale}
          removeItemFromCart={removeItemFromCart}
          clients={clients}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          newClientName={newClientName}
          setNewClientName={setNewClientName}
        />
      </GridItem>
      <GridItem pl="2" area={"main"} color="white">
        <ListaProductos
          products={filteredProducts}
          handleAddToCart={handleAddToCart}
        />
      </GridItem>
      <GridItem pl="2" area={"footer"} color="white">
        <Categorias
          products={products}
          setSelectedCategory={setSelectedCategory}
        />
      </GridItem>
    </Grid>
  );
};

export default Ventas;
