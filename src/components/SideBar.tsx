import React, { ReactNode } from 'react';
import  NextLink  from 'next/link';
import { BsThreeDotsVertical, BsChatSquareQuote,BsFillFileSpreadsheetFill } from 'react-icons/bs';
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';
import { CgSmartHomeWashMachine } from "react-icons/cg"
import {FaUniversity} from "react-icons/fa"
import { SiSocketdotio } from "react-icons/si"
import {GiWoodenCrate,GiBathtub} from "react-icons/gi"
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
  Stack,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import Logo from "../components/Logo"
interface InnerItemProps{
  name:string;
  icon: IconType;
}

interface LinkItemProps {
  name: string;
  innerItems?:Array<InnerItemProps>
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Главная', icon: FiHome },
  { name: 'Для студентов', icon: FiTrendingUp },
  { name: 'База знаний', icon: FiCompass }
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box
        h='calc(100vh)'
        backgroundImage="url('https://sun9-20.userapi.com/impg/3OG9y7Cx7IizMgRlOaUOQ0fX2ohMXSkEZMTH5A/CZzJnS4WJHg.jpg?size=1024x522&quality=95&sign=855e7a991055c4ca144490e03d692071&type=album')"
        backgroundRepeat={"no-repeat"}
        backgroundSize={'cover'}
        ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Button colorScheme='facebook'>База знаний</Button>
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
          <Button colorScheme='facebook'>Услуги</Button>
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<CgSmartHomeWashMachine />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Прачечная
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<SiSocketdotio />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Электрик
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<GiWoodenCrate />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Плотник
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<GiBathtub />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Сантехник
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
          <Button colorScheme='facebook'>Для студента</Button>
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <NextLink href="https://play.google.com/store/apps/details?id=mmis.mobile">
                  <Button
                    w="194px"
                    variant="ghost"
                    rightIcon={<BsFillFileSpreadsheetFill />}
                    justifyContent="space-between"
                    fontWeight="normal"
                    fontSize="sm">
                    Расписание
                  </Button>
                </NextLink>
                <NextLink href="https://www.sssu.ru/">
                  <Button
                    w="194px"
                    variant="ghost"
                    rightIcon={<FaUniversity />}
                    justifyContent="space-between"
                    fontWeight="normal"
                    fontSize="sm">
                      Сайт ДГТУ
                  </Button>
                </NextLink>
                <NextLink href="https://vk.com/donstu_shahty">
                  <Button
                    w="194px"
                    variant="ghost"
                    rightIcon={<FaUniversity />}
                    justifyContent="space-between"
                    fontWeight="normal"
                    fontSize="sm">
                    ВК ДГТУ
                  </Button>
                </NextLink>
                <NextLink href="https://play.google.com/store/apps/details?id=com.gorbin.sks">
                  <Button
                    w="194px"
                    variant="ghost"
                    rightIcon={<FaUniversity />}
                    justifyContent="space-between"
                    fontWeight="normal"
                    fontSize="sm">
                    СКС (Профсоюз)
                  </Button>
                </NextLink>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};