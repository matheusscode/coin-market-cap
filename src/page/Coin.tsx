import React from "react"
import { Stack, Heading, useMediaQuery,     Flex,  Breadcrumb,
  BreadcrumbItem,
  Box,
  Badge,
  Image,
  Button,
  Text, } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import BreadRoute from "../components/Route";
import starInactive from "../../public/icons/favorite_inactive.svg"
import Triangle from "../components/Triangle";
import { currencyFormatter } from "../utils/currencyFormatter";
import CardGit from "../components/CardGIt";

export default function Coin() {
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");


  const { id } = useParams();
  const capitalizedId = id?.charAt(0).toUpperCase() + id!.slice(1);



    return (
      <Flex w="100%" h="100%"  overflow="hidden">
        <Stack
          maxW="1700px"
          m="0 auto"
          h="100%"
          w="100%"
          px={isLargerThan800 ? 4 : 6}
        >
          <Breadcrumb mt="3.5rem" gap="1rem" separator=">">
            <BreadcrumbItem>
              <BreadRoute text="Cryptocurrencies" color="gray" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadRoute text="Coins" color="gray" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadRoute text={`${capitalizedId}`} color="dark" />
            </BreadcrumbItem>
          </Breadcrumb>

          <Flex mt="3.5rem" w="100%" justifyContent="space-between">
            <Box>
              <Stack alignItems="center" direction="row" gap="0.6rem">
                <Image src="" alt="" />
                <Heading as="h1" fontSize="2.5rem" lineHeight="3.025625rem">
                  Ravencoin
                </Heading>
                <Badge
                  bg="bg_variant"
                  p={1}
                  px={2}
                  borderRadius="8px"
                  lineHeight="0.9075rem"
                  fontWeight={400}
                  fontSize="0.75rem"
                  w="45px"
                  h="31px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray_slightly"
                >
                  RVN
                </Badge>
                <Button p={0}>
                  <Image src={starInactive} alt="" />
                </Button>
              </Stack>
              <Badge
                mt="0.5rem"
                p="0.5rem"
                borderRadius="8px"
                color="light"
                bg="gray"
              >
                Classificação #110
              </Badge>
            </Box>

            <Box>
              <Heading
                as="h2"
                fontSize="1rem"
                color="gray_slightly"
                lineHeight="1.21rem"
                fontWeight={600}
              >
                Preço de Ravencoin (RVN){" "}
              </Heading>

              <Stack direction="row" alignItems="center" gap="1rem">
                <Text
                  color="dark"
                  fontSize="2.5rem"
                  lineHeight="3.025625rem"
                  fontWeight={700}
                >
                  {currencyFormatter(29189)}
                </Text>
                <Badge
                  bgColor="green"
                  color="light"
                  borderRadius="8px"
                  p={1}
                  px={2}
                  fontSize="0.75rem"
                  lineHeight="0.9075rem"
                  fontWeight={700}
                >
                  6.94%
                </Badge>
              </Stack>

              <Stack gap="0.4rem">
                <Stack direction="row" justifyContent="space-between">
                  <Text
                    color="gray_slightly"
                    lineHeight="1.21rem"
                    fontSize="1rem"
                    fontWeight={400}
                  >
                    0.000001382 BTC
                  </Text>

                  <Flex alignItems="center" gap="0.4rem">
                    <Triangle direction="top" />
                    <Text
                      lineHeight="1.21rem"
                      fontSize="1rem"
                      fontWeight={600}
                      color="green"
                    >
                      2.13%
                    </Text>
                  </Flex>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Text
                    color="gray_slightly"
                    lineHeight="1.21rem"
                    fontSize="1rem"
                    fontWeight={400}
                  >
                    0.00001973 ETH
                  </Text>

                  <Flex alignItems="center" gap="0.4rem">
                    <Triangle direction="top" />
                    <Text
                      lineHeight="1.21rem"
                      fontSize="1rem"
                      fontWeight={600}
                      color="green"
                    >
                      2.13%
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
            </Box>
          </Flex>

          <Flex
            maxW="1300px"
            w="100%"
            m="0 auto"
            justifyContent="space-evenly"
            alignItems="center"
            mt="5rem"
            gap="1rem"
            flexWrap="wrap"
          >
            <CardGit />
            <CardGit />
            <CardGit />
          </Flex>
        </Stack>
      </Flex>
    );
}

