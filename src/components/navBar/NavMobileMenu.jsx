import { useState } from 'react'
import { RiCloseLine, RiMenu3Line, RiSearchLine } from 'react-icons/ri'

export default function NavMobileMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleClick = () => setToggleMenu(!toggleMenu)

  return (
    <div className='lg:hidden'>
      <button className='flex items-center'>
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            className='text-gray-200 duration-500 rounded-md hover:bg-gray-700 scale-up-center'
            onClick={handleClick}
          />
        ) : (
          <RiMenu3Line
            size={27}
            className='text-gray-200 duration-500 rounded-md hover:bg-gray-700 scale-up-center'
            onClick={handleClick}
          />
        )}
      </button>
        {toggleMenu && (
          <section className='absolute top-16 right-0 bg-gray-900 text-end rounded-lg p-0.5 flex flex-col rounded-t-none items-center gap-2 w-full scale-up-ver-top'>
            <ul className='lg:hidden flex flex-col gap-1 w-full'>
              <li className='rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500 mx-auto w-full text-center bg-gray-900'>
                <a href='#'>All pokemons</a>
              </li>
              <li className='rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500 mx-auto w-full text-center'>
                <a href='#'>Type</a>
              </li>
            </ul>
            <form className='sm:hidden flex items-center rounded-lg bg-gray-950 p-0.5 w-full'>
              <label htmlFor='pokemonName' className='flex flex-row items-center w-full justify-evenly gap-2'>
                <input
                  type='text'
                  name='pokemonName'
                  id='pokemonName'
                  maxLength={20}
                  placeholder='Pokémon name'
                  className='flex w-[80%] h-full rounded-md bg-gray-800 px-3 py-2 text-sm file:border-0 file:bg-transparent file:font-medium outline-none text-gray-300 font-medium'
                />
                <span className='inline-flex gap-2 h-full  items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500'>
                  <RiSearchLine size={20} />
                </span>
              </label>
            </form>
          </section>
        )}
    </div>
  )
}