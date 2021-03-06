import { motion } from 'framer-motion'
// import Image from 'next/image'
import Link from 'next/link'
import Magnetic from './magnetic'

const items = {
  from: { opacity: 0, transition: { ease: 'easeIn', duration: 0.4 } },
  to: { opacity: 1, transition: { ease: 'easeIn', duration: 0.4 } },
}

interface Props {
  setShowMenu: (isMenuOpened: boolean) => void
  setIsMenuOpened: (showMenu: boolean) => void
  img: string
  url: string
}

const MenuItem: React.FC<Props> = ({ setShowMenu, setIsMenuOpened, img, children, url = '#hero' }) => {
  const handleMenuClick = () => {
    setShowMenu(false)
    setIsMenuOpened(false)
  }

  return (
    <>
      <Magnetic trY magnetic selector=".menu-item" threshold={20}>
        <motion.li className="menu-item max-w-lg w-47 p-1 mb-12 sm:mb-24" variants={items}>
          <Link href={url}>
            <a
              onClick={() => {
                handleMenuClick()
              }}
              role="button"
              tabIndex={0}
              onKeyPress={() => handleMenuClick()}
              className="text-left w-full"
            >
              <span className="text-black text-md sm:text-2xl inline-block pb-1 sm:font-black uppercase font-heading">{children}</span>
              {/* <Image src={img} layout="responsive" priority width={500} height={350} quality={100} /> */}
              <img src={img} alt="qq" />
            </a>
          </Link>
        </motion.li>
      </Magnetic>
    </>
  )
}

export default MenuItem
