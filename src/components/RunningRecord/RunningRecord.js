import React, { useState } from 'react';
import './RunningRecord.css'
import { Box, Modal, Typography } from '@mui/material';



const style = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const RunningEarning = () => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openTwo, setOpenTwo] = React.useState(false);
    const handleOpenTwo = () => setOpenTwo(true);
    const handleCloseTwo = () => setOpenTwo(false);


    const [paym, setPaym] = useState(false)
    const makePayment = () => {
        setPaym(true)
    }
    const [withRet, setWithRet] = useState(false)
    const makeWithdrawal = () => {
        setWithRet(true)
    }

    return (
        <div>
            <hr />

            <hr />
            <hr />
            <section className='teacherfeesec'>
                <div>
                    <p>Teacher's Name</p>
                </div>
                <div>
                    <p>Phone</p>
                </div>
                <div>
                    <p>
                        Total Class
                    </p>
                </div>
                <div>
                    <p>
                        Fees/C
                    </p>
                </div>

                <div>
                    <p>Total Amount</p>
                </div>
                <div>
                    <p>Advance</p>
                </div>
                <div>
                    <p>Dues</p>
                </div>
                <div>
                    <p>ADD</p>
                </div>
                <div>
                    <p>Status</p>
                </div>
            </section>
            <section className='teacherfeesecdata'>
                <div>
                    <p>Md Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div>
                    <p>
                        24
                    </p>
                </div>
                <div>
                    <p>
                        110
                    </p>
                </div>

                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px', cursor: 'pointer' }} onClick={handleOpen}>Click</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px' }}>Pending</p>
                </div>
            </section >
            <section className='teacherfeesecdata'>
                <div>
                    <p>Md Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div>
                    <p>
                        24
                    </p>
                </div>
                <div>
                    <p>
                        110
                    </p>
                </div>

                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px', cursor: 'pointer' }} onClick={handleOpen}>Click</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px' }}>Pending</p>
                </div>
            </section >
            <section className='teacherfeesecdata'>
                <div>
                    <p>Md Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div>
                    <p>
                        24
                    </p>
                </div>
                <div>
                    <p>
                        110
                    </p>
                </div>

                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px', cursor: 'pointer' }} onClick={handleOpen}>Click</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px' }}>Pending</p>
                </div>
            </section >
            <section className='teacherfeesecdata'>
                <div>
                    <p>Md Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div>
                    <p>
                        24
                    </p>
                </div>
                <div>
                    <p>
                        110
                    </p>
                </div>

                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px', cursor: 'pointer' }} onClick={handleOpen}>Click</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px' }}>Pending</p>
                </div>
            </section >
            <section className='teacherfeesecdata'>
                <div>
                    <p>Md Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div>
                    <p>
                        24
                    </p>
                </div>
                <div>
                    <p>
                        110
                    </p>
                </div>

                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px', cursor: 'pointer' }} onClick={handleOpen}>Click</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px' }}>Pending</p>
                </div>
            </section >
            <section className='teacherfeesecdata'>
                <div>
                    <p>Md Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div>
                    <p>
                        24
                    </p>
                </div>
                <div>
                    <p>
                        110
                    </p>
                </div>

                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px', cursor: 'pointer' }} onClick={handleOpen}>Click</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px' }}>Pending</p>
                </div>
            </section >
            <section className='teacherfeesecdata'>
                <div>
                    <p>Md Hasibul Hasan</p>
                </div>
                <div>
                    <p>01626205938</p>
                </div>
                <div>
                    <p>
                        24
                    </p>
                </div>
                <div>
                    <p>
                        110
                    </p>
                </div>

                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p>2500</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px', cursor: 'pointer' }} onClick={handleOpen}>Click</p>
                </div>
                <div>
                    <p style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px' }}>Pending</p>
                </div>
            </section >
            {/* modal first  */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Make Payment for Individual Teacher
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div style={{ paddingTop: '10px' }}>

                            <label htmlFor="">Select Teacher:</label>
                            <select style={{ width: '130px', height: '40px', marginRight: '5px' }}>
                                <option value="Please Select">Please Select</option>
                                <option value="Raj Sir">Raj Sir</option>
                                <option value="Sakib Sir">Sakib Sir</option>
                                <option value="Sohel Sir">Sohel Sir</option>
                                <option value="Shanto Sir">Shanto Sir</option>
                                <option value="Masum Sir">Masum Sir</option>
                                <option value="Pranto Sir">Pranto Sir</option>
                                <option value="Eva Madam">Eva Madam</option>
                                <option value="Smrity Madam">Smrity Madam</option>
                            </select>
                            <label htmlFor="">Select Month:</label>
                            <select name="" id="" style={{ width: '100px', height: '40px', marginRight: '5px' }}>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="Octobor">Octobor</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <label htmlFor="">Amount:</label>
                            <input type="text" placeholder='Enter Amount' style={{ width: '120px', height: '40px', marginRight: '5px' }} />
                            <button style={{ height: '40px', width: '200px' }} onClick={makePayment}>

                                {
                                    paym ? 'Done' : 'Procced to Payment'
                                }
                            </button>
                        </div>


                    </Typography>
                </Box>
            </Modal>

            {/* modal first end here  */}




            <hr />

            <hr />
            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>Founding Member Profit</p>
                    <button style={{ height: '35px', marginTop: '2%', backgroundColor: 'tomato', border: '0', padding: '5px', fontFamily: "cursive", fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' }} onClick={handleOpenTwo}>Withdrawal</button>
                </div>
                <Modal
                    open={openTwo}
                    onClose={handleCloseTwo}
                    aria-labelledby="modal-modal-title-two"
                    aria-describedby="modal-modal-description-two"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title-two" variant="h6" component="h2">
                            Withdraw or Return
                        </Typography>
                        <Typography id="modal-modal-description-two" sx={{ mt: 2 }}>
                            <div style={{ paddingTop: '10px' }}>

                                <label htmlFor="">Select Method</label>
                                <select style={{ width: '130px', height: '40px', marginRight: '5px' }}>
                                    <option value="Please Select">Please Select</option>
                                    <option value="Advance">Advance</option>
                                    <option value="Return">Return</option>
                                </select>
                                <label htmlFor="">Select Person</label>
                                <select style={{ width: '130px', height: '40px', marginRight: '5px' }}>
                                    <option value="Please Select">Please Select</option>
                                    <option value="Hasibul">Hasibul</option>
                                    <option value="Nahid">Nahid</option>
                                    <option value="Mehedi">Mehedi</option>

                                </select>
                                <label htmlFor="">Select Month:</label>
                                <select name="" id="" style={{ width: '100px', height: '40px', marginRight: '5px' }}>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="Octobor">Octobor</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                <label htmlFor="">Amount:</label>
                                <input type="text" placeholder='Enter Amount' style={{ width: '120px', height: '40px', marginRight: '5px' }} />
                                <button style={{ height: '40px', width: '100px' }} onClick={makeWithdrawal}>

                                    {
                                        withRet ? 'Done' : 'Procced'
                                    }
                                </button>
                            </div>


                        </Typography>
                    </Box>
                </Modal>




                <div className='earning-founding-person'>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive' }}>Hasibul Hasan</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Amount: 5000</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Withdraw: 00</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Return: 00</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Balance: 00</p>

                        <hr />

                        <p style={{ margin: '5px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive' }}>Total Balance: 00</p>



                    </div>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive' }}>Nahid Uddin</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Amount: 5000</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Withdraw: 00</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Return: 00</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Balance: 00</p>

                        <hr />

                        <p style={{ margin: '5px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive' }}>Total Balance: 00</p>
                    </div>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive' }}>Mehedi Hasan</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Amount: 5000</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Withdraw: 00</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Return: 00</p>
                        <p style={{ margin: '0', fontFamily: 'cursive' }}>Balance: 00</p>
                        <hr />

                        <p style={{ margin: '5px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive' }}>Total Balance: 00</p>
                    </div>

                </div>
            </section>
        </div >
    );
};

export default RunningEarning;