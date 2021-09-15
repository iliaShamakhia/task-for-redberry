import { useState, useEffect } from 'react'

const useForm = (func, validate) => {

    const [values,setValues] = useState({
        vaccinated:'',
        tested:'',
        dateOfTest:'',
        antigenCount:'',
        dateInfected:'',
    })

    const [errors,setErrors] =useState({})

    const handleChange = e => {
        const { name, value } = e.target
        if(name==='vaccinated'){
            setValues({
                ...values,
                [name]: value,
                tested:''
            })
        }else{
            setValues({
            ...values,
            [name]: value
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))
    }

    useEffect(
        () => {
            if(errors.vaccinated !== ''){
                if(values.vaccinated === 'no' || values.vaccinated === 'infected'){
                    func()
                }
            }
            if(errors.vaccinated !== '' && errors.tested !== ''){
                if(values.tested === 'yes'){
                    if(errors.dateOfTest === '' && errors.antigenCount === ''){
                        func()
                    }
                }else if(values.tested === 'no'){
                    if(errors.dateInfected === ''){
                        func()
                    }
                }
            }
        },
        [errors]
    )

    return { handleChange, handleSubmit, values, errors }
}

export default useForm