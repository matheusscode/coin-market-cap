import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  Button,
  Image,
  Box,
  InputRightElement,
  InputLeftElement,
  Input,
  InputGroup,
  DrawerCloseButton,
  useMediaQuery,
  DrawerBody,
  ListItem,
  Stack,
  Heading,
  Badge,
  Text,
  List,
} from "@chakra-ui/react";
import search from "../../public/icons/search.svg";
import { Search as SearchIcon } from "lucide-react";
import { useSearchContext } from "../hooks/useSearch";
import { NavLink } from "react-router-dom";
import { CoinsFormattedProps } from "../types";
import { useEffect, useState } from "react";
import { coinsFormatted } from "../utils/coinsFormatted";
import { formatMonetaryValue } from "../utils/formatMonetaryValue";
import { useCoinsContext } from "../hooks/useCoins";
import Selector from "./Selector";

export default function SearchDrawer() {
  const { searchCoin, setSearchCoin } = useSearchContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
  const [isLargerThan650] = useMediaQuery("(max-width: 650px)");
  const { data, currency } = useCoinsContext();

  const [coins, setCoins] = useState<CoinsFormattedProps[]>([]);

  useEffect(() => {
    if (data) {
      const filteredCoins = coinsFormatted(data).filter((coin) =>
        coin.name.toLowerCase().includes(searchCoin.toLowerCase())
      );
      setCoins(filteredCoins);
    }
  }, [data, searchCoin]);

  return (
    <>
      <Button
        variant="ghost"
        transition="all 0.4s ease"
        _hover={{ bg: "bg_variant" }}
        p={isLargerThan800 ? 1 : "auto"}
        onClick={onOpen}
      >
        <SearchIcon size={20} />
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent h="100%">
          <DrawerHeader
            display="flex"
            alignItems="center"
            gap="2rem"
            borderBottomWidth="1px"
          >
            <InputGroup bgColor="bg_variant">
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
                value={searchCoin}
                onChange={(e) => setSearchCoin(e.target.value)}
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
            <Selector />
            <DrawerCloseButton
              fontSize="1.2rem"
              color="dark"
              position="initial"
            />
          </DrawerHeader>
          <DrawerBody p={0} h="100%">
            <List
              h="100%"
              overflow="hidden"
              overflowY="scroll"
              w="100%"
              p="0.4rem"
              gap="0.2rem"
              display="flex"
              flexDirection="column"
              borderBottomLeftRadius="8px"
              borderBottomRightRadius="8px"
              css={{
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#30303030",
                  borderRadius: "24px",
                  transition: "all 0.4s ease",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#30303080",
                  borderRadius: "24px",
                },
              }}
            >
              {coins.map((coin) => (
                <ListItem
                  as={NavLink}
                  to={`/coin/${coin.id}`}
                  key={coin.id}
                  display="flex"
                  justifyContent="space-between"
                  gap="1rem"
                  transition="all 0.4s ease"
                  borderRadius="8px"
                  _hover={{ bg: "light" }}
                  p={2}
                  onClick={onClose}
                >
                  <Stack direction="row" alignItems="center" gap="0.6rem">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      w="28px"
                      h="28px"
                      borderRadius="50%"
                    />
                    <Heading
                      as="h1"
                      fontSize="1rem"
                      fontWeight={400}
                      color="dark"
                    >
                      {coin.name}
                    </Heading>
                    <Badge
                      bg="gray_slightly"
                      color="light"
                      p="0.2rem"
                      px={2}
                      borderRadius="8px"
                    >
                      {coin.symbol}
                    </Badge>
                  </Stack>
                  <Stack
                    direction="row"
                    w="350px"
                    justifyContent="flex-end"
                    gap="2rem"
                  >
                    <Text
                      display={isLargerThan650 ? "none" : ""}
                      color="green"
                      fontSize="0.9rem"
                    >
                      {coin.high24h}
                    </Text>
                    <Text
                      display={isLargerThan650 ? "none" : ""}
                      color="red"
                      fontSize="0.9rem"
                    >
                      {coin.low24h}
                    </Text>
                    <Text color="dark" fontSize="0.9rem">
                      {formatMonetaryValue(coin.fullyDilutedValuation, currency)}
                    </Text>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
