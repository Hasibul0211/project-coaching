import React, { useEffect, useState } from 'react';

const TotalStudentApi = () => {
    const [stutotal, setStuTotal] = useState('')



    useEffect(() => {
        fetch('https://projectcoachingbackenda.vercel.app/addStudent')
            .then(res => res.json())
            .then(data => setStuTotal(data))
    }, [])





    return [stutotal];

};

export default TotalStudentApi;