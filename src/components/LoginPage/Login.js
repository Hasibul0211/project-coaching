import React from 'react';
import './Login.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom';

const Login = () => {

    const move = useNavigate()

    const gotodahsbordd = () => {
        move('dashboard/overview')
    }


    return (
        <div>
            <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '45px', margin: '10px 0 0 0' }}>Borno Academic Care</h1>
            <h3 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '35px', margin: '0' }}><q>Coaching Management Tools</q> </h3>
            <p style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                oppppssss!!!!!!
                Sorry.
                Login page not enable.Login method under processing
            </p>
            <p style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                you can redirect now by clicking
            </p>
            <div style={{ width: '200px', margin: '5px auto' }}>
                <button style={{ width: '100%', padding: '10px', fontFamily: 'cursive', color: 'white', backgroundColor: 'black', border: '0', borderRadius: '10px' }} onClick={gotodahsbordd} >Redirect</button>
            </div>


        </div>
    );
};

export default Login;