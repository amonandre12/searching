// The kickstart page 
// 'use client'
import {useState} from 'react' ;
import Image from 'next/image' ;
import Home from '@/components/Home' ;
import '@/styles/KickstartPage.css'
import KickstartForm from '@/components/KickstartForm' ;


   function  KickstartPage() { 
     const [showForm, setShowForm] = useState(false) ;
    //  const [close , setClose] = useState(true) 

    return (
        <div className = "container ">
            <div className = "kickstart_styles">
            <Home>
                 <Image 
                 src = '/kickstart-react.jpg'
                 alt = "The kickstart imaage"
                 width={320}
                 height={235}
                  />
            </Home>
            
            <Home>
                <h1>Kickstart with React: <br/> Personal Intro</h1>
                <h3>Nov 1 , 2023</h3> <br/>

                <button onClick = {() => setShowForm(true)} className = 'page_btn'>Book Session</button>
            </Home> 
          {showForm &&  <KickstartForm showForm = {showForm} setShowForm = {setShowForm}/>}
        </div>
            
             <div className = 'paragraph'>
             <Home>
                <p>
                    Starting with React can be dauting <br/>
                    Yet, with the right guidance. It can be an exhilarating journey .<br/>
                    In this session, we will begin by demestifying React&apos;s core philosophy. <br/>
                    What was React created ? <br/>
                    What problems does it solve in the world of web development ? <br/>
                    Together we&apos;ll delve into the virtual DOM , JSX , and component based architecture . <br/>
                    No need to worry about the jargon; I&apos;ll breack everything down step by step . <br/>
                    We&apos;ll touch on the importance of unidirectioanl data flow and the component lifecycle . <br/>
                    We&apos;ll set up a new React project Together . <br/>
                    By the end of our session, you will have a clear understanding and a roadmap tallored just for you , to aid .
                </p>
            </Home>
          </div>
        </div>
    )
}
export default KickstartPage