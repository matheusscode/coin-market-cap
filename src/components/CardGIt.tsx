import React from 'react'
import { Card, Heading,Skeleton,Text, useMediaQuery } from "@chakra-ui/react";

interface CardGitProps {
  title: string;
  value?: number;
  loaded: boolean
}

const CardGit: React.FC<CardGitProps> = ({ title, value, loaded }) => {
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Skeleton
      w={isLargerThan700 ? "100%" : "319px"}
      startColor="gray"
      endColor="white"
      isLoaded={loaded === false ? true : false}
    >
      <Card
        h="119px"
        borderRadius="8px"
        bg="light"
        border="1px solid #E5E5E5"
        p="1.5rem"
      >
        <Heading
          as="h1"
          lineHeight="1.21rem"
          fontSize="1rem"
          textAlign={isLargerThan700 ? "center" : "left"}
          color="gray_slightly"
          fontWeight={600}
        >
          {title}
        </Heading>
        <Text
          color="deep_gray"
          fontWeight={700}
          textAlign={isLargerThan700 ? "center" : "left"}
          lineHeight="3.025625rem"
          fontSize="2.5rem"
        >
          {value}
        </Text>
      </Card>
    </Skeleton>
  );
};

export default CardGit