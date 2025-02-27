import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FiX } from "react-icons/fi";
import { TbMenu } from "react-icons/tb";
import SocialLinks from "./nav/SocialLinks";

const navLinks = [
    { name: "YouTube", path: "/pages/yt-links" },
    { name: "Java", path: "/pages/java" },
    { name: "Frontend", path: "/pages/frontend" },
    { name: "Ideas", path: "/pages/ideas" },
    { name: "PDFs", path: "/pages/pdfs" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-neutral-950 text-white p-3 px-4 md:px-10 flex justify-between items-center relative">
                <Link to="/" className="text-2xl font-bold">
                    Unlok<span className="text-orange-500">Docs</span>
                </Link>
                <div className="hidden md:flex gap-6 items-center border border-neutral-800 px-6 py-2.5 rounded-3xl">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `transition ${isActive ? "text-orange-500" : "text-white hover:text-orange-500"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <SocialLinks />

                    <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
                        <TbMenu size={26} />
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-4 flex justify-between items-center border-b border-neutral-800">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <FiX size={24} className="text-white" />
                    </button>
                </div>
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `transition ${isActive ? "text-orange-500" : "text-white hover:text-orange-500"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
