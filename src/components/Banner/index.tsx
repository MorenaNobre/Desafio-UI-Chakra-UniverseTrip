import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/banner3.jpg')"
      bgPosition={["100% 5%", "100% 20%", "100% 1%"]}
      // bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            O Universo, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="yellow.400"
            fontWeight="700"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["90%", "90%", "80%", "550px"]}
          >
            Já pensou em fazer um mochilão pelas galáxias? Não entre em pânico,
            pegue sua toalha e vamos!
          </Text>
        </div>

        <Image
          w={["220px", "220px", "220px", "350px"]}
          display={["none", "none", "block"]}
          mx={["1rem", "1rem"]}
          src="/space-colonization.svg"
          alt="Um planeta do espaço com prédios e um foguete voando."
          transform="translateY(36px)"
        />
      </Flex>
    </Flex>
  );
}
