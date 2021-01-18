import React from 'react'
import './Answers.css'

const Answers = ({ options, checkAnswer, correctAnswer, clickedAnswer }) => {

    return (
        <div>
            {Object.keys(options).map(option => 
            <ul 
                className={
                    correctAnswer === option ? 'correct' : 
                    clickedAnswer === option ? 'incorrect' : ''
                }
                onClick={() => checkAnswer(option)}
                key={option}>
                {options[option]}
            </ul>)}
        </div>
    )
}

export default Answers
