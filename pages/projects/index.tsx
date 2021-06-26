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
    name: 'Radek Tlach',
    desc: 'Nejlepší malíř v Moravskoslezkém kraji s více než 20-ti letou praxí ',
    role: 'Development & Design',
    launched: '2018',
    git: 'https://github.com/josefnagy/calendar',
    url: 'https://workcal.netlify.com',
    img: '/images/projects/aracolor.png',
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
    name: 'Radek Tlach',
    desc: 'Nejlepší malíř v Moravskoslezkém kraji s více než 20-ti letou praxí ',
    role: 'Development & Design',
    launched: '2018',
    git: 'https://github.com/josefnagy/calendar',
    url: 'https://workcal.netlify.com',
    img: '/images/projects/aracolor.png',
  },
]

const ProjectsPage: NextPage = () => {
  useEffect(() => {
    document.querySelector('#logo > path')?.classList.add('light-bg')
    document.querySelector('#logo > rect')?.classList.add('light-bg')
    document.querySelector('#menuBtn')?.classList.add(classes.lightBg)
    document.querySelector('body')?.classList.add('light-bg')

    return () => {
      document.querySelector('#logo > path')?.classList.remove('light-bg')
      document.querySelector('#logo > rect')?.classList.remove('light-bg')
      document.querySelector('#menuBtn')?.classList.remove(classes.lightBg)
      document.querySelector('body')?.classList.remove('light-bg')
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
