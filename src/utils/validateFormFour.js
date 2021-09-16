const validateFormFour = (values) => {
    let errors = {}

    if(values.informalMeetings === ''){
        errors.informalMeetings = 'choose one'
    }
    if(values.workFromOffice === ''){
        errors.workFromOffice = 'choose one'
    }

    return errors
}

export default validateFormFour