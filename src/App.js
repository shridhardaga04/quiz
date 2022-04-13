
import './App.css';
import Intro from './Intro.js'
import Question from './Question';
import React from "react"

export default function App() {

    const [nextPage, setNextPage] = React.useState(false)

    function navigate(){
        setNextPage(prevNextPage => (!prevNextPage))
    }

    return (
    <div className="App">
        {!nextPage &&<Intro navigate={() => navigate()} />}
        {nextPage && <Question navigate={() => navigate()} />}
    </div>
  );
}
