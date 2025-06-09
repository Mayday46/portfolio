
const Footer = () => {

    const footerStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '45%',
        bottom: '0%',
        alignItems: 'center',
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