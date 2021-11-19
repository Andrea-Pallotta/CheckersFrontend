import { createContext } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "./endpoints";
import * as customParser from "socket.io-msgpack-parser";

export const newSocket = (username, token) => {
  return io(SOCKET_URL, {
    query: {
      username,
    },
    auth: {
      token,
    },
    parser: customParser,
    transports: ["websocket"],
  });
};

export const SocketContext = createContext();
