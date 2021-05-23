import { NextPage } from 'next'

const Hero: NextPage = () => {
  return (
    <>
      <section className="h-full grid place-items-center uppercase px-4" id="hero">
        <h1 className="text-header header text-background leading-heading text-center font-extrabold tracking-wider">
          <span className="transition-colors duration-500 hover:text-white">Hello,</span>
          <br /> <span className="transition-colors duration-500 hover:text-white">I</span>{' '}
          <span className="transition-colors duration-500 hover:text-white">am</span>{' '}
          <span className="transition-colors duration-500 hover:text-white">Josef.</span>
          <br />
          <span className="transition-colors duration-500 hover:text-white">Welcome.</span>
        </h1>
      </section>
    </>
  )
}

export default Hero
