import React, { useState } from 'react'
import JavascriptImage from '../assets/javascript.png'
import ReactImage from '../assets/react.png';
import NodejsImage from '../assets/nodejs.png';
import TailwindCSSImage from '../assets/tailwindCSS.png';
import Django from '../assets/django.png';
import Basic from '../assets/basic.png'
import '../index.css'
import { languageList } from '../constants';

function Knowledge() { 
  const [showDetail,setShowDetail] = useState(1);
  return (
    <div id="knowledge" className='scrollBar h-fit lg:h-[960px] bg-[#383838] lg:flex w-full py-10 mx-auto px-[10%] relative
        after:w-10 after:h-10 after:mx-[40%] after:rotate-[136deg] after:absolute after:bg-[#09aca6] after:-top-5 after:z-10'>

        <div className='absolute text-white mx-[40.6%] z-20 -top-1 text-xl'><i class="uil uil-book-open"></i></div> 
        <div className='absolute text-white mx-[40.6%] z-20 -bottom-1 text-xl'><i class="uil uil-book-open"></i></div> 
 
      <div className=' bg-white rounded-xl shadow-inner shadow-[#09aca6] p-16'>
        <h1 className='text-2xl font-bold mb-2'>Some knowledge</h1>
        <p>20:00 - 20;00</p>
        <hr className='w-[90%] mx-[5%] my-6'/>
        <p className='text-gray-500 font-extralight text-lg text-justify leading-9 mx-[3%]'>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
        <hr className='w-[90%] mx-[5%] my-6'/>
        <h1 className='text-2xl font-serif font-bold'>Skill:</h1> 
        {
          languageList.map((item, index) => (
            <div className='my-5' key={item.id}> 
              <div className='cursor-pointer flex justify-between text-lg font-bold' onClick={()=> showDetail !== item.id ? setShowDetail(item.id) : setShowDetail(0)}>
                <p className=''>
                  {item.icon}
                  <span>{item.languageName}</span> 
                </p> 
                {
                    showDetail === item.id
                    ? <i className="uil uil-angle-up text-[#09aca6]"></i>
                    : <i className="uil uil-angle-down text-[#09aca6]"></i>
                  }
              </div>
              {
                showDetail === item.id && item.list.map(item => (
                  <p key={item.id} className='relative mx-5 my-4 after:w-4/5 after:h-2 after:bg-slate-400 after:absolute after:top-1/2 after:mx-4 after:rounded-lg'>
                    {item.name}
                    <span className={`w-[${item.percent}] h-2 absolute top-1/2 bg-slate-800 mx-4 rounded-lg z-20`}></span>  
                  </p>
                ))
              } 
            </div> 
          ))
        }
        
      </div> 
      <div className=' my-14'>
        <div className='p-10 w-[570px] mx-auto h-[650px] relative'> 
          <img className='absolute left-[20%] w-[25%] h-auto object-cover rounded-full shadow-lg shadow-[#09aca6]' src={JavascriptImage} />
          <img className='absolute top-[35%] left-[20%] w-[14%] h-auto object-cover rounded-full shadow-lg shadow-[#09aca6]' src={ReactImage}/>
          <img className='absolute top-[48%] left-[30%] w-[18%] h-auto object-cover rounded-full shadow-lg bg-white shadow-[#09aca6]' src={NodejsImage}/>
          <img className='absolute top-[40%] right-[2%] w-[20%] h-auto object-cover rounded-full shadow-lg bg-white shadow-[#09aca6]' src={TailwindCSSImage}/>
          
          <img className='absolute top-[5%] right-[10%] w-[20%] h-auto object-cover rounded-full shadow-lg bg-green-800 shadow-[#09aca6]' src={Django}/> 
        <img className='absolute top-[15%] left-[35%] w-1/2' src={Basic} />
           
        </div>
      </div>
    </div>
  )
}

export default Knowledge