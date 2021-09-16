import { useState, useEffect } from 'react'

const useFormOne = (func, validate) => {
  
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
        func()
      }
    },
    [errors]
  )

  return { handleChange, handleSubmit, values, errors }
}

export default useFormOne