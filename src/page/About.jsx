
import { motion } from "framer-motion";
import { FadeInSection } from "../utils/FadeInSection";

const About = () => {
    return (
        <div>
            <FadeInSection>
                <motion.h1 className = "text-3xl font-bold">
                    About Me
                </motion.h1>
            </FadeInSection>
        </div>
    );
};



export default About;
