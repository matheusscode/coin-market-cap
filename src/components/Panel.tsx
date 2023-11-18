import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Row from "./Row";

interface PanelProps {}

const headers: string[] = [
  "#",
  "Nome",
  "Preço",
  "24h %",
  "7d %",
  "Valor do mercado",
];

const Panel: React.FC<PanelProps> = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead >
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
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Panel;
