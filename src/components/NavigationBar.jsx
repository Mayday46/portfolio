import { Link } from 'react-router-dom';

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
};

export default NavigationBar;