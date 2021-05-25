import { NextPage } from 'next'
import Image from 'next/image'
import { MutableRefObject, useRef } from 'react'
import Link from 'next/link'

const Projects: NextPage = () => {
  const workcal = useRef<HTMLDivElement>()
  const recipe = useRef<HTMLDivElement>()
  const portfolio = useRef<HTMLDivElement>()
  const aracolor = useRef<HTMLDivElement>()

  function setOpacity(div: MutableRefObject<HTMLDivElement | undefined>, op: string) {
    if (div.current) div.current.style.opacity = op
  }

  //* e: { target: HTMLDivElement } */
  //* this is cool, i tryed e: MouseEvent and other stuff but this works like charm

  function onMouseEnter(e: { target: HTMLDivElement }) {
    if (e.target) {
      e.target.id === 'workcal' ? setOpacity(workcal, '0.2') : ''
      e.target.id === 'recipe' ? setOpacity(recipe, '0.2') : ''
      e.target.id === 'portfolio' ? setOpacity(portfolio, '0.2') : ''
      e.target.id === 'aracolor' ? setOpacity(aracolor, '0.2') : ''
    }
  }

  function onMouseLeave(e: { target: HTMLDivElement }) {
    e.target.id === 'workcal' ? setOpacity(workcal, '0') : ''
    e.target.id === 'recipe' ? setOpacity(recipe, '0') : ''
    e.target.id === 'portfolio' ? setOpacity(portfolio, '0') : ''
    e.target.id === 'aracolor' ? setOpacity(aracolor, '0') : ''
  }

  return (
    <>
      <section className="transition-all duration-1000 grid place-items-center h-1/5" id="projects">
        <div
          className="absolute transition-all duration-1000 w-full h-2/3  opacity-0 overflow-auto "
          ref={workcal}
        >
          <Image
            src="/images/projects/workcal.png"
            width={2000}
            height={1000}
            alt=""
            quality={100}
          />
        </div>
        <div
          className="absolute transition-all duration-1000 w-full h-2/3  opacity-0 overflow-auto "
          ref={recipe}
        >
          <Image
            src="/images/projects/recipe.png"
            width={2000}
            height={1000}
            alt=""
            quality={100}
          />
        </div>
        <div
          className="absolute transition-all duration-1000 w-full h-2/3  opacity-0 overflow-auto "
          ref={portfolio}
        >
          <Image
            src="/images/projects/portfolio.png"
            width={2000}
            height={1000}
            alt=""
            quality={100}
          />
        </div>
        <div
          className="absolute transition-all duration-1000 w-full h-2/3  opacity-0 overflow-auto "
          ref={aracolor}
        >
          <Image
            src="/images/projects/aracolor.png"
            width={2000}
            height={1000}
            alt=""
            quality={100}
          />
        </div>
        <div className="w-2/3">
          <h3 className="uppercase mb-20">- My Work</h3>
          <div className="flex justify-center">
            <ul className="transition-all duration-500 rounded-lg  grid place-items-center text-text p-10">
              <li className="flex text-3xl py-2">
                <span className="text-sm mr-1 text-dg mt-1">01</span>
                <Link href="/project">
                  <a
                    className="hover relative hover:text-white z-30"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    id="workcal"
                  >
                    WorkShift Calendar App
                  </a>
                </Link>
              </li>
              <li className="flex text-3xl  py-2">
                <span className="text-sm mr-1 text-dg mt-1">02</span>
                <Link href="/project">
                  <a
                    className="hover relative hover:text-white z-30"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    id="recipe"
                  >
                    Recipe App
                  </a>
                </Link>
              </li>
              <li className="flex text-3xl py-2 hover z-10">
                <span className="text-sm mr-1 text-dg mt-1">03</span>
                <Link href="/project">
                  <a
                    className="hover relative hover:text-white z-30"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    id="portfolio"
                  >
                    My portfolio Website
                  </a>
                </Link>
              </li>
              <li className="flex text-3xl py-2">
                <span className="text-sm mr-1 text-dg mt-1">04</span>
                <Link href="/project">
                  <a
                    className="hover relative hover:text-white z-30"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    id="aracolor"
                  >
                    Aracolor
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
