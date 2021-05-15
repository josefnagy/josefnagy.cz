import { NextPage } from 'next'
import About from '../components/home-page/about'

import Hero from '../components/home-page/hero'
import Projects from '../components/home-page/projects'

const IndexPage: NextPage = () => {
  return (
    <main className="flex-auto">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
export default IndexPage
