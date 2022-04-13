import React from "react"
import DisplayQuestions from "./DisplayQuestion"

export default function Question(props) {

    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=18")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
            .catch(error => console.log(error))
    }, [])
    
    // console.log({questions})
    
    let displayQ = []
    displayQ = questions.map(item => {
        return (
            <DisplayQuestions
                key = {item.question}
                item={item}
            />
        )
    })
     

    return (
        <div>
            {displayQ}
            {/* <button className="btn" onClick={props.navigate}>Home</button> */}
        </div>
    )
}