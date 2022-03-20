import Head from "next/head";
import Image from "next/image";
import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Categories />
      <Divider />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        O Gerador de Improbabilidade infinita
        <br />
        te leva!
      </Heading>
    </Flex>
  );
}
