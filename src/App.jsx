import React, { useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@company.com" && password == "1234") {
      // console.log("This is admin")
      setUser("admin");
      console.log(user);
    } else if (email == "john.doe@company.com" && password == "1234") {
      // console.log("This is user");
      setUser("employee");
      console.log(user);
    } else {
      alert("Invalid Creditionals");
    }
  };

  // handleLogin("john.doe@company.com", 1234);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}

      {/*  */}
      {/*  */}
    </>
  );
};

export default App;
