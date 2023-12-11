export default function Nav() {
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-between sm:items-stretch'>
            <div className='flex items-center gap-4 flex-row space-y-1.5 '>
              <h3 className='text-2xl font-semibold leading-none tracking-tight text-white'>Pokedex</h3>
              <p className='text-sm text-muted-foreground text-white'>Encyclopedia of Pokemon</p>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex items-center space-x-4'>
                <button
                  href='#'
                  className='bg-gray-900 text-white rounded-md px-4 py-2 flex items-center text-sm hover:bg-gray-700 hover:text-white h-full font-medium'
                >
                  All Pokemons
                </button>
                <FormPokemon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


function FormPokemon () {
  return (
    <div className='rounded-lg  bg-card text-card-foreground shadow-sm max-w-md mx-auto'>
      <form className='flex justify-center gap-2 p-1'>
        <input
          className='flex h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 '
          id='pokemon-name'
          placeholder='Enter Pokémon name'
        />
        <button className='inline-flex h-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2'>
          Search
        </button>
      </form>
    </div>
  )
}