import React from 'react';
import './Add Student.css'
import Swal from 'sweetalert2';

const AddStudent = () => {


    const addformSubmit = (e) => {
        Swal.fire({
            position: 'top-center',
            width: 300,
            fontSize: '20px',
            padding: '1em',
            color: '#716add',
            icon: 'success',
            backgroundColor: 'black',
            title: 'Successfully added',
            showConfirmButton: false,
            timer: 1500
        })
        e.preventDefault()
    }


    return (
        <div>
            <p className='formHeader'>Complete the form</p>
            <section>
                <form onSubmit={addformSubmit}>
                    <div className='addForm'>


                        <div className='formLeft'>
                            <div style={{ width: '100%' }} className='formLevelInputCont'>
                                <label htmlFor="" className='labelName'>Student Name</label>
                                <input type="text" style={{ width: '100%' }} className='labelInput' />
                            </div>
                            <div className='inputGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <label htmlFor="" className='labelName'>Father's Name</label>
                                    <input type="text" className='labelInput' />
                                </div>
                                <div>
                                    <label htmlFor="" className='labelName'>Father's Mobile no</label>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className='inputGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <label htmlFor="" className='labelName'>Mother's Name</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="" className='labelName'>Mother's Mobile no</label>
                                    <input type="number" />
                                </div>
                            </div>



                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <label htmlFor="" className='labelName'>Class</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="" className='labelName'>Class Roll</label>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <label htmlFor="" className='labelName'>Date of Birth</label>
                                    <input type="date" />
                                </div>
                                <div>
                                    <label htmlFor="" className='labelName'>Group</label>
                                    <input type="Text" />
                                </div>
                            </div>

                            <div style={{ width: '100%' }}>
                                <label htmlFor="" className='labelName'>Institution Name</label>
                                <input className='labelInput' type="text" style={{ width: '100%' }} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <label htmlFor="" className='labelName'>Address</label>
                                <input className='labelInput' type="text" style={{ width: '92%' }} />
                            </div>


                        </div>
                        <div className='formRight'>


                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <label htmlFor="" className='labelName'>Reference </label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="" className='labelName'>Join Date</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <label htmlFor="" className='labelName'>Id </label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="" className='labelName'>Fees</label>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className='inputGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <label htmlFor="" className='labelName'>Guardian's Name</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="" className='labelName'>Guardian's Mobile no</label>
                                    <input type="number" />
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <label htmlFor="" className='labelName'>Subjects</label>
                                <input className='labelInput' type="text" style={{ width: '96%' }} />
                            </div>

                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                        <button type='submit' style={{ padding: '8px', fontSize: '15px', backgroundColor: 'tomato', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </div>


                </form>
            </section>
        </div>
    );
};

export default AddStudent;