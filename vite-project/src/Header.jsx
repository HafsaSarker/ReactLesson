import React from "react";
import reactLogo from './assets/react.svg'
import './Header.css'
export default function Header (){
    return (
        <div className="header">
            <div className="left">
                <img src={reactLogo} />
                <h1>ReactFacts</h1>
            </div>

            <h2>React Course - Project 1</h2>
        </div>
    )
}