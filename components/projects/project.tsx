import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

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

const ProjectsPage: React.FC<Props> = ({ project, index }) => {
  const [ref, inView, entry] = useInView({ threshold: 0.7 })

  const projectNumber = '0' + (index + 1)
  const light = (index + 1) % 2 > 0 ? true : false

  useEffect(() => {
    const logoInitials = document.querySelector('#logo > path') as SVGElement
    const logoDot = document.querySelector('#logo > rect') as SVGElement
    const menuBtn = document.querySelector('#menuBtn > span') as HTMLButtonElement
    if (inView && !light) {
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
  }, [inView, light, entry])

  return (
    // article wrapper
    <article ref={ref} className={`w-full antialiased py-p9 ${light ? 'bg-prBg' : ''}`}>
      {/* content wrapper */}
      <div className="px-p7">
        <Magnetic selector="a" />
        <div className="flex justify-between items-center normal-case text-prStats">
          <div>{projectNumber}</div>
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
