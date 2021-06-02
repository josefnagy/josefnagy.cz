import { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement
    const shadow = document.querySelector('.shadow') as HTMLDivElement

    const mouseCorrection = 12

    document.addEventListener('mousemove', onMouseMove)

    function onMouseMove(e: MouseEvent) {
      cursor.style.left = `${e.clientX - 6}px`
      cursor.style.top = `${e.clientY - 6}px`
      shadow.style.transform = `translate(${e.clientX - mouseCorrection}px, ${e.clientY - mouseCorrection}px )`
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
