import { Flex, Heading } from "@chakra-ui/react";
import { GalaxyProps } from "../../pages/destination/[slug]";

export default function DestinationBanner({ galaxy }: GalaxyProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={`url('${galaxy.banner_image}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="yellow.400"
        fontWeight="500"
        bgColor="gray.800"
        pt={["2", "4"]}
        pb={["2", "4"]}
        px="4"
        borderRadius="8"
      >
        {galaxy.title}
      </Heading>
    </Flex>
  );
}
