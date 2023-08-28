import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = (props) => {

    const [pokemonList, setPokemonList] = useState([]);

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then((response) => {
            console.log(response.data);
            setPokemonList(response.data.results);
        })
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