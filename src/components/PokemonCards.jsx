
// eslint-disable-next-line react/prop-types
export default function PokemonCards({id, name, image, type}) {
  return (
    <a key={id} href='#' className='group shadow-sm hover:shadow-md'>
      <div
        className='rounded-lg border bg-card text-card-foreground shadow-sm'
        data-v0-t='card'
      >
        <div className='p-6'>
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-row space-x-4 items-center '>
              <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
                {/* <span className="flex h-full w-full items-center justify-center rounded-full bg-muted"> */}

                <img src={image} alt='' />
                {/* </span> */}
              </span>
              <div className='flex flex-col'>
                <h4 className='text-lg font-semibold'>{name}</h4>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {type} type Pokemon
                </p>
              </div>
            </div>
            <div className='flex flex-row space-x-2'>
              <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-yellow-500 bg-yellow-100'>
                <img src='src\assets\svg\type-electric.svg' alt='' />
                Electric
              </div>
              <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-red-500 bg-red-100'>
                <img src='src\assets\svg\type-fire.svg' alt='' />
                Fire
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
