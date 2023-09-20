'use client'
import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
  
export default function FormLogin() {

  

    const [data, setData] = useState<{email: string | null, password: string | null}>({
      email: null,
      password: null
    });

    /*const [hydrated, setHydrated] = useState<boolean>(false);
    useEffect(() => {
      setHydrated(true);
    }, []);
    if (!hydrated) {
      return null;
    }*/

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;        
      setData((values: any) => ({
        ...values,
        [name]: value
      }));        
    };
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, password } = data;
      await signIn("credentials", {
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
        
          <label htmlFor='email'>Email</label>
          <input style={{
              width: '100%',
              marginTop: '1rem',
              marginBottom: '1rem' 
            }}
            type="email"
            id="email"
            name="email"
            required
            onChange={handleInputChange}/>
        
          <label htmlFor='password'>Password</label>
          <input style={{
              width: '100%',
              marginTop: '1rem',
              marginBottom: '1rem' 
            }}
            type="password"
            id="password"
            name="password"
            required
            onChange={handleInputChange}/>       

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
