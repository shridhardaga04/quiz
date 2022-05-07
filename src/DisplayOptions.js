export default function DisplayOptions(props) {
    // const styles = {
    //     backgroundColor: props.clicked ? "#D6DBF5" : "transparent",
    //     // disabled: props.clicked ? "disabled" : "enabled" ,
    //     pointerEvents: props.clicked ? "none" : "",
    //     cursor: props.clicked ? "not-allowed" : "pointer"
    // }
    return(
        <div className="opt-container">
            <button 
                className="option" 
                onClick={() => props.onClick(props.id)}
                // style={styles}
                // disabled={props.clicked ? "disabled" : "enabled"}
            >                   
                {props.item}
            </button>
        </div>
    )
}