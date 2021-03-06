import {
  Flex,
  Heading,
  Popover,
  PopoverTrigger,
  Text,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { GalaxyProps } from "../../pages/destination/[slug]";

export default function Infos({galaxy} : GalaxyProps) {
  return (
    <Flex align="center" justifyContent="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-star", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {galaxy.galaxys}
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700">
          {galaxy.planets}
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-star", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          24k
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700">
          dialetos
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-star", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          77
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700">
          galáxias +616
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700"/>
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                {galaxy.planets_list}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
