import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import { javaVideoData } from '../../../data/javaVideoData';
import YT from "../../../assets/YT.jpg";

const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = YT;
};

const JavaYt = () => {
    return (
        <div className="max-w-7xl mx-auto p-2">
            <h1 className="text-3xl font-semibold text-center text-orange-500 mb-4">
                Must Watch Java Tutorials on YouTube
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {javaVideoData.map((video) => (
                    <div key={video.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-zinc-800 hover:shadow-xl transition-shadow duration-300">
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                            <img
                                className="w-full h-48 object-cover rounded-t-lg"
                                src={video.thumbnail}
                                alt={video.title}
                                onError={handleError}
                            />
                            <div className="px-4 py-3 flex items-center justify-between bg-zinc-800">
                                <h3 className="text-lg font-semibold text-orange-500 truncate w-3/4">{video.title}</h3>
                                <LuArrowUpRight className="text-orange-500 text-xl" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JavaYt;
