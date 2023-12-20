import { RiSearchLine } from 'react-icons/ri'

export default function NavSearch () {
  return (
    <form className='hidden sm:block rounded-lg scale-up-center'>
      <label htmlFor='pokemonName' className='flex flex-row items-center gap-1 p-0.5 relative'>
        <input
          type='text'
          name='pokemonName'
          id='pokemonName'
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
  )
}