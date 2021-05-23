import { NextPage } from 'next'

const Projects: NextPage = () => {
  return (
    <>
      <section className="grid place-items-center h-1/3 px-52" id="projects">
        <h3 className="uppercase place-self-start ml-36">- My Work</h3>
        <ul className="mt-20 text-text">
          <li className="flex text-3xl my-3">
            <span className="text-sm mr-1 text-dg mt-1">01</span>WorkShift Calendar App
          </li>
          <li className="flex text-3xl my-3">
            <span className="text-sm mr-1 text-dg mt-1">02</span>Recipe App
          </li>
          <li className="flex text-3xl my-3">
            <span className="text-sm mr-1 text-dg mt-1">03</span>My portfolio Website
          </li>
          <li className="flex text-3xl my-3">
            <span className="text-sm mr-1 text-dg mt-1">04</span>Aracolor
          </li>
        </ul>
      </section>
    </>
  )
}

export default Projects
