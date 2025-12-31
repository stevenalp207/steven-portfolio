interface Certification {
    title: string;
    issuer: string;
    date: string;
    description?: string;
}

const certifications: Certification[] = [
    {
        title: "EBOX-I2 STEAM Program",
        issuer: "CTP Don Bosco",
        date: "2024",
        description: "Student Leadership Development through Innovation, Technology, Science, and Arts"
    },
    {
        title: "Electronics & Physical Computing",
        issuer: "Arduino Certification",
        date: "2025",
        description: "Comprehensive certification in electronics and physical computing with Arduino platforms"
    },
    {
        title: "3D Printing Introduction Workshop",
        issuer: "LCI VERITAS University",
        date: "2025",
        description: "Fundamentals of 3D printing technology and applications"
    },
    {
        title: "AgriSTEAM Program",
        issuer: "IICA (Inter-American Institute for Cooperation on Agriculture)",
        date: "2024",
        description: "Agricultural technology and STEAM integration program"
    },
];

export default certifications;
