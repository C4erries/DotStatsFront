import React, {useEffect, useState} from 'react';
import Error from './error'
const Errors = (props) => {
    const [errors, setErrors] = [props.errors, props.setErrors]
    return (
        <>
            {
                errors.map((err, id) => {
                    return <Error message={err} key={id}/>
                })
            }
</>
    );
}

export default Errors;