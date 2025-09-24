// The component content 
// 'use client'
import {useState} from 'react'
import Image from 'next/image'
import Home from '@/components/Home' ;
import '@/styles/ComponentPage.css' ;

import ComponentForm from '@/components/ComponentForm' ;

function ComponentPage() {
    
    const [show , setShow] = useState(false) ;

    return(
         <div className = "container "> 

            <div className = "component_styles">
            <Home>
                 <Image 
                 src = '/blueprint-component.jpg'
                 alt = "The kickstart imaage"
                 width={320}
                 height={235}
                  />
            </Home>
            
            <Home>
                <h1>React Component Best: <br/> Pratices</h1>
                <h3>Nov 7 , 2023</h3> <br/>

                <button onClick = {() => setShow(true)}>Book Session</button>
            </Home> 
          
     {show &&  < ComponentForm show = {show} setShow = {setShow}/>}  
        </div>
            
             <div className = 'paragraph1'>
           <Home>
                <p>
                    Brink your existing componens and let&apos;s refactor them. Learn the best pratices to create scalable and <br/>
                    reusable components .
                </p>
            </Home>
          </div>

        </div>
    )
}
export default ComponentPage