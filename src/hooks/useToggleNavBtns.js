import { useCallback, useState } from 'react'

const useToggle = (initialState = true) => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

  return { state, toggle }
}

const useToggleNavBtn = () => {
  const { state: toggleNavMenu, toggle: setToggleNavMenu } = useToggle(true)
  const { state: toggleThemeColor, toggle: setToggleThemeColor } = useToggle(true)

  return {
    toggleNavMenu,
    toggleThemeColor,
    handleToggleMenu: setToggleNavMenu,
    handleToggleThemeColor: setToggleThemeColor,
  }
}

export {
  useToggle,
  useToggleNavBtn
}
