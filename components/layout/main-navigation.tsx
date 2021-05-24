import { NextPage } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Burger from '../ui/burger'
import Logo from './logo'
import { useState } from 'react'
import Menu from '../ui/menu'

const header = {
  start: {
    y: '-50px',
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 2,
      duration: 1,
    },
  },
}

const MainNavigation: NextPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <>
      <motion.header
        className="relative px-4 w-full flex flex-row justify-between flex-initial fixed z-20"
        variants={header}
        initial="start"
        animate="end"
      >
        <Menu isMenuOpened={isMenuOpened} />
        <div className="pt-10 w-full inline-block flex flex-row justify-between flex-initial">
          <Link href="/">
            <a className="ml-28 logo z-30">
              <Logo />
            </a>
          </Link>
          <nav className="self-end grid place-items-center mr-28 mb-1">
            <Burger isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
          </nav>
        </div>
      </motion.header>
    </>
  )
}

export default MainNavigation
