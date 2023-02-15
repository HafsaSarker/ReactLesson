1. Why do we need to `import React from "react"` in our files?
    JSX sytax is defined in react. Without importing React, we would get an error message saying "react is not defined"

2. If I were to console.log(page) in index.js, what would show up?
    a javascript object which describes what React should add to the real DOM for us

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
    The JSX above is not wrapped in a div, OR an <> </> (empty tag), or a single parent element. 


4. What does it mean for something to be "declarative" instead of "imperative"?
    declarative is when you don't have to specify every single step, like in vanilla js

5. What does it mean for something to be "composable"?
    you can create multiple components and piece them together to make a larger piece. Like using custome element tags and combining them together. 