import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Divider from "../components/Divider";
import Slider from "../components/Slider";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

export interface GalaxyProps {
  galaxys: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ galaxys }: GalaxyProps) {
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
      <Slider galaxys={galaxys}/>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "galaxy"),
  ]);

  const galaxys = response.results.map((galaxy) => {
    return {
      slug: galaxy.uid,
      title: galaxy.data.title,
      summary: galaxy.data.summary,
      image: galaxy.data.slider_image.url,
    };
  });

  return {
    props: {
      galaxys,
    },
    revalidate: 1800,
  };
};
