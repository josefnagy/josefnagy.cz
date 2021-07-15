import { NextPage } from 'next'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Magnetic from '../ui/magnetic'

const About: NextPage = () => {
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.4 })

  const text = {
    start: {
      opacity: 0,
      y: '7px',
    },
    end: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  useEffect(() => {
    if (inView) {
      animation.start('end')
    } else {
      animation.start('start')
    }
  }, [animation, inView, entry])

  const container = {
    start: {
      transition: {
        // staggerChildren: 0.2,
        // delayChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      y: '-50px',
      transition: {
        ease: 'easeInOut',
      },
    },
  }

  return (
    <>
      <section className="grid place-items-center h-1/6 lg:h-1/6 px-4" id="about">
        <div className="xl:w-2/3">
          <Magnetic selector=".links">
            <motion.p
              variants={container}
              ref={ref}
              initial="start"
              animate={animation}
              exit="exit"
              className="text-3xl lg:text-5xl font-thin text-center leading-tight"
            >
              <motion.span variants={text} className="inline-block">
                I am a conductor
              </motion.span>
              &nbsp;
              <motion.span variants={text} className="inline-block">
                {' '}
                with a passion for
              </motion.span>{' '}
              <motion.span variants={text} className="text-primary font-bold">
                Web Development,
              </motion.span>{' '}
              <motion.span variants={text} className="inline-block">
                hiking, tv shows{' '}
              </motion.span>
              &nbsp;
              <motion.span variants={text} className="inline-block">
                and bunch of other stuff.{' '}
              </motion.span>
              &nbsp;
              <motion.span variants={text} className="inline-block">
                I live in Ostrava.{' '}
              </motion.span>
              &nbsp;
              <motion.span variants={text} className="inline-block">
                Let’s have a look{' '}
              </motion.span>{' '}
              <motion.span variants={text} className="inline-block">
                at my{' '}
                <a href="#projects" className={`links inline-block transition-colors duration-300 text-primary font-bold hover:text-white relative hover`}>
                  work,
                </a>
              </motion.span>{' '}
              <motion.span variants={text} className="inline-block">
                or You can
              </motion.span>
              &nbsp;
              <motion.a
                variants={text}
                href="#contact"
                className={`links inline-block transition-colors duration-300 text-primary font-bold hover:text-white relative hover`}
              >
                contact me.
              </motion.a>
            </motion.p>
          </Magnetic>
        </div>
      </section>
    </>
  )
}

export default About
