import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Customer from "./pages/Customer";
import Message from "./pages/Message";
const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/customer" Component={Customer} />
      <Route path="/message" Component={Message} />
    </Routes>
  </HashRouter>
);

export default App;
