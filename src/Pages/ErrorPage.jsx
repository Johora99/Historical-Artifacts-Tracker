
import { useEffect } from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function () {

    const error = useRouteError()
     useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <div className="w-full h-screen flex">
      <div className="m-auto text-center">
      <h1 className="text-6xl font-bold">Oops!</h1>
        <p className="my-5 text-2xl font-medium">Sorry, an unexpected error has occurred.</p>
        <h2 className="text-5xl">{error.status}</h2>
        <i className="text-2xl inline-block mt-5">
          {
            error.statusText || error.message
          }
        </i> <br />
        <Link to='/' className='text-xl font-semibold border-[2px] border-black py-2 px-10 inline-block mt-10'>Go Back</Link>
      </div>
          
    </div>
  )
}
