import { Box, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import basketpic from "../assets/basket.png";

function Baskets({ basket }) {
  const navigate = useNavigate();
  return (
    <>
      <Box color="white">
        <Wrap spacing="40px">
          {basket.map((list, index) => {
            return (
              <Link key={index} to={`/app/subscribe/${list}`}>
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
                    <Heading textTransform="capitalize" fontWeight="600" fontSize="1.5em" textAlign="center" py="0.7em">
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
    </>
  );
}

export default Baskets;
