import React, { useEffect, useState } from 'react';
import './TeacherDeModal.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2';
import TeacherPaymentApi from '../../API/TeacherPaymentApi';

const stylem = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    p: 5,
};

const TeacherDeModal = ({ handleOpenm, handleClosem, openm, id, setTeacherOuput }) => {

    const [modalTe, setModalTe] = useState([])
    const [toTePay] = TeacherPaymentApi()

    useEffect(() => {
        fetch('http://localhost:5000/addTeacher')
            .then(res => res.json())
            .then(data =>
                setModalTe(data))
    }, [])


    const [teacherFeeName, setTeacherFeeName] = useState([])
    const [teacherFeeNumber, setTeacherFeeNumber] = useState([])
    const [teacherFeePerFee, setTeacherFeePerFee] = useState([])
    const [classtaken, setClassTaken] = useState('')
    const [teacherFeeAmount, setTeacherFeeAmount] = useState([])
    const [insertData, setInsertData] = useState([])
    const findModalTe = modalTe.filter(modfilda => modfilda._id === id)

    const totalClassGet = (e) => {
        setClassTaken(e.target.value);
    }

    useEffect(() => {
        setTeacherFeeName(findModalTe[0]?.teacherName)
        setTeacherFeeNumber(findModalTe[0]?.number)
        setTeacherFeePerFee(findModalTe[0]?.perClassPayment)
        setTeacherFeeAmount(teacherFeePerFee * classtaken)
    }, [findModalTe])



    const currentMonth = new Date().toLocaleString('default', { month: 'long' })
    const currentYear = new Date().getFullYear()



    const addTeacherPaym = () => {
        const teacherPaym = {
            'teacherName': teacherFeeName,
            'number': teacherFeeNumber,
            'perClassFee': teacherFeePerFee,
            'totalClass': classtaken,
            'totalAmount': teacherFeeAmount,
            'feeDue': 0,
            'feeAdvance': 0,
            'feesMonth': currentMonth,
            'feesYear': currentYear,
            'status': 'pending'
        }
        fetch('http://localhost:5000/teacherPayment', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(teacherPaym)
        }).then(res => res.json())
            .then(data => {
                setInsertData(data)
                if (data.insertedId) {
                    handleClosem()
                    Swal.fire({
                        position: 'top-center',
                        width: 500,
                        fontSize: '20px',
                        padding: '1em',
                        color: '#716add',
                        icon: 'success',
                        backgroundColor: 'black',
                        title: 'Successfully added',
                        showConfirmButton: false,
                        timer: 1800
                    })

                }
                else {
                    alert('something wrong')
                }
            })
    }

    const getToTePayData = toTePay.find(payingTeData => (payingTeData.teacherName === teacherFeeName))
    setTeacherOuput(getToTePayData);






    return (

        < div >

            <Modal
                open={openm}
                onClose={handleClosem}
                aria-labelledby="modal-modal-title-m"
                aria-describedby="modal-modal-description-m"
            >
                <Box sx={stylem}>
                    <Typography id="modal-modal-title-m" variant="h6" component="h2">
                        Add Payment Info
                    </Typography>
                    <Typography id="modal-modal-description-m" sx={{ mt: 1, pb: 1 }}>


                        <div className='teacherfeeshowcls'>
                            <label htmlFor="">Name</label>
                            <input type="text" value={teacherFeeName} checked />
                            <label htmlFor="">Number</label>
                            <input type="text" value={teacherFeeNumber} checked />
                            <label htmlFor="">Fees/Class</label>
                            <input type="text" value={teacherFeePerFee} checked />
                            <label htmlFor="">Total Class </label>
                            <input type="text" onChange={totalClassGet} />
                            <label htmlFor="">Total Amount</label>
                            <input type="text" value={teacherFeeAmount} checked />

                            <button onClick={addTeacherPaym} >Submit</button>
                        </div>

                    </Typography>
                </Box>
            </Modal>
        </div >
    );
};

export default TeacherDeModal;