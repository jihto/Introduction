import React, { memo } from 'react'
import { useState } from 'react'
import { navLinks } from '../constants'
import Avatar from '../assets/myself.jpg'

function Menu({page,setPage}) {
    const [showProfile, setShowProfile] = useState(false); 
    const [showMenu, setShowMenu] = useState(false); 
     
    const handleShowProfile = (e)=>{
        setShowProfile(prev => !prev); 
    }
    return (
        <div className={`w-2/5 items-end fixed z-30 mx-[30%]  bottom-10 bg-[#4d4d4d] rounded-md ${showProfile || showMenu ? "px-5 pt-8" : ""}`} style={{transition: "0.3s"}}>
            <div className={` ${showProfile && showMenu ? "grid grid-cols-[1fr,2fr]" : ""}`} >
                {
                    showMenu 
                    ? <div>
                        {navLinks.map((item,index) => (
                            <a className={`border-2 p-[2%] border-solid border-[#4e4e4e]  rounded-lg cursor-default flex items-center justify-center m-1 px-2
                                            ${page === index ? "bg-white text-black" : "text-[#a7a7a7] bg-[#3e3e3e] hover:bg-[#4e4e4e] shadow-md border-[#4e4e4e]"}`} 
                                style={{transition: "0.3s"}}
                                onClick={() => setPage(index)} 
                                key={item.id}
                            >
                                {item.title}
                            </a> 
                        ))}  
                      </div>
                    : <></>
                } {
                showProfile 
                    ? <div className='grid lg:grid-cols-[0.5fr,1fr]'>
                        <div className='hidden lg:block lg:mr-1 lg:mb-2'>
                            <img className='object-cover w-full h-full rounded-lg' src={Avatar} alt="User" /> 
                        </div>
                        <div className='text-white border-x shadow-lg rounded-sm p-3 mb-2'>
                            <p>Name: Nguyễn Hồ Huy Phúc</p>
                            <p>Age: 20</p>
                            <p>Study: Hutech University (3rd year university)</p>
                            <p></p>
                        </div>
                      </div> 
                    : <></>
                } 
            </div>
            
            <div className='grid grid-cols-[1fr,2fr] '>   
                <div onClick={()=>setShowMenu(prev => !prev)} className={`text-white flex items-center justify-center text-2xl cursor-pointer lg:hidden ${showMenu ? "rotate-90" : ""}`}> &#9776;</div>
                <div className='hidden lg:block'>
                    <div className='bg-black rounded-lg m-[6px] h-[51px] grid grid-cols-[1fr,1fr,1fr,1fr,1fr] '> 
                        <p className='flex items-center justify-center text-[#a7a7a7] px-2'>Menu</p>
                            {navLinks.map((item,index) => (
                                <a className={`border-2 border-solid border-[#4e4e4e]  rounded-lg cursor-default flex items-center justify-center m-1 px-2
                                                ${page === index ? "bg-white text-black" : "text-[#a7a7a7] bg-[#3e3e3e] hover:bg-[#4e4e4e]"}`} 
                                    style={{transition: "0.3s"}}
                                    onClick={() =>{setPage(index); setShowProfile(false)}} 
                                    key={item.id}
                                    href={`#${item.id}`}
                                >
                                    {item.title}
                                </a> 
                            ))}  
                    </div>
                </div>
                <div className={`bg-black m-[6px] rounded-lg h-[52px]`}> 
                    <p className='text-white flex justify-center items-center h-[100%] cursor-pointer' onClick={handleShowProfile}>
                        Profile 
                    </p>
                </div> 
            
            </div>
        </div> 
    )
    }

export default memo(Menu);