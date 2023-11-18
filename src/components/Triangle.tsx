import { Box } from "@chakra-ui/react";
import React from "react";

interface TriangleProps {
  direction?: "top" | "bottom";
  attachament?: string;
}

const Triangle: React.FC<TriangleProps> = ({ direction = "top", attachament = "4px" }) => {
  return (
    <Box
      w="0"
      h="0"
      borderLeft="4px solid transparent"
      borderRight="4px solid transparent"
      borderBottom={`${attachament} solid ${direction === "bottom" ? "red" : "green"}`}
      transform={direction === "bottom" ? "rotate(180deg)" : "rotate(0)"}
    />
  );
};

export default Triangle;
