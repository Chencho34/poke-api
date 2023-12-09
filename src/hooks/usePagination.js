import { useState } from 'react'

const usePagination = (initialPage) => {
  const [offset, setOffset] = useState(initialPage)

  const handleNextButton = () => setOffset(offset + initialPage)
  const handleResetButton = () => setOffset(0)
  const handlePrevButton = () => {
    if (offset > 0) setOffset(offset - initialPage)
    else return
  }

  return {
    handleNextButton,
    handlePrevButton,
    handleResetButton,
    offset
  }
}

export {
  usePagination
}
