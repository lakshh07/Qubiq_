import {
  Box,
  Button,
  Editable,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import EditTable from "./EditableTable";

function CreateBasket({ isOpen, onClose }) {
  return (
    <>
      <Modal size="4xl" closeOnEsc isCentered autoFocus isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="heading" fontFamily="Montserrat">
            Create Basket
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mx="5%">
              <Flex fontFamily="Montserrat" mt="1em" alignItems="center">
                <Text fontSize="15.5px">Enter Name of Basket: </Text>
                <Input
                  _focus={{ borderColor: "#2F8AF4" }}
                  variant="filled"
                  size="sm"
                  ml="1em"
                  w="40%"
                  type="text"
                  placeholder="Basket Name"
                />
              </Flex>

              <EditTable />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              boxShadow="rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
              rounded="20px"
              p="4px 20px"
              className="btn-gradient"
              _hover={{
                top: "-2px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              fontFamily="Montserrat"
              mr={3}
              onClick={onClose}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateBasket;
