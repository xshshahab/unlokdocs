import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';  // Import close icon
import { Link, Outlet } from 'react-router';

const Ideas = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex">
            {/* Main Content Area */}
            <div className="flex-1 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Project <span className='text-orange-500'>Ideas</span></h1>
                    <button onClick={toggleSidebar} className=" ">
                        <HiOutlineMenuAlt3 color='orange' size={25} />
                    </button>
                </div>

                {/* Content based on selected project */}
                <div id="bottom" className="bg-neutral-900 p-4 rounded-lg">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar (Right Side) */}
            <div
                className={`fixed top-0  right-0 w-64 bg-neutral-800 text-white h-full transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between border-b border-amber-500 items-center p-4">
                    <h2 className="text-lg font-semibold">Projects</h2>
                    <button onClick={toggleSidebar} className="cursor-pointer hover:text-orange-400 bg-zinc-800 hover:bg-zinc-900 p-0.5 rounded-full text-white">
                        <AiOutlineClose size={18} />
                    </button>
                </div>
                <ul className="space-y-4 font-medium p-4">
                    <li>
                        <Link onClick={toggleSidebar} to="" className="text-lg text-gray-300 hover:text-orange-500">
                            Resume Analyzer
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleSidebar} to="project-2" className="text-lg text-gray-300 hover:text-orange-500">
                            Real-time collaboration
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleSidebar} to="project-3" className="text-lg text-gray-300 hover:text-orange-500">
                            Help Developer Community
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleSidebar} to="roadmap" className="text-lg text-gray-300 hover:text-orange-500">
                            Roadmap
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Ideas;
