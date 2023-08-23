'use client'
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function FormLogin() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const data = await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: '/'
      });
      
    };

    return (        
        <>
        <form onSubmit={submitHandler}>                
            <div className="form-group">
                <label className="form-label" htmlFor="email_field">
                    Email
                </label>
                <br/>
                <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    required
                    placeholder="Tu email"
                    onChange={(e) => setEmail(e.target.value)}/>
            </div> 
                
            <div className="form-group">
                <label className="form-label" htmlFor="password_field">
                    Password
                </label>
                <br/>
                <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    required
                    placeholder="Tu pass"
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <hr/>    
            <button
                type="submit">
                Sign in
            </button>                  
        </form>
        </>
    )
}
