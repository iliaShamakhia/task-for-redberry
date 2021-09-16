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

    const { handleChange, handleSubmit, values, errors } = props

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
                    <p className='step-count'>1/4</p>
                    <div className='top-line'></div>
                </div>
                <div className="mid">
                    <div className="left">
                        <form id='form-step1' onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label>სახელი*</label>
                                <input type="text" name='name' onChange={handleChange} value={values.name} placeholder="name" id="name" />
                                <small className='error-msg'>{errors.name}</small>
                            </div>
                            <div className="form-control">
                                <label>გვარი*</label>
                                <input type="text" name='lastName' onChange={handleChange} value={values.lastName} placeholder="last name" id="last-name" />
                                <small className='error-msg'>{errors.lastName}</small>
                            </div>
                            <div className="form-control">
                                <label>მეილი*</label>
                                <input type='text' name='email' onChange={handleChange} value={values.email} placeholder="email" id="email"/>
                                <small className='error-msg'>{errors.email}</small>
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
                    <button type='submit' form='form-step1' className='navigation-btn' ><img id='next-btn' src={vector_next} alt='next'/></button>
			    </div>
			</div>
        </div>
    )
}

export default FormOne