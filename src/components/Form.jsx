import{useState, useRef} from 'react'

export default function Form() {
    // using normal var will not update ui however state does
    const [name, setName] = useState(); 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const testRef = useRef(null);

    console.log(testRef);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <form on onSubmit={{handleSubmit}}>
        <input 
            type="text" 
            placeholder='Enter your name'
            ref={testRef}
            
            onChange={(event)=>{setName(testRef.current.value)}}
        />
        <input 
            type="email" 
            placeholder='Enter your email' 
            ref={testRef}
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
