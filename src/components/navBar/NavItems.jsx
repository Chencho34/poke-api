import { useState } from 'react'
import { paths } from '../../constants'

function NavItemsDesktop () {
  const [isClicked, setIsClicked] = useState(0)
  const handleClick = (index) => setIsClicked(index)

  return (
    <ul className='hidden lg:flex flex-row gap-2 scale-up-center'>
      {
        paths.map(({ item }, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <a
              href='#'
              className={`${
                isClicked === index ? 'bg-gray-700 text-white' : ''
              } rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 transition-colors duration-500`}
            >
              {item}
            </a>
          </li>
        ))
      }
    </ul>
  )
}

function NavItemsMobile () {
  return (
    <ul className='lg:hidden flex flex-col gap-4 items-start w-full py-2'>
      {
        paths.map(({item}, index) => (
          <li className='text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors duration-500' key={index}>
            <a href='#'>{item}</a>
          </li> 
        ))
      }
    </ul> 
  )
}

// eslint-disable-next-line react/prop-types
const NavItems = ({ containerLinks, containerLink, itemStyles, itemStylesActive }) => {
  const [isClicked, setIsClicked] = useState(0)
  const handleClick = (index) => setIsClicked(index)
 
  return (
    <ul className={containerLinks}>
      {
        paths.map(({item}, index) => (
          <li key={index} className={containerLink} onClick={() => handleClick(index)}>
            <a
              href='#'
              className={`${
                isClicked === index ? itemStylesActive : ''
              } ${itemStyles}`}
            >
              {item}
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default {
  NavItemsDesktop,
  NavItemsMobile,
  NavItems
}