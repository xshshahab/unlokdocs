import React from 'react';
import { javaWebData } from '../../../data/javaWebData';


const JavaWeb = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-orange-500 mb-6">Web Development with Java</h2>

            <div className="text-white space-y-8">
                {javaWebData.map((category, index) => (
                    <section key={index} className="mb-8">
                        <h3 className="text-2xl font-semibold text-orange-400 mb-4">{category.title}</h3>
                        {category.sections.map((section, idx) => (
                            <div key={idx} className="mb-4">
                                <h4 className="text-xl font-semibold">{section.topic}</h4>
                                <p className="text-sm italic">Duration: {section.duration}</p>
                                <ul className="list-disc pl-5 mt-2">
                                    {section.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                ))}
            </div>

            {/* Summary of Time Commitment */}
            <div className="bg-zinc-800 p-6 rounded-lg text-white mt-8">
                <h3 className="text-xl font-semibold text-orange-400">Total Estimated Time</h3>
                <p className="mt-4">9-10 months</p>

                <h3 className="text-xl font-semibold text-orange-400 mt-6">Additional Tips</h3>
                <ul className="list-disc pl-5">
                    <li>Daily time commitment: 2-3 hours/day</li>
                    <li>Practice: Apply the concepts through small projects for better retention.</li>
                    <li>Projects: Build projects using Core Java, JDBC, Spring Boot, and React to strengthen understanding.</li>
                    <li>Interview Preparation: Solve coding problems on platforms like LeetCode or HackerRank for backend skills.</li>
                </ul>

                <p className="mt-4 font-semibold">Conclusion:</p>
                <p>With consistent effort, an average student can complete this roadmap in about 9-10 months.</p>
            </div>
        </div>
    );
};

export default JavaWeb;
