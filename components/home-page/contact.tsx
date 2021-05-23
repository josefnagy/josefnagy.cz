import { NextPage } from 'next'
// import Link from 'next/link'

const Contact: NextPage = () => {
  return (
    <>
      <section className="grid place-items-center h-auto px-4" id="contact">
        <div className="w-2/3">
          <h3 className="uppercase mb-20">- Contact</h3>
          <h2 className="text-7xl text-center">
            Let’s have some <span className="contact-header">fun.</span>
          </h2>
          <p className="text-center text-dg -mt-2 text-xl">
            I can’t give You a ride in locomotive so don’t even try :-)
          </p>
          <form className="mt-10">
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Name</span>
                <span className="text-warning mx-auto text-xl mb-2">Some error message</span>
              </div>
              <input
                type="text"
                className="w-full bg-transparent ring ring-1 ring-white text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none"
              />
            </label>
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Email</span>
                <span className="text-warning mx-auto text-xl mb-2">Some error message</span>
              </div>
              <input
                type="text"
                className="w-full bg-transparent ring ring-1 ring-white text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none"
              />
            </label>
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Message</span>
                <span className="text-warning mx-auto text-xl mb-2">Some error message</span>
              </div>
              <textarea
                rows={5}
                className="w-full bg-transparent ring ring-1 ring-white text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none"
              />
            </label>
            <button className="transition duration-500ring ring-2 ring-primary px-4 pb-1 text-xl hover:bg-primary">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact