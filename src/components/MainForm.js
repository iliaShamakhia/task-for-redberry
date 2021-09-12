import React, { useState } from "react";
import FormZero from "./FormZero";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import FormFive from "./FormFive";

const MainForm = () => {
    const [formState, setFormState] = useState({
        step:0,
        name:'',
        lastName:'',
        email:''
    })

    const nextStep = () => {
        setFormState({...formState, step:formState.step + 1})
    }

    const prevStep = () => {
        setFormState({...formState, step:formState.step - 1})
    }
    switch(formState.step){
        case 0:
            return(
                <FormZero nextStep={nextStep}/>
            )
        case 1:
            return(
                <FormOne nextStep={nextStep}/>
            )
        case 2:
            return(
                <FormTwo prevStep={prevStep} nextStep={nextStep}/>
            )
        case 3:
            return(
                <FormThree prevStep={prevStep} nextStep={nextStep}/>
            )
        case 4:
            return(
                <FormFour prevStep={prevStep} nextStep={nextStep}/>
            )
            case 5:
                return(
                    <FormFive />
                )
        default:
            return(null)  
    }
    
}

export default MainForm