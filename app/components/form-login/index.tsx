'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
  
export default function FormLogin() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const data = await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: '/admin'
      });      
    };

    return (
      <form 
        onSubmit={ submitHandler }
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          maxWidth: '60vw'
        }}>            
        <input style={{
              width: '100%',
              marginTop: '1rem',
              marginBottom: '1rem' 
            }}
            type="email"
            id="email_field"
            className="form-control"
            //value={email}
            required
            onChange={(e) => setEmail(e.target.value)}/>
        <input  style={{
            width: '100%',
            marginTop: '1rem',
            marginBottom: '1rem' 
          }}
          type="password"
          id="password_field"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}/>

        <button style={{
            width: '100%',
            marginTop: 3, 
            marginBottom: 2
          }}
            type="submit">
            Sign in
        </button>                  
      </form>         
    )
}
