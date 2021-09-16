import React from "react";
import vector_r from '../images/vector-r.png'
import vector_e from '../images/vector-e.png'
import vector_d from '../images/vector-d.png'
import vector_b from '../images/vector-b.png'
import vector_y from '../images/vector-y.png'
import vector_cp from '../images/vector-cp.png'
import vector_prev from '../images/vector-prev.png'
import side_img_4 from '../images/side-img-4.png'

const FormFour = (props) => {
    const {handleChange, handleSubmit, values, prevStep } = props

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
                    <p className='step-count'>4/4</p>
                    <div className='top-line'></div>
                </div>
                <div className='mid'>
                    <div className='left left-four'>
                        <p className='form4-p'>რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. 
                            გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, 
                            ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, 
                            ბევრისთვის კი — ჩვენთან გადმოსვლის.
                        </p>
                        <p className='form4-p'>პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.</p>
                        <form id='form-step4' className='radio-page-form' onSubmit={handleSubmit}>
                            <div className='radio-form '>
                                <p className='question'>რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</p>
                                <label className='radio-label'><input type='radio' name='informalMeetings' value='twiceWeek' checked={values.informalMeetings==='twiceWeek'} onChange={handleChange}/>  კვირაში ორჯერ</label>
                                <label className='radio-label'><input type='radio' name='informalMeetings' value='onceWeek' checked={values.informalMeetings==='onceWeek'} onChange={handleChange}/>  კვირაში ერთხელ</label>
                                <label className='radio-label'><input type='radio' name='informalMeetings' value='onceTwoWeeks' checked={values.informalMeetings==='onceTwoWeeks'} onChange={handleChange}/>  ორ კვირაში ერთხელ</label>
                                <label className='radio-label'><input type='radio' name='informalMeetings' value='onceMonth' checked={values.informalMeetings==='onceMonth'} onChange={handleChange}/>  თვეში ერთხელ</label>
                            </div>
                            <div className='radio-form '>
                                <p className='question'>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>
                                <label className='radio-label'><input type='radio' name='workFromOffice' value='0' checked={values.workFromOffice==='0'} onChange={handleChange}/>  0</label>
                                <label className='radio-label'><input type='radio' name='workFromOffice' value='1' checked={values.workFromOffice==='1'} onChange={handleChange}/>  1</label>
                                <label className='radio-label'><input type='radio' name='workFromOffice' value='2' checked={values.workFromOffice==='2'} onChange={handleChange}/>  2</label>
                                <label className='radio-label'><input type='radio' name='workFromOffice' value='3' checked={values.workFromOffice==='3'} onChange={handleChange}/>  3</label>
                                <label className='radio-label'><input type='radio' name='workFromOffice' value='4' checked={values.workFromOffice==='4'} onChange={handleChange}/>  4</label>
                                <label className='radio-label'><input type='radio' name='workFromOffice' value='5' checked={values.workFromOffice==='5'} onChange={handleChange}/>  5</label>
                            </div>
                            <div className='radio-form '>
                                <p className='question'>რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
                                <textarea name='upCloseMeetings' value={values.upCloseMeetings} onChange={handleChange} rows="8" cols="50"/>
                            </div>
                            <div className='radio-form '>
                                <p className='question'>რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</p>
                                <textarea name='yourOpinion' value={values.yourOpinion} onChange={handleChange} rows="8" cols="50"/>
                            </div>
                        </form>
                        <div id='final-btn-container'>
                            <button id='final-btn' type='submit' form='form-step4'>დასრულება</button>
                        </div>
                    </div>
                    <div className='right'>
                        <img className='side-img' src={side_img_4} alt='side-img'/>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='nav-btn-container'>
                        <button className='navigation-btn' onClick={prevStep}><img id='prev' src={vector_prev} alt='prev'/></button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default FormFour