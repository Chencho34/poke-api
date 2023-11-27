import { useEffect, useState } from 'react'
import { getAllPokemons } from './api/pokemons'
import { usePagination } from './hooks/customHooks'
import Nav from './components/Nav'
import './App.css'

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const limitOfItemForPagination = 24
  const { handleNextButton, handlePrevButton, handleResetButton, offset} = usePagination(limitOfItemForPagination)

  useEffect(() => {
    getAllPokemons(offset, limitOfItemForPagination)
    .then((allPokemons) => setPokemons(allPokemons))
    .catch((error) => console.log(error))
  }, [offset])

  return (
    <>
      <Nav />
      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-10 justify-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className='flex flex-row justify-between w-64 m-auto'>
            <button className='bg-blue-700 p-1 rounded-md' onClick={handlePrevButton}>prev</button>
            <button className='bg-blue-700 p-1 rounded-md' onClick={handleNextButton}>next</button>
            <button className='bg-blue-700 p-1 rounded-md' onClick={handleResetButton}>reset</button>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
              pokemons.map(({ id, name, image }) => (
                <a key={id} href="#" className="group">
                  <div className="aspect-h-1 aspect-w-1 w-[200px] m-auto text-center m-a overflow-hidden rounded-lg bg-gray-800 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                    <h3 className="mt-4 text-lg text-white font-medium">{name}</h3>
                    <p className='text-white'>id: {id}</p>
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}