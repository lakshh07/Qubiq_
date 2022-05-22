import { Box, Flex, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import result from "../assets/no-results.png";
import basketpic from "../assets/basket.png";

function Dashboard({ basket }) {
  const subscibedBasket = [];
  return (
    <>
      <Box>
        {basket ? (
          <Box>
            <Heading color="white" fontSize="22px" mb="20px" fontFamily="Montserrat">
              Your Baskets
            </Heading>

            <Wrap spacing="40px">
              {basket.map((list, index) => {
                return (
                  <Link key={index} to={`/app/baskets/${list}`}>
                    <WrapItem position="relative" _hover={{ top: "-2px" }}>
                      <Box
                        p="0 0 0 0"
                        cursor="pointer"
                        bg="#e3e6e5"
                        rounded="10px"
                        h="250px"
                        w="250px"
                        border="1px solid #2f8af4"
                        _hover={{ boxShadow: "rgba(245, 245, 245, 0.3) 0px 7px 29px 0px" }}
                      >
                        <Heading
                          textTransform="capitalize"
                          fontWeight="600"
                          fontSize="1.5em"
                          textAlign="center"
                          py="0.7em"
                        >
                          {list}
                        </Heading>
                        <Image rounded="10px" src={basketpic} />
                      </Box>
                    </WrapItem>
                  </Link>
                );
              })}
            </Wrap>
          </Box>
        ) : (
          <Flex pt="11%" justifyContent="center" flexDir="column" alignItems="center">
            <Image src={result} className="h-shadow-white" height={180} width={180} />
            <Heading color="white" fontSize="2em" pt="2em" fontFamily="Montserrat">
              No Basket Subscribed
            </Heading>
          </Flex>
        )}

        <Heading mt="2em" color="white" fontSize="22px" mb="20px" fontFamily="Montserrat">
          Subscribed Baskets
        </Heading>
        {subscibedBasket.length ? (
          <Box>
            <Wrap spacing="40px">
              {subscibedBasket.map((list, index) => {
                return (
                  <Link key={index} to={`/app/baskets/${list}`}>
                    <WrapItem position="relative" _hover={{ top: "-2px" }}>
                      <Box
                        p="0 0 0 0"
                        cursor="pointer"
                        bg="#e3e6e5"
                        rounded="10px"
                        h="250px"
                        w="250px"
                        border="1px solid #2f8af4"
                        _hover={{ boxShadow: "rgba(245, 245, 245, 0.3) 0px 7px 29px 0px" }}
                      >
                        <Heading
                          textTransform="capitalize"
                          fontWeight="600"
                          fontSize="1.5em"
                          textAlign="center"
                          py="0.7em"
                        >
                          {list}
                        </Heading>
                        <Image rounded="10px" src={basketpic} />
                      </Box>
                    </WrapItem>
                  </Link>
                );
              })}
            </Wrap>
          </Box>
        ) : (
          <Flex pt="2%" justifyContent="center" flexDir="column" alignItems="center">
            <Image src={result} className="h-shadow-white" height={180} width={180} />
            <Heading color="white" fontSize="2em" pt="20px" fontFamily="Montserrat">
              No Basket Subscribed
            </Heading>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default Dashboard;
