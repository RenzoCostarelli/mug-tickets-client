'use client'
import {  useState } from 'react';
import { signIn } from 'next-auth/react';
import s from './page.module.scss';
  
export default function FormLogin() {
  

    const [data, setData] = useState<{email: string | null, password: string | null}>({
      email: null,
      password: null
    });

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
        className={s.form}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          maxWidth: '60vw'
        }}>
          <div className={s.form_control}>
            <label 
              htmlFor='email'
              className={s.label}>Email</label>
            <input style={{
                width: '100%',
                marginTop: '1rem',
                marginBottom: '1rem' 
              }}
              type="email"
              id="email"
              name="email"
              required
              autoComplete='on'
              onChange={handleInputChange}/>
          </div>
          <div className={s.form_control}>
            <label 
              htmlFor='password'
              className={s.label}>Password</label>
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
          </div>
        <button
            type="submit">
            Sign in
        </button>                  
      </form>         
    )
}
