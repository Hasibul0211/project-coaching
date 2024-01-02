import React, { useState } from 'react';
import Swal from 'sweetalert2';


const AddTeacher = () => {

    const [img, setImg] = useState('')
    const [tName, setTName] = useState('')
    const [tQual, setTQual] = useState('')
    const [tNumb, setTNumb] = useState('')
    const [tPaym, setTPaym] = useState('')
    const [tAddre, setTAddre] = useState('')


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
    const teacherName = (e) => {
        setTName(e.target.value);
    }
    const teacherQualification = (e) => {
        setTQual(e.target.value)
    }
    const teacherNumber = (e) => {
        setTNumb(e.target.value)
    }
    const teacherPayment = (e) => {
        setTPaym(e.target.value)
    }
    const teacherAddress = (e) => {
        setTAddre(e.target.value)
    }

    const takeclass = (e) => {
        console.log(e.target.name);
    }
    const uploadTeacher = () => {
        const teacherInfo = {
            'image': img,
            'teacherName': tName,
            'qualification': tQual,
            'number': tNumb,
            'perClassPayment': tPaym,
            'address': tAddre
        }
        fetch('http://localhost:5000/addTeacher', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(teacherInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        width: 300,
                        fontSize: '20px',
                        padding: '1em',
                        color: '#716add',
                        icon: 'success',
                        backgroundColor: 'black',
                        title: 'Successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    alert('something wrong')
                }
            })

        console.log(teacherInfo);
    }




    return (
        <div>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>List Your Teacher </p>
            <section style={{ display: 'grid', gridTemplateColumns: '31% 32% 35%' }}>
                <div>
                    <div >
                        <label htmlFor="">Upload Picture</label><br />
                        <input type="file" accept='image/'
                            onChange={uploadImage} />
                        <div style={{ height: '200px', width: '200px', border: '2px solid black', marginTop: '2px' }}>
                            <img src={img} alt="" style={{ height: '100%', width: '100%' }} />
                        </div>

                    </div>

                </div>
                <div>
                    <label htmlFor="">Teacher's Name</label><br />
                    <input type="text" placeholder='Enter Name' style={{ height: '40px', width: '80%' }} onChange={teacherName} /><br />
                    <label htmlFor="">Teacher's Qualification</label><br />
                    <input type="text" placeholder='Enter Qualification' style={{ height: '40px', width: '80%' }} onChange={teacherQualification} /><br />
                    <label htmlFor="">Mobile</label><br />
                    <input type="number" placeholder='Enter Number' style={{ height: '40px', width: '80%' }} onChange={teacherNumber} /><br />
                    <label htmlFor="">Per Class Payment</label><br />
                    <input type="number" placeholder='Enter Amount' style={{ height: '40px', width: '80%' }} onChange={teacherPayment} /><br />
                    <label htmlFor="">Address</label><br />
                    <textarea placeholder='Enter Address' style={{ height: '40px', width: '80%' }} onChange={teacherAddress}></textarea>
                </div>
                <div>
                    <p style={{ margin: '0', fontWeight: 'bold', fontFamily: 'cursive', textAlign: 'center', backgroundColor: '#002B5B', color: 'white', padding: '5px 0' }}>See Preview</p>
                    <hr />
                    <hr />
                    <div>
                        <img src={img} alt="" style={{ height: '180px', width: '150px' }} />
                        <p style={{ margin: '0', fontWeight: 'bold', fontFamily: 'cursive' }}>Name: {tName}</p>

                        <p style={{ margin: '0', fontWeight: 'bold', fontFamily: 'cursive' }}>Mobile: {tNumb}</p>
                        <p style={{ margin: '0', fontWeight: 'bold', fontFamily: 'cursive' }}>Qualification: {tQual}</p>
                        <p style={{ margin: '0', fontWeight: 'bold', fontFamily: 'cursive' }}>Per Class Fees: {tPaym}</p>
                        <p style={{ margin: '0', fontWeight: 'bold', fontFamily: 'cursive' }}>Address: {tAddre}</p>
                    </div>
                    <hr />
                </div>
            </section>
            <section style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ width: '200px', height: '40px', cursor: 'pointer', backgroundColor: '#002B5B', border: 'none', borderRadius: '5px', color: 'white', fontWeight: 'bold', fontFamily: 'cursive' }} onClick={uploadTeacher}>Click to Add</button>
            </section>
        </div>
    );
};

export default AddTeacher;