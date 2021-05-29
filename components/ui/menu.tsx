import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Portal } from 'react-portal'
import MenuItem from './menu-item'

interface Props {
  isMenuOpened: boolean
  setIsMenuOpened: (isMenuOpened: boolean) => void
}

const overlay = {
  start: {
    x: '100vw',
    transition: { ease: 'easeInOut', duration: 0.5 },
  },
  end: {
    x: 0,
    // top: window ? window.screenY : 0,
    transition: { ease: 'easeIn', duration: 0.2 },
  },
}

const heading = {
  from: { y: '-500px', opacity: 0, transition: { type: 'tween', duration: 0.5 } },
  to: { y: 0, opacity: 1, transition: { delay: 0.5, type: 'tween', duration: 1 } },
}

const list = {
  from: {},
  to: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const items = {
  from: { opacity: 0, transition: { ease: 'easeIn', duration: 0.4 } },
  to: { opacity: 1, transition: { ease: 'easeIn', duration: 0.4 } },
}

const Menu: React.FC<Props> = ({ isMenuOpened, setIsMenuOpened }) => {
  const animation = useAnimation()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (isMenuOpened) {
      setShowMenu(true)
      document.body.style.overflow = 'hidden'
      animation.start('end')
      animation.start('to')
    } else {
      animation.start('from')
      animation.start('start').then(() => {
        setShowMenu(false)
      })

      document.body.style.overflow = 'auto'
    }
  }, [animation, isMenuOpened, showMenu])

  const handleMenuClick = () => {
    setShowMenu(false)
    setIsMenuOpened(false)
  }

  return (
    <>
      {showMenu && (
        <Portal node={document && document.getElementById('main')}>
          <motion.div
            variants={overlay}
            initial="start"
            animate={animation}
            className="absolute left-0 text-center w-full h-screen bg-lg overflow-auto"
            style={{ top: window.scrollY }}
          >
            <motion.h2
              variants={heading}
              initial="from"
              animate={animation}
              className="absolute w-full top-rp text-center uppercase text-menuHeader menu-header"
            >
              Josef Nagy
            </motion.h2>
            <div className="h-full pt-48">
              <div className="">
                <nav>
                  <motion.ul
                    className="relative w-full max-w-screen-lg mx-auto flex justify-between flex-wrap"
                    variants={list}
                    initial="from"
                    animate={animation}
                  >
                    <MenuItem setShowMenu={setShowMenu} setIsMenuOpened={setIsMenuOpened} img="/images/site/menu/hero.png">
                      {' '}
                      01. Home
                    </MenuItem>
                    <MenuItem setShowMenu={setShowMenu} setIsMenuOpened={setIsMenuOpened} img="/images/site/menu/projects.png">
                      {' '}
                      02. Projects
                    </MenuItem>
                    <MenuItem setShowMenu={setShowMenu} setIsMenuOpened={setIsMenuOpened} img="/images/site/menu/contact.png">
                      {' '}
                      03. Contact
                    </MenuItem>
                  </motion.ul>
                </nav>
              </div>
            </div>
          </motion.div>
        </Portal>
      )}
    </>
  )
}

export default Menu
