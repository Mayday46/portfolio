
import Project from "../components/Project";

const projectsData = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects and skills.",
        tech: [
            { name: "React", color: "blue" },
            { name: "Tailwind CSS", color: "teal" },
            { name: "JavaScript", color: "yellow" },
            { name: "Spotify API", color: "green" }
        ],
        link: "www.google.com"
    },

    {
        title: "Trending Movies App",
        description: "An app that displays trending movies using the TMDB API.",
        tech: [
            { name: "React", color: "blue" },
            { name: "Tailwind CSS", color: "teal" },
            { name: "TMDB API", color: "yellow" },
            { name: "JavaScript", color: "green" }
        ],
        link: "www.google.com"
    }
];

const MyProjects = [{
    title: 'My Projects',
    content: (
        <div className = "space-y-4">
            {projectsData.map((project) => (
                <Project key={project.title} project={project} />
            ))}
        </div>
    )
}]

export default MyProjects;