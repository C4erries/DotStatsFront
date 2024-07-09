import React, {Component, useContext, useEffect} from 'react';
import axios from "axios";
import {AuthApi} from "../../AuthApi";

const Whoami = () => {
    const throwErr = useContext(AuthApi).throwErr

    useEffect(()=>{
        axios.get("http://localhost:8080/private/whoami")
            .then(res => console.log(res))
            .catch(err => throwErr(err))
    })
    return (
        <div>
PisaPopa
        </div>
    );
}

export default Whoami;