import React from 'react';

const IdeaRoadmap = () => {
    return (
        <div className="bg-gray-900 text-white py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-8">Full-Stack Senior Developer IdeaRoadmap (2025 Edition)</h1>
            <p className="text-center text-lg mb-10">
                📅 Duration: 1 Year | 💻 Hands-on Learning | 📂 Real-World Projects
            </p>

            <div className="space-y-12">

                <section>
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Phase 1: Web Development Foundation (Month 1-2)</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ HTML, CSS, JavaScript</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Semantic HTML, Accessibility</li>
                                <li>CSS Grid, Flexbox, Animations, Responsive Design</li>
                                <li>JavaScript ES6+ (Arrow functions, Promises, Async/Await)</li>
                                <li>DOM Manipulation, Callbacks, Event Loop</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Advanced JavaScript & TypeScript</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Scope, Hoisting, Closures, Prototypes</li>
                                <li>JavaScript Design Patterns</li>
                                <li>TypeScript Basics & Best Practices</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ React.js Fundamentals</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>JSX, Components, Props, State, Lifecycle</li>
                                <li>Hooks (useState, useEffect, useContext, useReducer)</li>
                                <li>React Router, Forms, Performance Optimization</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Phase 2: Advanced Frontend & State Management (Month 3-4)</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Next.js</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>File-based Routing, API Routes, SSR, ISR, SSG</li>
                                <li>Middleware, Dynamic Routing</li>
                                <li>Authentication with NextAuth / JWT</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ State Management</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Redux Toolkit / Zustand / Jotai</li>
                                <li>React Query for Data Fetching</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ UI & Styling</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Tailwind CSS, Framer Motion</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Phase 3: Backend Development with Java Spring Boot (Month 5-6)</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Core Java & Backend Basics</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Collections, Streams API, Functional Programming</li>
                                <li>Multi-threading, Concurrency, JVM, Garbage Collection</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Spring Boot Essentials</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>REST APIs, Dependency Injection, MVC</li>
                                <li>JPA (CRUD, Relationships, Paging & Sorting)</li>
                                <li>Exception Handling, Logging (Log4j, SLF4J)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Spring Security & Authentication</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>JWT Authentication, OAuth2</li>
                                <li>Role-Based Access Control (RBAC)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Database & ORM</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>PostgreSQL / MySQL, Hibernate ORM</li>
                                <li>JPA Query Methods, Custom Queries, Transactions</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Phase 4: Advanced Backend & Microservices (Month 7-8)</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Microservices Architecture</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>API Gateway, Service Registry (Eureka), Load Balancing</li>
                                <li>Circuit Breaker (Hystrix), Spring Cloud Config</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Event-Driven Systems & Messaging</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>RabbitMQ, Kafka for real-time communication</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Caching & Optimization</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Redis, Caching Strategies, Performance Tuning</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Phase 5: Linux & DevOps (Month 9)</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Linux Fundamentals</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>File System, Permissions, Users & Groups</li>
                                <li>Bash Scripting, Process Management</li>
                                <li>SSH, Networking, System Logs</li>
                                <li>Package Management (apt, yum), Cron Jobs</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Docker & Containerization</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Build, Deploy, and Manage Containers</li>
                                <li>Multi-stage Docker Builds</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Kubernetes</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Pods, Deployments, Services</li>
                                <li>Auto-scaling, Load Balancing</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ CI/CD Pipelines</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>GitHub Actions, Jenkins</li>
                                <li>Automate Testing & Deployment</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Phase 6: GitHub & System Design (Month 10)</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ Git & GitHub</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Branching Strategies, Pull Requests, Rebasing</li>
                                <li>GitHub Projects, Monorepos</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">✅ System Design Basics</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Scalability, Load Balancing, Caching</li>
                                <li>High Availability & Distributed Systems</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Phase 7: Real-World Projects (Month 11-12)</h2>
                    <div className="space-y-4">
                        <p className="text-xl">✅ Final Projects:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Task Manager App (React + Next.js + Spring Boot + JWT)</li>
                            <li>E-commerce Platform (Microservices + Kafka + Redis + Docker)</li>
                            <li>Real-Time Chat App (WebSockets + RabbitMQ + React Query)</li>
                        </ul>
                    </div>
                </section>

            </div>

            <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-green-500">🏆 By the end of this roadmap, you'll be a Senior Full-Stack Developer! 🚀</p>
            </div>
        </div>
    );
};

export default IdeaRoadmap;
