import { NextPage } from 'next'
import { useEffect } from 'react'

import classes from '../../components/ui/burger.module.css'
import Project from '../../components/projects/project'

const projects = [
  {
    name: 'WorkCal',
    desc: 'Web calendar, for managing irregular work shifts, with smart shift insertion',
    role: 'Development & Design',
    launched: '2021',
    git: 'https://github.com/josefnagy/calendar',
    url: 'https://workcal.netlify.com',
    img: '/images/projects/workcal.png',
  },
  {
    name: 'Radek Tlach',
    desc: 'Nejlepší malíř v Moravskoslezkém kraji s více než 20-ti letou praxí ',
    role: 'Development & Design',
    launched: '2018',
    git: 'https://github.com/josefnagy/calendar',
    url: 'https://workcal.netlify.com',
    img: '/images/projects/aracolor.png',
  },
  {
    name: 'Portfolio website',
    desc: 'This static website, full of wonders and excitement.',
    role: 'Development & Design',
    launched: '2021',
    git: 'https://github.com/josefnagy/josefnagy.cz',
    url: 'https://josefnagy.cz',
    img: '/images/projects/portfolio.png',
  },
  {
    name: 'Recipe app',
    desc: 'Web app for fullfilling all your recipe managing needs.',
    role: 'Development & Design',
    launched: '2021',
    git: 'https://github.com/josefnagy/recipe-app',
    url: 'https://workcal.netlify.com',
    img: '/images/projects/recipe.png',
  },
]

interface Waypoint {
  index: number
  topBoundary: number
  bottomBoundary: number
  dark: boolean
}

const ProjectsPage: NextPage = () => {
  useEffect(() => {
    document.querySelector('body')?.classList.add('light-bg')
    return () => {
      document.querySelector('body')?.classList.remove('light-bg')
    }
  }, [])

  useEffect(() => {
    const logoInitials = document.querySelector('#logo > path') as SVGElement
    // const logoDot = document.querySelector('#logo > rect') as SVGElement
    const menuBtn = document.querySelector('#menuBtn > span') as HTMLButtonElement

    let articles: Array<Waypoint> = []
    let currentArticle: Waypoint

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        //if scrolling down, check if boundary of current article was crossed
        //if yes, then set new current
        if (window.pageYOffset + 50 > currentArticle.bottomBoundary) {
          currentArticle = articles[currentArticle.index + 1]
          switchLogo(currentArticle.dark)
        }
      } else {
        if (window.pageYOffset < currentArticle.topBoundary) {
          currentArticle = articles[currentArticle.index - 1]
          switchLogo(currentArticle.dark)
        }
      }
    }

    document.addEventListener('wheel', handleWheel)

    // check if its first load
    // if it is then get all projects on page and save it to articles
    // if its not then check which article is viewed
    if (Object.entries(articles).length === 0) {
      articles = getArtBoundaries()
    }
    currentArticle = getCurrentArticle(window.pageYOffset, articles)

    if (Object.entries(currentArticle).length != 0) {
      switchLogo(currentArticle.dark)
    }

    function switchLogo(dark: boolean) {
      if (dark) {
        logoInitials.classList.remove('light-bg')
        // logoDot.classList.remove('light-bg')
        logoInitials.style.transition = 'all 500ms'
        // logoDot.style.transition = 'all 500ms'
        menuBtn.style.transition = 'all 500ms'
        document.querySelector('#menuBtn')?.classList.remove(classes.lightBg)
      } else {
        logoInitials.classList.add('light-bg')
        // logoDot.classList.add('light-bg')
        document.querySelector('#menuBtn')?.classList.add(classes.lightBg)
      }
    }

    function getCurrentArticle(scrollY: number, articles: Array<Waypoint>) {
      const currentArticle = articles.filter((article: Waypoint) => {
        if (scrollY >= article.topBoundary && scrollY <= article.bottomBoundary) {
          return article
        }
      })
      return currentArticle[0]
    }

    function getArtBoundaries() {
      const art = document.querySelectorAll('article')
      const wp = []

      for (let i = 0; i < art.length; i++) {
        let waypoint: Waypoint
        if (i === 0) {
          waypoint = { index: 0, topBoundary: 0, bottomBoundary: art[0].clientHeight, dark: false }
        } else {
          waypoint = {
            index: i,
            topBoundary: art[i].clientHeight + wp[i - 1].topBoundary,
            bottomBoundary: art[i].clientHeight + wp[i - 1].bottomBoundary,
            dark: !wp[i - 1].dark,
          }
        }
        wp.push(waypoint)
      }
      return wp
    }

    return () => {
      document.removeEventListener('wheel', handleWheel)
      logoInitials.classList.remove('light-bg')
      document.querySelector('#menuBtn')?.classList.remove(classes.lightBg)
    }
  }, [])

  return (
    <main className="flex-auto">
      <section className="">
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </section>
    </main>
  )
}
export default ProjectsPage
