import { Link } from 'react-router-dom'
import { useToggleNavBtn } from '../../hooks/useToggleNavBtns'
import { NavItems, NavMenu, NavMenuMobile, NavSearch } from '../navBar'

export default function Nav () {
  const { toggleNavMenu, toggleThemeColor, handleToggleMenu, handleToggleThemeColor } = useToggleNavBtn()

  return (
    <>
      <nav className='w-full h-16 fixed z-10 bg-gradient-to-r from-gray-900 to-gray-700/80 bg-transparen backdrop-blur-sm'>
        <section className='flex items-center justify-between w-11/12 h-full mx-auto max-w-7xl'>
          <article className='flex flex-row items-center gap-4 space-y-1.5'>
            <Link to='/pokemon' className='text-2xl text-white font-semibold leading-none tracking-tight flex items-center hover:text-cyan-400'>Pokedex</Link>
            <p className='hidden lg:block text-sm text-white'>Encyclopedia of Pokemon</p>
          </article>
          <article className='flex items-center w-auto gap-1 bg-transparent rounded-lg px-1 '>
            <NavItems />
            <NavSearch />
            <NavMenu handleToggleMenu={handleToggleMenu} handleToggleThemeColor={handleToggleThemeColor} toggleNavMenu={toggleNavMenu} toggleThemeColor={toggleThemeColor} />
          </article>
        </section>
      </nav>
      <NavMenuMobile toggleNavMenu={toggleNavMenu} />
    </> 
  )
}


// function NavSearchDesktop () {
//   const { pokemons } = usePokemons(0,500)
//   const [inputSearch, setInputSearch] = useState([])
//   const [isInputFocused, setIsInputFocused] = useState(false)
//   const filterPokemons =  (name) => pokemons.filter((pokemon) => pokemon.name.includes(name.toLowerCase()))
//   const handleInputSearch = (e) => {
//     const { value } = e.target
//     const filteredPokemons = filterPokemons(value)    
//     setInputSearch(value ? filteredPokemons : [])
//   }

//   const handleFocus = () => {
//     setIsInputFocused(true)
//   }

//   const handleBlur = () => {
//     setIsInputFocused(false)
//     setInputSearch([]) // Limpiar la búsqueda cuando se pierde el foco
//   }


//   return (
//     <>
//     <form className='hidden sm:flex items-center rounded-lg scale-up-center'>
//       <label htmlFor='pokemonName' className='flex flex-row items-center justify-center gap-1 p-1'>
//         <input
//           type='text' 
//           onChange={handleInputSearch}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           name='pokemonName'
//           id='pokemonName'
//           autoComplete='off'
//           maxLength={20}
//           placeholder='Pokémon name'
//           className='flex h-full w-full rounded-md bg-gray-800 px-3 py-2 text-sm file:border-0 file:bg-transparent file:font-medium outline-none text-gray-300 font-medium'
//         />  
//         <span className='px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-500'>
//           <RiSearchLine size={20} />
//         </span>
//       </label>
//     </form>
//     {isInputFocused && inputSearch.length > 0 && (
//         <div className='fixed grid-cols-1 grid place-content-start place-items-center justify-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-rows-none gap-5 top-16 right-0 w-full mx-auto bg-gradient-to-r from-gray-900 to-gray-700/80 bg-transparent backdrop-blur-lg text-white p-7 h-screen overflow-hidden overflow-y-auto'>
//           {inputSearch.map(({ id, name, image }) => (
//             <Card 
//               key={id}
//               image={image}
//               name={name}
//               id={id}
//               to={id}
//             />
//           ))}
//         </div>
//       )}  
//     </>
//   )
// }