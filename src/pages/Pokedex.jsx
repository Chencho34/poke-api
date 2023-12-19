import { ButtonsGroup, PokemonCards } from '../components'
import { usePagination, usePokemons } from '../hooks'

export default function Pokedex () {
  const limitOfItemsForPagination = 24
  const { handleNextButton, handlePrevButton, handleResetButton, offset } = usePagination(limitOfItemsForPagination)
  const { pokemons } = usePokemons(offset, limitOfItemsForPagination)

  return (
    <main className='h-full flex'>
      <section className='bg-cyan- mx-auto flex flex-col gap-10 justify-center max-w-2xl px-4 py- pt-16   sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 pt-7 pb-11'>
          { 
            pokemons.map(({ name, image, type, id }) => (
              <PokemonCards
                key={name}
                name={name}
                image={image}
                type={type}
                to={id}
              />
            ))
              
          }
        </div>
      </section>
      <ButtonsGroup
        next={handleNextButton}
        prev={handlePrevButton}
        reset={handleResetButton}
      />
  </main>
  )
}