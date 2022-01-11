import React, { useState, useEffect } from 'react'
import {formatTime} from '../utils/index'

const End = ({results, data, onReset, onAnswerUpdate, time, toggleTheme }) => {
    
    
const [correctAnswers, setCorrectAnswers] = useState('');

        useEffect(() => {
            
            let correct = 0;

            results.forEach((result, index) => {

                if (result.a === data[index].answer) {
                    correct++;
                }
            });

            setCorrectAnswers(correct);
        },[])

    return (
        <div className="end-wrapper">
            <div>
                <button className='button is-info2 is-medium toggle-btn'
                onClick={toggleTheme}>Toggle</button>
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h1>Results:</h1>
                        <p>You scored {correctAnswers} out of {data.length}</p>
                        <p> {Math.floor((correctAnswers / data.length) * 100)} %</p>
                        <p> The time you took to finish the quiz: {formatTime(time)}</p>
                        <button className="button is-primary" onClick={onReset}> Try Again</button>
                        <button className="button is-link" onClick={onAnswerUpdate}> Check Answer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default End;