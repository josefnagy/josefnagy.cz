import { NextPage } from 'next'
import { FormEvent, useRef, useState } from 'react'

import Magnetic from '../ui/magnetic'

const Contact: NextPage = () => {
  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const messageInput = useRef<HTMLTextAreaElement>(null)

  const [nameErr, setNameErr] = useState(null)
  const [emailErr, setEmailErr] = useState(null)
  const [messageErr, setMessageErr] = useState(null)

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <>
      <section className="grid place-items-center h-auto px-4" id="contact">
        <div className="w-2/3">
          <h3 className="uppercase mb-20">- Contact</h3>
          <h2 className="text-7xl text-center">
            Let’s have some <span className="contact-header">fun.</span>
          </h2>
          <p className="text-center text-dg -mt-2 text-xl">I can’t give You a ride in locomotive so don’t even try :-)</p>
          <form className="mt-10" onSubmit={handleFormSubmit}>
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Name</span>
                <span className="text-warning mx-auto text-xl mb-2">&nbsp;{nameErr && 'Name has to be 3 to 15 characters long.'}</span>
              </div>
              <input
                type="text"
                ref={nameInput}
                className="w-full bg-transparent ring ring-1 ring-white text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none"
              />
            </label>
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Email</span>
                <span className="text-warning mx-auto text-xl mb-2">&nbsp;{emailErr && 'This is not valid email adress.'}</span>
              </div>
              <input
                type="text"
                ref={emailInput}
                className="w-full bg-transparent ring ring-1 ring-white text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none"
              />
            </label>
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Message</span>
                <span className="text-warning mx-auto text-xl mb-2">&nbsp;{messageErr && 'Name has to be 3 to 15 characters long.'}</span>
              </div>
              <textarea
                rows={5}
                ref={messageInput}
                className="w-full bg-transparent ring ring-1 ring-white text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none"
              />
            </label>
            <Magnetic selector=".contact-btn">
              <button type="submit" className="contact-btn transition duration-500ring ring-2 ring-primary px-4 pb-1 text-xl hover:bg-primary">
                Send message
              </button>
            </Magnetic>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
