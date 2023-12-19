import { useState, useEffect } from 'react'
import { getAllPokemons, getPokemonById, getPokemonsByTypes } from '../services/api/pokemons'

const usePokemons = (offset, limitOfItemForPagination) => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPokemons(offset, limitOfItemForPagination)
      .then((allPokemons) => {
        setPokemons(allPokemons)
        setLoading(false)
      })
      .catch((error) => console.log('msg', error))
  }, [offset, limitOfItemForPagination])

  return { pokemons, loading }
}

const usePokemonsTypes = (type) => {
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPokemonsByTypes(type)
      .then((types) => {
        setTypes(types)
        setLoading(false)
      })
      .catch((error) => console.log('msg', error))
  }, [])

  return { types, loading }
}

const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState({})
  const formatId = Number(id.split(':').pop())

  useEffect(() => {
    getPokemonById(formatId)
      .then((pokemon) => {
        setPokemon(pokemon)
      })
      .catch((error) => console.log('mdg', error))
  }, [])

  return { pokemon }
}

export {
  usePokemons,
  usePokemonsTypes,
  usePokemon
}
