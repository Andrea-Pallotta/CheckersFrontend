import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [value, setValue] = useState();
  const setUser = (user) => {
    setValue(user);
  };

  return (
    <UserContext.Consumer value={value}>{props.children}</UserContext.Consumer>
  );
};
