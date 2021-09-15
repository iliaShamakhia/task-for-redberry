import React, { useState, useEffect } from "react";
import FormZero from "./FormZero";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import FormFive from "./FormFive";
import validate from "../utils/validateFormOne"

const MainForm = () => {
    const [step, setStep] = useState(0)

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

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
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
                />
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