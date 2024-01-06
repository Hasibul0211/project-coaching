import React, { useEffect, useState } from 'react';
import './TeacherDetails.css'
import TeacherDeModal from '../MoreComponents/TeacherDeModal/TeacherDeModal';
import Swal from 'sweetalert2';






const TeacherDetails = () => {
    const [getTData, setGetTData] = useState([])
    const [teacherOutput, setTeacherOuput] = useState()


    useEffect(() => {
        fetch('http://localhost:5000/addTeacher')
            .then(res => res.json())
            .then(data => setGetTData(data))
    }, [])


    const [openm, setOpenTM] = React.useState(false);
    const [sngid, setSngid] = useState('')
    const handleOpenTM = (id) => {
        setOpenTM(true)
        setSngid(id);
    };
    const handleCloseTM = () => setOpenTM(false);


    const deleteTeacherInfo = (id) => {
        alert(
            'Do You Want to Delete??'
        )
        fetch(`http://localhost:5000/addTeacher/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        width: 500,
                        fontSize: '20px',
                        padding: '1em',
                        color: '#716add',
                        icon: 'success',
                        backgroundColor: 'black',
                        title: 'Successfully deleted Info',
                        showConfirmButton: false,
                        timer: 1800
                    })
                    const remTeacherInfo = getTData.filter(teacehrRem => teacehrRem._id !== id)
                    setGetTData(remTeacherInfo)
                }
            })


    }




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
                            <p onClick={() => deleteTeacherInfo(tdatas._id)}>Delete</p>
                        </div>
                        <div>



                            <p style={{ margin: '0', textAlign: 'center', fontFamily: 'cursive', fontSize: '14px', fontWeight: 'bold', backgroundColor: '#002B5B', color: 'white', padding: '5px 0', cursor: 'pointer' }} onClick={() => handleOpenTM(tdatas._id)}>

                                Add to Payment Record </p>
                            <TeacherDeModal handleClosem={handleCloseTM} handleOpenm={handleOpenTM} openm={openm} id={sngid} setTeacherOuput={setTeacherOuput}></TeacherDeModal>
                        </div>



                    </section>)
                }

            </section>





        </div >
    );
};

export default TeacherDetails;