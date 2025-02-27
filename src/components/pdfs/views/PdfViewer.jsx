import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Transition } from "@headlessui/react";

// ✅ Correct way to load the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

const PdfViewer = ({ pdfFile, isOpen, onClose }) => {
    const [numPages, setNumPages] = useState(null);
    const [error, setError] = useState("");

    return (
        <Transition
            show={isOpen}
            enter="transition transform duration-300 ease-out"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition transform duration-200 ease-in"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
            className="fixed bottom-0 left-0 w-full h-4/5 bg-zinc-900 shadow-lg border-t border-gray-300 z-50 rounded-t-xl"
        >
            <div className="p-4 flex flex-col h-full">
                <button onClick={onClose} className="self-end text-gray-700 text-xl">✖</button>
                <div className="overflow-auto flex-1">
                    {error && <p className="text-red-500">{error}</p>}
                    <Document
                        file={pdfFile}
                        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                        onLoadError={(err) => setError("Failed to load PDF: " + err.message)}
                        className="flex flex-col items-center"
                    >
                        {numPages &&
                            Array.from({ length: numPages }, (_, index) => (
                                <Page key={index} pageNumber={index + 1} className="my-2 shadow-md" />
                            ))
                        }
                    </Document>
                </div>
            </div>
        </Transition>
    );
};

export default PdfViewer;
