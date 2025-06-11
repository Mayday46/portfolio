
const Footer = () => {

    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        marginTop: 'auto',
    }

    return (
        <div style = {footerStyle}>
            <p>
                © {new Date().getFullYear()} All rights reserved.
            </p>
        </div>
    );
}


export default Footer;