import React, { useEffect, useState } from 'react';

const PastRecord = () => {
    const [prm, setprm] = useState('')
    const [totalData, setTotalData] = useState([])
    const [filterData, setFilterData] = useState([])
    const getpremont = (e) => {
        setprm(e.target.value);
    }
    useEffect(() => {
        fetch('http://localhost:5000/debitcredit')
            .then(res => res.json())
            .then(data => setTotalData(data))
    }, [])
    const serchpremonthd = () => {
        const getsfdata = totalData.filter(tdf => tdf.month === prm);
        setFilterData(getsfdata);
    }



    return (
        <div>
            <section style={{ display: 'grid', gridTemplateColumns: '20% 80%', gridGap: '10px' }}>


                <div>
                    <p style={{ margin: '15% 0 0 0 ' }}>Show Previous Record</p><hr />
                    <div>
                        <label htmlFor="">Choose Month </label><br />
                        <select onChange={getpremont} name="" id="" style={{ width: '100%', height: '40px' }}>
                            <option value="January" selected>January</option>
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
                        <button onClick={serchpremonthd}>Search</button>
                    </div>


                </div>
                <div>
                    <p style={{ textAlign: 'center', marginTop: '3%', fontWeight: 'bold', fontFamily: 'cursive' }}>Data Sheet of <span style={{ fontSize: '20px' }}>{prm}</span></p>

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
                        filterData.map(dfk => <div className='data-sheet-data'>
                            <div>
                                <p>{dfk.date}</p>
                            </div>
                            <div>
                                <p>{dfk.details}</p>
                            </div>
                            <div>
                                <p>{dfk.amout}</p>
                            </div>
                            <div>
                                <p>{dfk.method === "Earn" ? dfk.amout : 0}</p>
                            </div>
                            <div>
                                <p>{dfk.method === "Cost" ? dfk.amout : 0}</p>
                            </div>

                        </div>)
                    }
















                </div>
            </section>
        </div>
    );
};

export default PastRecord;