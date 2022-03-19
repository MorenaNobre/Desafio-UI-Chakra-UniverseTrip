import { Flex, Grid, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      bg="gray.100"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          w={["81px", "184px"]}
          src="/logo-purple.svg"
          alt="Marca chamada Universe Trip com um icone de foguete ao lado."
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
