import React, { useState } from 'react';
import './AddAuthor.css'


const AddAuthor = () => {

    const [img, setImg] = useState('')
    const [autName, setAuthName] = useState('')
    const [autQual, setAuthQual] = useState('')
    const [autCont, setAuthCont] = useState('')
    const [autMail, setAuthMail] = useState('')
    const [autPos, setAuthPos] = useState('')

    const uploadImage = (e) => {
        const read = new FileReader();
        read.readAsDataURL(e.target.files[0]);
        read.onload = () => {
            setImg(read.result)
        }
        read.onerror = (error) => {
            console.log(error);
        }
    }

    const getAuthText = (e) => {
        setAuthName(e.target.value)
    }
    const getAuthQual = (e) => {
        setAuthQual(e.target.value)
    }
    const getAuthCont = (e) => {
        setAuthCont(e.target.value)
    }
    const getAuthMail = (e) => {
        setAuthMail(e.target.value)
    }
    const getAuthPos = (e) => {
        setAuthPos(e.target.value)
    }




    return (
        <div>
            <div>
                <p style={{ textAlign: 'center', fontSize: '20px', fontFamily: 'cursive', fontWeight: 'bold' }}>See Preview Below</p>
            </div>
            <section className='author-detail'>
                <div style={{ width: '100%', height: '170px' }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', borderRadius: '5px', marginLeft: '5px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Name: {autName}</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Qualification: {autQual}</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Contact: {autCont}</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>E-Mail: {autMail}</p>
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Position</p>
                    <p style={{ fontSize: '20px', fontFamily: 'cursive', fontWeight: 'bold' }}>{autPos}</p>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button style={{ width: '80px', border: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '5px', color: 'white', cursor: 'pointer', height: '40px' }}>Submit</button>

                </div>
            </section>
            <section style={{ width: '50%', display: 'flex', flexDirection: 'column', margin: '20;px auto' }}>
                <div>
                    <label htmlFor="">Add Image: </label>
                    <input type="file" accept='image/' onChange={uploadImage} />
                </div>

                <div>
                    <label htmlFor="">Your Name:</label>
                    <input type="text" onChange={getAuthText} style={{ marginLeft: '10%', height: '30px' }} placeholder='Your Name Here...' />
                </div>
                <div>
                    <label htmlFor="">Qualification:</label>
                    <input type="text" onChange={getAuthQual} style={{ marginLeft: '7.5%', height: '30px', marginTop: '3px' }} placeholder='Your Qualification Here...' />
                </div>
                <div>
                    <label htmlFor="">Contact:</label>
                    <input type="number" onChange={getAuthCont} style={{ marginLeft: '15%', height: '30px', marginTop: '3px' }} placeholder='Your Number Here...' />
                </div>
                <div>
                    <label htmlFor="">E-mail:</label>
                    <input type="email" onChange={getAuthMail} style={{ marginLeft: '17.5%', height: '30px', marginTop: '3px' }} placeholder='Your Email Here...' />
                </div>
                <div>
                    <label htmlFor="">Position:</label>
                    <input type="text" onChange={getAuthPos} style={{ marginLeft: '14.5%', height: '30px', marginTop: '3px' }} placeholder='Your Position Here...' />
                </div>
            </section>
        </div>
    );
};

export default AddAuthor;