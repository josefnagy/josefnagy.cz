import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const items = {
  from: { opacity: 0, transition: { ease: 'easeIn', duration: 0.4 } },
  to: { opacity: 1, transition: { ease: 'easeIn', duration: 0.4 } },
}

interface Props {
  setShowMenu: (isMenuOpened: boolean) => void
  setIsMenuOpened: (showMenu: boolean) => void
  img: string
}

const MenuItem: React.FC<Props> = ({ setShowMenu, setIsMenuOpened, img, children }) => {
  const handleMenuClick = () => {
    setShowMenu(false)
    setIsMenuOpened(false)
  }

  return (
    <>
      <motion.li className="max-w-lg w-47 mb-24" variants={items}>
        <Link href="/">
          <a
            onClick={() => {
              handleMenuClick()
            }}
            role="button"
            tabIndex={0}
            onKeyPress={() => handleMenuClick()}
            className="text-left"
          >
            <span className="text-black text-2xl inline-block pb-1 font-black uppercase font-heading">{children}</span>
            <Image src={img} width={500} height={350} quality={100} />
          </a>
        </Link>
      </motion.li>
    </>
  )
}

export default MenuItem
