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
        className="transition-all duration-500 relative px-4 w-full flex flex-row justify-between flex-initial fixed z-20"
        variants={header}
        initial="start"
        animate="end"
      >
        <Menu isMenuOpened={isMenuOpened} />
        <div className="w-full">
          {/* <div className="pt-10 w-full inline-block flex flex-row justify-between flex-initial"> */}
          <Link href="/">
            <a className={`absolute logo z-30 top-t1 left-t2 lg:top-t3 xl:left-t7 ${isMenuOpened ? 'opacity-0' : ''}`}>
              {/* <a className="ml-28 logo z-30"> */}
              <Logo />
            </a>
          </Link>
          <nav className="absolute top-t1 right-t2 mt-3 mr-1 lg:top-t3 xl:right-t7 z-50">
            {/* <nav className="self-end grid place-items-center mr-28 mb-1"> */}
            <Burger isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
          </nav>
        </div>
      </motion.header>
    </>
  )
}

export default MainNavigation
