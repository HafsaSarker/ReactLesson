import { useState } from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import API from './components/API'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <API /> */}
    </div>
  )
}

export default App
