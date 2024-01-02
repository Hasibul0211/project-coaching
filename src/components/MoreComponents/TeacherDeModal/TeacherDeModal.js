import React, { useEffect, useState } from 'react';
import './TeacherDeModal.css'
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fade } from '@mui/material';
import { useParams } from 'react-router-dom';

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

const TeacherDeModal = ({ handleOpenm, handleClosem, openm, id }) => {

    const [modalTe, setModalTe] = useState([])

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
    const findModalTe = modalTe.filter(modfilda => modfilda._id === id)

    const totalClassGet = (e) => {
        setClassTaken(e.target.value);
    }
    console.log('name', teacherFeeName);
    useEffect(() => {
        setTeacherFeeName(findModalTe[0]?.teacherName)
        setTeacherFeeNumber(findModalTe[0]?.number)
        setTeacherFeePerFee(findModalTe[0]?.perClassPayment)
        setTeacherFeeAmount(teacherFeePerFee * classtaken)
    }, [findModalTe])



    console.log(findModalTe);

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

                            <button onClick={() => alert('click')}>Submit</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div >
    );
};

export default TeacherDeModal;