import React, { useMemo, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  useMediaQuery,
  Select,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import Row from "./Row";
import { CoinProps } from "../types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PaginationButton from "./PaginationButton";

interface PanelProps {
  coins: CoinProps[];
  searchCoin: string;
}

const headers: string[] = [
  "#",
  "Nome",
  "Preço",
  "24h %",
  "7d %",
  "Valor do mercado",
];

const Panel: React.FC<PanelProps> = ({ coins, searchCoin }) => {
  const [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(6);

  const filteredCoins = useMemo(() => {
    return !searchCoin
      ? coins
      : coins.filter((coin) =>
          coin.name.toLowerCase().includes(searchCoin.toLowerCase())
        );
  }, [coins, searchCoin]);

  const totalPages = Math.ceil(filteredCoins.length / rowsPerPage);

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

  const visibleCoins = filteredCoins.slice(startIndex, endIndex);
  return (
    <>
      <TableContainer py={10}>
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
            {searchCoin
              ? visibleCoins
                  .filter((coin) =>
                    coin.name.toLowerCase().includes(searchCoin.toLowerCase())
                  )
                  .map((coin) => <Row key={coin.id} coinData={coin} />)
              : visibleCoins.map((coin) => (
                  <Row key={coin.id} coinData={coin} />
                ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex
        w="100%"
        justifyContent="space-between"
        flexDirection={isLargerThan600 ? "column" : "row"}
        alignItems="center"
        p={4}
        gap="1rem"
      >
        <Text color="gray" fontSize="0.975rem" fontWeight={400}>
          Página {currentPage} de {totalPages}
        </Text>
        <Flex flexDirection={isLargerThan600 ? "column" : "row"} gap="1rem">
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
            <PaginationButton
              disable={currentPage === 1}
              ariaLabel="handle-next-page"
              onClick={handlePrevPage}
              icon={<ChevronLeft />}
              isReverse
            />

            <PaginationButton
              disable={currentPage === totalPages}
              ariaLabel="handle-next-page"
              onClick={handleNextPage}
              icon={<ChevronRight />}
            />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default Panel;
