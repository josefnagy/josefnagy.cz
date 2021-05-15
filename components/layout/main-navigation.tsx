import { NextPage } from 'next'
import Link from 'next/link'
import Burger from '../ui/burger'

import Logo from './logo'

const MainNavigation: NextPage = () => {
  return (
    <>
      <header className="mx-4 pt-10 w-full flex flex-row justify-between flex-initial fixed">
        <Link href="/">
          <a className="ml-28">
            <Logo />
          </a>
        </Link>
        <nav className="self-center grid place-items-center mr-28">
          <Burger />
        </nav>
      </header>
    </>
  )
}

export default MainNavigation
