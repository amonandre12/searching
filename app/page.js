import Home from '@/components/Home' ;
import Image from 'next/image'
import '@/styles/Home.css'
const title = "Our Mission : Succes"
const title1 = "What we do"
const title2 = "What we offer"
const title3 = "What you get "

function HomePage() {
    return(

        <div className = 'home'>
            <h1>{title}</h1>

            <div className = "home_page">
        <Home>
            <Image
            src="/students.jpg"
            alt="Picture of the author"
            width={120}
            height={100}
           style= {{'borderRadius' :'50%' , 'marginTop ' : "27px"}} 
          />
         </Home>

         <Home>
            <h4>{title1}</h4>
          <p>
        ReactMentoring is a platform for React developers to finnd mentors who can <br/>
        help them with their React-related questions and problems . We are a <br/>
        community of React developers who whant to help each other succeed.
          </p>
         </Home>
       </div>


        <div className = "home_page">
         <Home>
            <h4>{title2}</h4>
          <p>
        We offer a variety of mentoring sessions , from one-on-one mentoring to <br/>
        group mentoring sessions . Browse our avallable sessions to find the one <br/>
        that best fits your needs.
          </p>
         </Home>

           <Home>

            <Image
            src="/list.jpg"
            alt="Picture of the list"
            width={120}
            height={100}
           style= {{'borderRadius' :'50%' , 'marginTop ' : "20px"}} 
          />
         </Home>
       </div>

            <div className = "home_page">
        <Home>
           
            <Image
            src="/certificate.jpg"
            alt="Picture of the certifocate"
            width={120}
            height={100}
            style= {{'borderRadius' :'50%' , 'marginTop ' : "20px"}} 
          />
         </Home>

         <Home>
            <h4>{title3}</h4>
          <p>
        No matter if you are a beginner or an experienced React developer , we are<br/>
        here to help you level up your React skills 
          </p>
         </Home>
       </div>
        </div>
    )
}
export default HomePage