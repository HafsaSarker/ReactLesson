import React, { useState } from "react"
export default function Joke(props){
    const [isShown, setIsShown] = useState(false);

    function toggle(){
        setIsShown(prevState => !prevState);
    }
    return (
        <div className="joke-container">
            {props.setup && <h1>Setup: {props.setup}</h1>}
            {isShown && <h3>Punchline: {props.punchline}</h3>}
            
            <button onClick={toggle}>Show Punchline</button>
        </div>
    )
}