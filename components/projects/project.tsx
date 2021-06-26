import Image from 'next/image'

import classes from './project.module.css'
import burgerClasses from '../../components/ui/burger.module.css'
import Magnetic from '../ui/magnetic'
import { useEffect } from 'react'

interface Props {
  project: {
    name: string
    desc: string
    role?: string
    launched?: string
    git?: string
    url?: string
    img: string
  }
  index: number
}

interface Waypoint {
  index: number
  topBoundary: number
  bottomBoundary: number
  dark: boolean
}

const ProjectsPage: React.FC<Props> = ({ project, index }) => {
  const projectNumber = '0' + (index + 1)
  const light = (index + 1) % 2 > 0 ? true : false

  useEffect(() => {
    const logoInitials = document.querySelector('#logo > path') as SVGElement
    const logoDot = document.querySelector('#logo > rect') as SVGElement
    const menuBtn = document.querySelector('#menuBtn > span') as HTMLButtonElement

    document.addEventListener('scroll', handleScroll)
    document.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        console.log('scroll down')
      } else {
        console.log('scroll up')
      }
    })

    function switchLogo(dark: boolean) {
      if (dark) {
        logoInitials.classList.remove('light-bg')
        logoDot.classList.remove('light-bg')
        logoInitials.style.transition = 'all 500ms'
        logoDot.style.transition = 'all 500ms'
        menuBtn.style.transition = 'all 500ms'
        document.querySelector('#menuBtn')?.classList.remove(burgerClasses.lightBg)
      } else {
        logoInitials.classList.add('light-bg')
        logoDot.classList.add('light-bg')
        document.querySelector('#menuBtn')?.classList.add(burgerClasses.lightBg)
      }
    }

    function handleScroll() {
      const logo = document.querySelector('.logo')
      const rectLogo = logo?.getBoundingClientRect() as DOMRect
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

        if (window.pageYOffset >= wp[i].topBoundary - rectLogo?.bottom && window.pageYOffset <= wp[i].bottomBoundary) {
          switchLogo(wp[i].dark)
        }
      }
    }
  }, [])

  return (
    // article wrapper
    <article className={`w-full antialiased py-p9 ${light ? 'bg-prBg' : ''} art-${index + 1}`}>
      {/* content wrapper */}
      <div className="test px-p7">
        <Magnetic selector="a" />
        <div className="flex justify-between items-center normal-case text-prStats">
          <div className={light ? '' : 'text-white'}>{projectNumber}</div>
          <div>
            <span className="text-primary mr-2">Role</span>
            <span className={light ? '' : 'text-white'}>{project.role}</span>
          </div>
          <div>
            <span className="text-primary mr-2">Launched</span>
            <span className={light ? '' : 'text-white'}>{project.launched}</span>
          </div>
          <div className="">
            <a
              href={project.git}
              target="_blank"
              className={`${classes.dot} ${light ? '' : 'text-white'} hover:text-primary transition-colors hover`}
              rel="noreferrer"
            >
              View in Github
            </a>
          </div>

          <a
            href={project.url}
            target="_blank"
            className={`${classes.dot} ${light ? '' : 'text-white'} hover:text-primary transition-colors hover`}
            rel="noreferrer"
          >
            Go to website
          </a>
        </div>
        <div className="mt-14 grid place-items-center mb-14">
          <p className="font-project text-projectHeader leading-tight w-3/4">
            <span className="italic text-primary">{project.name}</span>
            <span className={light ? '' : 'text-white'}> - {project.desc}</span>
          </p>
        </div>
        <div>
          <Image src={project.img} width={2000} height={1000} alt="" quality={100} />
        </div>
      </div>
    </article>
  )
}
export default ProjectsPage
