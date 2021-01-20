/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import Question from './Question'
import Answers from './Answers'
import QuestName from './QuestName'
import './Quiz.css'

class Quiz extends Component {

    state = {
        questions : {
            1: 'ne shayu cto sprosit?',
            2: 'capital of great britain',
            3: 'kto lubit kostya bolshe vseh?'
        },
        options : {
            1: {
                1: 'da',
                2: 'net',
                3: 'ne znayu'
            },
            2: {
                1: 'london',
                2: 'kyiv',
                3: 'krakow'
            },
            3: {
                1: 'ya',
                2: 'kosty',
                3: 'bomzyi'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        gestName: null,
        gotName: false
    };

    checkAnswer = (answer) => {
        let { correctAnswers, score, correctAnswer, step, clickedAnswer } = this.state

        if (correctAnswers[step] === answer) {
            this.setState({
                score: score + 1, 
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            })
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            })
        }
    }

    handleChange = (e) => {
        this.setState({gestName: e.target.value});
    }

    gotName = () => {
        if (this.state.gestName) {
            this.setState({gotName: true})
        }
    }

    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }

    render() {
        let { questions, step, options, correctAnswer, clickedAnswer, gotName, score, gestName } = this.state;
        return(
            <div className='quiz'> 
                { gotName 
                    ?
                   (<div> 
                       { step <= Object.keys(questions).length ? 
                       (<div>
                            < Question 
                            questions={questions[step]} 
                            />
                            <Answers 
                            checkAnswer={this.checkAnswer} 
                            options={options[step]} 
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                            />
                            <a
                            className={clickedAnswer ? 'waves-effect waves-light btn grey darken-3' : 'hidden'}
                            onClick={() => this.nextStep(step)}
                            >Next question
                            </a>
                       </div>
                       ) : (
                       <div>
                            <h1>{gestName}, you have completed the quiz!</h1>
                            <p class="flow-text">Your score is: <b>{score}</b> of {Object.keys(questions).length}</p>
                            <p>Thank you!</p>
                       </div>)}
                  
                   </div>)
                :
                    (< QuestName 
                    handleChange={this.handleChange}
                    gotName={this.gotName}/>)
             
                }
            </div>
        )
    }
}

export default Quiz