import { Box, Button, Flex, Tag } from "@chakra-ui/react";
import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { NETWORK } from "../constants";
import truncateMiddle from "truncate-middle";
import { AiOutlineLogout } from "react-icons/ai";

export default function Account({
  useBurner,
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  selectedChainId,
  isContract,
}) {
  const { currentTheme } = useThemeSwitcher();

  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <Tag
          key="logoutbutton"
          bg="#2C242C"
          boxShadow="rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
          color="white"
          cursor="pointer"
          fontFamily="Montserrat"
          p="0.6em"
          textTransform="capitalize"
          fontSize="15px"
          _hover={{ bg: "blackAlpha.900", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          onClick={logoutOfWeb3Modal}
        >
          <AiOutlineLogout />
        </Tag>,
      );
    } else {
      modalButtons.push(
        <Button
          key="loginbutton"
          bg="black"
          boxShadow="rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
          color="white"
          _hover={{ bg: "blackAlpha.900", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          _focus={{ border: "none" }}
          _active={{ bg: "blackAlpha.900" }}
          fontFamily="Montserrat"
          onClick={loadWeb3Modal}
        >
          connect
        </Button>,
      );
    }
  }

  return (
    <>
      <Flex alignItems="center">
        {address !== "0x239136f477606A47d770A87fC6fE3FE85c1AE5F8" && (
          <Box>
            <Tag
              bg={NETWORK(selectedChainId)?.color}
              boxShadow="rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
              color="white"
              fontFamily="Montserrat"
              p="0.5em"
              textTransform="capitalize"
              fontSize="15px"
            >
              {NETWORK(selectedChainId)?.name}
            </Tag>
            <Tag
              mx="12px"
              bg="#2C242C"
              boxShadow="rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
              color="white"
              fontFamily="Montserrat"
              p="0.5em"
              textTransform="capitalize"
              fontSize="15px"
            >
              {truncateMiddle(address || "", 5, 4, "...")}
            </Tag>
          </Box>
        )}
        {modalButtons}
      </Flex>
    </>
  );
}
