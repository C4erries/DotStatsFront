import React, {useContext} from 'react';
import Table from "../table";
import {ModalDefault} from "../modalDefault";
import {Button} from "@material-tailwind/react";
import {AuthApi} from "../../AuthApi";

export function Home(){
    const throwErr = useContext(AuthApi).throwErr
    return (
        <div>
            <Button onClick={()=>throwErr(Date.now())}>Take</Button>
            <ModalDefault/>
            <p className="text-violet-500">HI</p>
        </div>
    )
}

export default Home;