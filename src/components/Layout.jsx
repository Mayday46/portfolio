import { useTheme } from '../context/ThemeContext';

export const Layout = ({ children }) => {
    const { currentTheme } = useTheme();

    return (
        <div
        className="min-h-screen transition-colors duration-200"
        style={{ backgroundColor: currentTheme.bg.primary }}
        >
        {children}
        </div>
    );
};