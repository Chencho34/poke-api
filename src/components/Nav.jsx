import { useState } from 'react'

export default function Nav() {
  return (
    <nav className='bg-gradient-to-r from-gray-800  to-[rgba(32,34,32,0.62)] w-screen h-16'>
      <section className='flex items-center justify-between w-11/12 h-full mx-auto'>
        <article className='flex flex-row items-center gap-4 space-y-1.5'>
          <h3 className='text-2xl text-white font-semibold leading-none tracking-tight'>Pokedex</h3>
          <p className='hidden sm:block text-sm text-white'>Encyclopedia of Pokemon</p>
        </article>
        <article className='hidden sm:flex items-center gap-4 bg-gray-900 rounded-lg px-1 pr-0'>
          <NavItems /> 
          <NavInput />
        </article>
        <NavMenu />
      </section>
    </nav>
  )
}

function NavMenu () {
  return (
    <p className='sm:hidden'>Burger</p>
  )
}

function NavItems () {
  const [isClicked, setIsClicked] = useState(0)
  const handleClick = (index) => setIsClicked(index)
  const paths = [{ to: '', item: 'All pokemons' }, { to: '', item: 'Types' }]

  return (
    <ul className='hidden lg:flex flex-row gap-2'>
      {paths.map(({item}, index) => (
        <li 
          key={index} 
          onClick={() => handleClick(index)} 
          className={`${isClicked === index ? 'bg-gray-700 text-white' : ''} rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500` }
        >
          <a href='#'>{item}</a>
        </li>     
      ))}    
    </ul>
  )
}

function NavInput () {
  return (
    <form className='flex items-center justify-center gap-2 p-1 rounded-lg max-w-md mx-auto'>
      <input
        id='pokemon-name'
        maxLength={20}
        placeholder='Pokémon name'
        className='flex h-full w-full rounded-md bg-gray-800 px-3 py-2 text-sm file:border-0 file:bg-transparent file:font-medium outline-none text-gray-300 font-medium '
      />
      <button className='inline-flex h-full items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500'>
        Search
      </button>
    </form>
  )
}