const baseURL = 'https://pokeapi.co/api/v2/'

const getAllPokemons = async (offset, limit) => {
  const response = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
  const data = await response.json()

  const getAllPokemonPromises = data.results.map(async (pokemon) => {
    const response = await fetch(pokemon.url)
    const data = await response.json()
    return {
      id: data.id,
      name: data.name,
      exp: data.base_experience,
      type: data.types[0].type.name,
      image: data.sprites.other.home.front_default
    }
  })

  return await Promise.all(getAllPokemonPromises)
}

const getPokemonsByTypes = async (type) => {
  const response = await fetch(`${baseURL}type/${type}/`)
  const data = await response.json()

  const getAllPokemonPromises = data.pokemon.map(async ({ pokemon }) => {
    const response = await fetch(pokemon.url)
    const data = await response.json()
    return {
      id: data.id,
      name: data.name,
      exp: data.base_experience,
      type: data.types[0],
      image: data.sprites.other.home.front_default
    }
  })

  return await Promise.all(getAllPokemonPromises)
}

const getPokemonByName = async (name) => {
  const response = await fetch(`${baseURL}pokemon/${name}/`)
  const data = await response.json()
  return data
}

const getPokemonById = async (id) => {
  const response = await fetch(`${baseURL}pokemon/${id}/`)
  const data = await response.json()

  return {
    id: data.id,
    name: data.name,
    exp: data.base_experience,
    image: data.sprites.other.home.front_default,
    type: data.types,
    height: data.height,
    weight: data.weight,
  }
}

export {
  getAllPokemons,
  getPokemonsByTypes,
  getPokemonByName,
  getPokemonById,
}
