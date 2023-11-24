import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  useMediaQuery,
  Image,
  Flex,
  Stack,
  List,
  ListItem,
  Heading,
  Badge,
  Text,
} from "@chakra-ui/react";
import search from "../../public/icons/search.svg";
import { useSearchContext } from "../hooks/useSearch";
import { X } from "lucide-react";
import { CoinsFormattedProps } from "../types";
import { useEffect, useRef, useState } from "react";
import { coinsFormatted } from "../utils/coinsFormatted";
import { currencyFormatter } from "../utils/currencyFormatter";
import { NavLink } from "react-router-dom";
import { useCoinsContext } from "../hooks/useCoins";

interface SearchBarProps {
  isExpand: boolean;
  toggleExpand: () => void;
  toggleDecrease: () => void;
  location: string;
  setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({
  isExpand,
  toggleDecrease,
  toggleExpand,
  location,
  setIsExpand,
}: SearchBarProps) {
  const { searchCoin, setSearchCoin } = useSearchContext();
  const [isLargerThan1450] = useMediaQuery("(max-width: 1450px)");
  const { data, currency } = useCoinsContext();

  const inputRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsExpand(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [coins, setCoins] = useState<CoinsFormattedProps[]>([]);

  useEffect(() => {
    if (data) {
      setCoins(coinsFormatted(data));
    }
  }, [data]);

  return (
    <Flex position="relative" flexDirection="column" w="100%" ref={inputRef}>
      <Stack direction="row" gap="1rem">
        {isLargerThan1450 ? null : (
          <InputGroup bgColor="bg_variant" onClick={toggleExpand}>
            <InputLeftElement
              children={<Image src={search} alt="Search icon." />}
            />
            <Input
              border="1px solid transparent"
              _focus={{ background: "white", borderColor: "gray" }}
              color="gray_slightly"
              lineHeight="1.21rem"
              fontWeight={600}
              placeholder="Pesquisar"
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
        )}
        {isExpand && (
          <Button color="gray_slightly" onClick={toggleDecrease}>
            <X />
          </Button>
        )}
      </Stack>
      {location ? (
        isExpand ? (
          <List
            h="500px"
            shadow="md"
            overflow="hidden"
            overflowY="scroll"
            bg="light"
            w="94.5%"
            position="absolute"
            top="36px"
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
                onClick={toggleDecrease}
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
                    fontSize="1.1rem"
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
                  justifyContent="space-between"
                  gap="0.4rem"
                >
                  <Text color="green" textAlign="right" fontSize="0.9rem">
                    {coin.high24h}
                  </Text>
                  <Text color="red" textAlign="right" fontSize="0.9rem">
                    {coin.low24h}
                  </Text>
                  <Text color="dark" textAlign="right" fontSize="0.9rem">
                    {currencyFormatter(coin.fullyDilutedValuation, currency)}
                  </Text>
                </Stack>
              </ListItem>
            ))}
          </List>
        ) : null
      ) : null}
    </Flex>
  );
}
