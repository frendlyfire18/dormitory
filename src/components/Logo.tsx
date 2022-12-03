import { Avatar,Box,Flex } from '@chakra-ui/react'
export default function Logo(){
    return(
    <Flex alignItems={'center'}>
        <Avatar 
            cursor={'pointer'}
            marginX={'15px'}
            boxSize='70px'
            objectFit='cover'
            src='https://sun2-12.userapi.com/impg/krRf1jFEAuqPuc8CGNxEhDQIMs3oX5xIrwGjrA/yOW03fq8svM.jpg?size=673x1280&quality=95&sign=d9a6e39f688f013ee223803f2987a9f2&type=album' 
        />
        dormitory
    </Flex>
    )
}