const validateFormThree = (values) => {
    let errors = {}

    if(values.vaccinated === ''){
        errors.vaccinated = 'choose one'
    }
    if(values.stage === ''){
        errors.stage = 'choose one'
    }
    if(values.waiting === ''){
        errors.waiting = 'choose one'
    }

    return errors
}

export default validateFormThree