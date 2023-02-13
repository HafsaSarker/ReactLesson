//render: to place something on the screen
//react render. Has two pram, 1: what do you want to render
//2: where do you want to render it. In this case, In a div with id 'root'

ReactDOM.render(<h1>Hello React!</h1>, document.getElementById("root"));


//let's render something else
ReactDOM.render(<h2>The nigiri</h2>, document.getElementById("root"));

ReactDOM.render(
    <ul>List<li>Get food</li><li>Finish workout</li></ul>, 
    document.getElementById("listEx")
);


//creating custom HTML element tag
//MUST be capitalized first letter
function Bio(){
    return (
        <div>
            <h1>Did you know that...</h1>
            <p>In 2028, people will start getting to work in drones.</p>
        </div>
    )
}

//render that element
ReactDOM.render(
    <div>
        <Bio />
    </div>,
    document.getElementById("customeElem")
);

//react is declaritive
//lets look at the imperitive way of writting js using vanilla js

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

const h1 = document.createElement("h1");
h1.textContent = "An imperitive way to program";
h1.className = "header";
const root = document.getElementById("root");
root.appendChild(h1);

//the above code can be written in a SINGLE LINE in react in a declarative way. Look:
ReactDOM.render(
    <h1 className="header">This is a declarative way to program</h1>,
    document.getElementById("root")
);

//with jsx, react creates plain old js objects that describe the dom element we create:
const element = <h1 className="header">This is JSX</h1>
console.log(element)
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */

//you cannot render two sibling elements together without wrapping them in a div
ReactDOM.render(
    <div>
        <h2>Rendering multiple siblings without wrapper is not allowed</h2>
        <p>Now we can render them this way</p>
    </div>,
    document.getElementById("multiRender")
);

//you can also put the item to be rendered in a var
const itemToRender = (
    <div>
        <table>
            <tr>
                <td>Money</td>
                <td>Person</td>
            </tr>
            <tr>
                <td>$100,000</td>
                <td>Jin</td>
            </tr>
        </table>
    </div>
);

ReactDOM.render(
    itemToRender,
    document.getElementById("multiRender")
);

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

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

ReactDOM.render(
    nav,
    document.getElementById("NAV")
);


