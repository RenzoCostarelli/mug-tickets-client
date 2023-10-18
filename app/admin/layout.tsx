'use client'
import { useSession } from 'next-auth/react';
import '../styles/global.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BackButton from '../components/back-button';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {data: session} = useSession();
  const router = useRouter();
  return (
    <>
        {/* session && (
          <ul style={{
            minWidth: '10rem',
          }}>
            <li>
              <button 
                type="button"
                style={{
                  color: '#e4e4e4',
                  background: 'transparent',
                  border: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 16
                }}
                onClick={() => router.back()}>
                  <svg style={{
                    paddingRight: 5
                  }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path fill='#e4e4e4' d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg> 
                    Back</button>
            </li>
            <li>
                <Link style={{
                    color: '#e4e4e4'
                  }}
                  href={`/admin`}>Eventos</Link>
            </li>
            <li>                           
                <Link style={{
                    color: '#e4e4e4'
                  }}
                  href={`/admin/eventos/`}>Crear Evento</Link>
            </li>
            <li>
                <Link style={{
                    color: '#e4e4e4'
                  }}
                  href={`/admin/validar/`}>Qr Scan</Link>                    
            </li>
          </ul>
                ) */}
                {/* { session && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingTop: '2rem'
                  }}>
                    <BackButton />
                  </div>
                )} */}
        {children}
    </>
  )
}