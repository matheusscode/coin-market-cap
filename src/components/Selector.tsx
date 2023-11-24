import React from "react";
import { Select } from "@chakra-ui/react";
import { useCoinsContext } from "../hooks/useCoins";

const Selector: React.FC = () => {
  const { currency, setCurrency } = useCoinsContext();

  return (
    <Select
      maxW="90px"
      bgColor="bg_variant"
      color="gray"
      outline="none"
      ring="none"
      border="1px"
      borderColor="transparent"
      _focus={{
        backgroundColor: "white",
        outline: "none",
        ring: "none",
        color: "black",
        borderColor: "gray",
      }}
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
    >
      <option value="usd">USD</option>
      <option value="brl">BRL</option>
      <option value="aud">AUD</option>
    </Select>
  );
};

export default Selector;
