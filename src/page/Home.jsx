import { motion } from "framer-motion";
import Intro from "../components/Intro.jsx";
import SpotifyPlaying from "../components/SpotifyPlaying.jsx";
import { FadeInSection } from "../utils/FadeInSection.jsx";




const Home = () => {
    return (
        <div>

            <FadeInSection>
                <Intro />
            </FadeInSection>

            <FadeInSection delay = {1}>
                <motion.section className = "mt-4">
                    <div>
                        <SpotifyPlaying />
                    </div>
                </motion.section>
            </FadeInSection>
            
        </div>
    );
}

export default Home;
