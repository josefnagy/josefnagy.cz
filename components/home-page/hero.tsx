import { NextPage } from 'next'

const Hero: NextPage = () => {
  return (
    <>
      <section className="h-full grid place-items-center uppercase px-4" id="hero">
        <h1 className="text-header header text-background leading-heading text-center font-extrabold tracking-wider">
          Hello,
          <br /> I am Josef.
          <br />
          Welcome.
        </h1>
      </section>
    </>
  )
}

export default Hero
