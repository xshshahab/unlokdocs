import React from "react";
import { frontendData } from "../../../data/frontendData";

const FrontendRoadmap = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-300 px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-orange-400 text-center mb-4">🚀 Frontend Learning Roadmap</h2>

                <p className="text-lg text-gray-400 text-center mb-8">
                    Follow this roadmap, build projects, and stay consistent to become frontend-ready in just 30 days!
                </p>

                {frontendData.map((week, index) => (
                    <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-orange-300 mb-4">{week.title}</h3>
                        <ul className="space-y-3">
                            {week.items.map((item, idx) => (
                                <li key={idx} className="bg-gray-700 p-4 rounded-md shadow flex items-start gap-3">
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{item.day}</span>
                                    <p className="text-lg text-gray-300">{item.content}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h3 className="text-3xl font-semibold text-orange-400 mt-12">🎯 Project Ideas</h3>
                <ul className="list-disc pl-6 text-lg text-gray-400 mt-4 space-y-2">
                    <li><strong>Task Management App</strong> - CRUD, priorities, due dates (React + Firebase).</li>
                    <li><strong>Recipe Search App</strong> - API-based recipe search, save favorites (React + Axios).</li>
                    <li><strong>Portfolio Website</strong> - Showcase skills, projects (React + Tailwind).</li>
                </ul>

                <h3 className="text-3xl font-semibold text-orange-400 mt-12">📄 Resume Template</h3>
                <ul className="list-disc pl-6 text-lg text-gray-400 mt-4 space-y-2">
                    <li><strong>Contact:</strong> Name, email, LinkedIn, GitHub, Portfolio.</li>
                    <li><strong>Summary:</strong> "Frontend Developer skilled in JavaScript (ES6+), React. Seeking an internship."</li>
                    <li><strong>Skills:</strong> JavaScript (ES6+), React, Tailwind CSS, HTML, CSS, Git.</li>
                    <li><strong>Projects:</strong> <a href="#" className="text-blue-400">Task Management App</a> | <a href="#" className="text-blue-400">Portfolio Website</a></li>
                </ul>

                <h3 className="text-3xl font-semibold text-orange-400 mt-12">📚 Resources & Practice</h3>
                <ul className="list-disc pl-6 text-lg text-gray-400 mt-4 space-y-2">
                    <li><a href="https://frontendinterviewhandbook.com/" className="text-blue-400">Frontend Interview Handbook</a></li>
                    <li><a href="https://www.pramp.com/" className="text-blue-400">Mock Interviews</a></li>
                    <li>Leetcode | HackerRank | Codewars</li>
                </ul>

                <h3 className="text-3xl font-semibold text-orange-400 mt-12">📝 Job Application Tips</h3>
                <ul className="list-disc pl-6 text-lg text-gray-400 mt-4 space-y-2">
                    <li>Use LinkedIn, Glassdoor, and AngelList for job hunting.</li>
                    <li>Engage with GitHub, Twitter, and LinkedIn communities.</li>
                </ul>

                <div className="mt-8 text-center">
                    <p className="text-lg font-medium text-gray-400">
                        Stay consistent, keep building, and you'll land your frontend internship in 30 days! 🚀
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FrontendRoadmap;
