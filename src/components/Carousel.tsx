import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import CardCoin from "./CardCoin";
import { CoinProps } from "../types";

interface CarouselProps {
  title?: string;
  coins?: CoinProps[];
}

const Carousel: React.FC<CarouselProps> = ({ title, coins }) => {
  return (
    <Stack gap="1rem">
      <Heading as="h1" fontSize="1rem" fontWeight={700} lineHeight="1.21rem">
        {title}
      </Heading>
      <Flex overflowX="hidden">
        <Flex gap="2rem" w="100%" p={1}>
          {coins?.slice(0, 8).map((coin) => (
            <CardCoin key={coin.id} coin={coin} />
          ))}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Carousel;
