import { NextPage } from 'next'

import MainNavigation from './main-navigation'

const Layout: NextPage = (props) => {
  return (
    <>
      <div className="h-full flex flex-col">
        <MainNavigation />
        {props.children}
      </div>
    </>
  )
}

export default Layout
