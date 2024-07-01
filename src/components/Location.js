import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Locations = () =>{
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

 useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/location')
    .then(response => response.json())
    .then(data => {
        setLocations(data.results);
        setLoading(false);
    })
    .catch(error => console.error('Error fetching data:', error))
 },[] );
 if (loading) {
    return <div>Loading..ak</div>
 }

return (
    <div>
        <h1>Rick and Morty Locations</h1>
        <ul>
                {locations.map(location => (
                    <li key={location.id}>
                        <Link to={`/locations/${location.id}`}>
                            <button>{location.name}</button>
                        </Link>
                    </li>
                ))}
            </ul>
    </div>
)

}
export default Locations;