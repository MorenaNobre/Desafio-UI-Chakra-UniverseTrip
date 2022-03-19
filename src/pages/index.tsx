import Head from "next/head";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Categories />
    </Flex>
  )
}
