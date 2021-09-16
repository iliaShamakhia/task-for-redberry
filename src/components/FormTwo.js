import React from "react";
import vector_r from '../images/vector-r.png'
import vector_e from '../images/vector-e.png'
import vector_d from '../images/vector-d.png'
import vector_b from '../images/vector-b.png'
import vector_y from '../images/vector-y.png'
import vector_cp from '../images/vector-cp.png'
import vector_next from '../images/vector-next.png'
import vector_prev from '../images/vector-prev.png'
import side_img_2 from '../images/side-img-2.png'
//import validate from '../utils/validateFormTwo'

const FormTwo = (props) => {
    const {prevStep, handleChange, handleSubmit, values, errors } = props
    
    return(
        <div className='container'>
            <div className='inside'>
                <div className='top'>
                    <div className='redberry-container'>
                        <img className='redberry' src={vector_r} alt='r'/>
                        <img className='redberry' src={vector_e} alt='e'/>
                        <img className='redberry' src={vector_d} alt='d'/>
                        <img className='redberry' src={vector_b} alt='b'/>
                        <img className='redberry' src={vector_e} alt='e'/>
                        <img className='redberry' src={vector_r} alt='r'/>
                        <img className='redberry' src={vector_r} alt='r'/>
                        <img className='redberry' src={vector_y} alt='y'/>
                        <img className='cp' src={vector_cp} alt='cp'/>
                    </div>
                    <p id='step-count'>2/4</p>
                    <div id='top-line'></div>
                </div>
                <div className='mid'>
                    <div className='left'>
                        <form id='form-step2' className='radio-page-form' onSubmit={handleSubmit}>
                            <div className='radio-form '>
                                <p className='question'>გაქვს გადატანილი Covid-19?*</p>
                                <label className='radio-label'><input type='radio' name='hadCovid' checked={values.hadCovid==='yes'} value='yes' onChange={handleChange}/>  კი</label>
                                <label className='radio-label'><input type='radio' name='hadCovid' checked={values.hadCovid==='no'} value='no' onChange={handleChange}/>  არა</label>
                                <label className='radio-label'><input type='radio' name='hadCovid' checked={values.hadCovid==='infected'} value='infected' onChange={handleChange}/>  ახლა მაქვს</label>
                            </div>
                            {values.hadCovid==='yes'&&
                                <div className='radio-form tested-for-antigens-form'>
                                    <p className='question'>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
                                    <label className='radio-label'><input type='radio' name='tested' checked={values.tested==='yes'} value='yes' onChange={handleChange}/>  კი</label>
                                    <label className='radio-label'><input type='radio' name='tested' checked={values.tested==='no'} value='no' onChange={handleChange}/>  არა</label>
                                </div>
                            }
                            {values.tested==='yes' &&
                                <div className='form-control radio-form date-antigen-count'>
                                    <p className='question'>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>
                                    <input className='form-2-input' type='text' name='dateOfTest' value={values.dateOfTest} onChange={handleChange} placeholder='რიცხვი'/>
                                    <small className='error-msg-form2'>{errors.dateOfTest}</small>
                                    <input className='form-2-input' type='text' name='antigenCount' value={values.antigenCount} onChange={handleChange} placeholder='ანტისხეულების რაოდენობა'/>
                                    <small className='error-msg-form2'>{errors.antigenCount}</small>
                                </div>
                            }
                            {values.tested==='no' &&
                                <div className='form-control radio-form infection-date'>
                                    <p className='question'>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
                                    <input className='form-2-input' type='text' name='dateInfected' value={values.dateInfected} onChange={handleChange} placeholder='დდ/თთ/წწ'/>
                                    <small className='error-msg-form2'>{errors.dateInfected}</small>
                                </div>
                            }
                        </form>
                    </div>
                    <div className='right'>
                        <img className='side-img' src={side_img_2} alt='side-img'/>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='nav-btn-container'>
                        <button className='navigation-btn' onClick={prevStep}><img id='prev' src={vector_prev} alt='prev'/></button>
                        <button className='navigation-btn' type='submit' form='form-step2'><img id='next' src={vector_next} alt='next'/></button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}


export default FormTwo