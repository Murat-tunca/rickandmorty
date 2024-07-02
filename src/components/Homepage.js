import React, { useEffect, useState } from 'react';

const Homepage = () => {
    const [homepages, setHomepages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandomCharacter = async () => {
            try {
                const characterId = Math.floor(Math.random() * 671) + 1; 
                const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
                const data = await response.json();
                setHomepages([data]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchRandomCharacter();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Any Characters</h1>
            <ul>
                {homepages.map(character => (
                    <li key={character.id}>
                        <img src={character.image} alt={character.name} />
                        {character.name} - {character.status} - {character.species} - {new Date(character.created).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Homepage;
