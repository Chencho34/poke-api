import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

export default function NavMenu({ handleToggleMenu, toggleNavMenu, handleToggleThemeColor, toggleThemeColor }) {
  return (
    <section className='flex flex-row gap-3 mx-1.5'>
      <section className='lg:hidden w-full'>
        <span onClick={handleToggleMenu} className='rounded-md text-gray-300 cursor-pointer hover:text-white transition-colors duration-500'>
          {toggleNavMenu ? <RiCloseLine size={24}/> : <RiMenu3Line size={24}/>}
        </span>
      </section>
      <section className='hidden lg:flex w-full'>
        <span onClick={handleToggleThemeColor} className='rounded-md text-gray-300 cursor-pointer hover:text-white transition-colors duration-500'>
          {toggleThemeColor ? <MdOutlineLightMode className='hover:fill-cyan-400 transition-all duration-500'  size={22} /> : <MdOutlineNightlight  className='hover:fill-cyan-400 transition-all duration-500' size={22}/>}
        </span>
      </section>
    </section>
  )
}