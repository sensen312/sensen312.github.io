import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledJournalPage = styled(Paper)(({ theme, isCover }) => ({
    height: 'calc(100% - 40px)',
    backgroundColor: isCover ? 'transparent' : '#f8f0e3',
    padding: theme.spacing(2.5),
    border: isCover ? 'none' : '1px solid #f8f0e3',
    boxShadow: isCover ? 'none' : 'inset 0 0 10px #987652',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isCover ? 'center' : 'flex-start',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    borderBottom: '1px solid #bbb',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontSize: '1.5rem',
    color: '#333',
    fontFamily: '"Cinzel", serif',
    textAlign: 'center'
}));

// creates lines on the background of the journal page
const ContentArea = styled('div')(({ theme, isCover }) => ({
    flexGrow: 1,
    overflowY: isCover ? 'hidden' : 'auto',
    background: isCover ? 'none' : 'repeating-linear-gradient(#f8f0e3, #f8f0e3 23px, #000 24px)',
    width: '100%', // Ensure it takes up full available width without expanding
    maxWidth: '100%', // Prevent any overflow beyond the parent width
    minWidth: '100%',
    fontFamily: '"Cinzel", serif',
    color: '#333',
    lineHeight: '24px', // Matches the lined background line height
    fontSize: '1.3rem', // Ensures the text size fits on the lines
}));

// Styled IconButton with arrow
const ArrowButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: 'none', // Match the paper background color
    color: '#333',
    border: '4px solid #987652',
    boxShadow: '2px 2px 0px 1px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        backgroundColor: '#e0d7c9',
        boxShadow: '2px 2px 0px 1px rgba(0, 0, 0, 0.2)',
    },
}));

const JournalPage = ({ title, children, nextPage, isCover = false }) => {
    const navigate = useNavigate();

    return (
        <StyledJournalPage isCover={isCover}>
            {!isCover && <StyledTypography variant="h5" component="h2">{title}</StyledTypography>}
            <ContentArea isCover={isCover}>
                {children}
            </ContentArea>
            {nextPage && (
              <ArrowButton onClick={() => navigate(nextPage)}>
                  <ArrowForward />
              </ArrowButton>
            )}
        </StyledJournalPage>
    );
};

export default JournalPage;
