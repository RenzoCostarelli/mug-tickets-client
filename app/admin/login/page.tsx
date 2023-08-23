import Link from 'next/link';
import { handler } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import FormLogin from '@/app/components/form-login';
import a from './login.module.scss';

export default async function LoginAdmin() {
  const session = await getServerSession(handler);
  
  return (
    <>        
      <div className={a.header}>
      </div>
      <div className={a.event_wrapper}>
        <div className={`${a.inner}`}>
                                 
            {
              !session ? (
                <div className={a.event_info}>
                  <h1>Login</h1> 
                  <FormLogin />
                </div>
              ) : (
                <div className={a.event_info}>
                  <h1>Dashboard</h1> 
                  <Link href={`/admin`}>Dashboard</Link>
                </div>              
              )
            }
          
        </div>
      </div>         
    </>
  );
}