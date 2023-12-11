import { useState, useEffect } from 'react'
import { getAllPokemons, getAllPokemonsTypes, getPokemonsTypes } from '../api/pokemons'

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

const usePokemonsTypes = () => {
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState()

  useEffect(() => {
    getAllPokemonsTypes()
      .then((allpokemons) => setPokemons(allpokemons))

    getPokemonsTypes(pokemons)
      .then((types) => setTypes(types))
  }, [])

  return { pokemons, types }
}

export {
  usePokemons,
  usePokemonsTypes
}
