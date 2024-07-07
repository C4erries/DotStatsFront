import React from 'react';
import {Button} from "@material-tailwind/react";

const BgSwitch =()=> {
    const bgSet = () => {
        document.body.style.backgroundColor = "black"
    }

    return (
        <div>
            <Button onClick={bgSet}>
                black
            </Button>
        </div>
    );
}

export default BgSwitch;