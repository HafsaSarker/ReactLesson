1. What do props help us accomplish?

    Just like function parameters, props being passed into a component, makes the component more reusuable 

2. How do you pass a prop into a component?

    lets say we have this component and we want to pass in title:

        <MyCustomeNav 
        title= "give it a title" 
        logoImg = "put a src link"
        />

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
    No because React converts native DOM elements like div, into REAL DOM elements. And these DOM elements do not have properties outside of HTML specifications. So we cannot stick a custome prop into native DOM elements.

4. How do I receive props in a component?
function Navbar(props) {
    return (
        console.log(props); //an object will be returned 
        <header>
            ...
        </header>
    )
}

    the component above recieves a value called props.

5. What data type is `props` when the component receives it?
    An object data type