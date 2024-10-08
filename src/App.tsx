import { useState, useEffect } from 'react';
import DogDisplay from './components/DogDisplay';

export default function App() {
    const [dogData, setDogData] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch dog data from the API
    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const response = await fetch('https://random.dog/woof.json');
                const data = await response.json();
                setDogData(data.url); // Set dog image URL
                setIsLoading(false); // Stop loading
            } catch (error) {
                setError('Error fetching dog image.');
                setIsLoading(false); // Stop loading on error
            }
        };

        fetchDogData();
    }, []); // Empty dependency array means this runs once when component mounts

    // Component rendering
    return (
        <div>
            <h1>Doggie Today</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <DogDisplay dogUrl={dogData} />
            )}
        </div>
    );
}

