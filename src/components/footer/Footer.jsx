import React from "react";
import { Link } from "react-router";
import SocialLinks from "./nav/SocialLinks";

const footerLinks = [
    { name: "YouTube", path: "/pages/yt-links" },
    { name: "Java", path: "/pages/java" },
    { name: "Frontend", path: "/pages/frontend" },
    { name: "Ideas", path: "/pages/ideas" },
    { name: "PDFs", path: "/pages/pdfs" },
];

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-white py-6 px-4 md:px-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <Link to="/" className="text-2xl font-bold">
                        Unlok<span className="text-orange-500">Docs</span>
                    </Link>
                    <p className="text-sm text-gray-400 mt-2">Your Dev Knowledge Hub</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 my-4 md:my-0">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-gray-300 hover:text-orange-500 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 md:justify-end">
                    <SocialLinks />
                </div>
            </div>

            <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} UnlokDocs. All rights reserved | Crafted with ❤️ by{" "}
                <a
                    className="text-orange-500 hover:underline"
                    href="http://x.com/xsh_shahab"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @xsh_shahab
                </a>
            </div>
        </footer>
    );
};

export default Footer;
