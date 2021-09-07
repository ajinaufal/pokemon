import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../Query/ListPoke";
import { Container } from "purgecss/node_modules/postcss";
import axios from "axios";

function Home() {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {
            offset: 0,
        },
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log('Response from server', data);

    return (
        <div class="container bg-red-700 md:mx-auto">
            <h1 class="text-5xl text-center mb-7">List Pokemon</h1>
            {data && (
                <div class="grid grid-cols-6 gap-2">
                    {console.log(data)}
                    {objPokemon(data.pokemons.results[0].url)}
                    {data.pokemons.results.map(item => (
                        <div class="box-content h-56 w-40 mx-auto bg-gray-800">
                            {/* <div class="grid grid-cols-2"> */}
                            <h1 class="text-lg text-white"> {item.name} </h1>
                            <img src={item.image} alt={item.name} />
                            
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function objPokemon(url) {
    axios.get(url)
    .then((res) => {
        console.log(res.data)
    })
}

// function objpokemon(url) {
//     fetch(url, {
//         credentials: 'omit',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             query: gqlQuery,
//         }),
//         method: 'POST',
//     })
// }

export default Home;

