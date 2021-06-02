import { ReactChild, useEffect } from 'react'

interface BoxCoords {
  top: number
  left: number
  right: number
  bottom: number
}

interface MagneticProps {
  threshold?: number
  children: ReactChild
  selector: string
  trY?: boolean
}

const Magnetic: React.FC<MagneticProps> = ({ children, threshold, selector, trY }) => {
  useEffect(() => {
    let hover = false
    const magneticLink = document.querySelector(selector) as HTMLDivElement
    const cursor = document.querySelector('.cursor') as HTMLDivElement
    const shadow = document.querySelector('.shadow') as HTMLDivElement

    magneticLink.style.transition = 'all 0.5s'

    function onMouseMove(e: MouseEvent) {
      const boxCoords: BoxCoords = getCoords(magneticLink)

      if (inRange(boxCoords, e, threshold)) {
        animateIn(cursor, shadow, magneticLink, e)
        hover = true
      } else {
        if (hover) {
          hover = false
          animateOut(cursor, shadow, magneticLink)
        }
      }
    }

    function animateIn(cursor: HTMLDivElement, shadow: HTMLDivElement, magnet: HTMLDivElement, e: MouseEvent) {
      const center = getCenter(magnet)

      cursor.style.transform = 'scale(4)'
      shadow.style.opacity = '0'
      magnet.style.transform = `translate(${-20}px, ${trY ? 0 : 0}px)`
    }

    function animateOut(cursor: HTMLDivElement, shadow: HTMLDivElement, magnet: HTMLDivElement) {
      cursor.style.transform = 'scale(1)'
      shadow.style.opacity = '1'
      shadow.style.left = `+6px`
      shadow.style.top = `+6px`
      magnet.style.transform = 'translate(0px, 0px)'
    }

    if (document) {
      document.addEventListener('mousemove', onMouseMove)
    }
  }, [threshold, selector, trY])

  function getCoords(elem: HTMLDivElement): BoxCoords {
    const box = elem.getBoundingClientRect()

    return {
      top: box.top,
      right: box.right,
      bottom: box.bottom,
      left: box.left,
    }
  }

  function getCenter(elem: HTMLDivElement) {
    const box = elem.getBoundingClientRect()

    return {
      x: box.x + box.width / 2,
      y: box.y + box.height / 2,
    }
  }

  function inRange(elem: BoxCoords, cursor: MouseEvent, threshold = 0) {
    const cX = cursor.clientX
    const cY = cursor.clientY

    const left = elem.left - threshold
    const right = elem.right + threshold
    const top = elem.top - threshold
    const bottom = elem.bottom + threshold

    if (cX >= left && cX <= right && cY <= bottom && cY >= top) return true
    return false
  }

  return <>{children}</>
}

export default Magnetic
