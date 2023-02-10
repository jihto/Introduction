import React from 'react'
import myself from '../assets/myself.jpg'

function Introduction() {
  return (
    <div id="home" className='scrollBar h-[960px] px-[10%] py-10 lg:flex'> 
      <div className='bg-white rounded-xl relative shadow-xl border-spacing-5 mr-4'>
        <img className='rounded-xl px-1 object-cover ' src={myself}/>
      </div>
 
      <div className=' bg-white rounded-xl shadow-xl border-spacing-5 py-16 px-8 text-center'> 
        <div className='font-mono text-7xl text-blue-400 font-bold'>
            Huy Phuc
            <p className='text-2xl my-[-2px]'>Developer software engineer</p>
        </div> 
        <div>
          Call Me: (+84) 32874933 (Zalo)
        </div>
        <div>
          <p className='text-justify m-6 text-lg text-gray-500 '>
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum '
          </p>
          <hr className='w-[90%] mx-[5%] my-6'/> 
        </div> 
      </div>
    </div>
  )
}

export default Introduction