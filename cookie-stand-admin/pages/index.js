import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {

  const[location, setLocation] = useState('Location Here')
  const[minCust, setMinCust] = useState('Min Customers Here')
  const[maxCust, setMaxCust] = useState('Max Customers Here')
  const[avgCookies, setAvgCookies] = useState('Average Cookies Sold Here')

  function formHandler(event){
    event.preventDefault();
    setLocation(event.target.location.value)
    setMinCust(event.target.min_cuat.value)
    setMaxCust(event.target.max_cust.value)
    setAvgCookies(event.target.avg_per.value)
  }


  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="flex-1 text-2xl text-left bg-green-500 p-4">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="m-8">
      <form onSubmit={formHandler} className=" grid gap-1 bg-green-200 rounded grid-cols-8 mb-4">
        <legend className='col-start-4 col-span-2 text-2xl m-2'>Create Cookie Stand</legend>
        <label className='row-start-2 col-start-1 col-span-1 ml-8' for='location'>Location</label>
        <input className='row-start-2 col-start-2 col-span-7 text-sm mr-4' name='location'></input>
        <label className='row-start-3 col-start-1 col-span-2 text-sm text-center' for='min_cust'>Minimum Customers Per Hour</label>


        <div className="">
          <p className="text-center" >Create Cookie Stand</p>
          <form className="flex p3 mx-0">
          <button className="text-xs">Location</button>
          <input className="flex-auto"></input>
          </form>
        </div>

        <nav>
          <div className="static">
            <div className="my-3 inline-block p-2 text-xs"><p>Minimum Customers per Hour</p></div>
        
            <div className="inline-block p-2 text-xs"><p>Maximum Customers per Hour</p></div>

            <div className="inline-block p-2 text-xs"><p>Average Cookies per Sale</p></div>

            <button className="px-7 pu-2.5 bg-green-400">Create</button>

          </div>
        </nav>


      </form>
      </main>


      <footer className="p-4 mt-28 bg-green-400 text-xs">
        <p>&copy;2021</p>


      </footer>
    </div>
  )
}
