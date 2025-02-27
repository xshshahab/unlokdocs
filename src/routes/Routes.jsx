import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import App from '../App';
import YtLinks from '../components/ytlinks/YtLinks';
import Java from '../components/java/Java';
import JavaYt from '../components/java/shared/JavaYt';
import JavaRoadmap from '../components/java/shared/JavaRoadmap';
import JavaWeb from '../components/java/shared/JavaWeb';
import Frontend from '../components/frontend/Frontend';
import FrontendRoadmap from '../components/frontend/shared/FrontendRoadmap';
import FrontendIntern from '../components/frontend/shared/FrontendIntern';
import FrontendYt from '../components/frontend/shared/FrontendYt';
import Ideas from '../components/idea/Ideas';
import Project1 from '../components/idea/shared/Project1';
import Project2 from '../components/idea/shared/Project2';
import Project3 from '../components/idea/shared/Project3';
import IdeaRoadmap from '../components/idea/shared/IdeaRoadmap';
import Pdf from '../components/pdfs/Pdf';

const Routes = () => {

    const router = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <App />
                },
                {
                    path: "/pages/yt-links",
                    element: <YtLinks />
                },
                {
                    path: "/pages/java",
                    element: <Java />,
                    children: [
                        {
                            path: "",
                            element: <JavaYt />
                        },
                        {
                            path: "javaRoadmap",
                            element: <JavaRoadmap />
                        },
                        {
                            path: "java-web",
                            element: <JavaWeb />
                        }
                    ]
                },
                {
                    path: "/pages/frontend",
                    element: <Frontend />,
                    children: [
                        {
                            path: "",
                            element: <FrontendYt />
                        },
                        {
                            path: "frontend-roadmap",
                            element: <FrontendRoadmap />
                        },
                        {
                            path: "frontend-intern",
                            element: <FrontendIntern />
                        }
                    ]
                },
                {
                    path: "/pages/ideas",
                    element: <Ideas />,
                    children: [
                        {
                            path: "",
                            element: <Project1 />
                        },
                        {
                            path: "project-2",
                            element: <Project2 />
                        },
                        {
                            path: "project-3",
                            element: <Project3 />
                        },
                        {
                            path: "roadmap",
                            element: <IdeaRoadmap />
                        }
                    ]
                },
                {
                    path: "/pages/pdfs",
                    element: <Pdf />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default Routes;