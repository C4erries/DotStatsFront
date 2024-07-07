import React from 'react';
import {useParams} from "react-router-dom";

export function Player(){
    let id = useParams().playerId
        return (
            <div>
{id}
            </div>
        )
}

export default Player;