import s from '../page.module.scss';
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
        <main style={{
                textAlign: 'center',
                padding: '2rem',
            }}>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <h2 style={{ 
                    marginBottom: 2, 
                    marginTop: 2 
                    }}>
                    Admin Dashboard
                </h2>
            </div>
            <ul style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                    marginTop: '2rem',
                    marginBottom: '2rem',
                    borderRadius: '10px',
                    border: '0.5px solid white'
                }}>
                    <li style={{
                        padding: '20px'
                    }}>
                        <Link 
                            href={`/admin`}>Eventos</Link>
                    </li>
                    <li style={{
                        padding: '20px'
                    }}>                           
                        <Link
                            href={`/admin/eventos/`}>Crear Evento</Link>
                    </li>
                    <li style={{
                        padding: '20px'
                    }}>
                        <Link                        
                            href={`/admin/validar/`}>Qr Scan</Link>                    
                    </li>
            </ul>
            <div style={{
                border: '0.5px solid white',
                borderRadius: '1rem',
                padding: '2rem 1rem',
            }}>
                <AdminEventsList da={ data }/>
            </div>
        </main>           
    )
}
