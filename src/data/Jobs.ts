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
        title: "Robotics Club - STEAM Program",
        startDate: "2025-01-20",
        company: "CTP Don Bosco",
        location: "Costa Rica",
        description: "Led innovative projects integrating Science, Technology, Engineering, Arts, and Mathematics (STEAM), fostering problem-solving, teamwork, and hands-on robotics development.",
        goals: [
            "Active participant in robotics projects focused on STEAM (Science, Technology, Engineering, Arts, and Mathematics).",
            "Competed in an Agricultural Robotics Competition, applying automation and programming skills to solve real-world challenges.",
            "Participation in the World Robot Olympiad (WRO), showcasing teamwork, problem-solving, and advanced robotics knowledge on a national stage.",
        ],
        currentJob: true,
    },
    {
        title: "LESCO Sign Recognition System",
        startDate: "2023-02-28",
        endDate: "2024-11-10",
        company: "LESCOT",
        location: "CTP Don Bosco",
        description: "Developed a gesture recognition system using accelerometers and embedded systems to accurately interpret Costa Rican Sign Language (LESCO), enhancing accessibility and communication.",
        goals: [
            "System under development capable of recognizing LESCO gestures using machine learning in Python.",
            "Design and development of a glove capable of interpreting LESCO gestures through the use of accelerometers.",
        ],
        currentJob: false,
    },
];
export default workExperience;