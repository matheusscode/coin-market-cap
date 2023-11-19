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
  Skeleton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BreadRoute from "../components/Route";
import starInactive from "../../public/icons/favorite_inactive.svg";
import starActive from "../../public/icons/favorite_active.svg";
import Triangle from "../components/Triangle";
import { currencyFormatter } from "../utils/currencyFormatter";
import CardGit from "../components/CardGIt";
import useFetch from "../hooks/useFetching";
import { SpecificCoinPros } from "../types";
import { percentageFormatter } from "../utils/percentageFormatter";
import { useFavoriteContext } from "../hooks/useFavorite";

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
  const { data: coin, isFetching } = useFetch<SpecificCoinPros>(`coins/${id}`);
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
  const [isLargerThan660] = useMediaQuery("(max-width: 660px)");

  console.log(coin);

  return (
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
          <Box w={isLargerThan800 ? "100%" : "300px" }>
            <Stack alignItems="center" direction="row" gap="0.6rem">
              <Skeleton
                width="32px"
                height="32px"
                startColor="gray"
                endColor="white"
                borderRadius="50%"
                isLoaded={isFetching === false ? true : false}
              >
                <Image
                  src={coin?.image.small}
                  alt={coin?.name}
                  w="100%"
                  h="100%"
                />
              </Skeleton>

              <Skeleton
                mt="0.4rem"
                display="flex"
                alignItems="center"
                gap="0.6rem"
                width="100%"
                startColor="gray"
                endColor="white"
                isLoaded={isFetching === false ? true : false}
              >
                <Heading as="h1" fontSize="2.5rem" lineHeight="3.025625rem">
                  {coin?.name}
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
                  {coin?.symbol}
                </Badge>
                <Button
                  onClick={() => toggleFavoriteCoin(coin?.name as string)}
                  p="0"
                >
                  <Image
                    animation={
                      isCoinSavedAsFavorite(coin?.name as string)
                        ? shakeIn
                        : undefined
                    }
                    src={
                      isCoinSavedAsFavorite(coin?.name as string)
                        ? starActive
                        : starInactive
                    }
                    alt={
                      isCoinSavedAsFavorite(coin?.name as string)
                        ? "Star active."
                        : "Star inactive."
                    }
                  />
                </Button>
              </Skeleton>
            </Stack>
            <Skeleton
            mt="0.4rem"
              width="100%"
              startColor="gray"
              endColor="white"
              isLoaded={isFetching === false ? true : false}
            >
              <Badge
                mt="0.5rem"
                p="0.5rem"
                borderRadius="8px"
                color="light"
                bg="gray"
                px={3}
              >
                Classificação #{coin?.market_cap_rank}
              </Badge>
            </Skeleton>
          </Box>

          <Box  w={isLargerThan800 ? "100%" : "300px" }>
            <Skeleton
              width="100%"
              startColor="gray"
              endColor="white"
              isLoaded={isFetching === false ? true : false}
            >
              <Heading
                as="h2"
                fontSize="1rem"
                color="gray_slightly"
                lineHeight="1.21rem"
                fontWeight={600}
              >
                Preço do(a) {coin?.name} ({coin?.symbol.toUpperCase()}){" "}
              </Heading>
            </Skeleton>
            <Stack direction="row" alignItems="center" mt="0.4rem" gap="1rem">
              <Skeleton
                width="100%"
                startColor="gray"
                endColor="white"
                isLoaded={isFetching === false ? true : false}
              >
                <Text
                  color="dark"
                  fontSize="2.5rem"
                  lineHeight="3.025625rem"
                  fontWeight={700}
                >
                  {currencyFormatter(coin?.market_data.current_price.brl)}
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
                  {percentageFormatter(
                    coin?.market_data.price_change_percentage_24h
                  )}
                </Badge>
              </Skeleton>
            </Stack>

            <Stack mt="0.4rem" gap="0.4rem">
              <Skeleton
                width="100%"
                startColor="gray"
                endColor="white"
                isLoaded={isFetching === false ? true : false}
              >
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
                    0.000001382 BTC
                  </Text>

                  <Flex alignItems="center" gap="0.4rem">
                    <Triangle direction="top" />
                    <Text
                      lineHeight="1.21rem"
                      fontSize="1rem"
                      fontWeight={600}
                      color="green"
                    >
                      2.13%
                    </Text>
                  </Flex>
                </Stack>
              </Skeleton>

              <Skeleton
                width="100%"
                startColor="gray"
                endColor="white"
                isLoaded={isFetching === false ? true : false}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Text
                    color="gray_slightly"
                    lineHeight="1.21rem"
                    fontSize="1rem"
                    fontWeight={400}
                  >
                    0.00001973 ETH
                  </Text>

                  <Flex alignItems="center" gap="0.4rem">
                    <Triangle direction="top" />
                    <Text
                      lineHeight="1.21rem"
                      fontSize="1rem"
                      fontWeight={600}
                      color="green"
                    >
                      2.13%
                    </Text>
                  </Flex>
                </Stack>
              </Skeleton>
            </Stack>
          </Box>
        </Flex>

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
              value={coin?.developer_data.subscribers}
            />

            <CardGit
              loaded={isFetching}
              title="GitHub Stars"
              value={coin?.developer_data.stars}
            />

            <CardGit
              loaded={isFetching}
              title="GitHub Forks"
              value={coin?.developer_data.forks}
            />
          </Flex>
        )}
      </Stack>
    </Flex>
  );
}
