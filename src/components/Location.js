import React, { useEffect, useState } from 'react';

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
        <ul>{locations.map(locations => (
            <li key={locations.id}>{locations.name}</li>
        ))}</ul>
    </div>
)

}
export default Locations;