
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";

export const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    re_enter_pass: "",
  });

  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const register = (e) => {
    e.preventDefault();
    const { name, email, password, re_enter_pass } = user;
    // console.log(name,email,password,re_enter_pass)
    if ((name, email, password, re_enter_pass && password === re_enter_pass)) {
      axios
        .post("http://localhost:5000/register", user)
        .then((res)=>{
           if(res.data.message === "Successfully Register"){
            alert(res.data.message)
            navigate("/login");
           }else{
            alert(res.data.message)
            navigate("/register");
           }
        })
        // alert(res.data.message)
        // navigate("/login");
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <Box
      boxShadow="xs"
      p="6"
      rounded="md"
      bg="white"
      width="40%"
      height={500}
      align="center"
    >
      <h1>Register</h1>
      <FormControl isRequired>
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input
          id="first-name"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <br />
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" name="email" onChange={handleChange} />

        <br />
        <FormLabel htmlFor="password">Password</FormLabel>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="password"
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <br />
        <FormLabel htmlFor="password">Re-Enter Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="re_enter_pass"
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <br />
        <Button colorScheme="gray" width="100%" onClick={register}>
          Register
        </Button>
        <br />
        <p>Or </p>
        <Button
          colorScheme="gray"
          width="100%"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
};
