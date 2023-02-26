import memesData from "../memesData";


export default function Meme() {

    function getRandomImg(){
        const arr = memesData.data.memes;
        let rand = Math.floor(Math.random() * arr.length);
        const url = arr[rand].url;
        console.log(url);
    }

    return (
        <main>
            <form>
                <input placeholder="Top Text" type="text"></input>
                <input placeholder="Bottom Text" type="text"></input>
            </form>
            <button onClick={getRandomImg}>New Meme Image</button>
        </main>
    )
}