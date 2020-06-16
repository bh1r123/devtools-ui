import React from 'react'
import {
    useParams
  } from "react-router-dom";

function ViewMessage() {

    let {id} = useParams();

    return (
        <div>
            <p>Welcome to View Message {id}</p>
        </div>
    )
}

export default ViewMessage
