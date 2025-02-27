import React, { useState } from 'react';

const Project1 = () => {
    return (
        <div className="p-6 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold text-center mb-6">Smart Resume Analyzer</h1>

            <section>
                <h2 className="text-xl font-semibold mb-4">Project Idea: "Smart Resume Analyzer" 📄🤖</h2>
                <p>
                    A React.js-based AI-powered Resume Analyzer that helps job seekers optimize their resumes based on job descriptions.
                    It provides real-time feedback, highlights missing skills, and suggests improvements.
                </p>

                <h3 className="text-lg font-semibold mt-6">💡 Why This Project?</h3>
                <p>
                    Finding a job is tough, and many candidates struggle to tailor their resumes for specific roles.
                    This tool analyzes resumes, compares them with job descriptions, and provides actionable feedback to improve their chances of getting hired.
                </p>

                <h3 className="text-lg font-semibold mt-6">✨ Features</h3>
                <ul className="list-disc ml-6">
                    <li><strong>1️⃣ Resume Parsing & Analysis</strong>:
                        Upload a PDF/DOCX resume. Extracts key details: skills, experience, education, certifications.
                        Uses NLP (Natural Language Processing) to identify strengths and weaknesses.
                    </li>
                    <li><strong>2️⃣ Job Description Matching</strong>:
                        Paste a job description from LinkedIn or company websites.
                        Compares resume keywords with job requirements. Shows a match percentage and missing skills.
                    </li>
                    <li><strong>3️⃣ AI-Powered Suggestions</strong>:
                        Highlights weak sections (e.g., missing skills, poor formatting).
                        Suggests actionable improvements (e.g., stronger action verbs, quantifiable achievements).
                        AI-generated bullet points for better resume phrasing.
                    </li>
                    <li><strong>4️⃣ Resume Score & Feedback</strong>:
                        Generates a resume score (e.g., 78% match for a given job).
                        Provides detailed feedback on how to improve.
                    </li>
                    <li><strong>5️⃣ Download & Apply</strong>:
                        Allows users to edit suggested improvements. Download the optimized resume.
                        Links to relevant job postings based on skills.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">🛠️ Tech Stack</h3>
                <ul className="list-disc ml-6">
                    <li><strong>Frontend (React.js)</strong>:
                        React.js (for UI), Tailwind CSS (modern, responsive UI), React Dropzone (for file upload), React PDF Viewer (for resume preview)
                    </li>
                    <li><strong>Backend (Node.js + Python)</strong>:
                        Node.js / Express (API handling), Python (NLTK & spaCy) (for resume parsing & analysis), MongoDB (user data & resume storage)
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">📂 Folder Structure</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                    {`src/
├── components/
│   ├── ResumeUpload.jsx
│   ├── JobDescriptionInput.jsx
│   ├── AnalysisResults.jsx
│   ├── ResumeSuggestions.jsx
│   ├── ResumeScore.jsx
│   └── DownloadResume.jsx
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   └── About.jsx
├── services/
│   ├── resumeAnalysis.js
│   ├── jobMatcher.js
│   └── feedbackGenerator.js
└── App.js`}
                </pre>

                <h3 className="text-lg font-semibold mt-6">🎨 UI Design (Minimal & Modern)</h3>
                <ul className="list-disc ml-6">
                    <li><strong>Landing Page</strong>: Simple Drag & Drop resume upload, Input field for Job Description, "Analyze Resume" button</li>
                    <li><strong>Dashboard</strong>: Match Score, Highlight Missing Skills in red, Suggestions, Download Optimized Resume button</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">🚀 Future Enhancements</h3>
                <ul className="list-disc ml-6">
                    <li>🔹 LinkedIn API to auto-fetch job descriptions</li>
                    <li>🔹 Chatbot for real-time career guidance</li>
                    <li>🔹 Resume Templates for professional formatting</li>
                </ul>
            </section>
        </div>
    );
};

export default Project1;
