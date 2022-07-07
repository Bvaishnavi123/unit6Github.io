import { Box } from "@chakra-ui/react";
import { Avatar, WrapItem, Text, Center, Circle } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
 
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
export const UserCard = (props) => {
  const { id, image, name, status, species,origin} = props.user;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState({});
  

  const clickHandler = (e) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${e}`)
      .then(({ data }) => {
        setUser(data);
      });
     
  };
 

  return (
    
    <Box
      boxShadow="xs"
      p="6"
      rounded="md"
      bg="white"
      style={{ marginBottom: "10px"}}
      onClick={() => {
        onOpen();
        clickHandler(id);
      }}
    >
      <WrapItem>
        <Center>
          <Avatar name="Dan Abrahmov" src={image} mr={5} />
          <div style={{ width: "150px", textAlign: "left" }}>{name}</div>
          <Center>
            <div
              style={{
                marginLeft: "40px",
                width: "250px",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Circle
                size="10px"
                bg={status === "Alive" ? "green" : "grey"}
                color="white"
              ></Circle>
              <div style={{ marginLeft: "40px", width: "100%" }}>
                {status + "-" + species}
              </div>
            </div>
          </Center>
        </Center>
      </WrapItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "80%",
                margin: "auto",
              }}
            >
              <WrapItem>
                <Avatar size="xl" name="Christian Nwamba" src={user.image} />{" "}
              </WrapItem>
              <div
                style={{
                  padding: "10px",
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <Circle
                    size="10px"
                    bg={user.status === "Alive" ? "green" : "grey"}
                    color="white"
                  ></Circle>
                </div>
                <div>
                  <Text>{user.name}</Text>
                  <Text>{user.status + " - " + user.species}</Text>
                </div>
              </div>
            </Box>
            <br />
            <hr />
            <br />
            
            <Box w="70%" mx="auto">
              <Flex>
                <Box  w='40%'>
                  <Text>Gender</Text>
                  <Text>{user.gender}</Text>
                </Box>
                <Spacer />
                <Box w='50%'>
                <Text>Location</Text>
                  {/* <Text>{user.location.name}</Text> */}
                </Box>
              </Flex>
              <br />
              <Flex>
                <Box w='50%'>
                <Text>Species</Text>
                  <Text>{user.species}</Text>
                </Box>
                <Spacer />
                <Box w='50%'>
                <Text>Origin</Text>
                  {/* <Text>{user["location"]}</Text> */}
                </Box>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
