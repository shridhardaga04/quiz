import React from "react"

export default function DisplayQuestions(props) {

    const incorrect = props.item.incorrect_answers
    let l = incorrect.length
    let show = false
    if (l === 3) show = true
    console.log("show")
    return (
        <div className="quiz-container">
            <h3>{props.item.question}</h3>
            <button className="option">{props.item.incorrect_answers[0]}</button>
            <button className="option">{props.item.correct_answer}</button>
            <button className="option">{props.item.incorrect_answers[2]}</button>
            <button className="option">{props.item.incorrect_answers[1]}</button>
        </div>
    )
}