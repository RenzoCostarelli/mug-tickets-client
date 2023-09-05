
import FormLogin from '@/app/components/form-login';
import a from './login.module.scss';

export default function LoginAdmin() {
  
  return (
    <main>
      <div
        style={{
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '1rem',
            marginTop: '1rem',
            borderRadius: '10px'
        }}>            
        <div>
          <h2 style={{
            color: 'black'
          }}>
            Login
          </h2>
        </div>
        <FormLogin />            
      </div>        
    </main>
  );
}
