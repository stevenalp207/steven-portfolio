interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Data Science Engineering",
        startDate: "2026-01-15",
        endDate: "",
        school: "Fidélitas University",
        location: "Costa Rica",
        description: "Advancing knowledge in data science, machine learning, statistical analysis, and big data technologies to solve complex real-world problems.",
        currentUni: true,
    },
    {
        title: "Associate's Degree in Industrial Electronics",
        startDate: "2020-01-15",
        endDate: "2025-12-15",
        school: "CTP Don Bosco",
        location: "Costa Rica",
        description: "Strong foundation in electronic systems, automation, and circuit design, with hands-on experience in troubleshooting, programming, and industrial applications.",
        currentUni: false,
    },
    {
        title: "High School Diploma",
        startDate: "2020-01-15",
        endDate: "2025-12-15",
        school: "CTP Don Bosco",
        location: "Costa Rica",
        description: "Comprehensive education with a strong emphasis on science, mathematics, and technology, fostering analytical thinking and problem-solving skills.",
        currentUni: false,
    },
];

export default education;
