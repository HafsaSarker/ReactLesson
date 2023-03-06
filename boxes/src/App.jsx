import { useState } from 'react'
import './App.css'
// import Boxes from './Boxes'
import Boxes from './BetterBoxes';
import data from './boxData'

function App() {
  const [boxArr, setBoxArr] = useState(data);

  //declarative way
  //goal is to know which box was clicked
  //so we can correctly update or state above
  const toggle = (id) => {
    setBoxArr(prevState => {
      //loop over prevState obj
      return prevState.map((square) => {

        //if square.id is equal to id in the param (meaning that square was clicked), we are going to return the prevState obj EXCEPT, on will be set to the opposite of what it was before
        //else, return the old obj
        return square.id === id ? {...square, on: !square.on} : square
      })
    })

    /*
    //just for practice!, the id gets multiplied by 2
    setBoxArr(prevState => {
      //loop over each box item
      return prevState.map((square) => {
        return square.id === id ? {...square, id: (square.id * 2)} : square
      })
    })
    */
  }

  //loop through all boxes and render a Box for each
  const boxMap = boxArr.map(square => {
    return <Boxes 
              key = {square.id}
              id = {square.id}
              on = {square.on}
              //passing the function as a prop
              handleClick = {toggle}
          />
  })
  return (
    <div className="App">
      {boxMap}
    </div>
  )
}

export default App
