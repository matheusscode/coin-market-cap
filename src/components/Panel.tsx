import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  useMediaQuery,
  Button,
  Select,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Row from "./Row";
import { CoinProps } from "../types";

interface PanelProps {
  coins: CoinProps[];
}

const headers: string[] = [
  "#",
  "Nome",
  "Preço",
  "24h %",
  "7d %",
  "Valor do mercado",
];

const Panel: React.FC<PanelProps> = ({ coins }) => {
  const [isLargerThan870] = useMediaQuery("(max-width: 870px)");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(6);

  const totalPages = Math.ceil(coins.length / rowsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleCoins = coins.slice(startIndex, endIndex);

  return (
    <TableContainer py={10} >
      <Table variant="simple">
        <Thead>
          <Tr borderBottom="3px solid #EFF2F5">
            {headers.map((header) => (
              <Th
                key={header}
                color="dark"
                fontSize="1rem"
                fontWeight={700}
                lineHeight="1.21rem"
                textTransform="inherit"
                textAlign={header === "Nome" ? "left" : "right"}
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {visibleCoins.map((coin) => (
            <Row key={coin.id} coinData={coin} />
          ))}
        </Tbody>
      </Table>
      <Flex w="100%" justifyContent="space-between" alignItems='center' p={4}>
        <Text color="gray" fontSize="0.975rem" fontWeight={400}>
          Página {currentPage} de {totalPages}
        </Text>
        <Flex>
          <Select
            borderColor="gray"
            color="gray"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            mr="2"
          >
            <option value={6}>6 linhas por página</option>
            <option value={10}>10 linhas por página</option>
            <option value={20}>20 linhas por página</option>
          </Select>
          <Stack direction="row" gap="0.6rem">
            <Button
              onClick={handlePrevPage}
              isDisabled={currentPage === 1}
              variant="ghost"
              color="dark"
              px={8}
              fontSize="0.958rem"
              fontWeight={600}
              _hover={{ bg: "bg_variant" }}
            >
              Anterior
            </Button>
            <Button
              bgColor="blue"
              color="light"
              px={8}
              fontSize="0.958rem"
              fontWeight={600}
              onClick={handleNextPage}
              isDisabled={currentPage === totalPages}
            >
              Próxima
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </TableContainer>
  );
};

export default Panel;
