import { Flex } from "@chakra-ui/react";
import Content from "../../components/Content";
import DestinationBanner from "../../components/DestinationBanner";
import Header from "../../components/Header";
import Galaxys from "../../components/Galaxys";
import { GetStaticPaths, GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import { useRouter } from "next/router";

export interface GalaxyProps {
  galaxy: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    galaxys: number;
    planets: number;
    planets_list: string;
    galaxys616: {
      galaxy: string;
      planet: string;
      thumbnail: string;
      flag: string;
    }[];
  };
}

export default function Destination({ galaxy }: GalaxyProps) {
  const router = useRouter()

  if(router.isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <Flex direction="column">
      <Header />
      <DestinationBanner galaxy={galaxy}/>
      <Flex direction="column" maxW="1160" mx="auto" mb="10" px="1rem">
        <Content galaxy={galaxy}/>
        <Galaxys galaxy={galaxy}/>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const galaxys = await prismic.query([
    Prismic.Predicates.at("document.type", "galaxy"),
  ]);

  const paths = galaxys.results.map((galaxy) => {
    return {
      params: {
        slug: galaxy.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID("galaxy", String(slug), {});

  const galaxy = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner_image: response.data.banner_image.url,
    galaxys: response.data.galaxys,
    planets: response.data.planets,
    planets_list: response.data.planets_list,
    galaxys616: response.data.galaxys616.map((galaxy) => {
      return {
        galaxy: galaxy.galaxy,
        planet: galaxy.planet,
        thumbnail: galaxy.thumbnail.url,
        flag: galaxy.flag.url,
      };
    }),
  };

  return {
    props: {
      galaxy,
    },
    revalidate: 1800,
  };
};
