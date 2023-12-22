import React, { useEffect, useState } from 'react';
import './ProfileDetails.css';
import { Link, useParams } from 'react-router-dom';
import profile from "../../../../../photos/profile.jpg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';




const ProfileDetails = () => {

    let { id } = useParams()

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

    const [singStu, setSingStu] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/getAddStudent")
            .then(res => res.json())
            .then(data => setSingStu(data))

    }, [])

    const skdt = singStu.filter(eleme => eleme._id === id);
    console.log(skdt[0]?.name);
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

    // get single student here 








    return (
        <div>
            <p className='profile' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Profile  <Link to="http://localhost:3000/dashboard/student-details"> <ArrowBackIcon style={{ cursor: 'pointer', color: 'white' }} /></Link> </p>
            <div className='profile-details'>
                <div>
                    <div className='profileImage'>
                        <img src={img} alt="" />
                    </div>

                    {/* <input
                        type="file"
                        accept='image/'
                        onChange={uploadImage}
                    /> */}
                </div>
                <div>
                    <div className='stu-nam-cl'>
                        <p>Name: {skdt[0]?.name}</p>
                    </div>
                    <div className='stu-pic-cl'>
                        <div>
                            <p>ID:{skdt[0]?.sId}</p>
                        </div>
                        <div>
                            <p>Class: {skdt[0]?.class}</p>
                        </div>
                        <div>
                            <p>Fees:{skdt[0]?.fees}</p>

                        </div>
                    </div>
                    <div className='stu-cnt-cl'>
                        <p>Contact: {skdt[0]?.fatherMobile}</p>
                    </div>
                    {/* tab section  */}
                    <section style={{ marginTop: '10px' }}>

                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Academic Info" {...a11yProps(0)} style={{ fontFamily: 'cursive', fontWeight: 'bold' }} />
                                    <Tab label="Personal Info" {...a11yProps(1)} style={{ fontFamily: 'cursive', fontWeight: 'bold' }} />

                                </Tabs>
                            </Box>

                            {/* academic info  */}
                            <TabPanel value={value} index={0}>
                                <div style={{ backgroundColor: '#E1ECC8', margin: '0', display: 'grid', gridTemplateColumns: '33% 33% 33%', padding: '5px' }}>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Class: BSc</p>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Group: Science</p>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Id: 0920754666</p>

                                </div>
                                <div style={{ backgroundColor: 'white', padding: '2px' }}>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Institute Name: World University of Bangladesh</p>
                                </div>

                                <div style={{ backgroundColor: '#E1ECC8', padding: '2px' }}>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Fees: 2000 BDT</p>
                                </div>

                            </TabPanel>

                            {/* personal info  */}
                            <TabPanel value={value} index={1}>
                                <div style={{ backgroundColor: '#E1ECC8', margin: '0', display: 'grid', gridTemplateColumns: '50% 50%', padding: '5px' }}>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Father's Name: Md Joynal Abedin</p>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', marginLeft: '20%', fontFamily: 'cursive' }}>Mobile: 01626205938</p>
                                </div>
                                <div style={{ backgroundColor: 'white', margin: '0', display: 'grid', gridTemplateColumns: '50% 50%', padding: '5px' }}>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Mother's Name: Mst Parvin</p>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', marginLeft: '20%', fontFamily: 'cursive' }}>Mobile: 01626205938</p>
                                </div>
                                <div style={{ backgroundColor: '#E1ECC8', margin: '0', display: 'grid', gridTemplateColumns: '50% 50%', padding: '5px' }}>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Local Guardian: Mst Parvin</p>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', marginLeft: '20%', fontFamily: 'cursive' }}>Mobile: 01626205938</p>
                                </div>
                                <div style={{ backgroundColor: 'white', padding: '2px' }}>
                                    <p style={{ margin: '0', color: '#213363', fontWeight: '600', fontSize: '15px', fontFamily: 'cursive' }}>Address: Modinapara</p>
                                </div>
                            </TabPanel>

                        </Box>
                    </section>








                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;