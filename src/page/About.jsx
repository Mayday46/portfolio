
import { motion } from "framer-motion";
import { FadeInSection } from "../utils/FadeInSection";

const About = () => {
    return (
        <div>
            <FadeInSection>
                <motion.h1 className = "text-3xl font-bold">
                    This is who I am.
                </motion.h1>
                <motion.p className = "text-sm sm:text-base leading-relaxed mb-6">
                    Part-time Debugger, Full-Time Boba Enthusiast
                </motion.p>
            </FadeInSection>
        </div>
    );
};



export default About;
