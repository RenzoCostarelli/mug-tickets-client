
// pagina con historial de tickets comprados + datos del usuario (nombre, apellido, etc)
// mostrar nombre de usuario logueado

import s from '@/app/page.module.scss';
import CardInfo from '@/app/components/card-info';
import DashboardFrom from '@/app/components/dashboard-event-form';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
  
export default async function Dashboard() {
    return(        
        <main>
            <Typography variant="h2">User Dashboard</Typography>
            <DashboardFrom/>            
        </main>
    )
}