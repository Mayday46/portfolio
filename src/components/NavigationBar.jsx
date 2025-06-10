
const NavigationBar = () => {

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1rem',

    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '8px 12px',
        border: '1px solid lightgray',
        borderRadius: '6px',
    }


    return (
        <nav style = {navStyle}>
            <a style = {linkStyle} > Home </a>
            <a style = {linkStyle} > About </a>
            <a style = {linkStyle} > Projects </a>
            <a style = {linkStyle} > Contact </a>
        </nav>
    );
}


export default NavigationBar;