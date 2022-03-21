import { Flex } from "@chakra-ui/react";
import Content from "../../components/Content";
import DestinationBanner from "../../components/DestinationBanner";
import Header from "../../components/Header";

export default function Destination() {
  return (
    <Flex direction="column">
      <Header />
      <DestinationBanner />
      <Flex
        direction="column"
        maxW="1160"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <Content />
      </Flex>
    </Flex>
  );
}
