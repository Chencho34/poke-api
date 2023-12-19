// eslint-disable-next-line react/prop-types
export default function ButtonsGroup({next, prev, reset, offset}) {
  return (
    <div className='flex p-1 justify-between bg-gradient-to-r from-gray-900 to-gray-700/80 fixed w-60 left-2/4 bottom-1 -translate-x-1/2 right-0 rounded-lg backdrop-blur-sm bg-transparent '>
      <button
        className='h-auto px-2 py-0.5 rounded-md text-gray-300 text-sm font-medium transition-colors duration-500 hover:bg-gray-700 hover:text-white'
        onClick={prev}
      >
        Previous
      </button>
      <button
        className='h-auto px-2 py-0.5 rounded-md text-gray-300 text-sm font-medium transition-colors duration-500 hover:bg-gray-700 hover:text-white'
        onClick={reset}
      >
        Reset | {offset}
      </button>
      <button
        className='h-auto px-2 py-0.5 rounded-md text-gray-300 text-sm font-medium transition-colors duration-500 hover:bg-gray-700 hover:text-white'
        onClick={next}
      >
        Next
      </button>
    </div>
  )
}
