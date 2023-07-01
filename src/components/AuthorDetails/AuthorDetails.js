import React from 'react';
import './AuthorDetails.css'
import profileImg from '../../photos/profile.jpg'
import { Box, Modal, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const AuthorDetails = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenTeEd = () => setOpen(true);
    const handleCloseTeEd = () => setOpen(false);

    const deleteAuthorBtn = () => {

        Swal.fire({
            width: 400,
            fontSize: '20px',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }



    return (
        <div>
            <section className='author-detail'>
                <div style={{ width: '100%', height: '170px' }}>
                    <img src={profileImg} alt="" style={{ width: '100%', height: '100%', borderRadius: '5px', marginLeft: '5px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Name: Hasibul Hasan</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Qualification: BSc In EEE</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Contact: 01626205938</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>E-Mail: mdhasibul0211@gmail.com</p>
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Position</p>
                    <p style={{ fontSize: '20px', fontFamily: 'cursive', fontWeight: 'bold' }}>Founder and Accountants</p>

                </div>
                <div>
                    <button onClick={handleOpenTeEd} style={{ width: '80px', border: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>Edit</button>
                    <button style={{ width: '80px', border: 'none', backgroundColor: 'red', padding: '5px', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '5px' }} onClick={deleteAuthorBtn}>Delete</button>

                    <Modal
                        open={open}
                        onClose={handleCloseTeEd}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Edit Your Details
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 1, pb: 1 }}>

                                <div>
                                    <label htmlFor="">Name:</label>
                                    <input type="text" placeholder='Enter Name' style={{ height: '30px', marginTop: '5px', width: '50%', marginLeft: '12%' }} /><br />
                                    <label htmlFor="">Qualification: </label>
                                    <input type="text" placeholder='Enter info' style={{ height: '30px', marginTop: '5px', width: '50%' }} /><br />
                                    <label htmlFor="">Phone</label>
                                    <input type="number" placeholder='Enter Number' style={{ height: '30px', marginTop: '5px', width: '50%', marginLeft: '13%' }} /><br />
                                    <label htmlFor="">E-Mail: </label>
                                    <input type="email" placeholder='Enter email' style={{ height: '30px', marginTop: '5px', width: '50%', marginLeft: '11%' }} /><br />
                                    <label htmlFor="">Position: </label>
                                    <input type="text" placeholder='Enter position' style={{ height: '30px', marginTop: '5px', width: '50%', marginLeft: '8%' }} /><br />
                                    <input type="submit" style={{ height: '30px', marginTop: '5px', width: '50%', display: 'flex', justifyContent: 'center', marginLeft: '25%' }} />
                                </div>
                            </Typography>
                        </Box>
                    </Modal>
                </div>

            </section>
            <section className='author-detail'>
                <div style={{ width: '100%', height: '170px' }}>
                    <img src={profileImg} alt="" style={{ width: '100%', height: '100%', borderRadius: '5px', marginLeft: '5px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Name: Mehedi Hasan</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Qualification: BA Hons(Bangla)</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Contact: 01627644029</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>E-Mail: mdhasibul0211@gmail.com</p>
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Position</p>
                    <p style={{ fontSize: '20px', fontFamily: 'cursive', fontWeight: 'bold' }}>Founder and Accountants</p>

                </div>
                <div>
                    <button onClick={handleOpenTeEd} style={{ width: '80px', border: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>Edit</button>
                    <button style={{ width: '80px', border: 'none', backgroundColor: 'red', padding: '5px', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '5px' }} onClick={deleteAuthorBtn}>Delete</button>
                </div>
            </section>
            <section className='author-detail'>
                <div style={{ width: '100%', height: '170px' }}>
                    <img src={profileImg} alt="" style={{ width: '100%', height: '100%', borderRadius: '5px', marginLeft: '5px' }} />
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Name: Nizam Uddin Nahid</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Qualification: BA Hons(Bangla)</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>Contact: 01627644029</p>
                    <p style={{ fontWeight: '700', fontFamily: 'cursive' }}>E-Mail: mdhasibul0211@gmail.com</p>
                </div>
                <div>
                    <p style={{ fontSize: '30px', fontFamily: 'fantasy' }}>Position</p>
                    <p style={{ fontSize: '20px', fontFamily: 'cursive', fontWeight: 'bold' }}>Founder and Accountants</p>

                </div>
                <div>
                    <button onClick={handleOpenTeEd} style={{ width: '80px', border: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>Edit</button>
                    <button style={{ width: '80px', border: 'none', backgroundColor: 'red', padding: '5px', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '5px' }} onClick={deleteAuthorBtn}>Delete</button>
                </div>
            </section>
        </div>
    );
};

export default AuthorDetails;