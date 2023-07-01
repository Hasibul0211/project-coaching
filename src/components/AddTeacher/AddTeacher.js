import React, { useState } from 'react';

const AddTeacher = () => {

    const [img, setImg] = useState('')


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
                    <input type="text" placeholder='Enter Name' style={{ height: '40px', width: '80%' }} /><br />
                    <label htmlFor="">Teacher's Qualification</label><br />
                    <input type="text" placeholder='Enter Qualification' style={{ height: '40px', width: '80%' }} /><br />
                    <label htmlFor="">Mobile</label><br />
                    <input type="number" placeholder='Enter Number' style={{ height: '40px', width: '80%' }} /><br />
                    <label htmlFor="">Per Class Payment</label><br />
                    <input type="number" placeholder='Enter Amount' style={{ height: '40px', width: '80%' }} /><br />
                    <label htmlFor="">Address</label><br />
                    <textarea placeholder='Enter Address' style={{ height: '40px', width: '80%' }}></textarea>
                </div>
                <div>
                    <p style={{ margin: '0' }}>Choose Subjects</p>
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Three" id="" style={{ width: '10px' }} />Class Three</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Bangla</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>BGS</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Four</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Bangla</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>BGS</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Five</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Bangla</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>BGS</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Six</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Bangla</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>BGS</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Seven</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Bangla</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>BGS</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Eight</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Bangla</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>BGS</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Nine</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Physics</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Chemistry</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Biology</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Higher Math</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Accounting</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Finnance</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Ten</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Physics</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Chemistry</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Biology</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Higher Math</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Science</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Accounting</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Finnance</label>
                    </div>
                    <hr />
                    <div>
                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Eleven</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Physics</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Chemistry</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Biology</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label><br />
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Accounting</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Finnance</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>ICT</label>

                    </div>
                    <hr />
                    <div>

                        <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold' }}> <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />Class Twelve</p>
                        <input type="checkbox" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Physics</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Chemistry</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Math</label>
                        <input type="checkbox" name="" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Biology</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>English</label><br />
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Accounting</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>Finnance</label>
                        <input type="checkbox" name="Science" id="" style={{ width: '10px' }} />
                        <label htmlFor="" style={{ fontSize: '15px' }}>ICT</label>

                    </div>
                </div>
            </section>
            <section style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ width: '200px', height: '40px', cursor: 'pointer' }}>Click to Add</button>
            </section>
        </div>
    );
};

export default AddTeacher;