import React from "react";
import './App.css';
import {NavbarDefault} from "./Components/navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/pages/home";
import Stats from "./Components/pages/stats";
import Player from "./Components/pages/player";
import Players from "./Components/pages/players";
import Cybersport from "./Components/pages/cybersport";
import LoginForm from "./Components/logInForm";
import Matches from "./Components/pages/matches";
import SignupForm from "./Components/signupForm";
import Heroes from "./Components/pages/heroes";
function App() {
  return (

    <div className="App">
        <NavbarDefault/>
        <Router> <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/cybersport" element={<Cybersport/>}/>
            <Route path="/stats" element={<Stats/>}/>
            <Route path="/player">
                <Route path=":playerId" element={<Player/>}/>
            </Route>
            <Route path="/players" element={<Players/>}/>
            <Route path="/heroes" element={<Heroes/>}/>
            <Route path="/matches" element={<Matches/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<SignupForm/>}/>
        </Routes> </Router>
    </div>


  );
}

export default App;
