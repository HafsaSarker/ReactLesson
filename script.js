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


//creating custom HTML elementrtags
function bio(){
    return {
        
    }
}