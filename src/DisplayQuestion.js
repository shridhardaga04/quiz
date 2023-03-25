// import React from "react"
// import DisplayOptions from "./DisplayOptions";

// export default function DisplayQuestions(props) {

//     let incorrect = props.item.incorrect_answers
    
//     const [optionData, setOptionData] = React.useState()

//     if(! incorrect.includes(props.item.correct_answer))
//         incorrect.push(props.item.correct_answer) 
    
//     incorrect.sort(); // to shuffle the options
    
//     const optClick = (opt) => {
//         console.log(opt)   
//     }
    
//     // TO decide how many options will be there 2/4
//         let dispOpt = incorrect.map(item => {  
//             return(
//                 <DisplayOptions 
//                     key={item}
//                     id={item} 
//                     item = {item}
//                     onClick={optClick}
//                     // clicked = {clicked}
//                 />
//             )
//         })
        
//         // Adding Quesions and Options component
//         return (
//         <div className="quiz-container">
//             <h3 className="ques">{props.item.question}</h3>
//             {dispOpt}
//             <hr></hr>
//             {/* {selectedOptions} */}
//         </div>
        
//     )
// }
