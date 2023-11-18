import React from "react";
import {
  Button,
  Stack,
  Td,
  Tr,
  Heading,
  Text,
  useMediaQuery,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useState } from "react";
import { currencyFormatter } from "../utils/currencyFormatter";
import starActive from "../../public/icons/favorite_active.svg";
import starInactive from "../../public/icons/favorite.svg";
import Triangle from "./Triangle";
import { CoinProps } from "../types";

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
  coinData: CoinProps;
}

const Row: React.FC<RowProps> = ({ coinData }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shakeIn = prefersReducedMotion ? undefined : `${shake} 0.5s both`;
  const [favorite, setFavorite] = useState<boolean>(false);
  const [isLargerThan870] = useMediaQuery("(max-width: 870px)");

  const toggleFavoriteCoin = () => {
    setFavorite(!favorite);
  };

  return (
    <Tr
      borderBottom="3px solid #EFF2F5"
      transition="all 0.4s ease"
      _hover={{ bg: "bg_variant" }}
    >
      <Td maxW="66px">
        <Stack direction="row" alignItems="center" gap="0.4rem">
          <Button onClick={toggleFavoriteCoin} p="0">
            <Image
              animation={favorite ? shakeIn : undefined}
              src={favorite ? starActive : starInactive}
              alt={favorite ? "Star active." : "Star inactive."}
            />
          </Button>
          <Text fontSize="1rem" fontWeight={600} lineHeight="1.21rem">
           {coinData.market_cap_rank}
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
          <Button
            bgColor="light_blue"
            color="blue"
            shadow="5px 15px 30px #7E7EB11A"
            lineHeight="0.91rem"
            fontWeight={700}
            fontSize="0.75rem"
          >
            Buy
          </Button>
        </Stack>
      </Td>
      <Td
        isNumeric
        color="dark"
        fontSize="1rem"
        fontWeight={600}
        lineHeight="1.21rem"
      >
        {currencyFormatter(coinData.current_price)}
      </Td>
      <Td isNumeric >
        <Stack direction="row" alignItems="center" justifyContent="right">
          <Triangle direction="bottom" />
          <Text
            color="red"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
           {coinData.low_24h}
          </Text>
        </Stack>
      </Td>
      <Td isNumeric >
        <Stack direction="row" alignItems="center" justifyContent="right">
          <Triangle />
          <Text
            color="green"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
                {coinData.high_24h}
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
        {currencyFormatter(coinData.fully_diluted_valuation)}
      </Td>
    </Tr>
  );
};

export default Row;
