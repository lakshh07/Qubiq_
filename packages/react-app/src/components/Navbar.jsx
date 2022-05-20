import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsBasket2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import truncateMiddle from "truncate-middle";
import { NETWORK } from "../constants";
import CreateBasket from "./CreateBasket";

function Navbar({ address, logoutOfWeb3Modal, selectedChainId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid mt="2em" templateColumns="0.7fr 1fr 1fr" position="absolute" justifyContent="space-around" w="100%">
        <Link to="/">
          <Heading pl="1.5em" className="h-shadow-white" fontFamily="Pacifico" color="white">
            Qubiq
          </Heading>
        </Link>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<BiSearchAlt color="grey" />} />
          <Input bg="white" type="text" mx="auto" variant="filled" w="100%" placeholder="Search" />
        </InputGroup>

        <Flex alignItems="baseline" justifyContent="space-around">
          <Button
            alignItems="center"
            boxShadow="rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
            rounded="20px"
            ml="4em"
            w="min-content"
            p="4px 20px"
            className="btn-gradient"
            _hover={{
              top: "-2px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            fontFamily="Montserrat"
            leftIcon={<BsBasket2 />}
            onClick={onOpen}
          >
            Create Basket
          </Button>

          <CreateBasket isOpen={isOpen} onClose={onClose} />

          <Flex
            mr="1.5em"
            p="4px 4px 4px 8px"
            borderRadius="12px"
            fontSize="16px"
            justifyContent="center"
            alignItems="center"
            color="white"
            fontFamily="Montserrat"
            bg="#131823"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          >
            <Text textTransform="capitalize">{NETWORK(selectedChainId)?.name}</Text>
            <Box px="8px" py="4px" ml="8px" borderRadius="10px" bg="#324054">
              <Text>{truncateMiddle(address || "", 5, 4, "...")}</Text>
            </Box>
            <Box px="8px" onClick={logoutOfWeb3Modal} cursor="pointer">
              <AiOutlineLogout />
            </Box>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default Navbar;
