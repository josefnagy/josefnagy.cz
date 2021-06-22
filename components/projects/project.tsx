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
  const dark = (index + 1) % 2 > 0 ? false : true

  return (
    <div className={`w-full mt-20 mb-20 ${dark ? 'bg-prBg' : ''}`}>
      <Magnetic selector="a" />
      <div className="flex justify-between normal-case">
        <div>{projectNumber}</div>
        <div>
          <span className="text-primary mr-2">Role</span>
          <span>{project.role}</span>
        </div>
        <div>
          <span className="text-primary mr-2">Launched</span>
          <span>{project.launched}</span>
        </div>
        <a href={project.git} target="_blank" className={classes.dot} rel="noreferrer">
          View in Github
        </a>
        <a href={project.url} target="_blank" className={classes.dot} rel="noreferrer">
          Go to website
        </a>
      </div>
      <div className="mt-14 grid place-items-center mb-14">
        <p className="font-project text-projectHeader w-2/3">
          <span className="italic text-primary">{project.name}</span>
          <span className=""> - {project.desc}</span>
        </p>
      </div>
      <div>
        <Image src={project.img} width={2000} height={1000} alt="" quality={100} />
      </div>
    </div>
  )
}
export default ProjectsPage
