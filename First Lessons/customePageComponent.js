/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/
import React from 'react';
import ReactDOM from 'react-dom/client'; //must use client to use react-dom

function CustomeElement() {
    return(
        <>
            <header>
                <nav>
                    <img src='' width="40px"/>
                </nav>
            </header>
            <h1>Reasons I am excited to learn React</h1>
            <ul>
                <li>It is composable</li>
                <li>Much easier to write than vanilla Js</li>
                <li>A must skill for a frontend developer</li>
            </ul>
            <footer>© 20xx NASA development. All rights reserved.</footer>
        </>
    )
}

//render this 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CustomeElement />);