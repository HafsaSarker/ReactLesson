export default function Joke(props){
    return (
        <div className="joke-container">
            <h1>Setup: {props.obj.setup}</h1>
            <h3>Punchline: {props.obj.punchline}</h3>
        </div>
    )
}