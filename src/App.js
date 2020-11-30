import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login.js";
import SignUp from "./Components/Singup/SignUp";
import { AuthProvider } from "./Components/Auth";
import PrivateRoute from "./Components/PrivateRoute";
import Navbar from './Components/Navbar/Navbar'
import RutaPrivada from "./Components/RutaPrivada/RutaPrivada";

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Navbar/>
        <div>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/RutaPrivada" component={RutaPrivada} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
