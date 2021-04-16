import Head from 'next/head'
import React, {useState} from 'react'
import Link from 'next/link'

export default function Overview() {

    return(
        <div className="">
            <Head>
                <title>Cookie Stand</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header title="Overview"/>
            <main className="m-1 text-xs text-center">
                <p>Still Under Construction...</p>
                <Link href='/'>
                    <a className='bg-gray-200 rounded-l rounded-r justify-evenly'>Return to Main Page</a>
                </Link>
            </main>
            <Footer />
      
        </div>
    )

    function Header(props){
        return(
          <header className="p-3 text-3xl text-left bg-green-600">
            <Link href='/overview'>
            <a className="float-right pl-1 pr-1 mt-3 text-xs bg-gray-100 rounded-l rounded-r">Overview</a>
            </Link>
            <h1>{props.title}</h1>
          </header>
          
        )
        
      }

    function Footer(props){
        return(
          <footer className="pt-2 text-xs bg-green-500">
            <h4>&copy;2021</h4>
          </footer>
        
        )
      }  
}