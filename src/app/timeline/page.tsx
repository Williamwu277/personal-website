import AchievementView from "../../ui/achievementView";
import { StaticImageData } from "next/image";
import JobView from "../../ui/jobView";
import leapAPLogo from "../../assets/logos/leapAPLogo.jpg";
import watonomousLogo from "../../assets/logos/watonomousLogo.jpg";
import DMOJLogo from "../../assets/logos/DMOJLogo.jpg";
import robloxLogo from "../../assets/logos/robloxLogo.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Timeline"
};

type Job = {
    desc: string;
    dates: string;
    src: StaticImageData;
    url: string;
}

type Achievement = {
    title: string;
    achieve: string;
    description: string;
    date: string;
    link: string;
    importance: "Gold" | "Silver";
};

const jobData: Job[] = [
    {
        desc: "Software Engineering Intern",
        dates: "May 2026 - Aug 2026",
        src: robloxLogo,
        url: "https://about.roblox.com"
    },
    {
        desc: "LeapAP Software Developer Co-op",
        dates: "May 2025 - Aug 2025",
        src: leapAPLogo,
        url: "https://www.leapap.com"
    },
    {
        desc: "WATonomous Autonomy Developer",
        dates: "Feb 2025 - Aug 2026",
        src: watonomousLogo,
        url: "https://www.watonomous.ca"
    },
    {
        desc: "DMOJ Contest Organizer",
        dates: "May 2021 - Feb 2023",
        src: DMOJLogo,
        url: "https://dmoj.ca"
    }
];

const data: Achievement[] = [
    {
        title: "AWS Certified Cloud Practitioner",
        achieve: "",
        description:
            "Received the AWS Certified Cloud Practitioner certification",
        date: "Aug 2025",
        link: "https://www.credly.com/badges/b31fde84-f65d-4057-b00c-3a442a796cc2/public_url",
        importance: "Silver"
    },
    {
        title: "DeltaHacks",
        achieve: "2nd Place",
        description:
            "Our VR game, Layoff Evaders, won 2nd place over 600+ competitors",
        date: "Jan 2025",
        link: "https://devpost.com/software/layoff-evaders",
        importance: "Gold",
    },
    {
        title: "National Mathematics Scholarship",
        achieve: "",
        description:
            "One of approximately 10 awarded in the Faculty of Mathematics for excellence in academics and extracurriculars",
        date: "Apr 2024",
        link: "https://uwaterloo.ca/undergraduate-entrance-awards/awards/mathematics-national-scholarships",
        importance: "Gold",
    },
    {
        title: "President's Scholarship of Distinction",
        achieve: "",
        description:
            "Awarded to students admitted to the University of Waterloo with an average of 95%+",
        date: "Apr 2024",
        link: "https://uwaterloo.ca/undergraduate-entrance-awards/awards/mathematics-national-scholarships",
        importance: "Silver",
    },
    {
        title: "Canadian Computing Competition",
        achieve: "Honour Roll",
        description:
            "Achieved a placement of 111/3947 with a score of 47/75 on CCC Senior 2024",
        date: "Feb 2024",
        link: "https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=29",
        importance: "Silver",
    },
    {
        title: "Codeforces",
        achieve: "1893 Rating",
        description:
            "Reached a peak rating of 1893 (Expert ranking and top 5%) on Codeforces",
        date: "Aug 2023",
        link: "https://codeforces.com/profile/washed",
        importance: "Silver",
    },
    {
        title: "CEMC Euclid Math Contest",
        achieve: "Honour Roll",
        description:
            "Achieved Group V (top 5%) on the honour roll in Grade 11 with a score of 82/100",
        date: "Apr 2023",
        link: "https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=24",
        importance: "Silver",
    },
    {
        title: "YrHacks",
        achieve: "2nd Place",
        description:
            "Won 2nd place overall and the Best Web App category over 350 competitors with our facial recognition attendance taker",
        date: "Mar 2023",
        link: "https://devpost.com/software/eyedentify-f9358o",
        importance: "Gold",
    },
    {
        title: "Canadian Computing Competition",
        achieve: "Honour Roll",
        description:
            "Achieved a placement of 92/3420 with a score of 48/75 on CCC Senior 2023",
        date: "Feb 2023",
        link: "https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=29",
        importance: "Silver",
    },
    {
        title: "USACO",
        achieve: "Platinum",
        description: "Reached the highest division of the USA Computing Olympiad",
        date: "Dec 2022",
        link: "https://usaco.org/current/data/dec22_gold_results.html",
        importance: "Gold",
    },
    {
        title: "YrHacks",
        achieve: "Best API",
        description:
            "Won the Best API award over 350 participants with a discord chat bot",
        date: "Apr 2022",
        link: "https://devpost.com/software/friend-bot-2vnapw",
        importance: "Gold",
    },
    {
        title: "Canadian Computing Competition",
        achieve: "Honour Roll",
        description:
            "Achieved a placement of 75/3262 with a score of 48/75 on CCC Senior 2022",
        date: "Feb 2022",
        link: "https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=29",
        importance: "Silver",
    },
];

export default function Timeline() {

    return (
        <div className="my-28 mx-auto flex flex-col items-center gap-3 max-w-xl w-11/12 mb-24 font-clean">

            {
                jobData.map((v, index) => {
                    return (
                        <JobView
                            key={index}
                            desc={v.desc}
                            dates={v.dates}
                            src={v.src}
                            url={v.url}
                        />
                    );
                })
            }

            <div className="flex flex-row justify-center w-4/5 gap-3 my-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white rounded-full" />
            </div>

            {
                data.map((v, index) => {
                    return (
                        <AchievementView
                            key={index}
                            title={v.title}
                            achieve={v.achieve}
                            description={v.description}
                            date={v.date}
                            link={v.link}
                            importance={v.importance}
                        />
                    )
                })
            }

        </div>
    );
}
