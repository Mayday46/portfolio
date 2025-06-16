import Intro from "../components/Intro.jsx";
import SpotifyPlaying from "../components/SpotifyPlaying.jsx";
import { FadeInSection } from "../utils/FadeInSection.jsx";




const Home = () => {
    return (
        <div>

            <FadeInSection>
                <Intro />
            </FadeInSection>


            <SpotifyPlaying />
            
        </div>
    );
}

export default Home;
