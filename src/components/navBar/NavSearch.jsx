import { useState } from 'react'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'

export default function NavSearch () {
  const [modeTheme, setModeTheme] = useState(false)
  const handleModeTheme = () => setModeTheme(!modeTheme)

  //TODO: FIX BTN THEME AND MAKE FUNTIONALITY THE FORM

  //TODO: FIX <form p-r>
  return (
    <form className='hidden sm:flex rounded-lg scale-up-center items-center'>
      <label htmlFor='pokemonName' className='flex flex-row items-center justify-center gap-1 p-1'>
        <input
          type='text'
          name='pokemonName'
          id='pokemonName'
          maxLength={20}
          placeholder='Pokémon name'
          className='flex h-full w-full rounded-md bg-gray-800 px-3 py-2 text-sm file:border-0 file:bg-transparent file:font-medium outline-none text-gray-300 font-medium'
        />
        <span className='inline-flex gap-2 h-full items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500'>
          <RiSearchLine size={20} />
        </span>
      </label>
      <span className='px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-500'>
          {
            modeTheme 
              ? <MdOutlineLightMode onClick={handleModeTheme} className='scale-up-center' size={20}/>
              : <MdOutlineNightlight onClick={handleModeTheme} className='scale-up-center' size={20}/>
          }
        </span>
    </form>
  )
}