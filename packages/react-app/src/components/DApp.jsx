import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BsBasket2Fill } from "react-icons/bs";
import Baskets from "./Baskets";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

function DApp({ address, logoutOfWeb3Modal, selectedChainId }) {
  return (
    <>
      <Tabs variant="solid-rounded" orientation="vertical" defaultIndex={1}>
        <Grid templateColumns="1.2fr 6.5fr" h="100vh" w="100%" justifyContent="center" className="d-bg">
          <Box>
            <Navbar selectedChainId={selectedChainId} logoutOfWeb3Modal={logoutOfWeb3Modal} address={address} />
            <TabList pl="0em" mx="3em" my="1em">
              <Flex mb="15em" mt="1em" alignItems="center" justifyContent="center"></Flex>
              <Tab display="none"></Tab>
              <Tab color="white" _selected={{ bg: "whitesmoke", color: "black" }} _focus={{ border: "none" }} mb="1em">
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                  <AiFillHome />
                  <Text fontFamily="Montserrat">Dashboard</Text>
                </Flex>
              </Tab>
              <Tab
                mt="1em"
                color="white"
                _selected={{ bg: "whitesmoke", color: "black" }}
                _focus={{ border: "none" }}
                mb="1em"
              >
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                  <BsBasket2Fill />
                  <Text fontFamily="Montserrat">Baskets</Text>
                </Flex>
              </Tab>
            </TabList>
          </Box>
          <Box w="100%">
            <TabPanels h="100vh" py="0.5em" overflow="scroll">
              <TabPanel mx="1.5em"></TabPanel>

              <TabPanel>
                <Box mt="9em" mx="2em">
                  <Dashboard />
                </Box>
              </TabPanel>

              <TabPanel>
                <Box mt="9em" mx="2em">
                  <Baskets />
                </Box>
              </TabPanel>
            </TabPanels>
          </Box>
        </Grid>
      </Tabs>
    </>
  );
}

export default DApp;
