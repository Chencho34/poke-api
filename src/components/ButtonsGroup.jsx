// eslint-disable-next-line react/prop-types
export default function ButtonsGroup({next, prev, reset}) {
  return (
    <div className='flex items-center p-6 justify-evenly'>
      <button
        className='h-10 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-500 bg-gray-900 hover:bg-gray-700 hover:text-white'
        onClick={prev}
      >
        Previous
      </button>
      <button
        className='h-10 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-500 bg-gray-900 hover:bg-gray-700 hover:text-white'
        onClick={reset}
      >
        Reset
      </button>
      <button
        className='h-10 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-500 bg-gray-900 hover:bg-gray-700 hover:text-white'
        onClick={next}
      >
        Next
      </button>
    </div>
  )
}
