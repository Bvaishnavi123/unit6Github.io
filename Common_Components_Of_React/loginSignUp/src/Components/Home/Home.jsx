import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

export const Home = (props) => {
  console.log(props.user, props.googleAuthUser);
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height={300}
        width={300}
      >
        {Object.keys(props.user).length != 0? (
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={500}>
              User Info
            </Heading>
            <Stack direction={"column"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {props.user.name}
              </Text>
              <Text color={"gray.600"}>{props.user.email}</Text>
              <Button
                colorScheme="gray"
                width="100%"
                onClick={() => {
                  props.setLoginUser({});
                  props.setgoogleAuthUser({});
                }}
              >
                Logout
              </Button>
            </Stack>
          </Stack>
        ) : (
        //  <p>G</p>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={500}>
              User Info 
            </Heading>
            <Stack direction={"column"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {props.googleAuthUser.name}
              </Text>
              <Text color={"gray.600"}>{props.googleAuthUser.email}</Text>
              <Button
                colorScheme="gray"
                width="100%"
                onClick={() => {
                  props.setLoginUser({});
                  props.setgoogleAuthUser({});
                }}
              >
                Logout
              </Button>
            </Stack>
          </Stack>
        )}
        {/* <Stack pt={10} align={"center"}>
        
          <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={500}>
            User Info
          </Heading>
          <Stack direction={"column"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {props.user.name}
            </Text>
            <Text color={"gray.600"}>{props.user.email}</Text>
            <Button
              colorScheme="gray"
              width="100%"
              onClick={() => {
                props.setLoginUser({});
                props.setgoogleAuthUser({});
              }}
            >
              Logout
            </Button>
          </Stack>
        </Stack> */}
      </Box>
    </Center>
  );
};
