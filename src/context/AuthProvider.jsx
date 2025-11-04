// import React, { useEffect, useState } from "react";
// import { createContext } from "react";
// import { getLocalStorage } from "../utils/LocalStorage";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const { employees, admin } = getLocalStorage();
//     setUserData({ employees, admin });
//   }, []);

//   //   const data = getLocalStorage();
//   //   console.log(data.employees);

//   return (
//     <div>
//       <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
//     </div>
//   );
// };

// export default AuthProvider;

import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
//  localStorage.clear()
  const [userData, setUserData] = useState({ employees: [], admin: null });

  useEffect(() => {
    setLocalStorage(); 
    const { employees, admin } = getLocalStorage(); 
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;