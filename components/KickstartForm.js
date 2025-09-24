// The form content 
'use client'
import { useState } from 'react'
import '@/styles/KickstartForm.css'

function KickstartForm({ showForm, setShowForm }) { 
  const [name, setName] = useState('') ;
  const [email, setEmail] = useState('') ;
  const [message, setMessage] = useState('') ;
  const [color, setColor] = useState('') ;
  const [form , setForm] = useState(true) ;

  function handleClick(e) {
    e.preventDefault() ;

    if (name.trim() === '' || email.trim() === '') {
      setMessage('Entrez les champs svp !') 
      setColor('red')

      setTimeout(() => setMessage('') , 1000)
    } else {
      setMessage('Validation réussie !') 
      setColor('green') 

      setTimeout(() => setForm(false) , 1000)

      console.log('name' , name) ; 
      console.log('email' , email) ;

       setName('') ;
       setEmail('') ;
    }

  }
  
  if (!form) {
      return null ;
  }
  
  return (
    <div className="form_styles">
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
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          <button type="submit" onClick={handleClick}>Book Session</button>
        </div>
      </form> <br/>

      {message && <p style={{ color: color }}>{message}</p>}
    </div>
  )
}

export default KickstartForm
