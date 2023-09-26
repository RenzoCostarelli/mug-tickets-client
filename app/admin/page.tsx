import s from './page.module.scss';
import AdminEventsList from '@/app/components/admin-event-list';
import Link from 'next/link';

async function getData() {
  const res = await fetch(`${process.env.apiUrl}/events`, { cache: 'no-store' });  
  if (!res.ok) {
    throw new Error('Failed to fetch home data');
  } 
  return res.json();
}

export default async function AdminDashboard() {
   
    const data = await getData();    

    return(
        <main className={s.main}>
            <div className={s.title}>
                <h2>MIS EVENTOS</h2>
            </div>            
            <div className={s.container}>
                <AdminEventsList da={ data }/>
            </div>
        </main>           
    )
}
