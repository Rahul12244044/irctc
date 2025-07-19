import {createContext,useContext,useState,useEffect} from "react";
import {observeAuthState} from "../services/auth.service.jsx";
const AuthContext=createContext();
export const useAuth=()=>{
    return useContext(AuthContext);
}
export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [userName,setUserName]=useState("");
    const value={
        currentUser,
        loading,
        setUserName,
        userName
    }
    useEffect(() => {
     const unsubscribe=observeAuthState((currentUser)=>{
        if(currentUser){
            setCurrentUser(currentUser);
            setLoading(false);
        }
     });
     console.log("useEffect will execute just after rendering the component");
     console.log("currentUser: "+currentUser);
    return unsubscribe;
  }, []);

    return (
    <>
    <AuthContext.Provider value={value}>
       {children}
    </AuthContext.Provider>
    </>)
}


// import React, { createContext, useContext, useState, useEffect } from "react";
// import { observeAuthState } from "../services/AuthService";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = observeAuthState((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     // Cleanup subscription on unmount
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
