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
    <Stack gap="1rem" >
      <Heading as="h1" px={1} fontSize="1rem" fontWeight={700} lineHeight="1.21rem">
        {title}
      </Heading>
      <Flex 
        overflow="hidden" 
        overflowX="scroll" px={1} 
        css={{
    '&::-webkit-scrollbar': {
      display: 'none'
    },

  }}>
        <Flex gap="2rem" w="100%" py={2} pr={8} >
          {coins?.slice(0, 8).map((coin) => (
            <CardCoin key={coin.id} coin={coin} />
          ))}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Carousel;
