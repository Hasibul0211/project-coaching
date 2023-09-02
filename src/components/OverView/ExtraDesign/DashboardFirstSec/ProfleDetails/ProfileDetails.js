import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import profile from "../../../../../photos/profile.jpg"

const ProfileDetails = () => {

    let { id } = useParams()
    console.log(id);

    const [img, setImg] = useState(profile)


    const uploadImage = (e) => {
        const read = new FileReader();
        read.readAsDataURL(e.target.files[0]);
        read.onload = () => {
            setImg(read.result)
        }
        read.onerror = (error) => {
            console.log(error);
        }
    }








    return (
        <div>

            < h1 > your clik id id {id}</h1>
            <p className='profile'>Profile</p>
            <div className='profile-details'>
                <div>
                    <div className='profileImage'>
                        <img src={img} alt="" />
                    </div>

                    <input
                        type="file"
                        accept='image/'
                        onChange={uploadImage}
                    />
                </div>
                <div>
                    <div style={{ backgroundColor: 'white', padding: '2px', marginTop: '2%' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>Md Hasibul Hasan</p>
                    </div>
                    <div style={{ backgroundColor: '#E1ECC8', margin: '0', display: 'grid', gridTemplateColumns: '50% 50%', padding: '5px' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px' }}>Father's Name: Md Joynal Abedin</p>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', marginLeft: '20%' }}>Mobile: 01626205938</p>
                    </div>
                    <div style={{ backgroundColor: 'white', margin: '0', display: 'grid', gridTemplateColumns: '50% 50%', padding: '5px' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px' }}>Mother's Name: Mst Parvin</p>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', marginLeft: '20%' }}>Mobile: 01626205938</p>
                    </div>
                    <div style={{ backgroundColor: '#E1ECC8', margin: '0', display: 'grid', gridTemplateColumns: '50% 50%', padding: '5px' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px' }}>Local Guardian: Mst Parvin</p>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', marginLeft: '20%' }}>Mobile: 01626205938</p>
                    </div>
                    <div style={{ backgroundColor: 'white', margin: '0', display: 'grid', gridTemplateColumns: '33% 33% 33%', padding: '5px' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px' }}>Class: BSc</p>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px' }}>Group: Science</p>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px' }}>Id: 0920754666</p>

                    </div>
                    <div style={{ backgroundColor: '#E1ECC8', padding: '2px' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', }}>Institute Name: World University of Bangladesh</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '2px' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', }}>Address: Modinapara</p>
                    </div>
                    <div style={{ backgroundColor: '#E1ECC8', padding: '2px' }}>
                        <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', }}>Fees: 2000 BDT</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;