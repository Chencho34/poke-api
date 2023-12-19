import { useParams } from 'react-router-dom'
import { usePokemon } from '../hooks'

export default function Pokemon() {
  const { id } = useParams()  
  const { pokemon } = usePokemon(id)

  return (
    <div className='h-screen w-full bg-orange-0 mx-auto grid place-items-center' >
      <section className='container bg-cyan-0 flex flex-col items-center'>
        <h1 className='text-red-800'>Pokemon page</h1>      
        <img src={pokemon.image} alt={`image of ${pokemon.name}`} className='w-96' />
        <p>id: {pokemon.id}</p>
        <p>name: {pokemon.name}</p>
        <p>exp: {pokemon.exp}</p>
        <div className='flex flex-row gap-10'>
          {
            pokemon.type?.map(({type}) => (
                <p key={type.name} className='text-red-800'>{type.name}</p>
            ))
          }
        </div>
        <p>altura: {pokemon.height}</p>
        <p>ancho: {pokemon.weight}</p>
      </section>
    </div>
  )
}
