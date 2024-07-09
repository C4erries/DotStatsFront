import React, {useEffect, useState} from "react";
import './App.css';
import {NavbarDefault} from "./Components/navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import axios from "axios";
import Home from "./Components/pages/home";
import Stats from "./Components/pages/stats";
import Player from "./Components/pages/player";
import Players from "./Components/pages/players";
import Cybersport from "./Components/pages/cybersport";
import Heroes from "./Components/pages/heroes";
import Matches from "./Components/pages/matches";
import Whoami from "./Components/pages/whoami";
import LoginForm from "./Components/logInForm";
import SignupForm from "./Components/signupForm";
import Error from "./Components/addons/error";
import {AuthApi} from "./AuthApi";
import Errors from "./Components/addons/errors";
import errors from "./Components/addons/errors";



function App() {
    const throwErr = (error) =>{
        setErrors(errors.concat([error]))
    }
    const [errors, setErrors] = useState([])

    const [auth, setAuth] = useState();
    const [name, setName] = useState('none');
    useEffect(()=>{
        axios.get("http://localhost:8080/private/whoami")
            .then(res => {
                if(res.status === 200){
                    setName(res.data.id)
                    setAuth(true)
                }
                else console.warn(res.status)
            })
            .catch(err => throwErr(err.message))
    }, [])
    axios.defaults.withCredentials = true;
    const exitHandler = () => {
        //axios.post("deleteCookie")
        setAuth(false)
        window.location.href = "/"
    }


    return (
        <div className="App">
            <AuthApi.Provider value={{auth, setAuth, name, setName, throwErr}}>
                <NavbarDefault exitHandler={exitHandler} />
                <Errors errors={errors} setErrors={setErrors}/>
                <Router> <Routes>
                    <Route path="/private/whoami" element={<Whoami/>}/>
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
                    <Route path="*" element={<p className="text-red-300">Page Not Found</p>}/>
                </Routes> </Router>
            </AuthApi.Provider>
        </div>


  );
}

export default App;
