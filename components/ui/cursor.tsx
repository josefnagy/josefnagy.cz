// import { NextPage } from 'next'
import { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const cursor: HTMLDivElement | null = document.querySelector('.cursor')
    const shadow: HTMLDivElement | null = document.querySelector('.shadow')
    const links: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll('a')

    document.addEventListener('mousemove', onMouseMove)

    links?.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnter)
      link.addEventListener('mouseleave', onMouseLeave)
    })

    function onMouseEnter() {
      cursor ? (cursor.style.transform = `scale(3)`) : ''
      shadow ? (shadow.style.opacity = '0') : ''
    }
    function onMouseLeave() {
      cursor ? (cursor.style.transform = `scale(1)`) : ''
      shadow ? (shadow.style.opacity = '1') : ''
    }

    function onMouseMove(e: MouseEvent) {
      cursor ? (cursor.style.left = `${e.clientX - 6}px`) : ''
      cursor ? (cursor.style.top = `${e.clientY - 6}px`) : ''

      shadow ? (shadow.style.transform = `translate(${e.clientX}px, ${e.clientY}px )`) : ''
    }
  }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="shadow"></div>
    </>
  )
}

export default Cursor
