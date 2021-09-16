import { useState, useEffect } from 'react'

const useFormThree = (func, validate) => {

    const [formThreeValues,setFormThreeValues] = useState({
        vaccinated:'',
        stage:'',
        waiting:''
    })

    const [formThreeErrors,setFormThreeErrors] =useState({})

    const handleFormThreeChange = e => {
        const { name, value } = e.target
        if(name==='vaccinated'){
            setFormThreeValues({
                ...formThreeValues,
                [name]: value,
                stage:'',
                waiting:''
            })
        }else{
            setFormThreeValues({
            ...formThreeValues,
            [name]: value
            })
        }
    }

    const handleFormThreeSubmit = e => {
        e.preventDefault()
        setFormThreeErrors(validate(formThreeValues))
    }

    useEffect(
        () => {
            if(formThreeErrors.vaccinated !== ''){
                if(formThreeValues.vaccinated === 'yes' && formThreeValues.stage !== ''){
                    func()
                }else if(formThreeValues.vaccinated === 'no' && formThreeValues.waiting !== ''){
                    func()
                }
            }
        },
        [formThreeErrors]
    )

    return { handleFormThreeChange, handleFormThreeSubmit, formThreeValues, formThreeErrors }
}

export default useFormThree