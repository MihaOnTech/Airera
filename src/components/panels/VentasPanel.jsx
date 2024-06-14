import React, { useState, useContext } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { SalesContext } from "../../contexts/SalesContext";
import Carrito from "../component/Carrito";
import ListaProductos from "../component/ListaProductos";
import Categorias from "../component/Categorias";

const Ventas = () => {
  const products = useContext(ProductsContext);
  const { addSale } = useContext(SalesContext);
  const [selectedCategory, setSelectedCategory] = useState("Bebidas");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleAddSale = () => {
    const newSale = { items: cart, date: new Date().toISOString() };
    addSale(newSale);
    console.log("New Sale!");
    setCart([]); 
  };

  // Filtrar productos por categoría
  const filteredProducts = products.filter(
    (product) => product.Categoria === selectedCategory
  );

  console.log("filteredProducts: " + filteredProducts)

  return (
    <Grid
      minHeight="86vh"
      templateAreas={`"main nav"
                    "footer nav"`}
      gridTemplateRows={"1fr 20vh"}
      gridTemplateColumns={"60vw 1fr"}
      gap="4"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl="2"
        area={"nav"}
        color="white"
      >
                <Carrito cart={cart} handleAddSale={handleAddSale} />

      </GridItem>
      <GridItem
        pl="2"
        area={"main"}
        color="white"
      >
                <ListaProductos products={filteredProducts} handleAddToCart={handleAddToCart} />

      </GridItem>
      <GridItem
        pl="2"
        area={"footer"}
        color="white"
      >
                <Categorias products={products} setSelectedCategory={setSelectedCategory} />

      </GridItem>
    </Grid>
  );
};

export default Ventas;
