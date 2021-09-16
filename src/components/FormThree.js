import React, {useState} from "react";
import vector_r from '../images/vector-r.png'
import vector_e from '../images/vector-e.png'
import vector_d from '../images/vector-d.png'
import vector_b from '../images/vector-b.png'
import vector_y from '../images/vector-y.png'
import vector_cp from '../images/vector-cp.png'
import vector_next from '../images/vector-next.png'
import vector_prev from '../images/vector-prev.png'
import side_img_3 from '../images/side-img-3.png'

const FormThree = (props) => {

    const { prevStep, handleChange, handleSubmit, values } = props

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
                    <p id='step-count'>3/4</p>
                    <div id='top-line'></div>
                </div>
                <div className='mid'>
                    <div className='left'>
                        <form id='form-step3' className='radio-page-form' onSubmit={handleSubmit}>
                            <div className='radio-form '>
                                <p className='question'>უკვე აცრილი ხარ?*</p>
                                <label className='radio-label'><input type='radio' name='vaccinated' checked={values.vaccinated==='yes'} value='yes' onChange={handleChange}/>  კი</label>
                                <label className='radio-label'><input type='radio' name='vaccinated' checked={values.vaccinated==='no'} value='no' onChange={handleChange}/>  არა</label>
                            </div>
                            {values.vaccinated === 'yes' &&
                                <div className='radio-form'>
                                    <p className='question'>აირჩიე რა ეტაპზე ხარ*</p>
                                    <label className='radio-label'><input type='radio' name='stage' checked={values.stage==='firstRegistered'} value='firstRegistered' onChange={handleChange}/>  პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                                    <label className='radio-label'><input type='radio' name='stage' checked={values.stage==='full'} value='full' onChange={handleChange}/>  სრულად აცრილი ვარ</label>
                                    <label className='radio-label'><input type='radio' name='stage' checked={values.stage==='firstNotRegistered'} value='firstNotRegistered' onChange={handleChange}/>  პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                                </div>
                            }
                            {values.stage === 'firstNotRegistered' &&
                                <div className='form-3-tip'>
                                    <p>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a></p>
                                </div>
                            }
                            {values.vaccinated === 'no' &&
                                <div className='radio-form'>
                                    <p className='question'>რას ელოდები?*</p>
                                    <label className='radio-label'><input type='radio' name='waiting' checked={values.waiting==='waitingDate'} value='waitingDate' onChange={handleChange}/>  დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
                                    <label className='radio-label'><input type='radio' name='waiting' checked={values.waiting==='notGoingTo'} value='notGoingTo' onChange={handleChange}/>  არ ვგეგმავ</label>
                                    <label className='radio-label'><input type='radio' name='waiting' checked={values.waiting==='hadCovidWaiting'} value='hadCovidWaiting' onChange={handleChange}/>  გადატანილი მაქვს და ვგეგმავ აცრას</label>
                                </div>
                            }
                            {values.waiting === 'notGoingTo' &&
                                <div className='form-3-tip'>
                                    <p>👉 <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a></p>
                                </div>
                            }
                            {values.waiting === 'hadCovidWaiting' &&
                                <div className='form-3-tip'>
                                    <p className='p-form3'>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
                                    <p className='p-form3'>👉 რეგისტრაციის ბმული <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a></p>
                                </div>
                            }
                        </form>  
                    </div>
                    <div className='right'>
                        <img className='side-img' src={side_img_3} alt='side-img'/>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='nav-btn-container'>
                        <button className='navigation-btn' onClick={prevStep}><img id='prev' src={vector_prev} alt='prev'/></button>
                        <button className='navigation-btn' type='submit' form='form-step3'><img id='next' src={vector_next} alt='next'/></button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default FormThree