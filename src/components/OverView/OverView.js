import React, { useState } from 'react';
import './OverView.css'
import DashboarFirst from './ExtraDesign/DashboardFirstSec/DashboarFirst';
import DashboardSecond from './ExtraDesign/DashboardFirstSec/DashboradSecond/DashboardSecond';

const OverView = () => {




    return (
        <div>
            <section className='deshboardFirst'>
                <DashboarFirst></DashboarFirst>
            </section>
            <section className='deshboardFirst'>
                <DashboardSecond></DashboardSecond>
            </section>
        </div>
    );
};

export default OverView;