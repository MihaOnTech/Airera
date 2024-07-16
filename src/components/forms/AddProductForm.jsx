import React, { useState, useContext } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Button,
} from "@chakra-ui/react";
import { ProductsContext } from "../../contexts/ProductsContext"; // Asegúrate de ajustar la ruta

const AddProductForm = () => {
  const { addNewProduct } = useContext(ProductsContext);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Inicia addProduct");
      await addNewProduct({
        Nombre: productName,
        Precio: price,
        Categoria: category,
      });
      console.log("Producto añadido con éxito");
      // Limpiar el formulario después del envío
      setProductName("");
      setPrice("");
      setCategory("");
    } catch (error) {
      console.error("Error añadiendo el producto:", error);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      bg={"brand.100"}
      borderRadius="5px"
      borderWidth={"2px"}
      borderColor={"black"}
    >
      <FormControl id="category" mb={4}>
        <FormLabel>Categoría</FormLabel>
        <Select
          placeholder="Selecciona categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          borderRadius="5px"
          borderWidth={"1px"}
          borderColor={"black"}
        >
          <option value="Platos">Platos</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Tapas">Tapas</option>
          <option value="Dulces">Dulces</option>
        </Select>
      </FormControl>
      <FormControl id="product-name" mb={4}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          borderRadius="5px"
          borderWidth={"1px"}
          borderColor={"black"}
        />
      </FormControl>
      <FormControl id="price" mb={4}>
        <FormLabel>Precio</FormLabel>
        <NumberInput precision={2} step={0.1} value={price} onChange={setPrice}>
          <NumberInputField
            borderRadius="5px"
            borderWidth={"1px"}
            borderColor={"black"}
          />
        </NumberInput>
      </FormControl>

      <Button type="submit" colorScheme="blue">
        Añadir Producto
      </Button>
    </Box>
  );
};

export default AddProductForm;
