
import { useEffect, useState } from 'react';
import Hobbies from '../components/Hobbies.jsx';
import Intro from "../components/Intro.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import Timeline from '../components/Timeline.jsx';
import projectsData from '../data/MyProjects.jsx';
import { FadeInSection } from "../utils/FadeInSection";



const About = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        }

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);

    }, [])

    return (
        <div>
            <FadeInSection>
                <Intro
                    heading = "This is who I am..."
                    subheading = "writing code, sipping tea, and figuring things out along the way."
                />
            </FadeInSection>

            <FadeInSection delay = {0.2}>
                <PhotoGallery isMobile = {isMobile}/>
            </FadeInSection>

            <FadeInSection delay = {0.4}>
                <Timeline />
            </FadeInSection>

            <FadeInSection delay = {0.5}>
                {projectsData.map((section) => (
                    <div key = {section.title}>
                        <h2 className = "text-xl font-bold mb-4">
                            {section.title}
                        </h2>
                    </div>
                ))}
            </FadeInSection>

            <FadeInSection delay = {0.6}>
                <Hobbies />
            </FadeInSection>
        </div>
    );
};



export default About;
