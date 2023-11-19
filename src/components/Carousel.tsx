import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import CardCoin from "./CardCoin";
import { GCoinProps } from "../types";

interface CarouselProps {
  title?: string;
  coins?: GCoinProps[];
}

const Carousel: React.FC<CarouselProps> = ({ title, coins }) => {
  return (
    <Stack gap="1rem">
      <Heading
        as="h1"
        px={1}
        fontSize="1rem"
        fontWeight={700}
        lineHeight="1.21rem"
      >
        {title}
      </Heading>
      <Flex
        overflow="hidden"
        overflowX="scroll"
        px={1}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Heading
          as="h2"
          color="gray_slightly"
          fontWeight={400}
          fontSize="1.3rem"
        >
          Você não favoritou nenhuma moeda.
        </Heading>
        {/* <Flex gap="2rem" w="100%" py={2} pr={8}>
          {coins?.slice(0, 8).map((coin) => (
            <CardCoin key={coin.id} coin={coin} />
          ))}
        </Flex> */}
      </Flex>
    </Stack>
  );
};

export default Carousel;
