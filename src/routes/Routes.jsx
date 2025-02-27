import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import App from '../App';
import YtLinks from '../components/ytlinks/YtLinks';
import Java from '../components/java/Java';
import JavaYt from '../components/java/shared/JavaYt';
import JavaRoadmap from '../components/java/shared/JavaRoadmap';
import JavaWeb from '../components/java/shared/JavaWeb';

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
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default Routes;