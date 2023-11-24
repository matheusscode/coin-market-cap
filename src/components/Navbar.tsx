import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  keyframes,
  useMediaQuery,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logo from "../../public/brand/logo.svg";
import diamond from "../../public/icons/diamond.svg";
import notification from "../../public/icons/notification.svg";
import Sidebar from "./Sidebar";
import { links } from "../data/links";
import SearchDrawer from "./SearchDrawer";

import SearchBar from "./SearchBar";
import Selector from "./Selector";

const scrollToTop = keyframes`
0% {
  transform: translateY(-110px);
}
100% {
  transform: translateY(0px);
}
`;

export default function Navbar() {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollIn = prefersReducedMotion
    ? undefined
    : `${scrollToTop} 0.4s both`;
  const [isLargerThan1450] = useMediaQuery("(max-width: 1450px)");
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  const pathParts = location.pathname.split("/");
  const showAlternativeSearchbar = pathParts[1];

  const toggleExpand = () => {
    setIsExpand(true);
  };

  const toggleDecrease = () => {
    setIsExpand(false);
  };

  useEffect(() => {
    if (isLargerThan1450 && showAlternativeSearchbar) {
      toggleDecrease();
    }

    if (location.pathname !== "/") {
      setIsExpand(false);
    }
  }, [isLargerThan1450, location, showAlternativeSearchbar]);

  return (
    <Box
      position="sticky"
      top="0"
      zIndex={10}
      w="100%"
      bg="white"
      py={isLargerThan800 ? 2 : 4}
      px={isLargerThan800 ? 4 : 6}
      animation={scrollIn}
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
              <SearchDrawer />
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
          <Stack
            display={isLargerThan1450 ? "none" : ""}
            direction="row"
            transition="all 0.4s ease"
            w={isExpand ? "100%" : "200px"}
            gap={isLargerThan800 ? "0.6rem" : "1rem"}
          >
            <SearchBar
              toggleExpand={toggleExpand}
              toggleDecrease={toggleDecrease}
              isExpand={isExpand}
              location={showAlternativeSearchbar}
              setIsExpand={setIsExpand}
            />
          </Stack>
          <Selector />
        </Stack>
      </Flex>
    </Box>
  );
}
