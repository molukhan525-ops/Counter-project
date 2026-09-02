import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SpeedIcon from '@mui/icons-material/Speed';

const pages = ['Home', 'About', 'Services', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavbarMui() {

    // =====================================================
    // NAVIGATION STATES
    // =====================================================

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // =====================================================
    // PROFILE STATES
    // =====================================================

    const [profileOpen, setProfileOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);

    // =====================================================
    // PROFILE DATA
    // =====================================================

    const [profile, setProfile] = React.useState({
        name: 'Abdul Rehman',
        username: '@abdulrehman',
        email: 'abdul@example.com',
        accountType: 'Premium User',
        memberSince: 'August 2026'
    });

    const [editData, setEditData] = React.useState(profile);

    // =====================================================
    // NAV MENU
    // =====================================================

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // =====================================================
    // USER MENU
    // =====================================================

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // =====================================================
    // PROFILE
    // =====================================================

    const handleProfileClick = () => {
        setAnchorElUser(null);
        setProfileOpen(true);
    };

    const handleProfileClose = () => {
        setProfileOpen(false);
    };

    // =====================================================
    // EDIT PROFILE
    // =====================================================

    const handleEditProfile = () => {
        setEditData(profile);
        setProfileOpen(false);
        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
    };

    // =====================================================
    // INPUT CHANGE
    // =====================================================

    const handleChange = (event) => {

        const { name, value } = event.target;

        setEditData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    // =====================================================
    // SAVE PROFILE
    // =====================================================

    const handleSaveProfile = () => {

        setProfile(editData);

        setEditOpen(false);

        setProfileOpen(true);
    };

    return (
        <>
            {/* =====================================================
                              NAVBAR
            ===================================================== */}

            <AppBar
                position="static"
                elevation={0}
                sx={{
                    background: 'rgba(10, 30, 55, 0.88)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',

                    borderBottom:
                        '1px solid rgba(255,255,255,0.14)',

                    boxShadow:
                        '0 8px 30px rgba(0,0,0,0.18)',

                    position: 'relative',

                    overflow: 'hidden',

                    '&::after': {
                        content: '""',

                        position: 'absolute',

                        top: 0,
                        left: '-100%',

                        width: '45%',
                        height: '2px',

                        background:
                            'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',

                        animation:
                            'navbarShine 5s linear infinite'
                    },

                    '@keyframes navbarShine': {

                        '0%': {
                            left: '-100%'
                        },

                        '50%': {
                            left: '120%'
                        },

                        '100%': {
                            left: '120%'
                        }
                    }
                }}
            >

                <Container maxWidth="xl">

                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: '68px !important'
                        }}
                    >

                        {/* =================================================
                                      DESKTOP LOGO
                        ================================================= */}

                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'flex'
                                },

                                alignItems: 'center',

                                mr: 4,

                                cursor: 'pointer',

                                '&:hover .logoIcon': {
                                    transform:
                                        'rotate(-8deg) scale(1.15)'
                                },

                                '&:hover .logoText': {
                                    letterSpacing:
                                        '0.4rem'
                                }
                            }}
                        >

                            <Box
                                className="logoIcon"
                                sx={{
                                    width: 42,
                                    height: 42,

                                    borderRadius: '13px',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                    background:
                                        'linear-gradient(135deg, #1976d2, #42a5f5)',

                                    boxShadow:
                                        '0 6px 20px rgba(25,118,210,0.45)',

                                    mr: 1.2,

                                    transition:
                                        'all 0.35s ease'
                                }}
                            >
                                <DirectionsCarIcon
                                    sx={{
                                        color: 'white',
                                        fontSize: 27
                                    }}
                                />
                            </Box>

                            <Typography
                                className="logoText"
                                sx={{
                                    color: 'white',

                                    fontFamily:
                                        'monospace',

                                    fontWeight: 900,

                                    letterSpacing:
                                        '.3rem',

                                    fontSize: 20,

                                    transition:
                                        'all 0.35s ease'
                                }}
                            >
                                CARX
                            </Typography>

                        </Box>


                        {/* =================================================
                                      MOBILE MENU
                        ================================================= */}

                        <Box
                            sx={{
                                flexGrow: 1,

                                display: {
                                    xs: 'flex',
                                    md: 'none'
                                }
                            }}
                        >

                            <IconButton
                                onClick={handleOpenNavMenu}
                                sx={{
                                    color: 'white',

                                    border:
                                        '1px solid rgba(255,255,255,0.18)',

                                    borderRadius: 2,

                                    transition:
                                        'all 0.3s ease',

                                    '&:hover': {
                                        background:
                                            'rgba(255,255,255,0.12)',

                                        transform:
                                            'rotate(5deg)'
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>


                            <Menu
                                anchorEl={anchorElNav}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}

                                PaperProps={{
                                    sx: {
                                        mt: 1,

                                        borderRadius: 3,

                                        background:
                                            'rgba(20,35,55,0.96)',

                                        backdropFilter:
                                            'blur(15px)',

                                        color: 'white',

                                        boxShadow:
                                            '0 15px 40px rgba(0,0,0,0.3)'
                                    }
                                }}
                            >

                                {pages.map((page) => (

                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            minWidth: 180,

                                            borderRadius: 2,

                                            mx: 0.5,

                                            transition:
                                                'all 0.25s ease',

                                            '&:hover': {
                                                background:
                                                    'rgba(25,118,210,0.25)',

                                                paddingLeft:
                                                    '25px'
                                            }
                                        }}
                                    >
                                        {page}
                                    </MenuItem>

                                ))}

                            </Menu>

                        </Box>


                        {/* =================================================
                                      MOBILE LOGO
                        ================================================= */}

                        <Box
                            sx={{
                                display: {
                                    xs: 'flex',
                                    md: 'none'
                                },

                                alignItems: 'center',

                                flexGrow: 1
                            }}
                        >

                            <DirectionsCarIcon
                                sx={{
                                    color: '#42a5f5',
                                    mr: 1
                                }}
                            />

                            <Typography
                                sx={{
                                    color: 'white',
                                    fontFamily: 'monospace',
                                    fontWeight: 900,
                                    letterSpacing: '.25rem'
                                }}
                            >
                                CARX
                            </Typography>

                        </Box>


                        {/* =================================================
                                  DESKTOP NAVIGATION
                        ================================================= */}

                        <Box
                            sx={{
                                flexGrow: 1,

                                display: {
                                    xs: 'none',
                                    md: 'flex'
                                },

                                gap: 0.5
                            }}
                        >

                            {pages.map((page) => (

                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}

                                    sx={{
                                        position: 'relative',

                                        color: 'rgba(255,255,255,0.88)',

                                        px: 2,

                                        py: 1.2,

                                        borderRadius: 2,

                                        fontSize: 14,

                                        fontWeight: 600,

                                        overflow: 'hidden',

                                        transition:
                                            'all 0.3s ease',

                                        '&::after': {
                                            content: '""',

                                            position:
                                                'absolute',

                                            bottom: 5,

                                            left: '50%',

                                            width: 0,

                                            height: 2,

                                            borderRadius: 2,

                                            background:
                                                '#42a5f5',

                                            transform:
                                                'translateX(-50%)',

                                            transition:
                                                'width 0.3s ease'
                                        },

                                        '&:hover': {
                                            color: 'white',

                                            background:
                                                'rgba(255,255,255,0.08)',

                                            transform:
                                                'translateY(-2px)'
                                        },

                                        '&:hover::after': {
                                            width: '55%'
                                        }
                                    }}
                                >
                                    {page}
                                </Button>

                            ))}

                        </Box>


                        {/* =================================================
                                      PROFILE AVATAR
                        ================================================= */}

                        <Box
                            sx={{
                                flexGrow: 0,

                                position: 'relative'
                            }}
                        >

                            {/* Animated Ring */}

                            <Box
                                sx={{
                                    position: 'absolute',

                                    inset: -4,

                                    borderRadius: '50%',

                                    border:
                                        '2px solid rgba(66,165,245,0.7)',

                                    animation:
                                        'avatarPulse 2.2s ease-in-out infinite',

                                    pointerEvents: 'none',

                                    '@keyframes avatarPulse': {

                                        '0%, 100%': {
                                            transform:
                                                'scale(1)',
                                            opacity: 0.6
                                        },

                                        '50%': {
                                            transform:
                                                'scale(1.12)',
                                            opacity: 0.15
                                        }
                                    }
                                }}
                            />

                            <Tooltip title="Open profile">

                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{
                                        p: 0,

                                        position:
                                            'relative',

                                        transition:
                                            'all 0.3s ease',

                                        '&:hover': {
                                            transform:
                                                'scale(1.08)'
                                        }
                                    }}
                                >

                                    <Avatar
                                        alt="User"

                                        src="https://static.vecteezy.com/system/resources/thumbnails/053/733/048/small/modern-car-captured-in-close-upgraphy-with-precision-and-innovation-free-photo.jpg"

                                        sx={{
                                            width: 43,
                                            height: 43,

                                            border:
                                                '2px solid rgba(255,255,255,0.8)',

                                            boxShadow:
                                                '0 5px 20px rgba(0,0,0,0.3)'
                                        }}
                                    />

                                </IconButton>

                            </Tooltip>


                            {/* =================================================
                                      USER DROPDOWN
                            ================================================= */}

                            <Menu
                                sx={{
                                    mt: '48px'
                                }}

                                anchorEl={anchorElUser}

                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}

                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}

                                open={Boolean(anchorElUser)}

                                onClose={handleCloseUserMenu}

                                PaperProps={{
                                    sx: {
                                        mt: 1,

                                        minWidth: 180,

                                        borderRadius: 3,

                                        background:
                                            'rgba(255,255,255,0.94)',

                                        backdropFilter:
                                            'blur(15px)',

                                        boxShadow:
                                            '0 15px 40px rgba(0,0,0,0.22)',

                                        overflow: 'hidden'
                                    }
                                }}
                            >

                                {settings.map((setting) => (

                                    <MenuItem
                                        key={setting}

                                        onClick={
                                            setting === 'Profile'
                                                ? handleProfileClick
                                                : handleCloseUserMenu
                                        }

                                        sx={{
                                            py: 1.4,

                                            px: 2,

                                            transition:
                                                'all 0.25s ease',

                                            '&:hover': {
                                                background:
                                                    'rgba(25,118,210,0.10)',

                                                paddingLeft:
                                                    '25px'
                                            }
                                        }}
                                    >

                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                fontWeight: 500
                                            }}
                                        >
                                            {setting}
                                        </Typography>

                                    </MenuItem>

                                ))}

                            </Menu>

                        </Box>

                    </Toolbar>

                </Container>

            </AppBar>


            {/* =====================================================
                              PROFILE DRAWER
            ===================================================== */}

            <Drawer
                anchor="right"
                open={profileOpen}
                onClose={handleProfileClose}
            >

                <Box
                    sx={{
                        width: {
                            xs: '100vw',
                            sm: 400
                        },

                        height: '100%',

                        background:
                            'linear-gradient(180deg,#f8fbff,#ffffff)'
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                            px: 2,
                            py: 1.5,

                            background:
                                'linear-gradient(135deg,#0d47a1,#1976d2)',

                            color: 'white'
                        }}
                    >

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <SpeedIcon />

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800
                                }}
                            >
                                My Profile
                            </Typography>
                        </Box>

                        <IconButton
                            onClick={handleProfileClose}
                            sx={{
                                color: 'white'
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                    </Box>


                    <Box
                        sx={{
                            textAlign: 'center',
                            px: 3,
                            pt: 4,
                            pb: 3
                        }}
                    >

                        <Avatar
                            sx={{
                                width: 115,
                                height: 115,
                                margin: 'auto',

                                border:
                                    '4px solid #1976d2',

                                boxShadow:
                                    '0 8px 30px rgba(25,118,210,0.25)'
                            }}

                            src="https://static.vecteezy.com/system/resources/thumbnails/053/733/048/small/modern-car-captured-in-close-upgraphy-with-precision-and-innovation-free-photo.jpg"
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                mt: 2,
                                fontWeight: 800
                            }}
                        >
                            {profile.name}
                        </Typography>

                        <Typography
                            sx={{
                                color: 'gray',
                                mt: 0.5
                            }}
                        >
                            {profile.username}
                        </Typography>

                    </Box>


                    <Divider />


                    <Box sx={{ px: 3, py: 3 }}>

                        <Typography
                            variant="body2"
                            sx={{ color: 'gray' }}
                        >
                            Email
                        </Typography>

                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 3
                            }}
                        >
                            {profile.email}
                        </Typography>


                        <Typography
                            variant="body2"
                            sx={{ color: 'gray' }}
                        >
                            Account Type
                        </Typography>

                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 3
                            }}
                        >
                            {profile.accountType}
                        </Typography>


                        <Typography
                            variant="body2"
                            sx={{ color: 'gray' }}
                        >
                            Member Since
                        </Typography>

                        <Typography
                            sx={{
                                fontWeight: 600
                            }}
                        >
                            {profile.memberSince}
                        </Typography>

                    </Box>


                    <Divider />


                    <Box sx={{ px: 3, py: 3 }}>

                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<EditIcon />}
                            onClick={handleEditProfile}

                            sx={{
                                py: 1.3,

                                borderRadius: 2,

                                textTransform: 'none',

                                fontWeight: 700,

                                background:
                                    'linear-gradient(135deg,#1976d2,#42a5f5)',

                                boxShadow:
                                    '0 8px 25px rgba(25,118,210,0.25)',

                                transition:
                                    'all 0.3s ease',

                                '&:hover': {
                                    transform:
                                        'translateY(-3px)',

                                    boxShadow:
                                        '0 12px 30px rgba(25,118,210,0.35)'
                                }
                            }}
                        >
                            Edit Profile
                        </Button>

                    </Box>

                </Box>

            </Drawer>


            {/* =====================================================
                              EDIT PROFILE DRAWER
            ===================================================== */}

            <Drawer
                anchor="right"
                open={editOpen}
                onClose={handleEditClose}
            >

                <Box
                    sx={{
                        width: {
                            xs: '100vw',
                            sm: 450
                        },

                        height: '100%',

                        background: '#f7f9fc'
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',

                            gap: 1,

                            px: 2,
                            py: 1.5,

                            background:
                                'linear-gradient(135deg,#0d47a1,#1976d2)',

                            color: 'white'
                        }}
                    >

                        <IconButton
                            onClick={() => {
                                setEditOpen(false);
                                setProfileOpen(true);
                            }}

                            sx={{
                                color: 'white'
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>


                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800
                            }}
                        >
                            Edit Profile
                        </Typography>

                    </Box>


                    <Box sx={{ p: 3 }}>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 800,
                                mb: 1
                            }}
                        >
                            Update your profile
                        </Typography>


                        <Typography
                            variant="body2"
                            sx={{
                                color: 'gray',
                                mb: 4
                            }}
                        >
                            Yahan se apni profile information change karo.
                        </Typography>


                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            value={editData.name}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />


                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={editData.username}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />


                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={editData.email}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />


                        <TextField
                            fullWidth
                            label="Account Type"
                            name="accountType"
                            value={editData.accountType}
                            onChange={handleChange}
                            sx={{ mb: 3 }}
                        />


                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            startIcon={<SaveIcon />}
                            onClick={handleSaveProfile}

                            sx={{
                                py: 1.5,

                                borderRadius: 2,

                                textTransform: 'none',

                                fontWeight: 700,

                                background:
                                    'linear-gradient(135deg,#1976d2,#42a5f5)',

                                transition:
                                    'all 0.3s ease',

                                '&:hover': {
                                    transform:
                                        'translateY(-3px)',

                                    boxShadow:
                                        '0 10px 25px rgba(25,118,210,0.3)'
                                }
                            }}
                        >
                            Save Changes
                        </Button>


                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={handleEditClose}

                            sx={{
                                mt: 1.5,

                                py: 1.3,

                                borderRadius: 2,

                                textTransform: 'none',

                                transition:
                                    'all 0.3s ease',

                                '&:hover': {
                                    transform:
                                        'translateY(-2px)'
                                }
                            }}
                        >
                            Cancel
                        </Button>

                    </Box>

                </Box>

            </Drawer>

        </>
    );
}

export default NavbarMui;