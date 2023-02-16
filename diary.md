# Feb 12th Recap
    * react components. 
        Ex:
            function Page(){
                return (
                    <>
                        <h1>Simple Component</h1>
                        <p>Create many of these and you can even do child parent components. This makes our code composable. Each component can be used like functions by rendering them.</p>
                    </>
               )
            } 
            //render the component to a div in our html page with id="root"

            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(<Page />);



# Feb 14th recap

    Seperating the components in different files:
    1) The file must start with capital letter. like "Header.js"
    2) importing react from react in each file
    3) after writing the component, export it.
        ex file Header.js:
        #####
            import React from "react"

            export default function Header() {
                return (
                    <header>
                        <nav className="nav">
                            <img src="./react-logo.png" className="nav-logo" />
                            <ul className="nav-items">
                                <li>Pricing</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </header>
                )
            }
        #####

    4) then to import this header in the main file, we have to import it using "./Header". "./..." tells the prog that it is not a react component that we are exporting
        ex in app.js:
            import Header from "./Header"


## Using vite with npm (better than "create-react-app" which takes forever to create )
    1. npm create vite@latest
    2. answer the questions
    3. cd projectName
    4. npm install 
    5. npm run dev

    And done! you will see a localHost 


# Feb 15th 
    How to put a logo in the background? 
        ###
        background-image: url(./images/react-icon-large.png);
        background-repeat: no-repeat;
        background-position: right 75%;
        ###
    
    Like in this video: https://scrimba.com/learn/learnreact/add-background-logo-coa6145f3a9c7e1cbc40f5f6a

    