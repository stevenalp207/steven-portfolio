interface Certification {
    title: string;
    issuer: string;
    date: string;
    description?: string;
}

const certifications: Certification[] = [
    {
        title: "EBOX-I2 STEAM Program",
        issuer: "CTP Don Bosco & I2CA",
        date: "2024",
        description: "Student Leadership Development through Innovation, Technology, Science, and Arts"
    },
    {
        title: "AgriSTEAM Program",
        issuer: "IICA (Inter-American Institute for Cooperation on Agriculture)",
        date: "2024",
        description: "Agricultural technology and STEAM integration program"
    },
    {
        title: "3D Printing Introduction Workshop",
        issuer: "Universidad LCI VERITAS",
        date: "2024",
        description: "Fundamentals of 3D printing technology and applications"
    },
];

export default certifications;
