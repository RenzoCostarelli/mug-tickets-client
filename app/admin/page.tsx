import s from './page.module.scss';
import AdminEventsList from '@/app/components/admin-event-list';

export const metadata = {
    title: 'Ticketera | Admin panel',
    description: 'Plataforma de venta de tickets online del MUG',
  }

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
                <button>Agregar nuevo evento</button>
            </div>            
            <div className={s.container}>
                <AdminEventsList da={ data }/>
            </div>
        </main>           
    )
}
