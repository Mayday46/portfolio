import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";
import "../styles/Intro.css";



const Intro = () => {

    return (

        // <Fade triggerOnce direction = "down" cascade>
        //     <div id = "intro">
        //         Hi, <span className = "name"> Winston </span> here 
        //     </div>
        // </Fade>
        <div>


            <TypeAnimation
                sequence = {[
                    'Hello, Winston here ',
                    1000, // -> Pause for 1 second after typing
                ]}
                wrapper = "h1"
                cursor = {true}
                repeat = {Infinity}
                speed = {80}
                style = {{display: 'inline-block'}}
            />
            <br/>
            <TypeAnimation
                sequence = {[
                    "your boba-fueled developer from nyc...",
                    1000,
                    "trying to document the struggle of becoming software engineer.."
                ]}
                wrapper = 'h2'
                cursor = {true}
                repeat = {Infinity}
                speed = {15}
                style = {{ display: 'inline-block'}}
            
            />

        </div>


        

    )

}

export default Intro;