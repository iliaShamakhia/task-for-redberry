import React, { useState } from "react";
import FormZero from "./FormZero";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import FormFive from "./FormFive";
import useFormOne from "../utils/useFormOne";
import validateFormOne from "../utils/validateFormOne"
import useFormTwo from '../utils/useFormTwo'
import validateFormTwo from "../utils/validateFormTwo";
import useFormThree from "../utils/useFormThree";
import validateFormThree from "../utils/validateFormThree";
import useFormFour from "../utils/useFormFour";
import validateFormFour from "../utils/validateFormFour";

const MainForm = () => {

    const [step, setStep] = useState(0)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const { handleChange, handleSubmit, values, errors } = useFormOne(nextStep, validateFormOne)
    const { handleFormTwoChange, handleFormTwoSubmit, formTwoValues, formTwoErrors } = useFormTwo(nextStep,validateFormTwo)
    const { handleFormThreeChange, handleFormThreeSubmit, formThreeValues } = useFormThree(nextStep,validateFormThree)
    const { handleFormFourChange, handleFormFourSubmit, formFourValues } = useFormFour(nextStep,validateFormFour)


    switch(step){
        case 0:
            return(
                <FormZero nextStep={nextStep}/>
            )
        case 1:
            return(
                <FormOne
                    nextStep={nextStep}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                    errors={errors}
                />
            )
        case 2:
            return(
                <FormTwo
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFormTwoChange}
                    handleSubmit={handleFormTwoSubmit}
                    values={formTwoValues}
                    errors={formTwoErrors}
                />
            )
        case 3:
            return(
                <FormThree
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFormThreeChange}
                    handleSubmit={handleFormThreeSubmit}
                    values={formThreeValues}
                />
            )
        case 4:
            return(
                <FormFour
                    prevStep={prevStep}
                    handleChange={handleFormFourChange}
                    handleSubmit={handleFormFourSubmit}
                    values={formFourValues}
                />
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