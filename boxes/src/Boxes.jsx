import { useState } from "react"

export default function Boxes(props){
    //since we can't modify the state from our parent class
    //we create a state initialized with the props that we passed into our Boxes component

    const [squareOn, setSquareOn] = useState(props.on);
    //console.log(squareOn)

    const styles = {
        backgroundColor: squareOn ? "#DDAA68" : "transparent"
    }
    const changeBg = () => {
        setSquareOn(prevState => !prevState )
        console.log(squareOn);
    }
    return(
        <div 
            className="square" 
            style={styles} 
            onClick={changeBg}
        >
            {props.id}
        </div>
    )
}