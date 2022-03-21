import { Grid, Text } from "@chakra-ui/react";
import Infos from "./infos";

export default function Content() {
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
        Nascido em Krypton, o pequeno Kal-El viveu pouco tempo em seu planeta
        natal. Percebendo que o planeta estava prestes a entrar em colapso, seu
        pai o envia ainda bebê em uma nave espacial, rumo ao planeta Terra, e 
        levando com ele importantes informações de seu povo.
        Contrariado com tal atitude, o General Zod tenta impedir a iniciativa e 
        acaba preso. Já em seu novo lar, a criança foi criada por Jonathan e 
        Martha Kent, que passaram a chamá-lo de Clark.
      </Text>
      <Infos />
    </Grid>
  );
}
