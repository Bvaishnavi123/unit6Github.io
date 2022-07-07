import { Flex, Spacer, Image, Text, Box, ButtonGroup } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/Bs";
import { CgProfile } from "react-icons/Cg";
import { BsCart4 } from "react-icons/Bs";

export const Navbar = () => {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        width="98%"
        height="40px"
        m="auto"
        p="10px"
        style={{ border: "1px solid grey" }}
      >
        <Box p="2">
          <ReactLink to="/">
            <Image
              src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-500x281.png"
              alt="Flipkart-logo"
              height="75px"
            />
          </ReactLink>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <ReactLink to="/allCollection">
            <Text fontSize="md">Shop</Text>
          </ReactLink>
          <Spacer />
          <ReactLink to="/allCollection">
            <Text fontSize="md">Men</Text>
          </ReactLink>
          <Spacer />
          <ReactLink to="/allCollection">
            <Text fontSize="md">Women</Text>
          </ReactLink>
          <Spacer />
          <ReactLink to="/allCollection">
            <Text fontSize="md">New Arrival</Text>
          </ReactLink>
          <Spacer />
          <ReactLink to="/allCollection">
            <Text fontSize="md">About</Text>
          </ReactLink>
          <Spacer />
          <ReactLink to="/allCollection">
            <Text fontSize="md">Help</Text>
          </ReactLink>
          <Spacer />
        </ButtonGroup>

        <Icon as={BsSearch} m={10} />

        <Icon as={CgProfile} m={10} />

        <Icon as={BsCart4} />
        <Text>0</Text>
      </Flex>
    </>
  );
};
