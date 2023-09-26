import a from './login.module.scss';
import { Suspense } from 'react';
import FormLogin from '@/app/components/form-login';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default function LoginAdmin() {
  
  return (
    <main  
      style={{
          textAlign: 'center',
          padding: '1rem',
          marginTop: '1rem',
          borderRadius: '10px'
      }}>          
      <div>
        <h2 style={{
          color: '#e4e4e4'
        }}>
          Login
        </h2>
      </div>      
        <FormLogin />      
    </main>
  );
}
