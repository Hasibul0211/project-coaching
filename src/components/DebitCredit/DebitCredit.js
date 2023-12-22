import React, { useRef, useState } from 'react';
import './DebitCredit.css'




const DebitCredit = () => {
    const [method, getMethod] = useState('')
    const [detailsc, getDetailsc] = useState('')
    const [amtv, getAmtv] = useState('')
    const [pdatev, getPdatev] = useState('')


    const getmethod = (e) => {
        getMethod(e.target.value);
    }
    const getdetails = (e) => {
        getDetailsc(e.target.value);
    }
    const getamt = (e) => {
        getAmtv(e.target.value);
    }
    const getpdate = (e) => {
        getPdatev(e.target.value);
    }




    const debitcreditbtn = () => {
        const dcoutput = {
            'method': method,
            'details': detailsc,
            'amout': amtv,
            'date': pdatev
        }
        console.log(dcoutput);
    }

    return (
        <div>
            <section style={{ display: 'grid', gridTemplateColumns: '20% 80%', gridGap: '10px' }}>
                <div>

                    <div>
                        <p style={{ margin: '15% 0 0 0 ' }}>Per Month Calculation </p><hr />
                        <div>
                            <label htmlFor="">Method: </label><br />
                            <select name="method" id="" style={{ width: '100%', height: '40px' }} onChange={getmethod}>
                                <option value="Select First" selected>Select First</option>
                                <option value="Earn">Earn</option>
                                <option value="Cost">Cost</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Details</label><br />
                            <input onChange={getdetails} type="text" placeholder='Enter Details' style={{ width: '100%', height: '40px' }} />
                        </div>
                        <div>
                            <label htmlFor="">Amount</label><br />
                            <input onChange={getamt} type="text" placeholder='Enter Amount' style={{ width: '100%', height: '40px' }} />
                        </div>
                        <div>
                            <label htmlFor="">Choose Date</label><br />
                            <input onChange={getpdate} type="date" name="" id="" style={{ width: '100%', height: '40px' }} pattern="\d{4}-\d{2}-\d{2}" />
                        </div>
                        <div>
                            <button onClick={debitcreditbtn} style={{ width: '100%', height: '40px', marginTop: '4%', backgroundColor: '#002B5B', color: 'white', fontSize: '20px', border: 'none', borderRadius: '5px' }}>Add</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{ textAlign: 'center', marginTop: '3%', fontWeight: 'bold' }}>Data Sheet</p>

                    <div className='data-sheet-head'>
                        <div>
                            <p>Date</p>
                        </div>
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Amount</p>
                        </div>
                        <div>
                            <p>Earn</p>
                        </div>
                        <div>
                            <p>Cost</p>
                        </div>
                        <div>
                            <p>Balance</p>
                        </div>
                    </div>




                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                    <div className='data-sheet-data'>
                        <div>
                            <p>12.05.23</p>
                        </div>
                        <div>
                            <p>House Rent</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>00</p>
                        </div>
                        <div>
                            <p>10000</p>
                        </div>
                        <div>
                            <p>-10000</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DebitCredit;