import React from 'react';
import './DashboardSecond.css';
import { Grid } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const DashboardSecond = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }} p={1}>

                <Grid item xs={12} sm={4} md={4} >
                    <Item style={{ width: '100%', height: '100%', padding: "0" }} className='secondDashInner1'>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2%', fontSize: "16px", backgroundColor: '#252B48', borderRadius: '5px', color: "white" }}>
                            <p style={{ fontFamily: 'cursive' }}>Total Earn</p>
                            <p style={{ fontFamily: 'cursive', paddingRight: '5%' }}>BDT: 75000000 TK</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Item style={{ width: '100%', height: '100%', padding: "0" }} className='secondDashInner1'>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2%', fontSize: "16px", backgroundColor: '#6F61C0', borderRadius: '5px', color: "white" }}>
                            <p style={{ fontFamily: 'cursive' }}>Total Expenes</p>
                            <p style={{ fontFamily: 'cursive', paddingRight: '5%' }}>BDT: 1200000 TK</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Item style={{ width: '100%', height: '100%', padding: "0" }} className='secondDashInner1'>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2%', fontSize: "16px", backgroundColor: '#5C4B99', borderRadius: '5px', color: "white" }}>
                            <p style={{ fontFamily: 'cursive' }}>Profit</p>
                            <p style={{ fontFamily: 'cursive', paddingRight: '5%' }}>BDT: 0555553 TK</p>
                        </div>
                    </Item>
                </Grid>


            </Grid>
        </div>
    );
};

export default DashboardSecond;