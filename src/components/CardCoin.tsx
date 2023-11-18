import React from "react";
import { Card, Flex, Image, Stack, Text, Heading } from "@chakra-ui/react";
import favorite from "../../public/icons/favorite_active.svg"

interface CardCoinProps {}

const CardCoin: React.FC<CardCoinProps> = () => {
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
    >
      <Stack direction="row" gap="1rem" alignItems="center">
        <Flex gap="0.2rem">
          <Heading
            as="h1"
            fontSize="2.5rem"
            fontWeight={700}
            fontFamily="int"
            lineHeight="2.275rem"
            color="deep_gray"
          >
            2
          </Heading>
          <Image src={favorite} alt="" />
        </Flex>
        <Stack>
          <Flex>
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
            fontFamily="int"
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
