import React from "react";
import DisplayOptions from "./DisplayOptions";
import DisplayQuestion from "./DisplayQuestion";

const Quiz = (props) => {
  const [quiz, setQuiz] = React.useState([]);
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [isQuizSubmitted, setQuizSubmitted] = React.useState(false);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=17&difficulty=easy")
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data.results);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const handleOptionClick = (questionIndex, answer) => {
  //   if (!isQuizSubmitted) {
  //     const updatedSelectedAnswers = [...selectedAnswers];
  //     updatedSelectedAnswers[questionIndex] = answer;
  //     setSelectedAnswers(updatedSelectedAnswers);

  //     const currentQuestion = quiz[questionIndex];
  //     if (answer === currentQuestion.correct_answer) {
  //       setScore((prevScore) => prevScore + 1);
  //     }
  //   }
  // };

  const handleOptionClick = (questionIndex, answer) => {
    if (!isQuizSubmitted) {
      const updatedSelectedAnswers = [...selectedAnswers];
      updatedSelectedAnswers[questionIndex] = answer;
      setSelectedAnswers(updatedSelectedAnswers);
  
      const currentQuestion = quiz[questionIndex];
      if (answer === currentQuestion.correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };
  

  // const handleCheckAnswers = () => {
  //   setQuizSubmitted(true);

  //   const updatedSelectedAnswers = selectedAnswers.map((answer, index) => {
  //     const currentQuestion = quiz[index];
  //     if (answer === currentQuestion.correct_answer) {
  //       return currentQuestion.correct_answer;
  //     } else {
  //       return answer;
  //     }
  //   });

  //   setSelectedAnswers(updatedSelectedAnswers);
  // };

  const handleCheckAnswers = () => {
    setQuizSubmitted(true);
  
    const updatedSelectedAnswers = selectedAnswers.map((answer, index) => {
      const currentQuestion = quiz[index];
      if (answer === currentQuestion.correct_answer) {
        return currentQuestion.correct_answer;
      } else {
        return answer;
      }
    });
  
    setSelectedAnswers(updatedSelectedAnswers);
  };
  
  return (
    <div className="quiz">
      <div className="quiz-container">
        {quiz.map((item, index) => (
          <div key={item.question}>
            <DisplayQuestion question={item.question} />

            {[...item.incorrect_answers, item.correct_answer]
              .sort()
              .map((opt) => (
                <DisplayOptions
                  answer={opt}
                  handleClick={() => handleOptionClick(index, opt)}
                  isSelected={selectedAnswers[index] === opt}
                  isCorrect={opt === item.correct_answer}
                  key={opt}
                  isDisabled={isQuizSubmitted}
                  isQuizSubmitted={isQuizSubmitted}
                />
              ))}
            <hr />
          </div>
        ))}
      </div>
      {!isQuizSubmitted ? (
        <button className="ca" onClick={handleCheckAnswers}>
          Check Answers
        </button>
      ) : (
        <h1>Your Final Score : {score}</h1>
      )}
    </div>
  );
};

export default Quiz;
