import React from 'react'
import { ChatState } from '../context/ChatProvider'
import  SideDrawer from "../components/miscellaneous/SideDrawer"
import MyChats from '../components/MyChats'
import ChatBox from '../components/ChatBox'
import { Box } from "@chakra-ui/layout";




const ChatPage = () => {

    const {user}=ChatState();

  return <div style={{width:"100%"}}>
    {user && <SideDrawer/>}
    <Box

    d='flex'
    justifyContent='space-between'
    w='100%'
    h='91.5vh'
    p='10px'
    
    >

      {user && <MyChats/>}
        

    </Box>
  </div>
;
}

export default ChatPage

// import React from 'react'

// const ChatPage = () => {
//   return (
//     <div>ChatPage</div>
//   )
// }

// export default ChatPage