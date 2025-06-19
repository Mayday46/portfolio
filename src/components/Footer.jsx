
import { motion } from 'framer-motion';

const Footer = () => {

    const socialLinks = [
        {
            name: 'Github',
            url: 'https://github.com/Mayday46',
            icon: (
                <svg className = "w-5 h-5" fill = "currentColor" viewBox = "0 0 24 24">
                    <path fillRule = "evenodd" clipRule = "evenodd" d = "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            )
        },

        {
            name: 'Spotify',
            url: 'https://open.spotify.com/user/22ag5kcjye6eut7jhqnruujoy',
            icon: (
                <svg className = "w-5 h-5" fill = "currentColor" viewBox = "0 0 24 24">
                    <path d = "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className = "mb-5">
            <div className = "container-width">
                <div className = "flex flex-col items-center justify-center space-y-3">
                    <div className = "flex flex-wrap items-center justify-center gap-6 px-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key = {social.name}
                                href = {social.url}
                                target = "_blank"
                                rel = "noopener noreferrer"
                                className = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                whileHover = {{ scale: 1.1 }}
                                whileTap = {{ scale: 0.9 }}
                                aria-label = {social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}

                    </div>
                    <p className = "text-xs text-gray-500 dark:text-gray-400 text-center px-4">
                        @ {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}


export default Footer;