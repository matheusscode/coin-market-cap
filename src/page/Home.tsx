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
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetching";
import { CoinProps, CoinsFormattedProps } from "../types";
import { useSearchContext } from "../hooks/useSearch";
import { coinsFormatted } from "../utils/coinsFormatted";

export default function Home() {
  const { searchCoin } = useSearchContext();
  const [active, setActive] = useState<boolean>(false);
  const { data, isFetching } = useFetch<CoinProps[]>(
    "coins/markets/?vs_currency=usd"
  );
  const [isLargerThan830] = useMediaQuery("(max-width: 830px)");
  const [coins, setCoins] = useState<CoinsFormattedProps[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<CoinsFormattedProps[]>([]);

  useEffect(() => {
    if (data) {
      setCoins(coinsFormatted(data));
    }

    if (coins && coins.length > 0) {
      filterHighMarketCap();
    }
  }, [data, coins, active]);

  const filterHighMarketCap = () => {
    const sortedCoins = [...coins];
    setFilteredCoins(sortedCoins.sort((a, b) => a.high24h - b.high24h));
  };

  const toggleSwitch = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active && coins && coins.length > 0) {
      filterHighMarketCap();
    }
  }, [active, coins]);

  return (
    <Stack
      maxW="1700px"
      m="0 auto"
      h="100%"
      w="100%"
      px={isLargerThan830 ? 4 : 6}
    >
      <Flex
        gap={isLargerThan830 ? "1rem" : "0"}
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
          {active
            ? "Moedas que apresentaram maior crescimento nas últimas 24 horas"
            : "Preço das criptomoedas por valor de mercado"}
        </Heading>
        <Stack
          direction="row"
          ml={isLargerThan830 ? "auto" : ""}
          alignItems="center"
          gap="0.8rem"
        >
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
      <Stack my="3.5rem">
        <Carousel title="Favoritos" coins={coins!} />
        {isFetching ? (
          <Center w="100%" h="100%" alignItems="center" mt="2rem">
            <Spinner
              thickness="6px"
              speed="0.65s"
              emptyColor="gray"
              color="blue"
              size="xl"
            />
          </Center>
        ) : (
          <Panel
            coins={active ? filteredCoins! : coins!}
            searchCoin={searchCoin}
            active={active}
          />
        )}
      </Stack>
    </Stack>
  );
}
