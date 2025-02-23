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
        title: "Associate’s Degree in Industrial Electronics",
        startDate: "2023-01-15",
        endDate: "",
        school: "CTP Don Bosco",
        location: "Costa Rica",
        description: "Strong foundation in electronic systems, automation, and circuit design, with hands-on experience in troubleshooting, programming, and industrial applications.",
        currentUni: true,
    },
    {
        title: "High School Diploma",
        startDate: "2023-01-15",
        endDate: "",
        school: "CTP Don Bosco",
        location: "Costa Rica",
        description: "Comprehensive education with a strong emphasis on science, mathematics, and technology, fostering analytical thinking and problem-solving skills.",
        currentUni: true,
    },
    {
        title: "Completion of General Basic Education Studies",
        startDate: "2020-01-15",
        endDate: "2022-12-15",
        school: "CTP Don Bosco",
        location: "Costa Rica",
        description: "",
        currentUni: false,
    },
];

export default education;