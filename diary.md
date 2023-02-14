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