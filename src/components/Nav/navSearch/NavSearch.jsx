import { RiSearchLine } from 'react-icons/ri'
import { usePokemons } from '../../../hooks'
import { useState } from 'react'
import Card from '../../Card/Card'

export default function NavSearch () {
  const { pokemons } = usePokemons(0, 100)
  const [ pokemonsFound, setPokemonsFound ] = useState([])

  const filterPokemons = (name) => pokemons.filter((pokemon) => pokemon.name.includes(name.toLowerCase())) 

  const handleOnChange = (e) => {
    const { value } = e.target
    const filteredPokemons = filterPokemons(value) 
    setPokemonsFound(value ? filteredPokemons : [])
  }

  return (
    <>
      <form className='hidden sm:block rounded-lg scale-up-center'>
        <label htmlFor='pokemonName' className='flex flex-row items-center gap-1 p-0.5 relative'>
          <input
            type='text'
            name='pokemonName'
            id='pokemonName'
            onChange={handleOnChange}
            autoComplete='off'
            maxLength={20}
            placeholder='Pokémon name'
            className='h-full w-auto rounded-md bg-gray-800 px-3 pl-9 py-2 text-sm file:border-0 file:bg-transparent file:font-medium outline-none text-gray-300 font-medium'
          />
          <span className=' text-gray-300 hover:text-white rounded-md transition-colors duration-500 absolute left-3'>
            <RiSearchLine size={18} />
          </span>
        </label>
      </form>
      { pokemonsFound && pokemonsFound.length != 0 &&
        <div className='fixed grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 top-16 right-0 left-0 mx-auto bg-gradient-to-r from-gray-900 to-gray-700/80 bg-transparent backdrop-blur-lg text-white p-7 h-screen overflow-hidden overflow-y-auto'>
          {
            pokemonsFound.map(({ id, name, image }) => (
              <Card
                key={id}
                image={image}
                name={name}
                id={id}
                to={id}
              />
            ))
          }
        </div>
      }
    </>
  )
}