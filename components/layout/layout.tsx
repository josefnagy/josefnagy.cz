import { NextPage } from 'next'
import Background from '../ui/background'

import MainNavigation from './main-navigation'

const Layout: NextPage = (props) => {
  return (
    <>
      <div className="h-full flex flex-col">
        <MainNavigation />
        {props.children}
        <Background />
      </div>
    </>
  )
}

export default Layout
