import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Singup/SignUp";
import { AuthProvider } from "./Components/Auth";
import PrivateRoute from "./Components/PrivateRoute";
import Navbar from './Components/Navbar/Navbar'
const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Navbar/>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
