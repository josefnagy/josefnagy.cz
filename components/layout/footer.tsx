import { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <>
      <footer className="pt-36 pb-16 px-32" id="footer">
        <hr />
        <div className="mt-2 flex justify-between">
          <span className="text-dg text-xl">© Josef Nagy 2021</span>
          <span className="text-dg text-xl">
            <a href="mailto:josef.nagy@outlook.cz" target="_blank" rel="noreferrer">
              josef.nagy@outlook.cz
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
