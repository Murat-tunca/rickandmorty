import React, { useEffect, useState } from 'react';

const Homepage = () =>{
    const [homepages, setHomepages] = useState([]);
    const [loading, setLoading] = useState(true);

 useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive')
    .then(response => response.json())
    .then(data => {
        setHomepages(data.results);
        setLoading(false);
    })
    .catch(error => console.error('Error fetching data:', error))
 },[] );
 if (loading) {
    return <div>Loading..ak</div>
 }

return (
    <div>
        <h1>Any Characters</h1>
        <ul>{homepages.map(character => (
            <li key={character.id}>{character.name}    {character.status}    {character.species}    {character.created} </li>
        ))}</ul>
    </div>
)

}
export default Homepage;