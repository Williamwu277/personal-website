import type { Metadata } from "next";
import ProjectView from "../../ui/projectView";
import Emphasis from "../../ui/emphasis";
import portfolioAdmissed from "../../assets/portfolioAdmissed.jpg";
import portfolioAAC from "../../assets/portfolioAAC.jpg";
import portfolioCowsVsDucks from "../../assets/portfolioCowsVsDucks.jpg";
import portfolioEyedentify from "../../assets/portfolioEyedentify.jpg";
import portfolioFriendbot from "../../assets/portfolioFriendbot.jpg";
import portfolioLayoffEvaders from "../../assets/portfolioLayoffEvaders.jpg";
import portfolioLemonAid from "../../assets/portfolioLemonAid.jpg";
import portfolioPicture from "../../assets/portfolioPicture.jpg";
import portfolioRePromptThat from "../../assets/portfolioRePromptThat.jpg";
import portfolioWatoRover from "../../assets/portfolioWatoRover.jpg";
import portfolioVM from "../../assets/portfolioVM.jpg";
import portfolioObserver from "../../assets/portfolioObserver.jpg";

export const metadata: Metadata = {
    title: "Projects"
};

// Twelve projects maximum? (To maintain quality)
const projects = [
    {
        name: "Observer",
        desc: "An engineering internship scraper, which scans across 30+ careers sites for new listings daily to notify me on Discord. Includes automatic scraper failure detection capabilities for reduced manual monitoring and maximal uptime.",
        src: portfolioObserver,
        github: "",
        links: [],
        announcements: ["Deployed"],
        tags: ["Python", "Playwright"]
    },
    {
        name: "Vim-like Text Editor",
        desc: "Final project for CS246E (enriched). Created a Vim-like text editor with syntax highlighting, commands and separate modes. Implemented utilizing C++ and design patterns such as MVC.",
        src: portfolioVM,
        github: "",
        links: [],
        announcements: ["Class Project"],
        tags: ["C++", "OOP", "UML"]
    },
    {
        name: "Watonomous Wato Rover",
        desc: "Autonomy stack for the UWRT (Robotics Team) URC (University Rover Challenge) rover. Currently in development for autonomous navigation and object detection capabilities.",
        src: portfolioWatoRover,
        github: "https://github.com/WATonomous/wato_rover",
        links: [],
        announcements: ["Design Team"],
        tags: ["Python", "C++", "ROS 2", "YOLOv8", "Docker", "XML"],
    },
    { 
        name: "Re-Prompt-That",
        desc: "A fast-paced, brain-teaser game that helps users improve their AI prompting skills through real-time challenges and a competitive social learning environment. Users can queue up with friends and compete with each other to prompt for the desired outputs.",
        src: portfolioRePromptThat,
        github: "https://github.com/AAZZAZRON/Re-Prompt-That",
        links: ["https://reprompt-that.vercel.app"],
        announcements: ["Deployed"],
        tags: ["Express","Socket.io", "Next JS", "React", "OpenAI", "AWS"],
    },
    {
        name: "DMOJ Contests",
        desc: "Organized 9 competitive programming contests on the DMOJ platform, authoring 12 original problems designed to challenge users' algorithmic thinking (Cover art is also mine).",
        src: portfolioAAC,
        github: "https://github.com/Williamwu277/Competitive-Programming",
        links: [
            "https://dmoj.ca/user/williamwu277",
            "https://dmoj.ca/contest/aac7"
        ],
        announcements: ["1500+ Competitors", "13000+ Attempts"],
        tags: ["Python", "Java", "C++", "YAML", "LaTeX"],
    },
    {
        name: "Layoff Evaders Dashboard",
        desc: "A real-time analytics dashboard featuring interactive graphs and a chatbot, designed to complement Layoff Evaders—a VR game where players perform physical exercises to control their character in a Subway Surfer–style experience.",
        src: portfolioLayoffEvaders,
        github: "https://github.com/martin226/layoffevaders",
        links: ["https://devpost.com/software/layoff-evaders"],
        announcements: ["2nd Place"],
        tags: ["Python", "Cohere", "Streamlit", "Pandas", "Firebase"],
    },
    {
        name: "Portfolio Website",
        desc: "A sleek, modern portfolio website designed and built from the ground up. Showcases projects, achievements and a personal brand through smooth animations and responsive design.",
        src: portfolioPicture,
        github: "https://github.com/Williamwu277/PersonalWebsite",
        links: ["https://www.williamwu277.ca"],
        announcements: [],
        tags: ["Next JS", "React", "Tailwind CSS", "Typescript", "Framer Motion"],
    },
    {
        name: "AdmissEd",
        desc: "A full-stack web app for analyzing and visualizing admission statistics. Upload online CSV data to filter and instantly generate a detailed report for each school or program.",
        src: portfolioAdmissed,
        github: "https://github.com/Williamwu277/Admissed",
        links: ["https://admissed.com"],
        announcements: ["Deployed"],
        tags: ["Python", "React", "AWS", "Pandas", "Matplotlib", "FastAPI"],
    },
    {
        name: "Eyedentify",
        desc: "A web app that streamlines classroom attendance by leveraging facial recognition technology. Includes built-in capabilities to automatically manage attendance data for teachers.",
        src: portfolioEyedentify,
        github: "https://github.com/andrewchu16/eyedentify",
        links: ["https://devpost.com/software/eyedentify-f9358o"],
        announcements: ["2nd Place", "Best Web App"],
        tags: ["Python", "Flask", "Face Recognition"],
    },
    {
        name: "Friend Bot",
        desc: "A Discord chatbot powered by the Cohere LLM—designed to keep you company and ensure that you're never alone.",
        src: portfolioFriendbot,
        github: "https://github.com/andrewchu16/friend-bot",
        links: ["https://devpost.com/software/friend-bot-2vnapw"],
        announcements: ["Best API Usage"],
        tags: ["Python", "Cohere", "Discord"],
    },
    {
        name: "LemonAid",
        desc: "An intelligent, time-efficient pantry web app that uses AI to scan your groceries and instantly generate tailored recipes based on the ingredients you have on hand.",
        src: portfolioLemonAid,
        github: "https://github.com/1spyral/LemonAid",
        links: ["https://devpost.com/software/lemonaid-3pz74j"],
        announcements: [],
        tags: ["Python", "OpenAI", "Flask", "JSON", "DALL-E", "GPT-4"],
    },
    {
        name: "Cows-vs-Ducks",
        desc: "A Plants vs. Zombies–inspired strategy game where cows defend their lawn against invading ducks! Features dynamic animations and diverse gameplay mechanics.",
        src: portfolioCowsVsDucks,
        github: "https://github.com/rhhscs/cows-vs-ducks",
        links: [],
        announcements: [],
        tags: ["Java", "Java Swing", "OOP"],
    },
];

export default function Projects() {
    return (
        <div className="my-28 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-11/12 mb-20 font-clean">
            <div className="grid grid-cols-1 gap-5 w-full grid-rows-[auto] place-items-center mb-4">
                {
                    projects.map((v, index) => {
                        return (
                            <ProjectView
                                key={index}
                                name={v.name}
                                desc={v.desc}
                                src={v.src}
                                github={v.github}
                                links={v.links}
                                announcements={v.announcements}
                                tags={v.tags}
                            />
                        );
                    })
                }
                <div className="flex justify-center items-center max-w-xl w-full p-5 border-[1pt] border-slate-400 border-dashed font-clean">
                    <p>See my other projects on <Emphasis href="https://github.com/Williamwu277">GitHub</Emphasis> or <Emphasis href="https://devpost.com/williamwu277">Devpost</Emphasis></p>
                </div>
            </div>
        </div>
    );
}
