Quiz!

1. What is a React component?
    ### a function that returns React elements. Just like a function, it can be used many times just by rendering. 

    Ex: 
    function Page() {
        return (
            <div>
                <p>This is a paragraph</p>
            </div>
        )
    }
    
    const root = ReactDOM.createRoot(document.getElementbyId("root"));
    root.render(<Page />);





2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
    ### this code doesn't use pascal capitalization. The "myComponent()" should be "MyComponent()"




3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

    ### we are rendering a react component, so we must not have "Header()", instead, we should use "<Header />"
