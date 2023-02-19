export default function Joke(props){
    return (
        <div className="joke-container">
            <h1>Setup: {props.setup}</h1>
            <h3>Punchline: {props.punchline}</h3>
        </div>
    )
}