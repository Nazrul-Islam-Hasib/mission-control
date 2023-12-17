// Importing necessary components and libraries
import DetailsCard from "../DetailsCard/DetailsCard";
import { useEffect, useState } from "react";
import axios, { HttpStatusCode } from 'axios';

// Functional component for displaying Spectrum status
const SpectrumStatus = () => {
    // State to store Spectrum status data and trigger data reload
    const [spectrumData, setSpectrumData] = useState([]);
    const [reloadData, setReloadData] = useState(false);

    // URL for Spectrum status data, fetched from environment variables
    const spectrumStatusUrl = import.meta.env.VITE_SPECTRUM_STATUS_URL;

    // Fetch data for the Spectrum status.
    // Runs once at the start of the render and depends on reloadData state
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Spectrum status data from the provided URL
                const response = await axios.get(spectrumStatusUrl);

                // If the request is successful (status code 200)
                if (response.status === HttpStatusCode.Ok) {
                    // Update the spectrumData state with the new data
                    setSpectrumData(response.data);
                }
            } catch (error) {
                // Log an error message if there's an issue fetching data
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();

    // Dependency array ensures that this effect runs when reloadData or spectrumStatusUrl changes
    }, [reloadData, spectrumStatusUrl]);

    // Function to handle manual data fetch triggered by user action
    const handleFetchData = () => {
        // Toggle the reloadData state to trigger a data fetch
        setReloadData(!reloadData);
    };

    // Render the Spectrum status component
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {/* Display Spectrum status using DetailsCard component */}
                    <DetailsCard spectrumData={spectrumData}></DetailsCard>

                    {/* Button to manually check Spectrum status */}
                    <button className="btn btn-primary mt-4" onClick={handleFetchData}>
                        Check Status
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpectrumStatus;
