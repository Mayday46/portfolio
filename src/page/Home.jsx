import Intro from "../components/Intro.jsx"
import  { motion } from "framer-motion";
import { FadeInSection } from "../utils/FadeInSection.jsx";


const Home = () => {
    return (
        <div>
            <section id = "home" style={{ padding: '2rem' }}>
                <Intro />


            </section>
        </div>
    );
}

export default Home;
