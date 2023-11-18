import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  List,
  ListItem,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logo from "../../public/brand/logo.svg";
import diamond from "../../public/icons/diamond.svg";
import search from "../../public/icons/search.svg";
import notification from "../../public/icons/notification.svg";
import Sidebar from "./Sidebar";
import { links } from "../data/links";
import Search from "./Search";
import { X } from "lucide-react";

export default function Navbar() {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [isLargerThan1450] = useMediaQuery("(max-width: 1450px)");
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  const toggleExpand = () => {
    setIsExpand(true);
  };

  const toggleDecrease = () => {
    setIsExpand(false);
  };

  useEffect(() => {
    if (isLargerThan1450) {
      toggleDecrease();
    }
  }, [isLargerThan1450]);

  return (
    <Box
      position="sticky"
      top="0"
      zIndex={10}
      w="100%"
      bg="white"
      py={4}
      px={isLargerThan800 ? 4 : 6}
    >
      <Flex
        maxW="1700px"
        w="100%"
        m="0 auto"
        alignItems="center"
        gap="1rem"
        justifyContent={isExpand ? "normal" : "space-between"}
      >
        <Stack direction="row" alignItems="center" gap="1rem">
          {isLargerThan1450 ? (
            <Stack direction="row" alignItems="center" gap="0.4rem">
              <Sidebar />
              <Search />
            </Stack>
          ) : (
            <Image src={logo} alt="Cain Market Cap logo brand." />
          )}

          {isLargerThan1450 ? null : (
            <List
              gap="2rem"
              display="flex"
              transition="all 0.4s ease"
              opacity={isExpand ? "0" : "1"}
              position={isExpand ? "absolute" : "inherit"}
            >
              {links.map((link) => (
                <ListItem key={link}>
                  <Link
                    href={link === "Cryptocurrencies" ? "/" : "#"}
                    lineHeight="1.21rem"
                    fontSize="1.125rem"
                    fontWeight={600}
                    position="relative"
                  >
                    {link === "CrypTown" && (
                      <Image
                        src={notification}
                        alt="Notification pendent"
                        position="absolute"
                        right="-8px"
                        top="-6px"
                      />
                    )}

                    {link}
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
        </Stack>

        <Stack
          position="relative"
          direction="row"
          w={isExpand ? "100%" : "auto"}
          gap={isLargerThan800 ? "0.6rem" : "1rem"}
        >
          <Image
            transition="all 0.4s ease"
            src={diamond}
            alt="Diamond blue icon."
            opacity={isExpand ? "0" : "1"}
            position={isExpand ? "absolute" : "inherit"}
          />
          <Button
            transition="all 0.4s ease"
            opacity={isExpand ? "0" : "1"}
            position={isExpand ? "absolute" : "inherit"}
            fontSize={isLargerThan800 ? "0.8rem" : "1rem"}
            lineHeight="1.21rem"
            color="dark"
            variant="ghost"
            _hover={{ bg: "bg_variant" }}
          >
            Log in
          </Button>
          <Button
            transition="all 0.4s ease"
            opacity={isExpand ? "0" : "1"}
            position={isExpand ? "absolute" : "inherit"}
            fontSize={isLargerThan800 ? "0.8rem" : "1rem"}
            lineHeight="1.21rem"
            bgColor="blue"
            color="white"
          >
            Sign Up
          </Button>

          {isLargerThan1450 ? null : (
            <InputGroup
              transition="all 0.4s ease"
              w={isExpand ? "100%" : "200px"}
              bgColor="bg_variant"
              onClick={toggleExpand}
            >
              <InputLeftElement
                children={<Image src={search} alt="Search icon." />}
              />
              <Input
                color="gray_slightly"
                lineHeight="1.21rem"
                fontWeight={600}
                placeholder="Pesquisar"
                border="none"
                focusBorderColor="transparent"
              />
              <InputRightElement
                children={
                  <Box
                    color="bg_variant"
                    bg="gray_slightly"
                    borderRadius="4px"
                    h="20px"
                    w="20px"
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    /
                  </Box>
                }
              />
            </InputGroup>
          )}
          {isExpand && (
            <Button color="gray_slightly" onClick={toggleDecrease}>
              <X />
            </Button>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}
