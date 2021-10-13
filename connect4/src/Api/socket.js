import { createContext } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "./endpoints";

export const socket = io.connect(SOCKET_URL, {
  transports: ["websocket"],
});
export const SocketContext = createContext();
