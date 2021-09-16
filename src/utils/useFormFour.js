import { useState, useEffect } from 'react'

const useFormFour = (func, validate) => {

    const [formFourValues,setFormFourValues] = useState({
        informalMeetings:'',
        workFromOffice:'',
        upCloseMeetings:'',
        yourOpinion:''
    })

    const [formFourErrors,setFormFourErrors] =useState({})

    const handleFormFourChange = e => {
        const { name, value } = e.target
            setFormFourValues({
                ...formFourValues,
                [name]: value
            })
    }

    const handleFormFourSubmit = e => {
        e.preventDefault()
        setFormFourErrors(validate(formFourValues))
    }

    useEffect(
        () => {
            if(formFourValues.informalMeetings !== '' && formFourValues.workFromOffice !== ''){
                func()
            }
        },
        [formFourErrors]
    )

    return { handleFormFourChange, handleFormFourSubmit, formFourValues, formFourErrors }
}

export default useFormFour