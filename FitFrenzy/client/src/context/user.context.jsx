/* first var
import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";



export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser]);
  export const UserProvider = ({ children }) => {
   
    const [currentUser, setCurrentUser] = useState(null);
    const value = useMemo(() => {
      return { currentUser, setCurrentUser };
    }, [currentUser]);
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };

  UserProvider.propTypes = {
    children:PropTypes.node.isRequired,
  };


//sec part
  /*Component.propTypes = {
    name: PropTypes.any.isRequired,
  }*/

  


  //export const UserContext = createContext();*/
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

  //secondary method
  import { useContext, createContext } from "react";
  import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
    import { auth } from "../firebase/firebase.settings";
    import PropTypes from "prop-types";
    

  const UserContext = createContext()

  export const UserContextProvider = ({children}) => {

    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    };

    return (
      <UserContext.Provider value={{googleSignIn}}>
        {children}
      </UserContext.Provider>
    )
  }
   export const UserAuth =() => {
    return useContext(UserContext)
   }

   UserContextProvider.propTypes = {
    children:PropTypes.node.isRequired,
  };
