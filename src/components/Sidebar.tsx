import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Box,
  Image,
  List,
  Link,
  ListItem,
} from "@chakra-ui/react";
import { links } from "../data/links";
import logo from "../../public/brand/logo.svg";
import notification from "../../public/icons/notification.svg";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<null>(null);

  return (
    <>
      <Button
        ref={btnRef}
        variant="ghost"
        transition="all 0.4s ease"
        _hover={{ bg: "bg_variant" }}
        w="60px"
        onClick={onOpen}
      >
        <Stack gap="0.4rem">
          <Box w="20px" h="3px" p="0.01rem" bg="dark" />
          <Box w="20px" h="3px" p="0.01rem" bg="dark" />
          <Box w="20px" h="3px" p="0.01rem" bg="dark" />
        </Stack>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src={logo} alt="Cain Market Cap logo brand." />
          </DrawerHeader>

          <DrawerBody mt="2rem">
            <List display="flex" flexDirection="column" gap="1rem">
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
                        right="-10px"
                        top="-6px"
                      />
                    )}

                    {link}
                  </Link>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
