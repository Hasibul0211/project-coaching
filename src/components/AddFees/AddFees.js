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
                    <p>Insert Student ID:</p>
                    <input type="number" onChange={queryInput} />
                </div>
                <button onClick={findQueryData}>Click to Find</button>
            </section>
            <section className='query-output-data'>
                <div>
                    {
                        dataShow ?
                            <div>
                                <div >
                                    <p style={{ fontWeight: 'bold', margin: '0' }}>Query Details By ID</p>
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
                                <p>Payment Summary</p><hr /><hr />
                                <div>
                                    <p>Month Name: July</p>
                                    <p>Amount: 2000</p>
                                </div>
                                <div onClick={proccedBtn} style={{ cursor: 'pointer' }} className='proccedBtn'>



                                    {
                                        procc ? <p style={{ backgroundColor: "rgb(71, 114, 255)", padding: '8px', fontWeight: 'bold' }}>Done</p>
                                            :
                                            <p style={{ backgroundColor: "rgb(71, 114, 255)", padding: '8px', fontWeight: 'bold' }}>Procced</p>
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