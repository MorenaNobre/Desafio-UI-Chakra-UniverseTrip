import { Flex } from "@chakra-ui/react";
import DestinationBanner from "../../components/DestinationBanner";
import Header from "../../components/Header";

export default function Destination() {
  return (
    <Flex direction="column">
      <Header />
      <DestinationBanner />
    </Flex>
  )
}