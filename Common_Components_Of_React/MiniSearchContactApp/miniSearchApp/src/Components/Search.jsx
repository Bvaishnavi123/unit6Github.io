import { Input, Stack, InputGroup, Box } from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import axios from "axios";
import { UserCard } from "./BasicUserCard";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { AlertComponent } from "./Alert";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [name, setName] = useState("");
  const debounceOnChange = React.useCallback(debounce(onChange, 400), []);

  const getData = (val) => {
    let PageNo = Math.ceil(user.length / 20) + 1;
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${val}&page=${PageNo}`
      )
      .then(({ data }) => {
        // console.log("name", name);
        // console.log(data.results);

        setUser([...user, ...data.results]);
        // setLoading(false);
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
  };

  function onChange(v) {
    setName(v);

    setError("");

    // setUserName(name);
    if (v === "") {
      setUser([]);
    } else {
      getData(v);
    }
  }
  // console.log("name", name);
  const fetchMoreData = () => {
    setTimeout(() => {
      getData(name);
    }, 2000);
  };

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
          {error ? (
            <Box p={2}>
              <Alert status="info">
                <AlertIcon />
                There was an error processing your request.... Please type valid
                contact...Data gets Over For this contact
              </Alert>
            </Box>
          ) : user?.length === 0 ? (
            <Box p={2}>
              <Alert status="info">
                <AlertIcon />
                Type Something
              </Alert>
            </Box>
          ) : (
            <>
              <InfiniteScroll
                dataLength={user.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<AlertComponent />}
              >
                {user.map((userone) => {
                  return <UserCard user={userone}></UserCard>;
                })}
              </InfiniteScroll>
             
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};
