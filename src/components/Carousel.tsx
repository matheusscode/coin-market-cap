import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import CardCoin from "./CardCoin";
import { GCoinProps } from "../types";

import { useFavoriteContext } from "../hooks/useFavorite";

interface CarouselProps {
  title?: string;
  coins?: GCoinProps[];
}

const Carousel: React.FC<CarouselProps> = ({ title, coins }) => {
  const { isCoinSavedAsFavorite, favoriteCoin } = useFavoriteContext();


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

      <Stack w="100%" position="relative">
        <Flex
          w="100%"
          p="0 0.2rem"
          gap="1rem"
          css={{
            "&::-webkit-scrollbar": {
              height: "6px",
            },

            "&::-webkit-scrollbar-thumb": {
              background: "#30303010",
              borderRadius: "24px",
              transition: "all 0.4s ease",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#30303050",
              borderRadius: "24px",
            },
          }}
          overflowX="scroll"
          overflowY="hidden"
          whiteSpace="nowrap"
        >
          {favoriteCoin.length > 0 ? (
            <Flex gap="2rem" w="100%" py={2} pr={8}>
              {coins
                ?.filter((coin) => isCoinSavedAsFavorite(coin.name))
                .slice(0, 8)
                .map((coin) => (
                  <CardCoin key={coin.id} coin={coin} />
                ))}
            </Flex>
          ) : (
            <Heading
              as="h1"
              fontSize="1.25rem"
              fontWeight={600}
              color="#c3b9de"
            >
              Você não favoritou nenhuma moeda.
            </Heading>
          )}
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Carousel;
