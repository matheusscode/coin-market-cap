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
  Image,
  List,
  Link,
  ListItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { links } from "../data/links";
import logo from "../../public/brand/logo.svg";
import notification from "../../public/icons/notification.svg";
import { Menu } from "lucide-react";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<null>(null);
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Button
        ref={btnRef}
        variant="ghost"
        p={isLargerThan800 ? 1 : "auto"}
        transition="all 0.4s ease"
        _hover={{ bg: "bg_variant" }}
        onClick={onOpen}
      >
        <Menu />
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
