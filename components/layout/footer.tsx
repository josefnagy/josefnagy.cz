import { NextPage } from 'next'
import Magnetic from '../ui/magnetic'

const Footer: NextPage = () => {
  return (
    <>
      <footer className="pt-28 pb-28 px-4 sm:pt-32 sm:pb-36 sm:px-24 md:pt-48 md:pb-36 md:px-32" id="footer">
        <hr className="border border-dg" />
        <ul className="mt-4 sm:mt-8 sm:md-16 sm:flex sm:justify-between">
          <li className="text-dg text-l uppercase tracking-widest">© Josef Nagy 2021</li>
          <li className="text-dg text-l uppercase tracking-widest">
            <Magnetic selector=".mailto">
              <a className="mailto" href="mailto:josef.nagy@outlook.cz" target="_blank" rel="noreferrer">
                josef.nagy@outlook.cz
              </a>
            </Magnetic>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
