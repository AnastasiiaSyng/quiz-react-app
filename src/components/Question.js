import React from 'react'
import './styles/Question.css'

const Question = ({questions}) => {
    return (
        <div className='question'>
            <p class="flow-text">{questions}</p>
        </div>
    )
}

export default Question