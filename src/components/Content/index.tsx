import { Grid, Text } from "@chakra-ui/react";
import { GalaxyProps } from "../../pages/destination/[slug]";
import Infos from "./infos";

export default function Content({ galaxy }: GalaxyProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {galaxy.description}
      </Text>
      <Infos galaxy={galaxy}/>
    </Grid>
  );
}
