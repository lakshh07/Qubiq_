import {
  Box,
  Button,
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Tables from "./Tables";
import { ArrowLeftIcon } from "@chakra-ui/icons";

function BasketDetail({ address, logoutOfWeb3Modal, selectedChainId }) {
  const navigate = useNavigate();
  const { basketname } = useParams();

  const [value, setValue] = React.useState({ amount: "", frequency: "" });
  const handleAmount = event => setValue({ amount: event.target.value });
  const handleFreqency = event => setValue({ frequency: event.target.value });

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  const data = React.useMemo(
    () => [
      {
        id: 12,
        token: "millimetres (mm)",
        weight: 25.4,
        amount: 0.134,
        value: 1.32,
      },
      {
        id: 32,
        token: "centimetres (cm)",
        weight: 30.48,
        amount: 0.034,
        value: 1.92,
      },
      {
        id: 11,
        token: "metres (m)",
        weight: 0.91444,
        amount: 0.334,
        value: 1.4,
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        // isNumeric: true,
      },
      {
        Header: "Token",
        accessor: "token",
      },
      {
        Header: "Weight",
        accessor: "weight",
        // isNumeric: true,
      },
      {
        Header: "Amount",
        accessor: "amount",
        // isNumeric: true,
      },
      {
        Header: "Value",
        accessor: "value",
        // isNumeric: true,
      },
    ],
    [],
  );

  return (
    <>
      <Box position="relative" h="100vh" w="100%" className="d-bg">
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
              {basketname}
            </Heading>

            <Box mt="4em" fontFamily="Montserrat">
              <Tables columns={columns} data={data} />

              <Flex>
                <Link to={`/app/baskets/${basketname}/composition`}>
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
                    mt="4em"
                    mr="1em"
                    // isLoading
                  >
                    Change Composition
                  </Button>
                </Link>
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
                  mt="4em"
                  // isLoading
                >
                  Exit Basket
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BasketDetail;