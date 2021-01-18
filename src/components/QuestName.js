import React from 'react'

const QuestName = ({handleChange, gotName}) => {
    return(
        <div>
            <input
            onChange={handleChange}
            type='text'
            placeholder='What is your name, darling?'>
            </input>
            <button onClick={gotName}>say</button>  
        </div>
    )
}

export default QuestName 