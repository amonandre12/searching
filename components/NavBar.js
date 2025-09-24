// The navigation content 
'use client' ;
import {useState} from 'react' ;
import Upcoming from '@/components/Upcoming'
import Link from 'next/link' ;
import  '@/styles/navbar.css';

function NavBar() {
    const [isVisible , setIsVisible] = useState (false) 

    
    return (
        <>
          <header>
                    <div className="react_mentoring"> 
                        <Link href="/">ReactMentoring</Link>
                    </div>
              <nav>
                  
                  <Link href="/">Our Mission</Link>
                  <Link href="/browse">Browse Sessions</Link>
                  <button className ="upcoming" onClick = {() => setIsVisible(true)}>Upcoming Sessions</button>
                </nav>
            </header>

       {isVisible && <Upcoming isVisible = {isVisible} setIsVisible = {setIsVisible}/>}
       
        </>
    )
}
export default NavBar