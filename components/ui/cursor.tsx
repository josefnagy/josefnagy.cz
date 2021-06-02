// import { NextPage } from 'next'
import { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const cursor: HTMLDivElement | null = document.querySelector('.cursor')
    const shadow: HTMLDivElement | null = document.querySelector('.shadow')
    // const links: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll('a')
    // const buttons: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('button')

    const mouseCorrection = 12

    document.addEventListener('mousemove', onMouseMove)

    // function addMouseHoverListeners(nl: NodeListOf<HTMLAnchorElement | HTMLButtonElement>) {
    //   nl?.forEach((element) => {
    //     element.addEventListener('mouseenter', onMouseEnter)
    //     element.addEventListener('mouseleave', onMouseLeave)
    //   })
    // }

    // addMouseHoverListeners(links)
    // addMouseHoverListeners(buttons)

    // function onMouseEnter() {
    //   cursor ? (cursor.style.transform = `scale(3)`) : ''
    //   shadow ? (shadow.style.opacity = '0') : ''
    // }
    // function onMouseLeave() {
    //   cursor ? (cursor.style.transform = `scale(1)`) : ''
    //   shadow ? (shadow.style.opacity = '1') : ''
    //   mouseCorrection = 6
    // }

    function onMouseMove(e: MouseEvent) {
      cursor ? (cursor.style.left = `${e.clientX - 6}px`) : `${0}px`
      cursor ? (cursor.style.top = `${e.clientY - 6}px`) : `${0}px`

      shadow ? (shadow.style.transform = `translate(${e.clientX - mouseCorrection}px, ${e.clientY - mouseCorrection}px )`) : ''
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
