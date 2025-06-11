import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import "../styles/Intro.css";



const Intro = () => {

    return (
        <Fade triggerOnce direction = "down" cascade>
            <div id = "intro">
                Hi, <span className = "name"> Winston </span> here 
            </div>
        </Fade>
    )

}

export default Intro;