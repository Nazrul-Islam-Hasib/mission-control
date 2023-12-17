// Importing necessary components and libraries
import axios, { HttpStatusCode } from "axios";
import DetailsCard from "../DetailsCard/DetailsCard";
import { useEffect, useState, useRef } from "react";

// Functional component for displaying live Spectrum status
const SpectrumStatusLive = () => {
    // URLs for Spectrum data and WebSocket connection
    const actOnSpectrumUrl = import.meta.env.VITE_ACT_ON_SPECTRUM_URL;
    const WsSpectrumStatusUrl = import.meta.env.VITE_SPECTRUM_WS_URL;

    // State variables for Spectrum data, modal visibility, loading state, and action completion
    const [spectrumData, setSpectrumData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isActionCompleted, setIsActionCompleted] = useState(false);

    // Ref for the user action modal and WebSocket connection
    const uerActionModalRef = useRef(null);
    const socketRef = useRef(null);

    // Function to open the user action modal and close the WebSocket connection
    const handleModalOpen = () => {
        setIsModalOpen(true);
        if (socketRef.current) {
            socketRef.current.close();
        }
        uerActionModalRef.current.showModal();
    };

    // Function to close the user action modal
    const handleModalClose = () => {
        setIsModalOpen(false);
        uerActionModalRef.current.close();
    };

    // Fetch data in streams via WebSocket
    useEffect(() => {
        const fetchDataInStreams = async () => {
            try {
                // Establish a WebSocket connection
                socketRef.current = new WebSocket(WsSpectrumStatusUrl);

                // Open the WebSocket connection only if the modal is not open
                if (!isModalOpen) {
                    // Handle WebSocket events
                    socketRef.current.onopen = () => {
                        console.log('WebSocket connection opened');
                    };
                    socketRef.current.onmessage = (event) => {
                        // Skip data processing if the modal is open
                        if (!isModalOpen) {
                            // Parse the incoming WebSocket data
                            const newData = JSON.parse(event.data);

                            // Update the spectrumData state with the new data
                            setSpectrumData(newData);

                            // Show the modal if action is required
                            if (newData.IsActionRequired) {
                                handleModalOpen();
                            }
                        }
                    };

                    socketRef.current.onclose = (event) => {
                        console.log('WebSocket connection closed:', event);
                    };

                    socketRef.current.onerror = (error) => {
                        console.error('WebSocket error:', error);
                    };
                } else {
                    // Close the WebSocket connection if the modal is open
                    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
                        socketRef.current.close();
                    }
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchDataInStreams();

    // Dependency array ensures that this effect runs when isModalOpen or WsSpectrumStatusUrl changes
    }, [isModalOpen, WsSpectrumStatusUrl]);

    // Function to fetch data or perform tasks related to critical status change
    const fetchData = async () => {
        try {
            // Make an HTTP request to perform an action based on Spectrum status
            const response = await axios.get(actOnSpectrumUrl);

            // If the request is successful (status code 200)
            if (response.status === HttpStatusCode.Ok) {
                setIsActionCompleted(true);
            }
        } catch (error) {
            console.error('Error performing action:', error);
        } finally {
            // Set loading state to false regardless of success or failure
            setIsLoading(false);
        }
    };

    // Function to handle user action on Spectrum status
    const handleActOnSpectrum = async () => {
        setIsLoading(true);
        // Perform the data fetch action
        await fetchData();
    };

    // Render the SpectrumStatusLive component
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {/* Display Spectrum status using DetailsCard component */}
                    <DetailsCard spectrumData={spectrumData}></DetailsCard>

                    {/* User Action Modal */}
                    <dialog ref={uerActionModalRef} id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleModalClose}>✕</button>
                            </form>
                            <h3 className="font-bold text-lg text-red-500">Hello!</h3>
                            <p className="py-4">User Action required</p>
                            {isActionCompleted ? (
                                <p className="py-4 text-success">Action completed successfully!</p>
                            ) : (
                                <>
                                    <p className="py-4">User action is required.</p>
                                    <button className="btn btn-primary" onClick={handleActOnSpectrum} disabled={isLoading}>
                                        {isLoading ? 'Processing...' : 'Act Now'}
                                    </button>
                                </>
                            )}
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SpectrumStatusLive;
