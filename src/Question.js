import React from "react"
import DisplayQuestions from "./DisplayQuestion"

export default function Question(props) {

    const [questions, setQuestions] = React.useState([])
    // const [score, setScore] = React.useState(0)

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
                // score={score}
            />
        )
    })
     
    // function submitAns(q){
    //     console.log(q)
    // }

    return (
        <div className="quiz">
            {displayQ}
            <button className="ca">Check Answers</button> {/*onClick = {submitAns(displayQ.key)}*/}
            {/* <h1>{score}</h1> */}
            {/* <button className="btn" onClick={props.navigate}>Home</button> */}
        </div>
    )
}