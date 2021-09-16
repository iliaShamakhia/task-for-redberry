
const validate = (values) => {

    const isAlpha = (name) => {
        return /^[A-Za-zა-ჰ]+$/.test(name)
    }

    const isRedberryEmail = (email) => {
        return /^[a-z0-9](\.?[a-z0-9]){3,}@redberry\.ge$/.test(email)
    }
    
    const isEmail = (email) =>{
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }
    
    let errors = {}

    if(values.name === '') {
        errors.name='სახელის ველი სავალდებულოა'
    }else if(!isAlpha(values.name)){
        errors.name='სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)'
    }else if (values.name.length < 3) {
        errors.name='სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან'
    } else if(values.name.length > 255){
        errors.name='სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
    }else{
        errors.name=''
    }

    if(values.lastName === '') {
        errors.lastName='გვარის ველი სავალდებულოა'
    }else if(!isAlpha(values.lastName)){
        errors.lastName='გვარის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)'
    }else if (values.lastName.length < 3) {
        errors.lastName='გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან'
    } else if(values.lastName.length > 255){
        errors.lastName='გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
    }else{
        errors.lastName=''
    }

    if(values.email === '') {
        errors.email='მეილის ველი სავალდებულოა'
    } else if (!isEmail(values.email)) {
        errors.email='თქვენს მიერ შეყვანილი მეილი არასწორია'
    } else if(!isRedberryEmail(values.email)){
        errors.email='გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)'
    }else{
        errors.email=''
    }

    return errors
}

export default validate