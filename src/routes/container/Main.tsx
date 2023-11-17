import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <Flex w="100%" h="100%" flexDirection="column" bgColor="bg">
      <Outlet />
    </Flex>
  );
}
