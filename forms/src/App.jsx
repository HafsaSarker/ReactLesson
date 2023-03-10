import { useState } from 'react'
import './App.css'

function App() {
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    confirmPass: '',
    joinNewsletter: false
  })
  const [isSumbited, setIsSubmited] = useState(false);
  const [passMatch, setPassMatch] = useState(false);

  const handleChange = (event) => {
    //destructure event.target and pull out values we need
    const {name, value, type, checked} = event.target;

    setFormInputs(prevState => {
        return {
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //check if passwords are same
    if(formInputs.password === formInputs.confirmPass) {
        setPassMatch(true);
        setIsSubmited(true);
    }
    else {
        alert("Passwords do not match")
        setIsSubmited(false);
        setPassMatch(false);
    }

    console.log(formInputs);
    
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
            type="email"
            placeholder='Email address'
            value={formInputs.email}
            name='email'
            onChange={handleChange}
        />
        <input 
            type="password"
            placeholder='password'
            value={formInputs.password}
            name='password'
            onChange={handleChange}
        />
        <input 
            type="password"
            placeholder='Confirm password'
            value={formInputs.confirmPass}
            name='confirmPass'
            onChange={handleChange}
        />
        
        <div className="form--marketing">
            <input 
                id="okayToEmail"
                type="checkbox"
                checked={formInputs.joinNewsletter}
                name='joinNewsletter'
                onChange={handleChange}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button>Sign Up</button>
      </form>
      {passMatch && isSumbited && (formInputs.joinNewsletter && <p>Thanks for signing up for our newsletter!</p>)}

      {passMatch && isSumbited && (!formInputs.joinNewsletter && <p>Successfully signed up!</p>)}
      
    </div>
  )
}

export default App
