import { createContext, useMemo, useState } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
  });


  export const UserProvider = ({ children }) => {
   
    const [currentUser, setCurrentUser] = useState(null);
    const value = useMemo(() => {
      return { currentUser, setCurrentUser };
    }, [currentUser]);
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };


  //export const UserContext = createContext();

/*export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = () => ({ currentUser, setCurrentUser });
  
    return (
      <UserContext.Provider value={value()}>
        {children}
      </UserContext.Provider>
    );
  };*/