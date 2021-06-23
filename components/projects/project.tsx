import Image from 'next/image'

import classes from './project.module.css'
import Magnetic from '../ui/magnetic'

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
  const projectNumber = '0' + (index + 1)
  const light = (index + 1) % 2 > 0 ? true : false

  return (
    // article wrapper
    <article className={`w-full antialiased py-p9 ${light ? 'bg-prBg' : ''}`}>
      {/* content wrapper */}
      <div className="px-p7">
        <Magnetic selector="a" />
        <div className="flex justify-between normal-case text-prStats">
          <div>{projectNumber}</div>
          <div>
            <span className="text-primary mr-2">Role</span>
            <span className={light ? '' : 'text-white'}>{project.role}</span>
          </div>
          <div>
            <span className="text-primary mr-2">Launched</span>
            <span className={light ? '' : 'text-white'}>{project.launched}</span>
          </div>
          <a href={project.git} target="_blank" className={`${classes.dot} ${light ? '' : 'text-white'}`} rel="noreferrer">
            View in Github
          </a>
          <a href={project.url} target="_blank" className={`${classes.dot} ${light ? '' : 'text-white'}`} rel="noreferrer">
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