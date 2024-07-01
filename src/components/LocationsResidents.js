import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const LocationsResidents = () => {
    const { locationId } = useParams();
    const [residents, setResidents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(response => response.json())
            .then(data => {
                Promise.all(data.residents.map(url => fetch(url).then(res => res.json())))
                    .then(residentsData => {
                        setResidents(residentsData);
                        setLoading(false);
                    })
                    .catch(error => console.error('Error fetching residents:', error));
            })
            .catch(error => console.error('Error fetching location:', error));
    }, [locationId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Residents</h1>
            <ul>
                {residents.map(resident => (
                    <li key={resident.id}>
                        <Link to={`/residents/${resident.id}`}>
                            <button>{resident.name}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationsResidents;
