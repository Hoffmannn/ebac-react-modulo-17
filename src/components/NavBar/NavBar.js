import React from "react";

import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { Cart } from "react-bootstrap-icons";
import { Box, Button } from "../../ebac-ds/ebac-ds";

function NavBar({ setIsCartOpen }) {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        backgroundColor="washed-yellow"
        fixed
        style={{ width: "100%", zIndex: 1001 }}
        justifyContent="between"
        zIndex={1001}
        paddingLeft={5}
        paddingRight={5}
      >
        <Image src={logo} w={200} fit="contain" />
        <Box display="flex" flex={1} gap={20}>
          <Button>Início</Button>
          <Button isDisabled>Produtos</Button>
          <Button isDisabled>Sobre nós</Button>
          <Button isDisabled>Contato</Button>
          <Button isDisabled>Minha conta</Button>
        </Box>
        <Button onClick={() => setIsCartOpen(true)}>
          <Cart color="#776E9A" size={32} />
        </Button>
      </Box>
    </>
  );
}

export default NavBar;
