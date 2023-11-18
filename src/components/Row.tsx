import React from "react";
import { Button, Stack, Td, Tr, Heading, Box, Text } from "@chakra-ui/react";

const Row: React.FC = () => {
  return (
    <Tr borderBottom="3px solid #EFF2F5">
      <Td>1</Td>
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
        $40,435.62
      </Td>
      <Td isNumeric>
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
      <Td isNumeric>
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
        $768,904,009,242
      </Td>
    </Tr>
  );
};

export default Row;
