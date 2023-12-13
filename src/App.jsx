import { ButtonsGroup, Nav, PokemonCards, Spinner } from './components'
import { usePagination, usePokemons } from './hooks'
import './App.css'
import { useState } from 'react'

export default function App() {
  const limitOfItemsForPagination = 24
  const { handleNextButton, handlePrevButton, handleResetButton, offset } = usePagination(limitOfItemsForPagination)
  const { pokemons, loading } = usePokemons(offset, limitOfItemsForPagination)
  
  const [formInput, setFormInput] = useState([])
  const filterPokemons = (name) => pokemons.filter((pokemon) => (pokemon.name.includes(name)))
  const handleChange = (e) => {
    const { value } = e.target
    const fill = filterPokemons(value)
    setFormInput(fill)
  }
  
  return (
    <>
      <Nav />
      <div>
        <input type='text'
          name='name'
          placeholder='serach pokemon'
          value={formInput.name}
          onChange={handleChange}
        />
        <div>
          {
            formInput.map((poke) => (
              <section key={poke.id} className='flex'>
                <h1>{poke.name}</h1>
                <span>{poke.id}</span>
                <img src={poke.image} width={20} alt='' />
              </section>
            ))
          }
        </div>
        <section className='bg-white'>
          <section className='mx-auto flex flex-col gap-10 justify-center max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8'>
            <ButtonsGroup
              next={handleNextButton}
              prev={handlePrevButton}
              reset={handleResetButton}
            />
            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
              {loading ? (
                <Spinner />
              ) : (
                pokemons.map(({ name, image, type }) => (
                  <PokemonCards
                    key={name}
                    name={name}
                    image={image}
                    type={type}
                  />
                ))
              )}
            </div>
            <ButtonsGroup
              next={handleNextButton}
              prev={handlePrevButton}
              reset={handleResetButton}
            />
          </section>
        </section>
      </div>
    </>
  )
}
