import { Box, Flex, Heading, Stack, Switch, Text } from "@chakra-ui/react";

import Carousel from "../components/Carousel";
import Panel from "../components/Panel";

export default function Home() {
  return (
    <Stack maxW="1600px" m="0 auto" w="100%" h="100%" px={4}>
      <Flex direction="row" mt="3.5rem" justifyContent="space-between">
        <Heading
          as="h1"
          color="dark"
          lineHeight="2.118rem"
          fontSize="1.75rem"
          fontFamily="int"
          fontWeight={700}
        >
          Preço das criptomoedas por valor de mercado
        </Heading>

        <Stack direction="row" alignItems="center" gap="0.8rem">
          <Text
            fontSize="1rem"
            lineHeight="1.21rem"
            fontWeight={400}
            fontFamily="int"
            color="gray_slightly"
          >
            Highlights
          </Text>
          <Switch size="lg" colorScheme="cyan" />
        </Stack>
      </Flex>
      <Stack mt="3.5rem" gap="2.4rem">
        <Carousel title="Favoritos" />
        <Panel />
      </Stack>
    </Stack>
  );
}
