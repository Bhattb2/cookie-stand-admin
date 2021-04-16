import Head from 'next/head'
import React, {useState} from 'react'
import {hours} from '../data'
import Link from 'next/link'
import { getToken } from '../services/data-fetcher'
import LoginForm from '../components/login-form'
import CookieStandAdmin from '../components/cookie-stand-admin';

export default function Home() {
  const [on, setOn] = useState(false)
  const [location, setLoc] = useState()
  const [noTable, setNoTable] = useState('No Cookie Stands Available');
  const [Total, setTotal] = useState()
  const [allHours, setHours] = useState([])
  const [codedData, setcodedData] = useState([])
  const [cookieData, setcookieData] = useState([]);
  const [token, setToken] = useState();
  const [username, setUsername] = useState('');
  async function loginHandler(values){
    const fetchedToken = await getToken(values);
    setToken(fetchedToken);
    setUsername(values.username);
  }
  
  function logoutHandler(){
    setToken(null);
    
  }
  
  if (!token) return <LoginForm onSubmit={loginHandler}/>
  return <CookieStandAdmin token={token} onLogout={logoutHandler} username={username} />

  function Handler(event){
    event.preventDefault();
     // alert(event.target.location.value)
    const savedLoc = event.target.location.value
    const minC = event.target.minC.value
    const maxC = event.target.maxC.value
    const avgC = event.target.avgCookies.value

    const minMaxAvg = [minC, maxC, avgC]
    const saleCookieData = calculateHSales(minMaxAvg)
    
    setOn(true)
    setHours(hours)
    setLoc('Location')
    setTotal('Totals')
    setNoTable('')
    setcodedData(['Tacoma', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516])

    const cookieDataNew = {
      locationNew: savedLoc,
      sales: saleCookieData,
      count: cookieData.length,
      
    }
    setcookieData([...cookieData, cookieDataNew])
  }
 
  
  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin"/>
      <main className="m-8">
        <Form />
        <Table allHours={allHours} cookieData={cookieData} hardcoded={codedData}/>
        
          <h2 className='mb-4 text-xs text-center text-s'>{noTable}</h2>
      </main>
      <Footer />
        
    </div>
  )
  
  function Header(props){
    return(
      <header className="p-3 text-3xl text-left bg-green-600">
        <Link href='/overview'>
        <a className="float-right pl-1 pr-1 mt-3 text-xs bg-gray-200 rounded-l rounded-r">Overview</a>
        </Link>
        <h1>{props.title}</h1>
      </header>
      
    )
    
  }
  
  function Form(props){
    return(
      <form onSubmit={Handler}className="grid gap-1 m-8 bg-green-200 rounded-lg mr-11 mb-14 grid-cols-13 fr-auto">
        <span className="col-span-10 m-3 text-xl font-bold text-center">Create Cookie Stand</span>
        <label className="col-span-2 col-start-1 row-start-2 text-xs font-bold" for='location'>Location</label>
        <input className="col-span-9 col-start-1 row-start-2 ml-12 mr-8 text-xs" name='location'></input>
        <label className="col-span-3 col-start-1 row-start-3 m-4 text-xs font-bold" for="minC"> Minimum Customer per Hour</label>
        <input className="col-span-2 col-start-1 row-start-4 mb-4 ml-4 mr-4 text-xs" name="minC"></input>
        <label className="col-span-3 col-start-3 row-start-3 m-4 text-xs font-bold" for="maxC"> Maximum Customer per Hour</label> 
        <input className="col-span-2 col-start-3 row-start-4 mb-4 ml-4 mr-4 text-xs" name="maxC"></input> 
        <label className="col-span-3 col-start-5 row-start-3 m-4 mb-4 ml-4 text-xs font-bold" for="avgCookies">Average Cookie per Sale</label>
        <input className="col-span-2 col-start-5 mb-4 ml-4 text-xs bottom row-start-8" name="avgCookies"></input> 
        <button className="col-span-3 col-start-7 row-span-2 row-start-3 mt-6 mb-6 ml-8 mr-8 bg-green-500 rounded-l rounded-r" >Create</button>
      </form>
    )
  } 


  function Table(props){
    return(
      <table className='w-1/2 mx-auto my-4 bg-green-100 rounded-lg ml-9 text-s'>
        <thead>
          <tr>
            <TableOn />
            {props.allHours.map(each =>(
             
              <th className='p-0.5'>{each}</th>
            ))}
              
            <TotalOn />
           
          </tr>
        </thead>
        <tbody>
            <tr>
            {props.hardcoded.map(data =>(
              <td className='p-1 border border-gray-700 text-s'>{data}</td>                
              ))}
                              
            </tr>
            {props.cookieData.map(data =>(
              <tr>
                <td className='p-1 border border-gray-700 text-s '>{data.locationNew}</td>
                {data.sales[0].map(each =>(
                  <td className='p-1 border border-gray-700 text-s'>{each}</td>
                  
                ))}
                <td className='p-1 border border-gray-700 text-s'>{data.sales[1]}</td>              
              </tr>
            ))}
            
        </tbody>
        
      </table>
    )
  }
  
  function calculateHSales(data){
    let singleSale = []
    let totalSale = 0
    for (let i = 0; i < hours.length; i++){
   
      let hourSale = Math.ceil(randomIntGen(data[0], data[1]) * data[2])
      singleSale.push(hourSale)
      totalSale += hourSale
    }

    return [singleSale, totalSale]
  }

  // Helps generate a random int based off hourly sales
  function randomIntGen(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  

  function TableOn(props){
    if (on) {
      return (
        <th className=''>{location}</th>
      )
    } else{
      return ('')
    }
  }
  
 

  
  function TotalOn(props){
    if (on) {
      return (
        <th className=''>{Total}</th>
      )
    } else{
      return ('')
    }
  }
       

  function Footer(props){
    return(
      <footer className="p-2 pt-2 text-xs bg-green-500">
        <h4>{cookieData.length }Locations World Wide</h4>
     
      </footer>
    
    )
  }  
}
  