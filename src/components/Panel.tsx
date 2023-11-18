import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Box,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

interface PanelProps {}

  const headers:string[] = ["#", "Nome", "Preço", "24h %", "7d %", "Valor do mercado"]

const Panel: React.FC<PanelProps> = () => {

  return (
    <TableContainer >
      <Table variant="simple"  >
        <Thead >
          <Tr >
            {headers.map((header) => (
              <Th key={header} color="dark" fontSize="1rem" fontFamily="int" fontWeight={700} lineHeight="1.21rem" textTransform="inherit" textAlign="right">{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody >
          <Tr>
            <Td>1</Td>
            <Td>
              <Stack direction="row" alignItems='center'>
                <Box />
                <Heading as="h1" fontSize="1rem" fontFamily="int"  fontWeight={600} lineHeight="1.21rem">Bitcoin</Heading>
                <Heading as="h2" fontSize="1rem" fontFamily="int"  fontWeight={400} lineHeight="1.21rem" color="gray_slightly">BTC</Heading>
                <Button bgColor="light_blue" color="blue" shadow="5px 15px 30px #7E7EB11A" lineHeight="0.91rem" fontWeight={700} fontFamily="int" fontSize="0.75rem">
                  Buy
                </Button>
              </Stack>
            </Td>
            <Td isNumeric color="dark" fontSize="1rem" fontFamily="int" fontWeight={600} lineHeight="1.21rem">$40,435.62</Td>
            <Td isNumeric>
              <Stack>
                <Text color="red" fontSize="1rem" fontFamily="int" fontWeight={600} lineHeight="1.21rem">1,46%</Text>
              </Stack>
            </Td>
            <Td isNumeric>
              <Stack>
                <Text color="green" fontSize="1rem" fontFamily="int" fontWeight={600} lineHeight="1.21rem">2.13%</Text>
              </Stack>
            </Td>
            <Td isNumeric color="dark" fontSize="1rem" fontFamily="int" fontWeight={600} lineHeight="1.21rem">$768,904,009,242</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Panel;
