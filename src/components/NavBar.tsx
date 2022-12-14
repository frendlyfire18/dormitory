import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Heading,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from "../components/Logo"
import SideButton from "../components/SideButton"
import {useState} from "react"
import { postData } from '../lib/postData';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAuth,onAuthOrLogout] = useState(false) 
  const [username,onEnterName] = useState("") 
  const [password,onEnterPassword] = useState("") 
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')}  px={4}
       borderBottom="1px"
       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}>
        <Flex px={"50px"} h={'20'} alignItems={'center'} justifyContent={'space-between'}>
            <Logo/>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {isAuth
                ?
                <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{username}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>??????????????</MenuItem>
                  <MenuItem onClick={()=>{onAuthOrLogout(false)}}>??????????</MenuItem>
                </MenuList>
              </Menu>
              :
              <Menu>
                <MenuButton
                  as={Button}
                  mx={"15px"}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  ????????/??????????????????????
                </MenuButton>
                <MenuList>
                    <Stack spacing={4} p={"15px"}>
                <FormControl id="email">
                  <FormLabel>??????</FormLabel>
                  <Input onChange={(e)=>{
                    onEnterName(e.target.value)
                  }} type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>????????????</FormLabel>
                  <Input onChange={(e)=>{
                    onEnterPassword(e.target.value)
                  }} type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>?????????????????? ????????</Checkbox>
                    <Link color={'blue.400'}>???????????? ???????????? ?</Link>
                  </Stack>
                  <Button
                    onClick={async ()=>{
                      onAuthOrLogout(await postData("/api/loginuser",{name:username,password:password}))
                    }}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    ??????????
                  </Button>
                  <Button
                    onClick={()=>{
                      postData("/api/insertuser",{name:username,password:password})
                    }}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    ??????????????????????
                  </Button>
                </Stack>
                </Stack>
                </MenuList>
              </Menu>
              }
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}