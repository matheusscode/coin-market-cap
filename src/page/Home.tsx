import {
  Center,
  Flex,
  Heading,
  Spinner,
  Stack,
  Switch,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import Carousel from "../components/Carousel";
import Panel from "../components/Panel";
import { useState } from "react";
import useFetch from "../hooks/useFetching";
import { CoinProps } from "../types";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  const { data: coins, isFetching } = useFetch<CoinProps[]>(
    "coins/markets/?vs_currency=usd"
  );
  const [isLargerThan830] = useMediaQuery("(max-width: 830px)");

  const toggleSwitch = () => {
    setActive(!active);
  };

  return (
    <Stack maxW="1700px" m="0 auto" w="100%" px={isLargerThan830 ? 4 : 6}>
      <Flex
        gap={isLargerThan830 ? "1rem" : "0" }
        direction={isLargerThan830 ? "column" : "row"}
        mt="3.5rem"
        justifyContent="space-between"
        px={1}
      >
        <Heading
          as="h1"
          color="dark"
          lineHeight="2.118rem"
          fontSize="1.75rem"
          fontWeight={700}
        >
          Preço das criptomoedas por valor de mercado
        </Heading>

        <Stack direction="row" ml={isLargerThan830 ? "auto" : "" } alignItems="center" gap="0.8rem">
          <Text
            fontSize="1rem"
            lineHeight="1.21rem"
            fontWeight={400}
            color="gray_slightly"
          >
            Highlights
          </Text>
          <Switch
            onChange={toggleSwitch}
            size="lg"
            bg={active ? "blue" : "gray"}
            borderRadius="14px"
          />
        </Stack>
      </Flex>

      <Stack mt="3.5rem" gap="2.4rem">
        <Carousel title="Favoritos" coins={coins!} />

        {isFetching ? (
          <Center w="100%" h="100%" alignItems="center" mt="4rem">
            <Spinner
              thickness="6px"
              speed="0.65s"
              emptyColor="gray"
              color="blue"
              size="xl"
            />
          </Center>
        ) : (
          <Panel coins={coins!} />
        )}
      </Stack>
    </Stack>
  );
}
