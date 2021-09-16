import { useState, useEffect } from 'react'

const useFormTwo = (func, validate) => {

    const [formTwoValues,setFormTwoValues] = useState({
        hadCovid:'',
        tested:'',
        dateOfTest:'',
        antigenCount:'',
        dateInfected:'',
    })

    const [formTwoErrors,setFormTwoErrors] =useState({})

    const handleFormTwoChange = e => {
        const { name, value } = e.target
        if(name==='hadCovid'){
            setFormTwoValues({
                ...formTwoValues,
                [name]: value,
                tested:''
            })
        }else{
            setFormTwoValues({
            ...formTwoValues,
            [name]: value
            })
        }
    }

    const handleFormTwoSubmit = e => {
        e.preventDefault()
        setFormTwoErrors(validate(formTwoValues))
    }

    useEffect(
        () => {
            if(formTwoErrors.hadCovid !== ''){
                if(formTwoValues.hadCovid === 'no' || formTwoValues.hadCovid === 'infected'){
                    func()
                }
            }
            if(formTwoErrors.hadCovid !== '' && formTwoErrors.tested !== ''){
                if(formTwoValues.tested === 'yes'){
                    if(formTwoErrors.dateOfTest === '' && formTwoErrors.antigenCount === ''){
                        func()
                    }
                }else if(formTwoValues.tested === 'no'){
                    if(formTwoErrors.dateInfected === ''){
                        func()
                    }
                }
            }
        },
        [formTwoErrors]
    )

    return { handleFormTwoChange, handleFormTwoSubmit, formTwoValues, formTwoErrors }
}

export default useFormTwo