interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Native",
        description: "",
        show: true
    },
    {
        name: "English",
        level: "B2+ (CEFR) – ETS Certified",
        description: "",
        show: true
    },
];

export default languages;