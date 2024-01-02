import React, { useEffect, useRef, useState } from 'react';
import './DebitCredit.css'
import Swal from 'sweetalert2';



const DebitCredit = () => {
    const [method, getMethod] = useState('')
    const [detailsc, getDetailsc] = useState('')
    const [amtv, getAmtv] = useState('')
    const [pdatev, getPdatev] = useState('')


    const getmethod = (e) => {
        getMethod(e.target.value);
    }
    const getdetails = (e) => {
        getDetailsc(e.target.value);
    }
    const getamt = (e) => {
        getAmtv(e.target.value);
    }
    const getpdate = (e) => {
        getPdatev(e.target.value);
    }

    const currentMonth = new Date().toLocaleString('default', { month: 'long' })
    const currentYear = new Date().getFullYear()

    const debitcreditbtn = () => {
        const monthname = new Date().toLocaleString('default', { month: 'long' })
        const yearname = new Date().getFullYear()
        const dcoutput = {
            'method': method,
            'details': detailsc,
            'amout': amtv,
            'date': pdatev,
            'month': monthname,
            'year': yearname
        }
        console.log(dcoutput);
        fetch('http://localhost:5000/debitcredit', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(dcoutput)
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
    }


    const [dcd, setdcd] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/debitcredit')
            .then(res => res.json())
            .then(data => {

                const fdata = data.filter(dckk => dckk.month === currentMonth && dckk.year === currentYear)

                setdcd(fdata)
            })
    }, [])

    console.log(dcd);




    const [ebalance, setEbalance] = useState(0)
    const [cbalance, setCbalance] = useState(0)

    useEffect(() => {
        let earnSum = 0
        for (let i = 0; i < dcd.length; i++) {
            if (dcd[i].method === 'Earn') {
                setEbalance(earnSum += parseInt(dcd[i].amout));
            }
        }
        let costSum = 0
        for (let i = 0; i < dcd.length; i++) {
            if (dcd[i].method === 'Cost') {
                setCbalance(costSum += parseInt(dcd[i].amout));
            }
        }
    }, [useState(0)])


    useEffect(() => {


    }, [])

    // dcd.forEach(dccd => {
    //     if (dccd.method === 'Earn') {
    //         totalBalace += dccd.amout
    //     }
    //     let Balace = parseInt(dccd.amout)
    //     totalBalace = Balace
    //     console.log(Balace);
    // })




    return (
        <div>
            <section style={{ display: 'grid', gridTemplateColumns: '20% 80%', gridGap: '10px' }}>
                <div>

                    <div>
                        <p style={{ margin: '15% 0 0 0 ' }}>Per Month Calculation </p><hr />
                        <div>
                            <label htmlFor="">Method: </label><br />
                            <select name="method" id="" style={{ width: '100%', height: '40px' }} onChange={getmethod}>
                                <option value="Select First" selected>Select First</option>
                                <option value="Earn">Earn</option>
                                <option value="Cost">Cost</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Details</label><br />
                            <input onChange={getdetails} type="text" placeholder='Enter Details' style={{ width: '100%', height: '40px' }} />
                        </div>
                        <div>
                            <label htmlFor="">Amount</label><br />
                            <input onChange={getamt} type="text" placeholder='Enter Amount' style={{ width: '100%', height: '40px' }} />
                        </div>
                        <div>
                            <label htmlFor="">Choose Date</label><br />
                            <input onChange={getpdate} type="date" name="" id="" style={{ width: '100%', height: '40px' }} pattern="\d{4}-\d{2}-\d{2}" />
                        </div>
                        <div>
                            <button onClick={debitcreditbtn} style={{ width: '100%', height: '40px', marginTop: '4%', backgroundColor: '#002B5B', color: 'white', fontSize: '20px', border: 'none', borderRadius: '5px' }}>Add</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='dchead'>
                        <div>
                            <p>Total Earn : {ebalance}</p>
                        </div>
                        <div>
                            <p>Tatal Expenss : {cbalance}</p>
                        </div>
                        <div>
                            <p>Net Balance: {ebalance - cbalance}</p>
                        </div>

                    </div>
                    <p style={{ textAlign: 'center', marginTop: '3%', fontWeight: 'bold' }}>Data Sheet of {currentMonth},{currentYear}</p>


                    <div className='data-sheet-head'>
                        <div>
                            <p>Date</p>
                        </div>
                        <div>
                            <p>Details</p>
                        </div>
                        <div>
                            <p>Amount</p>
                        </div>
                        <div>
                            <p>Earn</p>
                        </div>
                        <div>
                            <p>Cost</p>
                        </div>
                    </div>

                    {
                        dcd.map(gfd => <div className='data-sheet-data'>
                            <div>
                                <p>{gfd.month === currentMonth && gfd.year === currentYear ? gfd.month : 0}</p>
                            </div>
                            <div>
                                <p>{gfd.month === currentMonth && gfd.year === currentYear ? gfd.details : ''}</p>
                            </div>
                            <div>
                                <p>{gfd.month === currentMonth && gfd.year === currentYear ? gfd.amout : 0}</p>
                            </div>
                            <div>

                                <p> {
                                    gfd.month === currentMonth && gfd.year === currentYear && gfd.method === 'Earn' ? gfd.amout : 0
                                }</p>
                            </div>
                            <div>
                                <p>{
                                    gfd.month === currentMonth && gfd.year === currentYear && gfd.method === 'Cost' ? gfd.amout : 0
                                }</p>
                            </div>

                        </div>)
                    }

                </div>
            </section>
        </div>
    );
};

export default DebitCredit;