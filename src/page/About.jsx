
import Intro from "../components/Intro.jsx";
import { FadeInSection } from "../utils/FadeInSection";

const About = () => {
    return (
        <div>
            <FadeInSection>
                <Intro
                    heading = "This is who I am..."
                    subheading = "writing code, sipping tea, and figuring things out along the way."
                />
            </FadeInSection>
        </div>
    );
};



export default About;
