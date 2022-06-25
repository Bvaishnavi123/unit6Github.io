import {
  Flex,
  Spacer,
  Image,
  Text,
  Box,
 
  ButtonGroup,

} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/Bs'
import { CgProfile } from 'react-icons/Cg'
import { BsCart4 } from 'react-icons/Bs'

export const Navbar = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      p="10"
      width="90%"
      m="auto"
    >
      <Box p="2">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-500x281.png"
          alt="Flipkart-logo"
          height="55px"
        />
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Text fontSize="md">Shop</Text>

        <Text fontSize="md">Men</Text>

        <Text fontSize="md">Women</Text>

        <Text fontSize="md">New Arrival</Text>

        <Text fontSize="md">About</Text>

        <Text fontSize="md">Help</Text>
       
      </ButtonGroup>
      <Icon as={BsSearch} />
      <Icon as={CgProfile} />
      <Icon as={BsCart4} />
    </Flex>
  );
};
