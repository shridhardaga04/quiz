
import './App.css';
import Intro from './Intro.js'
import React from "react"
import Quiz from './Quiz';

export default function App() {

    const [nextPage, setNextPage] = React.useState(false)

    function navigate(){
        setNextPage(prevNextPage => (!prevNextPage))
    }

    return (
    <div className="App">
        {!nextPage &&<Intro navigate={() => navigate()} />}
        {nextPage && <Quiz navigate={() => navigate()} />}
    </div>
  );
}
