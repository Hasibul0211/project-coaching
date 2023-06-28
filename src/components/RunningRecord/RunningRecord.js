import React from 'react';
import './RunningRecord.css'



const RunningEarning = () => {
    return (
        <div>
            <section className='profit-calculate-sec'>
                <div className='profit-calculate-sec-part'>
                    <p>Total Earnings</p>
                    <p>40000</p>
                </div>
                <div className='profit-calculate-sec-part'>
                    <p>Total Expeness</p>
                    <p>20000</p>
                </div>
                <div className='profit-calculate-sec-part'>
                    <p>Profit</p>
                    <p>20000</p>
                </div>
            </section>
            <hr />
            <section>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Teacher's Payment</p>
                    <button style={{ height: '30px', marginTop: '2%' }}>Make Payment</button>
                </div>
                <div className='earning-teacher-payment'>


                    <div className='earning-teacher-payment-part'>
                        <p>Raj Sir</p>
                        <p>Amount: 2200</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Sohel Sir</p>
                        <p>Amount: 2000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Shanto Sir</p>
                        <p>Amount: 2000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Sakib Sir</p>
                        <p>Amount: 4000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Masum Sir</p>
                        <p>Amount: 4000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Pranto Sir</p>
                        <p>Amount: 2800</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Smrity Madam</p>
                        <p>Amount: 2000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Eva Madam</p>
                        <p>Amount: 1500</p>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Founding Member Profit</p>
                    <button style={{ height: '30px', marginTop: '2%' }}>Withdrawal</button>
                </div>

                <div className='earning-founding-person'>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Hasibul Hasan</p>
                        <p style={{ margin: '0' }}>Amount: 5000</p>
                        <p style={{ margin: '0' }}>Withdraw: 00</p>
                        <p style={{ margin: '0' }}>Return: 00</p>
                        <p style={{ margin: '0' }}>Balance: 00</p>

                        <hr />

                        <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>Total Balance: 00</p>



                    </div>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Nahid Uddin</p>
                        <p style={{ margin: '0' }}>Amount: 5000</p>
                        <p style={{ margin: '0' }}>Withdraw: 00</p>
                        <p style={{ margin: '0' }}>Return: 00</p>
                        <p style={{ margin: '0' }}>Balance: 00</p>

                        <hr />

                        <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>Total Balance: 00</p>
                    </div>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Mehedi Hasan</p>
                        <p style={{ margin: '0' }}>Amount: 5000</p>
                        <p style={{ margin: '0' }}>Withdraw: 00</p>
                        <p style={{ margin: '0' }}>Return: 00</p>
                        <p style={{ margin: '0' }}>Balance: 00</p>
                        <hr />

                        <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>Total: 00</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default RunningEarning;