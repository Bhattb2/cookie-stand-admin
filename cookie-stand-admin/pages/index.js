import Head from 'next/head'

import{ hours } from '.../data'
import React, { useState } from 'react'



export default function Home() {

  const[location, setLocation] = useState('Location Here')
  const[minCust, setMinCust] = useState('Min Customers Here')
  const[maxCust, setMaxCust] = useState('Max Customers Here')
  const[avgCookies, setAvgCookies] = useState('Average Cookies Sold Here')

  function formHandler(event){
    event.preventDefault();
    setLocation(event.target.location.value)
    setMinCust(event.target.min_cust.value)
    setMaxCust(event.target.max_cust.value)
    setAvgCookies(event.target.avg_per.value)
  }


  return (
    <section className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="flex-1 text-2xl text-left bg-green-500 p-4">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="m-8">
      <form onSubmit={formHandler} className=" grid gap-1 bg-green-200 rounded-lg grid-cols-8 mb-4">
        <legend className='col-start-4 col-span-2 text-xl m-2'>Create Cookie Stand</legend>
        <label className='row-start-2 col-start-1 col-span-1 ml-8' for='location'>Location</label>
        <input className='row-start-2 col-start-2 col-span-7 text-sm mr-4' name='location'></input>
        <label className='row-start-3 col-start-1 col-span-2 text-sm text-center' for='min_cust'>Minimum Customers Per Hour</label>
        <input className='row-start-4 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4' name='min_cust'></input>
        <label className='row-start-3 col-start-3 col-span-2 text-sm text-center' for='max_cust'>Maximum Customers Per Hour</label>
        <input className='row-start-4 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4' name='max_cust'></input>
        <label className='row-start-3 col-start-5 col-span-2 text-sm text-center' for='avg_per'>Average Cookies Per Sale</label>
        <input className='row-start-4 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4' name='avg_per'></input>
        <button className='row-start-3 col-start-7 col-span-2 row-span-2 bg-green-400 mr-4 ml-2 mb-3 mt-4'>Create</button>

      </form>
      
      <h2 className='text-center mb-4'>Report Table Coming Soon...</h2>
      <p className="my-3 text-center"> "location":"{location}", "minCustomers":{minCust}, "maxCustomers":{maxCust}, "avgCookies":{avgCookies} </p>
    
      </main>


      <footer className="p-4 pt-2 bg-green-500 text-xs">
        <p className='ml-6 pt-1'>&copy; || Code Fellows || 2021</p>

      </footer>
    </section>
  )
}
