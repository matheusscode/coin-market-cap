import React from "react";
import {
  Button,
  Stack,
  Td,
  Tr,
  Heading,
  Text,
  Image,
  keyframes,
  usePrefersReducedMotion,
  Link,
} from "@chakra-ui/react";
import { currencyFormatter } from "../utils/currencyFormatter";
import starActive from "../../public/icons/favorite_active.svg";
import starInactive from "../../public/icons/favorite.svg";
import Triangle from "./Triangle";
import { CoinsFormattedProps } from "../types";
import { NavLink } from "react-router-dom";
import { useFavoriteContext } from "../hooks/useFavorite";
import { formatMonetaryValue } from "../utils/formatMonetaryValue";

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

interface RowProps {
  coinData: CoinsFormattedProps;
  active: boolean;
}

const Row: React.FC<RowProps> = ({ coinData, active }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shakeIn = prefersReducedMotion ? undefined : `${shake} 0.5s both`;
  const { isCoinSavedAsFavorite, toggleFavoriteCoin } = useFavoriteContext();

  return (
    <Tr
      borderBottom="3px solid #EFF2F5"
      transition="all 0.4s ease"
      _hover={{ bg: "bg_variant" }}
    >
      <Td maxW="66px">
        <Stack direction="row" alignItems="center" gap="0.4rem">
          <Button onClick={() => toggleFavoriteCoin(coinData.name)} p="0">
            <Image
              animation={
                isCoinSavedAsFavorite(coinData.name) ? shakeIn : undefined
              }
              src={
                isCoinSavedAsFavorite(coinData.name) ? starActive : starInactive
              }
              alt={
                isCoinSavedAsFavorite(coinData.name)
                  ? "Star active."
                  : "Star inactive."
              }
            />
          </Button>
          <Text fontSize="1rem" fontWeight={600} lineHeight="1.21rem">
            {coinData.marketCapRank}
          </Text>
        </Stack>
      </Td>
      <Td>
        <Stack direction="row" gap="0.5rem" alignItems="center">
          <Image src={coinData.image} alt={coinData.name} w="20px" h="20px" />
          <Heading
            as="h1"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
            {coinData.name}
          </Heading>
          <Heading
            as="h2"
            fontSize="1rem"
            fontWeight={400}
            lineHeight="1.21rem"
            color="gray_slightly"
          >
            {coinData.symbol.toUpperCase()}
          </Heading>
          <Link
            as={NavLink}
            to={`/coin/${coinData.id}`}
            bgColor="light_blue"
            color="blue"
            shadow="0 0 4px rgba(0,0,0,0.1)"
            lineHeight="0.91rem"
            fontWeight={700}
            borderRadius="6px"
            fontSize="0.75rem"
            py={2}
            px={4}
            _hover={{ bg: "#7E7EB130" }}
          >
            Buy
          </Link>
        </Stack>
      </Td>
      {active ? (
        <Td isNumeric>
          <Stack direction="row" alignItems="center" justifyContent="right">
            <Triangle
              direction={
                coinData.priceChangePercentage24h < 0 ? "bottom" : "top"
              }
            />
            <Text
              color={coinData.priceChangePercentage24h < 0 ? "red" : "green"}
              fontSize="1rem"
              fontWeight={600}
              lineHeight="1.21rem"
            >
              {coinData.priceChangePercentage24h}
            </Text>
          </Stack>
        </Td>
      ) : null}
      <Td
        isNumeric
        color="dark"
        fontSize="1rem"
        fontWeight={600}
        lineHeight="1.21rem"
      >
        {currencyFormatter(coinData.currentPrice)}
      </Td>
      <Td isNumeric>
        <Stack direction="row" alignItems="center" justifyContent="right">
          <Triangle direction="bottom" />
          <Text
            color="red"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
            {coinData.low24h}
          </Text>
        </Stack>
      </Td>
      <Td isNumeric>
        <Stack direction="row" alignItems="center" justifyContent="right">
          <Triangle />
          <Text
            color="green"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
            {coinData.high24h}
          </Text>
        </Stack>
      </Td>
      <Td
        isNumeric
        color="dark"
        fontSize="1rem"
        fontWeight={600}
        lineHeight="1.21rem"
      >
        {formatMonetaryValue(coinData.fullyDilutedValuation)}
      </Td>
    </Tr>
  );
};

export default Row;
