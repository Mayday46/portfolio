import { TypeAnimation } from 'react-type-animation';
import "../styles/Intro.css";
import { motion } from "framer-motion";
import { FadeInSection } from "../utils/FadeInSection.jsx";
import { Fade } from 'react-awesome-reveal';



const Intro = () => {

    return (

        <div>
            <FadeInSection>
                <section>
                    <motion.div
                        initial = {{ opacity: 0, y: 20 }}
                        animate = {{ opacity: 1, y: 0 }}
                        transition = {{ duration: 0.5 }}
                        // className = "text-sm sm:text-base leading-relaxed"
                        className = "text-2xl sm:text-3xl font-bold"
                    >
                        <TypeAnimation 
                            sequence = {[
                                'Hello, Winston here',
                            ]}
                            wrapper = "h1"
                            cursor = {true}
                            repeat = {Infinity}
                            speed = {50}
                            style = {{
                                display: 'inline-block ',
                                color: '#000000'
                            }}
                        />
                    </motion.div>
                    <motion.p
                        initial = {{ opacity: 0, y: 20 }}
                        animate = {{ opacity: 1, y: 0 }}
                        transition = {{ duration: 0.5, delay: 1.2 }}
                        className = "text-sm sm:text-base leading-relaxed"
                    >
                        your boba-fueled web developer from nyc documenting the struggle of becoming software engineer...
                    </motion.p>
                </section>
            </FadeInSection>

        </div>

    )

}

export default Intro;