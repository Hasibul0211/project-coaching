import React, { useRef, useState } from 'react';
import './Add Student.css'
import Swal from 'sweetalert2';

const AddStudent = () => {
    const [stuName, setStuName] = useState('')
    const [stuFather, setStuFather] = useState('')
    const [stuMother, setStuMother] = useState('')
    const [stuFatherMob, setStuFatherMob] = useState('')
    const [stuMotherMob, setStuMotherMob] = useState('')
    const [stuClass, setStuClass] = useState('')
    const [stuRoll, setStuRoll] = useState('')
    const [stuDob, setStuDob] = useState('')
    const [stuGroup, setStuGroup] = useState('')
    const [stuInstitue, setStuInstitue] = useState('')
    const [stuAddress, setStuAddress] = useState('')
    const [stuRefere, setStuRefere] = useState('')
    const [stuJoinDa, setStuJoinDa] = useState('')
    const [stuId, setStuId] = useState('')
    const [stuFees, setStuFees] = useState('')
    const [stuGurdNa, setStuGurdNa] = useState('')
    const [stuGurdMob, setStuGurdMob] = useState('')
    const [stuSubject, setStuSubject] = useState('')

    const name = useRef()
    const fName = useRef()
    const mName = useRef()
    const fMob = useRef()
    const mMob = useRef()
    const sclass = useRef()
    const roll = useRef()
    const dob = useRef()
    const group = useRef()
    const institute = useRef()
    const address = useRef()
    const refer = useRef()
    const jod = useRef()
    const sId = useRef()
    const fees = useRef()
    const gName = useRef()
    const gMob = useRef()
    const subject = useRef()

    const onChangeF = () => {

        setStuName(name.current.value);
        setStuFather(fName.current.value);
        setStuMother(mName.current.value);
        setStuFatherMob(fMob.current.value);
        setStuMotherMob(mMob.current.value);
        setStuClass(sclass.current.value);
        setStuRoll(roll.current.value);
        setStuDob(dob.current.value);
        setStuGroup(group.current.value);
        setStuInstitue(institute.current.value);
        setStuAddress(address.current.value);
        setStuRefere(refer.current.value);
        setStuJoinDa(jod.current.value);
        setStuId(sId.current.value);
        setStuFees(fees.current.value);
        setStuGurdNa(gName.current.value);
        setStuGurdMob(gMob.current.value);
        setStuSubject(subject.current.value);

    }



    const addformSubmit = (e) => {
        const studentFormData = {
            name: stuName.toUpperCase(),
            fatherName: stuFather.toUpperCase(),
            fatherMobile: stuFatherMob,
            motherName: stuMother.toUpperCase(),
            motherMobile: stuMotherMob,
            class: stuClass.toUpperCase(),
            roll: stuRoll,
            dob: stuDob,
            group: stuGroup.toUpperCase(),
            institute: stuInstitue.toUpperCase(),
            address: stuAddress.toUpperCase(),
            refer: stuRefere.toUpperCase(),
            jod: stuJoinDa,
            sId: stuId,
            fees: stuFees,
            gName: stuGurdNa.toUpperCase(),
            gMob: stuGurdMob,
            subject: stuSubject.toUpperCase()
        }

        console.log(studentFormData);
        fetch('https://projectcoachingbackenda.vercel.app/addStudent', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(studentFormData)
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
        console.log(studentFormData);


        e.preventDefault()

    }




    return (
        <div>
            <p className='formHeader'>Complete the form</p>
            <section>
                <form onSubmit={addformSubmit}>
                    <div className='addForm'>


                        <div className='formLeft'>

                            {/* student name here */}
                            <div style={{ width: '100%' }} className='formLevelInputCont'>
                                <label htmlFor="" className='labelName'>Student Name</label>
                                <input type="text" style={{ width: '100%' }} className='labelInput' onChange={onChangeF} ref={name} />
                            </div>
                            <div className='inputGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>


                                {/* student father name here */}
                                <div>
                                    <label htmlFor="" className='labelName'>Father's Name</label>
                                    <input type="text" className='labelInput' onChange={onChangeF} ref={fName} />
                                </div>

                                {/* father mobile number here  */}
                                <div>
                                    <label htmlFor="" className='labelName'>Father's Mobile no</label>
                                    <input type="number" onChange={onChangeF} ref={fMob} />
                                </div>
                            </div>
                            <div className='inputGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                                {/* mother name here  */}
                                <div>
                                    <label htmlFor="" className='labelName'>Mother's Name</label>
                                    <input type="text" onChange={onChangeF} ref={mName} />
                                </div>
                                <div>
                                    {/* mother mobile name here  */}
                                    <label htmlFor="" className='labelName'>Mother's Mobile no</label>
                                    <input type="number" onChange={onChangeF} ref={mMob} />
                                </div>
                            </div>



                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>

                                    {/* student class here  */}

                                    <label htmlFor="" className='labelName'>Class</label>
                                    <input type="text" ref={sclass} onChange={onChangeF} />
                                </div>

                                {/* class roll here  */}
                                <div>
                                    <label htmlFor="" className='labelName'>Class Roll</label>
                                    <input type="number" ref={roll} onChange={onChangeF} />
                                </div>
                            </div>
                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>

                                    {/* date of birth  */}
                                    <label htmlFor="" className='labelName'>Date of Birth</label>
                                    <input type="date" ref={dob} onChange={onChangeF} />
                                </div>
                                <div>

                                    {/* student group here  */}
                                    <label htmlFor="" className='labelName'>Group</label>
                                    <input type="Text" ref={group} onChange={onChangeF} />
                                </div>
                            </div>

                            <div style={{ width: '100%' }}>

                                {/* institutes name here  */}

                                <label htmlFor="" className='labelName'>Institution Name</label>
                                <input className='labelInput' type="text" style={{ width: '100%' }} onChange={onChangeF} ref={institute} />
                            </div>
                            <div style={{ width: '100%' }}>

                                {/* address here  */}

                                <label htmlFor="" className='labelName'>Address</label>
                                <input className='labelInput' type="text" style={{ width: '92%' }} ref={address} onChange={onChangeF} />
                            </div>


                        </div>
                        <div className='formRight'>


                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>

                                    {/* refer here  */}


                                    <label htmlFor="" className='labelName'>Reference </label>
                                    <input type="text" ref={refer} onChange={onChangeF} />
                                </div>
                                <div>

                                    {/* join date here  */}

                                    <label htmlFor="" className='labelName'>Join Date</label>
                                    <input type="date" ref={jod} onChange={onChangeF} />
                                </div>
                            </div>
                            <div className='clgGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    {/* student id here  */}

                                    <label htmlFor="" className='labelName'>Id </label>
                                    <input type="text" ref={sId} onChange={onChangeF} />
                                </div>
                                <div>


                                    {/* fees here  */}
                                    <label htmlFor="" className='labelName'>Fees</label>
                                    <input type="number" ref={fees} onChange={onChangeF} />
                                </div>
                            </div>
                            <div className='inputGroup' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>


                                    {/* gurdian name  */}
                                    <label htmlFor="" className='labelName'>Guardian's Name</label>
                                    <input type="text" ref={gName} onChange={onChangeF} />
                                </div>
                                <div>



                                    {/* gurdian mobile here  */}
                                    <label htmlFor="" className='labelName'>Guardian's Mobile no</label>
                                    <input type="number" ref={gMob} onChange={onChangeF} />
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <label htmlFor="" className='labelName'>Subjects</label>
                                <input className='labelInput' type="text" style={{ width: '96%' }} ref={subject} onChange={onChangeF} />
                            </div>

                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                        <button type='submit' style={{ padding: '8px', fontSize: '15px', backgroundColor: 'tomato', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </div>


                </form>
            </section>
        </div>
    );
};

export default AddStudent;