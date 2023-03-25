import React from "react";

export default function Quiz(props) {
  const [quiz, setQuiz] = React.useState([]);
  // const [options, setOptions] = React.useState([]);
  // const [isClicked, setClicked] = React.useState(false);
  // const [answers, setAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=17&difficulty=easy")
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data.results);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="quiz">
      <div className="quiz-container">
        {quiz.map((item) => (
          <div key={item.question}>
            <h3 className="ques">{item.question}</h3>

            {shuffleArray([...item.incorrect_answers, item.correct_answer]).map(
              (opt) => (
                <div className="opt-container">
                  <button
                    className="option"
                    onClick={(event) => {
                      if (event.target.innerHTML === item.correct_answer)
                        setScore((prevScore) => prevScore + 1);
                    }}
                  >
                    {opt}
                  </button>
                </div>
              )
            )}
          </div>
        ))}
      </div>
      {/* <button className="ca">Check Answers</button> */}
      {/*onClick = {submitAns(displayQ.key)}*/}
      <h1>Your Score = {score}</h1>
    </div>
  );
}
