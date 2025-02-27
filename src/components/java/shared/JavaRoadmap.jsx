import React from 'react';
import { javaRoadmapData } from '../../../data/javaRoadmapData';

const JavaRoadmap = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-orange-500 mb-6">Roadmap for Full Stack Java Developer</h2>

            {javaRoadmapData.map((step, index) => (
                <section key={index} className="mb-8">
                    <h3 className="text-2xl font-semibold text-orange-400 mb-4">{step.month}: {step.title}</h3>
                    <div className="text-white space-y-4">
                        <div>
                            <p className="font-semibold">Topics:</p>
                            <ul className="list-disc pl-5">
                                {step.topics.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Resources:</p>
                            <ul className="list-disc pl-5">
                                {step.resources.map((resource, i) => (
                                    <li key={i}>{resource}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Estimated Time:</p>
                            <p className='text-slate-500 text-sm'>{step.estimatedTime}</p>
                        </div>
                    </div>
                </section>
            ))}

            <div className="bg-zinc-800 p-6 rounded-lg text-white mt-8">
                <h3 className="text-xl font-semibold text-orange-400">Total Estimated Time: 12 Months</h3>
                <p className="mt-4 font-semibold">Tips for Mastery:</p>
                <ul className="list-disc pl-5">
                    <li>Practice Regularly: Daily coding practice and small projects.</li>
                    <li>Join Online Communities: Engage in forums like Stack Overflow or Reddit.</li>
                    <li>Build Projects: Create personal projects or contribute to open-source.</li>
                    <li>Study with Others: Join study groups or coding bootcamps if possible.</li>
                </ul>

                <p className="mt-4 font-semibold">Conclusion:</p>
                <p>If you study consistently and effectively, you can become a proficient full-stack Java developer by 2025. Practice and real-world applications are key. Good luck!</p>
            </div>
        </div>
    );
};

export default JavaRoadmap;
