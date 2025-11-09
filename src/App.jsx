import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData,SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInuser = localStorage.getItem("loggedInuser");

    if (loggedInuser) {
      const userData = JSON.parse(loggedInuser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@company.com" && password == "1234") {
      setUser("admin"); // Changed to string instead of object
      localStorage.setItem("loggedInuser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInuser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
