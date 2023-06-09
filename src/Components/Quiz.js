import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

export function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { score, setScore , setGameState } = useContext(QuizContext);
    const [optionChosen, setOptionChosen] = useState("");
    const nextQuestion = () => {
        if (Questions[currentQuestion]?.answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion]?.answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState('endScreen')
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion]?.prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion]?.optionA}{" "}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion]?.optionB}{" "}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion]?.optionC}{" "}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion]?.optionD}{" "}</button>
            </div>
            {
                currentQuestion === (Questions.length - 1) ? <button onClick={finishQuiz}>Finish Quiz</button> : <button onClick={nextQuestion}>Next Question</button>
            }

        </div>
    );
}

