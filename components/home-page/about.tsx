import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <section className="grid place-items-center h-1/3" id="about">
        <p className="text-5xl font-thin text-center mx-32 leading-snug">
          I am a conductor with a passion for{' '}
          <span className="text-primary font-bold">Web Development</span>, hiking, TV shows and
          bunch of other stuff. I live in Ostrava. Let’s have a look at my{' '}
          <a href="#projects" className="text-primary font-bold hover:text-white hover:underline">
            work
          </a>{' '}
          or You can{' '}
          <a href="#projects" className="text-primary font-bold hover:text-white hover:underline">
            contact me
          </a>
          .
        </p>
      </section>
    </>
  )
}

export default About
