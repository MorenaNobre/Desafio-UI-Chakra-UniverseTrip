import { Flex, Heading, Link, Text } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperCore.use([Navigation, Pagination, A11y])

export default function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/magrathea.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/improbility/place">
              <a>
                <Heading
                  bgColor="gray.800"
                  color="yellow.400"
                  p="1"
                  px="4"
                  borderTopLeftRadius="8"
                  borderTopRightRadius="8"
                >
                  Magrathea
                </Heading>
                <Text
                  bgColor="gray.800"
                  color="yellow.400"
                  p="1"
                  px="4"
                  borderBottomRightRadius="8"
                  borderBottomLeftRadius="8"
                >
                  Indústria especializada em construção de planetas
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
