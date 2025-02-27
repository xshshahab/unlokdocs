import React from 'react';
import { Link, Outlet } from 'react-router';

const Java = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-semibold text-center text-orange-500 mb-4">Everything About Java</h1>

            <div id="tabs" className="mb-8">
                <div className="flex space-x-4 justify-center">
                    <Link
                        to=""
                        className="text-xl px-4 bg-zinc-800 hover:bg-zinc-900 p-2  font-medium rounded-lg text-orange-50 hover:text-orange-500  transition-all duration-300 pb-2"
                    >
                        JavaYt
                    </Link>
                    <Link
                        to="javaRoadmap"
                        className="text-xl px-4 bg-zinc-800 hover:bg-zinc-900 p-2 rounded-lg font-medium text-orange-50 hover:text-orange-500  transition-all duration-300 pb-2"
                    >
                        JavaRoadmap
                    </Link>
                    <Link
                        to="java-web"
                        className="text-xl px-4 bg-zinc-800 hover:bg-zinc-900 p-2 rounded-lg font-medium text-orange-50 hover:text-orange-500  transition-all duration-300 pb-2"
                    >
                        JavaWeb
                    </Link>
                </div>
            </div>

            <div className="tab-content mt-8 bg-neutral-950 p-4 rounded-lg shadow-lg">
                <Outlet />
            </div>
        </div>
    );
};

export default Java;
