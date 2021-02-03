import React from 'react';
import "./Start.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Switch from 'react-bootstrap-switch';



const Start = ({ onQuizStart, toggleTheme, onChangeThemeName, togglingTheme}) => {
    
    return (
        <div className="start-wrapper">

            <div>
                <button className='button is-info2 is-medium toggle-btn' onClick={togglingTheme}>
                    Change Theme {onChangeThemeName}
                </button> 
            </div>

            <div className='card'>
                <div className='card-content'>
                    <div className='content'>
                        <h1 className="start-h1">Start the quiz</h1>
                        <p>Good Luck!</p>
                        <br />
                        <br />
                        <button className='button is-info2 is-medium' onClick={onQuizStart}>
                            Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;