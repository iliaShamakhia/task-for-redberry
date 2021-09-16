import React, { useState, useEffect } from "react";
import FormZero from "./FormZero";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import FormFive from "./FormFive";
import validate from "../utils/validateFormOne"
import validateFormTwo from "../utils/validateFormTwo";
import useFormTwo from '../utils/useFormTwo'
import validateFormThree from "../utils/validateFormThree";
import useFormThree from "../utils/useFormThree";

const MainForm = () => {

    const [step, setStep] = useState(0)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const { handleFormTwoChange, handleFormTwoSubmit, formTwoValues, formTwoErrors } = useFormTwo(nextStep,validateFormTwo)
    const { handleFormThreeChange, handleFormThreeSubmit, formThreeValues, formThreeErrors } = useFormThree(nextStep,validateFormThree)

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
          ...values,
          [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))
    }

    useEffect(
        () => {
          if(errors.name===''&&errors.lastName===''&&errors.email===''){
            nextStep()
          }
        },
        [errors]
    )
    


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
                    nextStep={nextStep}
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