import { motion } from "framer-motion";
import Intro from "../components/Intro.jsx";
import SpotifyPlaying from "../components/SpotifyPlaying.jsx";
import { FadeInSection } from "../utils/FadeInSection.jsx";


const Home = () => {
    return (
        <div>
            <section id = "home" style={{ padding: '2rem' }}>
                <Intro />
            </section>

            <FadeInSection>
                <motion.div>
                    <div>
                        <SpotifyPlaying />
                    </div>
                </motion.div>
            </FadeInSection>
        </div>
    );
}

export default Home;
