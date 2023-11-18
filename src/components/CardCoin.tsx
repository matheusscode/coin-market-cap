import React from "react";
import { Card, Flex, Image, Stack, Text, Heading, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import startIcon from "../../public/icons/favorite_active.svg";
import Triangle from "./Triangle";

interface CardCoinProps {}

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

const CardCoin: React.FC<CardCoinProps> = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const jumpIn = prefersReducedMotion ? undefined : `${jump} 0.5s both`;

  return (
    <Card
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="118px"
      minW="222px"
      p="1rem 2.75rem 1rem 1.5rem"
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
            2
          </Heading>
          <Image src={startIcon} alt="Star" animation={jumpIn} />
        </Flex>
        <Stack>
          <Flex alignItems="center" gap="0.4rem">
            <Heading
              as="h2"
              fontFamily="ipm"
              fontWeight={700}
              fontSize="1.75rem"
              lineHeight="2.275rem"
              color="deep_gray"
            >
              EOS
            </Heading>
            <Triangle attachament="10px" />
          </Flex>
          <Text
            color="gray_slightly"
            fontSize="1rem"
            lineHeight="1.21rem"
            fontWeight={400}
          >
            R$ 1.844,39
          </Text>
          <Text
            color="green"
            fontWeight={400}
            fontSize="1rem"
            lineHeight="1.21rem"
          >
            +10,44%
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardCoin;
