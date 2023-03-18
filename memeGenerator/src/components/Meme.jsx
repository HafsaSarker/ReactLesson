import memesData from "../memesData";
import React, { useState, useEffect } from 'react';

export default function Meme() {
    const dummyImgUrl = "https://crhscountyline.com/wp-content/uploads/2019/12/Blank-Nut-Button.jpg";

    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImg : dummyImgUrl
    });

    //state var to hold API data
    const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect(() => {
        console.log("Ran")
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes");

            const data = await response.json(); 
            
            setAllMemeImages(data.data.memes);
        }
        
        getMemes();
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;

        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    function getRandomImg(event){
        event.preventDefault();
        
        //get random img url
        let rand = Math.floor(Math.random() * (allMemeImages.length));
        const url = allMemeImages[rand].url;
        
        setMeme(prevState => {
            return {
                ...prevState,
                randomImg: url
            }
        });
        
    }


    return (
        <main>
            <form>
                <input 
                    placeholder="Top Text" type="text"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    placeholder="Bottom Text" type="text"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <button onClick={getRandomImg}>New Meme Image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImg} />
                <h2 className="text-top">{meme.topText}</h2>
                <h2 className="text-bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}