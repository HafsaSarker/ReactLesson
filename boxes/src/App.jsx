import { useState } from 'react'
import './App.css'
import Boxes from './Boxes'
import data from './boxData'

function App() {
  const [boxArr, setBoxArr] = useState(data);

  //loop through all box and render a div for each
  const boxMap = boxArr.map(square => {
    return <Boxes 
              key = {square.id}
              id = {square.id}
              on = {square.on}
          />
  })
  return (
    <div className="App">
      {boxMap}
    </div>
  )
}

export default App
