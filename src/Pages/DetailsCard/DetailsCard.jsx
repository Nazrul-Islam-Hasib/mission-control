// Importing necessary components and libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faTemperatureHigh, faCircleExclamation, faChartLine, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

// Function to get a property from an object case-insensitively
const getPropertyCaseInsensitive = (obj, prop) => {
    const keys = Object.keys(obj);
    const lowerProp = prop.toLowerCase();
    const matchedKey = keys.find(key => key.toLowerCase() === lowerProp);
    return matchedKey ? obj[matchedKey] : undefined;
};

// Functional component for displaying Spectrum details
const DetailsCard = (spectrumData) => {
    // Extracting relevant data from the spectrumData prop
    const statusMessage = getPropertyCaseInsensitive(spectrumData.spectrumData, 'statusMessage') || getPropertyCaseInsensitive(spectrumData.spectrumData, 'StatusMessage');
    const velocity = getPropertyCaseInsensitive(spectrumData.spectrumData, 'velocity') || getPropertyCaseInsensitive(spectrumData.spectrumData, 'Velocity');
    const altitude = getPropertyCaseInsensitive(spectrumData.spectrumData, 'altitude') || getPropertyCaseInsensitive(spectrumData.spectrumData, 'Altitude');
    const temperature = getPropertyCaseInsensitive(spectrumData.spectrumData, 'temperature') || getPropertyCaseInsensitive(spectrumData.spectrumData, 'Temperature');
    const isAscending = getPropertyCaseInsensitive(spectrumData.spectrumData, 'isAscending') || getPropertyCaseInsensitive(spectrumData.spectrumData, 'IsAscending');
    const isActionRequired = getPropertyCaseInsensitive(spectrumData.spectrumData, 'isActionRequired') || getPropertyCaseInsensitive(spectrumData.spectrumData, 'IsActionRequired');

    // Render the Spectrum details card
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold">Spectrum Status</h2>
                <p>Message: <span className='text-primary'>{statusMessage}</span> </p>

                {/* Displaying Spectrum statistics */}
                <div className="stats stats-vertical shadow text-primary">
                    <div className="stat place-items-center">
                        <div className="stat-title">Velocity <FontAwesomeIcon className="text-success" icon={faRocket} /></div>
                        <div className="stat-value text-lg">{velocity}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Altitude <FontAwesomeIcon className="text-success" icon={faChartLine} /></div>
                        <div className="stat-value text-lg">{altitude}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Temperature <FontAwesomeIcon className="text-success" icon={faTemperatureHigh} /></div>
                        <div className="stat-value text-lg">{temperature}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Ascending <FontAwesomeIcon className="text-success" icon={faCircleExclamation} /></div>
                        <div className="stat-value text-lg">{isAscending?.toString()}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Action Required <FontAwesomeIcon className="text-success" icon={faUserAstronaut} /></div>
                        <div className="stat-value text-lg">{isActionRequired?.toString()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
