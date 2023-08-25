
import Link from 'next/link';
import { handler } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import s from './login.module.scss';
import GoogleButton from '@/app/components/google-button';
import DashboardButton from '@/app/components/dashboard-button';

export default async function Login() {
  const session = await getServerSession(handler);
  
  return (
    <>        
        <div className={s.header}>
        </div>
        <div className={s.event_wrapper}>
            <div className={s.inner}>
                <div className={s.event_info}>                                 
                    {!session ? (
                            <>
                                <h1>Login</h1>
                                <GoogleButton/>
                            </>
                        ) : (
                            <>
                                <h1>Dashboard</h1> 
                                <DashboardButton/>
                            </>
                        )}
                </div>              
            </div>
        </div>         
    </>
  );
}