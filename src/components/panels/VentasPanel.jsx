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
    const productIndex = cart.findIndex((item) => item[0] === product.Nombre);
    if (productIndex !== -1) {
      // Producto existente, incrementar cantidad
      const newCart = [...cart];
      newCart[productIndex] = [
        newCart[productIndex][0],
        newCart[productIndex][1],
        newCart[productIndex][2] + 1,
      ];
      setCart(newCart);
    } else {
      // Producto nuevo, agregar al carrito
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

  const handleAddSale = () => {
    const items = cart.map(([nombre, _, cantidad]) => ({
      nombre: nombre,
      cantidad: cantidad,
    }));
    const importe = cart.reduce((total, [_, precio, cantidad]) => {
      return total + precio * cantidad;
    }, 0); // Iniciar la suma en 0

    const newSale = {
      items,
      importe,
    };
    addSale(newSale);
    setCart([]);
  };

  // Filtrar productos por categoría
  const filteredProducts = products.filter(
    (product) => product.Categoria === selectedCategory
  );

  return (
    <Grid
      height="86vh"
      templateAreas={`"main nav"
                    "footer nav"`}
      gridTemplateRows={"1fr 20vh"}
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
