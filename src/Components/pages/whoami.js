import React, {Component, useEffect} from 'react';
import axios from "axios";

const Whoami = () => {

    useEffect(()=>{
        axios.get("http://localhost:8080/private/whoami")
            .then(res => console.log(res))
            .catch(err => console.warn(err))
    })
    return (
        <div>
PisaPopa
        </div>
    );
}

export default Whoami;