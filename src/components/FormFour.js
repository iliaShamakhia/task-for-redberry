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
                    <p id='step-count'>4/4</p>
                    <div id='top-line'></div>
                </div>
                <div className='mid'>
                    <div className='left'>
                        
                        <div id='final-btn-container'>
                            <button id='final-btn' onClick={props.nextStep}>დასრულება</button>
                        </div>
                    </div>
                    <div className='right'>
                        <img className='side-img' src={side_img_4} alt='side-img'/>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='nav-btn-container'>
                        <button className='navigation-btn' onClick={props.prevStep}><img id='prev' src={vector_prev} alt='prev'/></button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default FormFour