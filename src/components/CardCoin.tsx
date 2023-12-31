import React from "react";
import {
  Card,
  Flex,
  Image,
  Stack,
  Text,
  Heading,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import startIcon from "../../public/icons/favorite_active.svg";
import Triangle from "./Triangle";
import { CoinsFormattedProps } from "../types";
import { currencyFormatter } from "../utils/currencyFormatter";
import { NavLink } from "react-router-dom";
import { useCoinsContext } from "../hooks/useCoins";

interface CardCoinProps {
  coin: CoinsFormattedProps;
}

const jump = keyframes`
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(-10px);
}
100% {
  transform: translateY(0);
}`;

const CardCoin: React.FC<CardCoinProps> = ({ coin }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { currency } = useCoinsContext();

  const jumpIn = prefersReducedMotion ? undefined : `${jump} 0.5s both`;

  return (
    <Card
      as={NavLink}
      to={`/coin/${coin.id}`}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="118px"
      minW="222px"
      p="1rem 1.5rem 1rem "
      borderRadius="8px"
      border="1px solid border"
      transition="all 0.4s ease"
      _hover={{ bg: "bg_variant" }}
    >
      <Stack direction="row" gap="1rem" alignItems="center">
        <Flex gap="0.2rem">
          <Heading
            as="h1"
            fontSize="2.5rem"
            fontWeight={700}
            lineHeight="2.275rem"
            color="deep_gray"
          >
            {coin.marketCapRank}
          </Heading>
          <Image src={startIcon} alt="Star" animation={jumpIn} />
        </Flex>
        <Stack textAlign="right">
          <Flex alignItems="center" justifyContent="flex-end" gap="0.4rem">
            <Heading
              as="h2"
              fontFamily="ipm"
              fontWeight={700}
              fontSize="1.75rem"
              lineHeight="2.275rem"
              color="deep_gray"
            >
              {coin.symbol.toUpperCase()}
            </Heading>
            <Triangle attachament="12px" />
          </Flex>
          <Text
            color="gray_slightly"
            fontSize="1rem"
            lineHeight="1.21rem"
            fontWeight={400}
          >
            {currencyFormatter(coin.currentPrice, currency)}
          </Text>
          <Text
            color="green"
            fontWeight={400}
            fontSize="1rem"
            lineHeight="1.21rem"
          >
            + {currencyFormatter(coin.priceChange24h, currency)}
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardCoin;
