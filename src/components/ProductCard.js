import React from "react";
import { CartPlus } from "react-bootstrap-icons";
import { formatToCurrency } from "../utils/formatToCurrenct";
import Button from "../ebac-ds/button/Button";
import { Box, Card, Divider } from "../ebac-ds/ebac-ds";
import { Image, Text, useToast } from "@chakra-ui/react";
import Title from "./title/Title";

function ProductCard({ product, handleAddProduct }) {
  const { name, photo, price, description } = product || {};
  const toast = useToast();

  const handleAdd = () => {
    handleAddProduct(product);
    toast({
      title: "Carrinho atualizado!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  };
  return (
    <Card width="xs" height="100%">
      <Image src={photo} draggable={false} height={"200px"} margin="auto" />
      <Title>{name}</Title>

      <Text pt="2" fontSize="sm">
        {description}
      </Text>

      <Divider />
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="baseline"
        gap={20}
      >
        <Text pt="2" fontSize="lg">
          {formatToCurrency(price)}
        </Text>
        <Button onClick={handleAdd}>
          Adicionar <CartPlus style={{ marginLeft: 5 }} />
        </Button>
      </Box>
    </Card>
  );
}

export default ProductCard;
