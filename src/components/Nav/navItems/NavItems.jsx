import { useState } from 'react'
import { paths } from '../../../constants'
import { Link } from 'react-router-dom'

export default function NavItems () {
  const [isClicked, setIsClicked] = useState(0)
  const handleClick = (index) => setIsClicked(index)

  return (
    <ul className='hidden lg:flex flex-row gap-8 scale-up-center mr-8'>
      { 
        paths.map(({ item, to }, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <Link
              to={to}
              className={`${
                isClicked === index ? 'text-cyan-400' : 'text-gray-300'
              } text-sm font-medium hover:text-cyan-400 transition-colors duration-500`}
            >
              {item}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
