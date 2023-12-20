import { MdOutlineNightlight } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'

export default function NavMenuMobile({ toggleNavMenu }) {
  return (
    <>
      { toggleNavMenu && 
        <section className='lg:hidden rounded-b-lg scale-up-ver-top fixed top-16 right-0 left-0 z-20 bg-gradient-to-r from-gray-900 to-gray-700/80 bg-transparent backdrop-blur-sm'>
          <article className='container mx-auto px-4 pb-2 pt-6 flex flex-col gap-3'>
            <ul className='flex flex-col gap-4 items-start py-4'>
              <li className='text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-500'><a href='#'>All pokemons</a></li>
              <li className='text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-500'><a href='#'>About</a></li>
            </ul>
            <div className='w-full bg-gradient-to-l from-gray-900 to-gray-700 h-[1px] '></div>
            <section className='flex items-center justify-evenly py-4 w-full font-medium text-sm text-gray-300'>
              <p>Switch theme</p>
              <button className='flex items-center gap-2 bg-gray-700 py-1 px-4 rounded-full hover:text-cyan-400'>
                {/* <span className='rounded-md text-gray-300 cursor-pointer hover:text-white transition-colors duration-500'> */}
                  {/* dark */}
                {/* </span> */}
                <MdOutlineNightlight />
                <select className='bg-gray-700 outline-none' name='' id=''>
                  <option className='hover:text-cyan-400' value=''>Dark</option>
                  <option className='hover:text-cyan-400' value=''>Ligth</option>
                  <option className='hover:text-cyan-400' value=''>System</option>
                </select>
              </button>
            </section>
            <form className='sm:hidden rounded-lg bg-gradient-to-l from-gray-900 to-gray-700/80 p-0.5'>
              <label htmlFor='pokemonNameMenu' className='flex items-center relative'>
                <input
                  type='text'
                  name='pokemonNameMenu'
                  id='pokemonNamelMenu'
                  maxLength={20}
                  placeholder='Pokémon name'
                  className='h-full w-full rounded-md bg-gray-800 px-3 py-2 text-sm outline-none text-gray-300 font-medium'
                />
                <span className='text-gray-300 hover:text-white rounded-md transition-colors duration-500 absolute right-3'>
                  <RiSearchLine size={23} />
                </span>
              </label>
            </form>
          </article>
        </section>
      }
    </>
  )
}
