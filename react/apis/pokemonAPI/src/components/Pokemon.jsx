import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
    
    const [pokemonList, setPokemonList] = useState([]);

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => {return response.json()})
        .then(response => {setPokemonList(response.results)})
        .catch(err => {console.log(err)});
    }, []);
    
    return(
        <div>
            <h3>Fetch Pokemon</h3>
            <ul>
                {
                    pokemonList.map((pokemon, idx) => {
                        return(
                            <li key={idx}>{pokemon.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Pokemon;