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
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default Routes;