import React from "react";

const Project3 = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-center text-white mb-8">
                    Tools to Help the Developer Community
                </h1>

                {/* Sections */}
                <section className="space-y-10">
                    {/** Utility function for each category */}
                    {categories.map((category, index) => (
                        <article
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                {index + 1}. {category.title}
                            </h2>
                            <ul className="list-disc list-inside space-y-3">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="hover:text-blue-400 transition">
                                        <strong>{item.title}:</strong> {item.description}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>

                {/* Next Steps */}
                <article className="bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
                    <h2 className="text-2xl font-semibold text-white mb-4">Next Steps</h2>
                    <ul className="list-disc list-inside space-y-3">
                        {nextSteps.map((step, index) => (
                            <li key={index} className="hover:text-blue-400 transition">
                                {step}
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </div>
    );
};

/** Data for categories */
const categories = [
    {
        title: "Developer Productivity Tools",
        items: [
            { title: "Smart Code Generators", description: "AI-powered tools to generate boilerplate code, tests, or components." },
            { title: "Task Automation Platform", description: "Automate repetitive tasks like setting up projects or CI/CD pipelines." },
            { title: "Time Management Tool", description: "Track focus time, breaks, and time spent on coding tasks." }
        ]
    },
    {
        title: "Educational Resources",
        items: [
            { title: "Interactive Tutorials", description: "Hands-on coding challenges for niche technologies." },
            { title: "Code Explanation Tool", description: "AI-based tool to explain complex code in plain language." }
        ]
    },
    {
        title: "Open Source Collaboration Tools",
        items: [
            { title: "Bug Prioritization Assistant", description: "Analyze GitHub issues and prioritize them intelligently." },
            { title: "Simplified Contribution Platforms", description: "Easier ways to contribute to open-source projects." },
            { title: "Virtual Pair Programming", description: "Match developers for real-time collaborative coding." }
        ]
    },
    {
        title: "DevOps and Cloud Management",
        items: [
            { title: "Cost Analysis Tools", description: "Analyze and reduce cloud usage costs with intuitive dashboards." },
            { title: "Local Environment Sandbox", description: "Spin up isolated dev environments quickly." },
            { title: "Incident Management Tools", description: "Automate issue detection and resolution during deployments." }
        ]
    },
    {
        title: "Community and Networking Platforms",
        items: [
            { title: "Mentorship Matchmaking", description: "Connect junior developers with experienced mentors." },
            { title: "Niche Forums", description: "Discussion spaces for highly specific topics." },
            { title: "Hackathon Aggregator", description: "Discover and participate in global/local coding events." }
        ]
    },
    {
        title: "Testing and Debugging Tools",
        items: [
            { title: "Automated Test Coverage Analysis", description: "Suggest untested areas and generate test cases." },
            { title: "Debugging Assistant", description: "AI-powered insights into code failures." },
            { title: "Cross-Browser Testing", description: "Test web apps across multiple browsers instantly." }
        ]
    },
    {
        title: "APIs for Common Needs",
        items: [
            { title: "Universal Data API", description: "APIs for commonly used datasets like locations, weather, or demographics." },
            { title: "AI-Powered Syntax Highlighting", description: "Customizable syntax highlighting for code editors." }
        ]
    },
    {
        title: "Tools for Team Collaboration",
        items: [
            { title: "Team Code Review Helper", description: "Streamline code reviews with automated suggestions." },
            { title: "Knowledge Sharing Platform", description: "Share best practices, snippets, and documentation within teams." }
        ]
    },
    {
        title: "Inclusion and Accessibility",
        items: [
            { title: "Accessibility Checker", description: "Scan projects for accessibility issues and suggest improvements." },
            { title: "Diverse Code Sample Library", description: "Inclusive, real-world coding examples for developers." }
        ]
    },
    {
        title: "Fun and Community-Building",
        items: [
            { title: "Developer Games", description: "Gamified coding puzzles for learning and entertainment." },
            { title: "Recognition Platforms", description: "Showcase coding achievements and milestones." }
        ]
    }
];

/** Next steps */
const nextSteps = [
    "Survey developers to understand their needs.",
    "Start with a minimal viable product (MVP) and gather feedback.",
    "Engage the community for suggestions and iteration.",
    "Open source the project for wider collaboration."
];

export default Project3;
