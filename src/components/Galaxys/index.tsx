import { Grid, Heading } from "@chakra-ui/react";
import { GalaxyProps } from "../../pages/destination/[slug]";
import Galaxy from "./Galaxy";

export default function Galaxys({ galaxy }: GalaxyProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Galáxias +616
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {galaxy.galaxys616.map((galaxy) => (
          <Galaxy
            key={galaxy.galaxy}
            name={galaxy.galaxy}
            planet={galaxy.planet}
            flag={galaxy.flag}
            image={galaxy.thumbnail}
          />
        ))}
      </Grid>
    </>
  );
}
