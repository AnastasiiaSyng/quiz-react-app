import React from 'react'
import './styles/QuestName.css'

const QuestName = ({handleChange, gotName}) => {
    return( 
            <div className="questname">
                <div className="input-field col s6 ">
                    <input 
                    id="first_name2" 
                    type="text" 
                    className="validate"
                    onChange={handleChange}
                    placeholder='What is your name, darling?'
                    >
                    </input>
                    <a className="waves-effect waves-light btn grey darken-3" onClick={gotName}>say</a>
                </div>
            </div>
    )
}

export default QuestName 