import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Galaxy({name, planet, flag, image}) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={image} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.400"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {planet}
          </Text>
        </Flex>
        <Image src={flag} w="40px" h="40px" borderRadius="50%" objectFit="cover"/>
      </Flex>
    </Box>
  );
}
