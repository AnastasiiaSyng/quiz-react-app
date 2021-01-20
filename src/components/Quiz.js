/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import Question from './Question'
import Answers from './Answers'
import QuestName from './QuestName'
import './styles/Quiz.css'

class Quiz extends Component {

    state = {
        questions : {
            1: 'With over 222 million units sold, what is Apple’s highest-selling iPhone model?',
            2: 'In which year was the Microsoft XP operating system released?',
            3: 'What does LG stand for in LG Electronics?',
            4: 'Originally Amazon only sold which product?',
            5: 'Which prestigious university did Microsoft founder Bill Gates drop out of?'
        },
        options : {
            1: {
                1: 'iPhone 7/7 Plus',
                2: 'iPhone 6/6 Plus',
                3: 'iPhone 11 Pro / 11 Pro Max',
            },
            2: {
                1: '2001',
                2: '1997',
                3: '2004',
            },
            3: {
                1: 'Little Girl',
                2: 'Life is Good',
                3: 'Lucky-Goldstar',
            },
            4: {
                1: 'Books',
                2: 'Snacks',
                3: 'Electronics',
            },
            5: {
                1: 'Stanford',
                2: 'Harvard',
                3: 'Oxford'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '3',
            4: '1',
            5: '2'
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