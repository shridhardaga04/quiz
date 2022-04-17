import React from "react"
import DisplayOptions from "./DisplayOptions";

export default function DisplayQuestions(props) {

    let incorrect = props.item.incorrect_answers
    // let correct = props.item.correct_answer
    // let [score, setScore] = React.useState(0)
    // let score = 0
    const [optionData, setOptionData] = React.useState({
        selectedOptions:[]
    })

    if(! incorrect.includes(props.item.correct_answer))
        incorrect.push(props.item.correct_answer) 
    
    incorrect.sort(); // to shuffle the options

    // let optionsClicked = []
    // let [options, setOptions] = React.useState([])
    
    const [clicked, setClicked] = React.useState(false)
    
    // let clicked = false
    
    // const optClick = (opt) => {
    //     console.log(opt)
    //     // console.log(correct)

    //     let res = []
    //     res.push(opt)

    //     // setSelectedOptions([...selectedOptions, opt]) //Not working!!
    //     // setSelectedOptions(prevVal => [...prevVal, opt])
    //     setOptionData((prevOptionData)=>({
    //         selectedOptions:[...prevOptionData.selectedOptions,opt]
    //     }))
    //     console.log(res)
    //     // setClicked(!clicked)
        
    //     // here showing diff o/p    
    // }
    
    // TO decide how many options will be there 2/4
        let dispOpt = incorrect.map(item => {  
            console.log(item) 
            return(
                <DisplayOptions 
                    key={item}
                    id={item} 
                    item = {item}
                    onClick={()=>setOptionData({selectedOptions:[...optionData.selectedOptions,item.id
                    ]})}
                    clicked = {clicked}
                />
            )
        })
console.log(optionData.selectedOptions);
        return (
        <div className="quiz-container">
            <h3 className="ques">{props.item.question}</h3>
            {dispOpt}
            <hr></hr>
            {/* {selectedOptions} */}
        </div>
        
    )
}