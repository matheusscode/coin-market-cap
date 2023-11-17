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
import logo from "../../public/brand/logo.svg";
import diamond from "../../public/icons/diamond.svg";
import search from "../../public/icons/search.svg";
import notification from "../../public/icons/notification.svg";
import Sidebar from "./Sidebar";
import { links } from "../data/links";

export default function Navbar() {
  const [isLargerThan1450] = useMediaQuery("(max-width: 1450px)");

  return (
    <Box w="100%" bg="white" p={2}>
      <Flex
        maxW="1600px"
        w="100%"
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" gap="1rem">
          {isLargerThan1450 ? (
            <Stack direction="row" alignItems="center" gap="1rem">
              <Sidebar />
              <Button>Search</Button>
            </Stack>
          ) : (
            <Image src={logo} alt="Cain Market Cap logo brand." />
          )}

          {isLargerThan1450 ? null : (
            <List gap="1.1rem" display="flex">
              {links.map((link) => (
                <ListItem key={link}>
                  <Link
                    href="/"
                    lineHeight="1.21rem"
                    fontSize="1.125rem"
                    fontWeight={600}
                    fontFamily="int"
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

        <Stack direction="row" gap="1rem">
          <Image src={diamond} alt="Diamond blue icon." />
          <Button
            fontSize="1rem"
            lineHeight="1.21rem"
            color="dark"
            variant="ghost"
            transition="all 0.4s ease"
            _hover={{ bg: "bg_variant" }}
          >
            Log in
          </Button>
          <Button
            fontSize="1rem"
            lineHeight="1.21rem"
            bgColor="blue"
            color="white"
          >
            Sign Up
          </Button>
          <InputGroup maxW="200px" bgColor="bg_variant">
            <InputLeftElement
              children={<Image src={search} alt="Search icon." />}
            />
            <Input
              color="gray_slightly"
              lineHeight="1.21rem"
              fontWeight={600}
              fontFamily="int"
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
        </Stack>
      </Flex>
    </Box>
  );
}
