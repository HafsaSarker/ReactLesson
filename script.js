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