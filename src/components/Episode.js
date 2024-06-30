import React, { useEffect, useState } from 'react';

const Episodes = () =>{
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

 useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(data => {
        setEpisodes(data.results);
        setLoading(false);
    })
    .catch(error => console.error('Error fetching data:', error))
 },[] );
 if (loading) {
    return <div>Loading..am</div>
 }

return (
    <div>
        <h1>Rick and Morty Episodes</h1>
        <ul>{episodes.map(episodes => (
            <li key={episodes.id}>{episodes.name}</li>
        ))}</ul>
    </div>
)

}
export default Episodes;