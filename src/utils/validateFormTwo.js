const validate = (values) => {

    const isDate = (date) => {
        return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(date)
    }

    let errors = {}
    
    if(values.vaccinated === ''){
        errors.vaccinated = 'chose one'
    }

    if(values.tested === ''){
        errors.tested = 'chose one'
    }

    if(values.dateOfTest === ''){
        errors.dateOfTest = 'თარიღის შეყვანა სავალდებულოა'
    }else if(isDate(values.dateOfTest)){
        errors.dateOfTest = 'ფორმატი აუცილებლად უნდა იყოს Date'
    }else{
        errors.dateOfTest = ''
    }

    if(values.antigenCount === ''){
        errors.antigenCount = 'ანტისხეულების რაოდენობის შეყვანა სავალდებულოა'
    }else if(isNaN(values.antigenCount)){
        errors.antigenCount = 'მნიშვნელობა აუცილებლად უნდა იყოს Number: შეიყვანეთ რიცხვითი მნიშნელობა'
    }else{
        errors.antigenCount = ''
    }

    if(values.dateInfected === ''){
        errors.dateInfected = 'required: თარიღის შეყვანა სავალდებულოა'
    }else if(isDate(values.dateInfected)){
        errors.dateInfected = 'ფორმატი აუცილებლად უნდა იყოს Date'
    }else{
        errors.dateInfected = ''
    }

    return errors
}

export default validate