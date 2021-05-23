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
      cursor ? (cursor.style.width = '36px') : ''
      cursor ? (cursor.style.height = '36px') : ''
      shadow ? (shadow.style.opacity = '0') : ''
    }
    function onMouseLeave() {
      cursor ? (cursor.style.width = '12px') : ''
      cursor ? (cursor.style.height = '12px') : ''
      shadow ? (shadow.style.opacity = '1') : ''
    }

    function onMouseMove(e: MouseEvent) {
      // cursor ? (cursor.style.left = `${e.clientX}px`) : ''
      // cursor ? (cursor.style.top = `${e.clientY}px`) : ''
      cursor ? (cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px )`) : ''

      // shadow ? (shadow.style.left = `${e.clientX}px`) : ''
      // shadow ? (shadow.style.top = `${e.clientY}px`) : ''
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
