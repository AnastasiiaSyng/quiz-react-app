import React from 'react'
import './styles/Answers.css'

const Answers = ({ options, checkAnswer, correctAnswer, clickedAnswer, step }) => {

    return (
        <div>
            <div className={ clickedAnswer ? 'disable' : ''}>
                <ul className="collection"> 
                    {Object.keys(options).map(option => 
                    <li 
                        className={
                            correctAnswer === option ? 'collection-item green lighten-2' : 
                            clickedAnswer === option ? 'collection-item red lighten-2' : 'collection-item'
                        }
                        onClick={() => checkAnswer(option)}
                        key={option}>
                        {options[option]}
                    </li>
                    )} 
                </ul>
                <div>
                    { correctAnswer 
                    ?  
                    <p className='green-text lighten-2'>Correct</p> 
                    : 
                    clickedAnswer 
                    ? 
                    <p className='red-text lighten-2'>Incorrect</p> 
                    : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Answers
