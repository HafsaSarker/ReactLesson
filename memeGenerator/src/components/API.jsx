import { useState, useEffect } from 'react';

export default function API(){
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
        .then((response) => response.json())
        .then((data) => setStarWarsData(data))
    },[count])

    const getNextCharacter = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <button onClick={getNextCharacter}>Next character</button>
           <pre>{JSON.stringify(starWarsData, null, 2)}</pre> 
        </div>
    )
}