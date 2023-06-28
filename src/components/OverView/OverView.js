import React, { useState } from 'react';
import './OverView.css'
import DashboarFirst from './ExtraDesign/DashboardFirstSec/DashboarFirst';

const OverView = () => {
    const [img, setImg] = useState('')


    const convertImage = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImg(reader.result);
        }

        reader.onerror = (error) => {
            console.log("error", error);
        }
        console.log(e);
    }

    return (
        <div>
            <section className='deshboardFirst'>
                <DashboarFirst></DashboarFirst>
            </section>
            <section>
                <p>upload image here</p>

                <input
                    accept='image/'
                    type="file"
                    onChange={convertImage}
                />


                <img src={img} alt="" />
            </section>
        </div>
    );
};

export default OverView;