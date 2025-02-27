import React, { useState } from "react";
import PdfViewer from "./views/PdfViewer";

const Pdf = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const pdfFiles = [
        { name: "DSA Notes", path: `${import.meta.env.BASE_URL}dsa.pdf` },
        { name: "React Guide", path: `${import.meta.env.BASE_URL}reactjs.pdf` },
        { name: "JavaScript Handbook", path: `${import.meta.env.BASE_URL}js-ebook.pdf` },
        { name: "Altamash Ahmad Resume", path: `${import.meta.env.BASE_URL}resume.pdf` },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-4">📚 Select a PDF</h1>

            <div className="space-y-4">
                {pdfFiles.map((pdf, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setSelectedPdf(pdf.path);
                            setIsOpen(true);
                        }}
                        className="px-4 mx-2 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        {pdf.name}
                    </button>
                ))}
            </div>

            {/* PDF Viewer Modal */}
            {isOpen && (
                <PdfViewer
                    pdfFile={selectedPdf}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default Pdf;
