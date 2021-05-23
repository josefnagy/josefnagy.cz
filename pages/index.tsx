import { NextPage } from 'next'
import About from '../components/home-page/about'

import Hero from '../components/home-page/hero'
import Projects from '../components/home-page/projects'
import LatestNews from '../components/home-page/latest-news'

const IndexPage: NextPage = () => {
  return (
    <main className="flex-auto">
      <Hero />
      <About />
      <Projects />
      <LatestNews />
    </main>
  )
}
export default IndexPage
