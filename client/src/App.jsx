import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Layout from "./component/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Teacher from "./pages/teacher/Teacher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/s" element={<Login />} /> */}

        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher" element={<Teacher />} />

        {/* <Route path="/" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
