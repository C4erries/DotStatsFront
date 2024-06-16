import React from "react";
import './App.css';
import {NavbarDefault} from "./Components/navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/pages/home";
import Stats from "./Components/pages/stats";
import Player from "./Components/pages/player";
import Players from "./Components/pages/players";
import LoginForm from "./Components/logInForm";
import Matches from "./Components/pages/matches";
function App() {
  return (

    <div className="App">
        <NavbarDefault/>
        <Router> <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/stats" element={<Stats/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/matches" element={<Matches/>}/>
        </Routes> </Router>
    </div>


  );
}

export default App;
