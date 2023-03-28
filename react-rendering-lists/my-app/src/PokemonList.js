export default function PokemonList({pokedex, name}) {
  const pokemonList = pokedex.map(pokemon => <li>{pokemon.name}</li>)

  return (
    <ul>{pokemonList}</ul>
  )
}
