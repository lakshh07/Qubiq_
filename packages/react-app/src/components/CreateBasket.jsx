import { Box, Button, Heading, Text, Flex, Input } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import EditTable from "./EditableTable";
import { v4 as uuidv4 } from "uuid";
import { createBasket, getContractAddress } from "../utils/getContractAddress";
import { getContractProvider } from "../utils/contract";
import { subscribeContractAddress } from "../contract_address.json";
import subscribeBasket from "../contracts/ABI/Subscribe.json";
import { ethers } from "ethers";

function CreateBasket({ injectedProvider, address, logoutOfWeb3Modal, selectedChainId }) {
  const navigate = useNavigate();

  async function create() {
    // const provider = getContractProvider();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const basketId = uuidv4();
    const contract = new ethers.Contract(subscribeContractAddress, subscribeBasket, signer);
    const result = await contract.createBasket(
      ["0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa", "0xeb8f08a975Ab53E34D8a0330E0D34de942C95926"],
      ["30", "70"],
      basketId,
    );
    console.log(result);
  }

  return (
    <>
      <Box position="relative" h="100%" w="100%" className="d-bg">
        <Navbar selectedChainId={selectedChainId} logoutOfWeb3Modal={logoutOfWeb3Modal} address={address} />

        <Box color="white" pt="9%" mx="10%">
          <Flex
            cursor="pointer"
            onClick={() => navigate(-1)}
            textDecoration="underline"
            fontFamily="Montserrat"
            alignItems="center"
          >
            <ArrowLeftIcon fontSize="11px" />
            <Text ml="10px" fontSize="15px">
              Back
            </Text>
          </Flex>

          <Box mt="3em" mx="4%">
            <Heading textTransform="capitalize" fontFamily="Montserrat" color="white">
              Create basket
            </Heading>

            <Box mt="4em" fontFamily="Montserrat">
              <Box>
                <Flex w="70%" mb="2.5em" fontFamily="Montserrat" mt="1em" alignItems="center">
                  <Text fontSize="15.5px">Name of Basket: </Text>
                  <Input
                    _focus={{ borderColor: "#2F8AF4" }}
                    variant="filled"
                    size="sm"
                    ml="1em"
                    w="40%"
                    type="text"
                    color="black"
                    placeholder="Basket Name"
                  />
                </Flex>

                <EditTable />
              </Box>
              <Button
                alignItems="center"
                boxShadow="rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
                rounded="20px"
                p="4px 20px"
                className="btn-gradient"
                _hover={{
                  top: "-2px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                fontFamily="Montserrat"
                mt="1em"
                mb="10em"
                // isLoading
                onClick={create}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CreateBasket;
