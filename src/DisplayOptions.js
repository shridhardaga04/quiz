// import React from "react";

// const DisplayOptions = ({
//   answer,
//   handleClick,
//   isSelected,
//   isCorrect,
//   isDisabled,
//   isQuizSubmitted
// }) => {
//   const styles = {
//     backgroundColor: isSelected
//       ? isCorrect
//         ? "green"
//         : "red"
//       : isQuizSubmitted && isCorrect
//       ? "green"
//       : "transparent",
//     pointerEvents: isSelected ? "none" : "",
//     color: isSelected ? "white" : "#293264",
//     cursor: isDisabled | isSelected ? "not-allowed" : "pointer",
//   };

//   return (
//     <div className="opt-container">
//       <button
//         className="option"
//         onClick={handleClick}
//         style={styles}
//         disabled={isDisabled}
//       >
//         {answer}
//       </button>
//     </div>
//   );
// };

// export default DisplayOptions;


import React from "react";

const DisplayOptions = ({
  answer,
  handleClick,
  isSelected,
  isCorrect,
  isDisabled,
  isQuizSubmitted
}) => {
  const [bgColor, setBgColor] = React.useState("transparent");
  
  React.useEffect(() => {
    if (isQuizSubmitted) {
      if (isSelected && isCorrect) {
        setBgColor("green");
      } else if (isSelected && !isCorrect) {
        setBgColor("red");
      } else if (!isSelected && isCorrect) {
        setBgColor("green");
      } else {
        setBgColor("#f0f0f0");
      }
    } else {
      setBgColor(isSelected ? "#f0f0f0" : "transparent");
    }
  }, [isSelected, isCorrect, isQuizSubmitted]);
  
  const styles = {
    backgroundColor: bgColor,
    pointerEvents: isSelected ? "none" : "",
    color: isSelected ? "black" : "#293264",
    cursor: isDisabled | isSelected ? "not-allowed" : "pointer",
  };

  return (
    <div className="opt-container">
      <button
        className="option"
        onClick={handleClick}
        style={styles}
        disabled={isDisabled}
      >
        {answer}
      </button>
    </div>
  );
};

export default DisplayOptions;
