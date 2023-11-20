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
} from "@chakra-ui/react";
import search from "../../public/icons/search.svg";
import { Search as SearchIcon } from "lucide-react";
import { useSearchContext } from "../hooks/useSearch";

export default function SearchDrawer() {
  const { searchCoin, setSearchCoin } = useSearchContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Button
        variant="ghost"
        transition="all 0.4s ease"
        _hover={{ bg: "bg_variant" }}
        p={isLargerThan800 ? 1 : "auto"}
        onClick={onOpen}
      >
        <SearchIcon />
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
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
            <DrawerCloseButton
              fontSize="1.2rem"
              color="dark"
              position="initial"
            />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
