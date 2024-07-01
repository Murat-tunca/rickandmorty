import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ResidentDetails = () => {
    const { residentId } = useParams();
    const [resident, setResident] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${residentId}`)
            .then(response => response.json())
            .then(data => {
                setResident(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [residentId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{resident.name}</h1>
            <img src={resident.image} alt={resident.name} />
            <p>Status: {resident.status}</p>
            <p>Species: {resident.species}</p>
            <p>Gender: {resident.gender}</p>
            <p>Origin: {resident.origin.name}</p>
        </div>
    );
};

export default ResidentDetails;
