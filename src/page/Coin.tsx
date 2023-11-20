import {
  Stack,
  Heading,
  useMediaQuery,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  Box,
  Badge,
  Image,
  Button,
  Text,
  Spinner,
  Center,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BreadRoute from "../components/Route";
import starInactive from "../../public/icons/favorite_inactive.svg";
import starActive from "../../public/icons/favorite_active.svg";
import Triangle from "../components/Triangle";
import { currencyFormatter } from "../utils/currencyFormatter";
import CardGit from "../components/CardGIt";
import useFetch from "../hooks/useFetching";
import { CoinDetails, NomenclatureUpdate } from "../types";
import { percentageFormatter } from "../utils/percentageFormatter";
import { useFavoriteContext } from "../hooks/useFavorite";
import { useEffect, useState } from "react";
import { updateNomenclature } from "../utils/updateNomenclature";
import { identifyNumber } from "../utils/identifyNumber";

const shake = keyframes`
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(-20deg);
}
50% {
  transform: rotate(20deg);
}
100% {
  transform: rotate(0deg);
}
`;

export default function Coin() {
  const { id } = useParams();
  const { isCoinSavedAsFavorite, toggleFavoriteCoin } = useFavoriteContext();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shakeIn = prefersReducedMotion ? undefined : `${shake} 0.5s both`;
  const capitalizedId = id?.charAt(0).toUpperCase() + id!.slice(1);
  const { data, isFetching } = useFetch<CoinDetails>(`coins/${id}`);
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
  const [isLargerThan660] = useMediaQuery("(max-width: 660px)");
  const [coin, setCoin] = useState<NomenclatureUpdate>(
    {} as NomenclatureUpdate
  );

  useEffect(() => {
    setCoin(updateNomenclature(data));
  }, [data]);

  return (
    <>
      {isFetching ? (
        <Center w="100%" h="600px" alignItems="center" mt="2rem">
          <Spinner
            thickness="6px"
            speed="0.65s"
            emptyColor="gray"
            color="blue"
            size="xl"
          />
        </Center>
      ) : (
        <Flex w="100%" h="100%">
          <Stack
            maxW="1700px"
            m="0 auto"
            minH="100vh"
            w="100%"
            pb={4}
            px={isLargerThan800 ? 4 : 6}
          >
            <Breadcrumb mt="3.5rem" gap="1rem" separator=">">
              <BreadcrumbItem>
                <BreadRoute href="/" text="Cryptocurrencies" color="gray" />
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadRoute href="/" text="Coins" color="gray" />
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadRoute
                  href={`/coin/${id}`}
                  text={`${capitalizedId}`}
                  color="dark"
                />
              </BreadcrumbItem>
            </Breadcrumb>
            <Flex
              mt="3.5rem"
              w="100%"
              flexDirection={isLargerThan660 ? "column" : "row"}
              gap="2rem"
              justifyContent="space-between"
            >
              <Box w={isLargerThan800 ? "100%" : "300px"}>
                <Stack alignItems="center" direction="row" gap="0.6rem">
                  <Image src={coin.icon} alt={coin.name} w="32px" h="32px" />
                  <Heading as="h1" fontSize="2.5rem" lineHeight="3.025625rem">
                    {coin.name}
                  </Heading>
                  <Badge
                    bg="bg_variant"
                    p={1}
                    px={2}
                    borderRadius="8px"
                    lineHeight="0.9075rem"
                    fontWeight={400}
                    fontSize="0.75rem"
                    w="45px"
                    h="31px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="gray_slightly"
                  >
                    {coin.symbol}
                  </Badge>
                  <Button onClick={() => toggleFavoriteCoin(coin.name)} p="0">
                    <Image
                      animation={
                        isCoinSavedAsFavorite(coin.name) ? shakeIn : undefined
                      }
                      src={
                        isCoinSavedAsFavorite(coin.name)
                          ? starActive
                          : starInactive
                      }
                      alt={
                        isCoinSavedAsFavorite(coin.name)
                          ? "Star active."
                          : "Star inactive."
                      }
                    />
                  </Button>
                </Stack>
                <Badge
                  mt="0.5rem"
                  p="0.5rem"
                  borderRadius="8px"
                  color="light"
                  bg="gray"
                  px={3}
                >
                  Classificação #{coin.rank}
                </Badge>
              </Box>
              <Box w={isLargerThan800 ? "100%" : "300px"}>
                <Heading
                  as="h2"
                  fontSize="1rem"
                  color="gray_slightly"
                  lineHeight="1.21rem"
                  fontWeight={600}
                >
                  Preço do(a) {coin.name} ({coin.symbol.toUpperCase()})
                </Heading>
                <Stack
                  direction="row"
                  alignItems="center"
                  mt="0.4rem"
                  gap="1rem"
                  flexWrap='wrap'
                >
                  <Text
                    color="dark"
                    fontSize="2.5rem"
                    lineHeight="3.025625rem"
                    fontWeight={700}
                  >
                    {currencyFormatter(coin.priceBRL)}
                  </Text>

                  <Badge
                    bgColor="green"
                    color="light"
                    borderRadius="8px"
                    p={1}
                    px={2}
                    fontSize="0.75rem"
                    lineHeight="0.9075rem"
                    fontWeight={700}
                  >
                    {percentageFormatter(coin.priceChange24h)}
                  </Badge>
                </Stack>
                <Stack mt="0.4rem" gap="0.4rem">
                  <Stack
                    mt="0.4rem"
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Text
                      color="gray_slightly"
                      lineHeight="1.21rem"
                      fontSize="1rem"
                      fontWeight={400}
                    >
                      {coin.change24hInBTC} BTC
                    </Text>

                    <Flex alignItems="center" gap="0.4rem">
                      <Triangle
                        direction={
                          identifyNumber(coin.priceChange24h) ? "bottom" : "top"
                        }
                      />
                      <Text
                        lineHeight="1.21rem"
                        fontSize="1rem"
                        fontWeight={600}
                        color={
                          identifyNumber(coin.priceChange24h) ? "red" : "green"
                        }
                      >
                        {coin.priceChange24h}
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Text
                      color="gray_slightly"
                      lineHeight="1.21rem"
                      fontSize="1rem"
                      fontWeight={400}
                    >
                      {coin.change24hInETH} ETH
                    </Text>

                    <Flex alignItems="center" gap="0.4rem">
                      <Triangle
                        direction={
                          identifyNumber(coin.change24hInETH) ? "bottom" : "top"
                        }
                      />
                      <Text
                        lineHeight="1.21rem"
                        fontSize="1rem"
                        fontWeight={600}
                        color={
                          identifyNumber(coin.change24hInETH) ? "red" : "green"
                        }
                      >
                        {coin.change24hInETH}
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Box>         
            </Flex>
            <Flex
              maxW="1300px"
              w="100%"
              m="0 auto"
              justifyContent="space-evenly"
              alignItems="center"
              mt="5rem"
              gap="1rem"
              flexWrap="wrap"
            >
              <CardGit
                loaded={isFetching}
                title="GitHub Followers"
                value={coin.subscribers}
              />
              <CardGit
                loaded={isFetching}
                title="GitHub Stars"
                value={coin.stars}
              />
              <CardGit
                loaded={isFetching}
                title="GitHub Forks"
                value={coin.forks}
              />
            </Flex>
          </Stack>
        </Flex>
      )}
    </>
  );
}
