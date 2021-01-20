import React from 'react'
import './QuestName.css'

const QuestName = ({handleChange, gotName}) => {
    return( 
            <div class="questname">
                <div class="input-field col s6 ">
                    <input 
                    id="first_name2" 
                    type="text" 
                    class="validate"
                    onChange={handleChange}
                    placeholder='What is your name, darling?'
                    >
                    </input>
                    <a class="waves-effect waves-light btn grey darken-3" onClick={gotName}>say</a>
                </div>
            </div>
    )
}

export default QuestName 