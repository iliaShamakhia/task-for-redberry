import React from "react";
import start from '../images/start-logo.png'

const FormZero = (props) => {
    return(
        <div className='start-container'>
            <div id='start-logo-container'>
                <img id='start-logo' src={start} alt='start'/>
            </div>
            <div id='start-button-container'>
                <button id='start-button' onClick={props.nextStep}><p id='start-text'>კითხვარის დაწყება</p></button>
            </div>
        </div>
    )
}

export default FormZero