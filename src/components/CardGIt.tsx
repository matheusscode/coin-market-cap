import React from 'react'
import { Card, Heading,Text } from "@chakra-ui/react";

interface CardGitProps {

}

const CardGit: React.FC<CardGitProps> = ({}) => {
  return (
    <Card
      w="319px"
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
        color="gray_slightly"
        fontWeight={600}
      >Github Followers</Heading>
      <Text
        color="deep_gray"
        fontWeight={700}
        lineHeight="3.025625rem"
        fontSize="2.5rem"
      >
        286
      </Text>
    </Card>
  );
};

export default CardGit