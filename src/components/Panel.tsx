import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  useMediaQuery,
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
  

  return (
    <TableContainer >
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
          {coins?.map((coin) => (
            <Row key={coin.id} coinData={coin} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Panel;
