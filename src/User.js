import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [displayUser, setDisplayUser] = useState({
    username:"Register/Login",
    id: 0
  });

  return (
    <UserContext.Provider value={{ displayUser, setDisplayUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
