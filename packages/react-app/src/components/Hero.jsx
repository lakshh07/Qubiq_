import React from "react";
import { Box, Button, Flex, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import mainbg2 from "../assets/mainbg2.png";
import { Link } from "react-router-dom";
import { Account } from ".";
import { NETWORK } from "../constants";

function Hero({
  useBurner,
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  selectedChainId,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  isContract,
}) {
  return (
    <>
      <Box
        className="g"
        //   bg="#E9DCDD"
        px="6%"
        h="100vh"
      >
        <Flex mt="2.5%" justifyContent="space-between">
          <Heading position="absolute" className="heading" fontFamily="Pacifico" mt="0%">
            Qubiq
          </Heading>
          {/* <Button
            bg="black"
            boxShadow="rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
            color="white"
            _hover={{ bg: "blackAlpha.900", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            _focus={{ border: "none" }}
            _active={{ bg: "blackAlpha.900" }}
            fontFamily="Montserrat"
            position="absolute"
            right="20"
            onClick={loadWeb3Modal}
          >
            Connect Wallet
          </Button> */}
          <Box position="absolute" right="20">
            <Account
              selectedChainId={selectedChainId}
              useBurner={useBurner}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </Box>
        </Flex>
        <Flex h="100%" justifyContent="space-around" alignItems="center">
          <Stack>
            <Box>
              <Heading color="black" fontFamily="Philosopher" className="hero-heading">
                Unique smart
                <br />
                investments
                <br />
                delivered to <span>you</span>
              </Heading>
              <Text
                textTransform="capitalize"
                fontFamily="Philosopher"
                color="blackAlpha.800"
                lineHeight="10px"
                fontSize="1.6rem"
              >
                Invest in expert selected cryptoBaskets.
              </Text>
              <Link to="/app">
                <Button
                  mt="3rem"
                  //   onClick={connect}
                  bg="black"
                  boxShadow="rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
                  color="white"
                  _hover={{ bg: "blackAlpha.900", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  _focus={{ border: "none" }}
                  _active={{ bg: "blackAlpha.900" }}
                  fontFamily="Montserrat"
                >
                  Launch App &nbsp;✨
                </Button>
              </Link>
            </Box>
          </Stack>
          <Box className="hero-blur" rounded="lg">
            <Image w="75%" h="50%" ml="auto" src={mainbg2} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
