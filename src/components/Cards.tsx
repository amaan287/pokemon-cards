import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";

type Pokemon = {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
};

function Cards() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        const pokemonData = response.data.results;
        const fetches = pokemonData.map(
          (pokemon: { name: string; url: string }) => axios.get(pokemon.url)
        );
        return Promise.all(fetches);
      })
      .then((responses) => {
        const detailedPokemonList = responses.map((res) => res.data);
        setPokemonList(detailedPokemonList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-5 py-10">
      <Input
        type="text"
        placeholder="Search Pokemon"
        onChange={handleSearch}
        className="w-full p-5 mb-4 border rounded-xl"
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredPokemonList.map((pokemon, index) => (
          <div key={index} className="card bg-base-100 shadow-xl rounded-2xl">
            <div className="items-center flex justify-center flex-col">
              <h2 className="text-2xl">{pokemon.name}</h2>
              <img
                width={200}
                height={200}
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
