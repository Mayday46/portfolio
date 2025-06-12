import Intro from "../components/Intro.jsx"
import  { motion } from "framer-motion";
import { FadeInSection } from "../utils/FadeInSection.jsx";


const Home = () => {
    return (
        <div>
            <section id = "home" style={{ padding: '2rem' }}>
                <Intro />
                <br/>
                <motion.div 
                    initial = {{ opacity: 0, y: 20}}
                    animate = {{ opacity: 1, y: 0}}
                    transition = {{ duration: 0.5, y: 1.2}}
                    className = "text-sm sm:text-base leading-relaxed"
                >
                    you boba-fueled web developer from nyc trying to document the struggle of becoming software engineer...
                </motion.div>

            </section>
        </div>
    );
}

export default Home;
