import { createContext } from "react";
import { io } from "socket.io-client";
import * as endpoints from "./endpoints";
import * as customParser from "socket.io-msgpack-parser";

export const newSocket = (username, token) => {
  console.log(
    process.env.NODE_ENV === "production" ? endpoints.EC2 : endpoints.LOCALHOST
  );
  return io(
    process.env.NODE_ENV === "production" ? endpoints.EC2 : endpoints.LOCALHOST,
    {
      query: {
        username,
      },
      auth: {
        token,
      },
      parser: customParser,
      transports: ["websocket"],
    }
  );
};

export const SocketContext = createContext();
