import { useRef } from 'react'

import classes from './burger.module.css'

interface Props {
  isMenuOpened: boolean
  setIsMenuOpened: (isMenuOpened: boolean) => void
}

const Burger: React.FC<Props> = ({ isMenuOpened, setIsMenuOpened }) => {
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  function handleMenuClick() {
    menuButtonRef.current?.classList.toggle(classes.navOpen)
    setIsMenuOpened(!isMenuOpened)
  }

  return (
    <button ref={menuButtonRef} className={classes.burger} onClick={handleMenuClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default Burger
