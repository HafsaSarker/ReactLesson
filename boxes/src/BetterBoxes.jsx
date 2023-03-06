

export default function BetterBoxes(props){
    const styles = {
        backgroundColor: props.on ? "#DDAA68" : "transparent"
    }
    
    return(
        <div 
            className="square" 
            style={styles} 
            //have a function run our handleClick func (so we can include parameters like the id)
            onClick = {()=>props.handleClick(props.id)}
        >
            {props.id}
        </div>
    )
}