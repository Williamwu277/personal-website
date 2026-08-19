import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Emphasis from "../../ui/emphasis";
import profileImage from "../../assets/portfolioImage.jpg";
import robloxLogo from "../../assets/logos/robloxLogo.jpg";
import leapAPLogo from "../../assets/logos/leapAPLogo.jpg";
import DMOJLogo from "../../assets/logos/DMOJLogo.jpg";
import watonomousLogo from "../../assets/logos/watonomousLogo.jpg";
import waterlooLogo from "../../assets/logos/waterlooLogo.jpg";
import grandmasterTft from "../../assets/tftGrandmaster.png";

export const metadata: Metadata = {
    title: "About Me"
};

export default function About() {
    return (
        <div className="my-28 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-11/12 mb-20 font-clean">
            <div className="w-11/12 text-sm mb-1">
                Hi there! I&apos;m William, and this is a short summary of what I&apos;ve been up to:
                <ul className="list-disc w-11/12 text-sm mb-2 mt-2 ml-8 space-y-1">
                    <li>
                        Third year studying Computer Science at <Emphasis href="https://uwaterloo.ca" image={waterlooLogo}>U of Waterloo</Emphasis>
                    </li>
                    <li>
                        Co-Director of the autonomous Rover Team in <Emphasis href="https://www.watonomous.ca" image={watonomousLogo}>WATOnomous</Emphasis>
                    </li>
                </ul>
                Previously:
                <ul className="list-disc w-11/12 text-sm mb-2 mt-2 ml-8 space-y-1">
                    <li>
                        Full-Stack Software Engineering Intern at <Emphasis href="https://www.roblox.com/Login" image={robloxLogo}>Roblox</Emphasis> in San Mateo
                    </li>
                    <li>
                        Software Developer at <Emphasis href="https://www.leapap.com" image={leapAPLogo}>LeapAP</Emphasis>, where I worked on web-scrapers
                    </li>
                    <li>
                        Competitive programming contest organizer on <Emphasis href="https://dmoj.ca" image={DMOJLogo}>DMOJ</Emphasis> with 9 organized contests and 12 problems authored (13,000+ solution attempts)
                    </li>
                    <li>
                        Avid hackathon participant with 15+ hackathons and 3 wins
                    </li>
                </ul>
                Side questing:
                <ul className="list-disc w-11/12 text-sm mb-2 mt-2 ml-8 space-y-1">
                    <li>
                        Teamfight Tactics, where I peaked <Emphasis href="#" image={grandmasterTft} currentTab>Grandmaster 796 LP</Emphasis>, or rank 420 (top 0.06%), in North America during Set 16
                    </li>
                </ul>
                You can take a look at my <Link href="/projects" className="inline-block hover-grow emphasis">Projects</Link>, <Link href="/timeline" className="inline-block hover-grow emphasis">Timeline</Link>, or <Emphasis href="/ResumeWilliam.pdf">Resume</Emphasis> for 
                more details and contact info. Don&apos;t hesitate to reach out!
            </div>
            <hr className="w-3/4 h-0.25 border-slate-400 mb-1"></hr>
            <Image
                className="mb-4 max-w-[16rem] w-4/5 border-4 border-white"
                src={profileImage}
                alt="Photo"
                width={300}
                height={300}
                loading="eager"
            ></Image>
        </div>
    );
}
