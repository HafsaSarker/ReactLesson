import { useState } from 'react'
import './App.css'

function App() {
  const [inputs, setInputs] = useState({
    first: '',
    last: '',
    email: '',
    comments: '',
    isFriendly: false,
    employment: '',
    favColor: ''
  });
/*
  //DOESN'T WORK WITH CHECKBOX TYPE
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
*/

  const handleChange = (event) =>{
    //destructure event.target and pull out values we need
    const {name, value, type, checked} = event.target;
    setInputs(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
    //submit form data to an API or whatever we need to do
  } 

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
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

        <input 
          placeholder='example@email.com'
          type="email"
          name='email'
          value={inputs.email}
          onChange={handleChange}
        />

        <textarea 
          value={inputs.comments}
          placeholder='Additional Comments'
          name='comments'
          onChange={handleChange}
        />

        <label>
          <input 
            type="checkbox"
            name='isFriendly'
            checked={inputs.isFriendly}
            onChange={handleChange}
          />  
          Are you friendly?
        </label>

        <fieldset>
          <legend>Current employment status</legend>

          <label>
            <input  
              type="radio"
              name='employment'
              value='employed'
              checked={inputs.employment === "employed"}
              onChange={handleChange}
            />
              Employed
          </label>

          <label>
            <input 
              type="radio"
              name='employment'
              value='unemployed'
              checked={inputs.employment === "unemployed"}
              onChange={handleChange}
            />  
            Unemployed
          </label>

        </fieldset>

        <label>
          What is your favorite color?
          <select
            value={inputs.favColor}
            name="favColor"
            onChange={handleChange}
          >
            <option value="">-- Choose --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
