import { Input, Stack, InputGroup, Box } from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import axios from "axios";
import { UserCard } from "./BasicUserCard";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
export const Search = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  const debounceOnChange = React.useCallback(debounce(onChange, 400), []);

  function onChange(name) {
    setError("");
    if (name === "") {
      setUser([]);
    } else {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(({ data }) => {
          // console.log("name", name);
          // console.log(data.results);
          setUser(data.results);
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
        });
    }
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
            <Input
              type="text"
              placeholder="Search for Contact"
              onChange={(e) => debounceOnChange(e.target.value)}
            />
          </InputGroup>
          {error? (
            <Box p={2}><Alert status='info'>
            <AlertIcon />
            There was an error processing your request.... Please type valid contact
          </Alert></Box>
          ) : user?.length===0 ?<Box p={2}><Alert status='info'>
          <AlertIcon />
          Type Something
        </Alert></Box>:(
            <Box>
              {user.map((userone) => {
                return <UserCard key={userone.id} user={userone}></UserCard>;
              })}
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
};
