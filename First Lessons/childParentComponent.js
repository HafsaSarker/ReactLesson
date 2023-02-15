/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
import React from 'react';
import ReactDOM from 'react-dom/client'; //must use client to use react-dom
function Header() {
    return (
        <header>
            <nav>
                img
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <>
            <h1>Reasons I am excited to learn React</h1>
            <ul>
                <li>It is composable</li>
                <li>Much easier to write than vanilla Js</li>
                <li>A must skill for a frontend developer</li>
            </ul>
        </>
    )
}

function Footer (){
    return (
        <footer>© 20xx NASA development. All rights reserved.</footer>
    )
}

function CustomeElement() {
    return(
        <>
            //render everything down here
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

//render this 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CustomeElement />);


