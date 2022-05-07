export default function Intro(props){
    return(
        <main className="first-page">
            <h1>Quizzical</h1>
            <p><em>Let's play a fun Quiz!!</em></p>
            <button className="btn" onClick={props.navigate}>Start Quiz</button>
        </main>
    )
}