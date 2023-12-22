import React, { useState } from 'react';
import './OverView.css'
import DashboarFirst from './ExtraDesign/DashboardFirstSec/DashboarFirst';
import DashboardSecond from './ExtraDesign/DashboardFirstSec/DashboradSecond/DashboardSecond';
import DashboardThird from './ExtraDesign/DashboardThird/DashboardThird';

const OverView = () => {




    return (
        <div>
            <section className='deshboardFirst'>
                <DashboarFirst></DashboarFirst>
            </section>
            <section className='deshboardSecond'>
                <DashboardSecond></DashboardSecond>
            </section>
            <section className='deshboardThird'>
                <DashboardThird></DashboardThird>
            </section>
        </div>
    );
};

export default OverView;