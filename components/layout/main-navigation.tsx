import { NextPage } from 'next'
import Link from 'next/link'
import Burger from '../ui/burger'
import { motion } from 'framer-motion'

import Logo from './logo'

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
  return (
    <>
      <motion.header
        className="inline-block px-4 pt-10 w-full flex flex-row justify-between flex-initial fixed z-20"
        variants={header}
        initial="start"
        animate="end"
      >
        <Link href="/">
          <a className="ml-28 logo z-30">
            <Logo />
          </a>
        </Link>
        <nav className="self-center grid place-items-center mr-28">
          <Burger />
        </nav>
      </motion.header>
    </>
  )
}

export default MainNavigation
