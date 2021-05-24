import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

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
      <motion.div
        variants={overlay}
        initial="start"
        animate={animation}
        className="absolute text-center w-full h-screen bg-lg"
      >
        <motion.h2
          variants={heading}
          initial="from"
          animate={animation}
          className="absolute w-full -top-40 text-center uppercase text-menuHeader header"
        >
          Josef Nagy
        </motion.h2>
      </motion.div>
    </>
  )
}

export default Menu
