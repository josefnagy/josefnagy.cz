import { NextPage } from 'next'
import { useRef } from 'react'

import classes from './burger.module.css'

const Burger: NextPage = () => {
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  function handleMenuClick() {
    menuButtonRef.current?.classList.toggle(classes.navOpen)
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
