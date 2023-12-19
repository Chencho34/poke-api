import { useState } from 'react'
import { RiMenu3Line, RiCloseLine, RiSearchLine } from 'react-icons/ri'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'
import { paths } from '../../constants'
import { usePokemons } from '../../hooks'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
  
export default function Nav () {
  return (
    <nav className='w-full h-16 bg-gray-800 bg-gradient-to-r from-gray-900 to-gray-700/80 bg-transparent fixed backdrop-blur-sm z-50'>
      <section className='flex items-center justify-between flex-1 w-11/12 h-full mx-auto max-w-7xl'>
        <article className='flex flex-row items-center gap-4 space-y-1.5'>
          <h3 className='text-2xl text-white font-semibold leading-none tracking-tight flex items-center'>Pokedex </h3>
          <p className='hidden lg:block text-sm text-white'>Encyclopedia of Pokemon</p>
        </article>
        <article className='flex items-center h- w-auto gap-1 bg-gradient-to-l from-gray-800 to-gray-700 rounded-lg sm:px-1 sm:h-10'>
          <NavItemsDesktop />
          <NavSearchDesktop />
          <section className='flex items-center gap-3'>
            <section className='hidden lg:block'>
              <NavDarkModeBtn />
            </section>
            <NavMobileMenu />
          </section>
        </article>
      </section>
    </nav>
  )
}

function NavItemsDesktop () {
  const [isClicked, setIsClicked] = useState(0)
  const handleClick = (index) => setIsClicked(index)

  return (
    <ul className='hidden lg:flex flex-row gap-2 scale-up-center'>
      {
        paths.map(({ item,to }, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <Link
              to={to}
              className={`${
                isClicked === index ? 'bg-gray-700 text-white' : ''
              } rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500`}
            >
              {item}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

function NavDarkModeBtn () {
  const [modeTheme, setModeTheme] = useState(false)
  const handleModeTheme = () => setModeTheme(!modeTheme)

  return (
    <span className='rounded-md text-gray-300 cursor-pointer hover:text-white transition-colors duration-500'>
      {
        modeTheme 
          ? <MdOutlineLightMode onClick={handleModeTheme} className='scale-up-cente' size={23}/>
          : <MdOutlineNightlight onClick={handleModeTheme} className='scale-up-cente' size={23}/>
      }
    </span>
  )
}

function NavMobileMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleClick = () => setToggleMenu(!toggleMenu)

  return (
    <div className='lg:hidden'>
      <button className='flex items-center'>
        {
          toggleMenu 
            ? <RiCloseLine size={27} className='text-gray-200 duration-500 scale-up-center' onClick={handleClick} />
            : <RiMenu3Line size={27} className='text-gray-200 duration-500 scale-up-center' onClick={handleClick} />
        }
      </button>
      {toggleMenu && 
        <section className='flex flex-col items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700/80 backdrop-blur-sm rounded-lg sm:px-10 px-5 py-1 rounded-t-none w-full scale-up-ver-top absolute top-full left-0'>
          <ul className='lg:hidden flex flex-col gap-4 items-start w-full py-2'>
            <li className='text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors duration-500'>
              <Link to='/pokemon'>All pokemons</Link>
            </li>
            <li className='text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors duration-500'>
              <a href='#'>Type</a>
            </li>
          </ul>
          <div className='w-full bg-gray-600 bg-gradient-to-l from-gray-900 to-gray-700 h-[1px] '></div>
          <section className='flex items-center justify-around py-2 w-full font-medium text-sm text-gray-300'>
            <p>Switch theme</p>
            <button className='flex items-center gap-2 bg-gray-700 py-1 px-4 rounded-full'>
                <NavDarkModeBtn />
              <select className='bg-gray-700 outline-none' name='' id=''>
                <option value=''>Dark</option>
                <option value=''>Ligth</option>
                <option value=''>System</option>
              </select>
            </button>
          </section>
          <form className='sm:hidden flex items-center rounded-lg bg-gradient-to-l from-gray-800 to-gray-700 p-0.5 w-full'>
            <label htmlFor='pokemonName' className='flex flex-1 gap-2'>
              <input
                type='text'
                name='pokemonName'
                id='pokemonName'
                maxLength={20}
                placeholder='Pokémon name'
                className='flex w-full h-full rounded-md bg-gray-800 px-3 py-2 text-sm file:border-0 file:bg-transparent file:font-medium outline-none text-gray-300 font-medium'
              />
              <span className='px-4 py-1.5 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-500'>
                <RiSearchLine size={20} />
              </span>
            </label>
          </form>
        </section>  
      }
    </div>
  )
}

function NavSearchDesktop () {
  const { pokemons } = usePokemons(0,500)
  const [inputSearch, setInputSearch] = useState([])
  const [isInputFocused, setIsInputFocused] = useState(false)
  const filterPokemons =  (name) => pokemons.filter((pokemon) => pokemon.name.includes(name.toLowerCase()))
  const handleInputSearch = (e) => {
    const { value } = e.target
    const filteredPokemons = filterPokemons(value)    
    setInputSearch(value ? filteredPokemons : [])
  }

  const handleFocus = () => {
    setIsInputFocused(true)
  }

  const handleBlur = () => {
    setIsInputFocused(false)
    setInputSearch([]) // Limpiar la búsqueda cuando se pierde el foco
  }


  return (
    <>
    <form className='hidden sm:flex items-center rounded-lg scale-up-center'>
      <label htmlFor='pokemonName' className='flex flex-row items-center justify-center gap-1 p-1'>
        <input
          type='text' 
          onChange={handleInputSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name='pokemonName'
          id='pokemonName'
          autoComplete='off'
          maxLength={20}
          placeholder='Pokémon name'
          className='flex h-full w-full rounded-md bg-gray-800 px-3 py-2 text-sm file:border-0 file:bg-transparent file:font-medium outline-none text-gray-300 font-medium'
        />  
        <span className='px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-500'>
          <RiSearchLine size={20} />
        </span>
      </label>
    </form>
    {isInputFocused && inputSearch.length > 0 && (
        <div className='fixed grid-cols-1 grid place-content-start place-items-center justify-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-rows-none gap-5 top-16 right-0 w-full mx-auto bg-gradient-to-r from-gray-900 to-gray-700/80 bg-transparent backdrop-blur-lg text-white p-7 h-screen overflow-hidden overflow-y-auto'>
          {inputSearch.map(({ id, name, image }) => (
            <Card 
              key={id}
              image={image}
              name={name}
              id={id}
              to={id}
            />
          ))}
        </div>
      )}  
    </>
  )
}