import { NextPage } from 'next'
import Link from 'next/link'

const LatestNews: NextPage = () => {
  return (
    <>
      <section className="grid place-items-center h-1/4 px-4" id="latest-news">
        <div className="w-2/3">
          <h3 className="uppercase mb-20">- Latest News</h3>
          <div className="flex justify-between">
            <div className="transition duration-500 flex-1 p-8  z-20 opacity-60 hover:opacity-100">
              <h4 className="text-2xl text-primary ">
                <Link href="/">
                  <a className="relative hover ">Some news Title</a>
                </Link>
              </h4>
              <p className="text-sm text-dg">May, 15th, 2021</p>
              <p className="mt-2 text-justify text-xl">In this article we will look at different ways to put butter on your bread</p>
            </div>
            <div className="transition duration-500 flex-1 p-8  z-20 opacity-60 hover:opacity-100">
              <h4 className="text-2xl text-primary ">
                <Link href="/">
                  <a className="relative hover ">Some news Title</a>
                </Link>
              </h4>
              <p className="text-sm text-dg">May, 15th, 2021</p>
              <p className="mt-2 text-justify text-xl">In this article we will look at different ways to put butter on your bread</p>
            </div>
            <div className="transition duration-500 flex-1 p-8  z-20 opacity-60 hover:opacity-100">
              <h4 className="text-2xl text-primary ">
                <Link href="/">
                  <a className="relative hover ">Some news Title</a>
                </Link>
              </h4>
              <p className="text-sm text-dg">May, 15th, 2021</p>
              <p className="mt-2 text-justify text-xl">In this article we will look at different ways to put butter on your bread</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestNews
