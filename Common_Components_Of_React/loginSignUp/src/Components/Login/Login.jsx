import "./Login.module.css";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
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
export const Login = (props) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login =()=>{
    axios.post('http://localhost:5000/login',user).then(res=>{
      console.log(res)
      alert(res.data.message)
      props.setLoginUser(res.data.user)
    })
    
    navigate('/')
  }
  return (
    <Box
      boxShadow="xs"
      p="6"
      rounded="md"
      bg="white"
      width="40%"
      height={400}
      align="center"
    >
      <h1>Login</h1>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" name="email" onChange={handleChange} />
        <FormHelperText>We'll never share your email.</FormHelperText>
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
        <Button colorScheme="gray" width="100%" onClick={login}>
          Login
        </Button>
        <br />
        <p>Or </p>
        <Button colorScheme="gray" width="100%" onClick={()=>navigate('/register')}>
          Register
        </Button>
      </FormControl>
    </Box>
  );
};
