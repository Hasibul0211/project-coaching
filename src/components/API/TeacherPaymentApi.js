import { useEffect, useState } from "react";




import React from 'react';

const TeacherPaymentApi = () => {
    const [toTePay, setToTePay] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/teacherPayment')
            .then(res => res.json())
            .then(data => setToTePay(data))
    }, [])

    return [toTePay, setToTePay]
};

export default TeacherPaymentApi;