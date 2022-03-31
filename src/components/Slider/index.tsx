import { Flex, Heading, Link, Text } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GalaxyProps } from "../../pages";

SwiperCore.use([Navigation, Pagination, A11y])

export default function Slider({ galaxys }: GalaxyProps) {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
       {galaxys.map(galaxy => (
          <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={`url(${galaxy.image})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href={`/galaxy/${galaxy.slug}`}>
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                  bgColor="gray.800"
                  color="yellow.400"
                  pt={["2", "4"]}
                  px="4"
                  borderTopLeftRadius="8"
                  borderTopRightRadius="8"
                >
                  {galaxy.title}
                </Heading>
                <Text
                  fontWeight="bold"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  bgColor="gray.800"
                  color="yellow.400"
                  // p="1"
                  pt={["2", "4"]}
                  pb={["2", "4"]}
                  px="4"
                  borderBottomRightRadius="8"
                  borderBottomLeftRadius="8"
                >
                  {galaxy.summary}
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
       ))}
      </Swiper>
    </Flex>
  );
}
