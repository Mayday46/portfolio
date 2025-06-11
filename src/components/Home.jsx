import Intro from "./Intro.jsx"

const Home = () => {
    return (
        <main>
            <section id = "home" style={{ textAlign: 'center', padding: '2rem' }}>
                {/* <h1> Hello, Winston here... </h1> */}
                <Intro />
                <p> 
                    your boba fueled Developer from nyc... 
                    trying to document the struggle of becoming a Software Engineer..
                </p>
            </section>
        </main>
    );
}

export default Home;
