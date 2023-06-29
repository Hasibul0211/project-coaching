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
            <section className='profit-calculate-sec'>
                <div className='profit-calculate-sec-part'>
                    <p>Total Earnings</p>
                    <p>40000</p>
                </div>
                <div className='profit-calculate-sec-part'>
                    <p>Total Expeness</p>
                    <p>20000</p>
                </div>
                <div className='profit-calculate-sec-part'>
                    <p>Profit</p>
                    <p>20000</p>
                </div>
            </section>
            <hr />
            <section>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Teacher's Payment</p>
                    <button style={{ height: '30px', marginTop: '2%' }} onClick={handleOpen}>Make Payment</button>
                </div>

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






                <div className='earning-teacher-payment'>


                    <div className='earning-teacher-payment-part'>
                        <p>Raj Sir</p>
                        <p>Amount: 2200</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Sohel Sir</p>
                        <p>Amount: 2000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Shanto Sir</p>
                        <p>Amount: 2000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Sakib Sir</p>
                        <p>Amount: 4000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Masum Sir</p>
                        <p>Amount: 4000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Pranto Sir</p>
                        <p>Amount: 2800</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Smrity Madam</p>
                        <p>Amount: 2000</p>
                    </div>
                    <div className='earning-teacher-payment-part'>
                        <p>Eva Madam</p>
                        <p>Amount: 1500</p>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Founding Member Profit</p>
                    <button style={{ height: '30px', marginTop: '2%' }} onClick={handleOpenTwo}>Withdrawal</button>
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
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Hasibul Hasan</p>
                        <p style={{ margin: '0' }}>Amount: 5000</p>
                        <p style={{ margin: '0' }}>Withdraw: 00</p>
                        <p style={{ margin: '0' }}>Return: 00</p>
                        <p style={{ margin: '0' }}>Balance: 00</p>

                        <hr />

                        <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>Total Balance: 00</p>



                    </div>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Nahid Uddin</p>
                        <p style={{ margin: '0' }}>Amount: 5000</p>
                        <p style={{ margin: '0' }}>Withdraw: 00</p>
                        <p style={{ margin: '0' }}>Return: 00</p>
                        <p style={{ margin: '0' }}>Balance: 00</p>

                        <hr />

                        <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>Total Balance: 00</p>
                    </div>
                    <div className='earing-founding-person-part'>
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Mehedi Hasan</p>
                        <p style={{ margin: '0' }}>Amount: 5000</p>
                        <p style={{ margin: '0' }}>Withdraw: 00</p>
                        <p style={{ margin: '0' }}>Return: 00</p>
                        <p style={{ margin: '0' }}>Balance: 00</p>
                        <hr />

                        <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>Total: 00</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default RunningEarning;