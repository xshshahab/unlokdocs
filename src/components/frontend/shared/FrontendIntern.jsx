import React from 'react';

const FrontendIntern = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-orange-400 text-center mb-8">
                    🚀 35-Day Plan to Secure Your First Frontend Internship
                </h2>

                <p className="text-lg text-gray-400 text-center mb-10">
                    Follow this roadmap to strengthen your skills, build projects, and prepare for interviews.
                    Stay consistent and land your first frontend internship! 💼
                </p>

                {[
                    {
                        title: "Week 1: Strengthen Fundamentals",
                        content: [
                            "📌 JavaScript (ES6+): Deep dive into async programming, closures, and data structures.",
                            "🧠 Practice: Solve LeetCode/HackerRank challenges.",
                            "🔗 Git Proficiency: Learn branching, merging, and GitHub workflows.",
                            "🎯 Project: Start a small JS-based project or contribute to open-source."
                        ]
                    },
                    {
                        title: "Week 2: React and CSS",
                        content: [
                            "⚛️ React Basics: Learn components, hooks (useState, useEffect), and React Router.",
                            "🎨 CSS Mastery: Deep dive into Flexbox, Grid, and responsive design.",
                            "🛠️ Build a small React project (e.g., a portfolio or blog)."
                        ]
                    },
                    {
                        title: "Week 3: Build Projects & Advanced Topics",
                        content: [
                            "🏗️ Build Complex Apps: E-commerce site or social media dashboard.",
                            "🔧 State Management: Learn Redux or Context API.",
                            "🚀 Performance Optimization & Testing: Jest, React Testing Library, TypeScript Basics."
                        ]
                    },
                    {
                        title: "Week 4: Interview Preparation",
                        content: [
                            "🎤 Mock Interviews: Use Pramp or Interviewing.io.",
                            "📝 Review Questions: Frontend concepts, behavioral STAR method.",
                            "🔄 Practice Whiteboarding: Solve problems live, explain your thought process."
                        ]
                    },
                    {
                        title: "Week 5: Final Touches & Networking",
                        content: [
                            "📂 Portfolio & Resume: Showcase your best projects.",
                            "🤝 Networking: Engage on LinkedIn, GitHub, Twitter.",
                            "📢 Stay Updated: Follow frontend trends & communities.",
                            "🧘 Confidence & Relaxation: Stay calm before interviews."
                        ]
                    }
                ].map((week, index) => (
                    <section key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-orange-300 mb-4">{week.title}</h3>
                        <ul className="space-y-3">
                            {week.content.map((point, idx) => (
                                <li key={idx} className="bg-gray-700 p-4 rounded-md shadow flex items-start gap-3">
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {idx + 1}
                                    </span>
                                    <p className="text-lg">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}

                <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-orange-300 mb-4">💡 Additional Tips</h3>
                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
                        <li>⏳ <strong>Time Management:</strong> Dedicate at least 2-3 hours daily.</li>
                        <li>📝 <strong>Seek Feedback:</strong> Improve by getting input from peers or mentors.</li>
                        <li>💪 <strong>Stay Positive:</strong> Confidence makes a difference in interviews!</li>
                    </ul>
                </section>

                <section className="mb-8 text-center">
                    <h3 className="text-2xl font-semibold text-orange-400 mb-4">🏆 Conclusion</h3>
                    <p className="text-lg text-gray-400">
                        By following this roadmap, you'll be interview-ready in just <strong>35 days</strong> {" "}
                        Stay consistent, keep coding, and showcase your work. 🚀
                    </p>
                </section>

                <section className="text-center">
                    <h3 className="text-2xl font-semibold text-orange-400 mb-4">📚 Additional Resources</h3>
                    <p className="text-lg text-gray-400">
                        Check out this
                        <a className="font-bold text-rose-400 hover:text-rose-300 transition"
                            target="_blank"
                            href="https://docs.google.com/document/d/1PDWv0_fXayVDXK0j2PnfSswwgjsm6eUibP0TDnCGfMY/edit?tab=t.0">
                            Google Document
                        </a>
                        for more internship prep details.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default FrontendIntern;
