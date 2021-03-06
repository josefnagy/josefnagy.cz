import { NextPage } from 'next'
import { motion } from 'framer-motion'

const hero = {
  hidden: {
    y: '15px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      // type: 'tween',
      delay: 0.3,
      duration: 0.7,
      // when: 'beforeChildren',
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
}

const text = {
  hidden: {
    y: '10px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
}

const Hero: NextPage = () => {
  return (
    <>
      <section className="mt-32 lg:mt-0 lg:h-screen grid place-items-center uppercase px-4" id="hero">
        <motion.h1
          className="relative text-header header sm:place-self-center place-self-end text-background leading-tight text-center font-extrabold tracking-wider"
          variants={hero}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="inline-block transition-colors duration-500 hover:text-white" variants={text}>
            Hello,
          </motion.span>{' '}
          <motion.span className="inline-block" variants={text}>
            <span className="inline-block transition-colors duration-500 hover:text-white">I</span>{' '}
            <span className="inline-block transition-colors duration-500 hover:text-white">am</span>{' '}
            <span className="inline-block transition-colors duration-500 hover:text-white">Josef.</span>
          </motion.span>
          <motion.span className="inline-block transition-colors duration-500 hover:text-white" variants={text}>
            Welcome.
          </motion.span>
        </motion.h1>
        {/* <img src="images/site/heroLogo.svg" alt="qq" className="opacity-30" /> */}
      </section>
    </>
  )
}

export default Hero
