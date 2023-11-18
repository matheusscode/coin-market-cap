import React from "react";
import {
  Button,
  Stack,
  Td,
  Tr,
  Heading,
  Box,
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

const Row: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const shakeIn = prefersReducedMotion ? undefined : `${shake} 0.5s both`;

  const [favorite, setFavorite] = useState<boolean>(false);
  const [isLargerThan870] = useMediaQuery("(max-width: 870px)");

  const toggleFavoriteCoin = () => {
    setFavorite(!favorite);
  };

  return (
    <Tr borderBottom="3px solid #EFF2F5" transition="all 0.4s ease" _hover={{bg: "bg_variant"}}>
      <Td w="2%">
        <Stack direction="row" alignItems="center" gap="0.4rem" >
          <Button onClick={toggleFavoriteCoin} p="0">
            <Image
              animation={favorite ? shakeIn : undefined}
              src={favorite ? starActive : starInactive}
              alt={favorite ? "Star active." : "Star inactive."}
            />
          </Button>
          <Text fontSize="1rem" fontWeight={600} lineHeight="1.21rem">
            1
          </Text>
        </Stack>
      </Td>
      <Td>
        <Stack direction="row" gap="0.5rem" alignItems="center">
          <Box w="24px" h="24px" bg="red" borderRadius="50%" />
          <Heading
            as="h1"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
            Bitcoin
          </Heading>
          <Heading
            as="h2"
            fontSize="1rem"
            fontWeight={400}
            lineHeight="1.21rem"
            color="gray_slightly"
          >
            BTC
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
        {currencyFormatter(4043562)}
      </Td>
      <Td isNumeric display={isLargerThan870 ? "none" : ""}>
        <Stack>
          <Text
            color="red"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
            1,46%
          </Text>
        </Stack>
      </Td>
      <Td isNumeric display={isLargerThan870 ? "none" : ""}>
        <Stack>
          <Text
            color="green"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="1.21rem"
          >
            2.13%
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
        {currencyFormatter(768904009242)}
      </Td>
    </Tr>
  );
};

export default Row;
