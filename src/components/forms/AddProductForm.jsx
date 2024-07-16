import React, { useState } from "react";
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

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log({ productName, price, category });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} bg={"brand.100"} borderRadius="5px" borderWidth={"2px"} borderColor={"black"} >
      <FormControl id="product-name" mb={4}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </FormControl>
      <FormControl id="price" mb={4}>
        <FormLabel>Precio</FormLabel>
        <NumberInput precision={2} step={0.1} value={price} onChange={setPrice}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <FormControl id="category" mb={4}>
        <FormLabel>Categoría</FormLabel>
        <Select
          placeholder="Selecciona categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Platos">Platos</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Tapas">Tapas</option>
          <option value="Dulces">Dulces</option>
        </Select>
      </FormControl>
      <Button type="submit" colorScheme="blue">Añadir Producto</Button>
    </Box>
  );
};

export default AddProductForm;
