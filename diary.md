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

### when adding styles to one page, the styling from another page gets applied. To avoid this, import this way:

   import styles from "./Interests.css?inline"
# Feb 17 recap: 

### JS inside JSX. How does JSX know if we're reffering to variables? {}
    lets say we have:

    function App(){
        const firstName = "Joe"
        const lastName = "Smith"

        return (
            <h1>Hello {firstName} {lastName}!<h1/>
        )
    }
    ReactDOM.render(<App />, document.getElementById("root"));

### React Props or Properties 
    just as in functions we can pass parameters, in our custome components, we can pass in a value called props. We can console log this props and see that it is an object. So we can use and access it like we would an object. Ex:

    export default function Nav(props){
        console.log(props);
        return (
            <img src={props.imgLink} />
            <h1>{props.brandName}<h1/>
        )
    }

### Destructuring props
    In JS, you can unpack values from an object so you don't have to use dot notation to access them. Like this:

        const person = {
            name: "joe",
            email: "jsmith@example.com"
        }
        //destructuring:
        const {name, email} = person;
        //access them
        console.log(name); //joe

    Similarly, you can destruct your props. Take the above example of props and use destructuring: 

        export default function Nav(props){
            console.log({ imgLink, brandName });
            return (
                <img src={imgLink} />
                <h1>{brandName}<h1/>
            )
        }

# Feb 18th recap

### using data types other than strings on props
    You can pass in any data types you want in props using {}. For ex, below we are passing in an object in our Joke component:

        <Joke 
            obj = {{
                punchline: "I can't wait to see her face light up when she opens it.",
                setup: "I got my daughter a fridge for her birthday"
            }}
        />

    And then in our component file, we can access it how we would an object using dot notation.

### recall array.prototype.map() 
    Let's say we have an array: \

        const names = ["alice", "bob", "charlie", "danielle"]
        
    and we want to make the first letter of each string in the array capitalized. We can use .map like this:

        const map2 = names.map((name) => {
            return name[0].toUpperCase() + name.slice(1);
        })

    --> When using .map to create react elements from our array of objects, we will see a warning. To fix it, we need to give a key. Almost all data comes with an id, which is unique for each element in the array. We can set key to that id (since it is unique). Like this:

        const cards = data.map(item => {
            return (
                <Card
                    key={item.id}
                    img={item.coverImg}
                    rating={item.stats.rating}
                    reviewCount={item.stats.reviewCount}
                    location={item.location}
                    title={item.title}
                    price={item.price}
                />
            )
        })      


# Feb 26th Recap - State

    ### In react, 'state' refers to values that are managed by the component, similar to variables declared inside a function. Any time we have changing values (like an adding an item to an array everytime we click a button) that needs to be saved/displayed, we will most likely use state.

    ### Ex, the following code which we get in our App.jsx starter code

        import React, { useState } from 'react';

        function Example() {
            // Declare a new state variable, which we'll call "count"
            const [count, setCount] = useState(0);

            function handleClick() {
                setCount(count+1);
            }
            return (
                <div>
                <p>You clicked {count} times</p>
                <button onClick={handleClick}>
                    Click me
                </button>
                </div>
            );
        }
    ###

    ### NOTE: It is best practice to use a callback function to modify the value of count in the above code. Ex:
        function handleClick(){
            setCount(prevCount => prevCount + 1);
        }