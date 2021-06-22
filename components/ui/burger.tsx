import { useEffect, useRef } from 'react'

import classes from './burger.module.css'

interface Props {
  isMenuOpened: boolean
  setIsMenuOpened: (isMenuOpened: boolean) => void
}

const Burger: React.FC<Props> = ({ isMenuOpened, setIsMenuOpened }) => {
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isMenuOpened) menuButtonRef.current?.classList.add(classes.navOpen)
    if (!isMenuOpened) menuButtonRef.current?.classList.remove(classes.navOpen)
  }, [isMenuOpened])

  function handleMenuClick() {
    setIsMenuOpened(!isMenuOpened)
  }

  return (
    <button id="menuBtn" ref={menuButtonRef} className={classes.burger} onClick={handleMenuClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default Burger
