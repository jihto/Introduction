import React from 'react'
import { Navbar,Menu, Introduction, Knowledge, Education, Contact } from './components'  

const App = () => { 
  const [scrollY, setScrollY] = React.useState(0);   
  const [page,setPage] = React.useState(0); 
  const handleChangeScrollY = (e) =>{ 
     let valueScroll = e.target.scrollTop; 
     if(valueScroll === 0)
      setPage(0);
     else if(valueScroll === 960)
      setPage(1);
     else if(valueScroll === 1822)
      setPage(2);
     else if(valueScroll === 2782)
      setPage(3);
  }
  return (
    <div className='allBody' onScroll={handleChangeScrollY}>
      {/* <Navbar /> */} 
      <Menu page={page} setPage={setPage}/>
      
      <Introduction/>
      <Knowledge  />
      <Education />
      <Contact />
    </div>
  )
}

export default App