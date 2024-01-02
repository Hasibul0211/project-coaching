import React, { useEffect, useState } from 'react';

const TotalStudentApi = () => {
    const [stutotal, setStuTotal] = useState('')



    useEffect(() => {
        fetch('http://localhost:5000/getAddStudent')
            .then(res => res.json())
            .then(data => setStuTotal(data))
    }, [])





    return [stutotal];

};

export default TotalStudentApi;