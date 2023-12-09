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
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                  aria-current='page'
                >
                  All Pokemons
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                >
                  Search pokemon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
