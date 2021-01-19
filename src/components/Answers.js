import React from 'react'
import './Answers.css'

const Answers = ({ options, checkAnswer, correctAnswer, clickedAnswer, step }) => {

    return (
        <div>
            {Object.keys(options).map(option => 
            <li disabled 
                className={
                    correctAnswer === option ? 'correct' : 
                    clickedAnswer === option ? 'incorrect' : ''
                }
                onClick={() => checkAnswer(option)}
                key={option}>
                {options[option]}
            </li>)}
            <div>
                { correctAnswer ? 'Correct' : clickedAnswer ? 'Incorrect' : ''}
            </div>
        </div>
    )
}

export default Answers
