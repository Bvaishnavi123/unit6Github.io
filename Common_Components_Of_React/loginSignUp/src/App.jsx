import { useState } from "react";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div id="main-container">
    
      <Routes>
        <Route
          path="/"
          element={
            user && user._id ? (
              <Home user={user} setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setLoginUser={setLoginUser} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
