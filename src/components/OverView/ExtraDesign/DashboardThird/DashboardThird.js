import React from 'react';
import './DashboardThird.css'
import { Link } from 'react-router-dom';
const DashboardThird = () => {
    return (
        <div>
            <p className='topHeader'>select the method </p>
            <section className='methodcont'>
                <div className='getp'><Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/addfees'><p>Get Payment</p></Link> </div>
                <div className='getp'><Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/debitcredit'><p>Debit/Credit</p></Link> </div>
                <div><p></p></div>
            </section>
        </div>
    );
};

export default DashboardThird;