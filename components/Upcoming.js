'use client' ;
import { useState } from 'react' ; 
import Home from '@/components/Home' ;
import '@/styles/upcoming.css'
const sessionTitle = 'Upcoming Sessions '

function Upcoming({isVisible , setIsVisible}) {
    // const [open , setOpen] =  useState(true)
    const [visible, setVisible] = useState(true)

    if (!open) {
        return null ;
    }

    return (
     <div className = 'upcoming_content'>
        <h2>{sessionTitle}</h2>

    {visible ? (  
   <div className="upcoming_styles1"> 

      
      <Home>

      
        <h3>Kickstart with React Personal Intro</h3>
        <p>Tailored guidance for total beginners in React.</p> 
        <code>Nov 1, 2023</code>
      

        <div className = 'cancel_btn'>
          <span onClick={() => setVisible(false)}>Cancel</span> 
        </div>
      </Home>
    </div>
    

     ) : null}

       <div className = 'upcoming_styles2'>

        <Home>
            <h3>React Component Best Practices</h3>
            <p>Optimize and refactor your components.</p>
            <code>Nov 7, 2023 </code>
        </Home>
        
        <div>
        <span>Cancel</span>
        </div>
       </div>

     <Home>
        <button className = 'close_btn' onClick = {() => setIsVisible(false)}>Close</button>
     </Home> 
    </div>

   
   
   
    )
}
export default Upcoming