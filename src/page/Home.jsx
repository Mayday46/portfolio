import { motion } from "framer-motion";
import DebugConsole from "../components/DebugConsole";
import Intro from "../components/Intro.jsx";
import SpotifyPlaying from "../components/SpotifyPlaying.jsx";
import { FadeInSection } from "../utils/FadeInSection.jsx";




const Home = () => {
    return (
        <div>

            <FadeInSection>
                <Intro />
            </FadeInSection>

            <FadeInSection delay={0.5}>
                <motion.section className="mt-6">
                    <div className="bg-black text-green-400 font-mono p-6 rounded-xl shadow-md">
                        <DebugConsole />
                    </div>
                </motion.section>
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
