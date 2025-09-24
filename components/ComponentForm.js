
'use client'
import {useState} from 'react'
import '@/styles/KickstartForm.css' 

function ComponentForm  ({show,setShow}) { 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [color, setColor] = useState('')
    
    const [form , setForm] = useState(true) ;
    
   
  function handleClick(e) {
    e.preventDefault()

    if (name.trim() === '' || email.trim() === '') {
      setMessage('Entrez les champs svp !') 
      setColor('red')

      setTimeout(() => setMessage('') , 1000) ;
    } else {
      setMessage('Validation réussie !') 
      setColor('green') 

    console.log('nom :' , name)
    console.log('email :' , email)
       setTimeout (() => setForm (false) , 100) ; 
   setName('') ;
   setEmail('') ;

    }
  
  }
  
  if(!form) {
    return (
      <p>''</p>
    )
  }
    return(
        <div className = 'form_styles'>
             <form>
        <h3>Book Session</h3>

        <label htmlFor="name">YOUR NAME</label> <br/>
        <input
          id="name"
          type="text"
          value={name}
          required 
          onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <label htmlFor="email">YOUR EMAIL</label> <br/>
        <input
          id="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className='btn'>
          <button type="button" onClick={() => setShow(false)}>Cancel</button>
          <button type="submit" onClick={handleClick}>Book Session</button>
        </div>
      </form><br/>

      
       {message && <p style={{ color: color }}>{message}</p>}
    
    </div>
    )
}
export default ComponentForm 