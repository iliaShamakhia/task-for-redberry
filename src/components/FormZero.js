import React from "react";
import start from '../images/start-logo.png'

const FormZero = (props) => {
    return(
        <div className='container'>
            <div id='start-logo-container'>
                <img id='start-logo' src={start} alt='start'/>
            </div>
            <button id='start-button' onClick={props.nextStep}>კითხვარის დაწყება</button>
        </div>
    )
}

export default FormZero