import React from 'react';
import Table from "../table";
import {ModalDefault} from "../modalDefault";

export function Home(){
    return (
        <div>
            <ModalDefault/>
            <p className="text-violet-500">HI</p>
            <Table/>
        </div>
    )
}

export default Home;