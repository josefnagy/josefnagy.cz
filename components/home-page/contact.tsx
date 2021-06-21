import { NextPage } from 'next'
import { FormEvent, useRef, useState, useEffect } from 'react'

import Button from '../ui/button'
import Magnetic from '../ui/magnetic'
// import Notification from '../ui/notification'

export interface ContactDetails {
  name: string
  email: string
  message: string
  id?: string
  createdAt: Date
}

async function sendContactData(contactDetails: ContactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) throw new Error(data.message || 'Something went wrong')
}

const Contact: NextPage = () => {
  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const messageInput = useRef<HTMLTextAreaElement>(null)

  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false)

  const [requestStatus, setRequestStatus] = useState<string | null>(null) // "pending, success, error"
  const [requestError, setRequestError] = useState<string | null>(null)

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError('')
      }, 3000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [requestStatus])

  function validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault()

    const target = e.target as HTMLFormElement

    setNameErr(false)
    setEmailErr(false)
    setMessageErr(false)

    setRequestStatus('pending')

    const name = nameInput.current?.value as string
    const email = emailInput.current?.value as string
    const message = messageInput.current?.value as string

    if (!name || name?.length < 3 || name?.length > 15) {
      setNameErr(true)
      return
    }
    if (!email || !validateEmail(email)) {
      setEmailErr(true)
      return
    }
    if (!message || message?.length < 3) {
      setMessageErr(true)
      return
    }

    if (!nameErr || !emailErr || !messageErr) {
      try {
        await sendContactData({
          name,
          email,
          message,
          createdAt: new Date(),
        })
        setRequestStatus('success')
        target.reset()
      } catch (error) {
        setRequestError(error.message)
        setRequestStatus('error')
      }
    }
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
          {requestError && <p className="border border-warning mt-10 text-center text-warning text-xl">{requestError}</p>}
          <form className="mt-10 relative" onSubmit={handleFormSubmit}>
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Name</span>
                <span className="text-warning mx-auto text-xl mb-2">&nbsp;{nameErr && 'Name has to be 3 to 15 characters long.'}</span>
              </div>
              <input
                type="text"
                ref={nameInput}
                className={`w-full bg-transparent ring ring-2 ${
                  nameErr ? 'ring-warning' : 'ring-white'
                } text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none`}
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
                className={`w-full bg-transparent ring ring-2 ${
                  emailErr ? 'ring-warning' : 'ring-white'
                } text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none`}
              />
            </label>
            <label className="block mb-7">
              <div className="relative flex">
                <span className="absolute uppercase font-bold mb-2 text-xl">Message</span>
                <span className="text-warning mx-auto text-xl mb-2">&nbsp;{messageErr && 'You are missing a message.'}</span>
              </div>
              <textarea
                rows={5}
                ref={messageInput}
                className={`w-full bg-transparent ring ring-2 ${
                  messageErr ? 'ring-warning' : 'ring-white'
                } text-xl pl-2 pt-1 pb-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:border-none`}
              />
            </label>
            <Magnetic selector=".contact-btn">
              {/* <button type="submit" className="contact-btn transition duration-500ring ring-2 ring-primary px-4 pb-1 text-xl hover:bg-primary">

              </button> */}
              <Button
                status={requestStatus}
                className="contact-btn transition duration-500ring ring-2 ring-primary px-4 pb-1 text-xl hover:bg-primary w-48 h-8"
              >
                Send Message
              </Button>
            </Magnetic>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
