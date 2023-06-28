import React from 'react';
import "./ViewDetails.css";

import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ProfileDetails from '../OverView/ExtraDesign/DashboardFirstSec/ProfleDetails/ProfileDetails';
import ProfileFees from '../MoreComponents/ProfileFees/ProfileFees';


const ViewDetails = () => {



    // tab code

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };









    return (
        <div>
            <section className='details-container'>
                <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginTop: '5px' }}>Student Information</p>
                <section className='profileSection' style={{ border: '1px solid rgb(129, 111, 66) ', borderRadius: '0 30px 0 0' }}>
                    <ProfileDetails></ProfileDetails>
                </section>
                <section style={{ marginTop: '10px' }}>

                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Result" {...a11yProps(0)} />
                                <Tab label="Fees" {...a11yProps(1)} />

                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Result data not found
                        </TabPanel>
                        <TabPanel value={value} index={1}>

                            {/* profile fees code here  */}
                            <ProfileFees></ProfileFees>


                        </TabPanel>

                    </Box>
                </section>
            </section>
        </div>
    );
};

export default ViewDetails;