import * as React from 'react';
import "./Dashboard.css"
import { Link, Outlet } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));





const Dashboard = () => {
    const theme = useTheme();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };





    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: '#002B5B' }}>
                <Toolbar>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" noWrap component="div">
                            Borno Academic Care
                        </Typography>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: '#222D32',
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <div className='dashboardDiv'>
                    <DashboardIcon style={{ fontSize: '17px', marginRight: '10px', color: 'white' }}></DashboardIcon>
                    <Link to='/' style={{ color: 'white' }}>Dashboard</Link>
                </div>
                <div>
                    <Accordion id='accordionCustom'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '15px' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <div className='accordionDesign'>
                                <PersonAddIcon style={{ fontSize: '17px', marginRight: '10px' }}></PersonAddIcon>
                                <p>Student Collection</p>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails id='accordionDetail'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='add-Student'>Add Student</Link>
                                {/* <a href="addStudent" style={{ fontSize: '16px' }}>Add Student</a><br /> */}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='student-details'>Student Info</Link>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion id='accordionCustom'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '15px' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <div className='accordionDesign'>
                                <LocalAtmIcon style={{ fontSize: '17px', marginRight: '10px' }}></LocalAtmIcon>
                                <p>Fees</p>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails id='accordionDetail'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='currentfees'>Current Month</Link>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="pastfees" style={{ fontSize: '16px' }}>Previous Month</a><br />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="addfees" style={{ fontSize: '16px' }}>Add</a><br />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion id='accordionCustom'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '15px' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <div className='accordionDesign'>
                                <LocalAtmIcon style={{ fontSize: '17px', marginRight: '10px' }}></LocalAtmIcon>
                                <p>Earnings</p>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails id='accordionDetail'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='totalearn'>Running Record</Link>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='debitcredit'>Debit/Credit</Link>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="pastrecord" style={{ fontSize: '16px' }}>Previous Record</a><br />
                            </div>

                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion id='accordionCustom'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '15px' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <div className='accordionDesign'>
                                <GroupsIcon style={{ fontSize: '17px', marginRight: '10px' }}></GroupsIcon>
                                <p>Teachers</p>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails id='accordionDetail'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='add-Student'>Teacher's Details</Link>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="/" style={{ fontSize: '16px' }}>Add Teacher</a><br />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion id='accordionCustom'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '15px' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <div className='accordionDesign'>
                                <GroupsIcon style={{ fontSize: '17px', marginRight: '10px' }}></GroupsIcon>
                                <p>Author's</p>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails id='accordionDetail'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='add-Student'>Author's Details</Link>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="/" style={{ fontSize: '16px' }}>Add Author</a><br />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion id='accordionCustom'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '15px' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <div className='accordionDesign'>
                                <SchoolIcon style={{ fontSize: '17px', marginRight: '10px' }}></SchoolIcon>
                                <p>Academic</p>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails id='accordionDetail'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='add-Student'>Notice</Link>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="/" style={{ fontSize: '16px' }}>Result Sheet</a><br />

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="/" style={{ fontSize: '16px' }}>Exam Cover Page</a><br />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Accordion id='accordionCustom'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '15px' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <div className='accordionDesign'>
                                <LocalLibraryIcon style={{ fontSize: '17px', marginRight: '10px' }}></LocalLibraryIcon>
                                <p>Our Library</p>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails id='accordionDetail'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <Link to='add-Student'>Books</Link>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <KeyboardDoubleArrowRightIcon style={{ fontSize: '18px', marginRight: '10px' }}></KeyboardDoubleArrowRightIcon>
                                <a href="/" style={{ fontSize: '16px' }}>Lecture Sheet</a><br />
                            </div>

                        </AccordionDetails>
                    </Accordion>
                </div>


            </Drawer>
            <Main open={open}>
                {/* <DrawerHeader /> */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Outlet></Outlet>


                </Box>

            </Main>

        </Box >
    );
}


export default Dashboard;