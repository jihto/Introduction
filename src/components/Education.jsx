import React from 'react'
import { eductionList } from '../constants'
function Education() { 
  return (
    <div id="education" className='scrollBar h-[960px] px-[10%] py-10 relative
                                    after:w-10 after:h-10 after:mx-[40%] after:rotate-[136deg] after:absolute after:bg-[#09aca6] after:-top-5 after:z-10'>
        <div className='absolute text-white mx-[40.6%] z-20 -top-1 text-xl'><i class="uil uil-star"></i></div> 
        <div className='absolute text-white mx-[40.6%] z-20 -bottom-1 text-xl'><i class="uil uil-star"></i></div> 
        
        <div className=' bg-white rounded-xl shadow-inner shadow-[#09aca6] py-16 px-8 grid grid-cols-[1fr,1fr] text-center'> 
            <h2 className='text-3xl mx-4 font-bold font-mono text-justify'>Education</h2>
            <h2 className='text-3xl mx-4 font-bold font-mono text-justify'>Experience</h2>

            <p className='text-justify mx-6 text-gray-400'>From 2002 to 2020</p>
            <p className='text-justify mx-6 text-gray-400'>From 2002 to 2020</p>
            <div className='max-w-[1200px] mt-10 mr-auto lg:ml-auto relative 
                            after:absolute after:top-1 after:w-1 after:h-5/6 after:bg-[#383838] after:rounded-lg after:z-10'>
                {
                    eductionList.map(item =>( 
                        <div key={item.id} className='my-8 relative after:w-6 after:h-6 after:left-[73px] after:top-8 after:rounded-full after:-left after:bg-[#09aca6] after:shadow-md after:shadow-[#09aca6] after:z-20 after:absolute'>
                            <div className={`bg-white leading-7 rounded-xl shadow-lg shadow-[#09aca6] relative pt-4 pb-10 px-4 cursor-default
                                            after:w-6 after:h-6 after:bg-white after:absolute after:top-8 after:rotate-45
                                            hover:bg-slate-200 hover:after:bg-slate-200 left-[140px]  
                                             ${item.sildeLeft ? "lg:left-[140px] lg:after:-left-3" : "lg:-left-[140px] lg:after:-right-3 "}`}
                            >
                                <h1 className='text-left font-bold text-xl font-mono'>2002</h1>
                                <p className='text-gray-500'>jhqdihasifhoiasfoih</p>
                            </div> 
                        </div> 
                    )) 
                }
            </div>

            <div className='max-w-[1200px] mt-10 mr-auto lg:ml-auto relative after:absolute after:top-1 after:w-1 after:h-5/6 after:bg-black after:rounded-lg'>
                {
                    eductionList.map(item =>( 
                        <div key={item.id} className='my-8 relative after:w-6 after:h-6 after:left-[73px] after:top-8 after:rounded-full after:-left after:bg-black after:border-2 after:border-slate-500 after:absolute'>
                            <div className={`bg-white leading-7 rounded-xl shadow-2xl border-2 border-gray-100 relative pt-4 pb-10 px-4 cursor-default
                                            after:w-6 after:h-6 after:bg-white after:absolute after:top-8 after:rotate-45
                                            hover:bg-slate-200 hover:after:bg-slate-200 left-[140px] 
                                             ${item.sildeLeft ? "lg:left-[140px] lg:after:-left-3" : " lg:-left-[140px] lg:after:-right-3 "}`}
                            >
                                <h1 className='text-left font-bold text-xl font-mono'>2002</h1>
                                <p className='text-gray-500'>jhqdihasifhoiasfoih</p>
                            </div> 
                        </div> 
                    )) 
                }
            </div>
        </div>
    </div>
  )
}

export default Education