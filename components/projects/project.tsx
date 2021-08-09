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

  function renderArtHeader() {
    let vw = undefined

    if (typeof document !== 'undefined') {
      vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

      if (vw && vw > 375) {
        return (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center normal-case text-md lg:text-prStats">
            <div className={` ${light ? 'text-black' : 'text-white'}`}>{projectNumber}</div>
            <div>
              <span className="text-primary mr-2">Role</span>
              <span className={light ? 'text-black' : 'text-white'}>{project.role}</span>
            </div>
            <div>
              <span className="text-primary mr-2">Launched</span>
              <span className={light ? 'text-black' : 'text-white'}>{project.launched}</span>
            </div>
            <div className="">
              <a
                href={project.git}
                target="_blank"
                className={`${classes.dot} ${light ? 'text-black' : 'text-white'} hover:text-primary transition-colors hover`}
                rel="noreferrer"
              >
                View in Github
              </a>
            </div>

            <a
              href={project.url}
              target="_blank"
              className={`${classes.dot} ${light ? 'text-black' : 'text-white'} hover:text-primary transition-colors hover`}
              rel="noreferrer"
            >
              Go to website
            </a>
          </div>
        )
      } else {
        return (
          <div className="flex flex-row justify-between normal-case text-md lg:text-prStats">
            <div>
              <div className={` ${light ? 'text-black' : 'text-white'}`}>{projectNumber}</div>
              <div>
                <span className="text-primary mr-2">Role</span>
                <span className={light ? 'text-black' : 'text-white'}>{project.role}</span>
              </div>
              <div>
                <span className="text-primary mr-2">Launched</span>
                <span className={light ? 'text-black' : 'text-white'}>{project.launched}</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="">
                <a
                  href={project.git}
                  target="_blank"
                  className={`${classes.dot} ${light ? 'text-black' : 'text-white'} hover:text-primary transition-colors hover`}
                  rel="noreferrer"
                >
                  View in Github
                </a>
              </div>

              <a
                href={project.url}
                target="_blank"
                className={`${classes.dot} ${light ? 'text-black' : 'text-white'} hover:text-primary transition-colors hover`}
                rel="noreferrer"
              >
                Go to website
              </a>
            </div>
          </div>
        )
      }
    }
  }

  return (
    // article wrapper
    <article className={`w-full antialiased py-p9 ${light ? 'bg-prBg' : ''} art-${index + 1}`}>
      {/* content wrapper */}
      <div className="px-p7">
        <Magnetic selector="a" />
        <div>{renderArtHeader()}</div>
        <div className="mt-14 grid place-items-center mb-14">
          <p className="font-project text-xl  md:text-projectHeader leading-tight w-3/4">
            <span className="italic text-primary">{project.name}</span>
            <span className={light ? 'text-black' : 'text-white'}> - {project.desc}</span>
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
