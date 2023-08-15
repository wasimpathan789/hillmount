import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./component/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import SignUp from "./component/login/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
