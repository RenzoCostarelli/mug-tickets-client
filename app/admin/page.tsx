import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import s from '../page.module.scss';
import { Button } from '@mui/material';
import { Session, getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import AdminEventsList from '@/app/components/admin-event-list';
import { getToken } from "next-auth/jwt";
import Link from 'next/link';

async function getData() {
  const res = await fetch(`${process.env.apiUrl}/events`, {cache: 'no-store'});  
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
            <div
                style={{
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
            <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '15px',
                    borderRadius: '10px',
                }}>
                    <div style={{
                        padding: '20px'
                    }}>
                        <Link 
                            href={`/admin`}>Eventos</Link>
                    </div>
                    <div style={{
                        padding: '20px'
                    }}>                           
                        <Link
                            href={`/admin/eventos/`}>Crear Evento</Link>
                    </div>
                    <div style={{
                        padding: '20px'
                    }}>
                        <Link                        
                            href={`/admin/validar/`}>Qr Scan</Link>                    
                    </div>
            </div>
            <div style={{
                border: '0.5px solid black',
                borderRadius: 3,
                padding: '2rem 1 rem',
            }}>
                <AdminEventsList da={ data }/>
            </div>
        </main>           
    )
}
