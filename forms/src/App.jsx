import { useState } from 'react'
import './App.css'

function App() {
  const [inputs, setInputs] = useState({
    first: '',
    last: ''
  });
  const handleChange = (event) => {
    //console.log(event.target.name);
    setInputs(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
    console.log(inputs);
  }
  return (
    <div className="App">
      <form>
        <input 
          type="text" 
          value={inputs.first} 
          placeholder='First Name' 
          name='first'
          onChange={handleChange}
        />

        <input 
          type="text" 
          value={inputs.last} 
          placeholder='Last Name' 
          name='last'  
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default App
