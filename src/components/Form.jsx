import React, {useState} from 'react'

export default function Form() {
    // using normal var will not update ui however state does
    const [name, setName] = useState("Anubhav");
    const [email, setEmail] = useState("example@gmail.com");
    const [password, setPassword] = useState("1234");
    const [confirmPassword, setConfirmPassword] = useState("1234");

    const handleSubmit = (event) => {
        
    }

  return (
    <form>
        <input 
            type="text" 
            placeholder='Enter your name'
            value={name}
            onChange={(event)=>{
                
                setName(event.target.value)
            }}
        />
        <input 
            type="email" 
            placeholder='Enter your email' 
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
        />
        <input 
            type="password" 
            placeholder='Enter your password'
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
        />
        <input 
            type="text" 
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(event)=>{setConfirmPassword(event.target.value)}}
        />
        <button type='submit'>Sign Up</button>
    </form>
  )
}
