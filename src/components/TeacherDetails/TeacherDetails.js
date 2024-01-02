import React, { useEffect, useState } from 'react';
import './TeacherDetails.css'
import TeacherDeModal from '../MoreComponents/TeacherDeModal/TeacherDeModal';






const TeacherDetails = () => {
    const [getTData, setGetTData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addTeacher')
            .then(res => res.json())
            .then(data => setGetTData(data))
    }, [])


    // const addtoPaym = (id) => {
    //     alert(id)
    // }
    const [openm, setOpenTM] = React.useState(false);
    const [sngid, setSngid] = useState('')
    const handleOpenTM = (id) => {
        setOpenTM(true)
        setSngid(id);
    };
    const handleCloseTM = () => setOpenTM(false);






    return (
        <div>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>All Teacher's list of Borno Academic Care</p>
            <section className='teacher-container'>
                {
                    getTData.map(tdatas => <section className='teacher-detail'>
                        <p style={{ margin: '0', backgroundColor: '#002B5B', textAlign: 'center', color: 'white', fontWeight: 'bold', fontFamily: 'cursive', fontSize: '15px', padding: '5px 0' }}>Our Teacher</p>
                        <div className='teacherImgCont'>
                            <img src={tdatas.image} alt="" />
                        </div>
                        <div>
                            <p style={{ fontSize: '18px', fontFamily: 'cursive', fontWeight: 'bold' }}>Name:{tdatas.teacherName}</p>
                            <p style={{ fontWeight: '700', fontFamily: 'cursive', fontSize: '15px' }}>Qualification:{tdatas.qualification}</p>
                            <p style={{ fontWeight: '700', fontFamily: 'cursive', fontSize: '15px' }}>Contact:{tdatas.number}</p>
                            <p style={{ fontWeight: '700', fontFamily: 'cursive', fontSize: '13px' }}>Address:{tdatas.address}</p>
                            <p style={{ fontWeight: '700', fontFamily: 'cursive', fontSize: '13px', backgroundColor: '#002B5B', width: '50%', textAlign: 'center', margin: '0 auto', color: "white", padding: '4px', borderRadius: '5px' }}>Payment/Class: {tdatas.perClassPayment}</p>
                        </div>

                        <div className='buttonGroup'>
                            <p>Edit Info</p>
                            <p>Delete</p>
                        </div>
                        <div>
                            <p style={{ margin: '0', textAlign: 'center', fontFamily: 'cursive', fontSize: '14px', fontWeight: 'bold', backgroundColor: '#002B5B', color: 'white', padding: '5px 0', cursor: 'pointer' }} onClick={() => handleOpenTM(tdatas._id)}>Add to Payment Record </p>
                            <TeacherDeModal handleClosem={handleCloseTM} handleOpenm={handleOpenTM} openm={openm} id={sngid}></TeacherDeModal>
                        </div>



                    </section>)
                }

            </section>





        </div >
    );
};

export default TeacherDetails;