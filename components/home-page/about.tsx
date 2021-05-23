import { NextPage } from 'next'

import styles from './about.module.css'

const About: NextPage = () => {
  return (
    <>
      <section className="grid place-items-center h-1/3 px-4" id="about">
        <p className="text-5xl font-thin text-center px-48 leading-tight">
          I am a conductor with a passion for{' '}
          <span className="text-primary font-bold">Web Development</span>, hiking, TV shows and
          bunch of other stuff. I live in Ostrava. Let’s have a look at my{' '}
          <a
            href="#projects"
            className={`transition-colors duration-300 text-primary font-bold hover:text-white relative ${styles.hover}`}
          >
            work
          </a>{' '}
          or You can{' '}
          <a
            href="#projects"
            className={`transition-colors duration-300 text-primary font-bold hover:text-white relative ${styles.hover}`}
          >
            contact me
          </a>
          .
        </p>
      </section>
    </>
  )
}

export default About
