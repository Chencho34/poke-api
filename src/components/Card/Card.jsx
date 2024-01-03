import { Link } from 'react-router-dom'

export default function Card({ name, image, type, to }) {
  return (
    <Link to={`/pokemon:${to}`}>
      <section className={'flex flex-row items-center justify-around space-y-4 p-6 rounded border shadow-sm hover:shadow-md  z-0 backdrop-blur-md'}>
        <article className='h-20 w-20 shrink-0 overflow-hidden rounded-full'>
          <figure className='flex items-center justify-center h-full w-full rounded-full'>
            <img src={image} alt='image'/>
          </figure>
        </article>
        <article className='flex flex-col gap-3'>
          <section className='flex flex-col'>
            <h4 className='text-lg font-semibold'>{name}</h4>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{type} type Pokemon</p>
          </section>
          <section className='flex flex-row justify-between gap-2'>
            <article className='flex justify-around items-center rounded-full border px-4 py-0.5 text-xs font-semibold transition-colors  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-yellow-500 bg-yellow-100'>
              <img className='w-5' src='src\assets\svg\type-electric.svg' alt=''/>
              <p>{type}</p>
            </article>
            <article className='flex justify-around items-center rounded-full border px-4 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-red-500 bg-red-100'>
              <img className='w-5' src='src\assets\svg\type-fire.svg' alt=''/>
              <p>Fire</p>
            </article>
          </section>
        </article>
      </section>
    </Link>
  )
}
