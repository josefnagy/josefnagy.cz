import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Portal } from 'react-portal'

interface Props {
  isMenuOpened: boolean
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
  to: { y: 0, opacity: 1, transition: { delay: 1.5, type: 'tween', duration: 1.5 } },
}

const Menu: React.FC<Props> = ({ isMenuOpened }) => {
  const animation = useAnimation()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (isMenuOpened) {
      setShowMenu(true)
      document.body.style.overflow = 'hidden'

      // menu.current.style.top = String(`${window.scrollY}px`)
      animation.start('end')
      animation.start('to')
    } else {
      animation.start('from')
      animation.start('start').then(() => {
        setShowMenu(false)
        console.log('closed')
      })

      document.body.style.overflow = 'auto'
    }
  }, [animation, isMenuOpened, showMenu])

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
                  <ul className="w-full max-w-screen-lg mx-auto flex justify-between flex-wrap">
                    <li className="max-w-lg w-47 mb-36">
                      <Link href="/">
                        <a>
                          <span>01. Home</span>
                          <Image src="/images/site/menu/hero.png" width={500} height={350} quality={100} />
                        </a>
                      </Link>
                    </li>
                    <li className="max-w-lg w-47">
                      <Link href="/">
                        <a>
                          <span>02. Projects</span>
                          <Image src="/images/site/menu/projects.png" width={500} height={350} quality={100} />
                        </a>
                      </Link>
                    </li>
                    <li className="max-w-lg w-47 pb-40">
                      <Link href="/">
                        <a>
                          <span>03. Contact</span>
                          <Image src="/images/site/menu/contact.png" width={500} height={350} quality={100} />
                        </a>
                      </Link>
                    </li>
                  </ul>
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
