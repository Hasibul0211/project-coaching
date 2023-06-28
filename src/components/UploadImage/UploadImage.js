import React, { useState } from 'react';

const UploadImage = () => {
    const [img, setImg] = useState('')


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
            <h1 style={{ textAlign: 'center' }}>Upload Image In REACT</h1>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <input
                    type="file"
                    accept='image/'
                    onChange={uploadImage}
                />

                <div style={{ height: '200px', width: '200px', border: '2px solid black', marginTop: '15px' }}>
                    <img src={img} alt="" style={{ height: '100%', width: '100%' }} />
                </div>

            </div>

        </div>
    );
};

export default UploadImage;