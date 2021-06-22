import { NextPage } from 'next'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

import Burger from '../ui/burger'
import Logo from './logo'
import { useState, useEffect } from 'react'
import Menu from '../ui/menu'
import Magnetic from '../ui/magnetic'

const header = {
  start: {
    y: '-50px',
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'linear',
      delay: 1.5,
      duration: 1,
    },
  },
  scrollStart: {
    y: 0,
  },
  scrollEnd: {
    y: '-25px',
  },
}

const MainNavigation: NextPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const animation = useAnimation()

  useEffect(() => {
    animation.start('end')

    if (document) {
      document.addEventListener('scroll', onScroll)
    }

    function onScroll() {
      // animate header only when scrolled and when not on mobile resolution
      if (window.scrollY > 50 && window.innerWidth >= 1024) {
        animation.start('scrollEnd')
      } else {
        animation.start('scrollStart')
      }
    }

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [animation])

  return (
    <>
      <motion.header
        className="transition-all duration-500 px-4 w-full flex flex-row justify-between flex-initial fixed z-20"
        variants={header}
        initial="start"
        animate={animation}
      >
        <Menu setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened} />
        <div className="w-full">
          {/* <div className="pt-10 w-full inline-block flex flex-row justify-between flex-initial"> */}
          <Magnetic threshold={20} selector=".logo" magnetic>
            <Link href="/">
              <a className={`absolute logo z-30 top-t1 left-t2 lg:top-t3 xl:left-t7 ${isMenuOpened ? 'opacity-0' : ''}`}>
                {/* <a className="ml-28 logo z-30"> */}
                <Logo />
              </a>
            </Link>
          </Magnetic>
          <Magnetic threshold={20} selector=".menu-button" trY magnetic>
            <nav className="absolute menu-button top-t1 right-t2 mt-3 mr-1 lg:top-t3 xl:right-t7 z-50">
              {/* <nav className="self-end grid place-items-center mr-28 mb-1"> */}
              <Burger isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
            </nav>
          </Magnetic>
        </div>
      </motion.header>
    </>
  )
}

export default MainNavigation
