import './App.css'
import Joke from './Joke';
import data from './jokesData';

export default function App() {
  const jokesMap = data.map(joke => {
    return (
      <Joke 
        setup = {joke.setup}
        punchline = {joke.punchline}
        key = {joke.setup}
      />
    )
  })
  return (
    <div>
      {jokesMap}
    </div>
  )
}

/*
<Joke 
      obj = {{
        punchline: "I can't wait to see her face light up when she opens it.",
        setup: "I got my daughter a fridge for her birthday"
      }}
      />

      <Joke 
      obj = {{
        punchline: "He just ransomware!",
        setup: "How did the hacker escape the police"
      }}
      />

      <Joke 
      obj = {{
        punchline: "I don't know, but the flag is a big plus!",
        setup: "What's the best thing about Switzerland?"
      }}
      />

      <Joke 
      obj = {{
        punchline: "Swarm.",
        setup: "Why do bees stay in the hive in the winter?"
      }}
      />  
*/