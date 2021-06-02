import { ReactChild, useEffect } from 'react'

interface MagneticProps {
  threshold?: number
  children?: ReactChild
  selector: string
  trY?: boolean
  magnetic?: boolean
}

const Magnetic: React.FC<MagneticProps> = ({ children, threshold, selector, trY, magnetic }) => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement
    const shadow = document.querySelector('.shadow') as HTMLDivElement
    const magneticLinks = document.querySelectorAll(selector) as NodeListOf<HTMLDivElement>

    magneticLinks.forEach((magneticLink) => magneticLink.addEventListener('mousemove', animateIn))
    magneticLinks.forEach((magneticLink) => magneticLink.addEventListener('mouseleave', animateOut))
    magneticLinks.forEach((magneticLink) => (magneticLink.style.transition = 'all 350ms linear'))

    function animateIn(this: any, e: MouseEvent) {
      if (magnetic) {
        const rect = this.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        // const { offsetX: x, offsetY: y } = e
        const { offsetWidth: width, offsetHeight: height } = this

        const moveArea = 30
        const xMove = (x / width) * (moveArea * 2) - moveArea
        const yMove = (y / height) * (moveArea * 2) - moveArea

        this.style.transform = `translate3D(${xMove}px, ${trY ? yMove : 0}px, ${0}px)`
      }

      cursor.style.transform = 'scale(5)'
      shadow.style.opacity = '0'
    }

    function animateOut(this: any) {
      cursor.style.transform = 'scale(1)'
      shadow.style.opacity = '1'
      shadow.style.left = `+6px`
      shadow.style.top = `+6px`
      if (magnetic) this.style.transform = 'translate3D(0px, 0px, 0px)'
    }

    return () => {
      magneticLinks.forEach((magneticLink) => magneticLink.removeEventListener('mousemove', animateIn))
      magneticLinks.forEach((magneticLink) => magneticLink.removeEventListener('mouseleave', animateOut))
    }
  }, [threshold, selector, trY, magnetic])

  return <>{children}</>
}

export default Magnetic
