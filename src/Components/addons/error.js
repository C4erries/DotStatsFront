import React, {useState} from 'react';
import {Alert} from "@material-tailwind/react";

const Error = (props) => {
    const [open, setOpen] = useState(true)
    return (
            <Alert color={"red"} open={open} onClose={()=>setOpen(false)}>{props.message}</Alert>
    );
}

export default Error;