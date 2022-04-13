import React from "react"

export default function DisplayQuestions(props) {

    let incorrect = props.item.incorrect_answers

    incorrect.push(props.item.correct_answer) // running this 2 times!!
    
    console.log("before")
    console.log(incorrect)
   
    incorrect.sort();

    console.log("After")
    console.log(incorrect)

    return (
        <div className="quiz-container">
            <h3>{props.item.question}</h3>
            <button className="option">{incorrect[0]}</button>
            <button className="option">{incorrect[1]}</button>
            <button className="option">{incorrect[2]}</button>
            <button className="option">{incorrect[3]}</button>
            <hr></hr>
        </div>
        
    )
}