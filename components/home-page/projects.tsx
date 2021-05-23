import { NextPage } from 'next'
import Link from 'next/link'

const Projects: NextPage = () => {
  return (
    <>
      <section className="grid place-items-center h-1/3" id="projects">
        <div className="w-2/3">
          <h3 className="uppercase mb-20">- My Work</h3>
          <ul className="grid place-items-center text-text">
            <li className="flex text-3xl  py-2">
              <span className="text-sm mr-1 text-dg mt-1">01</span>
              <Link href="/project">
                <a className="hover relative hover:text-white">WorkShift Calendar App</a>
              </Link>
            </li>
            <li className="flex text-3xl  py-2">
              <span className="text-sm mr-1 text-dg mt-1">02</span>
              <Link href="/project">
                <a className="hover relative hover:text-white">Recipe App</a>
              </Link>
            </li>
            <li className="flex text-3xl py-2 hover z-10">
              <span className="text-sm mr-1 text-dg mt-1">03</span>
              <Link href="/project">
                <a className="hover relative hover:text-white">My portfolio Website</a>
              </Link>
            </li>
            <li className="flex text-3xl py-2">
              <span className="text-sm mr-1 text-dg mt-1">04</span>
              <Link href="/project">
                <a className="hover relative hover:text-white">Aracolor</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Projects
