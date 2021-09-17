import React from "react";
import start from '../images/start-logo.png'

const FormZero = (props) => {
    return(
        <div className='start-container'>
            <div id='start-logo-container'>
                <img id='start-logo' src={start} alt='start'/>
                <h2 id='start-text' onClick={props.nextStep}>კითხვარის დაწყება</h2>
            </div>
        </div>
    )
}

export default FormZero