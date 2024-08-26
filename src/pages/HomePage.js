// src/pages/HomePage.js
import React from 'react';
import JournalPage from '../components/JournalPage/JournalPage';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/images/LOGO.png';

const StyledHomePage = styled('div')(({ theme }) => ({
    textAlign: 'center',
    
    fontFamily: '"Cinzel", serif',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
}));

const HomePage = () => {
    return (
        <JournalPage title="Home" nextPage="/about" isCover={true}>
            <StyledHomePage>
                <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '3rem', letterSpacing: 1, color: 'white' }}>Arsen's Webpages</Typography>
                <Typography variant="h5" sx={{ marginBottom: 3, color: 'white' }}>Journal 1</Typography>
                <img src={logo} alt="Logo" style={{ width: '200px', height: '200px' }} />
            </StyledHomePage>
        </JournalPage>
    );
};

export default HomePage;
