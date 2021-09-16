const validateFormTwo = (values) => {

    const isDate = (date) => {
        return /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})/.test(date)
    }
    
    let errors = {}
    
    if(values.hadCovid === ''){
        errors.hadCovid = 'choose one'
    }

    if(values.tested === ''){
        errors.tested = 'choose one'
    }

    if(values.dateOfTest === ''){
        errors.dateOfTest = 'თარიღის შეყვანა სავალდებულოა'
    }else if(!isDate(values.dateOfTest)){
        errors.dateOfTest = 'ფორმატი აუცილებლად უნდა იყოს Date'
    }else{
        errors.dateOfTest = ''
    }

    if(values.antigenCount === ''){
        errors.antigenCount = 'ანტისხეულების რაოდენობის შეყვანა სავალდებულოა'
    }else if(isNaN(values.antigenCount)){
        errors.antigenCount = 'შეიყვანეთ რიცხვითი მნიშნელობა'
    }else{
        errors.antigenCount = ''
    }

    if(values.dateInfected === ''){
        errors.dateInfected = 'თარიღის შეყვანა სავალდებულოა'
    }else if(!isDate(values.dateInfected)){
        errors.dateInfected = 'ფორმატი აუცილებლად უნდა იყოს Date'
    }else{
        errors.dateInfected = ''
    }

    return errors
}

export default validateFormTwo