import { createContext } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "./endpoints";

export const newSocket = (username) => {
  return io(SOCKET_URL, {
    query: { username: username },
    transports: ["websocket"],
  });
};

export const SocketContext = createContext();
