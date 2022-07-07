
import {useState} from 'react'
import {Link as ReactLink , useNavigate} from 'react-router-dom'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export const  Product = (products) => {
    //console.log(products.product);
    const  {id,name,color,gender,original_price,final_price,images} = products.product;
    //console.log(images)
    const[img,setimg] = useState(images[0])
    
    const showOtherImage = ()=>{
      setimg(images[1])
    }
    const showOrignalImg = ()=>{
      setimg(images[0])
    }
    return (
      <Center py={12}>
        <ReactLink to={`/allCollection/${id}`} style={{textDecoration:'none', color:'black'}}><Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          onMouseEnter={showOtherImage}
          onMouseLeave={showOrignalImg}
          
          >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} >
              {name+" | "+color+" | "+gender}
            </Text>
            
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                ${final_price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                ${original_price}
              </Text>
            </Stack>
          </Stack>
        </Box></ReactLink>
      </Center>
    );
  }
      
      
 