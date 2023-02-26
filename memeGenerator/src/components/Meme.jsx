import memesData from "../memesData";
import { useState } from 'react';

export default function Meme() {
    const dummyImgUrl = "https://crhscountyline.com/wp-content/uploads/2019/12/Blank-Nut-Button.jpg";
    const [imgURL, setUrl] = useState(dummyImgUrl);

    function getRandomImg(){

        //get random img url
        const arr = memesData.data.memes;
        let rand = Math.floor(Math.random() * (arr.length - 1));
        const url = arr[rand].url;
        
        setUrl(url);
        
    }

    return (
        <main>
            <form>
                <input placeholder="Top Text" type="text"></input>
                <input placeholder="Bottom Text" type="text"></input>
            </form>
            <button onClick={getRandomImg}>New Meme Image</button>
            <img src={imgURL} />
        </main>
    )
}