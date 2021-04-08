import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="">
  
      </main> */}


      <header className="bg-green-500 p-4 text-black-50">
        <h1>Cookie Stand Admin</h1>

      </header>

      <main className="">
      <div className="my-6 p-1 mx-20 bg-green-200 rounded-lg w-100 h-40">
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


      </div>
      </main>


      <footer className="p-1 mt-28 bg-green-400 p-4 text-xs">
        <p>&copy;2021</p>


      </footer>
    </div>
  )
}
