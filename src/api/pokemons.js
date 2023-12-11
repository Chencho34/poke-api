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

const getAllPokemonsTypes = async () => {
  const limit = 10586
  const response = await fetch(`${baseURL}pokemon?limit=${limit}`)
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

const getPokemonsTypes = async (pokemons) => {
  const types = {}

  pokemons.forEach(pokemon => {
    const type = pokemon.type

    if (!types[type]) {
      types[type] = []
    }

    types[type].push(pokemon)
  })
  return types
}
// const getPokemonsByType = async (pokemons, type) => {
//   const types = {}

//   pokemons.forEach(pokemon => {
//     const type = pokemon.type

//     if (!types[type]) {
//       types[type] = []
//     }

//     types[type].push(pokemon)
//   })
//   return types
// }

// const getPokemonsByType = async (pokemons, typeToShow) => {
//   const types = {}

//   pokemons.forEach(pokemon => {
//     const type = pokemon.type

//     if (!types[type]) {
//       types[type] = []
//     }

//     if (type === typeToShow) {
//       types[type].push(pokemon)
//     }
//   })

//   return types
// }
const getPokemonByName = async (name) => {
  const response = await fetch(`${baseURL}pokemon/${name}/`)
  const data = await response.json()
  return data
}

const getPokemonById = async (id) => {
  const response = await fetch(`${baseURL}pokemon/${id}/`)
  const data = await response.json()
  return data
}

export {
  getAllPokemons,
  getPokemonById,
  getPokemonsTypes,
  getPokemonByName,
  getAllPokemonsTypes
}
