import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <section className="grid place-items-center h-1/3 px-4" id="about">
        <div className="w-2/3">
          <p className="text-5xl font-thin text-center leading-tight">
            I am a conductor with a passion for{' '}
            <span className="text-primary font-bold">Web Development</span>, hiking, TV shows and
            bunch of other stuff. I live in Ostrava. Let’s have a look at my{' '}
            <a
              href="#projects"
              className={`transition-colors duration-300 text-primary font-bold hover:text-white relative hover`}
            >
              work
            </a>{' '}
            or You can{' '}
            <a
              href="#contact"
              className={`transition-colors duration-300 text-primary font-bold hover:text-white relative hover`}
            >
              contact me
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}

export default About
