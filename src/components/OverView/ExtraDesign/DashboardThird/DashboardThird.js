import React from 'react';
import './DashboardThird.css'
import { Link } from 'react-router-dom';
const DashboardThird = () => {
    return (
        <div>
            <p className='topHeader'>select the method </p>
            <section>
                <div className='getp'><Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/addfees'><p>Get Payment</p></Link> </div>
                <div><p></p></div>
            </section>
        </div>
    );
};

export default DashboardThird;