import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ProjectsPage from '../../pages/ProjectsPage';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import backgroundImage from '../../assets/images/journalBackgroundCover.jpg';

const StyledJournalContainer = styled(Box)(({ theme, isHomePage }) => ({
    backgroundImage: isHomePage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '85vh',
    width: `calc(85vh * (4 / 5))`, // width is 2/5 of the height
    margin: '7.5vh auto',
    padding: theme.spacing(.5),
    borderRadius: '12px',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 10px 10px 30px rgba(0, 0, 0, 0.5)',
   
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));


const Journal = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [pages, setPages] = useState([
        { path: "/", component: HomePage, title: "Home", next: "/about" },
        { path: "/about", component: AboutPage, title: "About", next: "/projects" },
        { path: "/projects", component: ProjectsPage, title: "Projects", next: "/" },
    ]);

    return (
        <StyledJournalContainer isHomePage={isHomePage}>
            <Routes>
                {pages.map(page => (
                    <Route key={page.path} path={page.path} element={<page.component nextPage={page.next} />} />
                ))}
            </Routes>
        </StyledJournalContainer>
    );
};

export default Journal;
