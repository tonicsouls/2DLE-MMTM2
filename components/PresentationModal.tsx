import React, { useEffect } from 'react';

const PresentationModal = ({ onClose }: { onClose: () => void }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4 animate-fade-in"
            onClick={onClose}
        >
            <div
                className="relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 w-full h-full transform transition-all duration-300 scale-95 animate-fade-in-up flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-4 flex justify-between items-center border-b border-gray-700 flex-shrink-0 bg-gray-900/80 backdrop-blur-sm rounded-t-2xl z-10">
                    <h2 className="font-montserrat text-xl font-bold text-white">The 1% Better Story</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>
                <div className="flex-grow bg-gray-800 rounded-b-2xl overflow-hidden">
                    <iframe
                        src="https://service-1-better-presentation-614326876418.us-west1.run.app"
                        title="The 1% Better Story Presentation"
                        frameBorder="0"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default PresentationModal;