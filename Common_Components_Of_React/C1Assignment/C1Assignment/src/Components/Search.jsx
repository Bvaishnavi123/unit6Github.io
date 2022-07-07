import { Input, Stack, InputGroup, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {useState,useEffect} from 'react'
import axios from 'axios';
import { UserCard } from "./BasicUserCard";
export const Search = () => {
  const [user,setUser] = useState([])
  const [name,setName] = useState('')
  // console.log(name)
  const handleKeyPress = (e)=>{
    if(e.key=='Enter'){
      axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`).then(({data})=>{
        console.log(name)
         console.log(data.results);
        setUser(data.results)
      })
    }
  }

  const handleChange = (e)=>{
    if(e.target.value==''){
      setUser([])
    }
    setName(e.target.value);
  }

  return (
    <>
      <Box
        boxShadow="xs"
        rounded="md"
        bg="white"
        w="40%"
        mx="auto"
        position="relative"
        top={10}
      >
        <Stack spacing={4}>
          <InputGroup>
            <Input type="text" placeholder="Search for Contact" onChange={handleChange} onKeyPress={(e) => handleKeyPress(e)} />
          </InputGroup>
         <Box>
          {user.map((userone)=>{
            return <UserCard  key={userone.id}user={userone}></UserCard>
          })}
         </Box>
        </Stack>
        
        </Box>
       
    

    </>
  );
};
