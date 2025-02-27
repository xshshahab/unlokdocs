import React from "react";

const Project2 = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white py-12 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                {/* Project Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-6">
                    Project 2: Backend Development Guide
                </h2>

                {/* Project Description */}
                <p className="text-lg text-gray-300 text-center leading-relaxed">
                    Build a **Spring Boot** and **MongoDB**-powered backend application with
                    **real-time collaboration** and **secure authentication**.
                </p>

                {/* Technologies Used */}
                <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-orange-400">Technologies Used</h3>
                    <ul className="mt-3 text-lg text-gray-300 space-y-2">
                        <li>🚀 <span className="font-semibold">Core Java</span> - OOP, Collections, Streams</li>
                        <li>⚡ <span className="font-semibold">Spring Boot</span> - REST API, WebSocket</li>
                        <li>🗄️ <span className="font-semibold">MongoDB</span> - NoSQL Database</li>
                        <li>💬 <span className="font-semibold">WebSocket</span> - Real-time communication</li>
                    </ul>
                </div>

                {/* Steps to Build the Project */}
                <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-400">Steps to Build</h3>
                    <ol className="mt-3 text-lg text-gray-300 space-y-2 list-decimal list-inside">
                        <li>Initialize a **Spring Boot** project with MongoDB.</li>
                        <li>Implement **user authentication** using JWT.</li>
                        <li>Develop **real-time collaboration** using WebSocket.</li>
                        <li>Set up **MongoDB** to store user data & sessions.</li>
                        <li>Write **unit & integration tests** for APIs.</li>
                    </ol>
                </div>

                {/* Folder Structure */}
                <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-purple-400">Folder Structure</h3>
                    <pre className="bg-gray-700 text-white p-4 rounded-lg mt-3 text-sm md:text-base overflow-x-auto">
                        {`src/main/
├── java/com/project/unlokliveshare/
│   ├── controller/
│   │   ├── AuthController.java
│   │   └── CollaborationController.java
│   ├── model/
│   │   ├── User.java
│   │   └── Session.java
│   ├── repository/
│   │   └── UserRepository.java
│   ├── service/
│   │   ├── AuthService.java
│   │   └── CollaborationService.java
│   └── UnlokLiveShareApplication.java
└── resources/
    └── application.properties`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Project2;
