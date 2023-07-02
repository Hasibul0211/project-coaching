import React, { useState } from 'react';
import './PastFees.css'



const PastFees = () => {
    const [month, setMonth] = useState('January')

    const selectMonth = (e) => {
        const value = e.target.value
        setMonth(value)
    }


    return (
        <section>
            <br />
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'cursive' }}>
                <select name="" id="monthSelect" onChange={selectMonth}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="Octobor">Octobor</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <p style={{ marginLeft: '5%' }}>Month:{month}</p>
            </div>

            <div className='feesHeader'>
                <div>
                    <p>Id No</p>
                </div>
                <div>
                    <p>Student Name</p>
                </div>
                <div>
                    <p>Mobile</p>
                </div>
                <div> <p>Status</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
            <div className='feesData'>
                <div>
                    <p>092075466</p>
                </div>
                <div>
                    <p>MD Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div> <p>Unpaid</p></div>
            </div>
        </section>
    );
};

export default PastFees;