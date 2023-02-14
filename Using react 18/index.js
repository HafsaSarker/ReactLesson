import React from "react"
import ReactDOM from "react-dom/client"

const nav = (
    <nav className="navbar">
        <h1>Chefs Choice</h1>
        <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

//create root first 
//ReactDOM.createRoot(document.getElementById("NAV")).render(nav);
//or:
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(nav);


