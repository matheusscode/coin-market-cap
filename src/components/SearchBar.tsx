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
} from "@chakra-ui/react";
import search from "../../public/icons/search.svg";
import { useSearchContext } from "../hooks/useSearch";
import { X } from "lucide-react";

interface SearchBarProps {
  isExpand: boolean;
  toggleExpand: () => void;
  toggleDecrease: () => void;
}

export default function SearchBar({isExpand,toggleDecrease,toggleExpand}: SearchBarProps) {

  const { searchCoin, setSearchCoin } = useSearchContext();
    const [isLargerThan1450] = useMediaQuery("(max-width: 1450px)");

  return (
    <Flex          w="100%">
      {isLargerThan1450 ? null : (
        <InputGroup
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
    </Flex>
  );
}
