import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    transition: { ease: 'easeIn', duration: 0.2 },
  },
}

const heading = {
  from: { y: '-500px', opacity: 0, transition: { type: 'tween', duration: 0.5 } },
  to: { y: 0, opacity: 1, transition: { delay: 1.5, type: 'tween', duration: 1.5 } },
}

const Menu: React.FC<Props> = ({ isMenuOpened }) => {
  const animation = useAnimation()

  useEffect(() => {
    if (isMenuOpened) {
      animation.start('end')
      animation.start('to')
    } else {
      animation.start('start')
      animation.start('from')
    }
  }, [animation, isMenuOpened])

  return (
    <>
      <motion.div variants={overlay} initial="start" animate={animation} className="absolute text-center w-full h-screen bg-lg">
        <motion.h2 variants={heading} initial="from" animate={animation} className="absolute w-full top-rp text-center uppercase text-menuHeader menu-header">
          Josef Nagy
        </motion.h2>
        <div className="h-screen pt-48">
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
                <li className="max-w-lg w-47">
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
    </>
  )
}

export default Menu
