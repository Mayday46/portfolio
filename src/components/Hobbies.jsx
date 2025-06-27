// components/Hobbies.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import HobbiesData from '../data/HobbiesData.jsx';
import { useInView } from '../hooks/useInView.js';
import { sectionVariants, titleVariants } from '../utils/animations.jsx';

const FadeInSection = ({ children }) => {
    const { ref, isInView } = useInView();

    return (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
    >
        {children}
    </motion.div>
    );
};

const Hobbies = () => {
    const [hoverIndex, setHoveredIndex] = useState(null);

    return (
    <div className="space-y-6">
        {HobbiesData.map((item, index) => (
        <FadeInSection key={item.title}>
            <motion.section
            className="space-y-1 rounded-xl overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: hoverIndex === null || hoverIndex === index ? 1 : 0.5,
                scale: hoverIndex === index ? 1.02 : 1,
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            >
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 cursor-default"
                variants={sectionVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transformOrigin: 'center left' }}
            >
                <motion.h2
                className="text-lg font-semibold pt-4 cursor-default"
                variants={titleVariants}
                >
                {item.title}
                </motion.h2>
                <motion.div
                className="transition-all p-4 sm:p-4 cursor-default"
                initial={false}
                animate={{ y: 0 }}
                >
                {item.content}
                </motion.div>
            </motion.div>
            </motion.section>
        </FadeInSection>
        ))}
    </div>
    );
};

export default Hobbies;
