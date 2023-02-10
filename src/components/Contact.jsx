import React from 'react'

function Contact() { 
  return (
    <div id="contact" className='scrollBar bg-[#383838] relative h-[960px] w-full py-10 px-[10%] 
                                  after:w-10 after:h-10 after:mx-[40%] after:rotate-[136deg] after:absolute after:bg-[#09aca6] after:-top-5 after:z-10'>
        
        <div className='absolute text-white mx-[40.6%] -top-1 z-20 text-xl'><i class="uil uil-calling"></i></div>
        
        <div className='flex justify-between'> 
          <div className='text-white shadow-md shadow-[#09aca6] w-1/2 m-[4%] rounded-xl px-[8%] pt-[4%]'>
            <h1>Contact Me </h1>
            <p>Get in touch </p>
            <p>sjksahfjjadofjoiadjoihjhjoij</p>
            <div className='flex justify-between'>
              <div className='grid font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-600'>
                <i class="uil uil-instagram-alt text-7xl"></i>
                _nhh.phuc_
              </div>
              <div className='relative after:w-1 after:h-full after:rounded-full after:bg-[#09aca6] after:absolute'></div>
              <div className='grid text-black font-bold'>
                <i class="uil uil-github text-7xl"></i>
                jihto
              </div>
            </div> 
            <div className='flex justify-between mt-[30%]'>
              <div className='grid font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-600'>
                <i class="uil uil-instagram-alt text-7xl"></i>
                _nhh.phuc_
              </div>
              <div className='relative after:w-1 after:h-full after:rounded-full after:bg-[#09aca6] after:absolute'></div>
              <div className='grid text-black font-bold'>
                <i class="uil uil-github text-7xl"></i>
                jihto
              </div>
            </div> 
          </div>
          <div className=' bg-white my-[4%] w-1/2 rounded-xl shadow-xl shadow-[#09aca6] px-[5%] pt-[5%]'>
            <h1 className='text-xl font-bold font-mono text-[#09aca6]'> Contact with me:</h1>
            <div className=''> 
                <input type="text" className='w-full border-spacing-x-7 shadow-xl rounded-full p-[3%] my-[3%] outline-none ' placeholder="Name..."/>
                <input type="text" className='w-full border-spacing-x-7 shadow-xl rounded-full p-[3%] my-[3%] outline-none ' placeholder="Email..."/>
                <input type="text" className='w-full border-spacing-x-7 shadow-xl rounded-full p-[3%] my-[3%] outline-none ' placeholder="Phone..."/>
                <textarea className='w-full border-spacing-x-7 shadow-xl rounded-full px-[3%] pt-[3%] my-[3%] outline-none ' placeholder="Message..."></textarea>
                <label for="file-input">
                  <i className="uil uil-file-upload-alt text-2xl"></i> 
                </label>
                <label for="file-input" className='border-b-2 cursor-pointer font-normal border-gray-900'>  
                  Add Attachment(.doc;.pdf)
                </label>
                <input type="file" id="file-input" className="hidden"/>
                <button className='w-full h-10 my-[8%] bg-[#09aca6] rounded-full text-white font-bold hover:bg-[#55cac6]'>Send</button>
            </div>
          </div> 
        </div>
        <div className='bg-[#09aca6] rounded-full py-[1%] px-[5%] text-white flex justify-between'>
          <p >Conteact me to start your campaign</p>
          <p><i class="uil uil-phone"></i> 0328749433</p>
          <p><i class="uil uil-envelope"></i> Nhhphuc1311@gmail.com</p>
        </div>
    </div>
  )
}

export default Contact