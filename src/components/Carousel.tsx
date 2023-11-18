import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import CardCoin from "./CardCoin";

interface CarouselProps {
  title?: string;
  data?: any;
}

const Carousel: React.FC<CarouselProps> = ({ title }) => {
  return (
    <Stack gap="1rem">
      <Heading
        as="h1"
        fontSize="1rem"
        fontFamily="int"
        fontWeight={700}
        lineHeight="1.21rem"
      >
        {title}
      </Heading>
      <Flex overflowX="hidden">
        <Flex gap="2rem" w="100%">
          <CardCoin />
          <CardCoin />
          <CardCoin />
          <CardCoin />
          <CardCoin />
          <CardCoin />
          <CardCoin />
          <CardCoin />
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Carousel;
