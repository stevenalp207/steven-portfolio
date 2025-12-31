/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Project Leader – AgroTico Smart",
        startDate: "2024-03-01",
        company: "Samsung Solve for Tomorrow 2025",
        location: "Costa Rica & Latin America",
        description: "Led the development of an award-winning Costa Rican precision agriculture platform using IoT and AI to analyze soil and microclimate data for optimized farming decisions.",
        goals: [
            "National Champion (Costa Rica) in Samsung Solve for Tomorrow competition",
            "Regional Champion (Latin America) showcasing innovative agricultural technology",
            "Finalist – Samsung Solve for Tomorrow 2025 (LATAM), competing at international level",
            "Developed integrated IoT sensor systems for real-time soil and climate monitoring",
            "Implemented AI-based data analysis for precision agriculture recommendations",
        ],
        currentJob: true,
    },
    {
        title: "Team Leader – World Robot Olympiad (WRO) 2025",
        startDate: "2024-11-01",
        company: "World Robot Olympiad Costa Rica",
        location: "Costa Rica",
        description: "Led team in developing automation and IoT solutions for agricultural robotics challenges, representing Costa Rica in national competition.",
        goals: [
            "Developed autonomous robotic systems for agricultural applications",
            "Integrated sensors and automation for precision farming tasks",
            "Collaborated with team to solve complex robotics challenges under time constraints",
        ],
        currentJob: true,
    },
    {
        title: "Robotics Selection – STEAM Program",
        startDate: "2024-01-20",
        company: "CTP Don Bosco",
        location: "Costa Rica",
        description: "Selected member of robotics program promoting STEAM education, teamwork, and innovation at national level competitions.",
        goals: [
            "Active participant in robotics projects focused on STEAM (Science, Technology, Engineering, Arts, and Mathematics)",
            "Competed in Agricultural Robotics Competition, applying automation and programming skills to solve real-world challenges",
            "Promoted STEAM education and innovation through hands-on robotics development",
        ],
        currentJob: true,
    },
    {
        title: "LESCO Sign Recognition System",
        startDate: "2023-02-28",
        endDate: "2024-11-10",
        company: "LESCOT Project",
        location: "CTP Don Bosco",
        description: "Developed a gesture recognition system using accelerometers and embedded systems to accurately interpret Costa Rican Sign Language (LESCO), enhancing accessibility and communication.",
        goals: [
            "System under development capable of recognizing LESCO gestures using machine learning in Python",
            "Design and development of a glove capable of interpreting LESCO gestures through the use of accelerometers",
        ],
        currentJob: false,
    },
];
export default workExperience;