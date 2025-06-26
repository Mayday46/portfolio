import { motion } from 'framer-motion';
// import { FadeInSection } from '../utils/FadeInSection.jsx';
import { useState } from 'react';
import CareerTimelineData from '../data/CareerTimelineData.jsx';
import { useInView } from '../hooks/useInView.js';
import { sectionVariants, titleVariants } from '../utils/animations.jsx';


const FadeInSection = ({ children }) => {
    const { ref, isInView } = useInView();

    return (
        <motion.div
            ref = { ref }
            initial = {{ opacity: 0, y: 20 }}
            animate = { isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50} }
            transition = {{ duration: 1 }}
        >
            { children }

        </motion.div>
    );
}

const Timeline = () => {

    const [hoverIndex, setHoveredIndex] = useState(null);

    return (
        <div className="space-y-6">
            {CareerTimelineData.map((item, index) => (
                <FadeInSection key = { item.title }>
                    <motion.section
                        className = "space-y-1 rounded-xl overflow-hidden cursor-default"
                        initial = {{ opacity: 0, y: 20 }}
                        animate = {{
                            opacity: hoverIndex === null || hoverIndex === index ? 1 : 0.5,
                            scale: hoverIndex === null ? 1.02 : 1
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.1
                        }}
                    >
                        <motion.div
                            className = "grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 cursor-default"
                            variants = { sectionVariants }
                            onMouseEnter = { () => setHoveredIndex(index) }
                            onMouseLeave = { () => setHoveredIndex(null) }
                            style = {{ transformOrigin: 'center left' }}
                        >
                            <motion.h2
                                className = "text-lg font-semibold pt-4 cursor-default"
                                variants={ titleVariants }
                            >
                                { item.title }
                            </motion.h2>
                            {/* { item.title === "Timeline" ? (
                                <div className = "relative pl-4 pt-4">
                                    <div className = "absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                                        { item.content }
                                </div>
                            ) : (
                                <motion.div
                                    className = "transition-all p-4 sm:p-4 cursor-default"
                                    initial = { false }
                                    animate = {{y: 0}}
                                >
                                    { item.content }
                                </motion.div>
                            )} */}
                            <motion.div
                                className = "transition-all p-4 sm:p-4 cursor-default"
                                initial = { false }
                                animate = {{ y: 0 }}
                            >
                                <motion.div className = "relative pl-4 pt-4">
                                    <div className = {`absolute left-0 top-0 bottom-0 w-px ${item.dotColor} bg-gray-200 dark:bg-gray-700`} />
                                        { item.content }
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </motion.section>
                </FadeInSection>
            ))}
        </div>

    );

}

export default Timeline;