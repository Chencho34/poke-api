import { useEffect, useState } from 'react'
import { ButtonsGroup, PokemonCards } from '../components'
import { usePagination, usePokemons } from '../hooks'
import { getPokemonById } from '../services/api/pokemons'

export default function Pokedex () {
  const limitOfItemsForPagination = 24
  const { handleNextButton, handlePrevButton, handleResetButton, offset } = usePagination(limitOfItemsForPagination)
  const { pokemons } = usePokemons(offset, limitOfItemsForPagination)

  const [currentPokemon, setCurrentPokemon] = useState(0)
  const [detail, setDetail] = useState([])

  useEffect(() => {
    getPokemonById(currentPokemon).then((data) => setDetail(data))
  }, [currentPokemon])
  
  const [mostrarElemento, setMostrarElemento] = useState(false)
  
  const showDetailPokemon = (id) => {
    setCurrentPokemon(id)
    setMostrarElemento(true)
  }

  const handleMouseOut = () => {
    setMostrarElemento(false)
  }
  
  return (
    <main className='py-6'>
    <section className='mx-auto flex flex-col gap-10 justify-center max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8'>
      
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
        { 
          pokemons.map(({ name, image, type, id }) => (
            <PokemonCards
              key={name}
              name={name}
              image={image}
              type={type}
              out={handleMouseOut}
              over={() => showDetailPokemon(id)}
              // onClick={() => showDetailPokemon(id)}
            />
          ))
            
        }
      </div>
     {detail && mostrarElemento && <div className='bg-cyan-900 h-32 w-32 absolute top-10 left-10'>
        <h1>{detail.name}</h1>
        {/* <img src={detail.sprites.other.home.front_default} alt='img' /> */}
      </div>}
      <ButtonsGroup
        next={handleNextButton}
        prev={handlePrevButton}
        reset={handleResetButton}
      />
    </section>
  </main>
  )
}