import { ButtonsGroup, Nav, PokemonCards } from './components'
import { usePagination, usePokemons } from './hooks'
import './App.css'
import { getPokemonById } from './services/api/pokemons'
import { useEffect, useState } from 'react'

export default function App() {
  const limitOfItemsForPagination = 24
  const { handleNextButton, handlePrevButton, handleResetButton, offset } = usePagination(limitOfItemsForPagination)
  const { pokemons } = usePokemons(offset, limitOfItemsForPagination)
  const [currentPokemon, setCurrentPokemon] = useState(1)
  const [detail, setDetail] = useState([])


  useEffect(() => {
    getPokemonById(currentPokemon).then((data) => setDetail(data))
  }, [currentPokemon])
  
  const showInfo = (id) => {
    console.log(id)
    setCurrentPokemon(id)
  }

  console.log(detail)

  return (
    <div className=''>
      <header className='relative'>
        <Nav />
      </header>
      <main className='py-6'>
        <section className='mx-auto flex flex-col gap-10 justify-center max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8'>
          {
            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
              { 
                pokemons.map(({ name, image, type, id }) => (
                  <PokemonCards
                    key={name}
                    name={name}
                    
                    image={image}
                    type={type}
                    onClick={() => showInfo(id)}
                  />
                ))
                  
              }
            </div>
          }
          
          <div className='bg-cyan-900 h-32 w-32 absolute top-10 left-10'>
            <h1>{detail.name}</h1>
            {/* <img src={detail.sprites.other.home.front_default} alt='img' /> */}
          </div>
          <ButtonsGroup
            next={handleNextButton}
            prev={handlePrevButton}
            reset={handleResetButton}
          />
        </section>
      </main>
    </div>
  )
}
