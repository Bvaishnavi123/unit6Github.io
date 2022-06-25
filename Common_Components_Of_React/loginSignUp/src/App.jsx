import { useState } from "react";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [user, setLoginUser] = useState({});
  const [googleAuthUser , setgoogleAuthUser] = useState({});
  //console.log('googleAuthUser',googleAuthUser)
  return (
    <div id="main-container">
    
      <Routes>
        <Route
          path="/"
          element={
            user && user._id || googleAuthUser&&googleAuthUser.email ? (
              <Home user={user} setLoginUser={setLoginUser} setgoogleAuthUser={setgoogleAuthUser} googleAuthUser={googleAuthUser}/>
            ) : (
              <Login setLoginUser={setLoginUser} setgoogleAuthUser={setgoogleAuthUser} />
            )
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setLoginUser={setLoginUser} setgoogleAuthUser={setgoogleAuthUser}/>}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      {/* <GoogleAuth/> */}
    
    </div>
  );
}

export default App;
