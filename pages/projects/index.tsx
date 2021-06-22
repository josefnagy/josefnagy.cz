import { NextPage } from 'next'
import { useEffect } from 'react'

import classes from '../../components/ui/burger.module.css'

const ProjectsPage: NextPage = () => {
  useEffect(() => {
    document.querySelector('#logo > path')?.classList.add('light-bg')
    document.querySelector('#logo > rect')?.classList.add('light-bg')
    document.querySelector('#menuBtn')?.classList.add(classes.lightBg)

    return () => {
      document.querySelector('#logo > path')?.classList.remove('light-bg')
      document.querySelector('#logo > rect')?.classList.remove('light-bg')
      document.querySelector('#menuBtn')?.classList.remove(classes.lightBg)
    }
  }, [])

  return (
    <main className="flex-auto">
      <section className="h-screen grid place-items-center bg-prBg  uppercase px-4">whats UP</section>
    </main>
  )
}
export default ProjectsPage
