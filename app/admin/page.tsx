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
                <h2>Mis eventos</h2>
            </div>
            <ul>
                <li>
                    <Link href={`/admin`}>Eventos</Link>
                </li>
                <li>                           
                    <Link href={`/admin/eventos/`}>Crear Evento</Link>
                </li>
                <li>
                    <Link href={`/admin/validar/`}>Qr Scan</Link>                    
                </li>
            </ul>
            <div className={s.container}>
                <AdminEventsList da={ data }/>
            </div>
        </main>           
    )
}
