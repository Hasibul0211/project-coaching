import React from 'react';
import './DashboardFirst.css'
import { Grid } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import GroupStuImg from '../../../../photos/Group student.png';
import GroupTeaImg from '../../../../photos/teachers.png';
import TotalStudentApi from '../../../API/TotalStudentApi';




const DashboarFirst = () => {
    const [stutotal] = TotalStudentApi()



    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    }));




    return (
        <div>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12 }} p={1}>

                <Grid item xs={12} sm={4} md={4} >
                    <Item style={{ width: '100%', height: '100%', padding: "0" }} className='firstDashInner'>
                        <div style={{ backgroundColor: 'white', margin: '0', padding: '15px' }}>
                            <img src={GroupStuImg} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div style={{ paddingLeft: '3%' }}>
                            <p style={{ color: 'black', fontWeight: '800', fontSize: "18px", padding: '0', margin: '12px 0', fontFamily: 'cursive' }}>Total Students</p>
                            <p style={{ fontWeight: '900', color: 'black', margin: '10px 20%', fontSize: '20px', fontFamily: 'cursive' }}>{stutotal.length}</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Item style={{ width: '100%', height: '100%', padding: "0" }} className='firstDashInner'>
                        <div style={{ backgroundColor: 'white', margin: '0', padding: '5px' }}>
                            <img src={GroupTeaImg} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div style={{ paddingLeft: '3%' }}>
                            <p style={{ color: 'black', fontWeight: '800', fontSize: "18px", padding: '0', margin: '12px 0', fontFamily: 'cursive' }}>Total Teachers</p>
                            <p style={{ fontWeight: '900', color: 'black', margin: '10px 20%', fontSize: '20px', fontFamily: 'cursive' }}>12</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Item style={{ width: '100%', height: '100%', padding: "0" }} className='firstDashInner'>
                        <div style={{ backgroundColor: 'white', margin: '0', padding: '5px' }}>
                            <img src={GroupTeaImg} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div style={{ paddingLeft: '3%' }}>
                            <p style={{ color: 'black', fontWeight: '800', fontSize: "18px", padding: '0', margin: '12px 0', fontFamily: 'cursive' }}>Authority</p>
                            <p style={{ fontWeight: '900', color: 'black', margin: '10px 20%', fontSize: '20px', fontFamily: 'cursive' }}>03</p>
                        </div>
                    </Item>
                </Grid>


            </Grid>
        </div>
    );
};

export default DashboarFirst;