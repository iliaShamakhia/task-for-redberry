import React from "react";
import vector_r from '../images/vector-r.png'
import vector_e from '../images/vector-e.png'
import vector_d from '../images/vector-d.png'
import vector_b from '../images/vector-b.png'
import vector_y from '../images/vector-y.png'
import vector_cp from '../images/vector-cp.png'
import vector_next from '../images/vector-next.png'
import side_img_1 from '../images/side-img-1.png'

const FormOne = (props) => {
    return(
        <div className='container'>
            <div className='inside'>
                <div className='top'>
                    <div className='redberry'>
                        <img id='r1' src={vector_r} alt='r1'/>
                        <img id='e1' src={vector_e} alt='e1'/>
                        <img id='d' src={vector_d} alt='d'/>
                        <img id='b' src={vector_b} alt='b'/>
                        <img id='e2' src={vector_e} alt='e2'/>
                        <img id='r2' src={vector_r} alt='r2'/>
                        <img id='r3' src={vector_r} alt='r3'/>
                        <img id='y' src={vector_y} alt='y'/>
                        <img id='cp' src={vector_cp} alt='cp'/>
                    </div>
                    <p id='step-count'>1/4</p>
                    <div id='top-line'></div>
                </div>
                <div className="mid">
                    <div className="left">
                        <form id='form-step1'>
                            <div className="form-control">
                                <label for="username">სახელი*</label>
                                <input type="text" placeholder="name" id="name" />
                                <small className='error-msg'>{props.nameError}რაგაც რაგაც რაგაც</small>
                            </div>
                            <div className="form-control">
                                <label for="username">გვარი*</label>
                                <input type="text" placeholder="last name" id="last-name" />
                                <small className='error-msg'>{props.lastNameError} რაგაც რაგაც რაგაც</small>
                            </div>
                            <div className="form-control">
                                <label for="username">მეილი*</label>
                                <input type="email" placeholder="email" id="email"/>
                                <small className='error-msg'>{props.emailError}რაგაც რაგაც რაგაც</small>
                            </div>
                        </form>
                        <div id='hint-line'></div>
                        <p id='hint'>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
                    </div>
                    <div className="right">
                        <img className='side-img' src={side_img_1} alt='side-img'/>
                    </div>
                </div>
                <div className='bottom'>
                    <button className='navigation-btn' onClick={props.nextStep}><img id='next-btn' src={vector_next} alt='next'/></button>
			    </div>
			</div>
        </div>
    )
}

export default FormOne