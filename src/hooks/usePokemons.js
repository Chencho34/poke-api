import { useState, useEffect } from 'react'
import { getAllPokemons } from '../api/pokemons'

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

export {
  usePokemons
}
