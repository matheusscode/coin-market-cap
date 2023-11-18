import {  Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Main() {
  return (
    <Flex w="100%" flexDirection="column" bgColor="bg">
      <Navbar />
      <Outlet />
    </Flex>
  );
}
