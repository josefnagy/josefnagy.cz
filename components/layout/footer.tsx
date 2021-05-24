import { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <>
      <footer className="pt-48 pb-36 px-32" id="footer">
        <hr className="border border-dg" />
        <div className="mt-16 flex justify-between">
          <span className="text-dg text-l uppercase tracking-widest">© Josef Nagy 2021</span>
          <span className="text-dg text-l uppercase tracking-widest">
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
