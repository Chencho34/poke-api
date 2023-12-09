// eslint-disable-next-line react/prop-types
export default function ButtonsGroup({next, prev, reset}) {
  return (
    <div className='items-center p-6 flex justify-between'>
      <button
        className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
        onClick={prev}
      >
        Previous
      </button>
      <button
        className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
        onClick={reset}
      >
        Reset
      </button>
      <button
        className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
        onClick={next}
      >
        Next
      </button>
    </div>
  )
}
