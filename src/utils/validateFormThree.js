const validateFormThree = (values) => {
    let errors = {}

    if(values.vaccinated === ''){
        errors.vaccinated = 'chose one'
    }
    if(values.stage === ''){
        errors.stage = 'chose one'
    }
    if(values.waiting === ''){
        errors.waiting = 'chose one'
    }

    return errors
}

export default validateFormThree