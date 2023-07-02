import React, { useState } from 'react';
import './AddFees.css'




const AddFees = () => {
    const [getQuInp, setGetQuInp] = useState()
    const [dataShow, setDataShow] = useState(false)


    const queryInput = (e) => {
        setGetQuInp(e.target.value);
    }

    const findQueryData = () => {
        if (getQuInp) {
            setDataShow(true)
        }
        else {
            setDataShow(false)
        }
    }

    const [procc, setProcc] = useState(false)
    const proccedBtn = () => {
        setProcc(true)
    }

    return (
        <div>
            <section className='pay-student-id-query-contain'>
                <div className='pay-student-id-query'>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>Insert Student ID:</p>
                    <input type="number" onChange={queryInput} style={{ fontFamily: 'cursive' }} />
                </div>
                <button onClick={findQueryData}>Click to Find</button>
            </section>
            <section className='query-output-data'>
                <div>
                    {
                        dataShow ?
                            <div>
                                <div >
                                    <p style={{ fontWeight: 'bold', margin: '0', fontFamily: 'cursive' }}>Query Details By ID</p>
                                    <div className='get-stu-details-by-query'>
                                        <p>Student Id: 0920754666</p>
                                        <p>Name: Md Hasibul Hasan</p>
                                        <p>Father's Name: Joynal Abedin</p>
                                        <p>Class: Nine</p>
                                        <p>Group: Science</p>
                                        <p>Fees: 2000</p>
                                    </div>


                                </div>

                            </div>

                            : ""
                    }

                </div>
                <div>
                    {
                        dataShow ?
                            <div className='query-out-payment-info'>
                                <p style={{ fontWeight: 'bold' }}>Payment Summary</p><hr /><hr />
                                <div>
                                    <p>Name: <strong>Hasibul Hasan</strong> </p>
                                    <p>Month Name: <strong>July</strong></p>
                                    <p>Amount: <strong>2000</strong></p>
                                </div>
                                <div onClick={proccedBtn} style={{ cursor: 'pointer' }} className='proccedBtn'>



                                    {
                                        procc ? <p>Done</p>
                                            :
                                            <p>Procced</p>
                                    }

                                </div>
                            </div>
                            :
                            ''
                    }
                </div>
            </section>
        </div>
    );
};

export default AddFees;