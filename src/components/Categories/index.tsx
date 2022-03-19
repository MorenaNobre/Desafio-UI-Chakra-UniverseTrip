import { Grid, GridItem } from "@chakra-ui/react";
import Category from "./Category";

export default function Categories() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "24"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Category icon="futuristic" text="vida futurística"/>
      </GridItem>
      <GridItem>
        <Category icon="galaxy" text="explore"/>
      </GridItem>
      <GridItem>
        <Category icon="light-saber" text="lute"/>
      </GridItem>
      <GridItem>
        <Category icon="martian" text="viaje"/>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Category icon="space-station" text="e mais..."/>
      </GridItem>
    </Grid>
  )
}