import React from "react";
//import ChatRoomHandler from './Components/ChatRoomHandler';
import ChatView from "./Components/ChatView";
import { Box } from "@mui/system";

export default function Home({ user }) {
 
  return (
    <Box>
      <ChatView user={user} />
    </Box>
  );
}
