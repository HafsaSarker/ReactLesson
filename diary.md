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



# March 2nd Recap - Updating Arrays in State

    ### Avoid:
        adding, removing, replacing or sorting as they mutate the array directly

    ### return a new array instead using:
        concat, spread, filter, slice (not splice!), map, or copy arr first

        [X] Spread operator(...) 
            -> spreads an array into many arguments 

        ex: 
            let numbers = [1,2,3,4];
            console.log(Math.max(...numbers)); 
            //4

        [X] Filtering 
            -> filters out the item and return a new array that doesn't contain that item.
        ex:     
            const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

            const result = words.filter(word => {
                return word.length > 6
            });

            console.log(result);
            // Expected output: 
            //["exuberant", "destruction", "present"]

        
    ### updating State Objects

        [X] use spread operator to target a particular element of the object

        Ex:
        const [contact, setContact] = useState({
            name: "John Doe",
            id: "23402"
            isEmployee: true
        })

        //we want to modify the isEmployee back and forth, onClick of a button

        const toggle = () => {
            setContact(prevState => {
                return {
                    ...prevState,
                    isEmployee: !prevState.isEmployee
                }
            })
        }



# March 4th Recap - Passing state setter functions in a component 

    ### In react, you can't pass state between sibling omponents, so you either raise the state up to a parent component, or use third party state management with Redux.

        ---> Passing data to components (a hierarchy)
            vid link: https://scrimba.com/learn/learnreact/passing-data-around-coc1c4e8db27909ac7f804244

    ### Just as in vanilla Js, you can dynamically style the pages, in React, you can also do it. Few differences:
        ---> css in jsx 
            vid link: https://scrimba.com/learn/learnreact/dynamic-styles-co57845e4a49eb86d4414b0fd
            
# March 5th Recap - 
    ### Looking at our box app, we can see that in our App, we have a state variable. That state var is being passed into our child component, Boxes, as a prop. In our boxes component, we can't directly change the state variable that lives in App.jsx. So what can we do? 
        [X] Looking at 'Boxes.jsx' :

            (Not recommended) Inside child component Boxes, create its own state variable and initialize it using the prop. So we can flip the value of on back and forth. 
                ---> vid: https://scrimba.com/learn/learnreact/boxes-challenge-part-31-local-state-co0264ad6929a556e38a6a10f

            ---> Prob with this: when we change the value of boxOn from true to false using the state variable in BOXES.JSX, we are NOT changing the states of boxOn in the state var in our APP.JSX. Meaning : there's two sources of truth.

        [X] Looking at our 'BetterBoxes.jsx', we can create the toggle function in our APP.JSX and just pass it as a prob to <Boxes />. 

            ---> vid: https://scrimba.com/learn/learnreact/boxes-challenge-part-5-cobdb4d3e907fa304af4b9958


# March 7th Recap 
    ### Conditional Rendering 
        Looking back at our Jokes App, let's say we only want to desplay the punchline if isShown (a state var) is true. We would do something like:
            {isShown && <h1>{props.punchline}</h1>}

        --> Only render the h1 element if isShown is true
    ###
    
    ### Forms
        [] Uncontrolled Components: 
            -> data is handled by the DOM
            -> data does not live in the component's state
        [] Controlled Components: 
            -> data lives in the component’s state
            -> Overrides default HTML form behavior
            --> ex:

                function App(){
                    const [email, setEmail] = useState('');
                    return(
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> 
                    )
                }
        
            -> value: connects the state of the component with the value of the <input>
            -> type: determines the method for rendering info
            -> onChange: updates the component’s state as the user enters data
            -> name: used when we have multiple controlled input elements. Lets the handler func choose what to do based on the value of **event.target.name**
                --> usually set to match the property name in the state we are saving it in
    ###

    ### Multiple Inputs
        [] use <form> to group inputs together
        [] add name (to distinguish between inputs) and value attributes
        [] use an object to hold inputs in a state
        [] update miltiple inputs with a single handleChange function

        --> vid link: https://scrimba.com/learn/learnreact/forms-state-object-co4014fe8a23d6c6d376747ca
    ###

    ### Types of Inputs 
        [] checkbox :
            -> has a checked attribute instead of value attribute, changed when user checks it or not.

            Ex: 
                <label>
                    <input 
                        type = "checkbox"
                        checked={someBooleanVariable}
                        name = 'aBooleanVarName'
                    />
                <label>

        [] radio:
            -> a mix of checkbox and text input. 
            -> value attribute: we need to specify what value our state should take on if that radio button is selected.
            -> checked attribute: we can turn it into a boolean by checking if checked = {obj.someData === "valueGivenToInput"}

            -> vid link : https://scrimba.com/learn/learnreact/forms-in-react-radio-buttons-co14c423dbc2026a7a2b997a2
            
            Ex:
                <label>
                    <input 
                        type="radio"
                        name='employment'
                        value='unemployed'
                        checked={inputs.employment === "unemployed"}
                        onChange={handleChange}
                    />  
                    Unemployed
                </label>

        [] Select :
            -> takes value, name and a onChange function

            Ex:
            
            <label>
                What is your favorite color?
                <select
                    value={state.something}
                    onChange={handleChange}
                    name="something"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                </select>
            </label>
    ###

    ### Submitting a Form
        [] Very first thing to do is, inside our handleSumbit function, do:
            [] event.preventDefault() 
                -> prevents the page from refreshing and setting all form values to default
            [] then we would submit form data to an API or whatever we need to do
        
            Ex:
                <form onSubmit={handleSubmit}>
                    ...
                    <button>Submit</button>
                </form>
              
            [] note: the button type is automatically set to submit when it is inside the <form> 





            
