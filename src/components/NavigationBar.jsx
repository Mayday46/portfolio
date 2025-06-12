import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { theme } from "../styles/theme";

const NavigationBar = () => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1rem',
    };

    const linkStyle = {
        textDecoration: 'none',
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '8px 12px',
        border: '1px solid lightgray',
        borderRadius: '6px',
    };

    return (
        <nav style = {navStyle}>
        <Link to = "/" style = {linkStyle}> Home </Link>
        <Link to = "/about" style = {linkStyle}> About </Link>
        <Link to = "/projects" style = {linkStyle}> Projects </Link>
        <Link to = "/contact" style = {linkStyle}> Contact </Link>
        </nav>
    );

    // const { isDarkMode, toggleTheme } = useTheme();
    // const location = useLocation();
    // const [activeTab, setActiveTab] = useState(location.pathname)
    // const currentTheme = isDarkMode ? theme.dark : theme.light;

    // useEffect(() => {
    //     setActiveTab(location.pathname);
    // }, [])

    // const navItems = [
    //     { path: '/', label: 'Home' },
    //     { path: '/about', label: 'About' },
    //     { path: '/projects', label: 'Project' },
    //     { path: '/contact', label: 'Contact' },
    // ];




};

export default NavigationBar;